import { expose } from "comlink";
import addWasm from "./wasm/add.wasm";
import addJS from "./wasm/add.js";

const sum = async (a, b) =>
  new Promise(async resolve => {
    const wasm = await fetch(addWasm);
    const buffer = await wasm.arrayBuffer();
    const _instance = addJS({
      wasmBinary: buffer,
      onRuntimeInitialized: () => {
        resolve(_instance._add(a, b));
      }
    });
  });

expose(sum);
