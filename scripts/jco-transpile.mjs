#!/usr/bin/env node
// Thin CLI over @bytecodealliance/jco-transpile, covering the two jco
// commands this repository uses: `transpile` (component to ES module) and
// `types` (host-side type definitions for a WIT world). jco-transpile is
// the transpilation half of jco, published without the componentization
// toolchain (componentize-js, weval) that the full jco CLI drags in and
// nothing here runs.
//
// The library is resolved from the invoking package's node_modules — each
// npm tree pins its own toolchain version — so this script must be run
// with the package directory as the working directory, which is how every
// package.json script invokes it.
//
// The option spellings match the jco CLI's, and the library applies the
// same defaults the CLI did (name derivation, the wasi-shim map entries,
// output-path prefixing), so the generated trees are bit-identical to
// `jco transpile` / `jco types` output for these invocations.

import { createRequire } from "node:module";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

const require = createRequire(join(process.cwd(), "package.json"));
const { transpile, generateHostTypes, writeFiles } = await import(
  pathToFileURL(require.resolve("@bytecodealliance/jco-transpile")).href
);

const [command, path, ...rest] = process.argv.slice(2);
const { values } = parseArgs({
  args: rest,
  options: {
    name: { type: "string" },
    "async-mode": { type: "string" },
    map: { type: "string", multiple: true },
    "world-name": { type: "string" },
    "out-dir": { type: "string", short: "o" },
    // `types` only: WIT `@unstable` gates to enable, like `jco types
    // --feature` (repeatable).
    feature: { type: "string", multiple: true },
  },
});

switch (command) {
  case "transpile": {
    const map = Object.fromEntries(
      (values.map ?? []).map((entry) => {
        const eq = entry.indexOf("=");
        if (eq === -1) {
          throw new Error(`--map entry has no '=': ${entry}`);
        }
        return [entry.slice(0, eq), entry.slice(eq + 1)];
      }),
    );
    const { files } = await transpile(path, {
      name: values.name,
      asyncMode: values["async-mode"],
      map,
      outDir: values["out-dir"],
    });
    await writeFiles(files);
    break;
  }
  case "types": {
    const files = await generateHostTypes(path, {
      worldName: values["world-name"],
      asyncMode: values["async-mode"],
      outDir: values["out-dir"],
      features: values.feature,
    });
    await writeFiles(files);
    break;
  }
  default:
    throw new Error(`unknown command: ${command} (expected transpile or types)`);
}
