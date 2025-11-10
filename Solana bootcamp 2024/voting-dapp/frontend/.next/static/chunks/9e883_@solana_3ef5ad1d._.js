(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/keys/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/accounts/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/accounts/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/accounts/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/frontend/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue) {
    let givenValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : testValue;
    if (!testValue.match(new RegExp("^[".concat(alphabet4, "]*$")))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp("((?!".concat(zeroCharacter, ").*)")));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 !== null && n2 !== void 0 ? n2 : 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes) {
            let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes) {
                let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder || (textEncoder = new o())).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder || (textEncoder = new o())).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder || (textDecoder = new e())).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
]);

//# sourceMappingURL=9e883_%40solana_3ef5ad1d._.js.map