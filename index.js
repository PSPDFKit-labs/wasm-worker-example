import { wrap } from "comlink";
import WasmWorker from "./wasm.worker";
const wasmWorker = wrap(new WasmWorker());

(async function() {
  const result = await wasmWorker(1, 4);
  alert(result);
})();
