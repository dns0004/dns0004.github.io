import init from "./wasm/wasm_test.js";

const runWasm = async () => {
    const wasmTest = await init("./wasm/wasm_test_bg.wasm");
    const value = wasmTest.randomize(0, 10);
    document.getElementById('num').textContent = `${value}`;
};

runWasm();