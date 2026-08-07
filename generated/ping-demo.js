"use components";
import { environment, error, exit as exit$1, insecureSeed as insecureSeed$1, instanceNetwork as instanceNetwork$1, ipNameLookup, monotonicClock, network, poll as poll$1, preopens, random, stderr, stdin, stdout, streams, tcp, tcpCreateSocket, terminalInput, terminalOutput, terminalStderr, terminalStdin, terminalStdout, types, udp, udpCreateSocket, wallClock } from '../shim.mjs';
const { getEnvironment } = environment;

if (getEnvironment=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getEnvironment', was 'getEnvironment' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Error: Error$1 } = error;

if (Error$1=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Error$1', was 'Error' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { exit } = exit$1;

if (exit=== undefined) {
  const err = new Error("unexpectedly undefined local import 'exit', was 'exit' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { insecureSeed } = insecureSeed$1;

if (insecureSeed=== undefined) {
  const err = new Error("unexpectedly undefined local import 'insecureSeed', was 'insecureSeed' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { instanceNetwork } = instanceNetwork$1;

if (instanceNetwork=== undefined) {
  const err = new Error("unexpectedly undefined local import 'instanceNetwork', was 'instanceNetwork' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { ResolveAddressStream,
  resolveAddresses } = ipNameLookup;

if (ResolveAddressStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'ResolveAddressStream', was 'ResolveAddressStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (resolveAddresses=== undefined) {
  const err = new Error("unexpectedly undefined local import 'resolveAddresses', was 'resolveAddresses' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { now,
  subscribeDuration,
  subscribeInstant } = monotonicClock;

if (now=== undefined) {
  const err = new Error("unexpectedly undefined local import 'now', was 'now' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (subscribeDuration=== undefined) {
  const err = new Error("unexpectedly undefined local import 'subscribeDuration', was 'subscribeDuration' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (subscribeInstant=== undefined) {
  const err = new Error("unexpectedly undefined local import 'subscribeInstant', was 'subscribeInstant' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Network } = network;

if (Network=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Network', was 'Network' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Pollable,
  poll } = poll$1;

if (Pollable=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Pollable', was 'Pollable' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (poll=== undefined) {
  const err = new Error("unexpectedly undefined local import 'poll', was 'poll' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getDirectories } = preopens;

if (getDirectories=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getDirectories', was 'getDirectories' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getRandomBytes,
  getRandomU64 } = random;

if (getRandomBytes=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getRandomBytes', was 'getRandomBytes' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (getRandomU64=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getRandomU64', was 'getRandomU64' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStderr } = stderr;

if (getStderr=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStderr', was 'getStderr' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStdin } = stdin;

if (getStdin=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStdin', was 'getStdin' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStdout } = stdout;

if (getStdout=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStdout', was 'getStdout' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { InputStream,
  OutputStream } = streams;

if (InputStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'InputStream', was 'InputStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (OutputStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'OutputStream', was 'OutputStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { TcpSocket } = tcp;

if (TcpSocket=== undefined) {
  const err = new Error("unexpectedly undefined local import 'TcpSocket', was 'TcpSocket' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { createTcpSocket } = tcpCreateSocket;

if (createTcpSocket=== undefined) {
  const err = new Error("unexpectedly undefined local import 'createTcpSocket', was 'createTcpSocket' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { TerminalInput } = terminalInput;

if (TerminalInput=== undefined) {
  const err = new Error("unexpectedly undefined local import 'TerminalInput', was 'TerminalInput' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { TerminalOutput } = terminalOutput;

if (TerminalOutput=== undefined) {
  const err = new Error("unexpectedly undefined local import 'TerminalOutput', was 'TerminalOutput' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStderr } = terminalStderr;

if (getTerminalStderr=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStderr', was 'getTerminalStderr' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStdin } = terminalStdin;

if (getTerminalStdin=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStdin', was 'getTerminalStdin' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStdout } = terminalStdout;

if (getTerminalStdout=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStdout', was 'getTerminalStdout' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Descriptor } = types;

if (Descriptor=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Descriptor', was 'Descriptor' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { IncomingDatagramStream,
  OutgoingDatagramStream,
  UdpSocket } = udp;

if (IncomingDatagramStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'IncomingDatagramStream', was 'IncomingDatagramStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (OutgoingDatagramStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'OutgoingDatagramStream', was 'OutgoingDatagramStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (UdpSocket=== undefined) {
  const err = new Error("unexpectedly undefined local import 'UdpSocket', was 'UdpSocket' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { createUdpSocket } = udpCreateSocket;

if (createUdpSocket=== undefined) {
  const err = new Error("unexpectedly undefined local import 'createUdpSocket', was 'createUdpSocket' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { now: now$1 } = wallClock;

if (now$1=== undefined) {
  const err = new Error("unexpectedly undefined local import 'now$1', was 'now' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


function promiseWithResolvers() {
  if (Promise.withResolvers) {
    return Promise.withResolvers();
  } else {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
}
const symbolDispose = Symbol.dispose || Symbol.for('dispose');
const symbolAsyncIterator = Symbol.asyncIterator;
const symbolIterator = Symbol.iterator;

const _debugLog = (...args) => {
  if (!globalThis?.process?.env?.JCO_DEBUG) { return; }
  console.debug(...args);
};
const ASYNC_DETERMINISM = 'random';
const GLOBAL_COMPONENT_MEMORY_MAP = new Map();
const CURRENT_TASK_META = {};

function _getGlobalCurrentTaskMeta(componentIdx) {
  if (componentIdx === null || componentIdx === undefined) {
    throw new Error("missing/invalid component idx");
  }
  const v = CURRENT_TASK_META[componentIdx];
  if (v === undefined || v === null) {
    return undefined;
  }
  return { ...v };
}


function _setGlobalCurrentTaskMeta(args) {
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  const { taskID, componentIdx } = args;
  return CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
}


function _withGlobalCurrentTaskMeta(args) {
  _debugLog('[_withGlobalCurrentTaskMeta()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (!args.fn) { throw new TypeError('missing fn'); }
  const { taskID, componentIdx, fn } = args;
  
  try {
    CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
    return fn();
  } catch (err) {
    _debugLog("error while executing sync callee/callback", {
      ...args,
      err,
    });
    throw err;
  } finally {
    CURRENT_TASK_META[componentIdx] = null;
  }
}

async function _withGlobalCurrentTaskMetaAsync(args) {
  _debugLog('[_withGlobalCurrentTaskMetaAsync()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (!args.fn) { throw new TypeError('missing fn'); }
  
  const { taskID, componentIdx, fn } = args;
  
  try {
    CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
    return await fn();
  } catch (err) {
    _debugLog("error while executing async callee/callback", {
      ...args,
      err,
    });
    throw err;
  } finally {
    CURRENT_TASK_META[componentIdx] = null;
  }
}

async function _clearCurrentTask(args) {
  _debugLog('[_clearCurrentTask()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  const { taskID, componentIdx } = args;
  
  const meta = CURRENT_TASK_META[componentIdx];
  if (!meta) { throw new Error(`missing current task meta for component idx [${componentIdx}]`); }
  
  if (meta.taskID !== taskID) {
    throw new Error(`task ID [${meta.taskID}] != requested ID [${taskID}]`);
  }
  if (meta.componentIdx !== componentIdx) {
    throw new Error(`component idx [${meta.componentIdx}] != requested idx [${componentIdx}]`);
  }
  
  CURRENT_TASK_META[componentIdx] = null;
}

function lookupMemoriesForComponent(args) {
  const { componentIdx } = args ?? {};
  if (args.componentIdx === undefined) { throw new TypeError("missing component idx"); }
  
  const metas = GLOBAL_COMPONENT_MEMORY_MAP.get(componentIdx);
  if (!metas) { return []; }
  
  if (args.memoryIdx === undefined) {
    return Object.values(metas);
  }
  
  const meta = metas[args.memoryIdx];
  return meta?.memory;
}

function registerGlobalMemoryForComponent(args) {
  const { componentIdx, memory, memoryIdx } = args ?? {};
  if (componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (memory === undefined && memoryIdx === undefined) { throw new TypeError('missing both memory & memory idx'); }
  let inner = GLOBAL_COMPONENT_MEMORY_MAP.get(componentIdx);
  if (!inner) {
    inner = {};
    GLOBAL_COMPONENT_MEMORY_MAP.set(componentIdx, inner);
  }
  
  inner[memoryIdx] = { memory, memoryIdx, componentIdx };
}

class RepTable {
  // Sentinel marking a freed slot; the freelist link for a freed slot
  // lives in the odd cell. This keeps get()/contains()/remove() on freed
  // reps well-defined (previously they returned/corrupted freelist links).
  static FREE = Symbol('RepTable.free');
  
  #data = [0, null];
  #size = 0;
  #target;
  
  constructor(args) {
    this.target = args?.target;
  }
  
  data() { return this.#data; }
  
  insert(val) {
    _debugLog('[RepTable#insert()] args', { val, target: this.target });
    const freeIdx = this.#data[0];
    if (freeIdx === 0) {
      this.#data.push(val);
      this.#data.push(null);
      const rep = (this.#data.length >> 1) - 1;
      _debugLog('[RepTable#insert()] inserted', { val, target: this.target, rep });
      this.#size += 1;
      return rep;
    }
    const placementIdx = freeIdx << 1;
    if (this.#data[placementIdx] !== RepTable.FREE) {
      throw new Error('corrupt rep table freelist: head does not point at a freed slot');
    }
    this.#data[0] = this.#data[placementIdx + 1];
    this.#data[placementIdx] = val;
    this.#data[placementIdx + 1] = null;
    _debugLog('[RepTable#insert()] inserted', { val, target: this.target, rep: freeIdx });
    this.#size += 1;
    return freeIdx;
  }
  
  get(rep) {
    _debugLog('[RepTable#get()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during get, (cannot be 0)'); }
    
    const baseIdx = rep << 1;
    const val = this.#data[baseIdx];
    if (val === RepTable.FREE) { return undefined; }
    return val;
  }
  
  contains(rep) {
    _debugLog('[RepTable#contains()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during contains, (cannot be 0)'); }
    
    const baseIdx = rep << 1;
    const val = this.#data[baseIdx];
    return val !== RepTable.FREE && !!val;
  }
  
  remove(rep) {
    _debugLog('[RepTable#remove()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during remove, (cannot be 0)'); }
    if (this.#data.length === 2) { throw new Error('invalid'); }
    
    const baseIdx = rep << 1;
    if (baseIdx >= this.#data.length) {
      throw new Error(`invalid rep [${rep}] during remove, out of range`);
    }
    const val = this.#data[baseIdx];
    if (val === RepTable.FREE) {
      throw new Error(`double removal of rep [${rep}] (already freed)`);
    }
    
    this.#data[baseIdx] = RepTable.FREE;
    this.#data[baseIdx + 1] = this.#data[0];
    this.#data[0] = rep;
    this.#size -= 1;
    
    return val;
  }
  
  size() { return this.#size; }
  
  clear() {
    _debugLog('[RepTable#clear()] args', { rep, target: this.target });
    this.#data = [0, null];
  }
}
const _coinFlip = () => { return Math.random() > 0.5; };
let SCOPE_ID = 0;
const I32_MIN = -2_147_483_648;

const I32_MAX= 2_147_483_647;


function _isValidNumericPrimitive(ty, v) {
  if (v === undefined || v === null) { return false; }
  switch (ty) {
    case 'bool':
    return v === 0 || v === 1;
    break;
    case 'u8':
    return v >= 0 && v <= 255;
    break;
    case 's8':
    return v >= -128 && v <= 127;
    break;
    case 'u16':
    return v >= 0 && v <= 65535;
    break;
    case 's16':
    return v >= -32768 && v <= 32767;
    case 'u32':
    return v >= 0 && v <= 4_294_967_295;
    case 's32':
    return v >= -2_147_483_648 && v <= 2_147_483_647;
    case 'u64':
    return typeof v === 'bigint' && v >= 0 && v <= 18_446_744_073_709_551_615n;
    case 's64':
    return typeof v === 'bigint' && v >= -9223372036854775808n && v <= 9223372036854775807n;
    break;
    case 'f32':
    case 'f64': return typeof v === 'number';
    default:
    return false;
  }
  return true;
}

function _requireValidNumericPrimitive(ty, v) {
  if (v === undefined  || v === null || !_isValidNumericPrimitive(ty, v)) {
    throw new TypeError(`invalid ${ty} value [${v}]`);
  }
  return true;
}

const _typeCheckValidI32 = (n) => typeof n === 'number' && n >= I32_MIN && n <= I32_MAX;


const _typeCheckAsyncFn= (f) => {
  return f instanceof ASYNC_FN_CTOR;
};

let RESOURCE_CALL_BORROWS = [];const ASYNC_FN_CTOR = (async () => {}).constructor;

function clearCurrentTask(componentIdx, taskID) {
  _debugLog('[clearCurrentTask()] args', { componentIdx, taskID });
  
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing/invalid component instance index while ending current task');
  }
  
  const tasks = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  if (!tasks || !Array.isArray(tasks)) {
    throw new Error('missing/invalid tasks for component instance while ending task');
  }
  if (tasks.length == 0) {
    throw new Error(`no current tasks for component instance [${componentIdx}] while ending task`);
  }
  
  if (taskID !== undefined) {
    const last = tasks[tasks.length - 1];
    if (last.id !== taskID) {
      // throw new Error('current task does not match expected task ID');
      return;
    }
  }
  
  ASYNC_CURRENT_TASK_IDS.pop();
  ASYNC_CURRENT_COMPONENT_IDXS.pop();
  
  const taskMeta = tasks.pop();
  return taskMeta.task;
}

const CURRENT_TASK_MAY_BLOCK= globalThis.WebAssembly ? new globalThis.WebAssembly.Global({ value: 'i32', mutable: true }, 0) : false;

const ASYNC_CURRENT_TASK_IDS = [];
const ASYNC_CURRENT_COMPONENT_IDXS = [];

function unpackCallbackResult(result) {
  if (!(_typeCheckValidI32(result))) { throw new Error('invalid callback return value [' + result + '], not a valid i32'); }
  const eventCode = result & 0xF;
  if (eventCode < 0 || eventCode > 3) {
    throw new Error('invalid async return value [' + eventCode + '], outside callback code range');
  }
  if (result < 0 || result >= 2**32) { throw new Error('invalid callback result'); }
  // TODO: table max length check?
  const waitableSetRep = result >> 4;
  return [eventCode, waitableSetRep];
}

class AsyncSubtask {
  static _ID = 0n;
  
  static State = {
    STARTING: 0,
    STARTED: 1,
    RETURNED: 2,
    CANCELLED_BEFORE_STARTED: 3,
    CANCELLED_BEFORE_RETURNED: 4,
  };
  
  #id;
  #state = AsyncSubtask.State.STARTING;
  #componentIdx;
  
  #parentTask;
  #childTask = null;
  
  #dropped = false;
  #cancelRequested = false;
  
  #memoryIdx = null;
  #lenders = null;
  
  #waitable = null;
  
  #callbackFn = null;
  #callbackFnName = null;
  
  #postReturnFn = null;
  #onProgressFn = null;
  #pendingEventFn = null;
  
  #callMetadata = {};
  
  #resolved = false;
  
  #onResolveHandlers = [];
  #onStartHandlers = [];
  
  #result = null;
  #resultSet = false;
  
  fnName;
  target;
  isAsync;
  isManualAsync;
  
  constructor(args) {
    if (typeof args.componentIdx !== 'number') {
      throw new Error('invalid componentIdx for subtask creation');
    }
    this.#componentIdx = args.componentIdx;
    
    this.#id = ++AsyncSubtask._ID;
    this.fnName = args.fnName;
    
    if (!args.parentTask) { throw new Error('missing parent task during subtask creation'); }
    this.#parentTask = args.parentTask;
    
    if (args.childTask) { this.#childTask = args.childTask; }
    
    if (args.memoryIdx) { this.#memoryIdx = args.memoryIdx; }
    
    if (!args.waitable) { throw new Error("missing/invalid waitable"); }
    this.#waitable = args.waitable;
    
    if (args.callMetadata) { this.#callMetadata = args.callMetadata; }
    
    this.#lenders = [];
    this.target = args.target;
    this.isAsync = args.isAsync;
    this.isManualAsync = args.isManualAsync;
  }
  
  id() { return this.#id; }
  parentTaskID() { return this.#parentTask?.id(); }
  childTaskID() { return this.#childTask?.id(); }
  state() { return this.#state; }
  
  waitable() { return this.#waitable; }
  waitableRep() { return this.#waitable.idx(); }
  
  join() { return this.#waitable.join(...arguments); }
  getPendingEvent() { return this.#waitable.getPendingEvent(...arguments); }
  hasPendingEvent() { return this.#waitable.hasPendingEvent(...arguments); }
  setPendingEvent() { return this.#waitable.setPendingEvent(...arguments); }
  
  setTarget(tgt) { this.target = tgt; }
  
  getResult() {
    if (!this.#resultSet) { throw new Error("subtask result has not been set") }
    return this.#result;
  }
  setResult(v) {
    if (this.#resultSet) { throw new Error("subtask result has already been set"); }
    this.#result = v;
    this.#resultSet = true;
  }
  
  componentIdx() { return this.#componentIdx; }
  
  setChildTask(t) {
    if (!t) { throw new Error('cannot set missing/invalid child task on subtask'); }
    if (this.#childTask) { throw new Error('child task is already set on subtask'); }
    if (this.#parentTask === t) { throw new Error("parent cannot be child"); }
    this.#childTask = t;
  }
  getChildTask(t) { return this.#childTask; }
  
  getParentTask() { return this.#parentTask; }
  
  setCallbackFn(f, name) {
    if (!f) { return; }
    if (this.#callbackFn) { throw new Error('callback fn can only be set once'); }
    this.#callbackFn = f;
    this.#callbackFnName = name;
  }
  
  getCallbackFnName() {
    if (!this.#callbackFn) { return undefined; }
    return this.#callbackFn.name;
  }
  
  setPostReturnFn(f) {
    if (!f) { return; }
    if (this.#postReturnFn) { throw new Error('postReturn fn can only be set once'); }
    this.#postReturnFn = f;
  }
  
  setOnProgressFn(f) {
    if (this.#onProgressFn) { throw new Error('on progress fn can only be set once'); }
    this.#onProgressFn = f;
  }
  
  isNotStarted() {
    return this.#state == AsyncSubtask.State.STARTING;
  }
  
  cancellationRequested() { return this.#cancelRequested; }
  
  // Request cooperative cancellation of this subtask, on behalf of the
  // supertask (i.e. `canon subtask.cancel`).
  //
  // If the callee is another guest task, the request is delivered to it and
  // the callee confirms via `task.cancel` (or still resolves via `task.return`).
  //
  // If the callee is a host function there is (currently) no host-side
  // cancellation hook, so the pending call is treated as immediately
  // cancelled -- consistent with hosts being expected to resolve
  // cancellation promptly -- and any later host resolution is discarded
  // (see `AsyncTask#onResolve`).
  requestCancellation() {
    _debugLog('[AsyncSubtask#requestCancellation()] args', {
      componentIdx: this.#componentIdx,
      subtaskID: this.#id,
      state: this.#state,
      childTaskID: this.childTaskID(),
      fnName: this.fnName,
    });
    if (this.#cancelRequested) {
      throw new Error('cancellation has already been requested for this subtask');
    }
    this.#cancelRequested = true;
    
    if (this.#resolved) { return; }
    
    if (this.#childTask) {
      this.#childTask.requestCancellation();
      return;
    }
    
    this.onResolve(null);
  }
  
  registerOnStartHandler(f) {
    this.#onStartHandlers.push(f);
  }
  
  onStart(args) {
    _debugLog('[AsyncSubtask#onStart()] args', {
      componentIdx: this.#componentIdx,
      subtaskID: this.#id,
      parentTaskID: this.parentTaskID(),
      fnName: this.fnName,
      args,
    });
    
    if (this.#onProgressFn) { this.#onProgressFn(); }
    
    this.#state = AsyncSubtask.State.STARTED;
    
    let result;
    
    // If we have been provided a helper start function as a result of
    // component fusion performed by wasmtime tooling, then we can call that helper and lifts/lowers will
    // be performed for us.
    //
    // See also documentation on `HostIntrinsic::PrepareCall`
    //
    if (this.#callMetadata.startFn) {
      result = this.#callMetadata.startFn.apply(null, args?.startFnParams ?? []);
    }
    
    return result;
  }
  
  
  registerOnResolveHandler(f) {
    this.#onResolveHandlers.push(f);
  }
  
  reject(subtaskErr) {
    this.#childTask?.reject(subtaskErr);
  }
  
  onResolve(subtaskValue) {
    _debugLog('[AsyncSubtask#onResolve()] args', {
      componentIdx: this.#componentIdx,
      subtaskID: this.#id,
      isAsync: this.isAsync,
      childTaskID: this.childTaskID(),
      parentTaskID: this.parentTaskID(),
      parentTaskFnName: this.#parentTask?.entryFnName(),
      fnName: this.fnName,
    });
    
    if (this.#resolved) {
      throw new Error('subtask has already been resolved');
    }
    
    if (this.#onProgressFn) { this.#onProgressFn(); }
    
    if (subtaskValue === null && this.#cancelRequested) {
      if (this.#state === AsyncSubtask.State.STARTING) {
        this.#state = AsyncSubtask.State.CANCELLED_BEFORE_STARTED;
      } else {
        if (this.#state !== AsyncSubtask.State.STARTED) {
          throw new Error('resolved subtask must have been started before cancellation');
        }
        this.#state = AsyncSubtask.State.CANCELLED_BEFORE_RETURNED;
      }
    } else {
      if (this.#state !== AsyncSubtask.State.STARTED) {
        throw new Error('resolved subtask must have been started before completion');
      }
      this.#state = AsyncSubtask.State.RETURNED;
    }
    
    this.setResult(subtaskValue);
    
    for (const f of this.#onResolveHandlers) {
      try {
        f(subtaskValue);
      } catch (err) {
        console.error("error during subtask resolve handler", err);
        throw err;
      }
    }
    
    const callMetadata = this.getCallMetadata();
    
    // TODO(fix): we should be able to easily have the caller's meomry
    // to lower into here, but it's not present in PrepareCall
    const memory = callMetadata.memory ?? this.#parentTask?.getReturnMemory() ?? lookupMemoriesForComponent({ componentIdx: this.#parentTask?.componentIdx() })[0];
    // NOTE: cancelled resolutions carry no value, so nothing is lowered
    const returned = this.#state === AsyncSubtask.State.RETURNED;
    if (returned && callMetadata && !callMetadata.returnFn && this.isAsync && callMetadata.resultPtr && memory) {
      const { resultPtr, realloc } = callMetadata;
      const lowers = callMetadata.lowers; // may have been updated in task.return of the child
      if (lowers && lowers.length > 0) {
        lowers[0]({
          componentIdx: this.#componentIdx,
          memory,
          realloc,
          vals: [subtaskValue],
          storagePtr: resultPtr,
          stringEncoding: callMetadata.stringEncoding,
        });
      }
    }
    
    this.#resolved = true;
    this.#parentTask.removeSubtask(this);
    
    if (!this.isAsync) {
      this.deliverResolve();
      const rep = this.waitableRep();
      if (rep) {
        try {
          const removed = this.#getComponentState().handles.remove(rep);
          if (removed !== this) {
            throw new Error("unexpectedly received non-self Subtask from handle removal");
          }
          this.drop();
        } catch (err) {
          _debugLog('[AsyncSubtask#onResolve()] failed to remove subtask after sync subtask completion', err);
        }
      }
    }
  }
  
  getStateNumber() { return this.#state; }
  isReturned() { return this.#state === AsyncSubtask.State.RETURNED; }
  
  getCallMetadata() { return this.#callMetadata; }
  
  isResolved() {
    if (this.#state === AsyncSubtask.State.STARTING
    || this.#state === AsyncSubtask.State.STARTED) {
      return false;
    }
    if (this.#state === AsyncSubtask.State.RETURNED
    || this.#state === AsyncSubtask.State.CANCELLED_BEFORE_STARTED
    || this.#state === AsyncSubtask.State.CANCELLED_BEFORE_RETURNED) {
      return true;
    }
    throw new Error('unrecognized internal Subtask state [' + this.#state + ']');
  }
  
  addLender(handle) {
    _debugLog('[AsyncSubtask#addLender()] args', { handle });
    if (!Number.isNumber(handle)) { throw new Error('missing/invalid lender handle [' + handle + ']'); }
    
    if (this.#lenders.length === 0 || this.isResolved()) {
      throw new Error('subtask has no lendors or has already been resolved');
    }
    
    handle.lends++;
    this.#lenders.push(handle);
  }
  
  deliverResolve() {
    _debugLog('[AsyncSubtask#deliverResolve()] args', {
      lenders: this.#lenders,
      parentTaskID: this.parentTaskID(),
      subtaskID: this.#id,
      childTaskID: this.childTaskID(),
      resolved: this.isResolved(),
      resolveDelivered: this.resolveDelivered(),
    });
    
    const cannotDeliverResolve = this.resolveDelivered() || !this.isResolved();
    if (cannotDeliverResolve) {
      throw new Error('subtask cannot deliver resolution twice, and the subtask must be resolved');
    }
    
    for (const lender of this.#lenders) {
      lender.lends--;
    }
    
    this.#lenders = null;
  }
  
  resolveDelivered() {
    _debugLog('[AsyncSubtask#resolveDelivered()] args', { });
    if (this.#lenders === null && !this.isResolved()) {
      throw new Error('invalid subtask state, lenders missing and subtask has not been resolved');
    }
    return this.#lenders === null;
  }
  
  drop() {
    _debugLog('[AsyncSubtask#drop()] args', {
      componentIdx: this.#componentIdx,
      parentTaskID: this.#parentTask?.id(),
      parentTaskFnName: this.#parentTask?.entryFnName(),
      childTaskID: this.#childTask?.id(),
      childTaskFnName: this.#childTask?.entryFnName(),
      subtaskFnName: this.fnName,
    });
    if (!this.#waitable) { throw new Error('missing/invalid inner waitable'); }
    if (!this.resolveDelivered()) {
      throw new Error('cannot drop subtask before resolve is delivered');
    }
    if (this.#waitable) { this.#waitable.drop() }
    this.#dropped = true;
  }
  
  #getComponentState() {
    const state = getOrCreateAsyncState(this.#componentIdx);
    if (!state) {
      throw new Error('invalid/missing async state for component [' + componentIdx + ']');
    }
    return state;
  }
  
  getWaitableHandleIdx() {
    _debugLog('[AsyncSubtask#getWaitableHandleIdx()] args', { });
    if (!this.#waitable) { throw new Error('missing/invalid waitable'); }
    return this.waitableRep();
  }
}

function _prepareCall(
memoryIdx,
getMemoryFn,
startFn,
returnFn,
callerComponentIdx,
calleeComponentIdx,
taskReturnTypeIdx,
calleeIsAsyncInt,
stringEncoding,
resultCountOrAsync,
) {
  _debugLog('[_prepareCall()]', {
    memoryIdx,
    callerComponentIdx,
    calleeComponentIdx,
    taskReturnTypeIdx,
    calleeIsAsyncInt,
    stringEncoding,
    resultCountOrAsync,
  });
  const argArray = [...arguments];
  
  // value passed in *may* be as large as u32::MAX which may be mangled into -2
  resultCountOrAsync >>>= 0;
  
  let isAsync = false;
  let hasResultPointer = false;
  if (resultCountOrAsync === 2**32 - 1) {
    // prepare async with no result (u32::MAX)
    isAsync = true;
    hasResultPointer = false;
  } else if (resultCountOrAsync === 2**32 - 2) {
    // prepare async with result (u32::MAX - 1)
    isAsync = true;
    hasResultPointer = true;
  }
  
  const currentCallerTaskMeta = getCurrentTask(callerComponentIdx);
  if (!currentCallerTaskMeta) {
    throw new Error('invalid/missing current task for caller during prepare call');
  }
  
  const currentCallerTask = currentCallerTaskMeta.task;
  if (!currentCallerTask) {
    throw new Error('unexpectedly missing task in meta for caller during prepare call');
  }
  
  if (currentCallerTask.componentIdx() !== callerComponentIdx) {
    throw new Error(`task component idx [${ currentCallerTask.componentIdx() }] !== [${ callerComponentIdx }] (callee ${ calleeComponentIdx })`);
  }
  
  let getCalleeParamsFn;
  let resultPtr = null;
  let directParamsArr;
  if (hasResultPointer) {
    directParamsArr = argArray.slice(10, argArray.length - 1);
    getCalleeParamsFn = () => directParamsArr;
    resultPtr = argArray[argArray.length - 1];
  } else {
    directParamsArr = argArray.slice(10);
    getCalleeParamsFn = () => directParamsArr;
  }
  
  let encoding;
  switch (stringEncoding) {
    case 0:
    encoding = 'utf8';
    break;
    case 1:
    encoding = 'utf16';
    break;
    case 2:
    encoding = 'compact-utf16';
    break;
    default:
    throw new Error(`unrecognized string encoding enum [${stringEncoding}]`);
  }
  
  const subtask = currentCallerTask.createSubtask({
    componentIdx: callerComponentIdx,
    parentTask: currentCallerTask,
    isAsync,
    callMetadata: {
      getMemoryFn,
      memoryIdx,
      resultPtr,
      returnFn,
      startFn,
      stringEncoding,
    }
  });
  
  const [newTask, newTaskID] = createNewCurrentTask({
    componentIdx: calleeComponentIdx,
    isAsync,
    getCalleeParamsFn,
    entryFnName: [
    'task',
    subtask.getParentTask().id(),
    'subtask',
    subtask.id(),
    'new-prepared-async-task'
    ].join('/'),
    stringEncoding,
  });
  newTask.setParentSubtask(subtask);
  newTask.setReturnMemoryIdx(memoryIdx);
  newTask.setReturnMemory(getMemoryFn);
  subtask.setChildTask(newTask);
  
  newTask.subtaskMeta = {
    subtask,
    calleeComponentIdx,
    callerComponentIdx,
    getCalleeParamsFn,
    stringEncoding,
    isAsync,
  };
  
  _setGlobalCurrentTaskMeta({
    taskID: newTask.id(),
    componentIdx: newTask.componentIdx(),
  });
}

function _asyncStartCall(args, callee, paramCount, resultCount, flags) {
  const componentIdx = ASYNC_CURRENT_COMPONENT_IDXS.at(-1);
  
  const globalTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
  if (!globalTaskMeta) { throw new Error('missing global current task globalTaskMeta'); }
  const taskID = globalTaskMeta.taskID;
  
  _debugLog('[_asyncStartCall()] args', { args, componentIdx });
  const { getCallbackFn, callbackIdx, getPostReturnFn, postReturnIdx } = args;
  
  const preparedTaskMeta = getCurrentTask(componentIdx, taskID);
  if (!preparedTaskMeta) { throw new Error('unexpectedly missing current task'); }
  
  const preparedTask = preparedTaskMeta.task;
  if (!preparedTask) { throw new Error('unexpectedly missing current task'); }
  if (!preparedTask.subtaskMeta) { throw new Error('missing subtask meta from prepare'); }
  
  const {
    subtask,
    returnMemoryIdx,
    getReturnMemoryFn,
    callerComponentIdx,
    calleeComponentIdx,
    getCalleeParamsFn,
    isAsync,
    stringEncoding,
  } = preparedTask.subtaskMeta;
  if (!subtask) { throw new Error("missing subtask from cstate during async start call"); }
  if (calleeComponentIdx !== preparedTask.componentIdx()) {
    throw new Error(`meta callee idx [${calleeComponentIdx}] != current task idx [${preparedTask.componentIdx()}] during async start call`);
  }
  if (calleeComponentIdx !== componentIdx) {
    throw new Error("mismatched componentIdx for async start call (does not match prepare)");
  }
  
  const argArray = [...arguments];
  
  if (resultCount < 0 || resultCount > 1) { throw new Error('invalid/unsupported result count'); }
  
  const callbackFnName = 'callback_' + callbackIdx;
  const callbackFn = getCallbackFn();
  preparedTask.setCallbackFn(callbackFn, callbackFnName);
  preparedTask.setPostReturnFn(getPostReturnFn());
  
  if (resultCount < 0 || resultCount > 1) {
    throw new Error(`unsupported result count [${ resultCount }]`);
  }
  
  // NOTE: `params` are the *caller's* lowered core args captured during
  // PrepareCall, while `paramCount` describes the *callee's* lifted core
  // signature. The two intentionally differ whenever the caller spilled
  // its arguments to memory (async lowers pass a single pointer for
  // functions with more than MAX_FLAT_ASYNC_PARAMS flat params): the
  // fused [async-start] adapter (`startFn`, invoked via
  // `subtask.onStart()` below) converts the former into the latter.
  const params = preparedTask.getCalleeParams();
  
  const callerComponentState = getOrCreateAsyncState(subtask.componentIdx());
  
  const calleeComponentState = getOrCreateAsyncState(preparedTask.componentIdx());
  const calleeBackpressure = calleeComponentState.hasBackpressure();
  
  // Set up a handler on subtask completion to lower results from the call into the caller's memory region.
  //
  // NOTE: during fused guest->guest calls this handler is triggered, but does not actually perform
  // lowering manually, as fused modules provider helper functions that can
  subtask.registerOnResolveHandler((res) => {
    _debugLog('[_asyncStartCall()] handling subtask result', { res, subtaskID: subtask.id() });
    
    // Cancelled resolutions carry no value; there is nothing to lower
    if (!subtask.isReturned()) { return; }
    
    let subtaskCallMeta = subtask.getCallMetadata();
    
    // NOTE: in the case of guest -> guest async calls, there may be no memory/realloc present,
    // as the host will intermediate the value storage/movement between calls.
    //
    // We can simply take the value and lower it as a parameter
    if (subtaskCallMeta.memory || subtaskCallMeta.realloc) {
      throw new Error("call metadata unexpectedly contains memory/realloc for guest->guest call");
    }
    
    const callerTask = subtask.getParentTask();
    const calleeTask = preparedTask;
    const callerMemoryIdx = callerTask.getReturnMemoryIdx();
    const callerComponentIdx = callerTask.componentIdx();
    
    // If a helper function was provided we are likely in a fused guest->guest call,
    // and the result will be delivered (lift/lowered) via helper function
    if (subtaskCallMeta && subtaskCallMeta.returnFn) {
      _debugLog('[_asyncStartCall()] return function present while handling subtask result, returning early (skipping lower)', {
        calleeTaskID: calleeTask.id(),
        calleeComponentIdx,
      });
      
      // TODO: centralize calling of returnFn to *one place* (if possible)
      if (subtaskCallMeta.returnFnCalled) { return; }
      
      const res = subtaskCallMeta.returnFn.apply(null, [subtaskCallMeta.resultPtr]);
      
      _debugLog('[_asyncStartCall()] finished calling return fn', {
        calleeTaskID: calleeTask.id(),
        calleeComponentIdx,
        res,
      });
      
      return;
    }
    
    // If there is no where to lower the results, exit early
    if (!subtaskCallMeta.resultPtr) {
      _debugLog('[_asyncStartCall()] no result ptr during subtask result handling, returning early (skipping lower)');
      return;
    }
    
    let callerMemory;
    if (callerMemoryIdx !== null && callerMemoryIdx !== undefined) {
      callerMemory = lookupMemoriesForComponent({ componentIdx: callerComponentIdx, memoryIdx: callerMemoryIdx });
    } else {
      const callerMemories = lookupMemoriesForComponent({ componentIdx: callerComponentIdx });
      if (callerMemories.length !== 1) { throw new Error(`unsupported amount of caller memories`); }
      callerMemory = callerMemories[0];
    }
    
    if (!callerMemory) {
      _debugLog('[_asyncStartCall()] missing memory', { subtaskID: subtask.id(), res });
      throw new Error(`missing memory for to guest->guest call result (subtask [${subtask.id()}])`);
    }
    
    const lowerFns = calleeTask.getReturnLowerFns();
    if (!lowerFns || lowerFns.length === 0) {
      _debugLog('[_asyncStartCall()] missing result lower metadata for guest->guest call', { subtaskID: subtask.id() });
      throw new Error(`missing result lower metadata for guest->guest call (subtask [${subtask.id()}])`);
    }
    
    if (lowerFns.length !== 1) {
      _debugLog('[_asyncStartCall()] only single result reportetd for guest->guest call', { subtaskID: subtask.id() });
      throw new Error(`only single result supported for guest->guest calls (subtask [${subtask.id()}])`);
    }
    
    _debugLog('[_asyncStartCall()] lowering results', { subtaskID: subtask.id() });
    lowerFns[0]({
      realloc: undefined,
      memory: callerMemory,
      vals: [res],
      storagePtr: subtaskCallMeta.resultPtr,
      componentIdx: callerComponentIdx,
      stringEncoding: subtaskCallMeta.stringEncoding,
    });
    
  });
  
  subtask.setOnProgressFn(() => {
    subtask.setPendingEvent(() => {
      if (subtask.isResolved()) { subtask.deliverResolve(); }
      const event = {
        code: ASYNC_EVENT_CODE.SUBTASK,
        payload0: subtask.waitableRep(),
        payload1: subtask.getStateNumber(),
      };
      return event;
    });
  });
  
  // Start the (event) driver loop that will resolve the subtask
  // in a new JS task
  setTimeout(async () => {
    // The subtask may have been resolved before this deferred start ran
    // (e.g. cancelled while still STARTING via `subtask.cancel`) -- in
    // that case the callee must never be started
    if (subtask.isResolved()) {
      _debugLog('[_asyncStartCall()] subtask resolved before deferred start, skipping', {
        taskID: preparedTask.id(),
        subtaskID: subtask.id(),
      });
      return;
    }
    
    _debugLog('[_asyncStartCall()] continuing started subtask (in JS task)', {
      taskID: preparedTask.id(),
      subtaskID: subtask.id(),
      callerComponentIdx,
      calleeComponentIdx,
    });
    
    let startRes = subtask.onStart({ startFnParams: params });
    startRes = startRes === undefined ? [] : Array.isArray(startRes) ? startRes : [startRes];
    if (startRes.length !== paramCount) {
      throw new Error(`unexpected callee param count [${ startRes.length }] after start fn, _asyncStartCall invocation expected [${ paramCount }]`);
    }
    
    if (calleeComponentState.isExclusivelyLocked()) {
      _debugLog('[_asyncStartCall()] during continuation callee is exclusively locked, suspending...', {
        taskID: preparedTask.id(),
        subtaskID: subtask.id(),
        callerComponentIdx,
        calleeComponentIdx,
      });
      await calleeComponentState.suspendTask({
        task: preparedTask,
        readyFn: () => !calleeComponentState.isExclusivelyLocked(),
      });
    }
    
    const started = await preparedTask.enter();
    if (!started) {
      _debugLog('[_asyncStartCall()] task failed early', {
        taskID: preparedTask.id(),
        subtaskID: subtask.id(),
      });
      // A cancellation-before-start is a valid resolution, not a failure
      if (preparedTask.isCancelled()) { return; }
      throw new Error("task failed to start");
    }
    
    let callbackResult;
    try {
      let jspiCallee;
      if (callee._cachedPromising) {
        jspiCallee = callee._cachedPromising;
      } else {
        callee._cachedPromising = WebAssembly.promising(callee);
        jspiCallee = callee._cachedPromising;
      }
      
      callbackResult = await _withGlobalCurrentTaskMetaAsync({
        taskID: preparedTask.id(),
        componentIdx: preparedTask.componentIdx(),
        fn: () => {
          return jspiCallee.apply(null, startRes);
        }
      });
    } catch(err) {
      _debugLog("[_asyncStartCall()] initial subtask callee run failed", err);
      // NOTE: a good place to rejectt the parent task, if rejection API is enabled
      // subtask.reject(err);
      // subtask.getParentTask().reject(err);
      
      subtask.getParentTask().setErrored(err);
      
      return;
    }
    
    // If there was no callback function, we're dealing with a sync function
    // that was lifted as async without one, there is only the callee.
    if (!callbackFn) {
      _debugLog("[_asyncStartCall()] no callback, resolving w/ callee result", {
        taskID: preparedTask.id(),
        componentIdx: preparedTask.componentIdx(),
        preparedTask,
        stateNumber: preparedTask.taskState(),
        isResolved: preparedTask.isResolved(),
        callbackFn,
      });
      preparedTask.resolve([callbackResult]);
      return;
    }
    
    let fnName = callbackFn.fnName;
    if (!fnName) {
      fnName = [
      '<task ',
      subtask.parentTaskID(),
      '/subtask ',
      subtask.id(),
      '/task ',
      preparedTask.id(),
      '>',
      ].join("");
    }
    
    try {
      _debugLog("[_asyncStartCall()] starting driver loop", {
        fnName,
        componentIdx: preparedTask.componentIdx(),
        subtaskID: subtask.id(),
        childTaskID: subtask.childTaskID(),
        parentTaskID: subtask.parentTaskID(),
      });
      
      await _driverLoop({
        componentState: calleeComponentState,
        task: preparedTask,
        fnName,
        isAsync: true,
        callbackResult,
      });
    } catch (err) {
      _debugLog("[AsyncStartCall] drive loop call failure", { err });
    }
    
  }, 0);
  
  const subtaskState = subtask.getStateNumber();
  if (subtaskState < 0 || subtaskState > 2**5) {
    throw new Error('invalid subtask state, out of valid range');
  }
  
  _debugLog('[_asyncStartCall()] returning subtask rep & state', {
    subtask: {
      rep: subtask.waitableRep(),
      state: subtaskState,
    }
  });
  
  return Number(subtask.waitableRep()) << 4 | subtaskState;
}

function _syncStartCall(callbackIdx) {
  _debugLog('[_syncStartCall()] args', { callbackIdx });
  throw new Error('synchronous start call not implemented!');
}

class Waitable {
  #componentIdx;
  
  #pendingEventFn = null;
  
  #promise;
  #resolve;
  #reject;
  
  #waitableSet = null;
  
  #hasSyncWaiter = false;
  
  #idx = null; // to component-global waitables
  
  target;
  
  constructor(args) {
    const { componentIdx, target } = args;
    this.#componentIdx = componentIdx;
    this.target = args.target;
    this.#resetPromise();
  }
  
  componentIdx() { return this.#componentIdx; }
  isInSet() { return this.#waitableSet !== null; }
  
  idx() { return this.#idx; }
  setIdx(idx) {
    if (idx === 0) { throw new Error("waitable idx cannot be zero"); }
    this.#idx = idx;
  }
  
  setTarget(tgt) { this.target = tgt; }
  
  #resetPromise() {
    const { promise, resolve, reject } = promiseWithResolvers()
    this.#promise = promise;
    this.#resolve = resolve;
    this.#reject = reject;
  }
  
  resolve() { this.#resolve(); }
  reject(err) { this.#reject(err); }
  promise() { return this.#promise; }
  
  hasPendingEvent() {
    // _debugLog('[Waitable#hasPendingEvent()]', {
      //     componentIdx: this.#componentIdx,
      //     waitable: this,
      //     waitableSet: this.#waitableSet,
      //     hasPendingEvent: this.#pendingEventFn !== null,
      // });
      return this.#pendingEventFn !== null;
    }
    
    setPendingEvent(fn) {
      _debugLog('[Waitable#setPendingEvent()] args', {
        waitable: this,
        inSet: this.#waitableSet,
      });
      this.#pendingEventFn = fn;
    }
    
    getPendingEvent() {
      _debugLog('[Waitable#getPendingEvent()] args', {
        waitable: this,
        inSet: this.#waitableSet,
        hasPendingEvent: this.#pendingEventFn !== null,
      });
      if (this.#pendingEventFn === null) { return null; }
      const eventFn = this.#pendingEventFn;
      this.#pendingEventFn = null;
      const e = eventFn();
      this.#resetPromise();
      return e;
    }
    
    join(waitableSet) {
      _debugLog('[Waitable#join()] args', {
        waitable: this,
        waitableSet: waitableSet,
        isRemoval: waitableSet === null,
      });
      
      if (this.#waitableSet === undefined) {
        throw new TypeError('waitable set must be not be undefined');
      }
      
      if (this.#waitableSet) {
        this.#waitableSet.removeWaitable(this);
      }
      
      this.#waitableSet = waitableSet;
      
      if (waitableSet) {
        this.#waitableSet.addWaitable(this);
      }
    }
    
    drop() {
      _debugLog('[Waitable#drop()] args', {
        componentIdx: this.#componentIdx,
        waitable: this,
      });
      if (this.hasPendingEvent()) {
        throw new Error('waitables with pending events cannot be dropped');
      }
      this.join(null);
    }
    
    async waitForPendingEvent(args) {
      const { cstate } = args;
      if (!cstate) { throw new TypeError('missing component state'); }
      
      if (this.#waitableSet !== null || this.#hasSyncWaiter) {
        throw new Error("waitable is already in a set/has a sync waiter");
      }
      this.#hasSyncWaiter = true;
      await cstate.waitUntil({
        cancellable: false,
        readyFn: () => this.hasPendingEvent(),
      });
      this.#hasSyncWaiter = false;
    }
    
  }
  
  const ERR_CTX_TABLES = {};
  
  function contextGet(ctx) {
    const { componentIdx, slot } = ctx;
    if (componentIdx === undefined) { throw new TypeError("missing component idx"); }
    if (slot === undefined) { throw new TypeError("missing slot"); }
    
    const currentTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
    if (!currentTaskMeta) {
      throw new Error(`missing/incomplete global current task meta for component idx [${componentIdx}] during context set`);
    }
    const taskID = currentTaskMeta.taskID;
    
    const taskMeta = getCurrentTask(componentIdx, taskID);
    if (!taskMeta) { throw new Error('failed to retrieve current task'); }
    
    let task = taskMeta.task;
    if (!task) { throw new Error('invalid/missing current task in metadata while getting context'); }
    
    _debugLog('[contextGet()] args', {
      slot,
      storage: task.storage,
      taskID: task.id(),
      componentIdx: task.componentIdx(),
    });
    
    if (slot < 0 || slot >= task.storage.length) { throw new Error('invalid slot for current task'); }
    
    return task.storage[slot];
  }
  
  
  function contextSet(ctx, value) {
    const { componentIdx, slot } = ctx;
    if (componentIdx === undefined) { throw new TypeError("missing component idx"); }
    if (slot === undefined) { throw new TypeError("missing slot"); }
    if (!(_typeCheckValidI32(value))) { throw new Error('invalid value for context set (not valid i32)'); }
    
    const currentTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
    if (!currentTaskMeta) {
      throw new Error(`missing/incomplete global current task meta for component idx [${componentIdx}] during context set`);
    }
    const taskID = currentTaskMeta.taskID;
    
    const taskMeta = getCurrentTask(componentIdx, taskID);
    if (!taskMeta) { throw new Error('failed to retrieve current task'); }
    
    let task = taskMeta.task;
    if (!task) { throw new Error('invalid/missing current task in metadata while setting context'); }
    
    _debugLog('[contextSet()] args', {
      slot,
      value,
      storage: task.storage,
      taskID: task.id(),
      componentIdx: task.componentIdx(),
    });
    
    if (slot < 0 || slot >= task.storage.length) { throw new Error('invalid slot for current task'); }
    task.storage[slot] = value;
  }
  
  const ASYNC_TASKS_BY_COMPONENT_IDX = new Map();
  
  class AsyncTask {
    static _ID = 0n;
    
    static State = {
      INITIAL: 'initial',
      CANCELLED: 'cancelled',
      CANCEL_PENDING: 'cancel-pending',
      CANCEL_DELIVERED: 'cancel-delivered',
      RESOLVED: 'resolved',
    }
    
    static BlockResult = {
      CANCELLED: 'block.cancelled',
      NOT_CANCELLED: 'block.not-cancelled',
    }
    
    #id;
    #componentIdx;
    #state;
    #isAsync;
    #isManualAsync;
    #preserveFutureResult;
    #entryFnName = null;
    
    #onResolveHandlers = [];
    #completionPromise = null;
    #rejected = false;
    
    #exitPromise = null;
    #onExitHandlers = [];
    
    #memoryIdx = null;
    #memory = null;
    
    #callbackFn = null;
    #callbackFnName = null;
    
    #postReturnFn = null;
    
    #getCalleeParamsFn = null;
    
    #stringEncoding = null;
    
    #parentSubtask = null;
    
    #errHandling;
    
    #backpressurePromise;
    #backpressureWaiters = 0n;
    
    #returnLowerFns = null;
    
    #subtasks = [];
    
    #entered = false;
    #exited = false;
    #errored = null;
    
    cancelled = false;
    cancelRequested = false;
    alwaysTaskReturn = false;
    
    returnCalls =  0;
    storage = [0, 0];
    borrowedHandles = {};
    
    tmpRetI64HighBits = 0|0;
    
    constructor(opts) {
      this.#id = ++AsyncTask._ID;
      
      if (opts?.componentIdx === undefined) {
        throw new TypeError('missing component id during task creation');
      }
      this.#componentIdx = opts.componentIdx;
      
      this.#state = AsyncTask.State.INITIAL;
      this.#isAsync = opts?.isAsync ?? false;
      this.#isManualAsync = opts?.isManualAsync ?? false;
      this.#preserveFutureResult = opts?.preserveFutureResult ?? false;
      this.#entryFnName = opts.entryFnName;
      
      const {
        promise: completionPromise,
        resolve: resolveCompletionPromise,
        reject: rejectCompletionPromise,
      } = promiseWithResolvers();
      this.#completionPromise = completionPromise;
      
      this.#onResolveHandlers.push((results) => {
        if (this.#parentSubtask !== null) { return; }
        if (!this.#isAsync) { return; }
        
        if (this.#errored !== null) {
          rejectCompletionPromise(this.#errored);
          return;
        } else if (this.#rejected) {
          rejectCompletionPromise(results);
          return;
        }
        
        if (this.#preserveFutureResult && results instanceof FutureValue) {
          results.resolveAsValue(resolveCompletionPromise);
        } else {
          resolveCompletionPromise(results);
        }
      });
      
      const {
        promise: exitPromise,
        resolve: resolveExitPromise,
        reject: rejectExitPromise,
      } = promiseWithResolvers();
      this.#exitPromise = exitPromise;
      
      this.#onExitHandlers.push(() => {
        resolveExitPromise();
      });
      
      if (opts.callbackFn) { this.#callbackFn = opts.callbackFn; }
      if (opts.callbackFnName) { this.#callbackFnName = opts.callbackFnName; }
      
      if (opts.getCalleeParamsFn) { this.#getCalleeParamsFn = opts.getCalleeParamsFn; }
      
      if (opts.stringEncoding) { this.#stringEncoding = opts.stringEncoding; }
      
      if (opts.parentSubtask) { this.#parentSubtask = opts.parentSubtask; }
      
      
      if (opts.errHandling) { this.#errHandling = opts.errHandling; }
    }
    
    taskState() { return this.#state; }
    id() { return this.#id; }
    componentIdx() { return this.#componentIdx; }
    entryFnName() { return this.#entryFnName; }
    
    completionPromise() { return this.#completionPromise; }
    exitPromise() { return this.#exitPromise; }
    
    isAsync() { return this.#isAsync; }
    isSync() { return !this.isAsync(); }
    
    getErrHandling() { return this.#errHandling; }
    
    hasCallback() { return this.#callbackFn !== null; }
    
    getReturnMemoryIdx() { return this.#memoryIdx; }
    setReturnMemoryIdx(idx) {
      if (idx === null) { return; }
      this.#memoryIdx = idx;
    }
    
    getReturnMemory() { return this.#memory; }
    setReturnMemory(m) {
      if (m === null) { return; }
      this.#memory = m;
    }
    
    setReturnLowerFns(fns) { this.#returnLowerFns = fns; }
    getReturnLowerFns() { return this.#returnLowerFns; }
    
    setParentSubtask(subtask) {
      if (!subtask || !(subtask instanceof AsyncSubtask)) { return }
      if (this.#parentSubtask) { throw new Error('parent subtask can only be set once'); }
      this.#parentSubtask = subtask;
    }
    
    getParentSubtask() { return this.#parentSubtask; }
    
    // TODO(threads): this is very inefficient, we can pass along a root task,
    // and ideally do not need this once thread support is in place
    getRootTask() {
      let currentSubtask = this.getParentSubtask();
      let task = this;
      while (currentSubtask) {
        task = currentSubtask.getParentTask();
        currentSubtask = task.getParentSubtask();
      }
      return task;
    }
    
    setPostReturnFn(f) {
      if (!f) { return; }
      if (this.#postReturnFn) { throw new Error('postReturn fn can only be set once'); }
      this.#postReturnFn = f;
    }
    
    setCallbackFn(f, name) {
      if (!f) { return; }
      if (this.#callbackFn) { throw new Error('callback fn can only be set once'); }
      this.#callbackFn = f;
      this.#callbackFnName = name;
    }
    
    getCallbackFnName() {
      if (!this.#callbackFnName) { return undefined; }
      return this.#callbackFnName;
    }
    
    async runCallbackFn(...args) {
      if (!this.#callbackFn) { throw new Error('no callback function has been set for task'); }
      return _withGlobalCurrentTaskMetaAsync({
        taskID: this.#id,
        componentIdx: this.#componentIdx,
        fn: () => { return this.#callbackFn.apply(null, args); }
      });
    }
    
    getCalleeParams() {
      if (!this.#getCalleeParamsFn) { throw new Error('missing/invalid getCalleeParamsFn'); }
      return this.#getCalleeParamsFn();
    }
    
    mayBlock() { return this.isAsync() || this.isResolvedState() }
    
    mayEnter(task) {
      const cstate = getOrCreateAsyncState(this.#componentIdx);
      if (cstate.hasBackpressure()) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to backpressure', { taskID: this.#id });
        return false;
      }
      if (!cstate.callingSyncImport()) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to sync import call', { taskID: this.#id });
        return false;
      }
      const callingSyncExportWithSyncPending = cstate.callingSyncExport && !task.isAsync;
      if (!callingSyncExportWithSyncPending) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to sync export w/ sync pending', { taskID: this.#id });
        return false;
      }
      return true;
    }
    
    enterSync() {
      if (this.needsExclusiveLock()) {
        const cstate = getOrCreateAsyncState(this.#componentIdx);
        // TODO(???): it is *very possible* for a the line below to fail if
        // an async function is already running (and holding the exclusive lock)
        //
        // It's not really possible to fix this unless we turn every sync export into
        // an async export that will use the regular async enabled `enter()`.
        cstate.exclusiveLock();
      }
      return true;
    }
    
    async enter(opts) {
      _debugLog('[AsyncTask#enter()] args', {
        taskID: this.#id,
        componentIdx: this.#componentIdx,
        subtaskID: this.getParentSubtask()?.id(),
        args: opts,
        entryFnName: this.#entryFnName,
      });
      
      if (this.#entered) {
        throw new Error(`task with ID [${this.#id}] should not be entered twice`);
      }
      
      // If cancellation was requested before the task was entered, resolve
      // as cancelled without ever running guest code
      if (this.deliverPendingCancel({ cancellable: true })) {
        this.cancel();
        return false;
      }
      
      const cstate = getOrCreateAsyncState(this.#componentIdx);
      
      if (opts?.isHost) {
        this.#entered = true;
        return this.#entered;
      }
      
      await cstate.nextTaskExecutionSlot({ task: this });
      
      // If a task is synchronous then we can avoid component-relevant
      // tracking and immediately enter.
      if (this.isSync()) {
        this.#entered = true;
        
        // TODO(breaking): remove once manually-specifying async fns is removed
        // It is currently possible for an actually sync export to be specified
        // as async via JSPI
        if (this.#isManualAsync) {
          if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
        }
        
        return this.#entered;
      }
      
      // Perform intial backpressure check
      if (cstate.hasBackpressure() || this.needsExclusiveLock() && cstate.isExclusivelyLocked()) {
        cstate.addBackpressureWaiter();
        
        const result = await this.waitUntil({
          readyFn: () => {
            return !(cstate.hasBackpressure()
            || this.needsExclusiveLock() && cstate.isExclusivelyLocked());
          },
          cancellable: true,
        });
        
        cstate.removeBackpressureWaiter();
        
        if (result === AsyncTask.BlockResult.CANCELLED) {
          this.cancel();
          return false;
        }
      }
      
      // Lock the component state or keep trying until we can/do
      try {
        if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
      } catch {
        // Continuously attempt to lock until we can
        while (cstate.hasBackpressure() || this.needsExclusiveLock() && cstate.isExclusivelyLocked()) {
          try {
            if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
            break;
          } catch(err) {
            cstate.addBackpressureWaiter();
            const result = await this.waitUntil({
              readyFn: () => {
                return !(cstate.hasBackpressure()
                || this.needsExclusiveLock() && cstate.isExclusivelyLocked());
              },
              cancellable: true,
            });
            cstate.removeBackpressureWaiter();
            if (result === AsyncTask.BlockResult.CANCELLED) {
              this.cancel();
              return false;
            }
          }
        }
      }
      
      this.#entered = true;
      return this.#entered;
    }
    
    isRunningState() { return this.#state !== AsyncTask.State.RESOLVED; }
    isResolvedState() { return this.#state === AsyncTask.State.RESOLVED; }
    isResolved() { return this.#state === AsyncTask.State.RESOLVED; }
    
    async waitUntil(opts) {
      const { readyFn, cancellable } = opts;
      _debugLog('[AsyncTask#waitUntil()] args', { taskID: this.#id, args: { cancellable } });
      
      // TODO(fix): check for cancel
      // TODO(fix): determinism
      // TODO(threads): add this thread to waiting list
      
      const keepGoing = await this.suspendUntil({
        readyFn,
        cancellable,
      });
      
      return keepGoing;
    }
    
    async yieldUntil(opts) {
      const { readyFn, cancellable } = opts;
      _debugLog('[AsyncTask#yieldUntil()]', {
        taskID: this.#id,
        args: {
          cancellable,
        },
        componentIdx: this.#componentIdx,
      });
      
      const keepGoing = await this.suspendUntil({ readyFn, cancellable });
      if (keepGoing) {
        return {
          code: ASYNC_EVENT_CODE.NONE,
          payload0: 0,
          payload1: 0,
        };
      }
      
      return {
        code: ASYNC_EVENT_CODE.TASK_CANCELLED,
        payload0: 0,
        payload1: 0,
      };
    }
    
    async suspendUntil(opts) {
      const { cancellable, readyFn } = opts;
      _debugLog('[AsyncTask#suspendUntil()] args', {
        taskID: this.#id,
        args: {
          cancellable,
        },
        componentIdx: this.#componentIdx,
      });
      
      const pendingCancelled = this.deliverPendingCancel({ cancellable });
      if (pendingCancelled) { return false; }
      
      const completed = await this.immediateSuspendUntil({ readyFn, cancellable });
      return completed;
    }
    
    // TODO(threads): equivalent to thread.suspend_until()
    async immediateSuspendUntil(opts) {
      const { cancellable, readyFn } = opts;
      _debugLog('[AsyncTask#immediateSuspendUntil()] args', {
        args: {
          cancellable,
          readyFn,
        },
        taskID: this.#id,
        componentIdx: this.#componentIdx,
      });
      
      const ready = readyFn();
      if (ready && ASYNC_DETERMINISM === 'random') {
        const coinFlip = _coinFlip();
        if (coinFlip) { return true }
      }
      
      const keepGoing = await this.immediateSuspend({ cancellable, readyFn });
      return keepGoing;
    }
    
    async immediateSuspend(opts) { // NOTE: equivalent to thread.suspend()
    // TODO(threads): store readyFn on the thread
    const { cancellable, readyFn } = opts;
    _debugLog('[AsyncTask#immediateSuspend()] args', { cancellable, readyFn });
    
    const pendingCancelled = this.deliverPendingCancel({ cancellable });
    if (pendingCancelled) { return false; }
    
    const cstate = getOrCreateAsyncState(this.#componentIdx);
    const keepGoing = await cstate.suspendTask({
      task: this,
      readyFn: () => {
        // A pending cancellation request wakes cancellable waits
        if (cancellable && this.#state === AsyncTask.State.CANCEL_PENDING) {
          return true;
        }
        return readyFn();
      },
    });
    if (keepGoing && this.deliverPendingCancel({ cancellable })) { return false; }
    return keepGoing;
  }
  
  deliverPendingCancel(opts) {
    const { cancellable } = opts;
    _debugLog('[AsyncTask#deliverPendingCancel()]', {
      args: { cancellable },
      taskID: this.#id,
      componentIdx: this.#componentIdx,
    });
    
    if (cancellable && this.#state === AsyncTask.State.CANCEL_PENDING) {
      this.#state = AsyncTask.State.CANCEL_DELIVERED;
      return true;
    }
    
    return false;
  }
  
  isCancelled() { return this.cancelled }
  
  // Request cooperative cancellation of this task, called on behalf of a
  // supertask performing `subtask.cancel` on the subtask this task backs.
  //
  // The request is delivered at this task's next cancellable wait
  // (see suspendUntil/immediateSuspend), at which point the task is
  // expected to acknowledge via `task.cancel` or still resolve via
  // `task.return`.
  requestCancellation() {
    _debugLog('[AsyncTask#requestCancellation()] args', {
      taskID: this.#id,
      componentIdx: this.#componentIdx,
      state: this.#state,
    });
    if (this.isResolvedState() || this.cancelRequested) { return; }
    this.cancelRequested = true;
    if (this.#state === AsyncTask.State.INITIAL) {
      this.#state = AsyncTask.State.CANCEL_PENDING;
    }
    // Nudge the component's tick loop so that any suspended cancellable
    // wait observes the pending cancellation promptly
    getOrCreateAsyncState(this.#componentIdx).runTickLoop();
  }
  
  cancel(args) {
    _debugLog('[AsyncTask#cancel()] args', { });
    if (this.taskState() !== AsyncTask.State.CANCEL_DELIVERED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}] invalid task state [${this.taskState()}] for cancellation`);
    }
    if (this.borrowedHandles.length > 0) { throw new Error('task still has borrow handles'); }
    this.cancelled = true;
    // Cancelled tasks resolve with no value (spec: `Task.cancel` calls
    // `on_resolve(None)`); an explicit error is only present on the
    // host-driven rejection path (see `reject()`).
    this.onResolve(args?.error ?? null);
    this.#state = AsyncTask.State.RESOLVED;
  }
  
  onResolve(taskValue) {
    const handlers = this.#onResolveHandlers;
    this.#onResolveHandlers = [];
    for (const f of handlers) {
      try {
        f(taskValue);
      } catch (err) {
        _debugLog("[AsyncTask#onResolve] error during task resolve handler", err);
        throw err;
      }
    }
    
    // NOTE: if the parent subtask has already been resolved (e.g. it was
    // cancelled via `subtask.cancel` while this task was still pending),
    // this task's resolution must be discarded rather than delivered.
    const parentSubtaskPending = this.#parentSubtask && !this.#parentSubtask.isResolved();
    
    if (parentSubtaskPending) {
      const meta = this.#parentSubtask.getCallMetadata();
      // Run the rturn fn if it has not already been called -- this *should* have happened in
      // `task.return`, but some paths do not go through task.return (e.g. async lower of sync fn
      // which goes through prepare + async-start-call)
      if (meta.returnFn && !meta.returnFnCalled) {
        _debugLog('[AsyncTask#onResolve()] running returnFn', {
          componentIdx: this.#componentIdx,
          taskID: this.#id,
          subtaskID: this.#parentSubtask.id(),
        });
        const memory = meta.getMemoryFn();
        meta.returnFn.apply(null, [taskValue, meta.resultPtr]);
        meta.returnFnCalled = true;
      }
    }
    
    if (this.#postReturnFn) {
      _debugLog('[AsyncTask#onResolve()] running post return ', {
        componentIdx: this.#componentIdx,
        taskID: this.#id,
      });
      try {
        this.#postReturnFn(taskValue);
      } catch (err) {
        _debugLog("[AsyncTask#onResolve] error during task resolve handler", err);
        throw err;
      }
    }
    
    if (parentSubtaskPending) {
      this.#parentSubtask.onResolve(taskValue);
    }
  }
  
  registerOnResolveHandler(f) {
    this.#onResolveHandlers.push(f);
  }
  
  isRejected() { return this.#rejected; }
  
  isErrored() { return this.#errored; }
  setErrored(err) { this.#errored = err; }
  
  reject(taskErr) {
    _debugLog('[AsyncTask#reject()] args', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
      parentSubtask: this.#parentSubtask,
      parentSubtaskID: this.#parentSubtask?.id(),
      entryFnName: this.entryFnName(),
      callbackFnName: this.#callbackFnName,
      errMsg: taskErr.message,
    });
    
    if (this.isResolvedState() || this.#rejected) { return; }
    
    this.#rejected = true;
    this.cancelRequested = true;
    this.#state = AsyncTask.State.CANCEL_PENDING;
    const cancelled = this.deliverPendingCancel({ cancellable: true });
    
    // TODO: do cleanup here to reset the machinery so we can run again?
    
    this.cancel({ error: taskErr });
  }
  
  resolve(results) {
    _debugLog('[AsyncTask#resolve()] args', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
      entryFnName: this.entryFnName(),
      callbackFnName: this.#callbackFnName,
    });
    
    if (this.#state === AsyncTask.State.RESOLVED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}]  is already resolved (did you forget to wait for an import?)`);
    }
    
    if (this.borrowedHandles.length > 0) {
      throw new Error('task still has borrow handles');
    }
    
    this.#state = AsyncTask.State.RESOLVED;
    
    switch (results.length) {
      case 0:
      this.onResolve(undefined);
      break;
      case 1:
      this.onResolve(results[0]);
      break;
      default:
      _debugLog('[AsyncTask#resolve()] unexpected number of results', {
        componentIdx: this.#componentIdx,
        results,
        taskID: this.#id,
        subtaskID: this.#parentSubtask?.id(),
        entryFnName: this.#entryFnName,
        callbackFnName: this.#callbackFnName,
      });
      throw new Error('unexpected number of results');
    }
  }
  
  exit(args) {
    _debugLog('[AsyncTask#exit()]', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
    });
    
    if (this.#exited)  { throw new Error("task has already exited"); }
    
    if (this.#state !== AsyncTask.State.RESOLVED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}] exited without resolution`);
    }
    
    if (this.borrowedHandles > 0) {
      throw new Error('task [${this.#id}] exited without clearing borrowed handles');
    }
    
    const state = getOrCreateAsyncState(this.#componentIdx);
    if (!state) { throw new Error('missing async state for component [' + this.#componentIdx + ']'); }
    
    // Exempt the host from exclusive lock check
    if (this.#componentIdx !== -1 && !args?.skipExclusiveLockCheck) {
      if (this.needsExclusiveLock() && !state.isExclusivelyLocked()) {
        throw new Error(`task [${this.#id}] exit: component [${this.#componentIdx}] should have been exclusively locked`);
      }
    }
    
    state.exclusiveRelease();
    
    for (const f of this.#onExitHandlers) {
      try {
        f();
      } catch (err) {
        console.error("error during task exit handler", err);
        throw err;
      }
    }
    
    this.#exited = true;
    clearCurrentTask(this.#componentIdx, this.id());
  }
  
  needsExclusiveLock() {
    return !this.#isAsync || this.hasCallback();
  }
  
  createSubtask(args) {
    _debugLog('[AsyncTask#createSubtask()] args', args);
    const { componentIdx, childTask, callMetadata, fnName, isAsync, isManualAsync } = args;
    
    const cstate = getOrCreateAsyncState(this.#componentIdx);
    if (!cstate) {
      throw new Error(`invalid/missing async state for component idx [${componentIdx}]`);
    }
    
    const waitable = new Waitable({
      componentIdx: this.#componentIdx,
      target: `subtask (internal ID [${this.#id}])`,
    });
    
    const newSubtask = new AsyncSubtask({
      componentIdx,
      childTask,
      parentTask: this,
      callMetadata,
      isAsync,
      isManualAsync,
      fnName,
      waitable,
    });
    this.#subtasks.push(newSubtask);
    newSubtask.setTarget(`subtask (internal ID [${newSubtask.id()}], waitable [${waitable.idx()}], component [${componentIdx}])`);
    waitable.setIdx(cstate.handles.insert(newSubtask));
    waitable.setTarget(`waitable for subtask (waitable id [${waitable.idx()}], subtask internal ID [${newSubtask.id()}])`);
    return newSubtask;
  }
  
  getLatestSubtask() {
    return this.#subtasks.at(-1);
  }
  
  getSubtaskByWaitableRep(rep) {
    if (rep === undefined) { throw new TypeError('missing rep'); }
    return this.#subtasks.find(s => s.waitableRep() === rep);
  }
  
  currentSubtask() {
    _debugLog('[AsyncTask#currentSubtask()]');
    if (this.#subtasks.length === 0) { return undefined; }
    return this.#subtasks.at(-1);
  }
  
  removeSubtask(subtask) {
    if (this.#subtasks.length === 0) {
      throw new Error('cannot end current subtask: no current subtask');
    }
    this.#subtasks = this.#subtasks.filter(t => t !== subtask);
    return subtask;
  }
}

const ASYNC_EVENT_CODE = {
  NONE: 0,
  SUBTASK: 1,
  STREAM_READ: 2,
  STREAM_WRITE: 3,
  FUTURE_READ: 4,
  FUTURE_WRITE: 5,
  TASK_CANCELLED: 6,
};

function getCurrentTask(componentIdx, taskID) {
  let usedGlobal = false;
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing component idx'); // TODO(fix)
    // componentIdx = ASYNC_CURRENT_COMPONENT_IDXS.at(-1);
    // usedGlobal = true;
  }
  
  const taskMetas = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  if (taskMetas === undefined || taskMetas.length === 0) { return undefined; }
  
  if (taskID) {
    return taskMetas.find(meta => meta.task.id() === taskID);
  }
  
  const taskMeta = taskMetas[taskMetas.length - 1];
  if (!taskMeta || !taskMeta.task) { return undefined; }
  
  return taskMeta;
}

let dv = new DataView(new ArrayBuffer());
const dataView = mem => dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);

function toUint64(val) {
  const converted = BigInt(val)
  
  return BigInt.asUintN(64, converted);
}


function toUint16(val) {
  
  val >>>= 0;
  val %= 2 ** 16;
  return val;
}


function toUint32(val) {
  
  return val >>> 0;
}


function toUint8(val) {
  
  val >>>= 0;
  val %= 2 ** 8;
  return val;
}

const utf16Decoder = new TextDecoder('utf-16');

function _utf16AllocateAndEncode(str, realloc, memory) {
  const len = str.length;
  const ptr = realloc(0, 0, 2, len * 2);
  const out = new Uint16Array(memory.buffer, ptr, len);
  let i = 0;
  if (isLE) {
    while (i < len) { out[i] = str.charCodeAt(i++); }
  } else {
    while (i < len) {
      const ch = str.charCodeAt(i);
      out[i++] = (ch & 0xff) << 8 | ch >>> 8;
    }
  }
  return { ptr, len, codepoints: [...str].length };
}

const TEXT_DECODER_UTF8 = new TextDecoder();
const TEXT_ENCODER_UTF8 = new TextEncoder();

function _utf8AllocateAndEncode(s, realloc, memory) {
  if (typeof s !== 'string') {
    throw new TypeError('expected a string, received [' + typeof s + ']');
  }
  if (s.length === 0) { return { ptr: 1, len: 0 }; }
  let buf = TEXT_ENCODER_UTF8.encode(s);
  let ptr = realloc(0, 0, 1, buf.length);
  new Uint8Array(memory.buffer).set(buf, ptr);
  const res = { ptr, len: buf.length, codepoints: [...s].length };
  return res;
}


const T_FLAG = 1 << 30;

function rscTableCreateOwn(table, rep) {
  const free = table[0] & ~T_FLAG;
  table._createdReps.add(rep);
  if (free === 0) {
    table.push(0);
    table.push(rep | T_FLAG);
    return (table.length >> 1) - 1;
  }
  table[0] = table[free << 1];
  table[free << 1] = 0;
  table[(free << 1) + 1] = rep | T_FLAG;
  return free;
}

function rscTableRemove(table, handle) {
  const scope = table[handle << 1];
  const val = table[(handle << 1) + 1];
  const own = (val & T_FLAG) !== 0;
  const rep = val & ~T_FLAG;
  if (val === 0 || (scope & T_FLAG) !== 0) {
    throw new TypeError("Invalid handle");
  }
  table[handle << 1] = table[0] | T_FLAG;
  table[0] = handle | T_FLAG;
  return { rep, scope, own };
}

let curResourceBorrows = [];

function createNewCurrentTask(args) {
  _debugLog('[createNewCurrentTask()] args', args);
  const {
    componentIdx,
    isAsync,
    isManualAsync,
    preserveFutureResult,
    entryFnName,
    parentSubtaskID,
    callbackFnName,
    getCallbackFn,
    getParamsFn,
    stringEncoding,
    errHandling,
    getCalleeParamsFn,
    resultPtr,
    callingWasmExport,
  } = args;
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing/invalid component instance index while starting task');
  }
  let taskMetas = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  const callbackFn = getCallbackFn ? getCallbackFn() : null;
  
  const newTask = new AsyncTask({
    componentIdx,
    isAsync,
    isManualAsync,
    preserveFutureResult,
    entryFnName,
    callbackFn,
    callbackFnName,
    stringEncoding,
    getCalleeParamsFn,
    resultPtr,
    errHandling,
  });
  
  const newTaskID = newTask.id();
  const newTaskMeta = { id: newTaskID, componentIdx, task: newTask };
  
  // NOTE: do not track host tasks
  ASYNC_CURRENT_TASK_IDS.push(newTaskID);
  ASYNC_CURRENT_COMPONENT_IDXS.push(componentIdx);
  
  if (!taskMetas) {
    taskMetas = [newTaskMeta];
    ASYNC_TASKS_BY_COMPONENT_IDX.set(componentIdx, [newTaskMeta]);
  } else {
    taskMetas.push(newTaskMeta);
  }
  
  return [newTask, newTaskID];
}

function _lowerImportBackwardsCompat(args) {
  const params = [...arguments].slice(1);
  _debugLog('[_lowerImportBackwardsCompat()] args', { args, params });
  const {
    functionIdx,
    componentIdx,
    isAsync,
    isManualAsync,
    paramLiftFns,
    resultLowerFns,
    hasResultPointer,
    funcTypeIsAsync,
    metadata,
    memoryIdx,
    getMemoryFn,
    getReallocFn,
    importFn,
    stringEncoding,
  } = args;
  
  let meta = _getGlobalCurrentTaskMeta(componentIdx);
  let createdTask;
  
  // Some components depend on initialization logic (i.e. `_initialize` or some such
  // core wasm export) that is embedded in the component, but is not executed or wizer'd
  // away before the transpiled component is attempted to be used.
  //
  // These components execut their initialization logic *when they are imported* in the
  // transpiled context -- so we may get a call to an export that is lowered without going
  // through `CallWasm` or `CallInterface`.
  //
  if (!meta) {
    if (funcTypeIsAsync || (isAsync && !isManualAsync)) {
      throw new Error('p3 async wasm exports cannot use backwards compat auto-task init');
    }
    
    const [newTask, newTaskID] = createNewCurrentTask({
      componentIdx,
      isAsync,
      isManualAsync,
      callingWasmExport: false,
    });
    createdTask = newTask;
    
    // Since we're managing the task creation ourselves we must clear ourselves
    createdTask.registerOnResolveHandler(() => {
      _clearCurrentTask({
        taskID: task.id(),
        componentIdx: task.componentIdx(),
      });
    });
    
    _setGlobalCurrentTaskMeta({
      componentIdx,
      taskID: newTaskID,
    });
    
    meta = _getGlobalCurrentTaskMeta(componentIdx);
  }
  
  const { taskID } = meta;
  
  const taskMeta = getCurrentTask(componentIdx, taskID);
  if (!taskMeta) {
    throw new Error('invalid/missing async task meta');
  }
  
  const task = taskMeta.task;
  if (!task) { throw new Error('invalid/missing async task'); }
  
  const cstate = getOrCreateAsyncState(componentIdx);
  
  // TODO: re-enable this check -- postReturn can call imports though,
  // and that breaks things.
  //
  // if (!cstate.mayLeave) {
    //     throw new Error(`cannot leave instance [${componentIdx}]`);
    // }
    
    if (!task.mayBlock() && funcTypeIsAsync && !isAsync) {
      throw new Error("non async exports cannot synchronously call async functions");
    }
    
    // If there is an existing task, this should be part of a subtask
    const memory = getMemoryFn();
    // Canonical ABI lower appends result storage as a trailing
    // param when async lower has any flat result, or sync lower
    // has more than one flat result.
    const resultPtr = hasResultPointer ? params[params.length - 1] : undefined;
    const subtask = task.createSubtask({
      componentIdx,
      parentTask: task,
      fnName: importFn.fnName,
      isAsync,
      isManualAsync,
      callMetadata: {
        memoryIdx,
        memory,
        realloc: getReallocFn?.(),
        getReallocFn,
        resultPtr,
        lowers: resultLowerFns,
        stringEncoding,
      }
    });
    task.setReturnMemoryIdx(memoryIdx);
    task.setReturnMemory(getMemoryFn());
    
    subtask.onStart();
    
    // If dealing with a sync lowered sync function, we can directly return results
    //
    // TODO(breaking): remove once we get rid of manual async import specification,
    // as func types cannot be detected in that case only (and we don't need that w/ p3)
    if (!isManualAsync && !isAsync && !funcTypeIsAsync) {
      if (createdTask) { createdTask.enterSync(); }
      
      const res = importFn(...params);
      
      // TODO(breaking): remove once we get rid of manual async import specification,
      // as func types cannot be detected in that case only (and we don't need that w/ p3)
      if (!funcTypeIsAsync && !subtask.isReturned()) {
        throw new Error('post-execution subtasks must either be async or returned');
      }
      
      const syncRes = subtask.getResult();
      if (createdTask) { createdTask.resolve([syncRes]); }
      
      return syncRes;
    }
    
    // Sync-lowered async functions requires async behavior because the callee *can* block,
    // but this call must *act* synchronously and return immediately with the result
    // (i.e. not returning until the work is done)
    //
    // TODO(breaking): remove checking for manual async specification here, once we can go p3-only
    //
    if (!isManualAsync && !isAsync && funcTypeIsAsync) {
      const { promise, resolve } = promiseWithResolvers();
      queueMicrotask(async () => {
        if (!subtask.isResolvedState()) {
          await task.suspendUntil({ readyFn: () => task.isResolvedState() });
        }
        resolve(subtask.getResult());
      });
      return promise;
    }
    
    // NOTE: at this point we know that we are working with an async lowered import
    
    const subtaskState = subtask.getStateNumber();
    if (subtaskState < 0 || subtaskState >= 2**4) {
      throw new Error('invalid subtask state, out of valid range');
    }
    
    subtask.setOnProgressFn(() => {
      subtask.setPendingEvent(() => {
        if (subtask.isResolved()) { subtask.deliverResolve(); }
        const event = {
          code: ASYNC_EVENT_CODE.SUBTASK,
          payload0: subtask.waitableRep(),
          payload1: subtask.getStateNumber(),
        }
        return event;
      });
    });
    
    // This is a hack to maintain backwards compatibility with
    // manually-specified async imports, used in wasm exports that are
    // not actually async (but are specified as so).
    //
    // This is not normal p3 sync behavior but instead anticipating that
    // the caller that is doing manual async will be waiting for a promise that
    // resolves to the *actual* result.
    //
    // TODO(breaking): remove once manually specified async is removed
    //
    // There are a few cases:
    // 1. sync function with async types (e.g. `f: func() -> stream<u32>`)
    // 2. async function with async types (e.g. `f: async func() -> stream<u32>`)
    // 3. async function with sync types (e.g. `f: async func() -> list<u32>`)
    // 4. sync function with non-async types (e.g. `f: func() -> list<u32>`)
    //
    // This hack *only* applies to 4 -- the case where an async JS host function
    // is supplied to a Wasm export which does *not* need to do any async abi
    // lifting/lowering (async ABI did not exist when JSPI integratiton was
    // initially merged to enable asynchronously returning values from the host)
    //
    const requiresManualAsyncResult = !isAsync && !funcTypeIsAsync && isManualAsync;
    let manualAsyncResult;
    if (requiresManualAsyncResult) {
      manualAsyncResult = promiseWithResolvers();
    }
    
    queueMicrotask(async () => {
      try {
        _debugLog('[_lowerImportBackwardsCompat()] calling lowered import', { importFn, params });
        if (createdTask) { await createdTask.enter(); }
        
        const asyncRes = await importFn(...params);
        if (requiresManualAsyncResult) {
          manualAsyncResult.resolve(subtask.getResult());
        }
        
        if (createdTask) { createdTask.resolve([asyncRes]); }
        
        
      } catch (err) {
        _debugLog("[_lowerImportBackwardsCompat()] import fn error:", err);
        if (requiresManualAsyncResult) {
          manualAsyncResult.reject(err);
        }
        throw err;
      }
    });
    
    if (requiresManualAsyncResult) { return manualAsyncResult.promise; }
    
    _debugLog('[_lowerImportBackwardsCompat()] async-lowered import return', {
      fnName: importFn.fnName,
      componentIdx,
      subtaskID: subtask.id(),
      waitableRep: subtask.waitableRep(),
      subtaskState,
      packedResult: Number(subtask.waitableRep()) << 4 | subtaskState,
    });
    
    return Number(subtask.waitableRep()) << 4 | subtaskState;
  }
  
  function _liftFlatBool(ctx) {
    _debugLog('[_liftFlatBool()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0] === 1;
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 1) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (bool requires 1 byte)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint8(ctx.storagePtr, true) === 1;
    
    ctx.storagePtr += 1;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 1; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU8(ctx) {
    _debugLog('[_liftFlatU8()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 1) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u8 requires 1 byte)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint8(ctx.storagePtr, true);
    
    ctx.storagePtr += 1;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 1; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU16(ctx) {
    _debugLog('[_liftFlatU16()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 2) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u16 requires 2 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint16(ctx.storagePtr, true);
    
    ctx.storagePtr += 2;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 2; }
    
    const rem = ctx.storagePtr % 2;
    if (rem !== 0) { ctx.storagePtr += (2 - rem); }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU32(ctx) {
    _debugLog('[_liftFlatU32()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i34 argument'); }
      // core i32 values arrive as signed numbers
      val = ctx.params[0] >>> 0;
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 4) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u32 requires 4 bytes)`);
    }
    val = new DataView(ctx.memory.buffer).getUint32(ctx.storagePtr, true);
    ctx.storagePtr += 4;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 4; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU64(ctx) {
    _debugLog('[_liftFlatU64()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least one single i64 argument'); }
      if (typeof ctx.params[0] !== 'bigint') { throw new Error('expected bigint'); }
      // core i64 values arrive as signed BigInts
      val = BigInt.asUintN(64, ctx.params[0]);
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 8) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u64 requires 8 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getBigUint64(ctx.storagePtr, true);
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 8; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatFloat64(ctx) {
    _debugLog('[_liftFlatFloat64()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) {
        throw new Error('expected at least one single f64 argument');
      }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 8) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (f64 requires 8 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getFloat64(ctx.storagePtr, true);
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 8; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatStringAny(ctx) {
    switch (ctx.stringEncoding) {
      case 'utf8':
      return _liftFlatStringUTF8(ctx);
      case 'utf16':
      return _liftFlatStringUTF16(ctx);
      default:
      throw new Error(`missing/unrecognized/unsupported string encoding [${ctx.stringEncoding}]`);
    }
  }
  
  function _liftFlatStringUTF8(ctx) {
    _debugLog('[_liftFlatStringUTF8()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('expected at least two u32 arguments'); }
      let offset = ctx.params[0];
      if (typeof offset === 'bigint') { offset = Number(offset); }
      if (!Number.isSafeInteger(offset)) { throw new Error('invalid offset'); }
      const len = ctx.params[1];
      if (!Number.isSafeInteger(len)) {  throw new Error('invalid len'); }
      val = TEXT_DECODER_UTF8.decode(new DataView(ctx.memory.buffer, offset, len));
      ctx.params = ctx.params.slice(2);
      return [val, ctx];
    }
    
    const rem = ctx.storagePtr % 4;
    if (rem !== 0) { ctx.storagePtr += (4 - rem); }
    
    const dv = new DataView(ctx.memory.buffer);
    const start = dv.getUint32(ctx.storagePtr, true);
    const codeUnits = dv.getUint32(ctx.storagePtr + 4, true);
    
    val = TEXT_DECODER_UTF8.decode(new Uint8Array(ctx.memory.buffer, start, codeUnits));
    
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storagelen -= 8; }
    
    return [val, ctx];
  }
  
  function _liftFlatStringUTF16(ctx) {
    _debugLog('[_liftFlatStringUTF16()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('expected at least two u32 arguments'); }
      let offset = ctx.params[0];
      if (typeof offset === 'bigint') { offset = Number(offset); }
      if (!Number.isSafeInteger(offset)) {  throw new Error('invalid offset'); }
      const len = ctx.params[1];
      if (!Number.isSafeInteger(len)) {  throw new Error('invalid len'); }
      val = utf16Decoder.decode(new DataView(ctx.memory.buffer, offset, len));
      ctx.params = ctx.params.slice(2);
      return [val, ctx];
    }
    
    const data = new DataView(ctx.memory.buffer)
    const start = data.getUint32(ctx.storagePtr, vals[0], true);
    const codeUnits = data.getUint32(ctx.storagePtr, vals[0] + 4, true);
    val = utf16Decoder.decode(new Uint16Array(ctx.memory.buffer, start, codeUnits));
    ctx.storagePtr = ctx.storagePtr + 2 * codeUnits;
    if (ctx.storageLen !== undefined) { ctx.storageLen = ctx.storageLen - 2 * codeUnits }
    
    return [val, ctx];
  }
  
  function _liftFlatRecord(meta) {
    const { fieldMetas, size32: recordSize32, align32: recordAlign32 } = meta;
    return function _liftFlatRecordInner(ctx) {
      _debugLog('[_liftFlatRecord()] args', { ctx });
      
      const originalPtr = ctx.storagePtr;
      const res = {};
      for (const [key, liftFn, size32, align32] of fieldMetas) {
        let fieldPtr;
        if (ctx.storagePtr !== undefined) {
          const rem = ctx.storagePtr % align32;
          if (rem !== 0) { ctx.storagePtr += align32 - rem; }
          fieldPtr = ctx.storagePtr;
        }
        
        // A field occupies exactly size32 bytes of the record's
        // flat storage. Capture the remaining storage budget before
        // lifting the field and restore it afterwards: a field's own
        // lift fn may repurpose storageLen internally (e.g. a list
        // sets it to the element-buffer length while reading
        // out-of-line data and never restores it), which would
        // otherwise corrupt the budget the next field sees.
        // See https://github.com/bytecodealliance/jco/issues/1585.
        let fieldLen;
        if (ctx.storageLen !== undefined) { fieldLen = ctx.storageLen; }
        
        let [val, newCtx] = liftFn(ctx);
        res[key] = val;
        ctx = newCtx;
        
        if (fieldPtr !== undefined) {
          ctx.storagePtr = Math.max(ctx.storagePtr, fieldPtr + size32);
        }
        if (fieldLen !== undefined) {
          ctx.storageLen = fieldLen - size32;
        }
      }
      
      if (originalPtr !== undefined) {
        ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + recordSize32);
      }
      
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % recordAlign32;
        if (rem !== 0) { ctx.storagePtr += recordAlign32 - rem; }
      }
      
      return [res, ctx];
    }
  }
  
  const _liftFlatVariantScratch = new DataView(new ArrayBuffer(8));
  
  function _liftFlatVariant(meta) {
    const {
      caseMetas,
      variantSize32,
      variantAlign32,
      variantPayloadOffset32,
      variantFlatCount,
      variantPayloadFlatTypes,
      isEnum,
    } = meta;
    
    return function _liftFlatVariantInner(ctx) {
      _debugLog('[_liftFlatVariant()] args', { ctx });
      const origUseParams = ctx.useDirectParams;
      
      let caseIdx;
      let liftRes;
      const originalPtr = ctx.storagePtr;
      const numCases =  caseMetas.length;
      if (caseMetas.length < 256) {
        liftRes = _liftFlatU8(ctx);
      } else if (numCases >= 256 && numCases < 65536) {
        liftRes = _liftFlatU16(ctx);
      } else if (numCases >= 65536 && numCases < 4_294_967_296) {
        liftRes = _liftFlatU32(ctx);
      } else {
        throw new Error(`unsupported number of variant cases [${numCases}]`);
      }
      caseIdx = liftRes[0];
      ctx = liftRes[1];
      
      const [
      tag,
      liftFn,
      caseSize32,
      caseAlign32,
      caseFlatCount,
      caseFlatTypes,
      ] = caseMetas[caseIdx];
      
      if (variantPayloadOffset32 === undefined) {
        throw new Error('unexpectedly missing payload offset');
      }
      
      if (originalPtr !== undefined) {
        ctx.storagePtr = originalPtr + variantPayloadOffset32;
      }
      
      let val;
      if (liftFn === null) {
        val = { tag };
        // NOTE: here we need to move past the entire object in memory
        // despite moving to the payload which we now know is missing/unnecessary
        if (originalPtr !== undefined) {
          ctx.storagePtr = originalPtr + variantSize32;
        }
      } else {
        // When lifting from direct params, the payload arrives as the
        // *join* of all case flat representations: each slot whose
        // joined core type differs from the selected case's core type
        // must be reinterpreted before the payload lift
        // (see CanonicalABI `lift_flat_variant`)
        if (ctx.useDirectParams) {
          if (!variantPayloadFlatTypes || !caseFlatTypes) {
            throw new Error('missing variant flat type metadata during direct-param lift');
          }
          const scratch = _liftFlatVariantScratch;
          for (let i = 0; i < caseFlatTypes.length; i++) {
            const have = variantPayloadFlatTypes[i];
            const want = caseFlatTypes[i];
            if (have === want) { continue; }
            const val = ctx.params[i];
            if (have === 'i64' && want === 'i32') {
              ctx.params[i] = Number(BigInt.asIntN(32, val));
            } else if (have === 'i64' && want === 'f32') {
              scratch.setInt32(0, Number(BigInt.asIntN(32, val)), true);
              ctx.params[i] = scratch.getFloat32(0, true);
            } else if (have === 'i64' && want === 'f64') {
              scratch.setBigInt64(0, val, true);
              ctx.params[i] = scratch.getFloat64(0, true);
            } else if (have === 'i32' && want === 'f32') {
              scratch.setInt32(0, val, true);
              ctx.params[i] = scratch.getFloat32(0, true);
            } else {
              throw new Error(`invalid variant payload coercion [${have}] -> [${want}]`);
            }
          }
        }
        
        const [newVal, newCtx] = liftFn(ctx);
        val = { tag, val: newVal };
        ctx = newCtx;
      }
      
      if (origUseParams) {
        if (variantFlatCount === undefined || variantFlatCount === null) {
          _debugLog('[_liftFlatVariant()] variant with unknown flat count', { ctx, meta });
          throw new Error('cannot lift variant with unknown flat count');
        }
        if (caseFlatCount === undefined || caseFlatCount === null) {
          _debugLog('[_liftFlatVariant()] case with unknown flat count', { ctx, meta, case: meta.caseMetas[caseIdx] });
          throw new Error('cannot lift case with unknown flat count');
        }
        // NOTE: enums can be tightly packed and do not have a descriminant
        const remainingPayloadParams = variantFlatCount - caseFlatCount - (isEnum ? 0 : 1);
        if (remainingPayloadParams < 0) {
          throw new Error(`invalid variant flat count metadata`);
        }
        if (ctx.params.length < remainingPayloadParams) {
          throw new Error(`expected at least [${remainingPayloadParams}] remaining variant payload params, but got [${ctx.params.length}]`);
        }
        ctx.params = ctx.params.slice(remainingPayloadParams);
      }
      
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % variantAlign32;
        if (rem !== 0) { ctx.storagePtr += variantAlign32 - rem; }
      }
      
      return [val, ctx];
    }
  }
  
  function _liftFlatList(meta) {
    const { elemLiftFn, elemSize32, elemAlign32, knownLen, typedArray } = meta;
    
    const listValue =
    typedArray === undefined
    ? values => values
    : values => new typedArray(values);
    
    const readValuesAndReset = (ctx, originalPtr, originalLen, dataPtr, len) => {
      ctx.storagePtr = dataPtr;
      const val = [];
      for (var i = 0; i < len; i++) {
        const elemPtr = dataPtr + i * elemSize32;
        ctx.storagePtr = elemPtr;
        const [res, nextCtx] = elemLiftFn(ctx);
        val.push(res);
        ctx = nextCtx;
        
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
      if (originalPtr !== null) { ctx.storagePtr = originalPtr; }
      if (originalLen !== null) { ctx.storageLen = originalLen; }
      return [listValue(val), ctx];
    };
    
    return function _liftFlatListInner(ctx) {
      _debugLog('[_liftFlatList()] args', { ctx });
      
      let liftResults;
      if (knownLen !== undefined) { // list with known length
      if (ctx.useDirectParams) {
        _debugLog('memory unexpectedly missing while lifting unknown length list', { ctx });
        liftResults = [listValue(ctx.params.slice(0, knownLen)), ctx];
        ctx.params = ctx.params.slice(knownLen);
      } else { // indirect params
      if (ctx.memory === null) {
        _debugLog('memory unexpectedly missing while lifting known length list', { knownLen, ctx });
        throw new Error(`memory missing while lifting known length (${knownLen}) list`);
      }
      
      const originalLen = ctx.storageLen;
      const originalPtr = ctx.storagePtr;
      
      ctx.storageLen = knownLen * elemSize32;
      liftResults = readValuesAndReset(ctx, null, originalLen, ctx.storagePtr, knownLen);
    }
    
  } else { // unknown length list
  
  if (ctx.useDirectParams) {
    // unknown length list ptr w/ direct params
    const dataPtr = ctx.params[0];
    const len = ctx.params[1];
    ctx.params = ctx.params.slice(2);
    
    ctx.useDirectParams = false;
    const originalPtr = ctx.storagePtr;
    const originalLen = ctx.storageLen;
    ctx.storageLen = len * elemSize32;
    
    liftResults = readValuesAndReset(ctx, originalPtr, originalLen, dataPtr, len);
    
    ctx.useDirectParams = true;
  } else {
    // unknown length list ptr w/ in-memory params
    const originalLen = ctx.storageLen;
    ctx.storageLen = 8;
    
    const dataPtrLiftRes = _liftFlatU32(ctx);
    const dataPtr = dataPtrLiftRes[0];
    ctx = dataPtrLiftRes[1];
    
    const lenLiftRes = _liftFlatU32(ctx);
    const len = lenLiftRes[0];
    ctx = lenLiftRes[1];
    
    const originalPtr = ctx.storagePtr;
    ctx.storagePtr = dataPtr;
    
    ctx.storageLen = len * elemSize32;
    liftResults = readValuesAndReset(ctx, originalPtr, originalLen, dataPtr, len);
  }
}

return liftResults;
}
}

function _liftFlatTuple(meta) {
  const { elemLiftFns, size32: tupleSize32, align32: tupleAlign32 } = meta;
  return function _liftFlatTupleInner(ctx) {
    _debugLog('[_liftFlatTuple()] args', { ctx });
    
    const originalPtr = ctx.storagePtr;
    const val = [];
    for (const [ liftFn, size32, align32 ]  of elemLiftFns) {
      let elemPtr;
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % align32;
        if (rem !== 0) { ctx.storagePtr += align32 - rem; }
        elemPtr = ctx.storagePtr;
      }
      
      // As in _liftFlatRecord: an element occupies exactly size32
      // bytes of the tuple's flat storage, so capture and restore
      // the storage budget around the element lift to stop a
      // field's internal storageLen use (e.g. lists) leaking into
      // the next element.
      // See https://github.com/bytecodealliance/jco/issues/1585.
      let elemLen;
      if (ctx.storageLen !== undefined) { elemLen = ctx.storageLen; }
      
      const [newValue, newCtx] = liftFn(ctx);
      val.push(newValue);
      ctx = newCtx;
      
      if (elemPtr !== undefined) {
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + size32);
      }
      if (elemLen !== undefined) {
        ctx.storageLen = elemLen - size32;
      }
    }
    
    if (originalPtr !== undefined) {
      ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + tupleSize32);
    }
    
    if (ctx.storagePtr !== undefined) {
      const rem = ctx.storagePtr % tupleAlign32;
      if (rem !== 0) { ctx.storagePtr += tupleAlign32 - rem; }
    }
    
    return [val, ctx];
  }
}

function _liftFlatFlags(meta) {
  const { names, size32, align32, intSizeBytes } = meta;
  
  return function _liftFlatFlagsInner(ctx) {
    _debugLog('[_liftFlatFlags()] args', { ctx });
    
    const val = {};
    
    let liftRes;
    let align;
    switch (intSizeBytes) {
      case 1:
      liftRes = _liftFlatU8(ctx);
      break;
      case 2:
      liftRes = _liftFlatU16(ctx);
      break;
      case 4:
      liftRes = _liftFlatU32(ctx);
      break;
      default:
      throw new Error('invalid flags size');
    }
    let bits = liftRes[0];
    ctx = liftRes[1];
    
    for (const name of names) {
      val[name] = (bits & 1) === 1;
      bits >>>= 1;
    }
    
    const rem = ctx.storagePtr % align32;
    if (rem !== 0) { ctx.storagePtr += align32 - rem; }
    
    return [val, ctx];
  }
}

function _liftFlatEnum(meta) {
  meta.isEnum = true;
  const f = _liftFlatVariant(meta);
  return function _liftFlatEnumInner(ctx) {
    _debugLog('[_liftFlatEnum()] args', { ctx });
    const res = f(ctx);
    res[0] = res[0].tag;
    return res;
  }
}

function _liftFlatOption(meta) {
  const f = _liftFlatVariant(meta);
  return function _liftFlatOptionInner(ctx) {
    _debugLog('[_liftFlatOption()] args', { ctx });
    return f(ctx);
  }
}

function _liftFlatResult(meta) {
  const f = _liftFlatVariant(meta);
  return function _liftFlatResultInner(ctx) {
    _debugLog('[_liftFlatResult()] args', { ctx });
    return f(ctx);
  }
}

function _liftFlatBorrow(componentTableIdx, size, memory, vals, storagePtr, storageLen) {
  _debugLog('[_liftFlatBorrow()] args', { size, memory, vals, storagePtr, storageLen });
  throw new Error('flat lift for borrowed resources is not supported!');
}


function _lowerFlatBool(ctx) {
  _debugLog('[_lowerFlatBool()] args', { ctx });
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  _requireValidNumericPrimitive.bind('bool', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint8(ctx.storagePtr, ctx.vals[0] ? 1 : 0);
  
  ctx.storagePtr += 1;
}

function _lowerFlatU8(ctx) {
  _debugLog('[_lowerFlatU8()] args', ctx);
  
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  _requireValidNumericPrimitive.bind('u8', ctx.vals[0]);
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  new DataView(ctx.memory.buffer).setUint8(ctx.storagePtr, ctx.vals[0]);
  
  ctx.storagePtr += 1;
}

function _lowerFlatU16(ctx) {
  _debugLog('[_lowerFlatU16()] args', { ctx });
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  const rem = ctx.storagePtr % 2;
  if (rem !== 0) { ctx.storagePtr += (2 - rem); }
  
  _requireValidNumericPrimitive.bind('u16', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint16(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 2;
}

function _lowerFlatU32(ctx) {
  _debugLog('[_lowerFlatU32()] args', { ctx });
  
  if (ctx.vals.length !== 1) {
    throw new Error(`expected single value to lower, got [${ctx.vals.length}]`);
  }
  
  const rem = ctx.storagePtr % 4;
  if (rem !== 0) { ctx.storagePtr += (4 - rem); }
  
  _requireValidNumericPrimitive.bind('u32', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint32(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 4;
}

function _lowerFlatU64(ctx) {
  _debugLog('[_lowerFlatU64()] args', { ctx });
  
  if (ctx.vals.length !== 1) { throw new Error('unexpected number of vals'); }
  
  const rem = ctx.storagePtr % 8;
  if (rem !== 0) { ctx.storagePtr += (8 - rem); }
  
  _requireValidNumericPrimitive.bind('u64', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setBigUint64(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatStringAny(ctx) {
  switch (ctx.stringEncoding) {
    case 'utf8':
    return _lowerFlatStringUTF8(ctx);
    case 'utf16':
    return _lowerFlatStringUTF16(ctx);
    default:
    throw new Error(`missing/unrecognized/unsupported string encoding [${ctx.stringEncoding}]`);
  }
}

function _lowerFlatStringUTF8(ctx) {
  _debugLog('[_lowerFlatStringUTF8()] args', ctx);
  if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
  
  const { ptr, len } = _utf8AllocateAndEncode(ctx.vals[0], ctx.realloc, ctx.memory);
  
  const view = new DataView(ctx.memory.buffer);
  view.setUint32(ctx.storagePtr, ptr, true);
  view.setUint32(ctx.storagePtr + 4, len, true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatStringUTF16(ctx) {
  _debugLog('[_lowerFlatStringUTF16()] args', { ctx });
  if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
  
  const { ptr, len } = _utf16AllocateAndEncode(ctx.vals[0], ctx.realloc, ctx.memory);
  
  const view = new DataView(ctx.memory.buffer);
  view.setUint32(ctx.storagePtr, ptr, true);
  view.setUint32(ctx.storagePtr + 4, len, true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatRecord(meta) {
  const { fieldMetas, size32: recordSize32, align32: recordAlign32 } = meta;
  return function _lowerFlatRecordInner(ctx) {
    _debugLog('[_lowerFlatRecord()] args', { ctx });
    
    const originalPtr = ctx.storagePtr;
    const r = ctx.vals[0];
    for (const [tag, lowerFn, size32, align32 ] of fieldMetas) {
      const rem = ctx.storagePtr % align32;
      if (rem !== 0) { ctx.storagePtr += align32 - rem; }
      
      const fieldPtr = ctx.storagePtr;
      ctx.vals = [r[tag]];
      lowerFn(ctx);
      
      ctx.storagePtr = Math.max(ctx.storagePtr, fieldPtr + size32);
    }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + recordSize32);
    
    const rem = ctx.storagePtr % recordAlign32;
    if (rem !== 0) {
      ctx.storagePtr += recordAlign32 - rem;
    }
  }
}

function _lowerFlatVariant(meta) {
  const { variantSize32, variantAlign32, variantPayloadOffset32, caseMetas } = meta;
  
  let caseLookup = {};
  for (const [idx, meta] of caseMetas.entries()) {
    let tag = meta[0];
    caseLookup[tag] = { discriminant: idx, meta };
  }
  
  return function _lowerFlatVariantInner(ctx) {
    _debugLog('[_lowerFlatVariant()] args', { ctx });
    
    const { tag, val } = ctx.vals[0];
    const variantCase = caseLookup[tag];
    if (!variantCase) {
      throw new Error(`missing tag [${tag}] (valid tags: ${Object.keys(caseLookup)})`);
    }
    
    const [ _tag, lowerFn, caseSize32, caseAlign32, caseFlatCount ] = variantCase.meta;
    
    const originalPtr = ctx.storagePtr;
    ctx.vals = [variantCase.discriminant];
    let discLowerRes;
    if (caseMetas.length < 256) {
      discLowerRes = _lowerFlatU8(ctx);
    } else if (caseMetas.length >= 256 && caseMetas.length < 65536) {
      discLowerRes = _lowerFlatU16(ctx);
    } else if (caseMetas.length >= 65536 && caseMetas.length < 4_294_967_296) {
      discLowerRes = _lowerFlatU32(ctx);
    } else {
      throw new Error(`unsupported number of cases [${caseMetas.length}]`);
    }
    
    const payloadOffsetPtr = originalPtr + variantPayloadOffset32;
    ctx.storagePtr = payloadOffsetPtr;
    ctx.vals = [val];
    if (lowerFn) { lowerFn(ctx); }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + variantSize32);
    
    const rem = ctx.storagePtr % variantAlign32;
    if (rem !== 0) { ctx.storagePtr += varianttAlign32 - rem; }
  }
}

function _lowerFlatList(meta) {
  const {
    elemLowerFn,
    knownLen,
    size32,
    align32,
    elemSize32,
    elemAlign32,
  } = meta;
  
  if (!elemLowerFn) { throw new TypeError("missing/invalid element lower fn for list"); }
  
  return function _lowerFlatListInner(ctx) {
    _debugLog('[_lowerFlatList()] args', { ctx });
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('insufficient params left to lower list'); }
      const storagePtr = ctx.params[0];
      const elemCount = ctx.params[1];
      ctx.params = ctx.params.slice(2);
      
      const list = ctx.vals[0];
      if (!list) { throw new Error("missing direct param value"); }
      
      const lowerCtx = {
        storagePtr,
        memory: ctx.memory,
        stringEncoding: ctx.stringEncoding,
      };
      for (let idx = 0; idx < list.length; idx++) {
        const elemPtr = storagePtr + idx * elemSize32;
        lowerCtx.storagePtr = elemPtr;
        lowerCtx.vals = list.slice(idx, idx+1);
        elemLowerFn(lowerCtx);
        lowerCtx.storagePtr = Math.max(lowerCtx.storagePtr, elemPtr + elemSize32);
      }
      ctx.storagePtr = lowerCtx.storagePtr;
      
      // TODO: implement parma-only known-length processing
      
      return;
    }
    
    // TODO(fix): is it possible to get a vals that are a addr and length here from
    // a component lower?
    
    const elems = ctx.vals[0];
    if (knownLen === undefined) {
      // unknown length
      if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
      const dataPtr = ctx.realloc(0, 0, elemAlign32, elemSize32 * elems.length);
      
      ctx.vals[0] = dataPtr;
      _lowerFlatU32(ctx);
      
      ctx.vals[0] = elems.length;
      _lowerFlatU32(ctx);
      
      const origPtr = ctx.storagePtr;
      ctx.storagePtr = dataPtr;
      
      for (const [idx, elem] of elems.entries()) {
        const elemPtr = dataPtr + idx * elemSize32;
        ctx.storagePtr = elemPtr;
        ctx.vals = [elem];
        elemLowerFn(ctx);
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
      
      ctx.storagePtr = origPtr;
      
    } else {
      // known length
      
      if (elems.length !== knownLen) {
        throw new TypeError(`invalid list input of length [${elems.length}], must be length [${knownLen}]`);
      }
      
      const originalPtr = ctx.storagePtr;
      for (const [idx, elem] of elems.entries()) {
        const elemPtr = originalPtr + idx * elemSize32;
        ctx.storagePtr = elemPtr;
        ctx.vals = [elem];
        elemLowerFn(ctx);
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
    }
    
    // TODO(fix): special case for u8/u16/etc, we can do a direct copy
    
    const totalSizeBytes = elems.length * size32;
    if (ctx.storageLen !== undefined && totalSizeBytes > ctx.storageLen) {
      throw new Error('not enough storage remaining for list flat lower');
    }
  }
}

function _lowerFlatTuple(meta) {
  const { elemLowerMetas, size32: tupleSize32, align32: tupleAlign32 } = meta;
  return function _lowerFlatTupleInner(ctx) {
    _debugLog('[_lowerFlatTuple()] args', { ctx });
    const originalPtr = ctx.storagePtr;
    const tuple = ctx.vals[0];
    for (const [idx, [ lowerFn, size32, align32 ]]  of elemLowerMetas.entries()) {
      const rem = ctx.storagePtr % align32;
      if (rem !== 0) { ctx.storagePtr += align32 - rem; }
      
      const elemPtr = ctx.storagePtr;
      ctx.vals = [tuple[idx]];
      lowerFn(ctx);
      ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + size32);
    }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + tupleSize32);
    
    const rem = ctx.storagePtr % tupleAlign32;
    if (rem !== 0) {
      ctx.storagePtr += tupleAlign32 - rem;
    }
  }
}

function _lowerFlatFlags(meta) {
  const { names, size32, align32, intSizeBytes } = meta;
  
  return function _lowerFlatFlagsInner(ctx) {
    _debugLog('[_lowerFlatFlags()] args', { ctx });
    if (ctx.vals.length !== 1) { throw new Error('unexpected number of vals'); }
    
    let flagObj = ctx.vals[0];
    let flagValue = 0;
    if (typeof flagObj === 'object' && flagObj !== null) {
      for (const [idx, name] of names.entries()) {
        if (flagObj[name] === true) {
          flagValue |= 1 << idx;
        }
      }
    } else if (flagObj !== null && flagObj !== undefined) {
      throw new TypeError('only an object, undefined or null can be converted to flags');
    }
    
    const rem = ctx.storagePtr % align32;
    if (rem !== 0) { ctx.storagePtr += (align32 - rem); }
    
    const dv = new DataView(ctx.memory.buffer);
    if (intSizeBytes === 1) {
      dv.setUint8(ctx.storagePtr, flagValue);
    } else if (intSizeBytes === 2) {
      dv.setUint16(ctx.storagePtr, flagValue, true);
    } else if (intSizeBytes === 4) {
      dv.setUint32(ctx.storagePtr, flagValue, true);
    } else {
      throw new Error(`unrecognized flag size [${intSizeBytes} bytes]`);
    }
    
    ctx.storagePtr += intSizeBytes;
  }
}

function _lowerFlatEnum(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatEnumInner(ctx) {
    _debugLog('[_lowerFlatEnum()] args', { ctx });
    
    const v = ctx.vals[0];
    const isNotEnumObject = typeof v !== 'object'
    || Object.keys(v).length !== 2
    || !('tag' in v);
    if (isNotEnumObject) {
      ctx.vals[0] = { tag: v };
    }
    
    f(ctx);
  }
}

function _lowerFlatOption(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatOptionInner(ctx) {
    _debugLog('[_lowerFlatOption()] args', { ctx });
    
    const v = ctx.vals[0];
    if (v === null || v === undefined) {
      ctx.vals[0] = { tag: 'none' };
    } else {
      const isNotOptionObject = typeof v !== 'object'
      || Object.keys(v).length !== 2
      || !('tag' in v)
      || !(v.tag === 'some' || v.tag === 'none')
      || !('val' in v);
      if (isNotOptionObject) {
        ctx.vals[0] = { tag: 'some', val: v };
      }
    }
    
    f(ctx);
  }
}

function _lowerFlatResult(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatResultInner(ctx) {
    _debugLog('[_lowerFlatResult()] args', { ctx });
    
    const v = ctx.vals[0];
    const isNotResultObject = typeof v !== 'object'
    || Object.keys(v).length !== 2
    || !('tag' in v)
    || !('ok' === v.tag || 'err' === v.tag)
    || !('val' in v);
    if (isNotResultObject) {
      ctx.vals[0] = { tag: 'ok', val: v };
    }
    
    f(ctx);
  };
}

function _lowerFlatOwn(meta) {
  const { lowerFn, componentIdx } = meta;
  
  return function _lowerFlatOwnInner(ctx) {
    _debugLog('[_lowerFlatOwn()] args', { ctx });
    const { createFn } = ctx;
    
    if (ctx.componentIdx !== componentIdx) {
      throw new Error(`component index mismatch (expected [${componentIdx}], lift called from [${ctx.componentIdx}])`);
    }
    
    const obj = ctx.vals[0];
    if (obj === undefined || obj === null) { throw new Error('missing resource'); }
    const handle = lowerFn(obj);
    
    ctx.vals[0] = handle;
    _lowerFlatU32(ctx);
  };
}

const STREAMS = new RepTable({ target: 'global stream map' });
const ASYNC_STATE = new Map();

function getOrCreateAsyncState(componentIdx, init) {
  if (!ASYNC_STATE.has(componentIdx)) {
    const newState = new ComponentAsyncState({ componentIdx });
    ASYNC_STATE.set(componentIdx, newState);
  }
  return ASYNC_STATE.get(componentIdx);
}

class ComponentAsyncState {
  static EVENT_HANDLER_EVENTS = [ 'backpressure-change' ];
  
  #componentIdx;
  #callingAsyncImport = false;
  #syncImportWait = promiseWithResolvers();
  #locked = false;
  #parkedTasks = new Map();
  #suspendedTasksByTaskID = new Map();
  #suspendedTaskIDs = [];
  #errored = null;
  
  #backpressure = 0;
  #backpressureWaiters = 0n;
  
  #handlerMap = new Map();
  #nextHandlerID = 0n;
  
  #tickLoop = null;
  #tickLoopInterval = null;
  
  #onExclusiveReleaseHandlers = [];
  
  mayLeave = true;
  
  handles;
  subtasks;
  
  constructor(args) {
    this.#componentIdx = args.componentIdx;
    this.handles = new RepTable({ target: `component [${this.#componentIdx}] handles (waitable objects)` });
    this.subtasks = new RepTable({ target: `component [${this.#componentIdx}] subtasks` });
  };
  
  componentIdx() { return this.#componentIdx; }
  
  errored() { return this.#errored !== null; }
  setErrored(err) {
    _debugLog('[ComponentAsyncState#setErrored()] component errored', { err, componentIdx: this.#componentIdx });
    if (this.#errored) { return; }
    if (!err) {
      err = new Error('error elswehere (see other component instance error)')
      err.componentIdx = this.#componentIdx;
    }
    this.#errored = err;
  }
  
  callingSyncImport(val) {
    if (val === undefined) { return this.#callingAsyncImport; }
    if (typeof val !== 'boolean') { throw new TypeError('invalid setting for async import'); }
    const prev = this.#callingAsyncImport;
    this.#callingAsyncImport = val;
    if (prev === true && this.#callingAsyncImport === false) {
      this.#notifySyncImportEnd();
    }
  }
  
  #notifySyncImportEnd() {
    const existing = this.#syncImportWait;
    this.#syncImportWait = promiseWithResolvers();
    existing.resolve();
  }
  
  async waitForSyncImportCallEnd() {
    await this.#syncImportWait.promise;
  }
  
  setBackpressure(v) {
    this.#backpressure = v;
    return this.#backpressure
  }
  getBackpressure() { return this.#backpressure; }
  
  incrementBackpressure() {
    const current = this.#backpressure;
    if (current < 0 || current > 2**16) {
      throw new Error(`invalid current backpressure value [${current}]`);
    }
    const newValue = this.getBackpressure() + 1;
    if (newValue >= 2**16) {
      throw new Error(`invalid new backpressure value [${newValue}], overflow`);
    }
    return this.setBackpressure(newValue);
  }
  
  decrementBackpressure() {
    const current = this.#backpressure;
    if (current < 0 || current > 2**16) {
      throw new Error(`invalid current backpressure value [${current}]`);
    }
    const newValue = Math.max(0, current - 1);
    if (newValue < 0) {
      throw new Error(`invalid new backpressure value [${newValue}], underflow`);
    }
    return this.setBackpressure(newValue);
  }
  hasBackpressure() { return this.#backpressure > 0; }
  
  waitForBackpressure() {
    let backpressureCleared = false;
    const cstate = this;
    cstate.addBackpressureWaiter();
    const handlerID = this.registerHandler({
      event: 'backpressure-change',
      fn: (bp) => {
        if (bp === 0) {
          cstate.removeHandler(handlerID);
          backpressureCleared = true;
        }
      }
    });
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (backpressureCleared) { return; }
        clearInterval(interval);
        cstate.removeBackpressureWaiter();
        resolve(null);
      }, 0);
    });
  }
  
  registerHandler(args) {
    const { event, fn } = args;
    if (!event) { throw new Error("missing handler event"); }
    if (!fn) { throw new Error("missing handler fn"); }
    
    if (!ComponentAsyncState.EVENT_HANDLER_EVENTS.includes(event)) {
      throw new Error(`unrecognized event handler [${event}]`);
    }
    
    const handlerID = this.#nextHandlerID++;
    let handlers = this.#handlerMap.get(event);
    if (!handlers) {
      handlers = [];
      this.#handlerMap.set(event, handlers)
    }
    
    handlers.push({ id: handlerID, fn, event });
    return handlerID;
  }
  
  removeHandler(args) {
    const { event, handlerID } = args;
    const registeredHandlers = this.#handlerMap.get(event);
    if (!registeredHandlers) { return; }
    const found = registeredHandlers.find(h => h.id === handlerID);
    if (!found) { return; }
    this.#handlerMap.set(event, this.#handlerMap.get(event).filter(h => h.id !== handlerID));
  }
  
  getBackpressureWaiters() { return this.#backpressureWaiters; }
  addBackpressureWaiter() { this.#backpressureWaiters++; }
  removeBackpressureWaiter() {
    this.#backpressureWaiters--;
    if (this.#backpressureWaiters < 0) {
      throw new Error("unexepctedly negative number of backpressure waiters");
    }
  }
  
  isExclusivelyLocked() { return this.#locked === true; }
  setLocked(locked) {
    this.#locked = locked;
  }
  
  exclusiveLock() {
    _debugLog('[ComponentAsyncState#exclusiveLock()]', {
      locked: this.#locked,
      componentIdx: this.#componentIdx,
    });
    this.setLocked(true);
  }
  
  exclusiveRelease() {
    _debugLog('[ComponentAsyncState#exclusiveRelease()] args', {
      locked: this.#locked,
      componentIdx: this.#componentIdx,
    });
    this.setLocked(false);
    
    this.#onExclusiveReleaseHandlers = this.#onExclusiveReleaseHandlers.filter(v => !!v);
    for (const [idx, f] of this.#onExclusiveReleaseHandlers.entries()) {
      try {
        this.#onExclusiveReleaseHandlers[idx] = null;
        f();
      } catch (err) {
        _debugLog("error while executing handler for next exclusive release", err);
        throw err;
      }
    }
  }
  
  onNextExclusiveRelease(fn) {
    _debugLog('[ComponentAsyncState#()onNextExclusiveRelease] registering');
    this.#onExclusiveReleaseHandlers.push(fn);
  }
  
  // nextTaskPromise & nextTaskQueue are used to await current task completion and queues
  // any tasks attempting to enter() and complete.
  //
  // see: nextTaskExecutionSlot()
  //
  // TODO(threads): this should be unnecessary once threads are properly implemented,
  // as the task.enter() logic should suffice (it should be guaranteed that we cannot re-enter
  // unless the task in question is the current task in the thread execution, and only one can
  // run at a time)
  #nextTaskPromise = Promise.resolve(true);
  #nextTaskQueue = [];
  
  async nextTaskExecutionSlot(args) {
    const { task } = args;
    
    const placeholder = {
      completed: false,
      task,
      promise: task.exitPromise().then(() => {
        placeholder.completed = true;
      }),
    };
    this.#nextTaskQueue.push(placeholder);
    
    let next;
    while (true) {
      await this.#nextTaskPromise;
      
      next = this.#nextTaskQueue.find(placeholder => !placeholder.completed);
      
      // This task is next in the queue, we can continue
      if (next === undefined || next === placeholder) {
        this.#nextTaskPromise = next.promise;
        if (this.#nextTaskQueue.length > 1000) {
          this.#nextTaskQueue = this.#nextTaskQueue.filter(p => !p.completed);
          if (this.#nextTaskQueue.length > 1000) {
            _debugLog('[ComponentAsyncState#()nextTaskExecutionSlot] next task queue length > 1000 even after cleanup, tasks may be leaking');
          }
        }
        break;
      }
      
      // If we get here, this task was *not* next in the queue, continue waiting
      // (at this point the task that *is* next will likely have already set itself
      // as this.#nextTaskPromise)
    }
  }
  
  #getSuspendedTaskMeta(taskID) {
    return this.#suspendedTasksByTaskID.get(taskID);
  }
  
  #removeSuspendedTaskMeta(taskID) {
    _debugLog('[ComponentAsyncState#removeSuspendedTaskMeta()] removing suspended task', {
      taskID,
      componentIdx: this.#componentIdx,
    });
    const idx = this.#suspendedTaskIDs.findIndex(t => t === taskID);
    const meta = this.#suspendedTasksByTaskID.get(taskID);
    this.#suspendedTaskIDs[idx] = null;
    this.#suspendedTasksByTaskID.delete(taskID);
    return meta;
  }
  
  #addSuspendedTaskMeta(meta) {
    if (!meta) { throw new Error('missing task meta'); }
    const taskID = meta.taskID;
    this.#suspendedTasksByTaskID.set(taskID, meta);
    this.#suspendedTaskIDs.push(taskID);
    if (this.#suspendedTasksByTaskID.size < this.#suspendedTaskIDs.length - 10) {
      this.#suspendedTaskIDs = this.#suspendedTaskIDs.filter(t => t !== null);
    }
  }
  
  // TODO(threads): readyFn is normally on the thread
  suspendTask(args) {
    const { task, readyFn } = args;
    const taskID = task.id();
    const componentIdx = task.componentIdx();
    _debugLog('[ComponentAsyncState#suspendTask()]', {
      taskID,
      componentIdx: this.#componentIdx,
      taskEntryFnName: task.entryFnName(),
      subtask: task.getParentSubtask(),
    });
    
    if (componentIdx !== this.#componentIdx) {
      throw new Error('assert: task component idx should match async state');
    }
    
    if (this.#getSuspendedTaskMeta(taskID)) {
      throw new Error(`task [${taskID}] already suspended`);
    }
    
    const { promise, resolve, reject } = promiseWithResolvers();
    this.#addSuspendedTaskMeta({
      task,
      taskID,
      readyFn,
      resume: () => {
        _debugLog('[ComponentAsyncState] resuming suspended task', {
          taskID,
          componentIdx: this.#componentIdx,
        });
        // TODO(threads): it's thread cancellation we should be checking for below, not task
        resolve(!task.isCancelled());
      },
    });
    
    this.runTickLoop();
    
    return promise;
  }
  
  resumeTaskByID(taskID) {
    const meta = this.#removeSuspendedTaskMeta(taskID);
    if (!meta) { return; }
    if (meta.taskID !== taskID) { throw new Error('task ID does not match'); }
    meta.resume();
  }
  
  async runTickLoop() {
    if (this.#tickLoop !== null) { return; }
    this.#tickLoop = 1;
    setTimeout(async () => {
      let done = this.tick();
      while (!done) {
        await new Promise((resolve) => setTimeout(resolve, 30));
        done = this.tick();
      }
      this.#tickLoop = null;
    }, 10);
  }
  
  tick() {
    // _debugLog('[ComponentAsyncState#tick()]', { suspendedTaskIDs: this.#suspendedTaskIDs });
    
    const resumableTasks = this.#suspendedTaskIDs.filter(t => t !== null);
    for (const taskID of resumableTasks) {
      const meta = this.#suspendedTasksByTaskID.get(taskID);
      if (!meta || !meta.readyFn) {
        throw new Error(`missing/invalid task despite ID [${taskID}] being present`);
      }
      
      // If the task failed via any means, allow the task to resume because
      // it's been cancelled -- the callback should immediately exit as well
      if (meta.task.isRejected()) {
        _debugLog('[ComponentAsyncState#tick()] detected task rejection, leaving early', { meta });
        this.resumeTaskByID(taskID);
        return;
      }
      
      const isReady = meta.readyFn();
      if (!isReady) { continue; }
      
      _debugLog('[ComponentAsyncState#tick()] resuming task via tick', {
        taskID,
        componentIdx: this.#componentIdx,
      });
      this.resumeTaskByID(taskID);
    }
    
    return this.#suspendedTaskIDs.filter(t => t !== null).length === 0;
  }
  
  addStreamEndToTable(args) {
    _debugLog('[ComponentAsyncState#addStreamEnd()] args', args);
    const { tableIdx, streamEnd } = args;
    if (typeof streamEnd === 'number') { throw new Error("INSERTING BAD STREAMEND"); }
    
    let { table, componentIdx } = STREAM_TABLES[tableIdx];
    if (componentIdx === undefined || !table) {
      throw new Error(`invalid global stream table state for table [${tableIdx}]`);
    }
    
    const handle = table.insert(streamEnd);
    streamEnd.setHandle(handle);
    streamEnd.setStreamTableIdx(tableIdx);
    
    const cstate = getOrCreateAsyncState(componentIdx);
    const waitableIdx = cstate.handles.insert(streamEnd);
    streamEnd.setWaitableIdx(waitableIdx);
    
    _debugLog('[ComponentAsyncState#addStreamEnd()] added stream end', {
      tableIdx,
      table,
      handle,
      streamEnd,
      destComponentIdx: componentIdx,
    });
    
    return { handle, waitableIdx };
  }
  
  createWaitable(args) {
    return new Waitable({ target: args?.target, });
  }
  
  createReadableStreamEnd(args) {
    _debugLog('[ComponentAsyncState#createStreamEnd()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    
    const { table: localStreamTable, componentIdx } = STREAM_TABLES[tableIdx];
    if (!localStreamTable) {
      throw new Error(`missing global stream table lookup for table [${tableIdx}] while creating stream`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating stream');
    }
    
    const waitable = this.createWaitable();
    const streamEnd = new StreamReadableEnd({
      tableIdx,
      elemMeta,
      hostInjectFn,
      pendingBufferMeta: {},
      target: `stream read end (lowered, @init)`,
      waitable,
    });
    
    streamEnd.setWaitableIdx(this.handles.insert(streamEnd));
    streamEnd.setHandle(localStreamTable.insert(streamEnd));
    if (streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error("unexpectedly mismatched stream table");
    }
    const streamEndWaitableIdx = streamEnd.waitableIdx();
    const streamEndHandle = streamEnd.handle();
    waitable.setTarget(`waitable for stream read end (lowered, waitable [${streamEndWaitableIdx}])`);
    streamEnd.setTarget(`stream read end (lowered, waitable [${streamEndWaitableIdx}])`);
    
    return {
      waitableIdx: streamEndWaitableIdx,
      handle: streamEndHandle,
      streamEnd,
    };
  }
  
  createStream(args) {
    _debugLog('[ComponentAsyncState#createStream()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while adding stream"); }
    if (elemMeta === undefined) { throw new Error("missing element metadata while adding stream"); }
    
    const { table: localStreamTable, componentIdx } = STREAM_TABLES[tableIdx];
    if (!localStreamTable) {
      throw new Error(`missing global stream table lookup for table [${tableIdx}] while creating stream`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating stream');
    }
    
    const readWaitable = this.createWaitable();
    const writeWaitable = this.createWaitable();
    
    const stream = new InternalStream({
      tableIdx,
      elemMeta,
      readWaitable,
      writeWaitable,
      hostInjectFn,
    });
    stream.setGlobalStreamMapRep(STREAMS.insert(stream));
    
    const writeEnd = stream.writeEnd();
    writeEnd.setWaitableIdx(this.handles.insert(writeEnd));
    writeEnd.setHandle(localStreamTable.insert(writeEnd));
    if (writeEnd.streamTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched stream table"); }
    
    const writeEndWaitableIdx = writeEnd.waitableIdx();
    const writeEndHandle = writeEnd.handle();
    writeWaitable.setTarget(`waitable for stream write end (waitable [${writeEndWaitableIdx}])`);
    writeEnd.setTarget(`stream write end (waitable [${writeEndWaitableIdx}])`);
    
    const readEnd = stream.readEnd();
    readEnd.setWaitableIdx(this.handles.insert(readEnd));
    readEnd.setHandle(localStreamTable.insert(readEnd));
    if (readEnd.streamTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched stream table"); }
    
    const readEndWaitableIdx = readEnd.waitableIdx();
    const readEndHandle = readEnd.handle();
    readWaitable.setTarget(`waitable for read end (waitable [${readEndWaitableIdx}])`);
    readEnd.setTarget(`stream read end (waitable [${readEndWaitableIdx}])`);
    
    return {
      writeEnd,
      writeEndWaitableIdx,
      writeEndHandle,
      readEndWaitableIdx,
      readEndHandle,
      readEnd,
    };
  }
  
  getStreamEnd(args) {
    _debugLog('[ComponentAsyncState#getStreamEnd()] args', args);
    const { tableIdx, streamEndHandle, streamEndWaitableIdx } = args;
    if (tableIdx === undefined) {
      throw new Error('missing table idx while getting stream end');
    }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    let streamEnd;
    if (streamEndWaitableIdx !== undefined) {
      streamEnd = cstate.handles.get(streamEndWaitableIdx);
    } else if (streamEndHandle !== undefined) {
      if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while getting stream end`); }
      streamEnd = table.get(streamEndHandle);
    } else {
      throw new TypeError("must specify either waitable idx or handle to retrieve stream");
    }
    
    if (!streamEnd) {
      throw new Error(`missing stream end (tableIdx [${tableIdx}], handle [${streamEndHandle}], waitableIdx [${streamEndWaitableIdx}])`);
    }
    if (tableIdx && streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error(`stream end table idx [${streamEnd.streamTableIdx()}] does not match [${tableIdx}]`);
    }
    
    return streamEnd;
  }
  
  deleteStreamEnd(args) {
    _debugLog('[ComponentAsyncState#deleteStreamEnd()] args', args);
    const { tableIdx, streamEndWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing stream end"); }
    if (streamEndWaitableIdx === undefined) { throw new Error("missing stream idx while removing stream end"); }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const streamEnd = cstate.handles.get(streamEndWaitableIdx);
    if (!streamEnd) {
      throw new Error(`missing stream end [${streamEndWaitableIdx}] in component handles while deleting stream`);
    }
    if (streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error(`stream end table idx [${streamEnd.streamTableIdx()}] does not match [${tableIdx}]`);
    }
    
    let removed = cstate.handles.remove(streamEnd.waitableIdx());
    if (!removed) {
      throw new Error(`failed to remove stream end [${streamEndWaitableIdx}] waitable obj in component [${componentIdx}]`);
    }
    
    removed = table.remove(streamEnd.handle());
    if (!removed) {
      throw new Error(`failed to remove stream end with handle [${streamEnd.handle()}] from stream table [${tableIdx}] in component [${componentIdx}]`);
    }
    
    return streamEnd;
  }
  
  removeStreamEndFromTable(args) {
    _debugLog('[ComponentAsyncState#removeStreamEndFromTable()] args', args);
    
    const { tableIdx, streamWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing stream end"); }
    if (streamWaitableIdx === undefined) {
      throw new Error("missing stream end waitable idx while removing stream end");
    }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while removing stream end`); }
    
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const streamEnd = cstate.handles.get(streamWaitableIdx);
    if (!streamEnd) {
      throw new Error(`missing stream end (handle [${streamWaitableIdx}], table [${tableIdx}])`);
    }
    const handle = streamEnd.handle();
    
    let removed = cstate.handles.remove(streamWaitableIdx);
    if (!removed) {
      throw new Error(`failed to remove streamEnd from handles (waitable idx [${streamWaitableIdx}]), component [${componentIdx}])`);
    }
    
    removed = table.remove(handle);
    if (!removed) {
      throw new Error(`failed to remove streamEnd from table (handle [${handle}]), table [${tableIdx}], component [${componentIdx}])`);
    }
    
    return streamEnd;
  }
  
  createFuture(args) {
    _debugLog('[ComponentAsyncState#createFuture()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while adding future"); }
    if (elemMeta === undefined) { throw new Error("missing element metadata while adding future"); }
    
    const { table: futureTable, componentIdx } = FUTURE_TABLES[tableIdx];
    if (!futureTable) {
      throw new Error(`missing global future table lookup for table [${tableIdx}] while creating future`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating future');
    }
    
    const readWaitable = this.createWaitable();
    const writeWaitable = this.createWaitable();
    
    const future = new InternalFuture({
      tableIdx,
      componentIdx: this.#componentIdx,
      elemMeta,
      readWaitable,
      writeWaitable,
      hostInjectFn,
    });
    future.setGlobalFutureMapRep(FUTURES.insert(future));
    
    const writeEnd = future.writeEnd();
    writeEnd.setWaitableIdx(this.handles.insert(writeEnd));
    writeEnd.setHandle(futureTable.insert(writeEnd));
    if (writeEnd.futureTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched future table"); }
    
    const writeEndWaitableIdx = writeEnd.waitableIdx();
    const writeEndHandle = writeEnd.handle();
    writeWaitable.setTarget(`waitable for future write end (waitable [${writeEndWaitableIdx}])`);
    writeEnd.setTarget(`future write end (waitable [${writeEndWaitableIdx}])`);
    
    const readEnd = future.readEnd();
    readEnd.setWaitableIdx(this.handles.insert(readEnd));
    readEnd.setHandle(futureTable.insert(readEnd));
    if (readEnd.futureTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched future table"); }
    
    const readEndWaitableIdx = readEnd.waitableIdx();
    const readEndHandle = readEnd.handle();
    readWaitable.setTarget(`waitable for read end (waitable [${readEndWaitableIdx}])`);
    readEnd.setTarget(`future read end (waitable [${readEndWaitableIdx}])`);
    
    return {
      writeEnd,
      writeEndWaitableIdx,
      writeEndHandle,
      readEndWaitableIdx,
      readEndHandle,
      readEnd,
    };
  }
  
  getFutureEnd(args) {
    _debugLog('[ComponentAsyncState#getFutureEnd()] args', args);
    const { tableIdx, futureEndHandle, futureEndWaitableIdx } = args;
    if (tableIdx === undefined) {
      throw new Error('missing table idx while getting future end');
    }
    
    const { table, componentIdx } = FUTURE_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    let futureEnd;
    if (futureEndWaitableIdx !== undefined) {
      futureEnd = cstate.handles.get(futureEndWaitableIdx);
    } else if (futureEndHandle !== undefined) {
      if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while getting future end`); }
      futureEnd = table.get(futureEndHandle);
    } else {
      throw new TypeError("must specify either waitable idx or handle to retrieve future");
    }
    
    if (!futureEnd) {
      throw new Error(`missing future end (tableIdx [${tableIdx}], handle [${futureEndHandle}], waitableIdx [${futureEndWaitableIdx}])`);
    }
    if (tableIdx && futureEnd.futureTableIdx() !== tableIdx) {
      throw new Error(`future end table idx [${futureEnd.futureTableIdx()}] does not match [${tableIdx}]`);
    }
    
    return futureEnd;
  }
  
  removeFutureEndFromTable(args) {
    _debugLog('[ComponentAsyncState#removeFutureEndFromTable()] args', args);
    
    const { tableIdx, futureWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing future end"); }
    if (futureWaitableIdx === undefined) {
      throw new Error("missing future end waitable idx while removing future end");
    }
    
    const { table, componentIdx } = FUTURE_TABLES[tableIdx];
    if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while removing future end`); }
    
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const futureEnd = cstate.handles.get(futureWaitableIdx);
    if (!futureEnd) {
      throw new Error(`missing future end (handle [${futureWaitableIdx}], table [${tableIdx}])`);
    }
    const handle = futureEnd.handle();
    
    let removed = cstate.handles.remove(futureWaitableIdx);
    if (!removed) {
      throw new Error(`failed to remove futureEnd from handles (waitable idx [${futureWaitableIdx}]), component [${componentIdx}])`);
    }
    
    removed = table.remove(handle);
    if (!removed) {
      throw new Error(`failed to remove futureEnd from table (handle [${handle}]), table [${tableIdx}], component [${componentIdx}])`);
    }
    
    return futureEnd;
  }
  
}

const base64Compile = str => WebAssembly.compile(
typeof Buffer !== 'undefined'
? Buffer.from(str, 'base64')
: Uint8Array.from(atob(str), b => b.charCodeAt(0))
);


function clampGuest(i, min, max) {
  if (i < min || i > max) {
    throw new TypeError(`must be between ${min} and ${max}`);
  }
  return i;
}


const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('node:fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const symbolCabiDispose = Symbol.for('cabiDispose');

const symbolRscHandle = Symbol('handle');

const symbolRscRep = Symbol.for('cabiRep');

const HANDLE_TABLES= [];


class ComponentError extends Error {
  constructor (value) {
    const enumerable = typeof value !== 'string';
    super(enumerable ? `${String(value)} (see error.payload)` : value);
    Object.defineProperty(this, 'payload', { value, enumerable });
  }
}

function getErrorPayload(e) {
  if (e && hasOwnProperty.call(e, 'payload')) return e.payload;
  if (e instanceof Error) throw e;
  return e;
}

const isLE = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;

function throwInvalidBool() {
  throw new TypeError('invalid variant discriminant for bool');
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

const instantiateCore = WebAssembly.instantiate;


let exports0;

const _trampoline0 = function() {
  _debugLog('[iface="wasi:random/random@0.2.9", function="get-random-u64"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getRandomU64',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getRandomU64(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="wasi:random/random@0.2.9", function="get-random-u64"][Instruction::Return]', {
    funcName: 'get-random-u64',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([toUint64(ret)]);
  task.exit();
  return toUint64(ret);
}
_trampoline0.fnName = 'wasi:random/random@0.2.9#getRandomU64';

const _trampoline13 = function(arg0) {
  let variant0;
  switch (arg0) {
    case 0: {
      variant0= {
        tag: 'ok',
        val: undefined
      };
      break;
    }
    case 1: {
      variant0= {
        tag: 'err',
        val: undefined
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  _debugLog('[iface="wasi:cli/exit@0.2.9", function="exit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'exit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => exit(variant0),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="wasi:cli/exit@0.2.9", function="exit"][Instruction::Return]', {
    funcName: 'exit',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline13.fnName = 'wasi:cli/exit@0.2.9#exit';

const handleTable0 = [T_FLAG, 0];
handleTable0._createdReps = new Set();


const captureTable0= new Map();
let captureCnt0= 0;

HANDLE_TABLES[0] = handleTable0;

const _trampoline14 = async function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable0[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable0.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Pollable.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/poll@0.2.9", function="[method]pollable.block"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'block',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  
  const started = await task.enter({ isHost: hostProvided });
  if (!started) {
    _debugLog('[Instruction::CallInterface] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  let ret;
  
  try {
    ret = await  _withGlobalCurrentTaskMetaAsync({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.block(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during async call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  _debugLog('[iface="wasi:io/poll@0.2.9", function="[method]pollable.block"][Instruction::Return]', {
    funcName: '[method]pollable.block',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline14.fnName = 'wasi:io/poll@0.2.9#block';
_trampoline14.manuallyAsync = true;

const handleTable2 = [T_FLAG, 0];
handleTable2._createdReps = new Set();


const captureTable2= new Map();
let captureCnt2= 0;

HANDLE_TABLES[2] = handleTable2;

const _trampoline15 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable2[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable2.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(InputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]input-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]input-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]input-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline15.fnName = 'wasi:io/streams@0.2.9#subscribe';

const handleTable3 = [T_FLAG, 0];
handleTable3._createdReps = new Set();


const captureTable3= new Map();
let captureCnt3= 0;

HANDLE_TABLES[3] = handleTable3;

const _trampoline16 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]output-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline16.fnName = 'wasi:io/streams@0.2.9#subscribe';

const _trampoline17 = function() {
  _debugLog('[iface="wasi:cli/stdin@0.2.9", function="get-stdin"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStdin',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStdin(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof InputStream)) {
    throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt2;
    captureTable2.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable2, rep);
  }
  
  _debugLog('[iface="wasi:cli/stdin@0.2.9", function="get-stdin"][Instruction::Return]', {
    funcName: 'get-stdin',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline17.fnName = 'wasi:cli/stdin@0.2.9#getStdin';

const _trampoline18 = function() {
  _debugLog('[iface="wasi:cli/stdout@0.2.9", function="get-stdout"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStdout',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStdout(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof OutputStream)) {
    throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt3;
    captureTable3.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable3, rep);
  }
  
  _debugLog('[iface="wasi:cli/stdout@0.2.9", function="get-stdout"][Instruction::Return]', {
    funcName: 'get-stdout',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline18.fnName = 'wasi:cli/stdout@0.2.9#getStdout';

const _trampoline19 = function() {
  _debugLog('[iface="wasi:cli/stderr@0.2.9", function="get-stderr"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStderr',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStderr(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof OutputStream)) {
    throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt3;
    captureTable3.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable3, rep);
  }
  
  _debugLog('[iface="wasi:cli/stderr@0.2.9", function="get-stderr"][Instruction::Return]', {
    funcName: 'get-stderr',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline19.fnName = 'wasi:cli/stderr@0.2.9#getStderr';

const _trampoline20 = function() {
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="now"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'now',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => now(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="now"][Instruction::Return]', {
    funcName: 'now',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([toUint64(ret)]);
  task.exit();
  return toUint64(ret);
}
_trampoline20.fnName = 'wasi:clocks/monotonic-clock@0.2.9#now';

const _trampoline21 = function(arg0) {
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-instant"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribeInstant',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => subscribeInstant(BigInt.asUintN(64, BigInt(arg0))),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-instant"][Instruction::Return]', {
    funcName: 'subscribe-instant',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline21.fnName = 'wasi:clocks/monotonic-clock@0.2.9#subscribeInstant';

const _trampoline22 = function(arg0) {
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-duration"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribeDuration',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => subscribeDuration(BigInt.asUintN(64, BigInt(arg0))),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-duration"][Instruction::Return]', {
    funcName: 'subscribe-duration',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline22.fnName = 'wasi:clocks/monotonic-clock@0.2.9#subscribeDuration';

const handleTable7 = [T_FLAG, 0];
handleTable7._createdReps = new Set();


const captureTable7= new Map();
let captureCnt7= 0;

HANDLE_TABLES[7] = handleTable7;

const _trampoline23 = function() {
  _debugLog('[iface="wasi:sockets/instance-network@0.2.9", function="instance-network"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'instanceNetwork',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => instanceNetwork(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof Network)) {
    throw new TypeError('Resource error: Not a valid \"Network\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt7;
    captureTable7.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable7, rep);
  }
  
  _debugLog('[iface="wasi:sockets/instance-network@0.2.9", function="instance-network"][Instruction::Return]', {
    funcName: 'instance-network',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline23.fnName = 'wasi:sockets/instance-network@0.2.9#instanceNetwork';

const handleTable8 = [T_FLAG, 0];
handleTable8._createdReps = new Set();


const captureTable8= new Map();
let captureCnt8= 0;

HANDLE_TABLES[8] = handleTable8;

const _trampoline24 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.subscribe"][Instruction::Return]', {
    funcName: '[method]udp-socket.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline24.fnName = 'wasi:sockets/udp@0.2.9#subscribe';

const handleTable9 = [T_FLAG, 0];
handleTable9._createdReps = new Set();


const captureTable9= new Map();
let captureCnt9= 0;

HANDLE_TABLES[9] = handleTable9;

const _trampoline25 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable9[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable9.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(IncomingDatagramStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]incoming-datagram-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]incoming-datagram-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]incoming-datagram-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline25.fnName = 'wasi:sockets/udp@0.2.9#subscribe';

const handleTable10 = [T_FLAG, 0];
handleTable10._createdReps = new Set();


const captureTable10= new Map();
let captureCnt10= 0;

HANDLE_TABLES[10] = handleTable10;

const _trampoline26 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable10[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable10.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutgoingDatagramStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]outgoing-datagram-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline26.fnName = 'wasi:sockets/udp@0.2.9#subscribe';

const handleTable11 = [T_FLAG, 0];
handleTable11._createdReps = new Set();


const captureTable11= new Map();
let captureCnt11= 0;

HANDLE_TABLES[11] = handleTable11;

const _trampoline27 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.is-listening"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'isListening',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.isListening(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.is-listening"][Instruction::Return]', {
    funcName: '[method]tcp-socket.is-listening',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([ret ? 1 : 0]);
  task.exit();
  return ret ? 1 : 0;
}
_trampoline27.fnName = 'wasi:sockets/tcp@0.2.9#isListening';

const _trampoline28 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.subscribe"][Instruction::Return]', {
    funcName: '[method]tcp-socket.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline28.fnName = 'wasi:sockets/tcp@0.2.9#subscribe';

const handleTable12 = [T_FLAG, 0];
handleTable12._createdReps = new Set();


const captureTable12= new Map();
let captureCnt12= 0;

HANDLE_TABLES[12] = handleTable12;

const _trampoline29 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable12[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable12.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(ResolveAddressStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="[method]resolve-address-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="[method]resolve-address-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]resolve-address-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline29.fnName = 'wasi:sockets/ip-name-lookup@0.2.9#subscribe';
let exports1;
let exports2;
let memory0;
let realloc0;
let realloc0Async;
let realloc1;
let realloc1Async;

const _trampoline30 = function(arg0) {
  _debugLog('[iface="wasi:random/insecure-seed@0.2.9", function="insecure-seed"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'insecureSeed',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => insecureSeed(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var [tuple0_0, tuple0_1] = ret;
  dataView(memory0).setBigInt64(arg0 + 0, toUint64(tuple0_0), true);
  dataView(memory0).setBigInt64(arg0 + 8, toUint64(tuple0_1), true);
  _debugLog('[iface="wasi:random/insecure-seed@0.2.9", function="insecure-seed"][Instruction::Return]', {
    funcName: 'insecure-seed',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline30.fnName = 'wasi:random/insecure-seed@0.2.9#insecureSeed';

const _trampoline31 = async function(arg0, arg1, arg2) {
  var len3 = arg1;
  var base3 = arg0;
  var result3 = [];
  for (let i = 0; i < len3; i++) {
    const base = base3 + i * 4;
    var handle1 = dataView(memory0).getInt32(base + 0, true);
    
    var rep2 = handleTable0[(handle1 << 1) + 1] & ~T_FLAG;
    var rsc0 = captureTable0.get(rep2);
    if (!rsc0) {
      rsc0 = Object.create(Pollable.prototype);
      Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
      Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
    }
    
    curResourceBorrows.push(rsc0);
    result3.push(rsc0);
  }
  _debugLog('[iface="wasi:io/poll@0.2.9", function="poll"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'poll',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  
  const started = await task.enter({ isHost: hostProvided });
  if (!started) {
    _debugLog('[Instruction::CallInterface] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  let ret;
  
  try {
    ret = await  _withGlobalCurrentTaskMetaAsync({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => poll(result3),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during async call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  var val4 = ret;
  var len4 = val4.length;
  var ptr4 = realloc0(0, 0, 4, len4 * 4);
  
  let valData4;
  const valLenBytes4 = len4 * 4;
  if (Array.isArray(val4)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv4 = new DataView(memory0.buffer);
    for (const v of val4) {
      _requireValidNumericPrimitive.bind(null, 'u32')(v);
      dv4.setUint32(ptr4+ offset, v, true);
      offset += 4;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData4 = new Uint8Array(val4.buffer || val4, val4.byteOffset, valLenBytes4);
    const out4 = new Uint8Array(memory0.buffer, ptr4, valLenBytes4);
    out4.set(valData4);
  }
  
  dataView(memory0).setUint32(arg2 + 4, len4, true);
  dataView(memory0).setUint32(arg2 + 0, ptr4, true);
  _debugLog('[iface="wasi:io/poll@0.2.9", function="poll"][Instruction::Return]', {
    funcName: 'poll',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline31.fnName = 'wasi:io/poll@0.2.9#poll';
_trampoline31.manuallyAsync = true;

const handleTable1 = [T_FLAG, 0];
handleTable1._createdReps = new Set();


const captureTable1= new Map();
let captureCnt1= 0;

HANDLE_TABLES[1] = handleTable1;

const _trampoline32 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable2[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable2.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(InputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]input-stream.read"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'read',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.read(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant6 = ret;
switch (variant6.tag) {
  case 'ok': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    var val3 = e;
    var len3 = Array.isArray(val3) ? val3.length : val3.byteLength;
    var ptr3 = realloc0(0, 0, 1, len3 * 1);
    
    let valData3;
    const valLenBytes3 = len3 * 1;
    if (Array.isArray(val3)) {
      // Regular array likely containing numbers, write values to memory
      let offset = 0;
      const dv3 = new DataView(memory0.buffer);
      for (const v of val3) {
        _requireValidNumericPrimitive.bind(null, 'u8')(v);
        dv3.setUint8(ptr3+ offset, v, true);
        offset += 1;
      }
    } else {
      // TypedArray / ArrayBuffer-like, direct copy
      valData3 = new Uint8Array(val3.buffer || val3, val3.byteOffset, valLenBytes3);
      const out3 = new Uint8Array(memory0.buffer, ptr3, valLenBytes3);
      out3.set(valData3);
    }
    
    dataView(memory0).setUint32(arg2 + 8, len3, true);
    dataView(memory0).setUint32(arg2 + 4, ptr3, true);
    
    break;
  }
  case 'err': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var variant5 = e;
    switch (variant5.tag) {
      case 'last-operation-failed': {
        const e = variant5.val;
        dataView(memory0).setInt8(arg2 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle4 = e[symbolRscHandle];
        if (!handle4) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle4 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg2 + 8, handle4, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg2 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant5.tag)}\` (received \`${variant5}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant6, valueType: typeof variant6});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]input-stream.read"][Instruction::Return]', {
  funcName: '[method]input-stream.read',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline32.fnName = 'wasi:io/streams@0.2.9#read';

const _trampoline33 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.check-write"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'checkWrite',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.checkWrite(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var variant4 = e;
    switch (variant4.tag) {
      case 'last-operation-failed': {
        const e = variant4.val;
        dataView(memory0).setInt8(arg1 + 8, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle3 = e[symbolRscHandle];
        if (!handle3) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle3 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg1 + 12, handle3, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg1 + 8, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant4.tag)}\` (received \`${variant4}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.check-write"][Instruction::Return]', {
  funcName: '[method]output-stream.check-write',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline33.fnName = 'wasi:io/streams@0.2.9#checkWrite';

const _trampoline34 = function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var ptr3 = arg1;
  var len3 = arg2;
  var result3 = new Uint8Array(memory0.buffer.slice(ptr3, ptr3 + len3 * 1));
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.write"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'write',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.write(result3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant6 = ret;
switch (variant6.tag) {
  case 'ok': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var variant5 = e;
    switch (variant5.tag) {
      case 'last-operation-failed': {
        const e = variant5.val;
        dataView(memory0).setInt8(arg3 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle4 = e[symbolRscHandle];
        if (!handle4) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle4 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg3 + 8, handle4, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg3 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant5.tag)}\` (received \`${variant5}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant6, valueType: typeof variant6});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.write"][Instruction::Return]', {
  funcName: '[method]output-stream.write',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline34.fnName = 'wasi:io/streams@0.2.9#write';

const _trampoline35 = async function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-flush"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'blockingFlush',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  
  const started = await task.enter({ isHost: hostProvided });
  if (!started) {
    _debugLog('[Instruction::CallInterface] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  let ret;
  try {
    ret = { tag: 'ok', val: await  _withGlobalCurrentTaskMetaAsync({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.blockingFlush(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var variant4 = e;
    switch (variant4.tag) {
      case 'last-operation-failed': {
        const e = variant4.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle3 = e[symbolRscHandle];
        if (!handle3) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle3 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg1 + 8, handle3, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant4.tag)}\` (received \`${variant4}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-flush"][Instruction::Return]', {
  funcName: '[method]output-stream.blocking-flush',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline35.fnName = 'wasi:io/streams@0.2.9#blockingFlush';
_trampoline35.manuallyAsync = true;

const handleTable6 = [T_FLAG, 0];
handleTable6._createdReps = new Set();


const captureTable6= new Map();
let captureCnt6= 0;

HANDLE_TABLES[6] = handleTable6;

const _trampoline36 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.read-via-stream"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'readViaStream',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.readViaStream(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    if (!(e instanceof InputStream)) {
      throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
    }
    var handle3 = e[symbolRscHandle];
    if (!handle3) {
      const rep = e[symbolRscRep] || ++captureCnt2;
      captureTable2.set(rep, e);
      handle3 = rscTableCreateOwn(handleTable2, rep);
    }
    
    dataView(memory0).setInt32(arg2 + 4, handle3, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 4, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.read-via-stream"][Instruction::Return]', {
  funcName: '[method]descriptor.read-via-stream',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline36.fnName = 'wasi:filesystem/types@0.2.9#readViaStream';

const _trampoline37 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.write-via-stream"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'writeViaStream',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.writeViaStream(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    if (!(e instanceof OutputStream)) {
      throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
    }
    var handle3 = e[symbolRscHandle];
    if (!handle3) {
      const rep = e[symbolRscRep] || ++captureCnt3;
      captureTable3.set(rep, e);
      handle3 = rscTableCreateOwn(handleTable3, rep);
    }
    
    dataView(memory0).setInt32(arg2 + 4, handle3, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 4, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.write-via-stream"][Instruction::Return]', {
  funcName: '[method]descriptor.write-via-stream',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline37.fnName = 'wasi:filesystem/types@0.2.9#writeViaStream';

const _trampoline38 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.append-via-stream"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'appendViaStream',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.appendViaStream(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    if (!(e instanceof OutputStream)) {
      throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
    }
    var handle3 = e[symbolRscHandle];
    if (!handle3) {
      const rep = e[symbolRscRep] || ++captureCnt3;
      captureTable3.set(rep, e);
      handle3 = rscTableCreateOwn(handleTable3, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 4, handle3, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.append-via-stream"][Instruction::Return]', {
  funcName: '[method]descriptor.append-via-stream',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline38.fnName = 'wasi:filesystem/types@0.2.9#appendViaStream';

const _trampoline39 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.get-flags"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getFlags',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.getFlags(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    let flags3 = 0;
    if (typeof e === 'object' && e !== null) {
      flags3 = Boolean(e.read) << 0 | Boolean(e.write) << 1 | Boolean(e.fileIntegritySync) << 2 | Boolean(e.dataIntegritySync) << 3 | Boolean(e.requestedWriteSync) << 4 | Boolean(e.mutateDirectory) << 5;
    } else if (e !== null && e!== undefined) {
      throw new TypeError('only an object, undefined or null can be converted to flags');
    }
    dataView(memory0).setInt8(arg1 + 1, flags3, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.get-flags"][Instruction::Return]', {
  funcName: '[method]descriptor.get-flags',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline39.fnName = 'wasi:filesystem/types@0.2.9#getFlags';

const _trampoline40 = function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var ptr3 = arg1;
  var len3 = arg2;
  var result3 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr3, len3));
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.create-directory-at"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'createDirectoryAt',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.createDirectoryAt(result3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg3 + 1, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.create-directory-at"][Instruction::Return]', {
  funcName: '[method]descriptor.create-directory-at',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline40.fnName = 'wasi:filesystem/types@0.2.9#createDirectoryAt';

const _trampoline41 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.stat"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'stat',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.stat(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant12 = ret;
switch (variant12.tag) {
  case 'ok': {
    const e = variant12.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var {type: v3_0, linkCount: v3_1, size: v3_2, dataAccessTimestamp: v3_3, dataModificationTimestamp: v3_4, statusChangeTimestamp: v3_5 } = e;
    var val4 = v3_0;
    let enum4;
    switch (val4) {
      case 'unknown': {
        enum4 = 0;
        break;
      }
      case 'block-device': {
        enum4 = 1;
        break;
      }
      case 'character-device': {
        enum4 = 2;
        break;
      }
      case 'directory': {
        enum4 = 3;
        break;
      }
      case 'fifo': {
        enum4 = 4;
        break;
      }
      case 'symbolic-link': {
        enum4 = 5;
        break;
      }
      case 'regular-file': {
        enum4 = 6;
        break;
      }
      case 'socket': {
        enum4 = 7;
        break;
      }
      default: {
        if ((v3_0) instanceof Error) {
          console.error(v3_0);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of descriptor-type`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum4, true);
    dataView(memory0).setBigInt64(arg1 + 16, toUint64(v3_1), true);
    dataView(memory0).setBigInt64(arg1 + 24, toUint64(v3_2), true);
    var variant6 = v3_3;
    if (variant6 === null || variant6=== undefined) {
      dataView(memory0).setInt8(arg1 + 32, 0, true);
    } else {
      const e = variant6;
      dataView(memory0).setInt8(arg1 + 32, 1, true);
      var {seconds: v5_0, nanoseconds: v5_1 } = e;
      dataView(memory0).setBigInt64(arg1 + 40, toUint64(v5_0), true);
      dataView(memory0).setInt32(arg1 + 48, toUint32(v5_1), true);
    }
    var variant8 = v3_4;
    if (variant8 === null || variant8=== undefined) {
      dataView(memory0).setInt8(arg1 + 56, 0, true);
    } else {
      const e = variant8;
      dataView(memory0).setInt8(arg1 + 56, 1, true);
      var {seconds: v7_0, nanoseconds: v7_1 } = e;
      dataView(memory0).setBigInt64(arg1 + 64, toUint64(v7_0), true);
      dataView(memory0).setInt32(arg1 + 72, toUint32(v7_1), true);
    }
    var variant10 = v3_5;
    if (variant10 === null || variant10=== undefined) {
      dataView(memory0).setInt8(arg1 + 80, 0, true);
    } else {
      const e = variant10;
      dataView(memory0).setInt8(arg1 + 80, 1, true);
      var {seconds: v9_0, nanoseconds: v9_1 } = e;
      dataView(memory0).setBigInt64(arg1 + 88, toUint64(v9_0), true);
      dataView(memory0).setInt32(arg1 + 96, toUint32(v9_1), true);
    }
    
    break;
  }
  case 'err': {
    const e = variant12.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val11 = e;
    let enum11;
    switch (val11) {
      case 'access': {
        enum11 = 0;
        break;
      }
      case 'would-block': {
        enum11 = 1;
        break;
      }
      case 'already': {
        enum11 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum11 = 3;
        break;
      }
      case 'busy': {
        enum11 = 4;
        break;
      }
      case 'deadlock': {
        enum11 = 5;
        break;
      }
      case 'quota': {
        enum11 = 6;
        break;
      }
      case 'exist': {
        enum11 = 7;
        break;
      }
      case 'file-too-large': {
        enum11 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum11 = 9;
        break;
      }
      case 'in-progress': {
        enum11 = 10;
        break;
      }
      case 'interrupted': {
        enum11 = 11;
        break;
      }
      case 'invalid': {
        enum11 = 12;
        break;
      }
      case 'io': {
        enum11 = 13;
        break;
      }
      case 'is-directory': {
        enum11 = 14;
        break;
      }
      case 'loop': {
        enum11 = 15;
        break;
      }
      case 'too-many-links': {
        enum11 = 16;
        break;
      }
      case 'message-size': {
        enum11 = 17;
        break;
      }
      case 'name-too-long': {
        enum11 = 18;
        break;
      }
      case 'no-device': {
        enum11 = 19;
        break;
      }
      case 'no-entry': {
        enum11 = 20;
        break;
      }
      case 'no-lock': {
        enum11 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum11 = 22;
        break;
      }
      case 'insufficient-space': {
        enum11 = 23;
        break;
      }
      case 'not-directory': {
        enum11 = 24;
        break;
      }
      case 'not-empty': {
        enum11 = 25;
        break;
      }
      case 'not-recoverable': {
        enum11 = 26;
        break;
      }
      case 'unsupported': {
        enum11 = 27;
        break;
      }
      case 'no-tty': {
        enum11 = 28;
        break;
      }
      case 'no-such-device': {
        enum11 = 29;
        break;
      }
      case 'overflow': {
        enum11 = 30;
        break;
      }
      case 'not-permitted': {
        enum11 = 31;
        break;
      }
      case 'pipe': {
        enum11 = 32;
        break;
      }
      case 'read-only': {
        enum11 = 33;
        break;
      }
      case 'invalid-seek': {
        enum11 = 34;
        break;
      }
      case 'text-file-busy': {
        enum11 = 35;
        break;
      }
      case 'cross-device': {
        enum11 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val11}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum11, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant12, valueType: typeof variant12});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.stat"][Instruction::Return]', {
  funcName: '[method]descriptor.stat',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline41.fnName = 'wasi:filesystem/types@0.2.9#stat';

const _trampoline42 = function(arg0, arg1, arg2, arg3, arg4) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  if ((arg1 & 4294967294) !== 0) {
    throw new TypeError('flags have extraneous bits set');
  }
  var flags3 = {
    symlinkFollow: Boolean(arg1 & 1),
  };
  var ptr4 = arg2;
  var len4 = arg3;
  var result4 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr4, len4));
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.stat-at"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'statAt',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.statAt(flags3, result4),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant14 = ret;
switch (variant14.tag) {
  case 'ok': {
    const e = variant14.val;
    dataView(memory0).setInt8(arg4 + 0, 0, true);
    var {type: v5_0, linkCount: v5_1, size: v5_2, dataAccessTimestamp: v5_3, dataModificationTimestamp: v5_4, statusChangeTimestamp: v5_5 } = e;
    var val6 = v5_0;
    let enum6;
    switch (val6) {
      case 'unknown': {
        enum6 = 0;
        break;
      }
      case 'block-device': {
        enum6 = 1;
        break;
      }
      case 'character-device': {
        enum6 = 2;
        break;
      }
      case 'directory': {
        enum6 = 3;
        break;
      }
      case 'fifo': {
        enum6 = 4;
        break;
      }
      case 'symbolic-link': {
        enum6 = 5;
        break;
      }
      case 'regular-file': {
        enum6 = 6;
        break;
      }
      case 'socket': {
        enum6 = 7;
        break;
      }
      default: {
        if ((v5_0) instanceof Error) {
          console.error(v5_0);
        }
        
        throw new TypeError(`"${val6}" is not one of the cases of descriptor-type`);
      }
    }
    dataView(memory0).setInt8(arg4 + 8, enum6, true);
    dataView(memory0).setBigInt64(arg4 + 16, toUint64(v5_1), true);
    dataView(memory0).setBigInt64(arg4 + 24, toUint64(v5_2), true);
    var variant8 = v5_3;
    if (variant8 === null || variant8=== undefined) {
      dataView(memory0).setInt8(arg4 + 32, 0, true);
    } else {
      const e = variant8;
      dataView(memory0).setInt8(arg4 + 32, 1, true);
      var {seconds: v7_0, nanoseconds: v7_1 } = e;
      dataView(memory0).setBigInt64(arg4 + 40, toUint64(v7_0), true);
      dataView(memory0).setInt32(arg4 + 48, toUint32(v7_1), true);
    }
    var variant10 = v5_4;
    if (variant10 === null || variant10=== undefined) {
      dataView(memory0).setInt8(arg4 + 56, 0, true);
    } else {
      const e = variant10;
      dataView(memory0).setInt8(arg4 + 56, 1, true);
      var {seconds: v9_0, nanoseconds: v9_1 } = e;
      dataView(memory0).setBigInt64(arg4 + 64, toUint64(v9_0), true);
      dataView(memory0).setInt32(arg4 + 72, toUint32(v9_1), true);
    }
    var variant12 = v5_5;
    if (variant12 === null || variant12=== undefined) {
      dataView(memory0).setInt8(arg4 + 80, 0, true);
    } else {
      const e = variant12;
      dataView(memory0).setInt8(arg4 + 80, 1, true);
      var {seconds: v11_0, nanoseconds: v11_1 } = e;
      dataView(memory0).setBigInt64(arg4 + 88, toUint64(v11_0), true);
      dataView(memory0).setInt32(arg4 + 96, toUint32(v11_1), true);
    }
    
    break;
  }
  case 'err': {
    const e = variant14.val;
    dataView(memory0).setInt8(arg4 + 0, 1, true);
    var val13 = e;
    let enum13;
    switch (val13) {
      case 'access': {
        enum13 = 0;
        break;
      }
      case 'would-block': {
        enum13 = 1;
        break;
      }
      case 'already': {
        enum13 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum13 = 3;
        break;
      }
      case 'busy': {
        enum13 = 4;
        break;
      }
      case 'deadlock': {
        enum13 = 5;
        break;
      }
      case 'quota': {
        enum13 = 6;
        break;
      }
      case 'exist': {
        enum13 = 7;
        break;
      }
      case 'file-too-large': {
        enum13 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum13 = 9;
        break;
      }
      case 'in-progress': {
        enum13 = 10;
        break;
      }
      case 'interrupted': {
        enum13 = 11;
        break;
      }
      case 'invalid': {
        enum13 = 12;
        break;
      }
      case 'io': {
        enum13 = 13;
        break;
      }
      case 'is-directory': {
        enum13 = 14;
        break;
      }
      case 'loop': {
        enum13 = 15;
        break;
      }
      case 'too-many-links': {
        enum13 = 16;
        break;
      }
      case 'message-size': {
        enum13 = 17;
        break;
      }
      case 'name-too-long': {
        enum13 = 18;
        break;
      }
      case 'no-device': {
        enum13 = 19;
        break;
      }
      case 'no-entry': {
        enum13 = 20;
        break;
      }
      case 'no-lock': {
        enum13 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum13 = 22;
        break;
      }
      case 'insufficient-space': {
        enum13 = 23;
        break;
      }
      case 'not-directory': {
        enum13 = 24;
        break;
      }
      case 'not-empty': {
        enum13 = 25;
        break;
      }
      case 'not-recoverable': {
        enum13 = 26;
        break;
      }
      case 'unsupported': {
        enum13 = 27;
        break;
      }
      case 'no-tty': {
        enum13 = 28;
        break;
      }
      case 'no-such-device': {
        enum13 = 29;
        break;
      }
      case 'overflow': {
        enum13 = 30;
        break;
      }
      case 'not-permitted': {
        enum13 = 31;
        break;
      }
      case 'pipe': {
        enum13 = 32;
        break;
      }
      case 'read-only': {
        enum13 = 33;
        break;
      }
      case 'invalid-seek': {
        enum13 = 34;
        break;
      }
      case 'text-file-busy': {
        enum13 = 35;
        break;
      }
      case 'cross-device': {
        enum13 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val13}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg4 + 8, enum13, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant14, valueType: typeof variant14});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.stat-at"][Instruction::Return]', {
  funcName: '[method]descriptor.stat-at',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline42.fnName = 'wasi:filesystem/types@0.2.9#statAt';

const _trampoline43 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  if ((arg1 & 4294967294) !== 0) {
    throw new TypeError('flags have extraneous bits set');
  }
  var flags3 = {
    symlinkFollow: Boolean(arg1 & 1),
  };
  var ptr4 = arg2;
  var len4 = arg3;
  var result4 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr4, len4));
  if ((arg4 & 4294967280) !== 0) {
    throw new TypeError('flags have extraneous bits set');
  }
  var flags5 = {
    create: Boolean(arg4 & 1),
    directory: Boolean(arg4 & 2),
    exclusive: Boolean(arg4 & 4),
    truncate: Boolean(arg4 & 8),
  };
  if ((arg5 & 4294967232) !== 0) {
    throw new TypeError('flags have extraneous bits set');
  }
  var flags6 = {
    read: Boolean(arg5 & 1),
    write: Boolean(arg5 & 2),
    fileIntegritySync: Boolean(arg5 & 4),
    dataIntegritySync: Boolean(arg5 & 8),
    requestedWriteSync: Boolean(arg5 & 16),
    mutateDirectory: Boolean(arg5 & 32),
  };
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.open-at"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'openAt',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.openAt(flags3, result4, flags5, flags6),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg6 + 0, 0, true);
    
    if (!(e instanceof Descriptor)) {
      throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
    }
    var handle7 = e[symbolRscHandle];
    if (!handle7) {
      const rep = e[symbolRscRep] || ++captureCnt6;
      captureTable6.set(rep, e);
      handle7 = rscTableCreateOwn(handleTable6, rep);
    }
    
    dataView(memory0).setInt32(arg6 + 4, handle7, true);
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg6 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'access': {
        enum8 = 0;
        break;
      }
      case 'would-block': {
        enum8 = 1;
        break;
      }
      case 'already': {
        enum8 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum8 = 3;
        break;
      }
      case 'busy': {
        enum8 = 4;
        break;
      }
      case 'deadlock': {
        enum8 = 5;
        break;
      }
      case 'quota': {
        enum8 = 6;
        break;
      }
      case 'exist': {
        enum8 = 7;
        break;
      }
      case 'file-too-large': {
        enum8 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum8 = 9;
        break;
      }
      case 'in-progress': {
        enum8 = 10;
        break;
      }
      case 'interrupted': {
        enum8 = 11;
        break;
      }
      case 'invalid': {
        enum8 = 12;
        break;
      }
      case 'io': {
        enum8 = 13;
        break;
      }
      case 'is-directory': {
        enum8 = 14;
        break;
      }
      case 'loop': {
        enum8 = 15;
        break;
      }
      case 'too-many-links': {
        enum8 = 16;
        break;
      }
      case 'message-size': {
        enum8 = 17;
        break;
      }
      case 'name-too-long': {
        enum8 = 18;
        break;
      }
      case 'no-device': {
        enum8 = 19;
        break;
      }
      case 'no-entry': {
        enum8 = 20;
        break;
      }
      case 'no-lock': {
        enum8 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum8 = 22;
        break;
      }
      case 'insufficient-space': {
        enum8 = 23;
        break;
      }
      case 'not-directory': {
        enum8 = 24;
        break;
      }
      case 'not-empty': {
        enum8 = 25;
        break;
      }
      case 'not-recoverable': {
        enum8 = 26;
        break;
      }
      case 'unsupported': {
        enum8 = 27;
        break;
      }
      case 'no-tty': {
        enum8 = 28;
        break;
      }
      case 'no-such-device': {
        enum8 = 29;
        break;
      }
      case 'overflow': {
        enum8 = 30;
        break;
      }
      case 'not-permitted': {
        enum8 = 31;
        break;
      }
      case 'pipe': {
        enum8 = 32;
        break;
      }
      case 'read-only': {
        enum8 = 33;
        break;
      }
      case 'invalid-seek': {
        enum8 = 34;
        break;
      }
      case 'text-file-busy': {
        enum8 = 35;
        break;
      }
      case 'cross-device': {
        enum8 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg6 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.open-at"][Instruction::Return]', {
  funcName: '[method]descriptor.open-at',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline43.fnName = 'wasi:filesystem/types@0.2.9#openAt';

const _trampoline44 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.metadata-hash"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'metadataHash',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.metadataHash(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var {lower: v3_0, upper: v3_1 } = e;
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(v3_0), true);
    dataView(memory0).setBigInt64(arg1 + 16, toUint64(v3_1), true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'access': {
        enum4 = 0;
        break;
      }
      case 'would-block': {
        enum4 = 1;
        break;
      }
      case 'already': {
        enum4 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum4 = 3;
        break;
      }
      case 'busy': {
        enum4 = 4;
        break;
      }
      case 'deadlock': {
        enum4 = 5;
        break;
      }
      case 'quota': {
        enum4 = 6;
        break;
      }
      case 'exist': {
        enum4 = 7;
        break;
      }
      case 'file-too-large': {
        enum4 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum4 = 9;
        break;
      }
      case 'in-progress': {
        enum4 = 10;
        break;
      }
      case 'interrupted': {
        enum4 = 11;
        break;
      }
      case 'invalid': {
        enum4 = 12;
        break;
      }
      case 'io': {
        enum4 = 13;
        break;
      }
      case 'is-directory': {
        enum4 = 14;
        break;
      }
      case 'loop': {
        enum4 = 15;
        break;
      }
      case 'too-many-links': {
        enum4 = 16;
        break;
      }
      case 'message-size': {
        enum4 = 17;
        break;
      }
      case 'name-too-long': {
        enum4 = 18;
        break;
      }
      case 'no-device': {
        enum4 = 19;
        break;
      }
      case 'no-entry': {
        enum4 = 20;
        break;
      }
      case 'no-lock': {
        enum4 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum4 = 22;
        break;
      }
      case 'insufficient-space': {
        enum4 = 23;
        break;
      }
      case 'not-directory': {
        enum4 = 24;
        break;
      }
      case 'not-empty': {
        enum4 = 25;
        break;
      }
      case 'not-recoverable': {
        enum4 = 26;
        break;
      }
      case 'unsupported': {
        enum4 = 27;
        break;
      }
      case 'no-tty': {
        enum4 = 28;
        break;
      }
      case 'no-such-device': {
        enum4 = 29;
        break;
      }
      case 'overflow': {
        enum4 = 30;
        break;
      }
      case 'not-permitted': {
        enum4 = 31;
        break;
      }
      case 'pipe': {
        enum4 = 32;
        break;
      }
      case 'read-only': {
        enum4 = 33;
        break;
      }
      case 'invalid-seek': {
        enum4 = 34;
        break;
      }
      case 'text-file-busy': {
        enum4 = 35;
        break;
      }
      case 'cross-device': {
        enum4 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.metadata-hash"][Instruction::Return]', {
  funcName: '[method]descriptor.metadata-hash',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline44.fnName = 'wasi:filesystem/types@0.2.9#metadataHash';

const _trampoline45 = function(arg0, arg1, arg2, arg3, arg4) {
  var handle1 = arg0;
  
  var rep2 = handleTable6[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable6.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Descriptor.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  if ((arg1 & 4294967294) !== 0) {
    throw new TypeError('flags have extraneous bits set');
  }
  var flags3 = {
    symlinkFollow: Boolean(arg1 & 1),
  };
  var ptr4 = arg2;
  var len4 = arg3;
  var result4 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr4, len4));
  _debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.metadata-hash-at"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'metadataHashAt',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.metadataHashAt(flags3, result4),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant7 = ret;
switch (variant7.tag) {
  case 'ok': {
    const e = variant7.val;
    dataView(memory0).setInt8(arg4 + 0, 0, true);
    var {lower: v5_0, upper: v5_1 } = e;
    dataView(memory0).setBigInt64(arg4 + 8, toUint64(v5_0), true);
    dataView(memory0).setBigInt64(arg4 + 16, toUint64(v5_1), true);
    
    break;
  }
  case 'err': {
    const e = variant7.val;
    dataView(memory0).setInt8(arg4 + 0, 1, true);
    var val6 = e;
    let enum6;
    switch (val6) {
      case 'access': {
        enum6 = 0;
        break;
      }
      case 'would-block': {
        enum6 = 1;
        break;
      }
      case 'already': {
        enum6 = 2;
        break;
      }
      case 'bad-descriptor': {
        enum6 = 3;
        break;
      }
      case 'busy': {
        enum6 = 4;
        break;
      }
      case 'deadlock': {
        enum6 = 5;
        break;
      }
      case 'quota': {
        enum6 = 6;
        break;
      }
      case 'exist': {
        enum6 = 7;
        break;
      }
      case 'file-too-large': {
        enum6 = 8;
        break;
      }
      case 'illegal-byte-sequence': {
        enum6 = 9;
        break;
      }
      case 'in-progress': {
        enum6 = 10;
        break;
      }
      case 'interrupted': {
        enum6 = 11;
        break;
      }
      case 'invalid': {
        enum6 = 12;
        break;
      }
      case 'io': {
        enum6 = 13;
        break;
      }
      case 'is-directory': {
        enum6 = 14;
        break;
      }
      case 'loop': {
        enum6 = 15;
        break;
      }
      case 'too-many-links': {
        enum6 = 16;
        break;
      }
      case 'message-size': {
        enum6 = 17;
        break;
      }
      case 'name-too-long': {
        enum6 = 18;
        break;
      }
      case 'no-device': {
        enum6 = 19;
        break;
      }
      case 'no-entry': {
        enum6 = 20;
        break;
      }
      case 'no-lock': {
        enum6 = 21;
        break;
      }
      case 'insufficient-memory': {
        enum6 = 22;
        break;
      }
      case 'insufficient-space': {
        enum6 = 23;
        break;
      }
      case 'not-directory': {
        enum6 = 24;
        break;
      }
      case 'not-empty': {
        enum6 = 25;
        break;
      }
      case 'not-recoverable': {
        enum6 = 26;
        break;
      }
      case 'unsupported': {
        enum6 = 27;
        break;
      }
      case 'no-tty': {
        enum6 = 28;
        break;
      }
      case 'no-such-device': {
        enum6 = 29;
        break;
      }
      case 'overflow': {
        enum6 = 30;
        break;
      }
      case 'not-permitted': {
        enum6 = 31;
        break;
      }
      case 'pipe': {
        enum6 = 32;
        break;
      }
      case 'read-only': {
        enum6 = 33;
        break;
      }
      case 'invalid-seek': {
        enum6 = 34;
        break;
      }
      case 'text-file-busy': {
        enum6 = 35;
        break;
      }
      case 'cross-device': {
        enum6 = 36;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val6}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg4 + 8, enum6, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant7, valueType: typeof variant7});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:filesystem/types@0.2.9", function="[method]descriptor.metadata-hash-at"][Instruction::Return]', {
  funcName: '[method]descriptor.metadata-hash-at',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline45.fnName = 'wasi:filesystem/types@0.2.9#metadataHashAt';

const _trampoline46 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var handle4 = arg1;
  
  var rep5 = handleTable7[(handle4 << 1) + 1] & ~T_FLAG;
  var rsc3 = captureTable7.get(rep5);
  if (!rsc3) {
    rsc3 = Object.create(Network.prototype);
    Object.defineProperty(rsc3, symbolRscHandle, { writable: true, value: handle4});
    Object.defineProperty(rsc3, symbolRscRep, { writable: true, value: rep5});
  }
  
  curResourceBorrows.push(rsc3);
  let variant6;
  switch (arg2) {
    case 0: {
      variant6= {
        tag: 'ipv4',
        val: {
          port: clampGuest(arg3, 0, 65535),
          address: [clampGuest(arg4, 0, 255), clampGuest(arg5, 0, 255), clampGuest(arg6, 0, 255), clampGuest(arg7, 0, 255)],
        }
      };
      break;
    }
    case 1: {
      variant6= {
        tag: 'ipv6',
        val: {
          port: clampGuest(arg3, 0, 65535),
          flowInfo: arg4 >>> 0,
          address: [clampGuest(arg5, 0, 65535), clampGuest(arg6, 0, 65535), clampGuest(arg7, 0, 65535), clampGuest(arg8, 0, 65535), clampGuest(arg9, 0, 65535), clampGuest(arg10, 0, 65535), clampGuest(arg11, 0, 65535), clampGuest(arg12, 0, 65535)],
          scopeId: arg13 >>> 0,
        }
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for IpSocketAddress');
    }
  }
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.start-bind"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'startBind',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.startBind(rsc3, variant6),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg14 + 1, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.start-bind"][Instruction::Return]', {
  funcName: '[method]udp-socket.start-bind',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline46.fnName = 'wasi:sockets/udp@0.2.9#startBind';

const _trampoline47 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.finish-bind"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'finishBind',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.finishBind(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.finish-bind"][Instruction::Return]', {
  funcName: '[method]udp-socket.finish-bind',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline47.fnName = 'wasi:sockets/udp@0.2.9#finishBind';

const _trampoline48 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  let variant4;
  switch (arg1) {
    case 0: {
      variant4 = undefined;
      break;
    }
    case 1: {
      let variant3;
      switch (arg2) {
        case 0: {
          variant3= {
            tag: 'ipv4',
            val: {
              port: clampGuest(arg3, 0, 65535),
              address: [clampGuest(arg4, 0, 255), clampGuest(arg5, 0, 255), clampGuest(arg6, 0, 255), clampGuest(arg7, 0, 255)],
            }
          };
          break;
        }
        case 1: {
          variant3= {
            tag: 'ipv6',
            val: {
              port: clampGuest(arg3, 0, 65535),
              flowInfo: arg4 >>> 0,
              address: [clampGuest(arg5, 0, 65535), clampGuest(arg6, 0, 65535), clampGuest(arg7, 0, 65535), clampGuest(arg8, 0, 65535), clampGuest(arg9, 0, 65535), clampGuest(arg10, 0, 65535), clampGuest(arg11, 0, 65535), clampGuest(arg12, 0, 65535)],
              scopeId: arg13 >>> 0,
            }
          };
          break;
        }
        default: {
          throw new TypeError('invalid variant discriminant for IpSocketAddress');
        }
      }
      variant4 = variant3;
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for option');
    }
  }
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.stream"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'stream',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.stream(variant4),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg14 + 0, 0, true);
    var [tuple5_0, tuple5_1] = e;
    
    if (!(tuple5_0 instanceof IncomingDatagramStream)) {
      throw new TypeError('Resource error: Not a valid \"IncomingDatagramStream\" resource.');
    }
    var handle6 = tuple5_0[symbolRscHandle];
    if (!handle6) {
      const rep = tuple5_0[symbolRscRep] || ++captureCnt9;
      captureTable9.set(rep, tuple5_0);
      handle6 = rscTableCreateOwn(handleTable9, rep);
    }
    
    dataView(memory0).setInt32(arg14 + 4, handle6, true);
    
    if (!(tuple5_1 instanceof OutgoingDatagramStream)) {
      throw new TypeError('Resource error: Not a valid \"OutgoingDatagramStream\" resource.');
    }
    var handle7 = tuple5_1[symbolRscHandle];
    if (!handle7) {
      const rep = tuple5_1[symbolRscRep] || ++captureCnt10;
      captureTable10.set(rep, tuple5_1);
      handle7 = rscTableCreateOwn(handleTable10, rep);
    }
    
    dataView(memory0).setInt32(arg14 + 8, handle7, true);
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg14 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'unknown': {
        enum8 = 0;
        break;
      }
      case 'access-denied': {
        enum8 = 1;
        break;
      }
      case 'not-supported': {
        enum8 = 2;
        break;
      }
      case 'invalid-argument': {
        enum8 = 3;
        break;
      }
      case 'out-of-memory': {
        enum8 = 4;
        break;
      }
      case 'timeout': {
        enum8 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum8 = 6;
        break;
      }
      case 'not-in-progress': {
        enum8 = 7;
        break;
      }
      case 'would-block': {
        enum8 = 8;
        break;
      }
      case 'invalid-state': {
        enum8 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum8 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum8 = 11;
        break;
      }
      case 'address-in-use': {
        enum8 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum8 = 13;
        break;
      }
      case 'connection-refused': {
        enum8 = 14;
        break;
      }
      case 'connection-reset': {
        enum8 = 15;
        break;
      }
      case 'connection-aborted': {
        enum8 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum8 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum8 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum8 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum8 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg14 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.stream"][Instruction::Return]', {
  funcName: '[method]udp-socket.stream',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline48.fnName = 'wasi:sockets/udp@0.2.9#stream';

const _trampoline49 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.local-address"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'localAddress',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.localAddress(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var variant7 = e;
    switch (variant7.tag) {
      case 'ipv4': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        var {port: v3_0, address: v3_1 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v3_0), true);
        var [tuple4_0, tuple4_1, tuple4_2, tuple4_3] = v3_1;
        dataView(memory0).setInt8(arg1 + 10, toUint8(tuple4_0), true);
        dataView(memory0).setInt8(arg1 + 11, toUint8(tuple4_1), true);
        dataView(memory0).setInt8(arg1 + 12, toUint8(tuple4_2), true);
        dataView(memory0).setInt8(arg1 + 13, toUint8(tuple4_3), true);
        break;
      }
      case 'ipv6': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        var {port: v5_0, flowInfo: v5_1, address: v5_2, scopeId: v5_3 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v5_0), true);
        dataView(memory0).setInt32(arg1 + 12, toUint32(v5_1), true);
        var [tuple6_0, tuple6_1, tuple6_2, tuple6_3, tuple6_4, tuple6_5, tuple6_6, tuple6_7] = v5_2;
        dataView(memory0).setInt16(arg1 + 16, toUint16(tuple6_0), true);
        dataView(memory0).setInt16(arg1 + 18, toUint16(tuple6_1), true);
        dataView(memory0).setInt16(arg1 + 20, toUint16(tuple6_2), true);
        dataView(memory0).setInt16(arg1 + 22, toUint16(tuple6_3), true);
        dataView(memory0).setInt16(arg1 + 24, toUint16(tuple6_4), true);
        dataView(memory0).setInt16(arg1 + 26, toUint16(tuple6_5), true);
        dataView(memory0).setInt16(arg1 + 28, toUint16(tuple6_6), true);
        dataView(memory0).setInt16(arg1 + 30, toUint16(tuple6_7), true);
        dataView(memory0).setInt32(arg1 + 32, toUint32(v5_3), true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`IpSocketAddress\``);
      }
    }
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'unknown': {
        enum8 = 0;
        break;
      }
      case 'access-denied': {
        enum8 = 1;
        break;
      }
      case 'not-supported': {
        enum8 = 2;
        break;
      }
      case 'invalid-argument': {
        enum8 = 3;
        break;
      }
      case 'out-of-memory': {
        enum8 = 4;
        break;
      }
      case 'timeout': {
        enum8 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum8 = 6;
        break;
      }
      case 'not-in-progress': {
        enum8 = 7;
        break;
      }
      case 'would-block': {
        enum8 = 8;
        break;
      }
      case 'invalid-state': {
        enum8 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum8 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum8 = 11;
        break;
      }
      case 'address-in-use': {
        enum8 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum8 = 13;
        break;
      }
      case 'connection-refused': {
        enum8 = 14;
        break;
      }
      case 'connection-reset': {
        enum8 = 15;
        break;
      }
      case 'connection-aborted': {
        enum8 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum8 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum8 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum8 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum8 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.local-address"][Instruction::Return]', {
  funcName: '[method]udp-socket.local-address',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline49.fnName = 'wasi:sockets/udp@0.2.9#localAddress';

const _trampoline50 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.remote-address"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'remoteAddress',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.remoteAddress(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var variant7 = e;
    switch (variant7.tag) {
      case 'ipv4': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        var {port: v3_0, address: v3_1 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v3_0), true);
        var [tuple4_0, tuple4_1, tuple4_2, tuple4_3] = v3_1;
        dataView(memory0).setInt8(arg1 + 10, toUint8(tuple4_0), true);
        dataView(memory0).setInt8(arg1 + 11, toUint8(tuple4_1), true);
        dataView(memory0).setInt8(arg1 + 12, toUint8(tuple4_2), true);
        dataView(memory0).setInt8(arg1 + 13, toUint8(tuple4_3), true);
        break;
      }
      case 'ipv6': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        var {port: v5_0, flowInfo: v5_1, address: v5_2, scopeId: v5_3 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v5_0), true);
        dataView(memory0).setInt32(arg1 + 12, toUint32(v5_1), true);
        var [tuple6_0, tuple6_1, tuple6_2, tuple6_3, tuple6_4, tuple6_5, tuple6_6, tuple6_7] = v5_2;
        dataView(memory0).setInt16(arg1 + 16, toUint16(tuple6_0), true);
        dataView(memory0).setInt16(arg1 + 18, toUint16(tuple6_1), true);
        dataView(memory0).setInt16(arg1 + 20, toUint16(tuple6_2), true);
        dataView(memory0).setInt16(arg1 + 22, toUint16(tuple6_3), true);
        dataView(memory0).setInt16(arg1 + 24, toUint16(tuple6_4), true);
        dataView(memory0).setInt16(arg1 + 26, toUint16(tuple6_5), true);
        dataView(memory0).setInt16(arg1 + 28, toUint16(tuple6_6), true);
        dataView(memory0).setInt16(arg1 + 30, toUint16(tuple6_7), true);
        dataView(memory0).setInt32(arg1 + 32, toUint32(v5_3), true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`IpSocketAddress\``);
      }
    }
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'unknown': {
        enum8 = 0;
        break;
      }
      case 'access-denied': {
        enum8 = 1;
        break;
      }
      case 'not-supported': {
        enum8 = 2;
        break;
      }
      case 'invalid-argument': {
        enum8 = 3;
        break;
      }
      case 'out-of-memory': {
        enum8 = 4;
        break;
      }
      case 'timeout': {
        enum8 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum8 = 6;
        break;
      }
      case 'not-in-progress': {
        enum8 = 7;
        break;
      }
      case 'would-block': {
        enum8 = 8;
        break;
      }
      case 'invalid-state': {
        enum8 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum8 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum8 = 11;
        break;
      }
      case 'address-in-use': {
        enum8 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum8 = 13;
        break;
      }
      case 'connection-refused': {
        enum8 = 14;
        break;
      }
      case 'connection-reset': {
        enum8 = 15;
        break;
      }
      case 'connection-aborted': {
        enum8 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum8 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum8 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum8 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum8 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.remote-address"][Instruction::Return]', {
  funcName: '[method]udp-socket.remote-address',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline50.fnName = 'wasi:sockets/udp@0.2.9#remoteAddress';

const _trampoline51 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.unicast-hop-limit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'unicastHopLimit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.unicastHopLimit(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setInt8(arg1 + 1, toUint8(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.unicast-hop-limit"][Instruction::Return]', {
  funcName: '[method]udp-socket.unicast-hop-limit',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline51.fnName = 'wasi:sockets/udp@0.2.9#unicastHopLimit';

const _trampoline52 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-unicast-hop-limit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setUnicastHopLimit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setUnicastHopLimit(clampGuest(arg1, 0, 255)),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-unicast-hop-limit"][Instruction::Return]', {
  funcName: '[method]udp-socket.set-unicast-hop-limit',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline52.fnName = 'wasi:sockets/udp@0.2.9#setUnicastHopLimit';

const _trampoline53 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.receive-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'receiveBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.receiveBufferSize(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.receive-buffer-size"][Instruction::Return]', {
  funcName: '[method]udp-socket.receive-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline53.fnName = 'wasi:sockets/udp@0.2.9#receiveBufferSize';

const _trampoline54 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-receive-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setReceiveBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setReceiveBufferSize(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-receive-buffer-size"][Instruction::Return]', {
  funcName: '[method]udp-socket.set-receive-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline54.fnName = 'wasi:sockets/udp@0.2.9#setReceiveBufferSize';

const _trampoline55 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.send-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'sendBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.sendBufferSize(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.send-buffer-size"][Instruction::Return]', {
  funcName: '[method]udp-socket.send-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline55.fnName = 'wasi:sockets/udp@0.2.9#sendBufferSize';

const _trampoline56 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable8[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable8.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(UdpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-send-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setSendBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setSendBufferSize(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]udp-socket.set-send-buffer-size"][Instruction::Return]', {
  funcName: '[method]udp-socket.set-send-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline56.fnName = 'wasi:sockets/udp@0.2.9#setSendBufferSize';

const _trampoline57 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable9[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable9.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(IncomingDatagramStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]incoming-datagram-stream.receive"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'receive',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.receive(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant12 = ret;
switch (variant12.tag) {
  case 'ok': {
    const e = variant12.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    var vec10 = e;
    var len10 = vec10.length;
    var result10 = realloc0(0, 0, 4, len10 * 40);
    for (let i = 0; i < vec10.length; i++) {
      const e = vec10[i];
      const base = result10 + i * 40;var {data: v3_0, remoteAddress: v3_1 } = e;
      var val4 = v3_0;
      var len4 = Array.isArray(val4) ? val4.length : val4.byteLength;
      var ptr4 = realloc0(0, 0, 1, len4 * 1);
      
      let valData4;
      const valLenBytes4 = len4 * 1;
      if (Array.isArray(val4)) {
        // Regular array likely containing numbers, write values to memory
        let offset = 0;
        const dv4 = new DataView(memory0.buffer);
        for (const v of val4) {
          _requireValidNumericPrimitive.bind(null, 'u8')(v);
          dv4.setUint8(ptr4+ offset, v, true);
          offset += 1;
        }
      } else {
        // TypedArray / ArrayBuffer-like, direct copy
        valData4 = new Uint8Array(val4.buffer || val4, val4.byteOffset, valLenBytes4);
        const out4 = new Uint8Array(memory0.buffer, ptr4, valLenBytes4);
        out4.set(valData4);
      }
      
      dataView(memory0).setUint32(base + 4, len4, true);
      dataView(memory0).setUint32(base + 0, ptr4, true);
      var variant9 = v3_1;
      switch (variant9.tag) {
        case 'ipv4': {
          const e = variant9.val;
          dataView(memory0).setInt8(base + 8, 0, true);
          var {port: v5_0, address: v5_1 } = e;
          dataView(memory0).setInt16(base + 12, toUint16(v5_0), true);
          var [tuple6_0, tuple6_1, tuple6_2, tuple6_3] = v5_1;
          dataView(memory0).setInt8(base + 14, toUint8(tuple6_0), true);
          dataView(memory0).setInt8(base + 15, toUint8(tuple6_1), true);
          dataView(memory0).setInt8(base + 16, toUint8(tuple6_2), true);
          dataView(memory0).setInt8(base + 17, toUint8(tuple6_3), true);
          break;
        }
        case 'ipv6': {
          const e = variant9.val;
          dataView(memory0).setInt8(base + 8, 1, true);
          var {port: v7_0, flowInfo: v7_1, address: v7_2, scopeId: v7_3 } = e;
          dataView(memory0).setInt16(base + 12, toUint16(v7_0), true);
          dataView(memory0).setInt32(base + 16, toUint32(v7_1), true);
          var [tuple8_0, tuple8_1, tuple8_2, tuple8_3, tuple8_4, tuple8_5, tuple8_6, tuple8_7] = v7_2;
          dataView(memory0).setInt16(base + 20, toUint16(tuple8_0), true);
          dataView(memory0).setInt16(base + 22, toUint16(tuple8_1), true);
          dataView(memory0).setInt16(base + 24, toUint16(tuple8_2), true);
          dataView(memory0).setInt16(base + 26, toUint16(tuple8_3), true);
          dataView(memory0).setInt16(base + 28, toUint16(tuple8_4), true);
          dataView(memory0).setInt16(base + 30, toUint16(tuple8_5), true);
          dataView(memory0).setInt16(base + 32, toUint16(tuple8_6), true);
          dataView(memory0).setInt16(base + 34, toUint16(tuple8_7), true);
          dataView(memory0).setInt32(base + 36, toUint32(v7_3), true);
          break;
        }
        default: {
          throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant9.tag)}\` (received \`${variant9}\`) specified for \`IpSocketAddress\``);
        }
      }
    }
    dataView(memory0).setUint32(arg2 + 8, len10, true);
    dataView(memory0).setUint32(arg2 + 4, result10, true);
    
    break;
  }
  case 'err': {
    const e = variant12.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val11 = e;
    let enum11;
    switch (val11) {
      case 'unknown': {
        enum11 = 0;
        break;
      }
      case 'access-denied': {
        enum11 = 1;
        break;
      }
      case 'not-supported': {
        enum11 = 2;
        break;
      }
      case 'invalid-argument': {
        enum11 = 3;
        break;
      }
      case 'out-of-memory': {
        enum11 = 4;
        break;
      }
      case 'timeout': {
        enum11 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum11 = 6;
        break;
      }
      case 'not-in-progress': {
        enum11 = 7;
        break;
      }
      case 'would-block': {
        enum11 = 8;
        break;
      }
      case 'invalid-state': {
        enum11 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum11 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum11 = 11;
        break;
      }
      case 'address-in-use': {
        enum11 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum11 = 13;
        break;
      }
      case 'connection-refused': {
        enum11 = 14;
        break;
      }
      case 'connection-reset': {
        enum11 = 15;
        break;
      }
      case 'connection-aborted': {
        enum11 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum11 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum11 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum11 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum11 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val11}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 4, enum11, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant12, valueType: typeof variant12});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]incoming-datagram-stream.receive"][Instruction::Return]', {
  funcName: '[method]incoming-datagram-stream.receive',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline57.fnName = 'wasi:sockets/udp@0.2.9#receive';

const _trampoline58 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable10[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable10.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutgoingDatagramStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.check-send"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'checkSend',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.checkSend(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.check-send"][Instruction::Return]', {
  funcName: '[method]outgoing-datagram-stream.check-send',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline58.fnName = 'wasi:sockets/udp@0.2.9#checkSend';

const _trampoline59 = function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable10[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable10.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutgoingDatagramStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var len6 = arg2;
  var base6 = arg1;
  var result6 = [];
  for (let i = 0; i < len6; i++) {
    const base = base6 + i * 44;
    var ptr3 = dataView(memory0).getUint32(base + 0, true);
    var len3 = dataView(memory0).getUint32(base + 4, true);
    var result3 = new Uint8Array(memory0.buffer.slice(ptr3, ptr3 + len3 * 1));
    let variant5;
    switch (dataView(memory0).getUint8(base + 8, true)) {
      case 0: {
        variant5 = undefined;
        break;
      }
      case 1: {
        let variant4;
        switch (dataView(memory0).getUint8(base + 12, true)) {
          case 0: {
            variant4= {
              tag: 'ipv4',
              val: {
                port: clampGuest(dataView(memory0).getUint16(base + 16, true), 0, 65535),
                address: [clampGuest(dataView(memory0).getUint8(base + 18, true), 0, 255), clampGuest(dataView(memory0).getUint8(base + 19, true), 0, 255), clampGuest(dataView(memory0).getUint8(base + 20, true), 0, 255), clampGuest(dataView(memory0).getUint8(base + 21, true), 0, 255)],
              }
            };
            break;
          }
          case 1: {
            variant4= {
              tag: 'ipv6',
              val: {
                port: clampGuest(dataView(memory0).getUint16(base + 16, true), 0, 65535),
                flowInfo: dataView(memory0).getInt32(base + 20, true) >>> 0,
                address: [clampGuest(dataView(memory0).getUint16(base + 24, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 26, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 28, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 30, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 32, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 34, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 36, true), 0, 65535), clampGuest(dataView(memory0).getUint16(base + 38, true), 0, 65535)],
                scopeId: dataView(memory0).getInt32(base + 40, true) >>> 0,
              }
            };
            break;
          }
          default: {
            throw new TypeError('invalid variant discriminant for IpSocketAddress');
          }
        }
        variant5 = variant4;
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for option');
      }
    }
    result6.push({
      data: result3,
      remoteAddress: variant5,
    });
  }
  _debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.send"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'send',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.send(result6),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    dataView(memory0).setBigInt64(arg3 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg3 + 8, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp@0.2.9", function="[method]outgoing-datagram-stream.send"][Instruction::Return]', {
  funcName: '[method]outgoing-datagram-stream.send',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline59.fnName = 'wasi:sockets/udp@0.2.9#send';

const _trampoline60 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var handle4 = arg1;
  
  var rep5 = handleTable7[(handle4 << 1) + 1] & ~T_FLAG;
  var rsc3 = captureTable7.get(rep5);
  if (!rsc3) {
    rsc3 = Object.create(Network.prototype);
    Object.defineProperty(rsc3, symbolRscHandle, { writable: true, value: handle4});
    Object.defineProperty(rsc3, symbolRscRep, { writable: true, value: rep5});
  }
  
  curResourceBorrows.push(rsc3);
  let variant6;
  switch (arg2) {
    case 0: {
      variant6= {
        tag: 'ipv4',
        val: {
          port: clampGuest(arg3, 0, 65535),
          address: [clampGuest(arg4, 0, 255), clampGuest(arg5, 0, 255), clampGuest(arg6, 0, 255), clampGuest(arg7, 0, 255)],
        }
      };
      break;
    }
    case 1: {
      variant6= {
        tag: 'ipv6',
        val: {
          port: clampGuest(arg3, 0, 65535),
          flowInfo: arg4 >>> 0,
          address: [clampGuest(arg5, 0, 65535), clampGuest(arg6, 0, 65535), clampGuest(arg7, 0, 65535), clampGuest(arg8, 0, 65535), clampGuest(arg9, 0, 65535), clampGuest(arg10, 0, 65535), clampGuest(arg11, 0, 65535), clampGuest(arg12, 0, 65535)],
          scopeId: arg13 >>> 0,
        }
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for IpSocketAddress');
    }
  }
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-bind"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'startBind',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.startBind(rsc3, variant6),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg14 + 1, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-bind"][Instruction::Return]', {
  funcName: '[method]tcp-socket.start-bind',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline60.fnName = 'wasi:sockets/tcp@0.2.9#startBind';

const _trampoline61 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-bind"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'finishBind',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.finishBind(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-bind"][Instruction::Return]', {
  funcName: '[method]tcp-socket.finish-bind',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline61.fnName = 'wasi:sockets/tcp@0.2.9#finishBind';

const _trampoline62 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var handle4 = arg1;
  
  var rep5 = handleTable7[(handle4 << 1) + 1] & ~T_FLAG;
  var rsc3 = captureTable7.get(rep5);
  if (!rsc3) {
    rsc3 = Object.create(Network.prototype);
    Object.defineProperty(rsc3, symbolRscHandle, { writable: true, value: handle4});
    Object.defineProperty(rsc3, symbolRscRep, { writable: true, value: rep5});
  }
  
  curResourceBorrows.push(rsc3);
  let variant6;
  switch (arg2) {
    case 0: {
      variant6= {
        tag: 'ipv4',
        val: {
          port: clampGuest(arg3, 0, 65535),
          address: [clampGuest(arg4, 0, 255), clampGuest(arg5, 0, 255), clampGuest(arg6, 0, 255), clampGuest(arg7, 0, 255)],
        }
      };
      break;
    }
    case 1: {
      variant6= {
        tag: 'ipv6',
        val: {
          port: clampGuest(arg3, 0, 65535),
          flowInfo: arg4 >>> 0,
          address: [clampGuest(arg5, 0, 65535), clampGuest(arg6, 0, 65535), clampGuest(arg7, 0, 65535), clampGuest(arg8, 0, 65535), clampGuest(arg9, 0, 65535), clampGuest(arg10, 0, 65535), clampGuest(arg11, 0, 65535), clampGuest(arg12, 0, 65535)],
          scopeId: arg13 >>> 0,
        }
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for IpSocketAddress');
    }
  }
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-connect"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'startConnect',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.startConnect(rsc3, variant6),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg14 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg14 + 1, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-connect"][Instruction::Return]', {
  funcName: '[method]tcp-socket.start-connect',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline62.fnName = 'wasi:sockets/tcp@0.2.9#startConnect';

const _trampoline63 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-connect"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'finishConnect',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.finishConnect(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant7 = ret;
switch (variant7.tag) {
  case 'ok': {
    const e = variant7.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var [tuple3_0, tuple3_1] = e;
    
    if (!(tuple3_0 instanceof InputStream)) {
      throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
    }
    var handle4 = tuple3_0[symbolRscHandle];
    if (!handle4) {
      const rep = tuple3_0[symbolRscRep] || ++captureCnt2;
      captureTable2.set(rep, tuple3_0);
      handle4 = rscTableCreateOwn(handleTable2, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 4, handle4, true);
    
    if (!(tuple3_1 instanceof OutputStream)) {
      throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
    }
    var handle5 = tuple3_1[symbolRscHandle];
    if (!handle5) {
      const rep = tuple3_1[symbolRscRep] || ++captureCnt3;
      captureTable3.set(rep, tuple3_1);
      handle5 = rscTableCreateOwn(handleTable3, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 8, handle5, true);
    
    break;
  }
  case 'err': {
    const e = variant7.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val6 = e;
    let enum6;
    switch (val6) {
      case 'unknown': {
        enum6 = 0;
        break;
      }
      case 'access-denied': {
        enum6 = 1;
        break;
      }
      case 'not-supported': {
        enum6 = 2;
        break;
      }
      case 'invalid-argument': {
        enum6 = 3;
        break;
      }
      case 'out-of-memory': {
        enum6 = 4;
        break;
      }
      case 'timeout': {
        enum6 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum6 = 6;
        break;
      }
      case 'not-in-progress': {
        enum6 = 7;
        break;
      }
      case 'would-block': {
        enum6 = 8;
        break;
      }
      case 'invalid-state': {
        enum6 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum6 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum6 = 11;
        break;
      }
      case 'address-in-use': {
        enum6 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum6 = 13;
        break;
      }
      case 'connection-refused': {
        enum6 = 14;
        break;
      }
      case 'connection-reset': {
        enum6 = 15;
        break;
      }
      case 'connection-aborted': {
        enum6 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum6 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum6 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum6 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum6 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val6}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum6, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant7, valueType: typeof variant7});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-connect"][Instruction::Return]', {
  funcName: '[method]tcp-socket.finish-connect',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline63.fnName = 'wasi:sockets/tcp@0.2.9#finishConnect';

const _trampoline64 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-listen"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'startListen',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.startListen(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.start-listen"][Instruction::Return]', {
  funcName: '[method]tcp-socket.start-listen',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline64.fnName = 'wasi:sockets/tcp@0.2.9#startListen';

const _trampoline65 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-listen"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'finishListen',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.finishListen(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.finish-listen"][Instruction::Return]', {
  funcName: '[method]tcp-socket.finish-listen',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline65.fnName = 'wasi:sockets/tcp@0.2.9#finishListen';

const _trampoline66 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.accept"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'accept',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.accept(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var [tuple3_0, tuple3_1, tuple3_2] = e;
    
    if (!(tuple3_0 instanceof TcpSocket)) {
      throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
    }
    var handle4 = tuple3_0[symbolRscHandle];
    if (!handle4) {
      const rep = tuple3_0[symbolRscRep] || ++captureCnt11;
      captureTable11.set(rep, tuple3_0);
      handle4 = rscTableCreateOwn(handleTable11, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 4, handle4, true);
    
    if (!(tuple3_1 instanceof InputStream)) {
      throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
    }
    var handle5 = tuple3_1[symbolRscHandle];
    if (!handle5) {
      const rep = tuple3_1[symbolRscRep] || ++captureCnt2;
      captureTable2.set(rep, tuple3_1);
      handle5 = rscTableCreateOwn(handleTable2, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 8, handle5, true);
    
    if (!(tuple3_2 instanceof OutputStream)) {
      throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
    }
    var handle6 = tuple3_2[symbolRscHandle];
    if (!handle6) {
      const rep = tuple3_2[symbolRscRep] || ++captureCnt3;
      captureTable3.set(rep, tuple3_2);
      handle6 = rscTableCreateOwn(handleTable3, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 12, handle6, true);
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.accept"][Instruction::Return]', {
  funcName: '[method]tcp-socket.accept',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline66.fnName = 'wasi:sockets/tcp@0.2.9#accept';

const _trampoline67 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.local-address"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'localAddress',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.localAddress(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var variant7 = e;
    switch (variant7.tag) {
      case 'ipv4': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        var {port: v3_0, address: v3_1 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v3_0), true);
        var [tuple4_0, tuple4_1, tuple4_2, tuple4_3] = v3_1;
        dataView(memory0).setInt8(arg1 + 10, toUint8(tuple4_0), true);
        dataView(memory0).setInt8(arg1 + 11, toUint8(tuple4_1), true);
        dataView(memory0).setInt8(arg1 + 12, toUint8(tuple4_2), true);
        dataView(memory0).setInt8(arg1 + 13, toUint8(tuple4_3), true);
        break;
      }
      case 'ipv6': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        var {port: v5_0, flowInfo: v5_1, address: v5_2, scopeId: v5_3 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v5_0), true);
        dataView(memory0).setInt32(arg1 + 12, toUint32(v5_1), true);
        var [tuple6_0, tuple6_1, tuple6_2, tuple6_3, tuple6_4, tuple6_5, tuple6_6, tuple6_7] = v5_2;
        dataView(memory0).setInt16(arg1 + 16, toUint16(tuple6_0), true);
        dataView(memory0).setInt16(arg1 + 18, toUint16(tuple6_1), true);
        dataView(memory0).setInt16(arg1 + 20, toUint16(tuple6_2), true);
        dataView(memory0).setInt16(arg1 + 22, toUint16(tuple6_3), true);
        dataView(memory0).setInt16(arg1 + 24, toUint16(tuple6_4), true);
        dataView(memory0).setInt16(arg1 + 26, toUint16(tuple6_5), true);
        dataView(memory0).setInt16(arg1 + 28, toUint16(tuple6_6), true);
        dataView(memory0).setInt16(arg1 + 30, toUint16(tuple6_7), true);
        dataView(memory0).setInt32(arg1 + 32, toUint32(v5_3), true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`IpSocketAddress\``);
      }
    }
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'unknown': {
        enum8 = 0;
        break;
      }
      case 'access-denied': {
        enum8 = 1;
        break;
      }
      case 'not-supported': {
        enum8 = 2;
        break;
      }
      case 'invalid-argument': {
        enum8 = 3;
        break;
      }
      case 'out-of-memory': {
        enum8 = 4;
        break;
      }
      case 'timeout': {
        enum8 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum8 = 6;
        break;
      }
      case 'not-in-progress': {
        enum8 = 7;
        break;
      }
      case 'would-block': {
        enum8 = 8;
        break;
      }
      case 'invalid-state': {
        enum8 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum8 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum8 = 11;
        break;
      }
      case 'address-in-use': {
        enum8 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum8 = 13;
        break;
      }
      case 'connection-refused': {
        enum8 = 14;
        break;
      }
      case 'connection-reset': {
        enum8 = 15;
        break;
      }
      case 'connection-aborted': {
        enum8 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum8 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum8 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum8 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum8 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.local-address"][Instruction::Return]', {
  funcName: '[method]tcp-socket.local-address',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline67.fnName = 'wasi:sockets/tcp@0.2.9#localAddress';

const _trampoline68 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.remote-address"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'remoteAddress',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.remoteAddress(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant9 = ret;
switch (variant9.tag) {
  case 'ok': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var variant7 = e;
    switch (variant7.tag) {
      case 'ipv4': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        var {port: v3_0, address: v3_1 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v3_0), true);
        var [tuple4_0, tuple4_1, tuple4_2, tuple4_3] = v3_1;
        dataView(memory0).setInt8(arg1 + 10, toUint8(tuple4_0), true);
        dataView(memory0).setInt8(arg1 + 11, toUint8(tuple4_1), true);
        dataView(memory0).setInt8(arg1 + 12, toUint8(tuple4_2), true);
        dataView(memory0).setInt8(arg1 + 13, toUint8(tuple4_3), true);
        break;
      }
      case 'ipv6': {
        const e = variant7.val;
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        var {port: v5_0, flowInfo: v5_1, address: v5_2, scopeId: v5_3 } = e;
        dataView(memory0).setInt16(arg1 + 8, toUint16(v5_0), true);
        dataView(memory0).setInt32(arg1 + 12, toUint32(v5_1), true);
        var [tuple6_0, tuple6_1, tuple6_2, tuple6_3, tuple6_4, tuple6_5, tuple6_6, tuple6_7] = v5_2;
        dataView(memory0).setInt16(arg1 + 16, toUint16(tuple6_0), true);
        dataView(memory0).setInt16(arg1 + 18, toUint16(tuple6_1), true);
        dataView(memory0).setInt16(arg1 + 20, toUint16(tuple6_2), true);
        dataView(memory0).setInt16(arg1 + 22, toUint16(tuple6_3), true);
        dataView(memory0).setInt16(arg1 + 24, toUint16(tuple6_4), true);
        dataView(memory0).setInt16(arg1 + 26, toUint16(tuple6_5), true);
        dataView(memory0).setInt16(arg1 + 28, toUint16(tuple6_6), true);
        dataView(memory0).setInt16(arg1 + 30, toUint16(tuple6_7), true);
        dataView(memory0).setInt32(arg1 + 32, toUint32(v5_3), true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant7.tag)}\` (received \`${variant7}\`) specified for \`IpSocketAddress\``);
      }
    }
    
    break;
  }
  case 'err': {
    const e = variant9.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val8 = e;
    let enum8;
    switch (val8) {
      case 'unknown': {
        enum8 = 0;
        break;
      }
      case 'access-denied': {
        enum8 = 1;
        break;
      }
      case 'not-supported': {
        enum8 = 2;
        break;
      }
      case 'invalid-argument': {
        enum8 = 3;
        break;
      }
      case 'out-of-memory': {
        enum8 = 4;
        break;
      }
      case 'timeout': {
        enum8 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum8 = 6;
        break;
      }
      case 'not-in-progress': {
        enum8 = 7;
        break;
      }
      case 'would-block': {
        enum8 = 8;
        break;
      }
      case 'invalid-state': {
        enum8 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum8 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum8 = 11;
        break;
      }
      case 'address-in-use': {
        enum8 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum8 = 13;
        break;
      }
      case 'connection-refused': {
        enum8 = 14;
        break;
      }
      case 'connection-reset': {
        enum8 = 15;
        break;
      }
      case 'connection-aborted': {
        enum8 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum8 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum8 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum8 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum8 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val8}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum8, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant9, valueType: typeof variant9});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.remote-address"][Instruction::Return]', {
  funcName: '[method]tcp-socket.remote-address',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline68.fnName = 'wasi:sockets/tcp@0.2.9#remoteAddress';

const _trampoline69 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-listen-backlog-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setListenBacklogSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setListenBacklogSize(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-listen-backlog-size"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-listen-backlog-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline69.fnName = 'wasi:sockets/tcp@0.2.9#setListenBacklogSize';

const _trampoline70 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-enabled"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'keepAliveEnabled',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.keepAliveEnabled(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setInt8(arg1 + 1, e ? 1 : 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-enabled"][Instruction::Return]', {
  funcName: '[method]tcp-socket.keep-alive-enabled',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline70.fnName = 'wasi:sockets/tcp@0.2.9#keepAliveEnabled';

const _trampoline71 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var bool3 = arg1;
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-enabled"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setKeepAliveEnabled',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setKeepAliveEnabled(bool3 == 0 ? false : (bool3 == 1 ? true : throwInvalidBool())),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'unknown': {
        enum4 = 0;
        break;
      }
      case 'access-denied': {
        enum4 = 1;
        break;
      }
      case 'not-supported': {
        enum4 = 2;
        break;
      }
      case 'invalid-argument': {
        enum4 = 3;
        break;
      }
      case 'out-of-memory': {
        enum4 = 4;
        break;
      }
      case 'timeout': {
        enum4 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum4 = 6;
        break;
      }
      case 'not-in-progress': {
        enum4 = 7;
        break;
      }
      case 'would-block': {
        enum4 = 8;
        break;
      }
      case 'invalid-state': {
        enum4 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum4 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum4 = 11;
        break;
      }
      case 'address-in-use': {
        enum4 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum4 = 13;
        break;
      }
      case 'connection-refused': {
        enum4 = 14;
        break;
      }
      case 'connection-reset': {
        enum4 = 15;
        break;
      }
      case 'connection-aborted': {
        enum4 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum4 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum4 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum4 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum4 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-enabled"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-keep-alive-enabled',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline71.fnName = 'wasi:sockets/tcp@0.2.9#setKeepAliveEnabled';

const _trampoline72 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-idle-time"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'keepAliveIdleTime',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.keepAliveIdleTime(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-idle-time"][Instruction::Return]', {
  funcName: '[method]tcp-socket.keep-alive-idle-time',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline72.fnName = 'wasi:sockets/tcp@0.2.9#keepAliveIdleTime';

const _trampoline73 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-idle-time"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setKeepAliveIdleTime',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setKeepAliveIdleTime(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-idle-time"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-keep-alive-idle-time',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline73.fnName = 'wasi:sockets/tcp@0.2.9#setKeepAliveIdleTime';

const _trampoline74 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-interval"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'keepAliveInterval',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.keepAliveInterval(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-interval"][Instruction::Return]', {
  funcName: '[method]tcp-socket.keep-alive-interval',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline74.fnName = 'wasi:sockets/tcp@0.2.9#keepAliveInterval';

const _trampoline75 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-interval"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setKeepAliveInterval',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setKeepAliveInterval(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-interval"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-keep-alive-interval',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline75.fnName = 'wasi:sockets/tcp@0.2.9#setKeepAliveInterval';

const _trampoline76 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-count"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'keepAliveCount',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.keepAliveCount(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setInt32(arg1 + 4, toUint32(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.keep-alive-count"][Instruction::Return]', {
  funcName: '[method]tcp-socket.keep-alive-count',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline76.fnName = 'wasi:sockets/tcp@0.2.9#keepAliveCount';

const _trampoline77 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-count"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setKeepAliveCount',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setKeepAliveCount(arg1 >>> 0),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-keep-alive-count"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-keep-alive-count',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline77.fnName = 'wasi:sockets/tcp@0.2.9#setKeepAliveCount';

const _trampoline78 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.hop-limit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'hopLimit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.hopLimit(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setInt8(arg1 + 1, toUint8(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.hop-limit"][Instruction::Return]', {
  funcName: '[method]tcp-socket.hop-limit',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline78.fnName = 'wasi:sockets/tcp@0.2.9#hopLimit';

const _trampoline79 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-hop-limit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setHopLimit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setHopLimit(clampGuest(arg1, 0, 255)),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-hop-limit"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-hop-limit',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline79.fnName = 'wasi:sockets/tcp@0.2.9#setHopLimit';

const _trampoline80 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.receive-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'receiveBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.receiveBufferSize(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.receive-buffer-size"][Instruction::Return]', {
  funcName: '[method]tcp-socket.receive-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline80.fnName = 'wasi:sockets/tcp@0.2.9#receiveBufferSize';

const _trampoline81 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-receive-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setReceiveBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setReceiveBufferSize(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-receive-buffer-size"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-receive-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline81.fnName = 'wasi:sockets/tcp@0.2.9#setReceiveBufferSize';

const _trampoline82 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.send-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'sendBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.sendBufferSize(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 8, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.send-buffer-size"][Instruction::Return]', {
  funcName: '[method]tcp-socket.send-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline82.fnName = 'wasi:sockets/tcp@0.2.9#sendBufferSize';

const _trampoline83 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-send-buffer-size"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'setSendBufferSize',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.setSendBufferSize(BigInt.asUintN(64, BigInt(arg1))),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant4 = ret;
switch (variant4.tag) {
  case 'ok': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant4.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val3 = e;
    let enum3;
    switch (val3) {
      case 'unknown': {
        enum3 = 0;
        break;
      }
      case 'access-denied': {
        enum3 = 1;
        break;
      }
      case 'not-supported': {
        enum3 = 2;
        break;
      }
      case 'invalid-argument': {
        enum3 = 3;
        break;
      }
      case 'out-of-memory': {
        enum3 = 4;
        break;
      }
      case 'timeout': {
        enum3 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum3 = 6;
        break;
      }
      case 'not-in-progress': {
        enum3 = 7;
        break;
      }
      case 'would-block': {
        enum3 = 8;
        break;
      }
      case 'invalid-state': {
        enum3 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum3 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum3 = 11;
        break;
      }
      case 'address-in-use': {
        enum3 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum3 = 13;
        break;
      }
      case 'connection-refused': {
        enum3 = 14;
        break;
      }
      case 'connection-reset': {
        enum3 = 15;
        break;
      }
      case 'connection-aborted': {
        enum3 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum3 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum3 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum3 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum3 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val3}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum3, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant4, valueType: typeof variant4});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.set-send-buffer-size"][Instruction::Return]', {
  funcName: '[method]tcp-socket.set-send-buffer-size',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline83.fnName = 'wasi:sockets/tcp@0.2.9#setSendBufferSize';

const _trampoline84 = function(arg0, arg1, arg2) {
  var handle1 = arg0;
  
  var rep2 = handleTable11[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable11.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(TcpSocket.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  let enum3;
  switch (arg1) {
    case 0: {
      enum3 = 'receive';
      break;
    }
    case 1: {
      enum3 = 'send';
      break;
    }
    case 2: {
      enum3 = 'both';
      break;
    }
    default: {
      throw new TypeError('invalid discriminant specified for ShutdownType');
    }
  }
  _debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.shutdown"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'shutdown',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.shutdown(enum3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg2 + 0, 1, true);
    var val4 = e;
    let enum4;
    switch (val4) {
      case 'unknown': {
        enum4 = 0;
        break;
      }
      case 'access-denied': {
        enum4 = 1;
        break;
      }
      case 'not-supported': {
        enum4 = 2;
        break;
      }
      case 'invalid-argument': {
        enum4 = 3;
        break;
      }
      case 'out-of-memory': {
        enum4 = 4;
        break;
      }
      case 'timeout': {
        enum4 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum4 = 6;
        break;
      }
      case 'not-in-progress': {
        enum4 = 7;
        break;
      }
      case 'would-block': {
        enum4 = 8;
        break;
      }
      case 'invalid-state': {
        enum4 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum4 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum4 = 11;
        break;
      }
      case 'address-in-use': {
        enum4 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum4 = 13;
        break;
      }
      case 'connection-refused': {
        enum4 = 14;
        break;
      }
      case 'connection-reset': {
        enum4 = 15;
        break;
      }
      case 'connection-aborted': {
        enum4 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum4 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum4 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum4 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum4 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val4}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg2 + 1, enum4, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp@0.2.9", function="[method]tcp-socket.shutdown"][Instruction::Return]', {
  funcName: '[method]tcp-socket.shutdown',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline84.fnName = 'wasi:sockets/tcp@0.2.9#shutdown';

const _trampoline85 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable12[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable12.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(ResolveAddressStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="[method]resolve-address-stream.resolve-next-address"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'resolveNextAddress',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.resolveNextAddress(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant8 = ret;
switch (variant8.tag) {
  case 'ok': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    var variant6 = e;
    if (variant6 === null || variant6=== undefined) {
      dataView(memory0).setInt8(arg1 + 2, 0, true);
    } else {
      const e = variant6;
      dataView(memory0).setInt8(arg1 + 2, 1, true);
      var variant5 = e;
      switch (variant5.tag) {
        case 'ipv4': {
          const e = variant5.val;
          dataView(memory0).setInt8(arg1 + 4, 0, true);
          var [tuple3_0, tuple3_1, tuple3_2, tuple3_3] = e;
          dataView(memory0).setInt8(arg1 + 6, toUint8(tuple3_0), true);
          dataView(memory0).setInt8(arg1 + 7, toUint8(tuple3_1), true);
          dataView(memory0).setInt8(arg1 + 8, toUint8(tuple3_2), true);
          dataView(memory0).setInt8(arg1 + 9, toUint8(tuple3_3), true);
          break;
        }
        case 'ipv6': {
          const e = variant5.val;
          dataView(memory0).setInt8(arg1 + 4, 1, true);
          var [tuple4_0, tuple4_1, tuple4_2, tuple4_3, tuple4_4, tuple4_5, tuple4_6, tuple4_7] = e;
          dataView(memory0).setInt16(arg1 + 6, toUint16(tuple4_0), true);
          dataView(memory0).setInt16(arg1 + 8, toUint16(tuple4_1), true);
          dataView(memory0).setInt16(arg1 + 10, toUint16(tuple4_2), true);
          dataView(memory0).setInt16(arg1 + 12, toUint16(tuple4_3), true);
          dataView(memory0).setInt16(arg1 + 14, toUint16(tuple4_4), true);
          dataView(memory0).setInt16(arg1 + 16, toUint16(tuple4_5), true);
          dataView(memory0).setInt16(arg1 + 18, toUint16(tuple4_6), true);
          dataView(memory0).setInt16(arg1 + 20, toUint16(tuple4_7), true);
          break;
        }
        default: {
          throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant5.tag)}\` (received \`${variant5}\`) specified for \`IpAddress\``);
        }
      }
    }
    
    break;
  }
  case 'err': {
    const e = variant8.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val7 = e;
    let enum7;
    switch (val7) {
      case 'unknown': {
        enum7 = 0;
        break;
      }
      case 'access-denied': {
        enum7 = 1;
        break;
      }
      case 'not-supported': {
        enum7 = 2;
        break;
      }
      case 'invalid-argument': {
        enum7 = 3;
        break;
      }
      case 'out-of-memory': {
        enum7 = 4;
        break;
      }
      case 'timeout': {
        enum7 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum7 = 6;
        break;
      }
      case 'not-in-progress': {
        enum7 = 7;
        break;
      }
      case 'would-block': {
        enum7 = 8;
        break;
      }
      case 'invalid-state': {
        enum7 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum7 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum7 = 11;
        break;
      }
      case 'address-in-use': {
        enum7 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum7 = 13;
        break;
      }
      case 'connection-refused': {
        enum7 = 14;
        break;
      }
      case 'connection-reset': {
        enum7 = 15;
        break;
      }
      case 'connection-aborted': {
        enum7 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum7 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum7 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum7 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum7 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val7}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 2, enum7, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant8, valueType: typeof variant8});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="[method]resolve-address-stream.resolve-next-address"][Instruction::Return]', {
  funcName: '[method]resolve-address-stream.resolve-next-address',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline85.fnName = 'wasi:sockets/ip-name-lookup@0.2.9#resolveNextAddress';

const _trampoline86 = function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable7[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable7.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Network.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var ptr3 = arg1;
  var len3 = arg2;
  var result3 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr3, len3));
  _debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="resolve-addresses"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'resolveAddresses',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => resolveAddresses(rsc0, result3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant6 = ret;
switch (variant6.tag) {
  case 'ok': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    
    if (!(e instanceof ResolveAddressStream)) {
      throw new TypeError('Resource error: Not a valid \"ResolveAddressStream\" resource.');
    }
    var handle4 = e[symbolRscHandle];
    if (!handle4) {
      const rep = e[symbolRscRep] || ++captureCnt12;
      captureTable12.set(rep, e);
      handle4 = rscTableCreateOwn(handleTable12, rep);
    }
    
    dataView(memory0).setInt32(arg3 + 4, handle4, true);
    
    break;
  }
  case 'err': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var val5 = e;
    let enum5;
    switch (val5) {
      case 'unknown': {
        enum5 = 0;
        break;
      }
      case 'access-denied': {
        enum5 = 1;
        break;
      }
      case 'not-supported': {
        enum5 = 2;
        break;
      }
      case 'invalid-argument': {
        enum5 = 3;
        break;
      }
      case 'out-of-memory': {
        enum5 = 4;
        break;
      }
      case 'timeout': {
        enum5 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum5 = 6;
        break;
      }
      case 'not-in-progress': {
        enum5 = 7;
        break;
      }
      case 'would-block': {
        enum5 = 8;
        break;
      }
      case 'invalid-state': {
        enum5 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum5 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum5 = 11;
        break;
      }
      case 'address-in-use': {
        enum5 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum5 = 13;
        break;
      }
      case 'connection-refused': {
        enum5 = 14;
        break;
      }
      case 'connection-reset': {
        enum5 = 15;
        break;
      }
      case 'connection-aborted': {
        enum5 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum5 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum5 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum5 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum5 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val5}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg3 + 4, enum5, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant6, valueType: typeof variant6});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/ip-name-lookup@0.2.9", function="resolve-addresses"][Instruction::Return]', {
  funcName: 'resolve-addresses',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline86.fnName = 'wasi:sockets/ip-name-lookup@0.2.9#resolveAddresses';

const _trampoline87 = function(arg0) {
  _debugLog('[iface="wasi:cli/environment@0.2.9", function="get-environment"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getEnvironment',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getEnvironment(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var vec3 = ret;
  var len3 = vec3.length;
  var result3 = realloc0(0, 0, 4, len3 * 16);
  for (let i = 0; i < vec3.length; i++) {
    const e = vec3[i];
    const base = result3 + i * 16;var [tuple0_0, tuple0_1] = e;
    
    var encodeRes = _utf8AllocateAndEncode(tuple0_0, realloc0, memory0);
    var ptr1= encodeRes.ptr;
    var len1 = encodeRes.len;
    
    dataView(memory0).setUint32(base + 4, len1, true);
    dataView(memory0).setUint32(base + 0, ptr1, true);
    
    var encodeRes = _utf8AllocateAndEncode(tuple0_1, realloc0, memory0);
    var ptr2= encodeRes.ptr;
    var len2 = encodeRes.len;
    
    dataView(memory0).setUint32(base + 12, len2, true);
    dataView(memory0).setUint32(base + 8, ptr2, true);
  }
  dataView(memory0).setUint32(arg0 + 4, len3, true);
  dataView(memory0).setUint32(arg0 + 0, result3, true);
  _debugLog('[iface="wasi:cli/environment@0.2.9", function="get-environment"][Instruction::Return]', {
    funcName: 'get-environment',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline87.fnName = 'wasi:cli/environment@0.2.9#getEnvironment';

const handleTable4 = [T_FLAG, 0];
handleTable4._createdReps = new Set();


const captureTable4= new Map();
let captureCnt4= 0;

HANDLE_TABLES[4] = handleTable4;

const _trampoline88 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stdin@0.2.9", function="get-terminal-stdin"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStdin',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStdin(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalInput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt4;
      captureTable4.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable4, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stdin@0.2.9", function="get-terminal-stdin"][Instruction::Return]', {
    funcName: 'get-terminal-stdin',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline88.fnName = 'wasi:cli/terminal-stdin@0.2.9#getTerminalStdin';

const handleTable5 = [T_FLAG, 0];
handleTable5._createdReps = new Set();


const captureTable5= new Map();
let captureCnt5= 0;

HANDLE_TABLES[5] = handleTable5;

const _trampoline89 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stdout@0.2.9", function="get-terminal-stdout"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStdout',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStdout(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalOutput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt5;
      captureTable5.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable5, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stdout@0.2.9", function="get-terminal-stdout"][Instruction::Return]', {
    funcName: 'get-terminal-stdout',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline89.fnName = 'wasi:cli/terminal-stdout@0.2.9#getTerminalStdout';

const _trampoline90 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stderr@0.2.9", function="get-terminal-stderr"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStderr',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStderr(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalOutput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt5;
      captureTable5.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable5, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stderr@0.2.9", function="get-terminal-stderr"][Instruction::Return]', {
    funcName: 'get-terminal-stderr',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline90.fnName = 'wasi:cli/terminal-stderr@0.2.9#getTerminalStderr';

const _trampoline91 = function(arg0) {
  _debugLog('[iface="wasi:clocks/wall-clock@0.2.9", function="now"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'now$1',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => now$1(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var {seconds: v0_0, nanoseconds: v0_1 } = ret;
  dataView(memory0).setBigInt64(arg0 + 0, toUint64(v0_0), true);
  dataView(memory0).setInt32(arg0 + 8, toUint32(v0_1), true);
  _debugLog('[iface="wasi:clocks/wall-clock@0.2.9", function="now"][Instruction::Return]', {
    funcName: 'now',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline91.fnName = 'wasi:clocks/wall-clock@0.2.9#now$1';

const _trampoline92 = function(arg0) {
  _debugLog('[iface="wasi:filesystem/preopens@0.2.9", function="get-directories"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getDirectories',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getDirectories(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var vec3 = ret;
  var len3 = vec3.length;
  var result3 = realloc0(0, 0, 4, len3 * 12);
  for (let i = 0; i < vec3.length; i++) {
    const e = vec3[i];
    const base = result3 + i * 12;var [tuple0_0, tuple0_1] = e;
    
    if (!(tuple0_0 instanceof Descriptor)) {
      throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
    }
    var handle1 = tuple0_0[symbolRscHandle];
    if (!handle1) {
      const rep = tuple0_0[symbolRscRep] || ++captureCnt6;
      captureTable6.set(rep, tuple0_0);
      handle1 = rscTableCreateOwn(handleTable6, rep);
    }
    
    dataView(memory0).setInt32(base + 0, handle1, true);
    
    var encodeRes = _utf8AllocateAndEncode(tuple0_1, realloc0, memory0);
    var ptr2= encodeRes.ptr;
    var len2 = encodeRes.len;
    
    dataView(memory0).setUint32(base + 8, len2, true);
    dataView(memory0).setUint32(base + 4, ptr2, true);
  }
  dataView(memory0).setUint32(arg0 + 4, len3, true);
  dataView(memory0).setUint32(arg0 + 0, result3, true);
  _debugLog('[iface="wasi:filesystem/preopens@0.2.9", function="get-directories"][Instruction::Return]', {
    funcName: 'get-directories',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline92.fnName = 'wasi:filesystem/preopens@0.2.9#getDirectories';

const _trampoline93 = function(arg0, arg1) {
  let enum0;
  switch (arg0) {
    case 0: {
      enum0 = 'ipv4';
      break;
    }
    case 1: {
      enum0 = 'ipv6';
      break;
    }
    default: {
      throw new TypeError('invalid discriminant specified for IpAddressFamily');
    }
  }
  _debugLog('[iface="wasi:sockets/udp-create-socket@0.2.9", function="create-udp-socket"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'createUdpSocket',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => createUdpSocket(enum0),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

var variant3 = ret;
switch (variant3.tag) {
  case 'ok': {
    const e = variant3.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    if (!(e instanceof UdpSocket)) {
      throw new TypeError('Resource error: Not a valid \"UdpSocket\" resource.');
    }
    var handle1 = e[symbolRscHandle];
    if (!handle1) {
      const rep = e[symbolRscRep] || ++captureCnt8;
      captureTable8.set(rep, e);
      handle1 = rscTableCreateOwn(handleTable8, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 4, handle1, true);
    
    break;
  }
  case 'err': {
    const e = variant3.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val2 = e;
    let enum2;
    switch (val2) {
      case 'unknown': {
        enum2 = 0;
        break;
      }
      case 'access-denied': {
        enum2 = 1;
        break;
      }
      case 'not-supported': {
        enum2 = 2;
        break;
      }
      case 'invalid-argument': {
        enum2 = 3;
        break;
      }
      case 'out-of-memory': {
        enum2 = 4;
        break;
      }
      case 'timeout': {
        enum2 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum2 = 6;
        break;
      }
      case 'not-in-progress': {
        enum2 = 7;
        break;
      }
      case 'would-block': {
        enum2 = 8;
        break;
      }
      case 'invalid-state': {
        enum2 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum2 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum2 = 11;
        break;
      }
      case 'address-in-use': {
        enum2 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum2 = 13;
        break;
      }
      case 'connection-refused': {
        enum2 = 14;
        break;
      }
      case 'connection-reset': {
        enum2 = 15;
        break;
      }
      case 'connection-aborted': {
        enum2 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum2 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum2 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum2 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum2 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val2}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum2, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant3, valueType: typeof variant3});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/udp-create-socket@0.2.9", function="create-udp-socket"][Instruction::Return]', {
  funcName: 'create-udp-socket',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline93.fnName = 'wasi:sockets/udp-create-socket@0.2.9#createUdpSocket';

const _trampoline94 = function(arg0, arg1) {
  let enum0;
  switch (arg0) {
    case 0: {
      enum0 = 'ipv4';
      break;
    }
    case 1: {
      enum0 = 'ipv6';
      break;
    }
    default: {
      throw new TypeError('invalid discriminant specified for IpAddressFamily');
    }
  }
  _debugLog('[iface="wasi:sockets/tcp-create-socket@0.2.9", function="create-tcp-socket"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'createTcpSocket',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => createTcpSocket(enum0),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

var variant3 = ret;
switch (variant3.tag) {
  case 'ok': {
    const e = variant3.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    if (!(e instanceof TcpSocket)) {
      throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
    }
    var handle1 = e[symbolRscHandle];
    if (!handle1) {
      const rep = e[symbolRscRep] || ++captureCnt11;
      captureTable11.set(rep, e);
      handle1 = rscTableCreateOwn(handleTable11, rep);
    }
    
    dataView(memory0).setInt32(arg1 + 4, handle1, true);
    
    break;
  }
  case 'err': {
    const e = variant3.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var val2 = e;
    let enum2;
    switch (val2) {
      case 'unknown': {
        enum2 = 0;
        break;
      }
      case 'access-denied': {
        enum2 = 1;
        break;
      }
      case 'not-supported': {
        enum2 = 2;
        break;
      }
      case 'invalid-argument': {
        enum2 = 3;
        break;
      }
      case 'out-of-memory': {
        enum2 = 4;
        break;
      }
      case 'timeout': {
        enum2 = 5;
        break;
      }
      case 'concurrency-conflict': {
        enum2 = 6;
        break;
      }
      case 'not-in-progress': {
        enum2 = 7;
        break;
      }
      case 'would-block': {
        enum2 = 8;
        break;
      }
      case 'invalid-state': {
        enum2 = 9;
        break;
      }
      case 'new-socket-limit': {
        enum2 = 10;
        break;
      }
      case 'address-not-bindable': {
        enum2 = 11;
        break;
      }
      case 'address-in-use': {
        enum2 = 12;
        break;
      }
      case 'remote-unreachable': {
        enum2 = 13;
        break;
      }
      case 'connection-refused': {
        enum2 = 14;
        break;
      }
      case 'connection-reset': {
        enum2 = 15;
        break;
      }
      case 'connection-aborted': {
        enum2 = 16;
        break;
      }
      case 'datagram-too-large': {
        enum2 = 17;
        break;
      }
      case 'name-unresolvable': {
        enum2 = 18;
        break;
      }
      case 'temporary-resolver-failure': {
        enum2 = 19;
        break;
      }
      case 'permanent-resolver-failure': {
        enum2 = 20;
        break;
      }
      default: {
        if ((e) instanceof Error) {
          console.error(e);
        }
        
        throw new TypeError(`"${val2}" is not one of the cases of error-code`);
      }
    }
    dataView(memory0).setInt8(arg1 + 4, enum2, true);
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant3, valueType: typeof variant3});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:sockets/tcp-create-socket@0.2.9", function="create-tcp-socket"][Instruction::Return]', {
  funcName: 'create-tcp-socket',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline94.fnName = 'wasi:sockets/tcp-create-socket@0.2.9#createTcpSocket';

const _trampoline95 = async function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var ptr3 = arg1;
  var len3 = arg2;
  var result3 = new Uint8Array(memory0.buffer.slice(ptr3, ptr3 + len3 * 1));
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-write-and-flush"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'blockingWriteAndFlush',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  
  const started = await task.enter({ isHost: hostProvided });
  if (!started) {
    _debugLog('[Instruction::CallInterface] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  let ret;
  try {
    ret = { tag: 'ok', val: await  _withGlobalCurrentTaskMetaAsync({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.blockingWriteAndFlush(result3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant6 = ret;
switch (variant6.tag) {
  case 'ok': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var variant5 = e;
    switch (variant5.tag) {
      case 'last-operation-failed': {
        const e = variant5.val;
        dataView(memory0).setInt8(arg3 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle4 = e[symbolRscHandle];
        if (!handle4) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle4 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg3 + 8, handle4, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg3 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant5.tag)}\` (received \`${variant5}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant6, valueType: typeof variant6});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-write-and-flush"][Instruction::Return]', {
  funcName: '[method]output-stream.blocking-write-and-flush',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline95.fnName = 'wasi:io/streams@0.2.9#blockingWriteAndFlush';
_trampoline95.manuallyAsync = true;

const _trampoline96 = function(arg0, arg1) {
  _debugLog('[iface="wasi:random/random@0.2.9", function="get-random-bytes"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getRandomBytes',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getRandomBytes(BigInt.asUintN(64, BigInt(arg0))),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var val0 = ret;
  var len0 = Array.isArray(val0) ? val0.length : val0.byteLength;
  var ptr0 = realloc1(0, 0, 1, len0 * 1);
  
  let valData0;
  const valLenBytes0 = len0 * 1;
  if (Array.isArray(val0)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv0 = new DataView(memory0.buffer);
    for (const v of val0) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv0.setUint8(ptr0+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData0 = new Uint8Array(val0.buffer || val0, val0.byteOffset, valLenBytes0);
    const out0 = new Uint8Array(memory0.buffer, ptr0, valLenBytes0);
    out0.set(valData0);
  }
  
  dataView(memory0).setUint32(arg1 + 4, len0, true);
  dataView(memory0).setUint32(arg1 + 0, ptr0, true);
  _debugLog('[iface="wasi:random/random@0.2.9", function="get-random-bytes"][Instruction::Return]', {
    funcName: 'get-random-bytes',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline96.fnName = 'wasi:random/random@0.2.9#getRandomBytes';
let exports3;
let run020Run;

async function run() {
  _debugLog('[iface="wasi:cli/run@0.2.0", function="run"][Instruction::CallWasm] enter', {
    funcName: 'run',
    paramCount: 0,
    async: false,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: false,
    isManualAsync: true,
    preserveFutureResult: false,
    entryFnName: 'run020Run',
    getCallbackFn: () => null,
    callbackFnName: null,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (null!== null) {
    task.setReturnMemoryIdx(null);
    task.setReturnMemory(() => null());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => run020Run(),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  let variant0;
  switch (ret) {
    case 0: {
      variant0= {
        tag: 'ok',
        val: undefined
      };
      break;
    }
    case 1: {
      variant0= {
        tag: 'err',
        val: undefined
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  _debugLog('[iface="wasi:cli/run@0.2.0", function="run"][Instruction::Return]', {
    funcName: 'run',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  const retCopy = variant0;
  task.resolve([retCopy.val]);
  task.exit();
  
  if (typeof retCopy === 'object' && retCopy.tag === 'err') {
    throw new ComponentError(retCopy.val);
  }
  return retCopy.val;
  
}
let trampoline0 = _trampoline0.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 0,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline0.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline0,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 0,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline0.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline0,
},
);
function trampoline1(handle) {
  const handleEntry = rscTableRemove(handleTable1, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable1.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable1.delete(handleEntry.rep);
    } else if (Error$1[symbolCabiDispose]) {
      Error$1[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline2(handle) {
  const handleEntry = rscTableRemove(handleTable0, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable0.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable0.delete(handleEntry.rep);
    } else if (Pollable[symbolCabiDispose]) {
      Pollable[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline3(handle) {
  const handleEntry = rscTableRemove(handleTable2, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable2.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable2.delete(handleEntry.rep);
    } else if (InputStream[symbolCabiDispose]) {
      InputStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline4(handle) {
  const handleEntry = rscTableRemove(handleTable3, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable3.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable3.delete(handleEntry.rep);
    } else if (OutputStream[symbolCabiDispose]) {
      OutputStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline5(handle) {
  const handleEntry = rscTableRemove(handleTable4, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable4.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable4.delete(handleEntry.rep);
    } else if (TerminalInput[symbolCabiDispose]) {
      TerminalInput[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline6(handle) {
  const handleEntry = rscTableRemove(handleTable5, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable5.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable5.delete(handleEntry.rep);
    } else if (TerminalOutput[symbolCabiDispose]) {
      TerminalOutput[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline7(handle) {
  const handleEntry = rscTableRemove(handleTable6, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable6.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable6.delete(handleEntry.rep);
    } else if (Descriptor[symbolCabiDispose]) {
      Descriptor[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline8(handle) {
  const handleEntry = rscTableRemove(handleTable8, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable8.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable8.delete(handleEntry.rep);
    } else if (UdpSocket[symbolCabiDispose]) {
      UdpSocket[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline9(handle) {
  const handleEntry = rscTableRemove(handleTable9, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable9.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable9.delete(handleEntry.rep);
    } else if (IncomingDatagramStream[symbolCabiDispose]) {
      IncomingDatagramStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline10(handle) {
  const handleEntry = rscTableRemove(handleTable10, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable10.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable10.delete(handleEntry.rep);
    } else if (OutgoingDatagramStream[symbolCabiDispose]) {
      OutgoingDatagramStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline11(handle) {
  const handleEntry = rscTableRemove(handleTable11, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable11.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable11.delete(handleEntry.rep);
    } else if (TcpSocket[symbolCabiDispose]) {
      TcpSocket[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline12(handle) {
  const handleEntry = rscTableRemove(handleTable12, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable12.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable12.delete(handleEntry.rep);
    } else if (ResolveAddressStream[symbolCabiDispose]) {
      ResolveAddressStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
let trampoline13 = _trampoline13.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 13,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline13.manuallyAsync,
  paramLiftFns: [
  _liftFlatResult({
    caseMetas: [['ok', null, 0, 0, 0, []],['err', null, 0, 0, 0, []],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
    variantPayloadFlatTypes: [],
  })
  ],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline13,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 13,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline13.manuallyAsync,
  paramLiftFns: [
  _liftFlatResult({
    caseMetas: [['ok', null, 0, 0, 0, []],['err', null, 0, 0, 0, []],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
    variantPayloadFlatTypes: [],
  })
  ],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline13,
},
);
let trampoline14 = _trampoline14.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 14,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline14.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 0)],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline14,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 14,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline14.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 0)],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline14,
},
);
let trampoline15 = _trampoline15.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 15,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline15.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 2)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline15,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 15,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline15.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 2)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline15,
},
);
let trampoline16 = _trampoline16.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 16,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline16.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline16,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 16,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline16.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline16,
},
);
let trampoline17 = _trampoline17.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 17,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline17.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_InputStream(obj) {
      if (!(obj instanceof InputStream)) {
        throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt2;
        captureTable2.set(rep, obj);
        handle = rscTableCreateOwn(handleTable2, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline17,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 17,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline17.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_InputStream(obj) {
      if (!(obj instanceof InputStream)) {
        throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt2;
        captureTable2.set(rep, obj);
        handle = rscTableCreateOwn(handleTable2, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline17,
},
);
let trampoline18 = _trampoline18.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 18,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline18.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline18,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 18,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline18.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline18,
},
);
let trampoline19 = _trampoline19.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 19,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline19.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline19,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 19,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline19.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline19,
},
);
let trampoline20 = _trampoline20.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 20,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline20.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline20,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 20,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline20.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline20,
},
);
let trampoline21 = _trampoline21.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 21,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline21.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline21,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 21,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline21.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline21,
},
);
let trampoline22 = _trampoline22.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 22,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline22.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline22,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 22,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline22.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline22,
},
);
let trampoline23 = _trampoline23.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 23,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline23.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Network(obj) {
      if (!(obj instanceof Network)) {
        throw new TypeError('Resource error: Not a valid \"Network\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt7;
        captureTable7.set(rep, obj);
        handle = rscTableCreateOwn(handleTable7, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline23,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 23,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline23.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Network(obj) {
      if (!(obj instanceof Network)) {
        throw new TypeError('Resource error: Not a valid \"Network\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt7;
        captureTable7.set(rep, obj);
        handle = rscTableCreateOwn(handleTable7, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline23,
},
);
let trampoline24 = _trampoline24.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 24,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline24.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline24,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 24,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline24.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline24,
},
);
let trampoline25 = _trampoline25.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 25,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline25.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 9)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline25,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 25,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline25.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 9)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline25,
},
);
let trampoline26 = _trampoline26.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 26,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline26.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline26,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 26,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline26.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline26,
},
);
let trampoline27 = _trampoline27.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 27,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline27.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [_lowerFlatBool],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline27,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 27,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline27.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [_lowerFlatBool],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline27,
},
);
let trampoline28 = _trampoline28.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 28,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline28.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline28,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 28,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline28.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline28,
},
);
let trampoline29 = _trampoline29.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 29,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline29.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 12)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline29,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 29,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline29.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 12)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline29,
},
);
let trampoline30 = _trampoline30.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 30,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline30.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU64, 8, 8],[_lowerFlatU64, 8, 8],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline30,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 30,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline30.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU64, 8, 8],[_lowerFlatU64, 8, 8],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline30,
},
);
let trampoline31 = _trampoline31.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 31,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline31.manuallyAsync,
  paramLiftFns: [_liftFlatList({
    elemLiftFn: _liftFlatBorrow.bind(null, 0),
    elemAlign32: 4,
    elemSize32: 4,
    typedArray: undefined,
  })],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU32,
    elemSize32: 4,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline31,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 31,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline31.manuallyAsync,
  paramLiftFns: [_liftFlatList({
    elemLiftFn: _liftFlatBorrow.bind(null, 0),
    elemAlign32: 4,
    elemSize32: 4,
    typedArray: undefined,
  })],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU32,
    elemSize32: 4,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline31,
},
);
let trampoline32 = _trampoline32.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 32,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline32.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 2),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatList({
      elemLowerFn: _lowerFlatU8,
      elemSize32: 1,
      elemAlign32: 1,
    }), 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline32,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 32,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline32.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 2),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatList({
      elemLowerFn: _lowerFlatU8,
      elemSize32: 1,
      elemAlign32: 1,
    }), 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline32,
},
);
let trampoline33 = _trampoline33.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 33,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline33.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline33,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 33,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline33.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline33,
},
);
let trampoline34 = _trampoline34.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 34,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline34.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline34,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 34,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline34.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline34,
},
);
let trampoline35 = _trampoline35.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 35,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline35.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline35,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 35,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline35.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline35,
},
);
let trampoline36 = _trampoline36.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 36,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline36.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline36,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 36,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline36.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline36,
},
);
let trampoline37 = _trampoline37.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 37,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline37.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline37,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 37,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline37.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline37,
},
);
let trampoline38 = _trampoline38.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 38,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline38.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline38,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 38,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline38.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline38,
},
);
let trampoline39 = _trampoline39.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 39,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline39.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatFlags({ names: ['read','write','fileIntegritySync','dataIntegritySync','requestedWriteSync','mutateDirectory'], size32: 1, align32: 1, intSizeBytes: 1 }), 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline39,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 39,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline39.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatFlags({ names: ['read','write','fileIntegritySync','dataIntegritySync','requestedWriteSync','mutateDirectory'], size32: 1, align32: 1, intSizeBytes: 1 }), 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline39,
},
);
let trampoline40 = _trampoline40.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 40,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline40.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline40,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 40,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline40.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline40,
},
);
let trampoline41 = _trampoline41.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 41,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline41.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['type', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['block-device', null, 1, 1, 1],['character-device', null, 1, 1, 1],['directory', null, 1, 1, 1],['fifo', null, 1, 1, 1],['symbolic-link', null, 1, 1, 1],['regular-file', null, 1, 1, 1],['socket', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 1, 1 ],['linkCount', _lowerFlatU64, 8, 8 ],['size', _lowerFlatU64, 8, 8 ],['dataAccessTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['dataModificationTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['statusChangeTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],], size32: 96, align32: 8 }), 104, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 104, 8, 8 ],
    ],
    variantSize32: 104,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline41,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 41,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline41.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['type', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['block-device', null, 1, 1, 1],['character-device', null, 1, 1, 1],['directory', null, 1, 1, 1],['fifo', null, 1, 1, 1],['symbolic-link', null, 1, 1, 1],['regular-file', null, 1, 1, 1],['socket', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 1, 1 ],['linkCount', _lowerFlatU64, 8, 8 ],['size', _lowerFlatU64, 8, 8 ],['dataAccessTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['dataModificationTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['statusChangeTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],], size32: 96, align32: 8 }), 104, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 104, 8, 8 ],
    ],
    variantSize32: 104,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline41,
},
);
let trampoline42 = _trampoline42.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 42,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline42.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['type', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['block-device', null, 1, 1, 1],['character-device', null, 1, 1, 1],['directory', null, 1, 1, 1],['fifo', null, 1, 1, 1],['symbolic-link', null, 1, 1, 1],['regular-file', null, 1, 1, 1],['socket', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 1, 1 ],['linkCount', _lowerFlatU64, 8, 8 ],['size', _lowerFlatU64, 8, 8 ],['dataAccessTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['dataModificationTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['statusChangeTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],], size32: 96, align32: 8 }), 104, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 104, 8, 8 ],
    ],
    variantSize32: 104,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline42,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 42,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline42.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['type', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['block-device', null, 1, 1, 1],['character-device', null, 1, 1, 1],['directory', null, 1, 1, 1],['fifo', null, 1, 1, 1],['symbolic-link', null, 1, 1, 1],['regular-file', null, 1, 1, 1],['socket', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 1, 1 ],['linkCount', _lowerFlatU64, 8, 8 ],['size', _lowerFlatU64, 8, 8 ],['dataAccessTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['dataModificationTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],['statusChangeTimestamp', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 }), 16, 8, 2],
      ],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 3,
    })
    , 24, 8 ],], size32: 96, align32: 8 }), 104, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 104, 8, 8 ],
    ],
    variantSize32: 104,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline42,
},
);
let trampoline43 = _trampoline43.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 43,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline43.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny,_liftFlatFlags({ names: ['create','directory','exclusive','truncate'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatFlags({ names: ['read','write','fileIntegritySync','dataIntegritySync','requestedWriteSync','mutateDirectory'], size32: 1, align32: 1, intSizeBytes: 1 })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_Descriptor(obj) {
        if (!(obj instanceof Descriptor)) {
          throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt6;
          captureTable6.set(rep, obj);
          handle = rscTableCreateOwn(handleTable6, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline43,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 43,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline43.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny,_liftFlatFlags({ names: ['create','directory','exclusive','truncate'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatFlags({ names: ['read','write','fileIntegritySync','dataIntegritySync','requestedWriteSync','mutateDirectory'], size32: 1, align32: 1, intSizeBytes: 1 })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_Descriptor(obj) {
        if (!(obj instanceof Descriptor)) {
          throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt6;
          captureTable6.set(rep, obj);
          handle = rscTableCreateOwn(handleTable6, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline43,
},
);
let trampoline44 = _trampoline44.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 44,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline44.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['lower', _lowerFlatU64, 8, 8 ],['upper', _lowerFlatU64, 8, 8 ],], size32: 16, align32: 8 }), 24, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 24, 8, 8 ],
    ],
    variantSize32: 24,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline44,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 44,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline44.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['lower', _lowerFlatU64, 8, 8 ],['upper', _lowerFlatU64, 8, 8 ],], size32: 16, align32: 8 }), 24, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 24, 8, 8 ],
    ],
    variantSize32: 24,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline44,
},
);
let trampoline45 = _trampoline45.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 45,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline45.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['lower', _lowerFlatU64, 8, 8 ],['upper', _lowerFlatU64, 8, 8 ],], size32: 16, align32: 8 }), 24, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 24, 8, 8 ],
    ],
    variantSize32: 24,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline45,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 45,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline45.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 6),_liftFlatFlags({ names: ['symlinkFollow'], size32: 1, align32: 1, intSizeBytes: 1 }),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['lower', _lowerFlatU64, 8, 8 ],['upper', _lowerFlatU64, 8, 8 ],], size32: 16, align32: 8 }), 24, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['access', null, 1, 1, 1],['would-block', null, 1, 1, 1],['already', null, 1, 1, 1],['bad-descriptor', null, 1, 1, 1],['busy', null, 1, 1, 1],['deadlock', null, 1, 1, 1],['quota', null, 1, 1, 1],['exist', null, 1, 1, 1],['file-too-large', null, 1, 1, 1],['illegal-byte-sequence', null, 1, 1, 1],['in-progress', null, 1, 1, 1],['interrupted', null, 1, 1, 1],['invalid', null, 1, 1, 1],['io', null, 1, 1, 1],['is-directory', null, 1, 1, 1],['loop', null, 1, 1, 1],['too-many-links', null, 1, 1, 1],['message-size', null, 1, 1, 1],['name-too-long', null, 1, 1, 1],['no-device', null, 1, 1, 1],['no-entry', null, 1, 1, 1],['no-lock', null, 1, 1, 1],['insufficient-memory', null, 1, 1, 1],['insufficient-space', null, 1, 1, 1],['not-directory', null, 1, 1, 1],['not-empty', null, 1, 1, 1],['not-recoverable', null, 1, 1, 1],['unsupported', null, 1, 1, 1],['no-tty', null, 1, 1, 1],['no-such-device', null, 1, 1, 1],['overflow', null, 1, 1, 1],['not-permitted', null, 1, 1, 1],['pipe', null, 1, 1, 1],['read-only', null, 1, 1, 1],['invalid-seek', null, 1, 1, 1],['text-file-busy', null, 1, 1, 1],['cross-device', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 24, 8, 8 ],
    ],
    variantSize32: 24,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline45,
},
);
let trampoline46 = _trampoline46.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 46,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline46.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline46,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 46,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline46.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline46,
},
);
let trampoline47 = _trampoline47.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 47,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline47.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline47,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 47,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline47.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline47,
},
);
let trampoline48 = _trampoline48.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 48,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline48.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),
  _liftFlatOption({
    caseMetas: [
    ['none', null, 0, 0, 0, [] ],
    ['some', _liftFlatVariant({
      caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
      variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
    } ), 32, 4, 12, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'] ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_IncomingDatagramStream(obj) {
        if (!(obj instanceof IncomingDatagramStream)) {
          throw new TypeError('Resource error: Not a valid \"IncomingDatagramStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt9;
          captureTable9.set(rep, obj);
          handle = rscTableCreateOwn(handleTable9, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutgoingDatagramStream(obj) {
        if (!(obj instanceof OutgoingDatagramStream)) {
          throw new TypeError('Resource error: Not a valid \"OutgoingDatagramStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt10;
          captureTable10.set(rep, obj);
          handle = rscTableCreateOwn(handleTable10, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 8, align32: 4 }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline48,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 48,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline48.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),
  _liftFlatOption({
    caseMetas: [
    ['none', null, 0, 0, 0, [] ],
    ['some', _liftFlatVariant({
      caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
      variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
    } ), 32, 4, 12, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'] ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_IncomingDatagramStream(obj) {
        if (!(obj instanceof IncomingDatagramStream)) {
          throw new TypeError('Resource error: Not a valid \"IncomingDatagramStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt9;
          captureTable9.set(rep, obj);
          handle = rscTableCreateOwn(handleTable9, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutgoingDatagramStream(obj) {
        if (!(obj instanceof OutgoingDatagramStream)) {
          throw new TypeError('Resource error: Not a valid \"OutgoingDatagramStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt10;
          captureTable10.set(rep, obj);
          handle = rscTableCreateOwn(handleTable10, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 8, align32: 4 }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline48,
},
);
let trampoline49 = _trampoline49.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 49,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline49.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline49,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 49,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline49.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline49,
},
);
let trampoline50 = _trampoline50.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 50,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline50.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline50,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 50,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline50.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline50,
},
);
let trampoline51 = _trampoline51.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 51,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline51.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU8, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline51,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 51,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline51.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU8, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline51,
},
);
let trampoline52 = _trampoline52.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 52,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline52.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU8],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline52,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 52,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline52.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU8],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline52,
},
);
let trampoline53 = _trampoline53.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 53,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline53.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline53,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 53,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline53.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline53,
},
);
let trampoline54 = _trampoline54.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 54,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline54.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline54,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 54,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline54.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline54,
},
);
let trampoline55 = _trampoline55.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 55,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline55.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline55,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 55,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline55.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline55,
},
);
let trampoline56 = _trampoline56.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 56,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline56.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline56,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 56,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline56.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 8),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline56,
},
);
let trampoline57 = _trampoline57.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 57,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline57.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 9),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatList({
      elemLowerFn: _lowerFlatRecord({ fieldMetas: [['data', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],['remoteAddress', _lowerFlatVariant({
        caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
        variantSize32: 32,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 12,
      } ), 32, 4 ],], size32: 40, align32: 4 }),
      elemSize32: 40,
      elemAlign32: 4,
    }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline57,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 57,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline57.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 9),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatList({
      elemLowerFn: _lowerFlatRecord({ fieldMetas: [['data', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],['remoteAddress', _lowerFlatVariant({
        caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
        variantSize32: 32,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 12,
      } ), 32, 4 ],], size32: 40, align32: 4 }),
      elemSize32: 40,
      elemAlign32: 4,
    }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline57,
},
);
let trampoline58 = _trampoline58.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 58,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline58.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline58,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 58,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline58.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline58,
},
);
let trampoline59 = _trampoline59.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 59,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline59.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10),_liftFlatList({
    elemLiftFn: _liftFlatRecord({ fieldMetas: [['data', _liftFlatList({
      elemLiftFn: _liftFlatU8,
      elemAlign32: 1,
      elemSize32: 1,
      typedArray: Uint8Array,
    }), 8, 4],['remoteAddress', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0, [] ],
      ['some', _liftFlatVariant({
        caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
        variantSize32: 32,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 12,
        variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
      } ), 32, 4, 12, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'] ],
      ],
      variantSize32: 36,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 13,
      variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
    })
    , 36, 4],], size32: 44, align32: 4 }),
    elemAlign32: 4,
    elemSize32: 44,
    typedArray: undefined,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline59,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 59,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline59.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 10),_liftFlatList({
    elemLiftFn: _liftFlatRecord({ fieldMetas: [['data', _liftFlatList({
      elemLiftFn: _liftFlatU8,
      elemAlign32: 1,
      elemSize32: 1,
      typedArray: Uint8Array,
    }), 8, 4],['remoteAddress', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0, [] ],
      ['some', _liftFlatVariant({
        caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
        variantSize32: 32,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 12,
        variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
      } ), 32, 4, 12, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'] ],
      ],
      variantSize32: 36,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 13,
      variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
    })
    , 36, 4],], size32: 44, align32: 4 }),
    elemAlign32: 4,
    elemSize32: 44,
    typedArray: undefined,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline59,
},
);
let trampoline60 = _trampoline60.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 60,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline60.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline60,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 60,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline60.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline60,
},
);
let trampoline61 = _trampoline61.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 61,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline61.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline61,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 61,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline61.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline61,
},
);
let trampoline62 = _trampoline62.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 62,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline62.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline62,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 62,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline62.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBorrow.bind(null, 7),_liftFlatVariant({
    caseMetas: [['ipv4', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],[_liftFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1],], size32: 6, align32: 2 }), 6, 2, 5, ['i32','i32','i32','i32','i32']],['ipv6', _liftFlatRecord({ fieldMetas: [['port', _liftFlatU16, 2, 2],['flowInfo', _liftFlatU32, 4, 4],['address', _liftFlatTuple({ elemLiftFns: [[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],[_liftFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2],['scopeId', _liftFlatU32, 4, 4],], size32: 28, align32: 4 }), 28, 4, 11, ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32']],],
    variantSize32: 32,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 12,
    variantPayloadFlatTypes: ['i32','i32','i32','i32','i32','i32','i32','i32','i32','i32','i32'],
  } )],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline62,
},
);
let trampoline63 = _trampoline63.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 63,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline63.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 8, align32: 4 }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline63,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 63,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline63.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 8, align32: 4 }), 12, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline63,
},
);
let trampoline64 = _trampoline64.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 64,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline64.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline64,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 64,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline64.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline64,
},
);
let trampoline65 = _trampoline65.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 65,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline65.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline65,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 65,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline65.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline65,
},
);
let trampoline66 = _trampoline66.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 66,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline66.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TcpSocket(obj) {
        if (!(obj instanceof TcpSocket)) {
          throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt11;
          captureTable11.set(rep, obj);
          handle = rscTableCreateOwn(handleTable11, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 12, align32: 4 }), 16, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 4, 4 ],
    ],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline66,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 66,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline66.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TcpSocket(obj) {
        if (!(obj instanceof TcpSocket)) {
          throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt11;
          captureTable11.set(rep, obj);
          handle = rscTableCreateOwn(handleTable11, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_InputStream(obj) {
        if (!(obj instanceof InputStream)) {
          throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt2;
          captureTable2.set(rep, obj);
          handle = rscTableCreateOwn(handleTable2, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_OutputStream(obj) {
        if (!(obj instanceof OutputStream)) {
          throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt3;
          captureTable3.set(rep, obj);
          handle = rscTableCreateOwn(handleTable3, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],], size32: 12, align32: 4 }), 16, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 4, 4 ],
    ],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline66,
},
);
let trampoline67 = _trampoline67.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 67,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline67.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline67,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 67,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline67.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline67,
},
);
let trampoline68 = _trampoline68.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 68,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline68.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline68,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 68,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline68.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'ipv4', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1 ],], size32: 6, align32: 2 }), 6, 2, 5 ],[ 'ipv6', _lowerFlatRecord({ fieldMetas: [['port', _lowerFlatU16, 2, 2 ],['flowInfo', _lowerFlatU32, 4, 4 ],['address', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2 ],['scopeId', _lowerFlatU32, 4, 4 ],], size32: 28, align32: 4 }), 28, 4, 11 ],],
      variantSize32: 32,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 12,
    } ), 36, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 36, 4, 4 ],
    ],
    variantSize32: 36,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 13,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline68,
},
);
let trampoline69 = _trampoline69.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 69,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline69.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline69,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 69,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline69.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline69,
},
);
let trampoline70 = _trampoline70.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 70,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline70.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatBool, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline70,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 70,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline70.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatBool, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline70,
},
);
let trampoline71 = _trampoline71.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 71,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline71.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBool],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline71,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 71,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline71.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatBool],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline71,
},
);
let trampoline72 = _trampoline72.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 72,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline72.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline72,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 72,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline72.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline72,
},
);
let trampoline73 = _trampoline73.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 73,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline73.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline73,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 73,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline73.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline73,
},
);
let trampoline74 = _trampoline74.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 74,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline74.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline74,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 74,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline74.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline74,
},
);
let trampoline75 = _trampoline75.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 75,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline75.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline75,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 75,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline75.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline75,
},
);
let trampoline76 = _trampoline76.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 76,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline76.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU32, 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline76,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 76,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline76.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU32, 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline76,
},
);
let trampoline77 = _trampoline77.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 77,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline77.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU32],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline77,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 77,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline77.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU32],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline77,
},
);
let trampoline78 = _trampoline78.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 78,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline78.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU8, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline78,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 78,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline78.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU8, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline78,
},
);
let trampoline79 = _trampoline79.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 79,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline79.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU8],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline79,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 79,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline79.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU8],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline79,
},
);
let trampoline80 = _trampoline80.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 80,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline80.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline80,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 80,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline80.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline80,
},
);
let trampoline81 = _trampoline81.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 81,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline81.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline81,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 81,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline81.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline81,
},
);
let trampoline82 = _trampoline82.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 82,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline82.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline82,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 82,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline82.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline82,
},
);
let trampoline83 = _trampoline83.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 83,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline83.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline83,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 83,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline83.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),_liftFlatU64],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline83,
},
);
let trampoline84 = _trampoline84.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 84,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline84.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),
  _liftFlatEnum({
    caseMetas: [['receive', null, 1, 1, 1],['send', null, 1, 1, 1],['both', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline84,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 84,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline84.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 11),
  _liftFlatEnum({
    caseMetas: [['receive', null, 1, 1, 1],['send', null, 1, 1, 1],['both', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 2, 1, 1 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 2, 1, 1 ],
    ],
    variantSize32: 2,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline84,
},
);
let trampoline85 = _trampoline85.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 85,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline85.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 12)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatVariant({
        caseMetas: [[ 'ipv4', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1, 4 ],[ 'ipv6', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2, 8 ],],
        variantSize32: 18,
        variantAlign32: 2,
        variantPayloadOffset32: 2,
        variantFlatCount: 9,
      } ), 18, 2, 9],
      ],
      variantSize32: 20,
      variantAlign32: 2,
      variantPayloadOffset32: 2,
      variantFlatCount: 10,
    })
    , 22, 2, 2 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 22, 2, 2 ],
    ],
    variantSize32: 22,
    variantAlign32: 2,
    variantPayloadOffset32: 2,
    variantFlatCount: 11,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline85,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 85,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline85.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 12)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatVariant({
        caseMetas: [[ 'ipv4', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],[_lowerFlatU8, 1, 1],], size32: 4, align32: 1 }), 4, 1, 4 ],[ 'ipv6', _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],[_lowerFlatU16, 2, 2],], size32: 16, align32: 2 }), 16, 2, 8 ],],
        variantSize32: 18,
        variantAlign32: 2,
        variantPayloadOffset32: 2,
        variantFlatCount: 9,
      } ), 18, 2, 9],
      ],
      variantSize32: 20,
      variantAlign32: 2,
      variantPayloadOffset32: 2,
      variantFlatCount: 10,
    })
    , 22, 2, 2 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 22, 2, 2 ],
    ],
    variantSize32: 22,
    variantAlign32: 2,
    variantPayloadOffset32: 2,
    variantFlatCount: 11,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline85,
},
);
let trampoline86 = _trampoline86.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 86,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline86.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 7),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_ResolveAddressStream(obj) {
        if (!(obj instanceof ResolveAddressStream)) {
          throw new TypeError('Resource error: Not a valid \"ResolveAddressStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt12;
          captureTable12.set(rep, obj);
          handle = rscTableCreateOwn(handleTable12, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline86,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 86,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline86.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 7),_liftFlatStringAny],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_ResolveAddressStream(obj) {
        if (!(obj instanceof ResolveAddressStream)) {
          throw new TypeError('Resource error: Not a valid \"ResolveAddressStream\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt12;
          captureTable12.set(rep, obj);
          handle = rscTableCreateOwn(handleTable12, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline86,
},
);
let trampoline87 = _trampoline87.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 87,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline87.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatStringAny, 8, 4],[_lowerFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
    elemSize32: 16,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline87,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 87,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline87.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatStringAny, 8, 4],[_lowerFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
    elemSize32: 16,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline87,
},
);
let trampoline88 = _trampoline88.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 88,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline88.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalInput(obj) {
        if (!(obj instanceof TerminalInput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt4;
          captureTable4.set(rep, obj);
          handle = rscTableCreateOwn(handleTable4, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline88,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 88,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline88.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalInput(obj) {
        if (!(obj instanceof TerminalInput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt4;
          captureTable4.set(rep, obj);
          handle = rscTableCreateOwn(handleTable4, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline88,
},
);
let trampoline89 = _trampoline89.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 89,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline89.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline89,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 89,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline89.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline89,
},
);
let trampoline90 = _trampoline90.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 90,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline90.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline90,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 90,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline90.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline90,
},
);
let trampoline91 = _trampoline91.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 91,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline91.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline91,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 91,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline91.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline91,
},
);
let trampoline92 = _trampoline92.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 92,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline92.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_Descriptor(obj) {
        if (!(obj instanceof Descriptor)) {
          throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt6;
          captureTable6.set(rep, obj);
          handle = rscTableCreateOwn(handleTable6, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatStringAny, 8, 4],], size32: 12, align32: 4 }),
    elemSize32: 12,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline92,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 92,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline92.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_Descriptor(obj) {
        if (!(obj instanceof Descriptor)) {
          throw new TypeError('Resource error: Not a valid \"Descriptor\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt6;
          captureTable6.set(rep, obj);
          handle = rscTableCreateOwn(handleTable6, rep);
        }
        return handle;
      }
      ,
    }), 4, 4],[_lowerFlatStringAny, 8, 4],], size32: 12, align32: 4 }),
    elemSize32: 12,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline92,
},
);
let trampoline93 = _trampoline93.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 93,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline93.manuallyAsync,
  paramLiftFns: [
  _liftFlatEnum({
    caseMetas: [['ipv4', null, 1, 1, 1],['ipv6', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_UdpSocket(obj) {
        if (!(obj instanceof UdpSocket)) {
          throw new TypeError('Resource error: Not a valid \"UdpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt8;
          captureTable8.set(rep, obj);
          handle = rscTableCreateOwn(handleTable8, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline93,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 93,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline93.manuallyAsync,
  paramLiftFns: [
  _liftFlatEnum({
    caseMetas: [['ipv4', null, 1, 1, 1],['ipv6', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_UdpSocket(obj) {
        if (!(obj instanceof UdpSocket)) {
          throw new TypeError('Resource error: Not a valid \"UdpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt8;
          captureTable8.set(rep, obj);
          handle = rscTableCreateOwn(handleTable8, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline93,
},
);
let trampoline94 = _trampoline94.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 94,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline94.manuallyAsync,
  paramLiftFns: [
  _liftFlatEnum({
    caseMetas: [['ipv4', null, 1, 1, 1],['ipv6', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TcpSocket(obj) {
        if (!(obj instanceof TcpSocket)) {
          throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt11;
          captureTable11.set(rep, obj);
          handle = rscTableCreateOwn(handleTable11, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline94,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 94,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline94.manuallyAsync,
  paramLiftFns: [
  _liftFlatEnum({
    caseMetas: [['ipv4', null, 1, 1, 1],['ipv6', null, 1, 1, 1],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TcpSocket(obj) {
        if (!(obj instanceof TcpSocket)) {
          throw new TypeError('Resource error: Not a valid \"TcpSocket\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt11;
          captureTable11.set(rep, obj);
          handle = rscTableCreateOwn(handleTable11, rep);
        }
        return handle;
      }
      ,
    }), 8, 4, 4 ],
    [ 'err', 
    _lowerFlatEnum({
      caseMetas: [['unknown', null, 1, 1, 1],['access-denied', null, 1, 1, 1],['not-supported', null, 1, 1, 1],['invalid-argument', null, 1, 1, 1],['out-of-memory', null, 1, 1, 1],['timeout', null, 1, 1, 1],['concurrency-conflict', null, 1, 1, 1],['not-in-progress', null, 1, 1, 1],['would-block', null, 1, 1, 1],['invalid-state', null, 1, 1, 1],['new-socket-limit', null, 1, 1, 1],['address-not-bindable', null, 1, 1, 1],['address-in-use', null, 1, 1, 1],['remote-unreachable', null, 1, 1, 1],['connection-refused', null, 1, 1, 1],['connection-reset', null, 1, 1, 1],['connection-aborted', null, 1, 1, 1],['datagram-too-large', null, 1, 1, 1],['name-unresolvable', null, 1, 1, 1],['temporary-resolver-failure', null, 1, 1, 1],['permanent-resolver-failure', null, 1, 1, 1],],
      variantSize32: 1,
      variantAlign32: 1,
      variantPayloadOffset32: 1,
      variantFlatCount: 1,
    })
    , 8, 4, 4 ],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline94,
},
);
let trampoline95 = _trampoline95.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 95,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline95.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline95,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 95,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline95.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline95,
},
);
let trampoline96 = _trampoline96.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 96,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline96.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU8,
    elemSize32: 1,
    elemAlign32: 1,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc1,
  importFn: _trampoline96,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 96,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline96.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU8,
    elemSize32: 1,
    elemAlign32: 1,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc1,
  importFn: _trampoline96,
},
);

const $init = (() => {
  let gen = (function* _initGenerator () {
    const module0 = fetchCompile(new URL('./ping-demo.core.wasm', import.meta.url));
    const module1 = base64Compile('AGFzbQEAAAABMglgAn9/AGAEf39/fwBgAX8AYAR/f39/AX9gAn5/AGAAAX9gA39/fwF/YAJ/fwF/YAAAAqQCBwNlbnYGbWVtb3J5AgAAE3dhc2k6aW8vZXJyb3JAMC4yLjYUW3Jlc291cmNlLWRyb3BdZXJyb3IAAg9fX21haW5fbW9kdWxlX18MY2FiaV9yZWFsbG9jAAMVd2FzaTppby9zdHJlYW1zQDAuMi42HFtyZXNvdXJjZS1kcm9wXW91dHB1dC1zdHJlYW0AAhh3YXNpOnJhbmRvbS9yYW5kb21AMC4yLjYQZ2V0LXJhbmRvbS1ieXRlcwAEFXdhc2k6Y2xpL3N0ZGVyckAwLjIuNgpnZXQtc3RkZXJyAAUVd2FzaTppby9zdHJlYW1zQDAuMi42LlttZXRob2Rdb3V0cHV0LXN0cmVhbS5ibG9ja2luZy13cml0ZS1hbmQtZmx1c2gAAQMREAIAAgEFBQYDBwICBQIFAggGEAN/AUEAC38BQQALfwFBAAsHJAITY2FiaV9pbXBvcnRfcmVhbGxvYwANCnJhbmRvbV9nZXQADgqNDxBxAQF/IwBBMGsiASQAIAFBIDoALyABQezSuasGNgArIAFC4ciFg8eumbkgNwAjIAFC9eiVo4akmLogNwAbIAFC4tiVg9KM3rLjADcAEyABQvXcyauW7Ji04QA3AAsgAUELakElEAcgABAPIAFBMGokAAthAQF/IwBBEGsiAiQAIAIQBDYCDCACQQRqIAJBDGogACABEAkCQCACKAIEIgFBAkYNACABDQAgAigCCCIBQX9GDQAgARAACwJAIAIoAgwiAUF/Rg0AIAEQAgsgAkEQaiQAC2IBAX8jAEEwayIBJAAgAUEgOgAvIAFC9MrJg8KtmrflADcAJyABQqDC0YOSjNmw8AA3AB8gAULuwJiLlo3bsuQANwAXIAFC4ebNq6aO3bTvADcADyABQQ9qQSEQByAAEBAAC1IBAX8jAEEQayIEJAAgASgCACACIAMgBEEEahAFAkACQCAELQAEDQBBAiEBDAELIAAgBCgCDDYCBCAELQAIQQBHIQELIAAgATYCACAEQRBqJAALfwEBfwJAEBNBAkcNAEEDEBRBAEEAQQhBgIAEEAEhAEEEEBQgAEEANgLw/wMgAEECNgKkMCAAQQA2AhggAEL1zqGLwgA3AwACQEElRQ0AIABByP8DakEAQSX8CwALIABB9c6hiwI2Avz/AyAAQa7cADsB+P8DIAAPC0GVFhAIAAsVAQF/AkAQESIADQAQCiIAEBILIAALmQMBA38jAEEgayIDJAACQAJAAkAgAWlBAUcNACAAKAIEIgQgASAAKAIAIgVqQX9qQQAgAWtxIAVrIgFJDQEgBCABayIEIAJPDQJBwgMQBiADQbrAADsAAyADQQNqQQIQByADQQo6AB8gA0Hh5J2rBjYAGyADQunmgaH37ZuQ7AA3ABMgA0Lv3IGZl83esiA3AAsgA0Lh2LH7tqyYuukANwADIANBA2pBHRAHIANBCjoAAyADQQNqQQEQBwALQcwDEAYgA0G6wAA7AAMgA0EDakECEAcgA0H0FDsAEyADQuHYpbvmrduy7gA3AAsgA0Lp3NmLxq2asiA3AAMgA0EDakESEAcgA0EKOgADIANBA2pBARAHAAtB0AMQBiADQbrAADsAAyADQQNqQQIQByADQQo6ABUgA0H0ygE7ABMgA0LvwITjxu3bseEANwALIANC5sKl49aMmZD0ADcAAyADQQNqQRMQByADQQo6AAMgA0EDakEBEAcACyAAIAQgAms2AgQgACAFIAFqIgEgAmo2AgAgA0EgaiQAIAELsAQCAn8BfhAVIwBBMGsiBCQAAkACQAJAAkACQAJAAkACQAJAAkAQCyIFKAIAQfXOoYsCRw0AIAUoAvz/A0H1zqGLAkcNASAFKQIEIQYgBUEENgIEIARBEGogBUEUaigCADYCACAEQQhqIAVBDGopAgA3AwAgBCAGNwMAIABFDQIgASADTQ0DIAJBAUYNCUGDAxAIAAtB9RUQCAALQfYVEAgACyAEKAIADgUFAwIBBAULQYIDEAgACyAEQQxqIQACQCACQQFGDQAgACACIAMQDCEADAULIAQgBCgCBCICQQFqNgIEAkAgAiAEKAIIRg0AIAQgBCkCDDcCGCAEQRhqQQEgAxAMIQAMBQsgAEEBIAMQDCEADAQLAkAgAkEBRg0AIARBDGogAiADEAwhAAwECyAEQQRyQQEgA0EBahAMIQAMAwsCQCACQQFGDQAgBEEIaiACIAMQDCEADAMLIAQgBCgCBCADajYCBCAEIAQpAwg3AhggBEEYakEBIAMQDCEADAILQawDEAYgBEG6wAA7ABggBEEYakECEAcgBELm0p2rp66Zsgo3ACggBELh6L2Th+TYt+4ANwAgIARC7t6BicaN27fjADcAGCAEQRhqQRgQByAEQQo6ABggBEEYakEBEAcACyAEQQRyIAIgAxAMIQAgBEEENgIACyAFQQRqIgUgBCkDADcCACAFQRBqIARBEGooAgA2AgAgBUEIaiAEQQhqKQMANwIAIARBMGokACAAC5gCAQN/EBUjAEEgayICJAACQAJAAkACQAJAAkAQE0F+ag4DAAEAAQsQCyIDKAIAQfXOoYsCRw0BIAMoAvz/A0H1zqGLAkcNAiADIAE2AgwgAyAANgIIIAMoAgQhBCADQQA2AgQgBEEERw0DIAJCADcDACABrSACEAMgAigCACEBIANBBDYCBCABIABHDQQLIAJBIGokAEEADwtB9RUQCAALQfYVEAgAC0GCFxAGIAJBusAAOwAAIAJBAhAHIAJBCjoAHCACQaDmlaMHNgAYIAJCoMKxk9esmLL5ADcAECACQuzYvZuWjN238gA3AAggAkLp2sH7po6dkOEANwAAIAJBHRAHIAJBCjoAACACQQEQBwALQcMSEAgACz8BAn8jAEEQayIBJAACQCAARQ0AIABBCm4iAhAPIAEgAkH2AWwgAGpBMHI6AA8gAUEPakEBEAcLIAFBEGokAAsGACAAEA8LBAAjAQsGACAAJAELBAAjAgsGACAAJAILJQAjAkEARgRAQQEkAkEAQQBBCEGAgAQQAUGAgARqJABBAiQCCwsAvQwEbmFtZQH7CxYApAFfWk4xMjhfJExUJHdhc2lfc25hcHNob3RfcHJldmlldzEuLmJpbmRpbmdzLi53YXNpLi5pby4uZXJyb3IuLkVycm9yJHUyMCRhcyR1MjAkd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS4uYmluZGluZ3MuLl9ydC4uV2FzbVJlc291cmNlJEdUJDRkcm9wNGRyb3AxN2gyN2E5ZWNjODk0MWFmYWIyRQFHX1pOMjJ3YXNpX3NuYXBzaG90X3ByZXZpZXcxNVN0YXRlM25ldzEyY2FiaV9yZWFsbG9jMTdoMmY0MGE1MTZkZDZkY2Q2MEUCrQFfWk4xMzdfJExUJHdhc2lfc25hcHNob3RfcHJldmlldzEuLmJpbmRpbmdzLi53YXNpLi5pby4uc3RyZWFtcy4uT3V0cHV0U3RyZWFtJHUyMCRhcyR1MjAkd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS4uYmluZGluZ3MuLl9ydC4uV2FzbVJlc291cmNlJEdUJDRkcm9wNGRyb3AxN2hiYzU0N2YwNGZmNDQ3MjMwRQNqX1pOMjJ3YXNpX3NuYXBzaG90X3ByZXZpZXcxOGJpbmRpbmdzNHdhc2k2cmFuZG9tNnJhbmRvbTE2Z2V0X3JhbmRvbV9ieXRlczExd2l0X2ltcG9ydDExN2hjNTgwMWM4YmJhZmM5ODUxRQRhX1pOMjJ3YXNpX3NuYXBzaG90X3ByZXZpZXcxOGJpbmRpbmdzNHdhc2kzY2xpNnN0ZGVycjEwZ2V0X3N0ZGVycjExd2l0X2ltcG9ydDAxN2gxZTJkOWM1MTNhZTE4NzY2RQV9X1pOMjJ3YXNpX3NuYXBzaG90X3ByZXZpZXcxOGJpbmRpbmdzNHdhc2kyaW83c3RyZWFtczEyT3V0cHV0U3RyZWFtMjRibG9ja2luZ193cml0ZV9hbmRfZmx1c2gxMXdpdF9pbXBvcnQyMTdoZDRlYTQ5OWVlMWVlMmMwMUUGSl9aTjIyd2FzaV9zbmFwc2hvdF9wcmV2aWV3MTZtYWNyb3MxOGVwcmludF91bnJlYWNoYWJsZTE3aDY0ZmI5ODMzNmRlZDc2NDZFBzxfWk4yMndhc2lfc25hcHNob3RfcHJldmlldzE2bWFjcm9zNXByaW50MTdoMDczZDE5MjUxNzI5NTJjNEUIQ19aTjIyd2FzaV9zbmFwc2hvdF9wcmV2aWV3MTZtYWNyb3MxMWFzc2VydF9mYWlsMTdoNmVhMGZiNjcxMDI3OTdhZkUJcF9aTjIyd2FzaV9zbmFwc2hvdF9wcmV2aWV3MThiaW5kaW5nczR3YXNpMmlvN3N0cmVhbXMxMk91dHB1dFN0cmVhbTI0YmxvY2tpbmdfd3JpdGVfYW5kX2ZsdXNoMTdoNzZiZDBiY2Y4OTAzOGRjMEUKOV9aTjIyd2FzaV9zbmFwc2hvdF9wcmV2aWV3MTVTdGF0ZTNuZXcxN2hmOWU3N2EzZTMwZDBhZGI1RQs5X1pOMjJ3YXNpX3NuYXBzaG90X3ByZXZpZXcxNVN0YXRlM3B0cjE3aDU4MmY4OTE1ODU3NWZhYWVFDD9fWk4yMndhc2lfc25hcHNob3RfcHJldmlldzE5QnVtcEFsbG9jNWFsbG9jMTdoZjNmYjVlNWYyNTZlZjkyOEUNE2NhYmlfaW1wb3J0X3JlYWxsb2MOCnJhbmRvbV9nZXQPU19aTjIyd2FzaV9zbmFwc2hvdF9wcmV2aWV3MTZtYWNyb3MxMGVwcmludF91MzIxNWVwcmludF91MzJfaW1wbDE3aDBmYTYzOTY2YWQ5OGQwYWNFEEJfWk4yMndhc2lfc25hcHNob3RfcHJldmlldzE2bWFjcm9zMTBlcHJpbnRfdTMyMTdoMDI1Y2VkMTk5ODU2MzNhOUURDWdldF9zdGF0ZV9wdHISDXNldF9zdGF0ZV9wdHITFGdldF9hbGxvY2F0aW9uX3N0YXRlFBRzZXRfYWxsb2NhdGlvbl9zdGF0ZRUOYWxsb2NhdGVfc3RhY2sHOAMAD19fc3RhY2tfcG9pbnRlcgESaW50ZXJuYWxfc3RhdGVfcHRyAhBhbGxvY2F0aW9uX3N0YXRlAE0JcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AQVydXN0Yx0xLjkzLjAgKDI1NGI1OTYwNyAyMDI2LTAxLTE5KQ');
    const module2 = base64Compile('AGFzbQEAAAABUgtgAX8AYAJ/fwF/YAN/f38AYAN/fn8AYAJ/fwBgBH9/f38AYAV/f39/fwBgB39/f39/f38AYA9/f39/f39/f39/f39/f38AYAN/f38AYAJ+fwADRUQAAQIDBAUEAwMEBAUEBgcEBggECAQEBAkEAwQDAwQFCAQIBAQEBAQEAwQJBAMEAwQJBAkEAwQDCQQFAAAAAAAABAQFCgQFAXABREQH1gJFATAAAAExAAEBMgACATMAAwE0AAQBNQAFATYABgE3AAcBOAAIATkACQIxMAAKAjExAAsCMTIADAIxMwANAjE0AA4CMTUADwIxNgAQAjE3ABECMTgAEgIxOQATAjIwABQCMjEAFQIyMgAWAjIzABcCMjQAGAIyNQAZAjI2ABoCMjcAGwIyOAAcAjI5AB0CMzAAHgIzMQAfAjMyACACMzMAIQIzNAAiAjM1ACMCMzYAJAIzNwAlAjM4ACYCMzkAJwI0MAAoAjQxACkCNDIAKgI0MwArAjQ0ACwCNDUALQI0NgAuAjQ3AC8CNDgAMAI0OQAxAjUwADICNTEAMwI1MgA0AjUzADUCNTQANgI1NQA3AjU2ADgCNTcAOQI1OAA6AjU5ADsCNjAAPAI2MQA9AjYyAD4CNjMAPwI2NABAAjY1AEECNjYAQgI2NwBDCCRpbXBvcnRzAQAK2wdECQAgAEEAEQAACwsAIAAgAUEBEQEACw0AIAAgASACQQIRAgALDQAgACABIAJBAxEDAAsLACAAIAFBBBEEAAsPACAAIAEgAiADQQURBQALCwAgACABQQYRBAALDQAgACABIAJBBxEDAAsNACAAIAEgAkEIEQMACwsAIAAgAUEJEQQACwsAIAAgAUEKEQQACw8AIAAgASACIANBCxEFAAsLACAAIAFBDBEEAAsRACAAIAEgAiADIARBDREGAAsVACAAIAEgAiADIAQgBSAGQQ4RBwALCwAgACABQQ8RBAALEQAgACABIAIgAyAEQRARBgALJQAgACABIAIgAyAEIAUgBiAHIAggCSAKIAsgDCANIA5BEREIAAsLACAAIAFBEhEEAAslACAAIAEgAiADIAQgBSAGIAcgCCAJIAogCyAMIA0gDkETEQgACwsAIAAgAUEUEQQACwsAIAAgAUEVEQQACwsAIAAgAUEWEQQACw0AIAAgASACQRcRCQALCwAgACABQRgRBAALDQAgACABIAJBGREDAAsLACAAIAFBGhEEAAsNACAAIAEgAkEbEQMACw0AIAAgASACQRwRAwALCwAgACABQR0RBAALDwAgACABIAIgA0EeEQUACyUAIAAgASACIAMgBCAFIAYgByAIIAkgCiALIAwgDSAOQR8RCAALCwAgACABQSARBAALJQAgACABIAIgAyAEIAUgBiAHIAggCSAKIAsgDCANIA5BIREIAAsLACAAIAFBIhEEAAsLACAAIAFBIxEEAAsLACAAIAFBJBEEAAsLACAAIAFBJREEAAsLACAAIAFBJhEEAAsLACAAIAFBJxEEAAsNACAAIAEgAkEoEQMACwsAIAAgAUEpEQQACw0AIAAgASACQSoRCQALCwAgACABQSsRBAALDQAgACABIAJBLBEDAAsLACAAIAFBLREEAAsNACAAIAEgAkEuEQMACwsAIAAgAUEvEQQACw0AIAAgASACQTARCQALCwAgACABQTERBAALDQAgACABIAJBMhEJAAsLACAAIAFBMxEEAAsNACAAIAEgAkE0EQMACwsAIAAgAUE1EQQACw0AIAAgASACQTYRAwALDQAgACABIAJBNxEJAAsLACAAIAFBOBEEAAsPACAAIAEgAiADQTkRBQALCQAgAEE6EQAACwkAIABBOxEAAAsJACAAQTwRAAALCQAgAEE9EQAACwkAIABBPhEAAAsJACAAQT8RAAALDAAgACABQcAAEQQACwwAIAAgAUHBABEEAAsQACAAIAEgAiADQcIAEQUACwwAIAAgAUHDABEKAAsALwlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAcwLjI0Ni4y');
    const module3 = base64Compile('AGFzbQEAAAABUgtgAX8AYAJ/fwF/YAN/f38AYAN/fn8AYAJ/fwBgBH9/f38AYAV/f39/fwBgB39/f39/f38AYA9/f39/f39/f39/f39/f38AYAN/f38AYAJ+fwACngNFAAEwAAAAATEAAQABMgACAAEzAAMAATQABAABNQAFAAE2AAQAATcAAwABOAADAAE5AAQAAjEwAAQAAjExAAUAAjEyAAQAAjEzAAYAAjE0AAcAAjE1AAQAAjE2AAYAAjE3AAgAAjE4AAQAAjE5AAgAAjIwAAQAAjIxAAQAAjIyAAQAAjIzAAkAAjI0AAQAAjI1AAMAAjI2AAQAAjI3AAMAAjI4AAMAAjI5AAQAAjMwAAUAAjMxAAgAAjMyAAQAAjMzAAgAAjM0AAQAAjM1AAQAAjM2AAQAAjM3AAQAAjM4AAQAAjM5AAQAAjQwAAMAAjQxAAQAAjQyAAkAAjQzAAQAAjQ0AAMAAjQ1AAQAAjQ2AAMAAjQ3AAQAAjQ4AAkAAjQ5AAQAAjUwAAkAAjUxAAQAAjUyAAMAAjUzAAQAAjU0AAMAAjU1AAkAAjU2AAQAAjU3AAUAAjU4AAAAAjU5AAAAAjYwAAAAAjYxAAAAAjYyAAAAAjYzAAAAAjY0AAQAAjY1AAQAAjY2AAUAAjY3AAoACCRpbXBvcnRzAXABREQJSgEAQQALRAABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDAC8JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBDXdpdC1jb21wb25lbnQHMC4yNDYuMg');
    ({ exports: exports0 } = yield instantiateCore(yield module2));
    ({ exports: exports1 } = yield instantiateCore(yield module0, {
      'wasi:cli/environment@0.2.0': {
        'get-environment': exports0['58'],
      },
      'wasi:cli/exit@0.2.0': {
        exit: trampoline13,
      },
      'wasi:cli/stderr@0.2.0': {
        'get-stderr': trampoline19,
      },
      'wasi:cli/stdin@0.2.0': {
        'get-stdin': trampoline17,
      },
      'wasi:cli/stdout@0.2.0': {
        'get-stdout': trampoline18,
      },
      'wasi:cli/terminal-input@0.2.0': {
        '[resource-drop]terminal-input': trampoline5,
      },
      'wasi:cli/terminal-output@0.2.0': {
        '[resource-drop]terminal-output': trampoline6,
      },
      'wasi:cli/terminal-stderr@0.2.0': {
        'get-terminal-stderr': exports0['61'],
      },
      'wasi:cli/terminal-stdin@0.2.0': {
        'get-terminal-stdin': exports0['59'],
      },
      'wasi:cli/terminal-stdout@0.2.0': {
        'get-terminal-stdout': exports0['60'],
      },
      'wasi:clocks/monotonic-clock@0.2.0': {
        now: trampoline20,
        'subscribe-duration': trampoline22,
        'subscribe-instant': trampoline21,
      },
      'wasi:clocks/wall-clock@0.2.0': {
        now: exports0['62'],
      },
      'wasi:filesystem/preopens@0.2.0': {
        'get-directories': exports0['63'],
      },
      'wasi:filesystem/types@0.2.0': {
        '[method]descriptor.append-via-stream': exports0['9'],
        '[method]descriptor.create-directory-at': exports0['11'],
        '[method]descriptor.get-flags': exports0['10'],
        '[method]descriptor.metadata-hash': exports0['15'],
        '[method]descriptor.metadata-hash-at': exports0['16'],
        '[method]descriptor.open-at': exports0['14'],
        '[method]descriptor.read-via-stream': exports0['7'],
        '[method]descriptor.stat': exports0['12'],
        '[method]descriptor.stat-at': exports0['13'],
        '[method]descriptor.write-via-stream': exports0['8'],
        '[resource-drop]descriptor': trampoline7,
      },
      'wasi:io/error@0.2.0': {
        '[resource-drop]error': trampoline1,
      },
      'wasi:io/poll@0.2.0': {
        '[method]pollable.block': trampoline14,
        '[resource-drop]pollable': trampoline2,
        poll: exports0['2'],
      },
      'wasi:io/streams@0.2.0': {
        '[method]input-stream.read': exports0['3'],
        '[method]input-stream.subscribe': trampoline15,
        '[method]output-stream.blocking-flush': exports0['6'],
        '[method]output-stream.check-write': exports0['4'],
        '[method]output-stream.subscribe': trampoline16,
        '[method]output-stream.write': exports0['5'],
        '[resource-drop]input-stream': trampoline3,
        '[resource-drop]output-stream': trampoline4,
      },
      'wasi:random/insecure-seed@0.2.9': {
        'insecure-seed': exports0['0'],
      },
      'wasi:random/random@0.2.0': {
        'get-random-u64': trampoline0,
      },
      'wasi:sockets/instance-network@0.2.0': {
        'instance-network': trampoline23,
      },
      'wasi:sockets/ip-name-lookup@0.2.0': {
        '[method]resolve-address-stream.resolve-next-address': exports0['56'],
        '[method]resolve-address-stream.subscribe': trampoline29,
        '[resource-drop]resolve-address-stream': trampoline12,
        'resolve-addresses': exports0['57'],
      },
      'wasi:sockets/tcp-create-socket@0.2.0': {
        'create-tcp-socket': exports0['65'],
      },
      'wasi:sockets/tcp@0.2.0': {
        '[method]tcp-socket.accept': exports0['37'],
        '[method]tcp-socket.finish-bind': exports0['32'],
        '[method]tcp-socket.finish-connect': exports0['34'],
        '[method]tcp-socket.finish-listen': exports0['36'],
        '[method]tcp-socket.hop-limit': exports0['49'],
        '[method]tcp-socket.is-listening': trampoline27,
        '[method]tcp-socket.keep-alive-count': exports0['47'],
        '[method]tcp-socket.keep-alive-enabled': exports0['41'],
        '[method]tcp-socket.keep-alive-idle-time': exports0['43'],
        '[method]tcp-socket.keep-alive-interval': exports0['45'],
        '[method]tcp-socket.local-address': exports0['38'],
        '[method]tcp-socket.receive-buffer-size': exports0['51'],
        '[method]tcp-socket.remote-address': exports0['39'],
        '[method]tcp-socket.send-buffer-size': exports0['53'],
        '[method]tcp-socket.set-hop-limit': exports0['50'],
        '[method]tcp-socket.set-keep-alive-count': exports0['48'],
        '[method]tcp-socket.set-keep-alive-enabled': exports0['42'],
        '[method]tcp-socket.set-keep-alive-idle-time': exports0['44'],
        '[method]tcp-socket.set-keep-alive-interval': exports0['46'],
        '[method]tcp-socket.set-listen-backlog-size': exports0['40'],
        '[method]tcp-socket.set-receive-buffer-size': exports0['52'],
        '[method]tcp-socket.set-send-buffer-size': exports0['54'],
        '[method]tcp-socket.shutdown': exports0['55'],
        '[method]tcp-socket.start-bind': exports0['31'],
        '[method]tcp-socket.start-connect': exports0['33'],
        '[method]tcp-socket.start-listen': exports0['35'],
        '[method]tcp-socket.subscribe': trampoline28,
        '[resource-drop]tcp-socket': trampoline11,
      },
      'wasi:sockets/udp-create-socket@0.2.0': {
        'create-udp-socket': exports0['64'],
      },
      'wasi:sockets/udp@0.2.0': {
        '[method]incoming-datagram-stream.receive': exports0['28'],
        '[method]incoming-datagram-stream.subscribe': trampoline25,
        '[method]outgoing-datagram-stream.check-send': exports0['29'],
        '[method]outgoing-datagram-stream.send': exports0['30'],
        '[method]outgoing-datagram-stream.subscribe': trampoline26,
        '[method]udp-socket.finish-bind': exports0['18'],
        '[method]udp-socket.local-address': exports0['20'],
        '[method]udp-socket.receive-buffer-size': exports0['24'],
        '[method]udp-socket.remote-address': exports0['21'],
        '[method]udp-socket.send-buffer-size': exports0['26'],
        '[method]udp-socket.set-receive-buffer-size': exports0['25'],
        '[method]udp-socket.set-send-buffer-size': exports0['27'],
        '[method]udp-socket.set-unicast-hop-limit': exports0['23'],
        '[method]udp-socket.start-bind': exports0['17'],
        '[method]udp-socket.stream': exports0['19'],
        '[method]udp-socket.subscribe': trampoline24,
        '[method]udp-socket.unicast-hop-limit': exports0['22'],
        '[resource-drop]incoming-datagram-stream': trampoline9,
        '[resource-drop]outgoing-datagram-stream': trampoline10,
        '[resource-drop]udp-socket': trampoline8,
      },
      wasi_snapshot_preview1: {
        random_get: exports0['1'],
      },
    }));
    ({ exports: exports2 } = yield instantiateCore(yield module1, {
      __main_module__: {
        cabi_realloc: exports1.cabi_realloc,
      },
      env: {
        memory: exports1.memory,
      },
      'wasi:cli/stderr@0.2.6': {
        'get-stderr': trampoline19,
      },
      'wasi:io/error@0.2.6': {
        '[resource-drop]error': trampoline1,
      },
      'wasi:io/streams@0.2.6': {
        '[method]output-stream.blocking-write-and-flush': exports0['66'],
        '[resource-drop]output-stream': trampoline4,
      },
      'wasi:random/random@0.2.6': {
        'get-random-bytes': exports0['67'],
      },
    }));
    memory0 = exports1.memory;
    realloc0 = exports1.cabi_realloc;
    
    try {
      realloc0Async = WebAssembly.promising(exports1.cabi_realloc);
    } catch(err) {
      realloc0Async = exports1.cabi_realloc;
    }
    
    realloc1 = exports2.cabi_import_realloc;
    
    try {
      realloc1Async = WebAssembly.promising(exports2.cabi_import_realloc);
    } catch(err) {
      realloc1Async = exports2.cabi_import_realloc;
    }
    
    ({ exports: exports3 } = yield instantiateCore(yield module3, {
      '': {
        $imports: exports0.$imports,
        '0': trampoline30,
        '1': exports2.random_get,
        '10': trampoline39,
        '11': trampoline40,
        '12': trampoline41,
        '13': trampoline42,
        '14': trampoline43,
        '15': trampoline44,
        '16': trampoline45,
        '17': trampoline46,
        '18': trampoline47,
        '19': trampoline48,
        '2': trampoline31,
        '20': trampoline49,
        '21': trampoline50,
        '22': trampoline51,
        '23': trampoline52,
        '24': trampoline53,
        '25': trampoline54,
        '26': trampoline55,
        '27': trampoline56,
        '28': trampoline57,
        '29': trampoline58,
        '3': trampoline32,
        '30': trampoline59,
        '31': trampoline60,
        '32': trampoline61,
        '33': trampoline62,
        '34': trampoline63,
        '35': trampoline64,
        '36': trampoline65,
        '37': trampoline66,
        '38': trampoline67,
        '39': trampoline68,
        '4': trampoline33,
        '40': trampoline69,
        '41': trampoline70,
        '42': trampoline71,
        '43': trampoline72,
        '44': trampoline73,
        '45': trampoline74,
        '46': trampoline75,
        '47': trampoline76,
        '48': trampoline77,
        '49': trampoline78,
        '5': trampoline34,
        '50': trampoline79,
        '51': trampoline80,
        '52': trampoline81,
        '53': trampoline82,
        '54': trampoline83,
        '55': trampoline84,
        '56': trampoline85,
        '57': trampoline86,
        '58': trampoline87,
        '59': trampoline88,
        '6': trampoline35,
        '60': trampoline89,
        '61': trampoline90,
        '62': trampoline91,
        '63': trampoline92,
        '64': trampoline93,
        '65': trampoline94,
        '66': trampoline95,
        '67': trampoline96,
        '7': trampoline36,
        '8': trampoline37,
        '9': trampoline38,
      },
    }));
    run020Run = WebAssembly.promising(exports1['wasi:cli/run@0.2.0#run']);
  })();
  let promise, resolve, reject;
  function runNext (value) {
    try {
      let done;
      do {
        ({ value, done } = gen.next(value));
      } while (!(value instanceof Promise) && !done);
      if (done) {
        if (resolve) resolve(value);
        else return value;
      }
      if (!promise) promise = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
      value.then(runNext, reject);
    }
    catch (e) {
      if (reject) reject(e);
      else throw e;
    }
  }
  const maybeSyncReturn = runNext(null);
  return promise || maybeSyncReturn;
})();

await $init;
const run020 = {
  run: run,
  
};

export { run020 as run, run020 as 'wasi:cli/run@0.2.0',  }
export const _util = {
  
}

