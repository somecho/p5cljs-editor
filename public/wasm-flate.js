(function() {
    const __exports = {};
    let wasm;

    let WASM_VECTOR_LEN = 0;

    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
    }

    let cachedTextEncoder = new TextEncoder('utf-8');

    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
        : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

    function passStringToWasm0(arg, malloc, realloc) {

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);

            offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    cachedTextDecoder.decode();

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    /**
    * @param {string} base_compressed
    * @returns {string}
    */
    __exports.zlib_decode = function(base_compressed) {
        try {
            var ptr0 = passStringToWasm0(base_compressed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.zlib_decode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    /**
    * @param {string} base_raw
    * @returns {string}
    */
    __exports.zlib_encode = function(base_raw) {
        try {
            var ptr0 = passStringToWasm0(base_raw, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.zlib_encode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    /**
    * @param {string} base_compressed
    * @returns {string}
    */
    __exports.gzip_decode = function(base_compressed) {
        try {
            var ptr0 = passStringToWasm0(base_compressed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.gzip_decode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    /**
    * @param {string} base_raw
    * @returns {string}
    */
    __exports.gzip_encode = function(base_raw) {
        try {
            var ptr0 = passStringToWasm0(base_raw, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.gzip_encode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    /**
    * @param {string} base_compressed
    * @returns {string}
    */
    __exports.deflate_decode = function(base_compressed) {
        try {
            var ptr0 = passStringToWasm0(base_compressed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.deflate_decode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    /**
    * @param {string} base_raw
    * @returns {string}
    */
    __exports.deflate_encode = function(base_raw) {
        try {
            var ptr0 = passStringToWasm0(base_raw, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.deflate_encode(8, ptr0, len0);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    };

    function passArray8ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 1);
        getUint8Memory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function getArrayU8FromWasm0(ptr, len) {
        return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
    }
    /**
    * @param {Uint8Array} base_compressed
    * @returns {Uint8Array}
    */
    __exports.zlib_decode_raw = function(base_compressed) {
        var ptr0 = passArray8ToWasm0(base_compressed, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.zlib_decode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    /**
    * @param {Uint8Array} base_raw
    * @returns {Uint8Array}
    */
    __exports.zlib_encode_raw = function(base_raw) {
        var ptr0 = passArray8ToWasm0(base_raw, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.zlib_encode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    /**
    * @param {Uint8Array} base_compressed
    * @returns {Uint8Array}
    */
    __exports.gzip_decode_raw = function(base_compressed) {
        var ptr0 = passArray8ToWasm0(base_compressed, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.gzip_decode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    /**
    * @param {Uint8Array} base_raw
    * @returns {Uint8Array}
    */
    __exports.gzip_encode_raw = function(base_raw) {
        var ptr0 = passArray8ToWasm0(base_raw, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.gzip_encode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    /**
    * @param {Uint8Array} base_compressed
    * @returns {Uint8Array}
    */
    __exports.deflate_decode_raw = function(base_compressed) {
        var ptr0 = passArray8ToWasm0(base_compressed, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.deflate_decode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    /**
    * @param {Uint8Array} base_raw
    * @returns {Uint8Array}
    */
    __exports.deflate_encode_raw = function(base_raw) {
        var ptr0 = passArray8ToWasm0(base_raw, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.deflate_encode_raw(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    };

    function init(module) {
        if (typeof module === 'undefined') {
            let src;
            if (self.document === undefined) {
                src = self.location.href;
            } else {
                src = self.document.currentScript.src;
            }
            module = src.replace(/\.js$/, '_bg.wasm');
        }
        let result;
        const imports = {};

        if ((typeof URL === 'function' && module instanceof URL) || typeof module === 'string' || (typeof Request === 'function' && module instanceof Request)) {

            const response = fetch(module);
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                result = WebAssembly.instantiateStreaming(response, imports)
                .catch(e => {
                    return response
                    .then(r => {
                        if (r.headers.get('Content-Type') != 'application/wasm') {
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                            return r.arrayBuffer();
                        } else {
                            throw e;
                        }
                    })
                    .then(bytes => WebAssembly.instantiate(bytes, imports));
                });
            } else {
                result = response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            }
        } else {

            result = WebAssembly.instantiate(module, imports)
            .then(result => {
                if (result instanceof WebAssembly.Instance) {
                    return { instance: result, module };
                } else {
                    return result;
                }
            });
        }
        return result.then(({instance, module}) => {
            wasm = instance.exports;
            init.__wbindgen_wasm_module = module;

            return wasm;
        });
    }

    self.wasm_bindgen = Object.assign(init, __exports);

})();
