import init from "./wasm/wasm_test.js";

const runWasm = async () => {
    const wasmTest = await init("./wasm/wasm_test_bg.wasm");
    wasmTest.randomize(0, 10);
    const value = wasmTest.get_value();
    document.getElementById('num').textContent = `${value}`;
};

runWasm();