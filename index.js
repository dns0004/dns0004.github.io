import init from "./wasm/wasm_test.js";

const runWasm = async () => {
    const wasmTest = await init("./wasm/wasm_test_bg.wasm");
    wasmTest.set_value(1);
    const value = wasmTest.get_value();
    document.body.textContent = `${value}`;
};

runWasm();