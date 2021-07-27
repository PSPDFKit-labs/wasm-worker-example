import { expose } from "comlink";
import subWasm from "./wasm/sub.wasm";
import subJS from "./wasm/sub.js";

const sum = async (a, b) =>
  new Promise(async resolve => {
    const wasm = await fetch(subWasm);
    const buffer = await wasm.arrayBuffer();
    const _instance = await subJS({
      wasmBinary: buffer
    });

    resolve(_instance._sub(a, b))
  });

expose(sum);
