import init from "./wasm/wasm_test.js";

const runWasm = async () => {
    const wasmTest = await init("./wasm/wasm_test_bg.wasm");
    wasmTest.set_value(1);
    const value_ptr = wasmTest.get_value_ptr();
    document.body.textContent = `${value_ptr}`;
};

runWasm();