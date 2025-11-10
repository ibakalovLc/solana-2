module.exports = [
"[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signAndSendTransaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "SolanaSignAndSendTransaction",
    ()=>SolanaSignAndSendTransaction
]);
const SolanaSignAndSendTransaction = 'solana:signAndSendTransaction'; //# sourceMappingURL=signAndSendTransaction.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signIn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "SolanaSignIn",
    ()=>SolanaSignIn
]);
const SolanaSignIn = 'solana:signIn'; //# sourceMappingURL=signIn.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "SolanaSignMessage",
    ()=>SolanaSignMessage
]);
const SolanaSignMessage = 'solana:signMessage'; //# sourceMappingURL=signMessage.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signTransaction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "SolanaSignTransaction",
    ()=>SolanaSignTransaction
]);
const SolanaSignTransaction = 'solana:signTransaction'; //# sourceMappingURL=signTransaction.js.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertDigestCapabilityIsAvailable",
    ()=>assertDigestCapabilityIsAvailable,
    "assertKeyExporterIsAvailable",
    ()=>assertKeyExporterIsAvailable,
    "assertKeyGenerationIsAvailable",
    ()=>assertKeyGenerationIsAvailable,
    "assertPRNGIsAvailable",
    ()=>assertPRNGIsAvailable,
    "assertSigningCapabilityIsAvailable",
    ()=>assertSigningCapabilityIsAvailable,
    "assertVerificationCapabilityIsAvailable",
    ()=>assertVerificationCapabilityIsAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/crypto.ts
function assertPRNGIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.getRandomValues !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED"]);
    }
}
var cachedEd25519Decision;
async function isEd25519CurveSupported(subtle) {
    if (cachedEd25519Decision === void 0) {
        cachedEd25519Decision = new Promise((resolve)=>{
            subtle.generateKey("Ed25519", /* extractable */ false, [
                "sign",
                "verify"
            ]).then(()=>{
                resolve(cachedEd25519Decision = true);
            }).catch(()=>{
                resolve(cachedEd25519Decision = false);
            });
        });
    }
    if (typeof cachedEd25519Decision === "boolean") {
        return cachedEd25519Decision;
    } else {
        return await cachedEd25519Decision;
    }
}
function assertDigestCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.digest !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED"]);
    }
}
async function assertKeyGenerationIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.generateKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED"]);
    }
    if (!await isEd25519CurveSupported(globalThis.crypto.subtle)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED"]);
    }
}
function assertKeyExporterIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.exportKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertSigningCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.sign !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertVerificationCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.verify !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED"]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertDigestCapabilityIsAvailable",
    ()=>assertDigestCapabilityIsAvailable,
    "assertKeyExporterIsAvailable",
    ()=>assertKeyExporterIsAvailable,
    "assertKeyGenerationIsAvailable",
    ()=>assertKeyGenerationIsAvailable,
    "assertPRNGIsAvailable",
    ()=>assertPRNGIsAvailable,
    "assertSigningCapabilityIsAvailable",
    ()=>assertSigningCapabilityIsAvailable,
    "assertVerificationCapabilityIsAvailable",
    ()=>assertVerificationCapabilityIsAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/assertions/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/crypto.ts
function assertPRNGIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.getRandomValues !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED"]);
    }
}
var cachedEd25519Decision;
async function isEd25519CurveSupported(subtle) {
    if (cachedEd25519Decision === void 0) {
        cachedEd25519Decision = new Promise((resolve)=>{
            subtle.generateKey("Ed25519", /* extractable */ false, [
                "sign",
                "verify"
            ]).then(()=>{
                resolve(cachedEd25519Decision = true);
            }).catch(()=>{
                resolve(cachedEd25519Decision = false);
            });
        });
    }
    if (typeof cachedEd25519Decision === "boolean") {
        return cachedEd25519Decision;
    } else {
        return await cachedEd25519Decision;
    }
}
function assertDigestCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.digest !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED"]);
    }
}
async function assertKeyGenerationIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.generateKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED"]);
    }
    if (!await isEd25519CurveSupported(globalThis.crypto.subtle)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED"]);
    }
}
function assertKeyExporterIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.exportKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertSigningCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.sign !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertVerificationCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.verify !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED"]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "address",
    ()=>address,
    "assertIsAddress",
    ()=>assertIsAddress,
    "assertIsOffCurveAddress",
    ()=>assertIsOffCurveAddress,
    "assertIsProgramDerivedAddress",
    ()=>assertIsProgramDerivedAddress,
    "createAddressWithSeed",
    ()=>createAddressWithSeed,
    "getAddressCodec",
    ()=>getAddressCodec,
    "getAddressComparator",
    ()=>getAddressComparator,
    "getAddressDecoder",
    ()=>getAddressDecoder,
    "getAddressEncoder",
    ()=>getAddressEncoder,
    "getAddressFromPublicKey",
    ()=>getAddressFromPublicKey,
    "getProgramDerivedAddress",
    ()=>getProgramDerivedAddress,
    "getPublicKeyFromAddress",
    ()=>getPublicKeyFromAddress,
    "isAddress",
    ()=>isAddress,
    "isOffCurveAddress",
    ()=>isOffCurveAddress,
    "isProgramDerivedAddress",
    ()=>isProgramDerivedAddress,
    "offCurveAddress",
    ()=>offCurveAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/address.ts
var memoizedBase58Encoder;
var memoizedBase58Decoder;
function getMemoizedBase58Encoder() {
    if (!memoizedBase58Encoder) memoizedBase58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    return memoizedBase58Encoder;
}
function getMemoizedBase58Decoder() {
    if (!memoizedBase58Decoder) memoizedBase58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    return memoizedBase58Decoder;
}
function isAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        return false;
    }
    const base58Encoder = getMemoizedBase58Encoder();
    try {
        return base58Encoder.encode(putativeAddress).byteLength === 32;
    } catch  {
        return false;
    }
}
function assertIsAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeAddress.length
        });
    }
    const base58Encoder = getMemoizedBase58Encoder();
    const bytes = base58Encoder.encode(putativeAddress);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function address(putativeAddress) {
    assertIsAddress(putativeAddress);
    return putativeAddress;
}
function getAddressEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getMemoizedBase58Encoder(), 32), (putativeAddress)=>address(putativeAddress));
}
function getAddressDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getMemoizedBase58Decoder(), 32);
}
function getAddressCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAddressEncoder(), getAddressDecoder());
}
function getAddressComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/vendor/noble/ed25519.ts
var D = 37095705934669439343138083508754565189542113879843219016388785533085940283555n;
var P = 57896044618658097711785492504343953926634992332820282019728792003956564819949n;
var RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
function mod(a) {
    const r = a % P;
    return r >= 0n ? r : P + r;
}
function pow2(x, power) {
    let r = x;
    while(power-- > 0n){
        r *= r;
        r %= P;
    }
    return r;
}
function pow_2_252_3(x) {
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, 2n) * b2 % P;
    const b5 = pow2(b4, 1n) * x % P;
    const b10 = pow2(b5, 5n) * b5 % P;
    const b20 = pow2(b10, 10n) * b10 % P;
    const b40 = pow2(b20, 20n) * b20 % P;
    const b80 = pow2(b40, 40n) * b40 % P;
    const b160 = pow2(b80, 80n) * b80 % P;
    const b240 = pow2(b160, 80n) * b80 % P;
    const b250 = pow2(b240, 10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, 2n) * x % P;
    return pow_p_5_8;
}
function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7);
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * RM1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * RM1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if ((mod(x) & 1n) === 1n) x = mod(-x);
    if (!useRoot1 && !useRoot2) {
        return null;
    }
    return x;
}
function pointIsOnCurve(y, lastByte) {
    const y2 = mod(y * y);
    const u = mod(y2 - 1n);
    const v = mod(D * y2 + 1n);
    const x = uvRatio(u, v);
    if (x === null) {
        return false;
    }
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (x === 0n && isLastByteOdd) {
        return false;
    }
    return true;
}
// src/curve-internal.ts
function byteToHex(byte) {
    const hexString = byte.toString(16);
    if (hexString.length === 1) {
        return `0${hexString}`;
    } else {
        return hexString;
    }
}
function decompressPointBytes(bytes) {
    const hexString = bytes.reduce((acc, byte, ii)=>`${byteToHex(ii === 31 ? byte & -129 : byte)}${acc}`, "");
    const integerLiteralString = `0x${hexString}`;
    return BigInt(integerLiteralString);
}
function compressedPointBytesAreOnCurve(bytes) {
    if (bytes.byteLength !== 32) {
        return false;
    }
    const y = decompressPointBytes(bytes);
    return pointIsOnCurve(y, bytes[31]);
}
// src/curve.ts
function isOffCurveAddress(putativeOffCurveAddress) {
    const addressBytes = getAddressCodec().encode(putativeOffCurveAddress);
    return compressedPointBytesAreOnCurve(addressBytes) === false;
}
function assertIsOffCurveAddress(putativeOffCurveAddress) {
    if (!isOffCurveAddress(putativeOffCurveAddress)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS"]);
    }
}
function offCurveAddress(putativeOffCurveAddress) {
    assertIsOffCurveAddress(putativeOffCurveAddress);
    return putativeOffCurveAddress;
}
function isProgramDerivedAddress(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number" && value[1] >= 0 && value[1] <= 255 && isAddress(value[0]);
}
function assertIsProgramDerivedAddress(value) {
    const validFormat = Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number";
    if (!validFormat) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MALFORMED_PDA"]);
    }
    if (value[1] < 0 || value[1] > 255) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE"], {
            bump: value[1]
        });
    }
    assertIsAddress(value[0]);
}
var MAX_SEED_LENGTH = 32;
var MAX_SEEDS = 16;
var PDA_MARKER_BYTES = [
    // The string 'ProgramDerivedAddress'
    80,
    114,
    111,
    103,
    114,
    97,
    109,
    68,
    101,
    114,
    105,
    118,
    101,
    100,
    65,
    100,
    100,
    114,
    101,
    115,
    115
];
async function createProgramDerivedAddress({ programAddress, seeds }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDigestCapabilityIsAvailable"])();
    if (seeds.length > MAX_SEEDS) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED"], {
            actual: seeds.length,
            maxSeeds: MAX_SEEDS
        });
    }
    let textEncoder;
    const seedBytes = seeds.reduce((acc, seed, ii)=>{
        const bytes = typeof seed === "string" ? (textEncoder ||= new TextEncoder()).encode(seed) : seed;
        if (bytes.byteLength > MAX_SEED_LENGTH) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
                actual: bytes.byteLength,
                index: ii,
                maxSeedLength: MAX_SEED_LENGTH
            });
        }
        acc.push(...bytes);
        return acc;
    }, []);
    const base58EncodedAddressCodec = getAddressCodec();
    const programAddressBytes = base58EncodedAddressCodec.encode(programAddress);
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...seedBytes,
        ...programAddressBytes,
        ...PDA_MARKER_BYTES
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    if (compressedPointBytesAreOnCurve(addressBytes)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"]);
    }
    return base58EncodedAddressCodec.decode(addressBytes);
}
async function getProgramDerivedAddress({ programAddress, seeds }) {
    let bumpSeed = 255;
    while(bumpSeed > 0){
        try {
            const address2 = await createProgramDerivedAddress({
                programAddress,
                seeds: [
                    ...seeds,
                    new Uint8Array([
                        bumpSeed
                    ])
                ]
            });
            return [
                address2,
                bumpSeed
            ];
        } catch (e) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"])) {
                bumpSeed--;
            } else {
                throw e;
            }
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED"]);
}
async function createAddressWithSeed({ baseAddress, programAddress, seed }) {
    const { encode, decode } = getAddressCodec();
    const seedBytes = typeof seed === "string" ? new TextEncoder().encode(seed) : seed;
    if (seedBytes.byteLength > MAX_SEED_LENGTH) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
            actual: seedBytes.byteLength,
            index: 0,
            maxSeedLength: MAX_SEED_LENGTH
        });
    }
    const programAddressBytes = encode(programAddress);
    if (programAddressBytes.length >= PDA_MARKER_BYTES.length && programAddressBytes.slice(-PDA_MARKER_BYTES.length).every((byte, index)=>byte === PDA_MARKER_BYTES[index])) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER"]);
    }
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...encode(baseAddress),
        ...seedBytes,
        ...programAddressBytes
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    return decode(addressBytes);
}
async function getAddressFromPublicKey(publicKey) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (publicKey.type !== "public" || publicKey.algorithm.name !== "Ed25519") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY"]);
    }
    const publicKeyBytes = await crypto.subtle.exportKey("raw", publicKey);
    return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
}
async function getPublicKeyFromAddress(address2) {
    const addressBytes = getAddressEncoder().encode(address2);
    return await crypto.subtle.importKey("raw", addressBytes, {
        name: "Ed25519"
    }, true, [
        "verify"
    ]);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "address",
    ()=>address,
    "assertIsAddress",
    ()=>assertIsAddress,
    "assertIsOffCurveAddress",
    ()=>assertIsOffCurveAddress,
    "assertIsProgramDerivedAddress",
    ()=>assertIsProgramDerivedAddress,
    "createAddressWithSeed",
    ()=>createAddressWithSeed,
    "getAddressCodec",
    ()=>getAddressCodec,
    "getAddressComparator",
    ()=>getAddressComparator,
    "getAddressDecoder",
    ()=>getAddressDecoder,
    "getAddressEncoder",
    ()=>getAddressEncoder,
    "getAddressFromPublicKey",
    ()=>getAddressFromPublicKey,
    "getProgramDerivedAddress",
    ()=>getProgramDerivedAddress,
    "getPublicKeyFromAddress",
    ()=>getPublicKeyFromAddress,
    "isAddress",
    ()=>isAddress,
    "isOffCurveAddress",
    ()=>isOffCurveAddress,
    "isProgramDerivedAddress",
    ()=>isProgramDerivedAddress,
    "offCurveAddress",
    ()=>offCurveAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/address.ts
var memoizedBase58Encoder;
var memoizedBase58Decoder;
function getMemoizedBase58Encoder() {
    if (!memoizedBase58Encoder) memoizedBase58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    return memoizedBase58Encoder;
}
function getMemoizedBase58Decoder() {
    if (!memoizedBase58Decoder) memoizedBase58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    return memoizedBase58Decoder;
}
function isAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        return false;
    }
    const base58Encoder = getMemoizedBase58Encoder();
    try {
        return base58Encoder.encode(putativeAddress).byteLength === 32;
    } catch  {
        return false;
    }
}
function assertIsAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeAddress.length
        });
    }
    const base58Encoder = getMemoizedBase58Encoder();
    const bytes = base58Encoder.encode(putativeAddress);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function address(putativeAddress) {
    assertIsAddress(putativeAddress);
    return putativeAddress;
}
function getAddressEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getMemoizedBase58Encoder(), 32), (putativeAddress)=>address(putativeAddress));
}
function getAddressDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getMemoizedBase58Decoder(), 32);
}
function getAddressCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAddressEncoder(), getAddressDecoder());
}
function getAddressComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/vendor/noble/ed25519.ts
var D = 37095705934669439343138083508754565189542113879843219016388785533085940283555n;
var P = 57896044618658097711785492504343953926634992332820282019728792003956564819949n;
var RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
function mod(a) {
    const r = a % P;
    return r >= 0n ? r : P + r;
}
function pow2(x, power) {
    let r = x;
    while(power-- > 0n){
        r *= r;
        r %= P;
    }
    return r;
}
function pow_2_252_3(x) {
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, 2n) * b2 % P;
    const b5 = pow2(b4, 1n) * x % P;
    const b10 = pow2(b5, 5n) * b5 % P;
    const b20 = pow2(b10, 10n) * b10 % P;
    const b40 = pow2(b20, 20n) * b20 % P;
    const b80 = pow2(b40, 40n) * b40 % P;
    const b160 = pow2(b80, 80n) * b80 % P;
    const b240 = pow2(b160, 80n) * b80 % P;
    const b250 = pow2(b240, 10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, 2n) * x % P;
    return pow_p_5_8;
}
function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7);
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * RM1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * RM1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if ((mod(x) & 1n) === 1n) x = mod(-x);
    if (!useRoot1 && !useRoot2) {
        return null;
    }
    return x;
}
function pointIsOnCurve(y, lastByte) {
    const y2 = mod(y * y);
    const u = mod(y2 - 1n);
    const v = mod(D * y2 + 1n);
    const x = uvRatio(u, v);
    if (x === null) {
        return false;
    }
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (x === 0n && isLastByteOdd) {
        return false;
    }
    return true;
}
// src/curve-internal.ts
function byteToHex(byte) {
    const hexString = byte.toString(16);
    if (hexString.length === 1) {
        return `0${hexString}`;
    } else {
        return hexString;
    }
}
function decompressPointBytes(bytes) {
    const hexString = bytes.reduce((acc, byte, ii)=>`${byteToHex(ii === 31 ? byte & -129 : byte)}${acc}`, "");
    const integerLiteralString = `0x${hexString}`;
    return BigInt(integerLiteralString);
}
function compressedPointBytesAreOnCurve(bytes) {
    if (bytes.byteLength !== 32) {
        return false;
    }
    const y = decompressPointBytes(bytes);
    return pointIsOnCurve(y, bytes[31]);
}
// src/curve.ts
function isOffCurveAddress(putativeOffCurveAddress) {
    const addressBytes = getAddressCodec().encode(putativeOffCurveAddress);
    return compressedPointBytesAreOnCurve(addressBytes) === false;
}
function assertIsOffCurveAddress(putativeOffCurveAddress) {
    if (!isOffCurveAddress(putativeOffCurveAddress)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS"]);
    }
}
function offCurveAddress(putativeOffCurveAddress) {
    assertIsOffCurveAddress(putativeOffCurveAddress);
    return putativeOffCurveAddress;
}
function isProgramDerivedAddress(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number" && value[1] >= 0 && value[1] <= 255 && isAddress(value[0]);
}
function assertIsProgramDerivedAddress(value) {
    const validFormat = Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number";
    if (!validFormat) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MALFORMED_PDA"]);
    }
    if (value[1] < 0 || value[1] > 255) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE"], {
            bump: value[1]
        });
    }
    assertIsAddress(value[0]);
}
var MAX_SEED_LENGTH = 32;
var MAX_SEEDS = 16;
var PDA_MARKER_BYTES = [
    // The string 'ProgramDerivedAddress'
    80,
    114,
    111,
    103,
    114,
    97,
    109,
    68,
    101,
    114,
    105,
    118,
    101,
    100,
    65,
    100,
    100,
    114,
    101,
    115,
    115
];
async function createProgramDerivedAddress({ programAddress, seeds }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDigestCapabilityIsAvailable"])();
    if (seeds.length > MAX_SEEDS) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED"], {
            actual: seeds.length,
            maxSeeds: MAX_SEEDS
        });
    }
    let textEncoder;
    const seedBytes = seeds.reduce((acc, seed, ii)=>{
        const bytes = typeof seed === "string" ? (textEncoder ||= new TextEncoder()).encode(seed) : seed;
        if (bytes.byteLength > MAX_SEED_LENGTH) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
                actual: bytes.byteLength,
                index: ii,
                maxSeedLength: MAX_SEED_LENGTH
            });
        }
        acc.push(...bytes);
        return acc;
    }, []);
    const base58EncodedAddressCodec = getAddressCodec();
    const programAddressBytes = base58EncodedAddressCodec.encode(programAddress);
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...seedBytes,
        ...programAddressBytes,
        ...PDA_MARKER_BYTES
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    if (compressedPointBytesAreOnCurve(addressBytes)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"]);
    }
    return base58EncodedAddressCodec.decode(addressBytes);
}
async function getProgramDerivedAddress({ programAddress, seeds }) {
    let bumpSeed = 255;
    while(bumpSeed > 0){
        try {
            const address2 = await createProgramDerivedAddress({
                programAddress,
                seeds: [
                    ...seeds,
                    new Uint8Array([
                        bumpSeed
                    ])
                ]
            });
            return [
                address2,
                bumpSeed
            ];
        } catch (e) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"])) {
                bumpSeed--;
            } else {
                throw e;
            }
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED"]);
}
async function createAddressWithSeed({ baseAddress, programAddress, seed }) {
    const { encode, decode } = getAddressCodec();
    const seedBytes = typeof seed === "string" ? new TextEncoder().encode(seed) : seed;
    if (seedBytes.byteLength > MAX_SEED_LENGTH) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
            actual: seedBytes.byteLength,
            index: 0,
            maxSeedLength: MAX_SEED_LENGTH
        });
    }
    const programAddressBytes = encode(programAddress);
    if (programAddressBytes.length >= PDA_MARKER_BYTES.length && programAddressBytes.slice(-PDA_MARKER_BYTES.length).every((byte, index)=>byte === PDA_MARKER_BYTES[index])) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER"]);
    }
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...encode(baseAddress),
        ...seedBytes,
        ...programAddressBytes
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    return decode(addressBytes);
}
async function getAddressFromPublicKey(publicKey) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (publicKey.type !== "public" || publicKey.algorithm.name !== "Ed25519") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY"]);
    }
    const publicKeyBytes = await crypto.subtle.exportKey("raw", publicKey);
    return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
}
async function getPublicKeyFromAddress(address2) {
    const addressBytes = getAddressEncoder().encode(address2);
    return await crypto.subtle.importKey("raw", addressBytes, {
        name: "Ed25519"
    }, true, [
        "verify"
    ]);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/race.ts
__turbopack_context__.s([
    "getAbortablePromise",
    ()=>getAbortablePromise,
    "safeRace",
    ()=>safeRace
]);
function isObject(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
}
function addRaceContender(contender) {
    const deferreds = /* @__PURE__ */ new Set();
    const record = {
        deferreds,
        settled: false
    };
    Promise.resolve(contender).then((value)=>{
        for (const { resolve } of deferreds){
            resolve(value);
        }
        deferreds.clear();
        record.settled = true;
    }, (err)=>{
        for (const { reject } of deferreds){
            reject(err);
        }
        deferreds.clear();
        record.settled = true;
    });
    return record;
}
var wm = /* @__PURE__ */ new WeakMap();
async function safeRace(contenders) {
    let deferred;
    const result = new Promise((resolve, reject)=>{
        deferred = {
            reject,
            resolve
        };
        for (const contender of contenders){
            if (!isObject(contender)) {
                Promise.resolve(contender).then(resolve, reject);
                continue;
            }
            let record = wm.get(contender);
            if (record === void 0) {
                record = addRaceContender(contender);
                record.deferreds.add(deferred);
                wm.set(contender, record);
            } else if (record.settled) {
                Promise.resolve(contender).then(resolve, reject);
            } else {
                record.deferreds.add(deferred);
            }
        }
    });
    return await result.finally(()=>{
        for (const contender of contenders){
            if (isObject(contender)) {
                const record = wm.get(contender);
                record.deferreds.delete(deferred);
            }
        }
    });
}
// src/abortable.ts
function getAbortablePromise(promise, abortSignal) {
    if (!abortSignal) {
        return promise;
    } else {
        return safeRace([
            // This promise only ever rejects if the signal is aborted. Otherwise it idles forever.
            // It's important that this come before the input promise; in the event of an abort, we
            // want to throw even if the input promise's result is ready
            new Promise((_, reject)=>{
                if (abortSignal.aborted) {
                    reject(abortSignal.reason);
                } else {
                    abortSignal.addEventListener("abort", function() {
                        reject(this.reason);
                    });
                }
            }),
            promise
        ]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/race.ts
__turbopack_context__.s([
    "getAbortablePromise",
    ()=>getAbortablePromise,
    "safeRace",
    ()=>safeRace
]);
function isObject(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
}
function addRaceContender(contender) {
    const deferreds = /* @__PURE__ */ new Set();
    const record = {
        deferreds,
        settled: false
    };
    Promise.resolve(contender).then((value)=>{
        for (const { resolve } of deferreds){
            resolve(value);
        }
        deferreds.clear();
        record.settled = true;
    }, (err)=>{
        for (const { reject } of deferreds){
            reject(err);
        }
        deferreds.clear();
        record.settled = true;
    });
    return record;
}
var wm = /* @__PURE__ */ new WeakMap();
async function safeRace(contenders) {
    let deferred;
    const result = new Promise((resolve, reject)=>{
        deferred = {
            reject,
            resolve
        };
        for (const contender of contenders){
            if (!isObject(contender)) {
                Promise.resolve(contender).then(resolve, reject);
                continue;
            }
            let record = wm.get(contender);
            if (record === void 0) {
                record = addRaceContender(contender);
                record.deferreds.add(deferred);
                wm.set(contender, record);
            } else if (record.settled) {
                Promise.resolve(contender).then(resolve, reject);
            } else {
                record.deferreds.add(deferred);
            }
        }
    });
    return await result.finally(()=>{
        for (const contender of contenders){
            if (isObject(contender)) {
                const record = wm.get(contender);
                record.deferreds.delete(deferred);
            }
        }
    });
}
// src/abortable.ts
function getAbortablePromise(promise, abortSignal) {
    if (!abortSignal) {
        return promise;
    } else {
        return safeRace([
            // This promise only ever rejects if the signal is aborted. Otherwise it idles forever.
            // It's important that this come before the input promise; in the event of an abort, we
            // want to throw even if the input promise's result is ready
            new Promise((_, reject)=>{
                if (abortSignal.aborted) {
                    reject(abortSignal.reason);
                } else {
                    abortSignal.addEventListener("abort", function() {
                        reject(this.reason);
                    });
                }
            }),
            promise
        ]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/race.ts
__turbopack_context__.s([
    "getAbortablePromise",
    ()=>getAbortablePromise,
    "safeRace",
    ()=>safeRace
]);
function isObject(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
}
function addRaceContender(contender) {
    const deferreds = /* @__PURE__ */ new Set();
    const record = {
        deferreds,
        settled: false
    };
    Promise.resolve(contender).then((value)=>{
        for (const { resolve } of deferreds){
            resolve(value);
        }
        deferreds.clear();
        record.settled = true;
    }, (err)=>{
        for (const { reject } of deferreds){
            reject(err);
        }
        deferreds.clear();
        record.settled = true;
    });
    return record;
}
var wm = /* @__PURE__ */ new WeakMap();
async function safeRace(contenders) {
    let deferred;
    const result = new Promise((resolve, reject)=>{
        deferred = {
            reject,
            resolve
        };
        for (const contender of contenders){
            if (!isObject(contender)) {
                Promise.resolve(contender).then(resolve, reject);
                continue;
            }
            let record = wm.get(contender);
            if (record === void 0) {
                record = addRaceContender(contender);
                record.deferreds.add(deferred);
                wm.set(contender, record);
            } else if (record.settled) {
                Promise.resolve(contender).then(resolve, reject);
            } else {
                record.deferreds.add(deferred);
            }
        }
    });
    return await result.finally(()=>{
        for (const contender of contenders){
            if (isObject(contender)) {
                const record = wm.get(contender);
                record.deferreds.delete(deferred);
            }
        }
    });
}
// src/abortable.ts
function getAbortablePromise(promise, abortSignal) {
    if (!abortSignal) {
        return promise;
    } else {
        return safeRace([
            // This promise only ever rejects if the signal is aborted. Otherwise it idles forever.
            // It's important that this come before the input promise; in the event of an abort, we
            // want to throw even if the input promise's result is ready
            new Promise((_, reject)=>{
                if (abortSignal.aborted) {
                    reject(abortSignal.reason);
                } else {
                    abortSignal.addEventListener("abort", function() {
                        reject(this.reason);
                    });
                }
            }),
            promise
        ]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/transaction-messages/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidNumberOfItemsForCodec",
    ()=>assertValidNumberOfItemsForCodec,
    "getArrayCodec",
    ()=>getArrayCodec,
    "getArrayDecoder",
    ()=>getArrayDecoder,
    "getArrayEncoder",
    ()=>getArrayEncoder,
    "getBitArrayCodec",
    ()=>getBitArrayCodec,
    "getBitArrayDecoder",
    ()=>getBitArrayDecoder,
    "getBitArrayEncoder",
    ()=>getBitArrayEncoder,
    "getBooleanCodec",
    ()=>getBooleanCodec,
    "getBooleanDecoder",
    ()=>getBooleanDecoder,
    "getBooleanEncoder",
    ()=>getBooleanEncoder,
    "getBytesCodec",
    ()=>getBytesCodec,
    "getBytesDecoder",
    ()=>getBytesDecoder,
    "getBytesEncoder",
    ()=>getBytesEncoder,
    "getConstantCodec",
    ()=>getConstantCodec,
    "getConstantDecoder",
    ()=>getConstantDecoder,
    "getConstantEncoder",
    ()=>getConstantEncoder,
    "getDiscriminatedUnionCodec",
    ()=>getDiscriminatedUnionCodec,
    "getDiscriminatedUnionDecoder",
    ()=>getDiscriminatedUnionDecoder,
    "getDiscriminatedUnionEncoder",
    ()=>getDiscriminatedUnionEncoder,
    "getEnumCodec",
    ()=>getEnumCodec,
    "getEnumDecoder",
    ()=>getEnumDecoder,
    "getEnumEncoder",
    ()=>getEnumEncoder,
    "getHiddenPrefixCodec",
    ()=>getHiddenPrefixCodec,
    "getHiddenPrefixDecoder",
    ()=>getHiddenPrefixDecoder,
    "getHiddenPrefixEncoder",
    ()=>getHiddenPrefixEncoder,
    "getHiddenSuffixCodec",
    ()=>getHiddenSuffixCodec,
    "getHiddenSuffixDecoder",
    ()=>getHiddenSuffixDecoder,
    "getHiddenSuffixEncoder",
    ()=>getHiddenSuffixEncoder,
    "getLiteralUnionCodec",
    ()=>getLiteralUnionCodec,
    "getLiteralUnionDecoder",
    ()=>getLiteralUnionDecoder,
    "getLiteralUnionEncoder",
    ()=>getLiteralUnionEncoder,
    "getMapCodec",
    ()=>getMapCodec,
    "getMapDecoder",
    ()=>getMapDecoder,
    "getMapEncoder",
    ()=>getMapEncoder,
    "getNullableCodec",
    ()=>getNullableCodec,
    "getNullableDecoder",
    ()=>getNullableDecoder,
    "getNullableEncoder",
    ()=>getNullableEncoder,
    "getSetCodec",
    ()=>getSetCodec,
    "getSetDecoder",
    ()=>getSetDecoder,
    "getSetEncoder",
    ()=>getSetEncoder,
    "getStructCodec",
    ()=>getStructCodec,
    "getStructDecoder",
    ()=>getStructDecoder,
    "getStructEncoder",
    ()=>getStructEncoder,
    "getTupleCodec",
    ()=>getTupleCodec,
    "getTupleDecoder",
    ()=>getTupleDecoder,
    "getTupleEncoder",
    ()=>getTupleEncoder,
    "getUnionCodec",
    ()=>getUnionCodec,
    "getUnionDecoder",
    ()=>getUnionDecoder,
    "getUnionEncoder",
    ()=>getUnionEncoder,
    "getUnitCodec",
    ()=>getUnitCodec,
    "getUnitDecoder",
    ()=>getUnitDecoder,
    "getUnitEncoder",
    ()=>getUnitEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/array.ts
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS"], {
            actual,
            codecDescription,
            expected
        });
    }
}
function maxCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : Math.max(all, size), 0);
}
function sumCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
// src/array.ts
function getArrayEncoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            getSizeFromValue: (array)=>{
                const prefixSize = typeof size === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(array.length, size) : 0;
                return prefixSize + [
                    ...array
                ].reduce((all, value)=>all + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value, item), 0);
            },
            maxSize
        },
        write: (array, bytes, offset)=>{
            if (typeof size === "number") {
                assertValidNumberOfItemsForCodec("array", size, array.length);
            }
            if (typeof size === "object") {
                offset = size.write(array.length, bytes, offset);
            }
            array.forEach((value)=>{
                offset = item.write(value, bytes, offset);
            });
            return offset;
        }
    });
}
function getArrayDecoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            maxSize
        },
        read: (bytes, offset)=>{
            const array = [];
            if (typeof size === "object" && bytes.slice(offset).length === 0) {
                return [
                    array,
                    offset
                ];
            }
            if (size === "remainder") {
                while(offset < bytes.length){
                    const [value, newOffset2] = item.read(bytes, offset);
                    offset = newOffset2;
                    array.push(value);
                }
                return [
                    array,
                    offset
                ];
            }
            const [resolvedSize, newOffset] = typeof size === "number" ? [
                size,
                offset
            ] : size.read(bytes, offset);
            offset = newOffset;
            for(let i = 0; i < resolvedSize; i += 1){
                const [value, newOffset2] = item.read(bytes, offset);
                offset = newOffset2;
                array.push(value);
            }
            return [
                array,
                offset
            ];
        }
    });
}
function getArrayCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getArrayEncoder(item, config), getArrayDecoder(item, config));
}
function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number") return null;
    if (size === 0) return 0;
    return itemSize === null ? null : itemSize * size;
}
function getBitArrayEncoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: size,
        write (value, bytes, offset) {
            const bytesToAdd = [];
            for(let i = 0; i < size; i += 1){
                let byte = 0;
                for(let j = 0; j < 8; j += 1){
                    const feature = Number(value[i * 8 + j] ?? 0);
                    byte |= feature << (backward ? j : 7 - j);
                }
                if (backward) {
                    bytesToAdd.unshift(byte);
                } else {
                    bytesToAdd.push(byte);
                }
            }
            bytes.set(bytesToAdd, offset);
            return size;
        }
    });
}
function getBitArrayDecoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: size,
        read (bytes, offset) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])("bitArray", size, bytes, offset);
            const booleans = [];
            let slice = bytes.slice(offset, offset + size);
            slice = backward ? slice.reverse() : slice;
            slice.forEach((byte)=>{
                for(let i = 0; i < 8; i += 1){
                    if (backward) {
                        booleans.push(Boolean(byte & 1));
                        byte >>= 1;
                    } else {
                        booleans.push(Boolean(byte & 128));
                        byte <<= 1;
                    }
                }
            });
            return [
                booleans,
                offset + size
            ];
        }
    });
}
function getBitArrayCodec(size, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
}
function getBooleanEncoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])(), (value)=>value ? 1 : 0);
}
function getBooleanDecoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), (value)=>Number(value) === 1);
}
function getBooleanCodec(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBooleanEncoder(config), getBooleanDecoder(config));
}
function getBytesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value.length,
        write: (value, bytes, offset)=>{
            bytes.set(value, offset);
            return offset + value.length;
        }
    });
}
function getBytesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read: (bytes, offset)=>{
            const slice = bytes.slice(offset);
            return [
                slice,
                offset + slice.length
            ];
        }
    });
}
function getBytesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBytesEncoder(), getBytesDecoder());
}
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
function getConstantEncoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: constant.length,
        write: (_, bytes, offset)=>{
            bytes.set(constant, offset);
            return offset + constant.length;
        }
    });
}
function getConstantDecoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: constant.length,
        read: (bytes, offset)=>{
            const base16 = getBase16Decoder();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, constant, offset)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_CONSTANT"], {
                    constant,
                    data: bytes,
                    hexConstant: base16.decode(constant),
                    hexData: base16.decode(bytes),
                    offset
                });
            }
            return [
                void 0,
                offset + constant.length
            ];
        }
    });
}
function getConstantCodec(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getConstantEncoder(constant), getConstantDecoder(constant));
}
function getTupleEncoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>items.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[index], item)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (value, bytes, offset)=>{
            assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
            items.forEach((item, index)=>{
                offset = item.write(value[index], bytes, offset);
            });
            return offset;
        }
    });
}
function getTupleDecoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const values = [];
            items.forEach((item)=>{
                const [newValue, newOffset] = item.read(bytes, offset);
                values.push(newValue);
                offset = newOffset;
            });
            return [
                values,
                offset
            ];
        }
    });
}
function getTupleCodec(items) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTupleEncoder(items), getTupleDecoder(items));
}
function getUnionEncoder(variants, getIndexFromValue) {
    const fixedSize = getUnionFixedSize(variants);
    const write = (variant, bytes, offset)=>{
        const index = getIndexFromValue(variant);
        assertValidVariantIndex(variants, index);
        return variants[index].write(variant, bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
            fixedSize,
            write
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (variant)=>{
            const index = getIndexFromValue(variant);
            assertValidVariantIndex(variants, index);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(variant, variants[index]);
        },
        write
    });
}
function getUnionDecoder(variants, getIndexFromBytes) {
    const fixedSize = getUnionFixedSize(variants);
    const read = (bytes, offset)=>{
        const index = getIndexFromBytes(bytes, offset);
        assertValidVariantIndex(variants, index);
        return variants[index].read(bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
            fixedSize,
            read
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function getUnionCodec(variants, getIndexFromValue, getIndexFromBytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnionEncoder(variants, getIndexFromValue), getUnionDecoder(variants, getIndexFromBytes));
}
function assertValidVariantIndex(variants, index) {
    if (typeof variants[index] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE"], {
            maxRange: variants.length - 1,
            minRange: 0,
            variant: index
        });
    }
}
function getUnionFixedSize(variants) {
    if (variants.length === 0) return 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variants[0])) return null;
    const variantSize = variants[0].fixedSize;
    const sameSizedVariants = variants.every((variant)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variant) && variant.fixedSize === variantSize);
    return sameSizedVariants ? variantSize : null;
}
function getUnionMaxSize(variants) {
    return maxCodecSizes(variants.map((variant)=>getMaxSize(variant)));
}
// src/discriminated-union.ts
function getDiscriminatedUnionEncoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return getUnionEncoder(variants.map(([, variant], index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            variant
        ]), (value)=>[
                index,
                value
            ])), (value)=>getVariantDiscriminator(variants, value[discriminatorProperty]));
}
function getDiscriminatedUnionDecoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return getUnionDecoder(variants.map(([discriminator, variant])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            variant
        ]), ([, value])=>({
                [discriminatorProperty]: discriminator,
                ...value
            }))), (bytes, offset)=>Number(prefix.read(bytes, offset)[0]));
}
function getDiscriminatedUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDiscriminatedUnionEncoder(variants, config), getDiscriminatedUnionDecoder(variants, config));
}
function getVariantDiscriminator(variants, discriminatorValue) {
    const discriminator = variants.findIndex(([key])=>discriminatorValue === key);
    if (discriminator < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT"], {
            value: discriminatorValue,
            variants: variants.map(([key])=>key)
        });
    }
    return discriminator;
}
// src/enum-helpers.ts
function getEnumStats(constructor) {
    const numericalValues = [
        ...new Set(Object.values(constructor).filter((v)=>typeof v === "number"))
    ].sort();
    const enumRecord = Object.fromEntries(Object.entries(constructor).slice(numericalValues.length));
    const enumKeys = Object.keys(enumRecord);
    const enumValues = Object.values(enumRecord);
    const stringValues = [
        .../* @__PURE__ */ new Set([
            ...enumKeys,
            ...enumValues.filter((v)=>typeof v === "string")
        ])
    ];
    return {
        enumKeys,
        enumRecord,
        enumValues,
        numericalValues,
        stringValues
    };
}
function getEnumIndexFromVariant({ enumKeys, enumValues, variant }) {
    const valueIndex = findLastIndex(enumValues, (value)=>value === variant);
    if (valueIndex >= 0) return valueIndex;
    return enumKeys.findIndex((key)=>key === variant);
}
function getEnumIndexFromDiscriminator({ discriminator, enumKeys, enumValues, useValuesAsDiscriminators }) {
    if (!useValuesAsDiscriminators) {
        return discriminator >= 0 && discriminator < enumKeys.length ? discriminator : -1;
    }
    return findLastIndex(enumValues, (value)=>value === discriminator);
}
function findLastIndex(array, predicate) {
    let l = array.length;
    while(l--){
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
function formatNumericalValues(values) {
    if (values.length === 0) return "";
    let range = [
        values[0],
        values[0]
    ];
    const ranges = [];
    for(let index = 1; index < values.length; index++){
        const value = values[index];
        if (range[1] + 1 === value) {
            range[1] = value;
        } else {
            ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
            range = [
                value,
                value
            ];
        }
    }
    ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
    return ranges.join(", ");
}
// src/enum.ts
function getEnumEncoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues, stringValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(prefix, (variant)=>{
        const index = getEnumIndexFromVariant({
            enumKeys,
            enumValues,
            variant
        });
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT"], {
                formattedNumericalValues: formatNumericalValues(numericalValues),
                numericalValues,
                stringValues,
                variant
            });
        }
        return useValuesAsDiscriminators ? enumValues[index] : index;
    });
}
function getEnumDecoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(prefix, (value)=>{
        const discriminator = Number(value);
        const index = getEnumIndexFromDiscriminator({
            discriminator,
            enumKeys,
            enumValues,
            useValuesAsDiscriminators
        });
        if (index < 0) {
            const validDiscriminators = useValuesAsDiscriminators ? numericalValues : [
                ...Array(enumKeys.length).keys()
            ];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator,
                formattedValidDiscriminators: formatNumericalValues(validDiscriminators),
                validDiscriminators
            });
        }
        return enumValues[index];
    });
}
function getEnumCodec(constructor, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getEnumEncoder(constructor, config), getEnumDecoder(constructor, config));
}
function getHiddenPrefixEncoder(encoder, prefixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        ...prefixedEncoders,
        encoder
    ]), (value)=>[
            ...prefixedEncoders.map(()=>void 0),
            value
        ]);
}
function getHiddenPrefixDecoder(decoder, prefixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        ...prefixedDecoders,
        decoder
    ]), (tuple)=>tuple[tuple.length - 1]);
}
function getHiddenPrefixCodec(codec, prefixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenPrefixEncoder(codec, prefixedCodecs), getHiddenPrefixDecoder(codec, prefixedCodecs));
}
function getHiddenSuffixEncoder(encoder, suffixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        encoder,
        ...suffixedEncoders
    ]), (value)=>[
            value,
            ...suffixedEncoders.map(()=>void 0)
        ]);
}
function getHiddenSuffixDecoder(decoder, suffixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        decoder,
        ...suffixedDecoders
    ]), (tuple)=>tuple[0]);
}
function getHiddenSuffixCodec(codec, suffixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenSuffixEncoder(codec, suffixedCodecs), getHiddenSuffixDecoder(codec, suffixedCodecs));
}
function getLiteralUnionEncoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(discriminator, (variant)=>{
        const index = variants.indexOf(variant);
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT"], {
                value: variant,
                variants
            });
        }
        return index;
    });
}
function getLiteralUnionDecoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(discriminator, (index)=>{
        if (index < 0 || index >= variants.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator: index,
                maxRange: variants.length - 1,
                minRange: 0
            });
        }
        return variants[Number(index)];
    });
}
function getLiteralUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLiteralUnionEncoder(variants, config), getLiteralUnionDecoder(variants, config));
}
function getMapEncoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(getTupleEncoder([
        key,
        value
    ]), config), (map)=>[
            ...map.entries()
        ]);
}
function getMapDecoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(getTupleDecoder([
        key,
        value
    ]), config), (entries)=>new Map(entries));
}
function getMapCodec(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
}
function getUnitEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 0,
        write: (_value, _bytes, offset)=>offset
    });
}
function getUnitDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: 0,
        read: (_bytes, offset)=>[
                void 0,
                offset
            ]
    });
}
function getUnitCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnitEncoder(), getUnitDecoder());
}
// src/nullable.ts
function getNullableEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getUnitEncoder(), (_boolean)=>void 0);
        }
        return getBooleanEncoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getUnitEncoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitEncoder();
        }
        return getConstantEncoder(config.noneValue);
    })();
    return getUnionEncoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            item
        ]), (value)=>[
                true,
                value
            ])
    ], (variant)=>Number(variant !== null));
}
function getNullableDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getUnitDecoder(), ()=>false);
        }
        return getBooleanDecoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getUnitDecoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitDecoder();
        }
        return getConstantDecoder(config.noneValue);
    })();
    return getUnionDecoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            noneValue
        ]), ()=>null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            item
        ]), ([, value])=>value)
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getNullableCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNullableEncoder(item, config), getNullableDecoder(item, config));
}
function getSetEncoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(item, config), (set)=>[
            ...set
        ]);
}
function getSetDecoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(item, config), (entries)=>new Set(entries));
}
function getSetCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetEncoder(item, config), getSetDecoder(item, config));
}
function getStructEncoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>fields.map(([key, codec])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[key], codec)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (struct, bytes, offset)=>{
            fields.forEach(([key, codec])=>{
                offset = codec.write(struct[key], bytes, offset);
            });
            return offset;
        }
    });
}
function getStructDecoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const struct = {};
            fields.forEach(([key, codec])=>{
                const [value, newOffset] = codec.read(bytes, offset);
                offset = newOffset;
                struct[key] = value;
            });
            return [
                struct,
                offset
            ];
        }
    });
}
function getStructCodec(fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getStructEncoder(fields), getStructDecoder(fields));
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidNumberOfItemsForCodec",
    ()=>assertValidNumberOfItemsForCodec,
    "getArrayCodec",
    ()=>getArrayCodec,
    "getArrayDecoder",
    ()=>getArrayDecoder,
    "getArrayEncoder",
    ()=>getArrayEncoder,
    "getBitArrayCodec",
    ()=>getBitArrayCodec,
    "getBitArrayDecoder",
    ()=>getBitArrayDecoder,
    "getBitArrayEncoder",
    ()=>getBitArrayEncoder,
    "getBooleanCodec",
    ()=>getBooleanCodec,
    "getBooleanDecoder",
    ()=>getBooleanDecoder,
    "getBooleanEncoder",
    ()=>getBooleanEncoder,
    "getBytesCodec",
    ()=>getBytesCodec,
    "getBytesDecoder",
    ()=>getBytesDecoder,
    "getBytesEncoder",
    ()=>getBytesEncoder,
    "getConstantCodec",
    ()=>getConstantCodec,
    "getConstantDecoder",
    ()=>getConstantDecoder,
    "getConstantEncoder",
    ()=>getConstantEncoder,
    "getDataEnumCodec",
    ()=>getDataEnumCodec,
    "getDataEnumDecoder",
    ()=>getDataEnumDecoder,
    "getDataEnumEncoder",
    ()=>getDataEnumEncoder,
    "getDiscriminatedUnionCodec",
    ()=>getDiscriminatedUnionCodec,
    "getDiscriminatedUnionDecoder",
    ()=>getDiscriminatedUnionDecoder,
    "getDiscriminatedUnionEncoder",
    ()=>getDiscriminatedUnionEncoder,
    "getEnumCodec",
    ()=>getEnumCodec,
    "getEnumDecoder",
    ()=>getEnumDecoder,
    "getEnumEncoder",
    ()=>getEnumEncoder,
    "getHiddenPrefixCodec",
    ()=>getHiddenPrefixCodec,
    "getHiddenPrefixDecoder",
    ()=>getHiddenPrefixDecoder,
    "getHiddenPrefixEncoder",
    ()=>getHiddenPrefixEncoder,
    "getHiddenSuffixCodec",
    ()=>getHiddenSuffixCodec,
    "getHiddenSuffixDecoder",
    ()=>getHiddenSuffixDecoder,
    "getHiddenSuffixEncoder",
    ()=>getHiddenSuffixEncoder,
    "getLiteralUnionCodec",
    ()=>getLiteralUnionCodec,
    "getLiteralUnionDecoder",
    ()=>getLiteralUnionDecoder,
    "getLiteralUnionEncoder",
    ()=>getLiteralUnionEncoder,
    "getMapCodec",
    ()=>getMapCodec,
    "getMapDecoder",
    ()=>getMapDecoder,
    "getMapEncoder",
    ()=>getMapEncoder,
    "getNullableCodec",
    ()=>getNullableCodec,
    "getNullableDecoder",
    ()=>getNullableDecoder,
    "getNullableEncoder",
    ()=>getNullableEncoder,
    "getScalarEnumCodec",
    ()=>getScalarEnumCodec,
    "getScalarEnumDecoder",
    ()=>getScalarEnumDecoder,
    "getScalarEnumEncoder",
    ()=>getScalarEnumEncoder,
    "getSetCodec",
    ()=>getSetCodec,
    "getSetDecoder",
    ()=>getSetDecoder,
    "getSetEncoder",
    ()=>getSetEncoder,
    "getStructCodec",
    ()=>getStructCodec,
    "getStructDecoder",
    ()=>getStructDecoder,
    "getStructEncoder",
    ()=>getStructEncoder,
    "getTupleCodec",
    ()=>getTupleCodec,
    "getTupleDecoder",
    ()=>getTupleDecoder,
    "getTupleEncoder",
    ()=>getTupleEncoder,
    "getUnionCodec",
    ()=>getUnionCodec,
    "getUnionDecoder",
    ()=>getUnionDecoder,
    "getUnionEncoder",
    ()=>getUnionEncoder,
    "getUnitCodec",
    ()=>getUnitCodec,
    "getUnitDecoder",
    ()=>getUnitDecoder,
    "getUnitEncoder",
    ()=>getUnitEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/array.ts
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS"], {
            actual,
            codecDescription,
            expected
        });
    }
}
function maxCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : Math.max(all, size), 0);
}
function sumCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
// src/array.ts
function getArrayEncoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            getSizeFromValue: (array)=>{
                const prefixSize = typeof size === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(array.length, size) : 0;
                return prefixSize + [
                    ...array
                ].reduce((all, value)=>all + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value, item), 0);
            },
            maxSize
        },
        write: (array, bytes, offset)=>{
            if (typeof size === "number") {
                assertValidNumberOfItemsForCodec("array", size, array.length);
            }
            if (typeof size === "object") {
                offset = size.write(array.length, bytes, offset);
            }
            array.forEach((value)=>{
                offset = item.write(value, bytes, offset);
            });
            return offset;
        }
    });
}
function getArrayDecoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            maxSize
        },
        read: (bytes, offset)=>{
            const array = [];
            if (typeof size === "object" && bytes.slice(offset).length === 0) {
                return [
                    array,
                    offset
                ];
            }
            if (size === "remainder") {
                while(offset < bytes.length){
                    const [value, newOffset2] = item.read(bytes, offset);
                    offset = newOffset2;
                    array.push(value);
                }
                return [
                    array,
                    offset
                ];
            }
            const [resolvedSize, newOffset] = typeof size === "number" ? [
                size,
                offset
            ] : size.read(bytes, offset);
            offset = newOffset;
            for(let i = 0; i < resolvedSize; i += 1){
                const [value, newOffset2] = item.read(bytes, offset);
                offset = newOffset2;
                array.push(value);
            }
            return [
                array,
                offset
            ];
        }
    });
}
function getArrayCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getArrayEncoder(item, config), getArrayDecoder(item, config));
}
function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number") return null;
    if (size === 0) return 0;
    return itemSize === null ? null : itemSize * size;
}
function getBitArrayEncoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: size,
        write (value, bytes, offset) {
            const bytesToAdd = [];
            for(let i = 0; i < size; i += 1){
                let byte = 0;
                for(let j = 0; j < 8; j += 1){
                    const feature = Number(value[i * 8 + j] ?? 0);
                    byte |= feature << (backward ? j : 7 - j);
                }
                if (backward) {
                    bytesToAdd.unshift(byte);
                } else {
                    bytesToAdd.push(byte);
                }
            }
            bytes.set(bytesToAdd, offset);
            return size;
        }
    });
}
function getBitArrayDecoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: size,
        read (bytes, offset) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])("bitArray", size, bytes, offset);
            const booleans = [];
            let slice = bytes.slice(offset, offset + size);
            slice = backward ? slice.reverse() : slice;
            slice.forEach((byte)=>{
                for(let i = 0; i < 8; i += 1){
                    if (backward) {
                        booleans.push(Boolean(byte & 1));
                        byte >>= 1;
                    } else {
                        booleans.push(Boolean(byte & 128));
                        byte <<= 1;
                    }
                }
            });
            return [
                booleans,
                offset + size
            ];
        }
    });
}
function getBitArrayCodec(size, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
}
function getBooleanEncoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])(), (value)=>value ? 1 : 0);
}
function getBooleanDecoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), (value)=>Number(value) === 1);
}
function getBooleanCodec(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBooleanEncoder(config), getBooleanDecoder(config));
}
function getBytesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value.length,
        write: (value, bytes, offset)=>{
            bytes.set(value, offset);
            return offset + value.length;
        }
    });
}
function getBytesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read: (bytes, offset)=>{
            const slice = bytes.slice(offset);
            return [
                slice,
                offset + slice.length
            ];
        }
    });
}
function getBytesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBytesEncoder(), getBytesDecoder());
}
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
function getConstantEncoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: constant.length,
        write: (_, bytes, offset)=>{
            bytes.set(constant, offset);
            return offset + constant.length;
        }
    });
}
function getConstantDecoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: constant.length,
        read: (bytes, offset)=>{
            const base16 = getBase16Decoder();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, constant, offset)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_CONSTANT"], {
                    constant,
                    data: bytes,
                    hexConstant: base16.decode(constant),
                    hexData: base16.decode(bytes),
                    offset
                });
            }
            return [
                void 0,
                offset + constant.length
            ];
        }
    });
}
function getConstantCodec(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getConstantEncoder(constant), getConstantDecoder(constant));
}
function getTupleEncoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>items.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[index], item)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (value, bytes, offset)=>{
            assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
            items.forEach((item, index)=>{
                offset = item.write(value[index], bytes, offset);
            });
            return offset;
        }
    });
}
function getTupleDecoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const values = [];
            items.forEach((item)=>{
                const [newValue, newOffset] = item.read(bytes, offset);
                values.push(newValue);
                offset = newOffset;
            });
            return [
                values,
                offset
            ];
        }
    });
}
function getTupleCodec(items) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTupleEncoder(items), getTupleDecoder(items));
}
function getUnionEncoder(variants, getIndexFromValue) {
    const fixedSize = getUnionFixedSize(variants);
    const write = (variant, bytes, offset)=>{
        const index = getIndexFromValue(variant);
        assertValidVariantIndex(variants, index);
        return variants[index].write(variant, bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
            fixedSize,
            write
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (variant)=>{
            const index = getIndexFromValue(variant);
            assertValidVariantIndex(variants, index);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(variant, variants[index]);
        },
        write
    });
}
function getUnionDecoder(variants, getIndexFromBytes) {
    const fixedSize = getUnionFixedSize(variants);
    const read = (bytes, offset)=>{
        const index = getIndexFromBytes(bytes, offset);
        assertValidVariantIndex(variants, index);
        return variants[index].read(bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
            fixedSize,
            read
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function getUnionCodec(variants, getIndexFromValue, getIndexFromBytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnionEncoder(variants, getIndexFromValue), getUnionDecoder(variants, getIndexFromBytes));
}
function assertValidVariantIndex(variants, index) {
    if (typeof variants[index] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE"], {
            maxRange: variants.length - 1,
            minRange: 0,
            variant: index
        });
    }
}
function getUnionFixedSize(variants) {
    if (variants.length === 0) return 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variants[0])) return null;
    const variantSize = variants[0].fixedSize;
    const sameSizedVariants = variants.every((variant)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variant) && variant.fixedSize === variantSize);
    return sameSizedVariants ? variantSize : null;
}
function getUnionMaxSize(variants) {
    return maxCodecSizes(variants.map((variant)=>getMaxSize(variant)));
}
// src/discriminated-union.ts
function getDiscriminatedUnionEncoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return getUnionEncoder(variants.map(([, variant], index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            variant
        ]), (value)=>[
                index,
                value
            ])), (value)=>getVariantDiscriminator(variants, value[discriminatorProperty]));
}
function getDiscriminatedUnionDecoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return getUnionDecoder(variants.map(([discriminator, variant])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            variant
        ]), ([, value])=>({
                [discriminatorProperty]: discriminator,
                ...value
            }))), (bytes, offset)=>Number(prefix.read(bytes, offset)[0]));
}
function getDiscriminatedUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDiscriminatedUnionEncoder(variants, config), getDiscriminatedUnionDecoder(variants, config));
}
function getVariantDiscriminator(variants, discriminatorValue) {
    const discriminator = variants.findIndex(([key])=>discriminatorValue === key);
    if (discriminator < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT"], {
            value: discriminatorValue,
            variants: variants.map(([key])=>key)
        });
    }
    return discriminator;
}
var getDataEnumEncoder = getDiscriminatedUnionEncoder;
var getDataEnumDecoder = getDiscriminatedUnionDecoder;
var getDataEnumCodec = getDiscriminatedUnionCodec;
// src/enum-helpers.ts
function getEnumStats(constructor) {
    const numericalValues = [
        ...new Set(Object.values(constructor).filter((v)=>typeof v === "number"))
    ].sort();
    const enumRecord = Object.fromEntries(Object.entries(constructor).slice(numericalValues.length));
    const enumKeys = Object.keys(enumRecord);
    const enumValues = Object.values(enumRecord);
    const stringValues = [
        .../* @__PURE__ */ new Set([
            ...enumKeys,
            ...enumValues.filter((v)=>typeof v === "string")
        ])
    ];
    return {
        enumKeys,
        enumRecord,
        enumValues,
        numericalValues,
        stringValues
    };
}
function getEnumIndexFromVariant({ enumKeys, enumValues, variant }) {
    const valueIndex = findLastIndex(enumValues, (value)=>value === variant);
    if (valueIndex >= 0) return valueIndex;
    return enumKeys.findIndex((key)=>key === variant);
}
function getEnumIndexFromDiscriminator({ discriminator, enumKeys, enumValues, useValuesAsDiscriminators }) {
    if (!useValuesAsDiscriminators) {
        return discriminator >= 0 && discriminator < enumKeys.length ? discriminator : -1;
    }
    return findLastIndex(enumValues, (value)=>value === discriminator);
}
function findLastIndex(array, predicate) {
    let l = array.length;
    while(l--){
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
function formatNumericalValues(values) {
    if (values.length === 0) return "";
    let range = [
        values[0],
        values[0]
    ];
    const ranges = [];
    for(let index = 1; index < values.length; index++){
        const value = values[index];
        if (range[1] + 1 === value) {
            range[1] = value;
        } else {
            ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
            range = [
                value,
                value
            ];
        }
    }
    ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
    return ranges.join(", ");
}
// src/enum.ts
function getEnumEncoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues, stringValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(prefix, (variant)=>{
        const index = getEnumIndexFromVariant({
            enumKeys,
            enumValues,
            variant
        });
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT"], {
                formattedNumericalValues: formatNumericalValues(numericalValues),
                numericalValues,
                stringValues,
                variant
            });
        }
        return useValuesAsDiscriminators ? enumValues[index] : index;
    });
}
function getEnumDecoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(prefix, (value)=>{
        const discriminator = Number(value);
        const index = getEnumIndexFromDiscriminator({
            discriminator,
            enumKeys,
            enumValues,
            useValuesAsDiscriminators
        });
        if (index < 0) {
            const validDiscriminators = useValuesAsDiscriminators ? numericalValues : [
                ...Array(enumKeys.length).keys()
            ];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator,
                formattedValidDiscriminators: formatNumericalValues(validDiscriminators),
                validDiscriminators
            });
        }
        return enumValues[index];
    });
}
function getEnumCodec(constructor, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getEnumEncoder(constructor, config), getEnumDecoder(constructor, config));
}
var getScalarEnumEncoder = getEnumEncoder;
var getScalarEnumDecoder = getEnumDecoder;
var getScalarEnumCodec = getEnumCodec;
function getHiddenPrefixEncoder(encoder, prefixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        ...prefixedEncoders,
        encoder
    ]), (value)=>[
            ...prefixedEncoders.map(()=>void 0),
            value
        ]);
}
function getHiddenPrefixDecoder(decoder, prefixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        ...prefixedDecoders,
        decoder
    ]), (tuple)=>tuple[tuple.length - 1]);
}
function getHiddenPrefixCodec(codec, prefixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenPrefixEncoder(codec, prefixedCodecs), getHiddenPrefixDecoder(codec, prefixedCodecs));
}
function getHiddenSuffixEncoder(encoder, suffixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        encoder,
        ...suffixedEncoders
    ]), (value)=>[
            value,
            ...suffixedEncoders.map(()=>void 0)
        ]);
}
function getHiddenSuffixDecoder(decoder, suffixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        decoder,
        ...suffixedDecoders
    ]), (tuple)=>tuple[0]);
}
function getHiddenSuffixCodec(codec, suffixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenSuffixEncoder(codec, suffixedCodecs), getHiddenSuffixDecoder(codec, suffixedCodecs));
}
function getLiteralUnionEncoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(discriminator, (variant)=>{
        const index = variants.indexOf(variant);
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT"], {
                value: variant,
                variants
            });
        }
        return index;
    });
}
function getLiteralUnionDecoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(discriminator, (index)=>{
        if (index < 0 || index >= variants.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator: index,
                maxRange: variants.length - 1,
                minRange: 0
            });
        }
        return variants[Number(index)];
    });
}
function getLiteralUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLiteralUnionEncoder(variants, config), getLiteralUnionDecoder(variants, config));
}
function getMapEncoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(getTupleEncoder([
        key,
        value
    ]), config), (map)=>[
            ...map.entries()
        ]);
}
function getMapDecoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(getTupleDecoder([
        key,
        value
    ]), config), (entries)=>new Map(entries));
}
function getMapCodec(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
}
function getUnitEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 0,
        write: (_value, _bytes, offset)=>offset
    });
}
function getUnitDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: 0,
        read: (_bytes, offset)=>[
                void 0,
                offset
            ]
    });
}
function getUnitCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnitEncoder(), getUnitDecoder());
}
// src/nullable.ts
function getNullableEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getUnitEncoder(), (_boolean)=>void 0);
        }
        return getBooleanEncoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getUnitEncoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitEncoder();
        }
        return getConstantEncoder(config.noneValue);
    })();
    return getUnionEncoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            item
        ]), (value)=>[
                true,
                value
            ])
    ], (variant)=>Number(variant !== null));
}
function getNullableDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getUnitDecoder(), ()=>false);
        }
        return getBooleanDecoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getUnitDecoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitDecoder();
        }
        return getConstantDecoder(config.noneValue);
    })();
    return getUnionDecoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            noneValue
        ]), ()=>null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            item
        ]), ([, value])=>value)
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getNullableCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNullableEncoder(item, config), getNullableDecoder(item, config));
}
function getSetEncoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(item, config), (set)=>[
            ...set
        ]);
}
function getSetDecoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(item, config), (entries)=>new Set(entries));
}
function getSetCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetEncoder(item, config), getSetDecoder(item, config));
}
function getStructEncoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>fields.map(([key, codec])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[key], codec)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (struct, bytes, offset)=>{
            fields.forEach(([key, codec])=>{
                offset = codec.write(struct[key], bytes, offset);
            });
            return offset;
        }
    });
}
function getStructDecoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const struct = {};
            fields.forEach(([key, codec])=>{
                const [value, newOffset] = codec.read(bytes, offset);
                offset = newOffset;
                struct[key] = value;
            });
            return [
                struct,
                offset
            ];
        }
    });
}
function getStructCodec(fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getStructEncoder(fields), getStructDecoder(fields));
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsBlockhash",
    ()=>assertIsBlockhash,
    "assertIsLamports",
    ()=>assertIsLamports,
    "assertIsStringifiedBigInt",
    ()=>assertIsStringifiedBigInt,
    "assertIsStringifiedNumber",
    ()=>assertIsStringifiedNumber,
    "assertIsUnixTimestamp",
    ()=>assertIsUnixTimestamp,
    "blockhash",
    ()=>blockhash,
    "commitmentComparator",
    ()=>commitmentComparator,
    "devnet",
    ()=>devnet,
    "getBlockhashCodec",
    ()=>getBlockhashCodec,
    "getBlockhashComparator",
    ()=>getBlockhashComparator,
    "getBlockhashDecoder",
    ()=>getBlockhashDecoder,
    "getBlockhashEncoder",
    ()=>getBlockhashEncoder,
    "getDefaultLamportsCodec",
    ()=>getDefaultLamportsCodec,
    "getDefaultLamportsDecoder",
    ()=>getDefaultLamportsDecoder,
    "getDefaultLamportsEncoder",
    ()=>getDefaultLamportsEncoder,
    "getLamportsCodec",
    ()=>getLamportsCodec,
    "getLamportsDecoder",
    ()=>getLamportsDecoder,
    "getLamportsEncoder",
    ()=>getLamportsEncoder,
    "isBlockhash",
    ()=>isBlockhash,
    "isLamports",
    ()=>isLamports,
    "isStringifiedBigInt",
    ()=>isStringifiedBigInt,
    "isStringifiedNumber",
    ()=>isStringifiedNumber,
    "isUnixTimestamp",
    ()=>isUnixTimestamp,
    "lamports",
    ()=>lamports,
    "mainnet",
    ()=>mainnet,
    "stringifiedBigInt",
    ()=>stringifiedBigInt,
    "stringifiedNumber",
    ()=>stringifiedNumber,
    "testnet",
    ()=>testnet,
    "unixTimestamp",
    ()=>unixTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/blockhash.ts
function isBlockhash(putativeBlockhash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(putativeBlockhash);
}
function assertIsBlockhash(putativeBlockhash) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsAddress"])(putativeBlockhash);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE"], error.context);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH"], error.context);
        }
        throw error;
    }
}
function blockhash(putativeBlockhash) {
    assertIsBlockhash(putativeBlockhash);
    return putativeBlockhash;
}
function getBlockhashEncoder() {
    const addressEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 32,
        write: (value, bytes, offset)=>{
            assertIsBlockhash(value);
            return addressEncoder.write(value, bytes, offset);
        }
    });
}
function getBlockhashDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])();
}
function getBlockhashCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBlockhashEncoder(), getBlockhashDecoder());
}
function getBlockhashComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/cluster-url.ts
function mainnet(putativeString) {
    return putativeString;
}
function devnet(putativeString) {
    return putativeString;
}
function testnet(putativeString) {
    return putativeString;
}
function getCommitmentScore(commitment) {
    switch(commitment){
        case "finalized":
            return 2;
        case "confirmed":
            return 1;
        case "processed":
            return 0;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE"], {
                unexpectedValue: commitment
            });
    }
}
function commitmentComparator(a, b) {
    if (a === b) {
        return 0;
    }
    return getCommitmentScore(a) < getCommitmentScore(b) ? -1 : 1;
}
var maxU64Value = 18446744073709551615n;
var memoizedU64Encoder;
var memoizedU64Decoder;
function getMemoizedU64Encoder() {
    if (!memoizedU64Encoder) memoizedU64Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])();
    return memoizedU64Encoder;
}
function getMemoizedU64Decoder() {
    if (!memoizedU64Decoder) memoizedU64Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])();
    return memoizedU64Decoder;
}
function isLamports(putativeLamports) {
    return putativeLamports >= 0 && putativeLamports <= maxU64Value;
}
function assertIsLamports(putativeLamports) {
    if (putativeLamports < 0 || putativeLamports > maxU64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE"]);
    }
}
function lamports(putativeLamports) {
    assertIsLamports(putativeLamports);
    return putativeLamports;
}
function getDefaultLamportsEncoder() {
    return getLamportsEncoder(getMemoizedU64Encoder());
}
function getLamportsEncoder(innerEncoder) {
    return innerEncoder;
}
function getDefaultLamportsDecoder() {
    return getLamportsDecoder(getMemoizedU64Decoder());
}
function getLamportsDecoder(innerDecoder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(innerDecoder, (value)=>lamports(typeof value === "bigint" ? value : BigInt(value)));
}
function getDefaultLamportsCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDefaultLamportsEncoder(), getDefaultLamportsDecoder());
}
function getLamportsCodec(innerCodec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLamportsEncoder(innerCodec), getLamportsDecoder(innerCodec));
}
function isStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
        return true;
    } catch  {
        return false;
    }
}
function assertIsStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_BIGINT_STRING"], {
            value: putativeBigInt
        });
    }
}
function stringifiedBigInt(putativeBigInt) {
    assertIsStringifiedBigInt(putativeBigInt);
    return putativeBigInt;
}
function isStringifiedNumber(putativeNumber) {
    return !Number.isNaN(Number(putativeNumber));
}
function assertIsStringifiedNumber(putativeNumber) {
    if (Number.isNaN(Number(putativeNumber))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_NUMBER_STRING"], {
            value: putativeNumber
        });
    }
}
function stringifiedNumber(putativeNumber) {
    assertIsStringifiedNumber(putativeNumber);
    return putativeNumber;
}
var maxI64Value = 9223372036854775807n;
var minI64Value = -9223372036854775808n;
function isUnixTimestamp(putativeTimestamp) {
    return putativeTimestamp >= minI64Value && putativeTimestamp <= maxI64Value;
}
function assertIsUnixTimestamp(putativeTimestamp) {
    if (putativeTimestamp < minI64Value || putativeTimestamp > maxI64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE"], {
            value: putativeTimestamp
        });
    }
}
function unixTimestamp(putativeTimestamp) {
    assertIsUnixTimestamp(putativeTimestamp);
    return putativeTimestamp;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsBlockhash",
    ()=>assertIsBlockhash,
    "assertIsLamports",
    ()=>assertIsLamports,
    "assertIsStringifiedBigInt",
    ()=>assertIsStringifiedBigInt,
    "assertIsStringifiedNumber",
    ()=>assertIsStringifiedNumber,
    "assertIsUnixTimestamp",
    ()=>assertIsUnixTimestamp,
    "blockhash",
    ()=>blockhash,
    "commitmentComparator",
    ()=>commitmentComparator,
    "devnet",
    ()=>devnet,
    "getBlockhashCodec",
    ()=>getBlockhashCodec,
    "getBlockhashComparator",
    ()=>getBlockhashComparator,
    "getBlockhashDecoder",
    ()=>getBlockhashDecoder,
    "getBlockhashEncoder",
    ()=>getBlockhashEncoder,
    "getDefaultLamportsCodec",
    ()=>getDefaultLamportsCodec,
    "getDefaultLamportsDecoder",
    ()=>getDefaultLamportsDecoder,
    "getDefaultLamportsEncoder",
    ()=>getDefaultLamportsEncoder,
    "getLamportsCodec",
    ()=>getLamportsCodec,
    "getLamportsDecoder",
    ()=>getLamportsDecoder,
    "getLamportsEncoder",
    ()=>getLamportsEncoder,
    "isBlockhash",
    ()=>isBlockhash,
    "isLamports",
    ()=>isLamports,
    "isStringifiedBigInt",
    ()=>isStringifiedBigInt,
    "isStringifiedNumber",
    ()=>isStringifiedNumber,
    "isUnixTimestamp",
    ()=>isUnixTimestamp,
    "lamports",
    ()=>lamports,
    "mainnet",
    ()=>mainnet,
    "stringifiedBigInt",
    ()=>stringifiedBigInt,
    "stringifiedNumber",
    ()=>stringifiedNumber,
    "testnet",
    ()=>testnet,
    "unixTimestamp",
    ()=>unixTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/blockhash.ts
function isBlockhash(putativeBlockhash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(putativeBlockhash);
}
function assertIsBlockhash(putativeBlockhash) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsAddress"])(putativeBlockhash);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE"], error.context);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH"], error.context);
        }
        throw error;
    }
}
function blockhash(putativeBlockhash) {
    assertIsBlockhash(putativeBlockhash);
    return putativeBlockhash;
}
function getBlockhashEncoder() {
    const addressEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 32,
        write: (value, bytes, offset)=>{
            assertIsBlockhash(value);
            return addressEncoder.write(value, bytes, offset);
        }
    });
}
function getBlockhashDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])();
}
function getBlockhashCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBlockhashEncoder(), getBlockhashDecoder());
}
function getBlockhashComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/cluster-url.ts
function mainnet(putativeString) {
    return putativeString;
}
function devnet(putativeString) {
    return putativeString;
}
function testnet(putativeString) {
    return putativeString;
}
function getCommitmentScore(commitment) {
    switch(commitment){
        case "finalized":
            return 2;
        case "confirmed":
            return 1;
        case "processed":
            return 0;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE"], {
                unexpectedValue: commitment
            });
    }
}
function commitmentComparator(a, b) {
    if (a === b) {
        return 0;
    }
    return getCommitmentScore(a) < getCommitmentScore(b) ? -1 : 1;
}
var maxU64Value = 18446744073709551615n;
var memoizedU64Encoder;
var memoizedU64Decoder;
function getMemoizedU64Encoder() {
    if (!memoizedU64Encoder) memoizedU64Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])();
    return memoizedU64Encoder;
}
function getMemoizedU64Decoder() {
    if (!memoizedU64Decoder) memoizedU64Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])();
    return memoizedU64Decoder;
}
function isLamports(putativeLamports) {
    return putativeLamports >= 0 && putativeLamports <= maxU64Value;
}
function assertIsLamports(putativeLamports) {
    if (putativeLamports < 0 || putativeLamports > maxU64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE"]);
    }
}
function lamports(putativeLamports) {
    assertIsLamports(putativeLamports);
    return putativeLamports;
}
function getDefaultLamportsEncoder() {
    return getLamportsEncoder(getMemoizedU64Encoder());
}
function getLamportsEncoder(innerEncoder) {
    return innerEncoder;
}
function getDefaultLamportsDecoder() {
    return getLamportsDecoder(getMemoizedU64Decoder());
}
function getLamportsDecoder(innerDecoder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(innerDecoder, (value)=>lamports(typeof value === "bigint" ? value : BigInt(value)));
}
function getDefaultLamportsCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDefaultLamportsEncoder(), getDefaultLamportsDecoder());
}
function getLamportsCodec(innerCodec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLamportsEncoder(innerCodec), getLamportsDecoder(innerCodec));
}
function isStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
        return true;
    } catch  {
        return false;
    }
}
function assertIsStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_BIGINT_STRING"], {
            value: putativeBigInt
        });
    }
}
function stringifiedBigInt(putativeBigInt) {
    assertIsStringifiedBigInt(putativeBigInt);
    return putativeBigInt;
}
function isStringifiedNumber(putativeNumber) {
    return !Number.isNaN(Number(putativeNumber));
}
function assertIsStringifiedNumber(putativeNumber) {
    if (Number.isNaN(Number(putativeNumber))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_NUMBER_STRING"], {
            value: putativeNumber
        });
    }
}
function stringifiedNumber(putativeNumber) {
    assertIsStringifiedNumber(putativeNumber);
    return putativeNumber;
}
var maxI64Value = 9223372036854775807n;
var minI64Value = -9223372036854775808n;
function isUnixTimestamp(putativeTimestamp) {
    return putativeTimestamp >= minI64Value && putativeTimestamp <= maxI64Value;
}
function assertIsUnixTimestamp(putativeTimestamp) {
    if (putativeTimestamp < minI64Value || putativeTimestamp > maxI64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE"], {
            value: putativeTimestamp
        });
    }
}
function unixTimestamp(putativeTimestamp) {
    assertIsUnixTimestamp(putativeTimestamp);
    return putativeTimestamp;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountRole",
    ()=>AccountRole,
    "assertIsInstructionForProgram",
    ()=>assertIsInstructionForProgram,
    "assertIsInstructionWithAccounts",
    ()=>assertIsInstructionWithAccounts,
    "assertIsInstructionWithData",
    ()=>assertIsInstructionWithData,
    "downgradeRoleToNonSigner",
    ()=>downgradeRoleToNonSigner,
    "downgradeRoleToReadonly",
    ()=>downgradeRoleToReadonly,
    "isInstructionForProgram",
    ()=>isInstructionForProgram,
    "isInstructionWithAccounts",
    ()=>isInstructionWithAccounts,
    "isInstructionWithData",
    ()=>isInstructionWithData,
    "isSignerRole",
    ()=>isSignerRole,
    "isWritableRole",
    ()=>isWritableRole,
    "mergeRoles",
    ()=>mergeRoles,
    "upgradeRoleToSigner",
    ()=>upgradeRoleToSigner,
    "upgradeRoleToWritable",
    ()=>upgradeRoleToWritable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/instruction.ts
function isInstructionForProgram(instruction, programAddress) {
    return instruction.programAddress === programAddress;
}
function assertIsInstructionForProgram(instruction, programAddress) {
    if (instruction.programAddress !== programAddress) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH"], {
            actualProgramAddress: instruction.programAddress,
            expectedProgramAddress: programAddress
        });
    }
}
function isInstructionWithAccounts(instruction) {
    return instruction.accounts !== void 0;
}
function assertIsInstructionWithAccounts(instruction) {
    if (instruction.accounts === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS"], {
            data: instruction.data,
            programAddress: instruction.programAddress
        });
    }
}
function isInstructionWithData(instruction) {
    return instruction.data !== void 0;
}
function assertIsInstructionWithData(instruction) {
    if (instruction.data === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA"], {
            accountAddresses: instruction.accounts?.map((a)=>a.address),
            programAddress: instruction.programAddress
        });
    }
}
// src/roles.ts
var AccountRole = /* @__PURE__ */ ((AccountRole2)=>{
    AccountRole2[AccountRole2["WRITABLE_SIGNER"] = /* 3 */ 3] = "WRITABLE_SIGNER";
    AccountRole2[AccountRole2["READONLY_SIGNER"] = /* 2 */ 2] = "READONLY_SIGNER";
    AccountRole2[AccountRole2["WRITABLE"] = /* 1 */ 1] = "WRITABLE";
    AccountRole2[AccountRole2["READONLY"] = /* 0 */ 0] = "READONLY";
    return AccountRole2;
})(AccountRole || {});
var IS_SIGNER_BITMASK = 2;
var IS_WRITABLE_BITMASK = 1;
function downgradeRoleToNonSigner(role) {
    return role & -3;
}
function downgradeRoleToReadonly(role) {
    return role & -2;
}
function isSignerRole(role) {
    return role >= 2 /* READONLY_SIGNER */ ;
}
function isWritableRole(role) {
    return (role & IS_WRITABLE_BITMASK) !== 0;
}
function mergeRoles(roleA, roleB) {
    return roleA | roleB;
}
function upgradeRoleToSigner(role) {
    return role | IS_SIGNER_BITMASK;
}
function upgradeRoleToWritable(role) {
    return role | IS_WRITABLE_BITMASK;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountRole",
    ()=>AccountRole,
    "assertIsInstructionForProgram",
    ()=>assertIsInstructionForProgram,
    "assertIsInstructionWithAccounts",
    ()=>assertIsInstructionWithAccounts,
    "assertIsInstructionWithData",
    ()=>assertIsInstructionWithData,
    "downgradeRoleToNonSigner",
    ()=>downgradeRoleToNonSigner,
    "downgradeRoleToReadonly",
    ()=>downgradeRoleToReadonly,
    "isInstructionForProgram",
    ()=>isInstructionForProgram,
    "isInstructionWithAccounts",
    ()=>isInstructionWithAccounts,
    "isInstructionWithData",
    ()=>isInstructionWithData,
    "isSignerRole",
    ()=>isSignerRole,
    "isWritableRole",
    ()=>isWritableRole,
    "mergeRoles",
    ()=>mergeRoles,
    "upgradeRoleToSigner",
    ()=>upgradeRoleToSigner,
    "upgradeRoleToWritable",
    ()=>upgradeRoleToWritable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/instructions/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/instruction.ts
function isInstructionForProgram(instruction, programAddress) {
    return instruction.programAddress === programAddress;
}
function assertIsInstructionForProgram(instruction, programAddress) {
    if (instruction.programAddress !== programAddress) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH"], {
            actualProgramAddress: instruction.programAddress,
            expectedProgramAddress: programAddress
        });
    }
}
function isInstructionWithAccounts(instruction) {
    return instruction.accounts !== void 0;
}
function assertIsInstructionWithAccounts(instruction) {
    if (instruction.accounts === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS"], {
            data: instruction.data,
            programAddress: instruction.programAddress
        });
    }
}
function isInstructionWithData(instruction) {
    return instruction.data !== void 0;
}
function assertIsInstructionWithData(instruction) {
    if (instruction.data === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA"], {
            accountAddresses: instruction.accounts?.map((a)=>a.address),
            programAddress: instruction.programAddress
        });
    }
}
// src/roles.ts
var AccountRole = /* @__PURE__ */ ((AccountRole2)=>{
    AccountRole2[AccountRole2["WRITABLE_SIGNER"] = /* 3 */ 3] = "WRITABLE_SIGNER";
    AccountRole2[AccountRole2["READONLY_SIGNER"] = /* 2 */ 2] = "READONLY_SIGNER";
    AccountRole2[AccountRole2["WRITABLE"] = /* 1 */ 1] = "WRITABLE";
    AccountRole2[AccountRole2["READONLY"] = /* 0 */ 0] = "READONLY";
    return AccountRole2;
})(AccountRole || {});
var IS_SIGNER_BITMASK = 2;
var IS_WRITABLE_BITMASK = 1;
function downgradeRoleToNonSigner(role) {
    return role & -3;
}
function downgradeRoleToReadonly(role) {
    return role & -2;
}
function isSignerRole(role) {
    return role >= 2 /* READONLY_SIGNER */ ;
}
function isWritableRole(role) {
    return (role & IS_WRITABLE_BITMASK) !== 0;
}
function mergeRoles(roleA, roleB) {
    return roleA | roleB;
}
function upgradeRoleToSigner(role) {
    return role | IS_SIGNER_BITMASK;
}
function upgradeRoleToWritable(role) {
    return role | IS_WRITABLE_BITMASK;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/pipe.ts
__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
function pipe(init, ...fns) {
    return fns.reduce((acc, fn)=>fn(acc), init);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/pipe.ts
__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
function pipe(init, ...fns) {
    return fns.reduce((acc, fn)=>fn(acc), init);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsSignature",
    ()=>assertIsSignature,
    "createKeyPairFromBytes",
    ()=>createKeyPairFromBytes,
    "createKeyPairFromPrivateKeyBytes",
    ()=>createKeyPairFromPrivateKeyBytes,
    "createPrivateKeyFromBytes",
    ()=>createPrivateKeyFromBytes,
    "generateKeyPair",
    ()=>generateKeyPair,
    "getPublicKeyFromPrivateKey",
    ()=>getPublicKeyFromPrivateKey,
    "isSignature",
    ()=>isSignature,
    "signBytes",
    ()=>signBytes,
    "signature",
    ()=>signature,
    "verifySignature",
    ()=>verifySignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/key-pair.ts
// src/algorithm.ts
var ED25519_ALGORITHM_IDENTIFIER = // Resist the temptation to convert this to a simple string; As of version 133.0.3, Firefox
// requires the object form of `AlgorithmIdentifier` and will throw a `DOMException` otherwise.
Object.freeze({
    name: "Ed25519"
});
function addPkcs8Header(bytes) {
    return new Uint8Array([
        /**
     * PKCS#8 header
     */ 48,
        // ASN.1 sequence tag
        46,
        // Length of sequence (46 more bytes)
        2,
        // ASN.1 integer tag
        1,
        // Length of integer
        0,
        // Version number
        48,
        // ASN.1 sequence tag
        5,
        // Length of sequence
        6,
        // ASN.1 object identifier tag
        3,
        // Length of object identifier
        // Edwards curve algorithms identifier https://oid-rep.orange-labs.fr/get/1.3.101.112
        43,
        // iso(1) / identified-organization(3) (The first node is multiplied by the decimal 40 and the result is added to the value of the second node)
        101,
        // thawte(101)
        // Ed25519 identifier
        112,
        // id-Ed25519(112)
        /**
     * Private key payload
     */ 4,
        // ASN.1 octet string tag
        34,
        // String length (34 more bytes)
        // Private key bytes as octet string
        4,
        // ASN.1 octet string tag
        32,
        // String length (32 bytes)
        ...bytes
    ]);
}
async function createPrivateKeyFromBytes(bytes, extractable = false) {
    const actualLength = bytes.byteLength;
    if (actualLength !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH"], {
            actualLength
        });
    }
    const privateKeyBytesPkcs8 = addPkcs8Header(bytes);
    return await crypto.subtle.importKey("pkcs8", privateKeyBytesPkcs8, ED25519_ALGORITHM_IDENTIFIER, extractable, [
        "sign"
    ]);
}
async function getPublicKeyFromPrivateKey(privateKey, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (privateKey.extractable === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY"], {
            key: privateKey
        });
    }
    const jwk = await crypto.subtle.exportKey("jwk", privateKey);
    return await crypto.subtle.importKey("jwk", {
        crv: "Ed25519",
        ext: extractable,
        key_ops: [
            "verify"
        ],
        kty: "OKP",
        x: jwk.x
    }, "Ed25519", extractable, [
        "verify"
    ]);
}
var base58Encoder;
function assertIsSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeSignature.length
        });
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function isSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        return false;
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        return false;
    }
    return true;
}
async function signBytes(key, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSigningCapabilityIsAvailable"])();
    const signedData = await crypto.subtle.sign(ED25519_ALGORITHM_IDENTIFIER, key, data);
    return new Uint8Array(signedData);
}
function signature(putativeSignature) {
    assertIsSignature(putativeSignature);
    return putativeSignature;
}
async function verifySignature(key, signature2, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertVerificationCapabilityIsAvailable"])();
    return await crypto.subtle.verify(ED25519_ALGORITHM_IDENTIFIER, key, signature2, data);
}
// src/key-pair.ts
async function generateKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    const keyPair = await crypto.subtle.generateKey(/* algorithm */ ED25519_ALGORITHM_IDENTIFIER, // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ false, // Prevents the bytes of the private key from being visible to JS.
    /* allowed uses */ [
        "sign",
        "verify"
    ]);
    return keyPair;
}
async function createKeyPairFromBytes(bytes, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPRNGIsAvailable"])();
    if (bytes.byteLength !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH"], {
            byteLength: bytes.byteLength
        });
    }
    const [publicKey, privateKey] = await Promise.all([
        crypto.subtle.importKey("raw", bytes.slice(32), ED25519_ALGORITHM_IDENTIFIER, /* extractable */ true, [
            "verify"
        ]),
        createPrivateKeyFromBytes(bytes.slice(0, 32), extractable)
    ]);
    const randomBytes = new Uint8Array(32);
    crypto.getRandomValues(randomBytes);
    const signedData = await signBytes(privateKey, randomBytes);
    const isValid = await verifySignature(publicKey, signedData, randomBytes);
    if (!isValid) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY"]);
    }
    return {
        privateKey,
        publicKey
    };
}
async function createKeyPairFromPrivateKeyBytes(bytes, extractable = false) {
    const privateKeyPromise = createPrivateKeyFromBytes(bytes, extractable);
    const [publicKey, privateKey] = await Promise.all([
        // This nested promise makes things efficient by
        // creating the public key in parallel with the
        // second private key creation, if it is needed.
        (extractable ? privateKeyPromise : createPrivateKeyFromBytes(bytes, true)).then(async (privateKey2)=>await getPublicKeyFromPrivateKey(privateKey2, true)),
        privateKeyPromise
    ]);
    return {
        privateKey,
        publicKey
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsSignature",
    ()=>assertIsSignature,
    "createKeyPairFromBytes",
    ()=>createKeyPairFromBytes,
    "createKeyPairFromPrivateKeyBytes",
    ()=>createKeyPairFromPrivateKeyBytes,
    "createPrivateKeyFromBytes",
    ()=>createPrivateKeyFromBytes,
    "generateKeyPair",
    ()=>generateKeyPair,
    "getPublicKeyFromPrivateKey",
    ()=>getPublicKeyFromPrivateKey,
    "isSignature",
    ()=>isSignature,
    "signBytes",
    ()=>signBytes,
    "signature",
    ()=>signature,
    "verifySignature",
    ()=>verifySignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/key-pair.ts
// src/algorithm.ts
var ED25519_ALGORITHM_IDENTIFIER = // Resist the temptation to convert this to a simple string; As of version 133.0.3, Firefox
// requires the object form of `AlgorithmIdentifier` and will throw a `DOMException` otherwise.
Object.freeze({
    name: "Ed25519"
});
function addPkcs8Header(bytes) {
    return new Uint8Array([
        /**
     * PKCS#8 header
     */ 48,
        // ASN.1 sequence tag
        46,
        // Length of sequence (46 more bytes)
        2,
        // ASN.1 integer tag
        1,
        // Length of integer
        0,
        // Version number
        48,
        // ASN.1 sequence tag
        5,
        // Length of sequence
        6,
        // ASN.1 object identifier tag
        3,
        // Length of object identifier
        // Edwards curve algorithms identifier https://oid-rep.orange-labs.fr/get/1.3.101.112
        43,
        // iso(1) / identified-organization(3) (The first node is multiplied by the decimal 40 and the result is added to the value of the second node)
        101,
        // thawte(101)
        // Ed25519 identifier
        112,
        // id-Ed25519(112)
        /**
     * Private key payload
     */ 4,
        // ASN.1 octet string tag
        34,
        // String length (34 more bytes)
        // Private key bytes as octet string
        4,
        // ASN.1 octet string tag
        32,
        // String length (32 bytes)
        ...bytes
    ]);
}
async function createPrivateKeyFromBytes(bytes, extractable = false) {
    const actualLength = bytes.byteLength;
    if (actualLength !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH"], {
            actualLength
        });
    }
    const privateKeyBytesPkcs8 = addPkcs8Header(bytes);
    return await crypto.subtle.importKey("pkcs8", privateKeyBytesPkcs8, ED25519_ALGORITHM_IDENTIFIER, extractable, [
        "sign"
    ]);
}
async function getPublicKeyFromPrivateKey(privateKey, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (privateKey.extractable === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY"], {
            key: privateKey
        });
    }
    const jwk = await crypto.subtle.exportKey("jwk", privateKey);
    return await crypto.subtle.importKey("jwk", {
        crv: "Ed25519",
        ext: extractable,
        key_ops: [
            "verify"
        ],
        kty: "OKP",
        x: jwk.x
    }, "Ed25519", extractable, [
        "verify"
    ]);
}
var base58Encoder;
function assertIsSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeSignature.length
        });
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function isSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        return false;
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        return false;
    }
    return true;
}
async function signBytes(key, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSigningCapabilityIsAvailable"])();
    const signedData = await crypto.subtle.sign(ED25519_ALGORITHM_IDENTIFIER, key, data);
    return new Uint8Array(signedData);
}
function signature(putativeSignature) {
    assertIsSignature(putativeSignature);
    return putativeSignature;
}
async function verifySignature(key, signature2, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertVerificationCapabilityIsAvailable"])();
    return await crypto.subtle.verify(ED25519_ALGORITHM_IDENTIFIER, key, signature2, data);
}
// src/key-pair.ts
async function generateKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    const keyPair = await crypto.subtle.generateKey(/* algorithm */ ED25519_ALGORITHM_IDENTIFIER, // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ false, // Prevents the bytes of the private key from being visible to JS.
    /* allowed uses */ [
        "sign",
        "verify"
    ]);
    return keyPair;
}
async function createKeyPairFromBytes(bytes, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPRNGIsAvailable"])();
    if (bytes.byteLength !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH"], {
            byteLength: bytes.byteLength
        });
    }
    const [publicKey, privateKey] = await Promise.all([
        crypto.subtle.importKey("raw", bytes.slice(32), ED25519_ALGORITHM_IDENTIFIER, /* extractable */ true, [
            "verify"
        ]),
        createPrivateKeyFromBytes(bytes.slice(0, 32), extractable)
    ]);
    const randomBytes = new Uint8Array(32);
    crypto.getRandomValues(randomBytes);
    const signedData = await signBytes(privateKey, randomBytes);
    const isValid = await verifySignature(publicKey, signedData, randomBytes);
    if (!isValid) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY"]);
    }
    return {
        privateKey,
        publicKey
    };
}
async function createKeyPairFromPrivateKeyBytes(bytes, extractable = false) {
    const privateKeyPromise = createPrivateKeyFromBytes(bytes, extractable);
    const [publicKey, privateKey] = await Promise.all([
        // This nested promise makes things efficient by
        // creating the public key in parallel with the
        // second private key creation, if it is needed.
        (extractable ? privateKeyPromise : createPrivateKeyFromBytes(bytes, true)).then(async (privateKey2)=>await getPublicKeyFromPrivateKey(privateKey2, true)),
        privateKeyPromise
    ]);
    return {
        privateKey,
        publicKey
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_PACKET_HEADER",
    ()=>TRANSACTION_PACKET_HEADER,
    "TRANSACTION_PACKET_SIZE",
    ()=>TRANSACTION_PACKET_SIZE,
    "TRANSACTION_SIZE_LIMIT",
    ()=>TRANSACTION_SIZE_LIMIT,
    "assertIsFullySignedTransaction",
    ()=>assertIsFullySignedTransaction,
    "assertIsSendableTransaction",
    ()=>assertIsSendableTransaction,
    "assertIsTransactionMessageWithinSizeLimit",
    ()=>assertIsTransactionMessageWithinSizeLimit,
    "assertIsTransactionWithinSizeLimit",
    ()=>assertIsTransactionWithinSizeLimit,
    "compileTransaction",
    ()=>compileTransaction,
    "getBase64EncodedWireTransaction",
    ()=>getBase64EncodedWireTransaction,
    "getSignatureFromTransaction",
    ()=>getSignatureFromTransaction,
    "getTransactionCodec",
    ()=>getTransactionCodec,
    "getTransactionDecoder",
    ()=>getTransactionDecoder,
    "getTransactionEncoder",
    ()=>getTransactionEncoder,
    "getTransactionMessageSize",
    ()=>getTransactionMessageSize,
    "getTransactionSize",
    ()=>getTransactionSize,
    "isFullySignedTransaction",
    ()=>isFullySignedTransaction,
    "isSendableTransaction",
    ()=>isSendableTransaction,
    "isTransactionMessageWithinSizeLimit",
    ()=>isTransactionMessageWithinSizeLimit,
    "isTransactionWithinSizeLimit",
    ()=>isTransactionWithinSizeLimit,
    "partiallySignTransaction",
    ()=>partiallySignTransaction,
    "signTransaction",
    ()=>signTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// src/codecs/transaction-codec.ts
function getSignaturesToEncode(signaturesMap) {
    const signatures = Object.values(signaturesMap);
    if (signatures.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES"]);
    }
    return signatures.map((signature)=>{
        if (!signature) {
            return new Uint8Array(64).fill(0);
        }
        return signature;
    });
}
function getSignaturesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 64), {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
    }), getSignaturesToEncode);
}
// src/codecs/transaction-codec.ts
function getTransactionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "signatures",
            getSignaturesEncoder()
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])()
        ]
    ]);
}
function getTransactionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "signatures",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])(), 64), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
            })
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])()
        ]
    ]), decodePartiallyDecodedTransaction);
}
function getTransactionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransactionEncoder(), getTransactionDecoder());
}
function decodePartiallyDecodedTransaction(transaction) {
    const { messageBytes, signatures } = transaction;
    const signerAddressesDecoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
        // read transaction version
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionVersionDecoder"])(),
        // read first byte of header, `numSignerAccounts`
        // padRight to skip the next 2 bytes, `numReadOnlySignedAccounts` and `numReadOnlyUnsignedAccounts` which we don't need
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRightDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), 2),
        // read static addresses
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
        })
    ]);
    const [_txVersion, numRequiredSignatures, staticAddresses] = signerAddressesDecoder.decode(messageBytes);
    const signerAddresses = staticAddresses.slice(0, numRequiredSignatures);
    if (signerAddresses.length !== signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH"], {
            numRequiredSignatures,
            signaturesLength: signatures.length,
            signerAddresses
        });
    }
    const signaturesMap = {};
    signerAddresses.forEach((address, index)=>{
        const signatureForAddress = signatures[index];
        if (signatureForAddress.every((b)=>b === 0)) {
            signaturesMap[address] = null;
        } else {
            signaturesMap[address] = signatureForAddress;
        }
    });
    return {
        messageBytes,
        signatures: Object.freeze(signaturesMap)
    };
}
function compileTransaction(transactionMessage) {
    const compiledMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransactionMessage"])(transactionMessage);
    const messageBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompiledTransactionMessageEncoder"])().encode(compiledMessage);
    const transactionSigners = compiledMessage.staticAccounts.slice(0, compiledMessage.header.numSignerAccounts);
    const signatures = {};
    for (const signerAddress of transactionSigners){
        signatures[signerAddress] = null;
    }
    let lifetimeConstraint;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithBlockhashLifetime"])(transactionMessage)) {
        lifetimeConstraint = {
            blockhash: transactionMessage.lifetimeConstraint.blockhash,
            lastValidBlockHeight: transactionMessage.lifetimeConstraint.lastValidBlockHeight
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithDurableNonceLifetime"])(transactionMessage)) {
        lifetimeConstraint = {
            nonce: transactionMessage.lifetimeConstraint.nonce,
            nonceAccountAddress: transactionMessage.instructions[0].accounts[0].address
        };
    }
    return Object.freeze({
        ...lifetimeConstraint ? {
            lifetimeConstraint
        } : void 0,
        messageBytes,
        signatures: Object.freeze(signatures)
    });
}
var base58Decoder;
function getSignatureFromTransaction(transaction) {
    if (!base58Decoder) base58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    const signatureBytes = Object.values(transaction.signatures)[0];
    if (!signatureBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING"]);
    }
    const transactionSignature = base58Decoder.decode(signatureBytes);
    return transactionSignature;
}
function uint8ArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index)=>value === arr2[index]);
}
async function partiallySignTransaction(keyPairs, transaction) {
    let newSignatures;
    let unexpectedSigners;
    await Promise.all(keyPairs.map(async (keyPair)=>{
        const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressFromPublicKey"])(keyPair.publicKey);
        const existingSignature = transaction.signatures[address];
        if (existingSignature === void 0) {
            unexpectedSigners ||= /* @__PURE__ */ new Set();
            unexpectedSigners.add(address);
            return;
        }
        if (unexpectedSigners) {
            return;
        }
        const newSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signBytes"])(keyPair.privateKey, transaction.messageBytes);
        if (existingSignature !== null && uint8ArraysEqual(newSignature, existingSignature)) {
            return;
        }
        newSignatures ||= {};
        newSignatures[address] = newSignature;
    }));
    if (unexpectedSigners && unexpectedSigners.size > 0) {
        const expectedSigners = Object.keys(transaction.signatures);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION"], {
            expectedAddresses: expectedSigners,
            unexpectedAddresses: [
                ...unexpectedSigners
            ]
        });
    }
    if (!newSignatures) {
        return transaction;
    }
    return Object.freeze({
        ...transaction,
        signatures: Object.freeze({
            ...transaction.signatures,
            ...newSignatures
        })
    });
}
async function signTransaction(keyPairs, transaction) {
    const out = await partiallySignTransaction(keyPairs, transaction);
    assertIsFullySignedTransaction(out);
    Object.freeze(out);
    return out;
}
function isFullySignedTransaction(transaction) {
    return Object.entries(transaction.signatures).every(([_, signatureBytes])=>!!signatureBytes);
}
function assertIsFullySignedTransaction(transaction) {
    const missingSigs = [];
    Object.entries(transaction.signatures).forEach(([address, signatureBytes])=>{
        if (!signatureBytes) {
            missingSigs.push(address);
        }
    });
    if (missingSigs.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING"], {
            addresses: missingSigs
        });
    }
}
function getBase64EncodedWireTransaction(transaction) {
    const wireTransactionBytes = getTransactionEncoder().encode(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Decoder"])().decode(wireTransactionBytes);
}
var TRANSACTION_PACKET_SIZE = 1280;
var TRANSACTION_PACKET_HEADER = 40 + 8;
var TRANSACTION_SIZE_LIMIT = TRANSACTION_PACKET_SIZE - TRANSACTION_PACKET_HEADER;
function getTransactionSize(transaction) {
    return getTransactionEncoder().getSizeFromValue(transaction);
}
function isTransactionWithinSizeLimit(transaction) {
    return getTransactionSize(transaction) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionWithinSizeLimit(transaction) {
    const transactionSize = getTransactionSize(transaction);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
// src/sendable-transaction.ts
function isSendableTransaction(transaction) {
    return isFullySignedTransaction(transaction) && isTransactionWithinSizeLimit(transaction);
}
function assertIsSendableTransaction(transaction) {
    assertIsFullySignedTransaction(transaction);
    assertIsTransactionWithinSizeLimit(transaction);
}
function getTransactionMessageSize(transactionMessage) {
    return getTransactionSize(compileTransaction(transactionMessage));
}
function isTransactionMessageWithinSizeLimit(transactionMessage) {
    return getTransactionMessageSize(transactionMessage) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionMessageWithinSizeLimit(transactionMessage) {
    const transactionSize = getTransactionMessageSize(transactionMessage);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_PACKET_HEADER",
    ()=>TRANSACTION_PACKET_HEADER,
    "TRANSACTION_PACKET_SIZE",
    ()=>TRANSACTION_PACKET_SIZE,
    "TRANSACTION_SIZE_LIMIT",
    ()=>TRANSACTION_SIZE_LIMIT,
    "assertIsFullySignedTransaction",
    ()=>assertIsFullySignedTransaction,
    "assertIsTransactionMessageWithinSizeLimit",
    ()=>assertIsTransactionMessageWithinSizeLimit,
    "assertIsTransactionWithinSizeLimit",
    ()=>assertIsTransactionWithinSizeLimit,
    "assertTransactionIsFullySigned",
    ()=>assertTransactionIsFullySigned,
    "compileTransaction",
    ()=>compileTransaction,
    "getBase64EncodedWireTransaction",
    ()=>getBase64EncodedWireTransaction,
    "getSignatureFromTransaction",
    ()=>getSignatureFromTransaction,
    "getTransactionCodec",
    ()=>getTransactionCodec,
    "getTransactionDecoder",
    ()=>getTransactionDecoder,
    "getTransactionEncoder",
    ()=>getTransactionEncoder,
    "getTransactionMessageSize",
    ()=>getTransactionMessageSize,
    "getTransactionSize",
    ()=>getTransactionSize,
    "isFullySignedTransaction",
    ()=>isFullySignedTransaction,
    "isTransactionMessageWithinSizeLimit",
    ()=>isTransactionMessageWithinSizeLimit,
    "isTransactionWithinSizeLimit",
    ()=>isTransactionWithinSizeLimit,
    "partiallySignTransaction",
    ()=>partiallySignTransaction,
    "signTransaction",
    ()=>signTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// src/codecs/transaction-codec.ts
function getSignaturesToEncode(signaturesMap) {
    const signatures = Object.values(signaturesMap);
    if (signatures.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES"]);
    }
    return signatures.map((signature)=>{
        if (!signature) {
            return new Uint8Array(64).fill(0);
        }
        return signature;
    });
}
function getSignaturesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 64), {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
    }), getSignaturesToEncode);
}
// src/codecs/transaction-codec.ts
function getTransactionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "signatures",
            getSignaturesEncoder()
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])()
        ]
    ]);
}
function getTransactionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "signatures",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])(), 64), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
            })
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])()
        ]
    ]), decodePartiallyDecodedTransaction);
}
function getTransactionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransactionEncoder(), getTransactionDecoder());
}
function decodePartiallyDecodedTransaction(transaction) {
    const { messageBytes, signatures } = transaction;
    const signerAddressesDecoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
        // read transaction version
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionVersionDecoder"])(),
        // read first byte of header, `numSignerAccounts`
        // padRight to skip the next 2 bytes, `numReadOnlySignedAccounts` and `numReadOnlyUnsignedAccounts` which we don't need
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRightDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), 2),
        // read static addresses
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
        })
    ]);
    const [_txVersion, numRequiredSignatures, staticAddresses] = signerAddressesDecoder.decode(messageBytes);
    const signerAddresses = staticAddresses.slice(0, numRequiredSignatures);
    if (signerAddresses.length !== signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH"], {
            numRequiredSignatures,
            signaturesLength: signatures.length,
            signerAddresses
        });
    }
    const signaturesMap = {};
    signerAddresses.forEach((address, index)=>{
        const signatureForAddress = signatures[index];
        if (signatureForAddress.every((b)=>b === 0)) {
            signaturesMap[address] = null;
        } else {
            signaturesMap[address] = signatureForAddress;
        }
    });
    return {
        messageBytes,
        signatures: Object.freeze(signaturesMap)
    };
}
function compileTransaction(transactionMessage) {
    const compiledMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransactionMessage"])(transactionMessage);
    const messageBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompiledTransactionMessageEncoder"])().encode(compiledMessage);
    const transactionSigners = compiledMessage.staticAccounts.slice(0, compiledMessage.header.numSignerAccounts);
    const signatures = {};
    for (const signerAddress of transactionSigners){
        signatures[signerAddress] = null;
    }
    let lifetimeConstraint;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithBlockhashLifetime"])(transactionMessage)) {
        lifetimeConstraint = {
            blockhash: transactionMessage.lifetimeConstraint.blockhash,
            lastValidBlockHeight: transactionMessage.lifetimeConstraint.lastValidBlockHeight
        };
    } else {
        lifetimeConstraint = {
            nonce: transactionMessage.lifetimeConstraint.nonce,
            nonceAccountAddress: transactionMessage.instructions[0].accounts[0].address
        };
    }
    return Object.freeze({
        lifetimeConstraint,
        messageBytes,
        signatures: Object.freeze(signatures)
    });
}
var base58Decoder;
function getSignatureFromTransaction(transaction) {
    if (!base58Decoder) base58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    const signatureBytes = Object.values(transaction.signatures)[0];
    if (!signatureBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING"]);
    }
    const transactionSignature = base58Decoder.decode(signatureBytes);
    return transactionSignature;
}
function uint8ArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index)=>value === arr2[index]);
}
async function partiallySignTransaction(keyPairs, transaction) {
    let newSignatures;
    let unexpectedSigners;
    await Promise.all(keyPairs.map(async (keyPair)=>{
        const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressFromPublicKey"])(keyPair.publicKey);
        const existingSignature = transaction.signatures[address];
        if (existingSignature === void 0) {
            unexpectedSigners ||= /* @__PURE__ */ new Set();
            unexpectedSigners.add(address);
            return;
        }
        if (unexpectedSigners) {
            return;
        }
        const newSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signBytes"])(keyPair.privateKey, transaction.messageBytes);
        if (existingSignature !== null && uint8ArraysEqual(newSignature, existingSignature)) {
            return;
        }
        newSignatures ||= {};
        newSignatures[address] = newSignature;
    }));
    if (unexpectedSigners && unexpectedSigners.size > 0) {
        const expectedSigners = Object.keys(transaction.signatures);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION"], {
            expectedAddresses: expectedSigners,
            unexpectedAddresses: [
                ...unexpectedSigners
            ]
        });
    }
    if (!newSignatures) {
        return transaction;
    }
    return Object.freeze({
        ...transaction,
        signatures: Object.freeze({
            ...transaction.signatures,
            ...newSignatures
        })
    });
}
async function signTransaction(keyPairs, transaction) {
    const out = await partiallySignTransaction(keyPairs, transaction);
    assertIsFullySignedTransaction(out);
    Object.freeze(out);
    return out;
}
function isFullySignedTransaction(transaction) {
    return Object.entries(transaction.signatures).every(([_, signatureBytes])=>!!signatureBytes);
}
function assertIsFullySignedTransaction(transaction) {
    const missingSigs = [];
    Object.entries(transaction.signatures).forEach(([address, signatureBytes])=>{
        if (!signatureBytes) {
            missingSigs.push(address);
        }
    });
    if (missingSigs.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING"], {
            addresses: missingSigs
        });
    }
}
function getBase64EncodedWireTransaction(transaction) {
    const wireTransactionBytes = getTransactionEncoder().encode(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Decoder"])().decode(wireTransactionBytes);
}
var TRANSACTION_PACKET_SIZE = 1280;
var TRANSACTION_PACKET_HEADER = 40 + 8;
var TRANSACTION_SIZE_LIMIT = TRANSACTION_PACKET_SIZE - TRANSACTION_PACKET_HEADER;
function getTransactionSize(transaction) {
    return getTransactionEncoder().getSizeFromValue(transaction);
}
function isTransactionWithinSizeLimit(transaction) {
    return getTransactionSize(transaction) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionWithinSizeLimit(transaction) {
    const transactionSize = getTransactionSize(transaction);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
// src/transaction-message-size.ts
function getTransactionMessageSize(transactionMessage) {
    return getTransactionSize(compileTransaction(transactionMessage));
}
function isTransactionMessageWithinSizeLimit(transactionMessage) {
    return getTransactionMessageSize(transactionMessage) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionMessageWithinSizeLimit(transactionMessage) {
    const transactionSize = getTransactionMessageSize(transactionMessage);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
// src/deprecated.ts
var assertTransactionIsFullySigned = assertIsFullySignedTransaction;
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/react/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSignAndSendTransaction",
    ()=>useSignAndSendTransaction,
    "useSignIn",
    ()=>useSignIn,
    "useSignMessage",
    ()=>useSignMessage,
    "useSignTransaction",
    ()=>useSignTransaction,
    "useWalletAccountMessageSigner",
    ()=>useWalletAccountMessageSigner,
    "useWalletAccountTransactionSendingSigner",
    ()=>useWalletAccountTransactionSendingSigner,
    "useWalletAccountTransactionSigner",
    ()=>useWalletAccountTransactionSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signAndSendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signIn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-features/lib/esm/signTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletAccountFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletAccountFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// src/useSignAndSendTransaction.ts
function useSignAndSendTransaction(uiWalletAccount, chain) {
    const signAndSendTransactions = useSignAndSendTransactions(uiWalletAccount, chain);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (input)=>{
        const [result] = await signAndSendTransactions(input);
        return result;
    }, [
        signAndSendTransactions
    ]);
}
function useSignAndSendTransactions(uiWalletAccount, chain) {
    if (!uiWalletAccount.chains.includes(chain)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED"], {
            address: uiWalletAccount.address,
            chain,
            featureName: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignAndSendTransaction"],
            supportedChains: [
                ...uiWalletAccount.chains
            ],
            supportedFeatures: [
                ...uiWalletAccount.features
            ]
        });
    }
    const signAndSendTransactionFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletAccountFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountFeature"])(uiWalletAccount, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignAndSendTransaction"]);
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletAccount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (...inputs)=>{
        const inputsWithChainAndAccount = inputs.map(({ options, ...rest })=>{
            const minContextSlot = options?.minContextSlot;
            return {
                ...rest,
                account,
                chain,
                ...minContextSlot != null ? {
                    options: {
                        minContextSlot: Number(minContextSlot)
                    }
                } : null
            };
        });
        const results = await signAndSendTransactionFeature.signAndSendTransaction(...inputsWithChainAndAccount);
        return results;
    }, [
        account,
        chain,
        signAndSendTransactionFeature
    ]);
}
function useSignIn(uiWalletHandle) {
    const signIns = useSignIns(uiWalletHandle);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (input)=>{
        const [result] = await signIns(input);
        return result;
    }, [
        signIns
    ]);
}
function useSignIns(uiWalletHandle) {
    let signMessageFeature;
    if ("address" in uiWalletHandle && typeof uiWalletHandle.address === "string") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletHandle);
        signMessageFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletAccountFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountFeature"])(uiWalletHandle, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignIn"]);
    } else {
        signMessageFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletFeature"])(uiWalletHandle, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signIn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignIn"]);
    }
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletHandle);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (...inputs)=>{
        const inputsWithAddressAndChainId = inputs.map((input)=>({
                ...input,
                // Prioritize the `UiWalletAccount` address if it exists.
                ..."address" in uiWalletHandle ? {
                    address: uiWalletHandle.address
                } : null
            }));
        const results = await signMessageFeature.signIn(...inputsWithAddressAndChainId);
        const resultsWithoutSignatureType = results.map(({ account, signatureType: _, // Solana signatures are always of type `ed25519` so drop this property.
        ...rest })=>({
                ...rest,
                account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(wallet, account)
            }));
        return resultsWithoutSignatureType;
    }, [
        signMessageFeature,
        uiWalletHandle,
        wallet
    ]);
}
function useSignMessage(...config) {
    const signMessages = useSignMessages(...config);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (input)=>{
        const [result] = await signMessages(input);
        return result;
    }, [
        signMessages
    ]);
}
function useSignMessages(uiWalletAccount) {
    const signMessageFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletAccountFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountFeature"])(uiWalletAccount, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignMessage"]);
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletAccount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (...inputs)=>{
        const inputsWithAccount = inputs.map((input)=>({
                ...input,
                account
            }));
        const results = await signMessageFeature.signMessage(...inputsWithAccount);
        const resultsWithoutSignatureType = results.map(({ signatureType: _, // Solana signatures are always of type `ed25519` so drop this property.
        ...rest })=>rest);
        return resultsWithoutSignatureType;
    }, [
        signMessageFeature,
        account
    ]);
}
function useSignTransaction(uiWalletAccount, chain) {
    const signTransactions = useSignTransactions(uiWalletAccount, chain);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (input)=>{
        const [result] = await signTransactions(input);
        return result;
    }, [
        signTransactions
    ]);
}
function useSignTransactions(uiWalletAccount, chain) {
    if (!uiWalletAccount.chains.includes(chain)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED"], {
            address: uiWalletAccount.address,
            chain,
            featureName: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignAndSendTransaction"],
            supportedChains: [
                ...uiWalletAccount.chains
            ],
            supportedFeatures: [
                ...uiWalletAccount.features
            ]
        });
    }
    const signTransactionFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletAccountFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountFeature"])(uiWalletAccount, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaSignTransaction"]);
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletAccount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (...inputs)=>{
        const inputsWithAccountAndChain = inputs.map(({ options, ...rest })=>{
            const minContextSlot = options?.minContextSlot;
            return {
                ...rest,
                account,
                chain,
                ...minContextSlot != null ? {
                    options: {
                        minContextSlot: Number(minContextSlot)
                    }
                } : null
            };
        });
        const results = await signTransactionFeature.signTransaction(...inputsWithAccountAndChain);
        return results;
    }, [
        signTransactionFeature,
        account,
        chain
    ]);
}
function useWalletAccountMessageSigner(uiWalletAccount) {
    const signMessage = useSignMessage(uiWalletAccount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["address"])(uiWalletAccount.address),
            async modifyAndSignMessages (messages, config) {
                config?.abortSignal?.throwIfAborted();
                if (messages.length > 1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED"]);
                }
                if (messages.length === 0) {
                    return messages;
                }
                const { content: originalMessage, signatures: originalSignatureMap } = messages[0];
                const input = {
                    message: originalMessage
                };
                const { signedMessage, signature } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbortablePromise"])(signMessage(input), config?.abortSignal);
                const messageWasModified = originalMessage.length !== signedMessage.length || originalMessage.some((originalByte, ii)=>originalByte !== signedMessage[ii]);
                const originalSignature = originalSignatureMap[uiWalletAccount.address];
                const signatureIsNew = !originalSignature?.every((originalByte, ii)=>originalByte === signature[ii]);
                if (!signatureIsNew && !messageWasModified) {
                    return messages;
                }
                const nextSignatureMap = messageWasModified ? {
                    [uiWalletAccount.address]: signature
                } : {
                    ...originalSignatureMap,
                    [uiWalletAccount.address]: signature
                };
                const outputMessages = Object.freeze([
                    Object.freeze({
                        content: signedMessage,
                        signatures: Object.freeze(nextSignatureMap)
                    })
                ]);
                return outputMessages;
            }
        }), [
        uiWalletAccount,
        signMessage
    ]);
}
function useWalletAccountTransactionSigner(uiWalletAccount, chain) {
    const encoderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const signTransaction = useSignTransaction(uiWalletAccount, chain);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["address"])(uiWalletAccount.address),
            async modifyAndSignTransactions (transactions, config = {}) {
                const { abortSignal, ...options } = config;
                abortSignal?.throwIfAborted();
                const transactionCodec = encoderRef.current ||= (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionCodec"])();
                if (transactions.length > 1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED"]);
                }
                if (transactions.length === 0) {
                    return transactions;
                }
                const [transaction] = transactions;
                const wireTransactionBytes = transactionCodec.encode(transaction);
                const inputWithOptions = {
                    ...options,
                    transaction: wireTransactionBytes
                };
                const { signedTransaction } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbortablePromise"])(signTransaction(inputWithOptions), abortSignal);
                const decodedSignedTransaction = transactionCodec.decode(signedTransaction);
                return Object.freeze([
                    decodedSignedTransaction
                ]);
            }
        }), [
        uiWalletAccount.address,
        signTransaction
    ]);
}
function useWalletAccountTransactionSendingSigner(uiWalletAccount, chain) {
    const encoderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const signAndSendTransaction = useSignAndSendTransaction(uiWalletAccount, chain);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["address"])(uiWalletAccount.address),
            async signAndSendTransactions (transactions, config = {}) {
                const { abortSignal, ...options } = config;
                abortSignal?.throwIfAborted();
                const transactionEncoder = encoderRef.current ||= (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionEncoder"])();
                if (transactions.length > 1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED"]);
                }
                if (transactions.length === 0) {
                    return [];
                }
                const [transaction] = transactions;
                const wireTransactionBytes = transactionEncoder.encode(transaction);
                const inputWithOptions = {
                    ...options,
                    transaction: wireTransactionBytes
                };
                const { signature } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbortablePromise"])(signAndSendTransaction(inputWithOptions), abortSignal);
                return Object.freeze([
                    signature
                ]);
            }
        }), [
        signAndSendTransaction,
        uiWalletAccount.address
    ]);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSignersToInstruction",
    ()=>addSignersToInstruction,
    "addSignersToTransactionMessage",
    ()=>addSignersToTransactionMessage,
    "assertIsKeyPairSigner",
    ()=>assertIsKeyPairSigner,
    "assertIsMessageModifyingSigner",
    ()=>assertIsMessageModifyingSigner,
    "assertIsMessagePartialSigner",
    ()=>assertIsMessagePartialSigner,
    "assertIsMessageSigner",
    ()=>assertIsMessageSigner,
    "assertIsTransactionMessageWithSingleSendingSigner",
    ()=>assertIsTransactionMessageWithSingleSendingSigner,
    "assertIsTransactionModifyingSigner",
    ()=>assertIsTransactionModifyingSigner,
    "assertIsTransactionPartialSigner",
    ()=>assertIsTransactionPartialSigner,
    "assertIsTransactionSendingSigner",
    ()=>assertIsTransactionSendingSigner,
    "assertIsTransactionSigner",
    ()=>assertIsTransactionSigner,
    "createKeyPairSignerFromBytes",
    ()=>createKeyPairSignerFromBytes,
    "createKeyPairSignerFromPrivateKeyBytes",
    ()=>createKeyPairSignerFromPrivateKeyBytes,
    "createNoopSigner",
    ()=>createNoopSigner,
    "createSignableMessage",
    ()=>createSignableMessage,
    "createSignerFromKeyPair",
    ()=>createSignerFromKeyPair,
    "generateKeyPairSigner",
    ()=>generateKeyPairSigner,
    "getSignersFromInstruction",
    ()=>getSignersFromInstruction,
    "getSignersFromTransactionMessage",
    ()=>getSignersFromTransactionMessage,
    "isKeyPairSigner",
    ()=>isKeyPairSigner,
    "isMessageModifyingSigner",
    ()=>isMessageModifyingSigner,
    "isMessagePartialSigner",
    ()=>isMessagePartialSigner,
    "isMessageSigner",
    ()=>isMessageSigner,
    "isTransactionMessageWithSingleSendingSigner",
    ()=>isTransactionMessageWithSingleSendingSigner,
    "isTransactionModifyingSigner",
    ()=>isTransactionModifyingSigner,
    "isTransactionPartialSigner",
    ()=>isTransactionPartialSigner,
    "isTransactionSendingSigner",
    ()=>isTransactionSendingSigner,
    "isTransactionSigner",
    ()=>isTransactionSigner,
    "partiallySignTransactionMessageWithSigners",
    ()=>partiallySignTransactionMessageWithSigners,
    "setTransactionMessageFeePayerSigner",
    ()=>setTransactionMessageFeePayerSigner,
    "signAndSendTransactionMessageWithSigners",
    ()=>signAndSendTransactionMessageWithSigners,
    "signTransactionMessageWithSigners",
    ()=>signTransactionMessageWithSigners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/signers/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/deduplicate-signers.ts
function deduplicateSigners(signers) {
    const deduplicated = {};
    signers.forEach((signer)=>{
        if (!deduplicated[signer.address]) {
            deduplicated[signer.address] = signer;
        } else if (deduplicated[signer.address] !== signer) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS"], {
                address: signer.address
            });
        }
    });
    return Object.values(deduplicated);
}
function isTransactionModifyingSigner(value) {
    return "modifyAndSignTransactions" in value && typeof value.modifyAndSignTransactions === "function";
}
function assertIsTransactionModifyingSigner(value) {
    if (!isTransactionModifyingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER"], {
            address: value.address
        });
    }
}
function isTransactionPartialSigner(value) {
    return "signTransactions" in value && typeof value.signTransactions === "function";
}
function assertIsTransactionPartialSigner(value) {
    if (!isTransactionPartialSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER"], {
            address: value.address
        });
    }
}
function isTransactionSendingSigner(value) {
    return "signAndSendTransactions" in value && typeof value.signAndSendTransactions === "function";
}
function assertIsTransactionSendingSigner(value) {
    if (!isTransactionSendingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER"], {
            address: value.address
        });
    }
}
// src/transaction-signer.ts
function isTransactionSigner(value) {
    return isTransactionPartialSigner(value) || isTransactionModifyingSigner(value) || isTransactionSendingSigner(value);
}
function assertIsTransactionSigner(value) {
    if (!isTransactionSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER"], {
            address: value.address
        });
    }
}
// src/account-signer-meta.ts
function getSignersFromInstruction(instruction) {
    return deduplicateSigners((instruction.accounts ?? []).flatMap((account)=>"signer" in account ? account.signer : []));
}
function getSignersFromTransactionMessage(transaction) {
    return deduplicateSigners([
        ...transaction.feePayer && isTransactionSigner(transaction.feePayer) ? [
            transaction.feePayer
        ] : [],
        ...transaction.instructions.flatMap(getSignersFromInstruction)
    ]);
}
function addSignersToInstruction(signers, instruction) {
    if (!instruction.accounts || instruction.accounts.length === 0) {
        return instruction;
    }
    const signerByAddress = new Map(deduplicateSigners(signers).map((signer)=>[
            signer.address,
            signer
        ]));
    return Object.freeze({
        ...instruction,
        accounts: instruction.accounts.map((account)=>{
            const signer = signerByAddress.get(account.address);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(account.role) || "signer" in account || !signer) {
                return account;
            }
            return Object.freeze({
                ...account,
                signer
            });
        })
    });
}
function addSignersToTransactionMessage(signers, transactionMessage) {
    const feePayerSigner = hasAddressOnlyFeePayer(transactionMessage) ? signers.find((signer)=>signer.address === transactionMessage.feePayer.address) : void 0;
    if (!feePayerSigner && transactionMessage.instructions.length === 0) {
        return transactionMessage;
    }
    return Object.freeze({
        ...transactionMessage,
        ...feePayerSigner ? {
            feePayer: feePayerSigner
        } : null,
        instructions: transactionMessage.instructions.map((instruction)=>addSignersToInstruction(signers, instruction))
    });
}
function hasAddressOnlyFeePayer(message) {
    return !!message && "feePayer" in message && !!message.feePayer && typeof message.feePayer.address === "string" && !isTransactionSigner(message.feePayer);
}
// src/fee-payer-signer.ts
function setTransactionMessageFeePayerSigner(feePayer, transactionMessage) {
    Object.freeze(feePayer);
    const out = {
        ...transactionMessage,
        feePayer
    };
    Object.freeze(out);
    return out;
}
function isMessagePartialSigner(value) {
    return "signMessages" in value && typeof value.signMessages === "function";
}
function assertIsMessagePartialSigner(value) {
    if (!isMessagePartialSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER"], {
            address: value.address
        });
    }
}
// src/keypair-signer.ts
function isKeyPairSigner(value) {
    return "keyPair" in value && typeof value.keyPair === "object" && isMessagePartialSigner(value) && isTransactionPartialSigner(value);
}
function assertIsKeyPairSigner(value) {
    if (!isKeyPairSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER"], {
            address: value.address
        });
    }
}
async function createSignerFromKeyPair(keyPair) {
    const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressFromPublicKey"])(keyPair.publicKey);
    const out = {
        address,
        keyPair,
        signMessages: (messages)=>Promise.all(messages.map(async (message)=>Object.freeze({
                    [address]: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signBytes"])(keyPair.privateKey, message.content)
                }))),
        signTransactions: (transactions)=>Promise.all(transactions.map(async (transaction)=>{
                const signedTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partiallySignTransaction"])([
                    keyPair
                ], transaction);
                return Object.freeze({
                    [address]: signedTransaction.signatures[address]
                });
            }))
    };
    return Object.freeze(out);
}
async function generateKeyPairSigner() {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])());
}
async function createKeyPairSignerFromBytes(bytes, extractable) {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createKeyPairFromBytes"])(bytes, extractable));
}
async function createKeyPairSignerFromPrivateKeyBytes(bytes, extractable) {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createKeyPairFromPrivateKeyBytes"])(bytes, extractable));
}
function isMessageModifyingSigner(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.address) && "modifyAndSignMessages" in value && typeof value.modifyAndSignMessages === "function";
}
function assertIsMessageModifyingSigner(value) {
    if (!isMessageModifyingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER"], {
            address: value.address
        });
    }
}
function isMessageSigner(value) {
    return isMessagePartialSigner(value) || isMessageModifyingSigner(value);
}
function assertIsMessageSigner(value) {
    if (!isMessageSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER"], {
            address: value.address
        });
    }
}
// src/noop-signer.ts
function createNoopSigner(address) {
    const out = {
        address,
        signMessages: (messages)=>Promise.resolve(messages.map(()=>Object.freeze({}))),
        signTransactions: (transactions)=>Promise.resolve(transactions.map(()=>Object.freeze({})))
    };
    return Object.freeze(out);
}
function isTransactionMessageWithSingleSendingSigner(transaction) {
    try {
        assertIsTransactionMessageWithSingleSendingSigner(transaction);
        return true;
    } catch  {
        return false;
    }
}
function assertIsTransactionMessageWithSingleSendingSigner(transaction) {
    const signers = getSignersFromTransactionMessage(transaction);
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING"]);
    }
    const sendingOnlySigners = sendingSigners.filter((signer)=>!isTransactionPartialSigner(signer) && !isTransactionModifyingSigner(signer));
    if (sendingOnlySigners.length > 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS"]);
    }
}
// src/sign-transaction.ts
async function partiallySignTransactionMessageWithSigners(transactionMessage, config) {
    const { partialSigners, modifyingSigners } = categorizeTransactionSigners(deduplicateSigners(getSignersFromTransactionMessage(transactionMessage).filter(isTransactionSigner)), {
        identifySendingSigner: false
    });
    return await signModifyingAndPartialTransactionSigners(transactionMessage, modifyingSigners, partialSigners, config);
}
async function signTransactionMessageWithSigners(transactionMessage, config) {
    const signedTransaction = await partiallySignTransactionMessageWithSigners(transactionMessage, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFullySignedTransaction"])(signedTransaction);
    return signedTransaction;
}
async function signAndSendTransactionMessageWithSigners(transaction, config) {
    assertIsTransactionMessageWithSingleSendingSigner(transaction);
    const abortSignal = config?.abortSignal;
    const { partialSigners, modifyingSigners, sendingSigner } = categorizeTransactionSigners(deduplicateSigners(getSignersFromTransactionMessage(transaction).filter(isTransactionSigner)));
    abortSignal?.throwIfAborted();
    const signedTransaction = await signModifyingAndPartialTransactionSigners(transaction, modifyingSigners, partialSigners, config);
    if (!sendingSigner) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING"]);
    }
    abortSignal?.throwIfAborted();
    const [signature] = await sendingSigner.signAndSendTransactions([
        signedTransaction
    ], config);
    abortSignal?.throwIfAborted();
    return signature;
}
function categorizeTransactionSigners(signers, config = {}) {
    const identifySendingSigner = config.identifySendingSigner ?? true;
    const sendingSigner = identifySendingSigner ? identifyTransactionSendingSigner(signers) : null;
    const otherSigners = signers.filter((signer)=>signer !== sendingSigner && (isTransactionModifyingSigner(signer) || isTransactionPartialSigner(signer)));
    const modifyingSigners = identifyTransactionModifyingSigners(otherSigners);
    const partialSigners = otherSigners.filter(isTransactionPartialSigner).filter((signer)=>!modifyingSigners.includes(signer));
    return Object.freeze({
        modifyingSigners,
        partialSigners,
        sendingSigner
    });
}
function identifyTransactionSendingSigner(signers) {
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0) return null;
    const sendingOnlySigners = sendingSigners.filter((signer)=>!isTransactionModifyingSigner(signer) && !isTransactionPartialSigner(signer));
    if (sendingOnlySigners.length > 0) {
        return sendingOnlySigners[0];
    }
    return sendingSigners[0];
}
function identifyTransactionModifyingSigners(signers) {
    const modifyingSigners = signers.filter(isTransactionModifyingSigner);
    if (modifyingSigners.length === 0) return [];
    const nonPartialSigners = modifyingSigners.filter((signer)=>!isTransactionPartialSigner(signer));
    if (nonPartialSigners.length > 0) return nonPartialSigners;
    return [
        modifyingSigners[0]
    ];
}
async function signModifyingAndPartialTransactionSigners(transactionMessage, modifyingSigners = [], partialSigners = [], config) {
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"])(transactionMessage);
    const modifiedTransaction = await modifyingSigners.reduce(async (transaction2, modifyingSigner)=>{
        config?.abortSignal?.throwIfAborted();
        const [tx] = await modifyingSigner.modifyAndSignTransactions([
            await transaction2
        ], config);
        return Object.freeze(tx);
    }, Promise.resolve(transaction));
    config?.abortSignal?.throwIfAborted();
    const signatureDictionaries = await Promise.all(partialSigners.map(async (partialSigner)=>{
        const [signatures] = await partialSigner.signTransactions([
            modifiedTransaction
        ], config);
        return signatures;
    }));
    return Object.freeze({
        ...modifiedTransaction,
        signatures: Object.freeze(signatureDictionaries.reduce((signatures, signatureDictionary)=>{
            return {
                ...signatures,
                ...signatureDictionary
            };
        }, modifiedTransaction.signatures ?? {}))
    });
}
var o = globalThis.TextEncoder;
// src/signable-message.ts
function createSignableMessage(content, signatures = {}) {
    return Object.freeze({
        content: typeof content === "string" ? new o().encode(content) : content,
        signatures: Object.freeze({
            ...signatures
        })
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/accounts/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_ACCOUNT_SIZE",
    ()=>BASE_ACCOUNT_SIZE,
    "assertAccountDecoded",
    ()=>assertAccountDecoded,
    "assertAccountExists",
    ()=>assertAccountExists,
    "assertAccountsDecoded",
    ()=>assertAccountsDecoded,
    "assertAccountsExist",
    ()=>assertAccountsExist,
    "decodeAccount",
    ()=>decodeAccount,
    "fetchEncodedAccount",
    ()=>fetchEncodedAccount,
    "fetchEncodedAccounts",
    ()=>fetchEncodedAccounts,
    "fetchJsonParsedAccount",
    ()=>fetchJsonParsedAccount,
    "fetchJsonParsedAccounts",
    ()=>fetchJsonParsedAccounts,
    "parseBase58RpcAccount",
    ()=>parseBase58RpcAccount,
    "parseBase64RpcAccount",
    ()=>parseBase64RpcAccount,
    "parseJsonRpcAccount",
    ()=>parseJsonRpcAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/accounts/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/accounts/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/account.ts
var BASE_ACCOUNT_SIZE = 128;
function decodeAccount(encodedAccount, decoder) {
    try {
        if ("exists" in encodedAccount && !encodedAccount.exists) {
            return encodedAccount;
        }
        return Object.freeze({
            ...encodedAccount,
            data: decoder.decode(encodedAccount.data)
        });
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT"], {
            address: encodedAccount.address
        });
    }
}
function accountExists(account) {
    return !("exists" in account) || "exists" in account && account.exists;
}
function assertAccountDecoded(account) {
    if (accountExists(account) && account.data instanceof Uint8Array) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT"], {
            address: account.address
        });
    }
}
function assertAccountsDecoded(accounts) {
    const encoded = accounts.filter((a)=>accountExists(a) && a.data instanceof Uint8Array);
    if (encoded.length > 0) {
        const encodedAddresses = encoded.map((a)=>a.address);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED"], {
            addresses: encodedAddresses
        });
    }
}
function parseBase64RpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Encoder"])().encode(rpcAccount.data[0]);
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseBase58RpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(typeof rpcAccount.data === "string" ? rpcAccount.data : rpcAccount.data[0]);
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseJsonRpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = rpcAccount.data.parsed.info;
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseBaseAccount(rpcAccount) {
    return Object.freeze({
        executable: rpcAccount.executable,
        lamports: rpcAccount.lamports,
        programAddress: rpcAccount.owner,
        space: rpcAccount.space
    });
}
// src/fetch-account.ts
async function fetchEncodedAccount(rpc, address, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getAccountInfo(address, {
        ...rpcConfig,
        encoding: "base64"
    }).send({
        abortSignal
    });
    return parseBase64RpcAccount(address, response.value);
}
async function fetchJsonParsedAccount(rpc, address, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const { value: account } = await rpc.getAccountInfo(address, {
        ...rpcConfig,
        encoding: "jsonParsed"
    }).send({
        abortSignal
    });
    return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(address, account) : parseBase64RpcAccount(address, account);
}
async function fetchEncodedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, {
        ...rpcConfig,
        encoding: "base64"
    }).send({
        abortSignal
    });
    return response.value.map((account, index)=>parseBase64RpcAccount(addresses[index], account));
}
async function fetchJsonParsedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, {
        ...rpcConfig,
        encoding: "jsonParsed"
    }).send({
        abortSignal
    });
    return response.value.map((account, index)=>{
        return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(addresses[index], account) : parseBase64RpcAccount(addresses[index], account);
    });
}
function assertAccountExists(account) {
    if (!account.exists) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND"], {
            address: account.address
        });
    }
}
function assertAccountsExist(accounts) {
    const missingAccounts = accounts.filter((a)=>!a.exists);
    if (missingAccounts.length > 0) {
        const missingAddresses = missingAccounts.map((a)=>a.address);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND"], {
            addresses: missingAddresses
        });
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/transaction-confirmation/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBlockHeightExceedencePromiseFactory",
    ()=>createBlockHeightExceedencePromiseFactory,
    "createNonceInvalidationPromiseFactory",
    ()=>createNonceInvalidationPromiseFactory,
    "createRecentSignatureConfirmationPromiseFactory",
    ()=>createRecentSignatureConfirmationPromiseFactory,
    "getTimeoutPromise",
    ()=>getTimeoutPromise,
    "waitForDurableNonceTransactionConfirmation",
    ()=>waitForDurableNonceTransactionConfirmation,
    "waitForRecentTransactionConfirmation",
    ()=>waitForRecentTransactionConfirmation,
    "waitForRecentTransactionConfirmationUntilTimeout",
    ()=>waitForRecentTransactionConfirmationUntilTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// src/confirmation-strategy-blockheight.ts
var e = class extends globalThis.AbortController {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this.signal);
    }
};
// src/confirmation-strategy-blockheight.ts
function createBlockHeightExceedencePromiseFactory({ rpc, rpcSubscriptions }) {
    return async function getBlockHeightExceedencePromise({ abortSignal: callerAbortSignal, commitment, lastValidBlockHeight }) {
        callerAbortSignal.throwIfAborted();
        const abortController = new e();
        const handleAbort = ()=>{
            abortController.abort();
        };
        callerAbortSignal.addEventListener("abort", handleAbort, {
            signal: abortController.signal
        });
        async function getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight() {
            const { absoluteSlot, blockHeight } = await rpc.getEpochInfo({
                commitment
            }).send({
                abortSignal: abortController.signal
            });
            return {
                blockHeight,
                differenceBetweenSlotHeightAndBlockHeight: absoluteSlot - blockHeight
            };
        }
        try {
            const [slotNotifications, { blockHeight: initialBlockHeight, differenceBetweenSlotHeightAndBlockHeight }] = await Promise.all([
                rpcSubscriptions.slotNotifications().subscribe({
                    abortSignal: abortController.signal
                }),
                getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight()
            ]);
            callerAbortSignal.throwIfAborted();
            let currentBlockHeight = initialBlockHeight;
            if (currentBlockHeight <= lastValidBlockHeight) {
                let lastKnownDifferenceBetweenSlotHeightAndBlockHeight = differenceBetweenSlotHeightAndBlockHeight;
                for await (const slotNotification of slotNotifications){
                    const { slot } = slotNotification;
                    if (slot - lastKnownDifferenceBetweenSlotHeightAndBlockHeight > lastValidBlockHeight) {
                        const { blockHeight: recheckedBlockHeight, differenceBetweenSlotHeightAndBlockHeight: currentDifferenceBetweenSlotHeightAndBlockHeight } = await getBlockHeightAndDifferenceBetweenSlotHeightAndBlockHeight();
                        currentBlockHeight = recheckedBlockHeight;
                        if (currentBlockHeight > lastValidBlockHeight) {
                            break;
                        } else {
                            lastKnownDifferenceBetweenSlotHeightAndBlockHeight = currentDifferenceBetweenSlotHeightAndBlockHeight;
                        }
                    }
                }
            }
            callerAbortSignal.throwIfAborted();
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED"], {
                currentBlockHeight,
                lastValidBlockHeight
            });
        } finally{
            abortController.abort();
        }
    };
}
var NONCE_VALUE_OFFSET = 4 + // version(u32)
4 + // state(u32)
32;
function createNonceInvalidationPromiseFactory({ rpc, rpcSubscriptions }) {
    return async function getNonceInvalidationPromise({ abortSignal: callerAbortSignal, commitment, currentNonceValue: expectedNonceValue, nonceAccountAddress }) {
        const abortController = new e();
        function handleAbort() {
            abortController.abort();
        }
        callerAbortSignal.addEventListener("abort", handleAbort, {
            signal: abortController.signal
        });
        const accountNotifications = await rpcSubscriptions.accountNotifications(nonceAccountAddress, {
            commitment,
            encoding: "base64"
        }).subscribe({
            abortSignal: abortController.signal
        });
        const base58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
        const base64Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Encoder"])();
        function getNonceFromAccountData([base64EncodedBytes]) {
            const data = base64Encoder.encode(base64EncodedBytes);
            const nonceValueBytes = data.slice(NONCE_VALUE_OFFSET, NONCE_VALUE_OFFSET + 32);
            return base58Decoder.decode(nonceValueBytes);
        }
        const nonceAccountDidAdvancePromise = (async ()=>{
            for await (const accountNotification of accountNotifications){
                const nonceValue = getNonceFromAccountData(accountNotification.value.data);
                if (nonceValue !== expectedNonceValue) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVALID_NONCE"], {
                        actualNonceValue: nonceValue,
                        expectedNonceValue
                    });
                }
            }
        })();
        const nonceIsAlreadyInvalidPromise = (async ()=>{
            const { value: nonceAccount } = await rpc.getAccountInfo(nonceAccountAddress, {
                commitment,
                dataSlice: {
                    length: 32,
                    offset: NONCE_VALUE_OFFSET
                },
                encoding: "base58"
            }).send({
                abortSignal: abortController.signal
            });
            if (!nonceAccount) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND"], {
                    nonceAccountAddress
                });
            }
            const nonceValue = // This works because we asked for the exact slice of data representing the nonce
            // value, and furthermore asked for it in `base58` encoding.
            nonceAccount.data[0];
            if (nonceValue !== expectedNonceValue) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVALID_NONCE"], {
                    actualNonceValue: nonceValue,
                    expectedNonceValue
                });
            } else {
                await new Promise(()=>{});
            }
        })();
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeRace"])([
                nonceAccountDidAdvancePromise,
                nonceIsAlreadyInvalidPromise
            ]);
        } finally{
            abortController.abort();
        }
    };
}
function createRecentSignatureConfirmationPromiseFactory({ rpc, rpcSubscriptions }) {
    return async function getRecentSignatureConfirmationPromise({ abortSignal: callerAbortSignal, commitment, signature }) {
        const abortController = new e();
        function handleAbort() {
            abortController.abort();
        }
        callerAbortSignal.addEventListener("abort", handleAbort, {
            signal: abortController.signal
        });
        const signatureStatusNotifications = await rpcSubscriptions.signatureNotifications(signature, {
            commitment
        }).subscribe({
            abortSignal: abortController.signal
        });
        const signatureDidCommitPromise = (async ()=>{
            for await (const signatureStatusNotification of signatureStatusNotifications){
                if (signatureStatusNotification.value.err) {
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolanaErrorFromTransactionError"])(signatureStatusNotification.value.err);
                } else {
                    return;
                }
            }
        })();
        const signatureStatusLookupPromise = (async ()=>{
            const { value: signatureStatusResults } = await rpc.getSignatureStatuses([
                signature
            ]).send({
                abortSignal: abortController.signal
            });
            const signatureStatus = signatureStatusResults[0];
            if (signatureStatus && signatureStatus.confirmationStatus && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentComparator"])(signatureStatus.confirmationStatus, commitment) >= 0) {
                return;
            } else {
                await new Promise(()=>{});
            }
        })();
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeRace"])([
                signatureDidCommitPromise,
                signatureStatusLookupPromise
            ]);
        } finally{
            abortController.abort();
        }
    };
}
// src/confirmation-strategy-timeout.ts
async function getTimeoutPromise({ abortSignal: callerAbortSignal, commitment }) {
    return await new Promise((_, reject)=>{
        const handleAbort = (e2)=>{
            clearTimeout(timeoutId);
            const abortError = new DOMException(e2.target.reason, "AbortError");
            reject(abortError);
        };
        callerAbortSignal.addEventListener("abort", handleAbort);
        const timeoutMs = commitment === "processed" ? 3e4 : 6e4;
        const startMs = performance.now();
        const timeoutId = // We use `setTimeout` instead of `AbortSignal.timeout()` because we want to measure
        // elapsed time instead of active time.
        // See https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static
        setTimeout(()=>{
            const elapsedMs = performance.now() - startMs;
            reject(new DOMException(`Timeout elapsed after ${elapsedMs} ms`, "TimeoutError"));
        }, timeoutMs);
    });
}
async function raceStrategies(signature, config, getSpecificStrategiesForRace) {
    const { abortSignal: callerAbortSignal, commitment, getRecentSignatureConfirmationPromise } = config;
    callerAbortSignal?.throwIfAborted();
    const abortController = new e();
    if (callerAbortSignal) {
        const handleAbort = ()=>{
            abortController.abort();
        };
        callerAbortSignal.addEventListener("abort", handleAbort, {
            signal: abortController.signal
        });
    }
    try {
        const specificStrategies = getSpecificStrategiesForRace({
            ...config,
            abortSignal: abortController.signal
        });
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeRace"])([
            getRecentSignatureConfirmationPromise({
                abortSignal: abortController.signal,
                commitment,
                signature
            }),
            ...specificStrategies
        ]);
    } finally{
        abortController.abort();
    }
}
// src/waiters.ts
async function waitForDurableNonceTransactionConfirmation(config) {
    await raceStrategies((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(config.transaction), config, function getSpecificStrategiesForRace({ abortSignal, commitment, getNonceInvalidationPromise, transaction }) {
        return [
            getNonceInvalidationPromise({
                abortSignal,
                commitment,
                currentNonceValue: transaction.lifetimeConstraint.nonce,
                nonceAccountAddress: transaction.lifetimeConstraint.nonceAccountAddress
            })
        ];
    });
}
async function waitForRecentTransactionConfirmation(config) {
    await raceStrategies((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(config.transaction), config, function getSpecificStrategiesForRace({ abortSignal, commitment, getBlockHeightExceedencePromise, transaction }) {
        return [
            getBlockHeightExceedencePromise({
                abortSignal,
                commitment,
                lastValidBlockHeight: transaction.lifetimeConstraint.lastValidBlockHeight
            })
        ];
    });
}
async function waitForRecentTransactionConfirmationUntilTimeout(config) {
    await raceStrategies(config.signature, config, function getSpecificStrategiesForRace({ abortSignal, commitment, getTimeoutPromise: getTimeoutPromise2 }) {
        return [
            getTimeoutPromise2({
                abortSignal,
                commitment
            })
        ];
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/kit/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "airdropFactory",
    ()=>airdropFactory,
    "decompileTransactionMessageFetchingLookupTables",
    ()=>decompileTransactionMessageFetchingLookupTables,
    "fetchAddressesForLookupTables",
    ()=>fetchAddressesForLookupTables,
    "getComputeUnitEstimateForTransactionMessageFactory",
    ()=>getComputeUnitEstimateForTransactionMessageFactory,
    "sendAndConfirmDurableNonceTransactionFactory",
    ()=>sendAndConfirmDurableNonceTransactionFactory,
    "sendAndConfirmTransactionFactory",
    ()=>sendAndConfirmTransactionFactory,
    "sendTransactionWithoutConfirmingFactory",
    ()=>sendTransactionWithoutConfirmingFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/accounts/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/kit/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-confirmation/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// src/index.ts
// src/airdrop-internal.ts
async function requestAndConfirmAirdrop_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, confirmSignatureOnlyTransaction, lamports, recipientAddress, rpc }) {
    const airdropTransactionSignature = await rpc.requestAirdrop(recipientAddress, lamports, {
        commitment
    }).send({
        abortSignal
    });
    await confirmSignatureOnlyTransaction({
        abortSignal,
        commitment,
        signature: airdropTransactionSignature
    });
    return airdropTransactionSignature;
}
// src/airdrop.ts
function airdropFactory({ rpc, rpcSubscriptions }) {
    const getRecentSignatureConfirmationPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRecentSignatureConfirmationPromiseFactory"])({
        rpc,
        rpcSubscriptions
    });
    async function confirmSignatureOnlyTransaction(config) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForRecentTransactionConfirmationUntilTimeout"])({
            ...config,
            getRecentSignatureConfirmationPromise,
            getTimeoutPromise: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeoutPromise"]
        });
    }
    return async function airdrop(config) {
        return await requestAndConfirmAirdrop_INTERNAL_ONLY_DO_NOT_EXPORT({
            ...config,
            confirmSignatureOnlyTransaction,
            rpc
        });
    };
}
var COMPUTE_BUDGET_PROGRAM_ADDRESS = "ComputeBudget111111111111111111111111111111";
var INVALID_BUT_SUFFICIENT_FOR_COMPILATION_BLOCKHASH = {
    blockhash: "11111111111111111111111111111111",
    lastValidBlockHeight: 0n
};
var SET_COMPUTE_UNIT_LIMIT_INSTRUCTION_INDEX = 2;
function createComputeUnitLimitInstruction(units) {
    const data = new Uint8Array(5);
    data[0] = SET_COMPUTE_UNIT_LIMIT_INSTRUCTION_INDEX;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().write(units, data, 1);
    return Object.freeze({
        data,
        programAddress: COMPUTE_BUDGET_PROGRAM_ADDRESS
    });
}
function isSetComputeLimitInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, COMPUTE_BUDGET_PROGRAM_ADDRESS) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === SET_COMPUTE_UNIT_LIMIT_INSTRUCTION_INDEX;
}
async function getComputeUnitEstimateForTransactionMessage_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, rpc, transactionMessage, ...simulateConfig }) {
    const isDurableNonceTransactionMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithDurableNonceLifetime"])(transactionMessage);
    let compilableTransactionMessage;
    if (isDurableNonceTransactionMessage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithBlockhashLifetime"])(transactionMessage)) {
        compilableTransactionMessage = transactionMessage;
    } else {
        compilableTransactionMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(INVALID_BUT_SUFFICIENT_FOR_COMPILATION_BLOCKHASH, transactionMessage);
    }
    const existingSetComputeUnitLimitInstructionIndex = transactionMessage.instructions.findIndex(isSetComputeLimitInstruction);
    const maxComputeUnitLimitInstruction = createComputeUnitLimitInstruction(14e5);
    if (existingSetComputeUnitLimitInstructionIndex === -1) {
        compilableTransactionMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(maxComputeUnitLimitInstruction, compilableTransactionMessage);
    } else {
        const nextInstructions = [
            ...compilableTransactionMessage.instructions
        ];
        nextInstructions.splice(existingSetComputeUnitLimitInstructionIndex, 1, maxComputeUnitLimitInstruction);
        compilableTransactionMessage = Object.freeze({
            ...compilableTransactionMessage,
            instructions: nextInstructions
        });
    }
    const compiledTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"])(compilableTransactionMessage);
    const wireTransactionBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(compiledTransaction);
    try {
        const { value: { err: transactionError, unitsConsumed } } = await rpc.simulateTransaction(wireTransactionBytes, {
            ...simulateConfig,
            encoding: "base64",
            replaceRecentBlockhash: !isDurableNonceTransactionMessage,
            sigVerify: false
        }).send({
            abortSignal
        });
        if (unitsConsumed == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT"]);
        }
        const downcastUnitsConsumed = unitsConsumed > 4294967295n ? 4294967295 : Number(unitsConsumed);
        if (transactionError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT"], {
                cause: transactionError,
                unitsConsumed: downcastUnitsConsumed
            });
        }
        return downcastUnitsConsumed;
    } catch (e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT"])) throw e;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT"], {
            cause: e
        });
    }
}
// src/compute-limit.ts
function getComputeUnitEstimateForTransactionMessageFactory({ rpc }) {
    return async function getComputeUnitEstimateForTransactionMessage(transactionMessage, config) {
        return await getComputeUnitEstimateForTransactionMessage_INTERNAL_ONLY_DO_NOT_EXPORT({
            ...config,
            rpc,
            transactionMessage
        });
    };
}
async function fetchAddressesForLookupTables(lookupTableAddresses, rpc, config) {
    if (lookupTableAddresses.length === 0) {
        return {};
    }
    const fetchedLookupTables = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJsonParsedAccounts"])(rpc, lookupTableAddresses, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsDecoded"])(fetchedLookupTables);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsExist"])(fetchedLookupTables);
    return fetchedLookupTables.reduce((acc, lookup)=>{
        return {
            ...acc,
            [lookup.address]: lookup.data.addresses
        };
    }, {});
}
// src/decompile-transaction-message-fetching-lookup-tables.ts
async function decompileTransactionMessageFetchingLookupTables(compiledTransactionMessage, rpc, config) {
    const lookupTables = "addressTableLookups" in compiledTransactionMessage && compiledTransactionMessage.addressTableLookups !== void 0 && compiledTransactionMessage.addressTableLookups.length > 0 ? compiledTransactionMessage.addressTableLookups : [];
    const lookupTableAddresses = lookupTables.map((l)=>l.lookupTableAddress);
    const { lastValidBlockHeight, ...fetchAccountsConfig } = config ?? {};
    const addressesByLookupTableAddress = lookupTableAddresses.length > 0 ? await fetchAddressesForLookupTables(lookupTableAddresses, rpc, fetchAccountsConfig) : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decompileTransactionMessage"])(compiledTransactionMessage, {
        addressesByLookupTableAddress,
        lastValidBlockHeight
    });
}
function getSendTransactionConfigWithAdjustedPreflightCommitment(commitment, config) {
    if (// The developer has supplied no value for `preflightCommitment`.
    !config?.preflightCommitment && // The value of `commitment` is lower than the server default of `preflightCommitment`.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentComparator"])(commitment, "finalized") < 0) {
        return {
            ...config,
            // In the common case, it is unlikely that you want to simulate a transaction at
            // `finalized` commitment when your standard of commitment for confirming the
            // transaction is lower. Cap the simulation commitment level to the level of the
            // confirmation commitment.
            preflightCommitment: commitment
        };
    }
    return config;
}
async function sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, rpc, transaction, ...sendTransactionConfig }) {
    const base64EncodedWireTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction);
    return await rpc.sendTransaction(base64EncodedWireTransaction, {
        ...getSendTransactionConfigWithAdjustedPreflightCommitment(commitment, sendTransactionConfig),
        encoding: "base64"
    }).send({
        abortSignal
    });
}
async function sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, confirmDurableNonceTransaction, rpc, transaction, ...sendTransactionConfig }) {
    const transactionSignature = await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...sendTransactionConfig,
        abortSignal,
        commitment,
        rpc,
        transaction
    });
    await confirmDurableNonceTransaction({
        abortSignal,
        commitment,
        transaction
    });
    return transactionSignature;
}
async function sendAndConfirmTransactionWithBlockhashLifetime_INTERNAL_ONLY_DO_NOT_EXPORT({ abortSignal, commitment, confirmRecentTransaction, rpc, transaction, ...sendTransactionConfig }) {
    const transactionSignature = await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
        ...sendTransactionConfig,
        abortSignal,
        commitment,
        rpc,
        transaction
    });
    await confirmRecentTransaction({
        abortSignal,
        commitment,
        transaction
    });
    return transactionSignature;
}
// src/send-and-confirm-durable-nonce-transaction.ts
function sendAndConfirmDurableNonceTransactionFactory({ rpc, rpcSubscriptions }) {
    const getNonceInvalidationPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonceInvalidationPromiseFactory"])({
        rpc,
        rpcSubscriptions
    });
    const getRecentSignatureConfirmationPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRecentSignatureConfirmationPromiseFactory"])({
        rpc,
        rpcSubscriptions
    });
    async function confirmDurableNonceTransaction(config) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForDurableNonceTransactionConfirmation"])({
            ...config,
            getNonceInvalidationPromise,
            getRecentSignatureConfirmationPromise
        });
    }
    return async function sendAndConfirmDurableNonceTransaction(transaction, config) {
        await sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
            ...config,
            confirmDurableNonceTransaction,
            rpc,
            transaction
        });
    };
}
function sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions }) {
    const getBlockHeightExceedencePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBlockHeightExceedencePromiseFactory"])({
        rpc,
        rpcSubscriptions
    });
    const getRecentSignatureConfirmationPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRecentSignatureConfirmationPromiseFactory"])({
        rpc,
        rpcSubscriptions
    });
    async function confirmRecentTransaction(config) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$confirmation$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForRecentTransactionConfirmation"])({
            ...config,
            getBlockHeightExceedencePromise,
            getRecentSignatureConfirmationPromise
        });
    }
    return async function sendAndConfirmTransaction(transaction, config) {
        await sendAndConfirmTransactionWithBlockhashLifetime_INTERNAL_ONLY_DO_NOT_EXPORT({
            ...config,
            confirmRecentTransaction,
            rpc,
            transaction
        });
    };
}
// src/send-transaction-without-confirming.ts
function sendTransactionWithoutConfirmingFactory({ rpc }) {
    return async function sendTransactionWithoutConfirming(transaction, config) {
        await sendTransaction_INTERNAL_ONLY_DO_NOT_EXPORT({
            ...config,
            rpc,
            transaction
        });
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-spec-types/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/parse-json-with-bigints.ts
__turbopack_context__.s([
    "createRpcMessage",
    ()=>createRpcMessage,
    "parseJsonWithBigInts",
    ()=>parseJsonWithBigInts,
    "stringifyJsonWithBigints",
    ()=>stringifyJsonWithBigints
]);
function parseJsonWithBigInts(json) {
    return JSON.parse(wrapIntegersInBigIntValueObject(json), (_, value)=>{
        return isBigIntValueObject(value) ? unwrapBigIntValueObject(value) : value;
    });
}
function wrapIntegersInBigIntValueObject(json) {
    const out = [];
    let inQuote = false;
    for(let ii = 0; ii < json.length; ii++){
        let isEscaped = false;
        if (json[ii] === "\\") {
            out.push(json[ii++]);
            isEscaped = !isEscaped;
        }
        if (json[ii] === '"') {
            out.push(json[ii]);
            if (!isEscaped) {
                inQuote = !inQuote;
            }
            continue;
        }
        if (!inQuote) {
            const consumedNumber = consumeNumber(json, ii);
            if (consumedNumber?.length) {
                ii += consumedNumber.length - 1;
                if (consumedNumber.match(/\.|[eE]-/)) {
                    out.push(consumedNumber);
                } else {
                    out.push(wrapBigIntValueObject(consumedNumber));
                }
                continue;
            }
        }
        out.push(json[ii]);
    }
    return out.join("");
}
function consumeNumber(json, ii) {
    const JSON_NUMBER_REGEX = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/;
    if (!json[ii]?.match(/[-\d]/)) {
        return null;
    }
    const numberMatch = json.slice(ii).match(JSON_NUMBER_REGEX);
    return numberMatch ? numberMatch[0] : null;
}
function wrapBigIntValueObject(value) {
    return `{"$n":"${value}"}`;
}
function unwrapBigIntValueObject({ $n }) {
    if ($n.match(/[eE]/)) {
        const [units, exponent] = $n.split(/[eE]/);
        return BigInt(units) * BigInt(10) ** BigInt(exponent);
    }
    return BigInt($n);
}
function isBigIntValueObject(value) {
    return !!value && typeof value === "object" && "$n" in value && typeof value.$n === "string";
}
// src/rpc-message.ts
var _nextMessageId = 0n;
function getNextMessageId() {
    const id = _nextMessageId;
    _nextMessageId++;
    return id.toString();
}
function createRpcMessage(request) {
    return {
        id: getNextMessageId(),
        jsonrpc: "2.0",
        method: request.methodName,
        params: request.params
    };
}
// src/stringify-json-with-bigints.ts
function stringifyJsonWithBigints(value, space) {
    return unwrapBigIntValueObject2(JSON.stringify(value, (_, v)=>typeof v === "bigint" ? wrapBigIntValueObject2(v) : v, space));
}
function wrapBigIntValueObject2(value) {
    return {
        $n: `${value}`
    };
}
function unwrapBigIntValueObject2(value) {
    return value.replace(/\{\s*"\$n"\s*:\s*"(-?\d+)"\s*\}/g, "$1");
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-spec/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createJsonRpcApi",
    ()=>createJsonRpcApi,
    "createRpc",
    ()=>createRpc,
    "isJsonRpcPayload",
    ()=>isJsonRpcPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec-types/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/rpc.ts
function createRpc(rpcConfig) {
    return makeProxy(rpcConfig);
}
function makeProxy(rpcConfig) {
    return new Proxy(rpcConfig.api, {
        defineProperty () {
            return false;
        },
        deleteProperty () {
            return false;
        },
        get (target, p, receiver) {
            if (p === "then") {
                return void 0;
            }
            return function(...rawParams) {
                const methodName = p.toString();
                const getApiPlan = Reflect.get(target, methodName, receiver);
                if (!getApiPlan) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD"], {
                        method: methodName,
                        params: rawParams
                    });
                }
                const apiPlan = getApiPlan(...rawParams);
                return createPendingRpcRequest(rpcConfig, apiPlan);
            };
        }
    });
}
function createPendingRpcRequest({ transport }, plan) {
    return {
        async send (options) {
            return await plan.execute({
                signal: options?.abortSignal,
                transport
            });
        }
    };
}
function createJsonRpcApi(config) {
    return new Proxy({}, {
        defineProperty () {
            return false;
        },
        deleteProperty () {
            return false;
        },
        get (...args) {
            const [_, p] = args;
            const methodName = p.toString();
            return function(...rawParams) {
                const rawRequest = Object.freeze({
                    methodName,
                    params: rawParams
                });
                const request = config?.requestTransformer ? config?.requestTransformer(rawRequest) : rawRequest;
                return Object.freeze({
                    execute: async ({ signal, transport })=>{
                        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRpcMessage"])(request);
                        const response = await transport({
                            payload,
                            signal
                        });
                        if (!config?.responseTransformer) {
                            return response;
                        }
                        return config.responseTransformer(response, request);
                    }
                });
            };
        }
    });
}
// src/rpc-transport.ts
function isJsonRpcPayload(payload) {
    if (payload == null || typeof payload !== "object" || Array.isArray(payload)) {
        return false;
    }
    return "jsonrpc" in payload && payload.jsonrpc === "2.0" && "method" in payload && typeof payload.method === "string" && "params" in payload;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-transformers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEYPATH_WILDCARD",
    ()=>KEYPATH_WILDCARD,
    "getBigIntDowncastRequestTransformer",
    ()=>getBigIntDowncastRequestTransformer,
    "getBigIntUpcastResponseTransformer",
    ()=>getBigIntUpcastResponseTransformer,
    "getDefaultCommitmentRequestTransformer",
    ()=>getDefaultCommitmentRequestTransformer,
    "getDefaultRequestTransformerForSolanaRpc",
    ()=>getDefaultRequestTransformerForSolanaRpc,
    "getDefaultResponseTransformerForSolanaRpc",
    ()=>getDefaultResponseTransformerForSolanaRpc,
    "getDefaultResponseTransformerForSolanaRpcSubscriptions",
    ()=>getDefaultResponseTransformerForSolanaRpcSubscriptions,
    "getIntegerOverflowRequestTransformer",
    ()=>getIntegerOverflowRequestTransformer,
    "getResultResponseTransformer",
    ()=>getResultResponseTransformer,
    "getThrowSolanaErrorResponseTransformer",
    ()=>getThrowSolanaErrorResponseTransformer,
    "getTreeWalkerRequestTransformer",
    ()=>getTreeWalkerRequestTransformer,
    "getTreeWalkerResponseTransformer",
    ()=>getTreeWalkerResponseTransformer,
    "innerInstructionsConfigs",
    ()=>innerInstructionsConfigs,
    "jsonParsedAccountsConfigs",
    ()=>jsonParsedAccountsConfigs,
    "jsonParsedTokenAccountsConfigs",
    ()=>jsonParsedTokenAccountsConfigs,
    "messageConfig",
    ()=>messageConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-transformers/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/request-transformer.ts
// src/request-transformer-bigint-downcast-internal.ts
function downcastNodeToNumberIfBigint(value) {
    return typeof value === "bigint" ? // FIXME(solana-labs/solana/issues/30341) Create a data type to represent u64 in the Solana
    // JSON RPC implementation so that we can throw away this entire patcher instead of unsafely
    // downcasting `bigints` to `numbers`.
    Number(value) : value;
}
// src/tree-traversal.ts
var KEYPATH_WILDCARD = {};
function getTreeWalker(visitors) {
    return function traverse(node, state) {
        if (Array.isArray(node)) {
            return node.map((element, ii)=>{
                const nextState = {
                    ...state,
                    keyPath: [
                        ...state.keyPath,
                        ii
                    ]
                };
                return traverse(element, nextState);
            });
        } else if (typeof node === "object" && node !== null) {
            const out = {};
            for(const propName in node){
                if (!Object.prototype.hasOwnProperty.call(node, propName)) {
                    continue;
                }
                const nextState = {
                    ...state,
                    keyPath: [
                        ...state.keyPath,
                        propName
                    ]
                };
                out[propName] = traverse(node[propName], nextState);
            }
            return out;
        } else {
            return visitors.reduce((acc, visitNode)=>visitNode(acc, state), node);
        }
    };
}
function getTreeWalkerRequestTransformer(visitors, initialState) {
    return (request)=>{
        const traverse = getTreeWalker(visitors);
        return Object.freeze({
            ...request,
            params: traverse(request.params, initialState)
        });
    };
}
function getTreeWalkerResponseTransformer(visitors, initialState) {
    return (json)=>getTreeWalker(visitors)(json, initialState);
}
// src/request-transformer-bigint-downcast.ts
function getBigIntDowncastRequestTransformer() {
    return getTreeWalkerRequestTransformer([
        downcastNodeToNumberIfBigint
    ], {
        keyPath: []
    });
}
// src/request-transformer-default-commitment-internal.ts
function applyDefaultCommitment({ commitmentPropertyName, params, optionsObjectPositionInParams, overrideCommitment }) {
    const paramInTargetPosition = params[optionsObjectPositionInParams];
    if (// There's no config.
    paramInTargetPosition === void 0 || // There is a config object.
    paramInTargetPosition && typeof paramInTargetPosition === "object" && !Array.isArray(paramInTargetPosition)) {
        if (// The config object already has a commitment set.
        paramInTargetPosition && commitmentPropertyName in paramInTargetPosition) {
            if (!paramInTargetPosition[commitmentPropertyName] || paramInTargetPosition[commitmentPropertyName] === "finalized") {
                const nextParams = [
                    ...params
                ];
                const { [commitmentPropertyName]: _, // eslint-disable-line @typescript-eslint/no-unused-vars
                ...rest } = paramInTargetPosition;
                if (Object.keys(rest).length > 0) {
                    nextParams[optionsObjectPositionInParams] = rest;
                } else {
                    if (optionsObjectPositionInParams === nextParams.length - 1) {
                        nextParams.length--;
                    } else {
                        nextParams[optionsObjectPositionInParams] = void 0;
                    }
                }
                return nextParams;
            }
        } else if (overrideCommitment !== "finalized") {
            const nextParams = [
                ...params
            ];
            nextParams[optionsObjectPositionInParams] = {
                ...paramInTargetPosition,
                [commitmentPropertyName]: overrideCommitment
            };
            return nextParams;
        }
    }
    return params;
}
// src/request-transformer-default-commitment.ts
function getDefaultCommitmentRequestTransformer({ defaultCommitment, optionsObjectPositionByMethod }) {
    return (request)=>{
        const { params, methodName } = request;
        if (!Array.isArray(params)) {
            return request;
        }
        const optionsObjectPositionInParams = optionsObjectPositionByMethod[methodName];
        if (optionsObjectPositionInParams == null) {
            return request;
        }
        return Object.freeze({
            methodName,
            params: applyDefaultCommitment({
                commitmentPropertyName: methodName === "sendTransaction" ? "preflightCommitment" : "commitment",
                optionsObjectPositionInParams,
                overrideCommitment: defaultCommitment,
                params
            })
        });
    };
}
// src/request-transformer-integer-overflow-internal.ts
function getIntegerOverflowNodeVisitor(onIntegerOverflow) {
    return (value, { keyPath })=>{
        if (typeof value === "bigint") {
            if (onIntegerOverflow && (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER)) {
                onIntegerOverflow(keyPath, value);
            }
        }
        return value;
    };
}
// src/request-transformer-integer-overflow.ts
function getIntegerOverflowRequestTransformer(onIntegerOverflow) {
    return (request)=>{
        const transformer = getTreeWalkerRequestTransformer([
            getIntegerOverflowNodeVisitor((...args)=>onIntegerOverflow(request, ...args))
        ], {
            keyPath: []
        });
        return transformer(request);
    };
}
// src/request-transformer-options-object-position-config.ts
var OPTIONS_OBJECT_POSITION_BY_METHOD = {
    accountNotifications: 1,
    blockNotifications: 1,
    getAccountInfo: 1,
    getBalance: 1,
    getBlock: 1,
    getBlockHeight: 0,
    getBlockProduction: 0,
    getBlocks: 2,
    getBlocksWithLimit: 2,
    getEpochInfo: 0,
    getFeeForMessage: 1,
    getInflationGovernor: 0,
    getInflationReward: 1,
    getLargestAccounts: 0,
    getLatestBlockhash: 0,
    getLeaderSchedule: 1,
    getMinimumBalanceForRentExemption: 1,
    getMultipleAccounts: 1,
    getProgramAccounts: 1,
    getSignaturesForAddress: 1,
    getSlot: 0,
    getSlotLeader: 0,
    getStakeMinimumDelegation: 0,
    getSupply: 0,
    getTokenAccountBalance: 1,
    getTokenAccountsByDelegate: 2,
    getTokenAccountsByOwner: 2,
    getTokenLargestAccounts: 1,
    getTokenSupply: 1,
    getTransaction: 1,
    getTransactionCount: 0,
    getVoteAccounts: 0,
    isBlockhashValid: 1,
    logsNotifications: 1,
    programNotifications: 1,
    requestAirdrop: 2,
    sendTransaction: 1,
    signatureNotifications: 1,
    simulateTransaction: 1
};
// src/request-transformer.ts
function getDefaultRequestTransformerForSolanaRpc(config) {
    const handleIntegerOverflow = config?.onIntegerOverflow;
    return (request)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(request, handleIntegerOverflow ? getIntegerOverflowRequestTransformer(handleIntegerOverflow) : (r)=>r, getBigIntDowncastRequestTransformer(), getDefaultCommitmentRequestTransformer({
            defaultCommitment: config?.defaultCommitment,
            optionsObjectPositionByMethod: OPTIONS_OBJECT_POSITION_BY_METHOD
        }));
    };
}
// src/response-transformer-bigint-upcast-internal.ts
function getBigIntUpcastVisitor(allowedNumericKeyPaths) {
    return function upcastNodeToBigIntIfNumber(value, { keyPath }) {
        const isInteger = typeof value === "number" && Number.isInteger(value) || typeof value === "bigint";
        if (!isInteger) return value;
        if (keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths)) {
            return Number(value);
        } else {
            return BigInt(value);
        }
    };
}
function keyPathIsAllowedToBeNumeric(keyPath, allowedNumericKeyPaths) {
    return allowedNumericKeyPaths.some((prohibitedKeyPath)=>{
        if (prohibitedKeyPath.length !== keyPath.length) {
            return false;
        }
        for(let ii = keyPath.length - 1; ii >= 0; ii--){
            const keyPathPart = keyPath[ii];
            const prohibitedKeyPathPart = prohibitedKeyPath[ii];
            if (prohibitedKeyPathPart !== keyPathPart && (prohibitedKeyPathPart !== KEYPATH_WILDCARD || typeof keyPathPart !== "number")) {
                return false;
            }
        }
        return true;
    });
}
// src/response-transformer-bigint-upcast.ts
function getBigIntUpcastResponseTransformer(allowedNumericKeyPaths) {
    return getTreeWalkerResponseTransformer([
        getBigIntUpcastVisitor(allowedNumericKeyPaths)
    ], {
        keyPath: []
    });
}
// src/response-transformer-result.ts
function getResultResponseTransformer() {
    return (json)=>json.result;
}
function getThrowSolanaErrorResponseTransformer() {
    return (json)=>{
        const jsonRpcResponse = json;
        if ("error" in jsonRpcResponse) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolanaErrorFromJsonRpcError"])(jsonRpcResponse.error);
        }
        return jsonRpcResponse;
    };
}
// src/response-transformer.ts
function getDefaultResponseTransformerForSolanaRpc(config) {
    return (response, request)=>{
        const methodName = request.methodName;
        const keyPaths = config?.allowedNumericKeyPaths && methodName ? config.allowedNumericKeyPaths[methodName] : void 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(response, (r)=>getThrowSolanaErrorResponseTransformer()(r, request), (r)=>getResultResponseTransformer()(r, request), (r)=>getBigIntUpcastResponseTransformer(keyPaths ?? [])(r, request));
    };
}
function getDefaultResponseTransformerForSolanaRpcSubscriptions(config) {
    return (response, request)=>{
        const methodName = request.methodName;
        const keyPaths = config?.allowedNumericKeyPaths && methodName ? config.allowedNumericKeyPaths[methodName] : void 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(response, (r)=>getBigIntUpcastResponseTransformer(keyPaths ?? [])(r, request));
    };
}
// src/response-transformer-allowed-numeric-values.ts
var jsonParsedTokenAccountsConfigs = [
    // parsed Token/Token22 token account
    [
        "data",
        "parsed",
        "info",
        "tokenAmount",
        "decimals"
    ],
    [
        "data",
        "parsed",
        "info",
        "tokenAmount",
        "uiAmount"
    ],
    [
        "data",
        "parsed",
        "info",
        "rentExemptReserve",
        "decimals"
    ],
    [
        "data",
        "parsed",
        "info",
        "rentExemptReserve",
        "uiAmount"
    ],
    [
        "data",
        "parsed",
        "info",
        "delegatedAmount",
        "decimals"
    ],
    [
        "data",
        "parsed",
        "info",
        "delegatedAmount",
        "uiAmount"
    ],
    [
        "data",
        "parsed",
        "info",
        "extensions",
        KEYPATH_WILDCARD,
        "state",
        "olderTransferFee",
        "transferFeeBasisPoints"
    ],
    [
        "data",
        "parsed",
        "info",
        "extensions",
        KEYPATH_WILDCARD,
        "state",
        "newerTransferFee",
        "transferFeeBasisPoints"
    ],
    [
        "data",
        "parsed",
        "info",
        "extensions",
        KEYPATH_WILDCARD,
        "state",
        "preUpdateAverageRate"
    ],
    [
        "data",
        "parsed",
        "info",
        "extensions",
        KEYPATH_WILDCARD,
        "state",
        "currentRate"
    ]
];
var jsonParsedAccountsConfigs = [
    ...jsonParsedTokenAccountsConfigs,
    // parsed AddressTableLookup account
    [
        "data",
        "parsed",
        "info",
        "lastExtendedSlotStartIndex"
    ],
    // parsed Config account
    [
        "data",
        "parsed",
        "info",
        "slashPenalty"
    ],
    [
        "data",
        "parsed",
        "info",
        "warmupCooldownRate"
    ],
    // parsed Token/Token22 mint account
    [
        "data",
        "parsed",
        "info",
        "decimals"
    ],
    // parsed Token/Token22 multisig account
    [
        "data",
        "parsed",
        "info",
        "numRequiredSigners"
    ],
    [
        "data",
        "parsed",
        "info",
        "numValidSigners"
    ],
    // parsed Stake account
    [
        "data",
        "parsed",
        "info",
        "stake",
        "delegation",
        "warmupCooldownRate"
    ],
    // parsed Sysvar rent account
    [
        "data",
        "parsed",
        "info",
        "exemptionThreshold"
    ],
    [
        "data",
        "parsed",
        "info",
        "burnPercent"
    ],
    // parsed Vote account
    [
        "data",
        "parsed",
        "info",
        "commission"
    ],
    [
        "data",
        "parsed",
        "info",
        "votes",
        KEYPATH_WILDCARD,
        "confirmationCount"
    ]
];
var innerInstructionsConfigs = [
    [
        "index"
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "accounts",
        KEYPATH_WILDCARD
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "programIdIndex"
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "stackHeight"
    ]
];
var messageConfig = [
    [
        "addressTableLookups",
        KEYPATH_WILDCARD,
        "writableIndexes",
        KEYPATH_WILDCARD
    ],
    [
        "addressTableLookups",
        KEYPATH_WILDCARD,
        "readonlyIndexes",
        KEYPATH_WILDCARD
    ],
    [
        "header",
        "numReadonlySignedAccounts"
    ],
    [
        "header",
        "numReadonlyUnsignedAccounts"
    ],
    [
        "header",
        "numRequiredSignatures"
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "accounts",
        KEYPATH_WILDCARD
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "programIdIndex"
    ],
    [
        "instructions",
        KEYPATH_WILDCARD,
        "stackHeight"
    ]
];
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-api/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSolanaRpcApi",
    ()=>createSolanaRpcApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-transformers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/index.ts
function createSolanaRpcApi(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJsonRpcApi"])({
        requestTransformer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultRequestTransformerForSolanaRpc"])(config),
        responseTransformer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultResponseTransformerForSolanaRpc"])({
            allowedNumericKeyPaths: getAllowedNumericKeypaths()
        })
    });
}
var memoizedKeypaths;
function getAllowedNumericKeypaths() {
    if (!memoizedKeypaths) {
        memoizedKeypaths = {
            getAccountInfo: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].map((c)=>[
                    "value",
                    ...c
                ]),
            getBlock: [
                [
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "rewards",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerInstructionsConfigs"].map((c)=>[
                        "transactions",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "meta",
                        "innerInstructions",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        ...c
                    ]),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageConfig"].map((c)=>[
                        "transactions",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "transaction",
                        "message",
                        ...c
                    ]),
                [
                    "rewards",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ]
            ],
            getClusterNodes: [
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "featureSet"
                ],
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "shredVersion"
                ]
            ],
            getInflationGovernor: [
                [
                    "initial"
                ],
                [
                    "foundation"
                ],
                [
                    "foundationTerm"
                ],
                [
                    "taper"
                ],
                [
                    "terminal"
                ]
            ],
            getInflationRate: [
                [
                    "foundation"
                ],
                [
                    "total"
                ],
                [
                    "validator"
                ]
            ],
            getInflationReward: [
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ]
            ],
            getMultipleAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].map((c)=>[
                    "value",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    ...c
                ]),
            getProgramAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].flatMap((c)=>[
                    [
                        "value",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "account",
                        ...c
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "account",
                        ...c
                    ]
                ]),
            getRecentPerformanceSamples: [
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "samplePeriodSecs"
                ]
            ],
            getTokenAccountBalance: [
                [
                    "value",
                    "decimals"
                ],
                [
                    "value",
                    "uiAmount"
                ]
            ],
            getTokenAccountsByDelegate: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedTokenAccountsConfigs"].map((c)=>[
                    "value",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "account",
                    ...c
                ]),
            getTokenAccountsByOwner: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedTokenAccountsConfigs"].map((c)=>[
                    "value",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "account",
                    ...c
                ]),
            getTokenLargestAccounts: [
                [
                    "value",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "decimals"
                ],
                [
                    "value",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiAmount"
                ]
            ],
            getTokenSupply: [
                [
                    "value",
                    "decimals"
                ],
                [
                    "value",
                    "uiAmount"
                ]
            ],
            getTransaction: [
                [
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "meta",
                    "rewards",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerInstructionsConfigs"].map((c)=>[
                        "meta",
                        "innerInstructions",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        ...c
                    ]),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageConfig"].map((c)=>[
                        "transaction",
                        "message",
                        ...c
                    ])
            ],
            getVersion: [
                [
                    "feature-set"
                ]
            ],
            getVoteAccounts: [
                [
                    "current",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ],
                [
                    "delinquent",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ]
            ],
            simulateTransaction: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].map((c)=>[
                        "value",
                        "accounts",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        ...c
                    ]),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerInstructionsConfigs"].map((c)=>[
                        "value",
                        "innerInstructions",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        ...c
                    ])
            ]
        };
    }
    return memoizedKeypaths;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-transport-http/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHttpTransport",
    ()=>createHttpTransport,
    "createHttpTransportForSolanaRpc",
    ()=>createHttpTransportForSolanaRpc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-transport-http/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec-types/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/http-transport.ts
var DISALLOWED_HEADERS = {
    accept: true,
    "content-length": true,
    "content-type": true
};
var FORBIDDEN_HEADERS = /* @__PURE__ */ Object.assign({
    "accept-charset": true,
    "access-control-request-headers": true,
    "access-control-request-method": true,
    connection: true,
    "content-length": true,
    cookie: true,
    date: true,
    dnt: true,
    expect: true,
    host: true,
    "keep-alive": true,
    origin: true,
    "permissions-policy": true,
    // Prefix matching is implemented in code, below.
    // 'proxy-': true,
    // 'sec-': true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    via: true
}, void 0);
function assertIsAllowedHttpRequestHeaders(headers) {
    const badHeaders = Object.keys(headers).filter((headerName)=>{
        const lowercaseHeaderName = headerName.toLowerCase();
        return DISALLOWED_HEADERS[headerName.toLowerCase()] === true || FORBIDDEN_HEADERS[headerName.toLowerCase()] === true || lowercaseHeaderName.startsWith("proxy-") || lowercaseHeaderName.startsWith("sec-");
    });
    if (badHeaders.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN"], {
            headers: badHeaders
        });
    }
}
function normalizeHeaders(headers) {
    const out = {};
    for(const headerName in headers){
        out[headerName.toLowerCase()] = headers[headerName];
    }
    return out;
}
// src/http-transport.ts
function createHttpTransport(config) {
    if (("TURBOPACK compile-time value", "development") !== "production" && false) ;
    const { fromJson, headers, toJson, url } = config;
    if (("TURBOPACK compile-time value", "development") !== "production" && headers) {
        assertIsAllowedHttpRequestHeaders(headers);
    }
    let dispatcherConfig;
    if ("dispatcher_NODE_ONLY" in config) {
        dispatcherConfig = {
            dispatcher: config.dispatcher_NODE_ONLY
        };
    }
    const customHeaders = headers && normalizeHeaders(headers);
    return async function makeHttpRequest({ payload, signal }) {
        const body = toJson ? toJson(payload) : JSON.stringify(payload);
        const requestInfo = {
            ...dispatcherConfig,
            body,
            headers: {
                ...customHeaders,
                // Keep these headers lowercase so they will override any user-supplied headers above.
                accept: "application/json",
                "content-length": body.length.toString(),
                "content-type": "application/json; charset=utf-8"
            },
            method: "POST",
            signal
        };
        const response = await fetch(url, requestInfo);
        if (!response.ok) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR"], {
                headers: response.headers,
                message: response.statusText,
                statusCode: response.status
            });
        }
        if (fromJson) {
            return fromJson(await response.text(), payload);
        }
        return await response.json();
    };
}
var SOLANA_RPC_METHODS = [
    "getAccountInfo",
    "getBalance",
    "getBlock",
    "getBlockCommitment",
    "getBlockHeight",
    "getBlockProduction",
    "getBlocks",
    "getBlocksWithLimit",
    "getBlockTime",
    "getClusterNodes",
    "getEpochInfo",
    "getEpochSchedule",
    "getFeeForMessage",
    "getFirstAvailableBlock",
    "getGenesisHash",
    "getHealth",
    "getHighestSnapshotSlot",
    "getIdentity",
    "getInflationGovernor",
    "getInflationRate",
    "getInflationReward",
    "getLargestAccounts",
    "getLatestBlockhash",
    "getLeaderSchedule",
    "getMaxRetransmitSlot",
    "getMaxShredInsertSlot",
    "getMinimumBalanceForRentExemption",
    "getMultipleAccounts",
    "getProgramAccounts",
    "getRecentPerformanceSamples",
    "getRecentPrioritizationFees",
    "getSignaturesForAddress",
    "getSignatureStatuses",
    "getSlot",
    "getSlotLeader",
    "getSlotLeaders",
    "getStakeMinimumDelegation",
    "getSupply",
    "getTokenAccountBalance",
    "getTokenAccountsByDelegate",
    "getTokenAccountsByOwner",
    "getTokenLargestAccounts",
    "getTokenSupply",
    "getTransaction",
    "getTransactionCount",
    "getVersion",
    "getVoteAccounts",
    "index",
    "isBlockhashValid",
    "minimumLedgerSlot",
    "requestAirdrop",
    "sendTransaction",
    "simulateTransaction"
];
function isSolanaRequest(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcPayload"])(payload) && SOLANA_RPC_METHODS.includes(payload.method);
}
// src/http-transport-for-solana-rpc.ts
function createHttpTransportForSolanaRpc(config) {
    return createHttpTransport({
        ...config,
        fromJson: (rawResponse, payload)=>isSolanaRequest(payload) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonWithBigInts"])(rawResponse) : JSON.parse(rawResponse),
        toJson: (payload)=>isSolanaRequest(payload) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyJsonWithBigints"])(payload) : JSON.stringify(payload)
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/fast-stable-stringify/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "default",
    ()=>index_default
]);
var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
    const keys = [];
    for(const name in obj){
        keys.push(name);
    }
    return keys;
};
function stringify(val, isArrayProp) {
    let i, max, str, keys, key, propVal, toStr;
    if (val === true) {
        return "true";
    }
    if (val === false) {
        return "false";
    }
    switch(typeof val){
        case "object":
            if (val === null) {
                return null;
            } else if ("toJSON" in val && typeof val.toJSON === "function") {
                return stringify(val.toJSON(), isArrayProp);
            } else {
                toStr = objToString.call(val);
                if (toStr === "[object Array]") {
                    str = "[";
                    max = val.length - 1;
                    for(i = 0; i < max; i++){
                        str += stringify(val[i], true) + ",";
                    }
                    if (max > -1) {
                        str += stringify(val[i], true);
                    }
                    return str + "]";
                } else if (toStr === "[object Object]") {
                    keys = objKeys(val).sort();
                    max = keys.length;
                    str = "";
                    i = 0;
                    while(i < max){
                        key = keys[i];
                        propVal = stringify(val[key], false);
                        if (propVal !== void 0) {
                            if (str) {
                                str += ",";
                            }
                            str += JSON.stringify(key) + ":" + propVal;
                        }
                        i++;
                    }
                    return "{" + str + "}";
                } else {
                    return JSON.stringify(val);
                }
            }
        case "function":
        case "undefined":
            return isArrayProp ? null : void 0;
        case "bigint":
            return `${val.toString()}n`;
        case "string":
            return JSON.stringify(val);
        default:
            return isFinite(val) ? val : null;
    }
}
function index_default(val) {
    const returnVal = stringify(val, false);
    if (returnVal !== void 0) {
        return "" + returnVal;
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_RPC_CONFIG",
    ()=>DEFAULT_RPC_CONFIG,
    "createDefaultRpcTransport",
    ()=>createDefaultRpcTransport,
    "createSolanaRpc",
    ()=>createSolanaRpc,
    "createSolanaRpcFromTransport",
    ()=>createSolanaRpcFromTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-api/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-transport-http/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$fast$2d$stable$2d$stringify$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/fast-stable-stringify/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// src/index.ts
function createSolanaJsonRpcIntegerOverflowError(methodName, keyPath, value) {
    let argumentLabel = "";
    if (typeof keyPath[0] === "number") {
        const argPosition = keyPath[0] + 1;
        const lastDigit = argPosition % 10;
        const lastTwoDigits = argPosition % 100;
        if (lastDigit == 1 && lastTwoDigits != 11) {
            argumentLabel = argPosition + "st";
        } else if (lastDigit == 2 && lastTwoDigits != 12) {
            argumentLabel = argPosition + "nd";
        } else if (lastDigit == 3 && lastTwoDigits != 13) {
            argumentLabel = argPosition + "rd";
        } else {
            argumentLabel = argPosition + "th";
        }
    } else {
        argumentLabel = `\`${keyPath[0].toString()}\``;
    }
    const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart)=>typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
    const error = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC__INTEGER_OVERFLOW"], {
        argumentLabel,
        keyPath,
        methodName,
        optionalPathLabel: path ? ` at path \`${path}\`` : "",
        value,
        ...path !== void 0 ? {
            path
        } : void 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(error, createSolanaJsonRpcIntegerOverflowError);
    return error;
}
// src/rpc-default-config.ts
var DEFAULT_RPC_CONFIG = {
    defaultCommitment: "confirmed",
    onIntegerOverflow (request, keyPath, value) {
        throw createSolanaJsonRpcIntegerOverflowError(request.methodName, keyPath, value);
    }
};
var e = class extends globalThis.AbortController {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this.signal);
    }
};
// src/rpc-request-coalescer.ts
var EXPLICIT_ABORT_TOKEN;
function createExplicitAbortToken() {
    return ("TURBOPACK compile-time truthy", 1) ? {
        EXPLICIT_ABORT_TOKEN: "This object is thrown from the request that underlies a series of coalesced requests when the last request in that series aborts"
    } : "TURBOPACK unreachable";
}
function getRpcTransportWithRequestCoalescing(transport, getDeduplicationKey) {
    let coalescedRequestsByDeduplicationKey;
    return async function makeCoalescedHttpRequest(request) {
        const { payload, signal } = request;
        const deduplicationKey = getDeduplicationKey(payload);
        if (deduplicationKey === void 0) {
            return await transport(request);
        }
        if (!coalescedRequestsByDeduplicationKey) {
            queueMicrotask(()=>{
                coalescedRequestsByDeduplicationKey = void 0;
            });
            coalescedRequestsByDeduplicationKey = {};
        }
        if (coalescedRequestsByDeduplicationKey[deduplicationKey] == null) {
            const abortController = new e();
            const responsePromise = (async ()=>{
                try {
                    return await transport({
                        ...request,
                        signal: abortController.signal
                    });
                } catch (e2) {
                    if (e2 === (EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken())) {
                        return;
                    }
                    throw e2;
                }
            })();
            coalescedRequestsByDeduplicationKey[deduplicationKey] = {
                abortController,
                numConsumers: 0,
                responsePromise
            };
        }
        const coalescedRequest = coalescedRequestsByDeduplicationKey[deduplicationKey];
        coalescedRequest.numConsumers++;
        if (signal) {
            const responsePromise = coalescedRequest.responsePromise;
            return await new Promise((resolve, reject)=>{
                const handleAbort = (e2)=>{
                    signal.removeEventListener("abort", handleAbort);
                    coalescedRequest.numConsumers -= 1;
                    queueMicrotask(()=>{
                        if (coalescedRequest.numConsumers === 0) {
                            const abortController = coalescedRequest.abortController;
                            abortController.abort(EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken());
                        }
                    });
                    reject(e2.target.reason);
                };
                signal.addEventListener("abort", handleAbort);
                responsePromise.then(resolve).catch(reject).finally(()=>{
                    signal.removeEventListener("abort", handleAbort);
                });
            });
        } else {
            return await coalescedRequest.responsePromise;
        }
    };
}
function getSolanaRpcPayloadDeduplicationKey(payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcPayload"])(payload) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$fast$2d$stable$2d$stringify$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
        payload.method,
        payload.params
    ]) : void 0;
}
// src/rpc-transport.ts
function normalizeHeaders(headers) {
    const out = {};
    for(const headerName in headers){
        out[headerName.toLowerCase()] = headers[headerName];
    }
    return out;
}
function createDefaultRpcTransport(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transport$2d$http$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHttpTransportForSolanaRpc"])({
        ...config,
        headers: {
            ...{
                // Keep these headers lowercase so they will be overridden by any user-supplied headers below.
                "accept-encoding": // Natively supported by Node LTS v20.18.0 and above.
                "br,gzip,deflate"
            },
            ...config.headers ? normalizeHeaders(config.headers) : void 0,
            ...{
                // Keep these headers lowercase so they will override any user-supplied headers above.
                "solana-client": `js/${"2.3.0"}`
            }
        }
    }), (transport)=>getRpcTransportWithRequestCoalescing(transport, getSolanaRpcPayloadDeduplicationKey));
}
// src/rpc.ts
function createSolanaRpc(clusterUrl, config) {
    return createSolanaRpcFromTransport(createDefaultRpcTransport({
        url: clusterUrl,
        ...config
    }));
}
function createSolanaRpcFromTransport(transport) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRpc"])({
        api: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSolanaRpcApi"])(DEFAULT_RPC_CONFIG),
        transport
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/subscribable/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAsyncIterableFromDataPublisher",
    ()=>createAsyncIterableFromDataPublisher,
    "demultiplexDataPublisher",
    ()=>demultiplexDataPublisher,
    "getDataPublisherFromEventEmitter",
    ()=>getDataPublisherFromEventEmitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/subscribable/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
// src/async-iterable.ts
var e = class extends globalThis.AbortController {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this.signal);
    }
};
var s = class extends globalThis.EventTarget {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this);
    }
};
// src/async-iterable.ts
var EXPLICIT_ABORT_TOKEN;
function createExplicitAbortToken() {
    return Symbol(("TURBOPACK compile-time truthy", 1) ? "This symbol is thrown from a socket's iterator when the connection is explicitly aborted by the user" : "TURBOPACK unreachable");
}
var UNINITIALIZED = Symbol();
function createAsyncIterableFromDataPublisher({ abortSignal, dataChannelName, dataPublisher, errorChannelName }) {
    const iteratorState = /* @__PURE__ */ new Map();
    function publishErrorToAllIterators(reason) {
        for (const [iteratorKey, state] of iteratorState.entries()){
            if (state.__hasPolled) {
                iteratorState.delete(iteratorKey);
                state.onError(reason);
            } else {
                state.publishQueue.push({
                    __type: 1 /* ERROR */ ,
                    err: reason
                });
            }
        }
    }
    const abortController = new e();
    abortSignal.addEventListener("abort", ()=>{
        abortController.abort();
        publishErrorToAllIterators(EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken());
    });
    const options = {
        signal: abortController.signal
    };
    let firstError = UNINITIALIZED;
    dataPublisher.on(errorChannelName, (err)=>{
        if (firstError === UNINITIALIZED) {
            firstError = err;
            abortController.abort();
            publishErrorToAllIterators(err);
        }
    }, options);
    dataPublisher.on(dataChannelName, (data)=>{
        iteratorState.forEach((state, iteratorKey)=>{
            if (state.__hasPolled) {
                const { onData } = state;
                iteratorState.set(iteratorKey, {
                    __hasPolled: false,
                    publishQueue: []
                });
                onData(data);
            } else {
                state.publishQueue.push({
                    __type: 0 /* DATA */ ,
                    data
                });
            }
        });
    }, options);
    return {
        async *[Symbol.asyncIterator] () {
            if (abortSignal.aborted) {
                return;
            }
            if (firstError !== UNINITIALIZED) {
                throw firstError;
            }
            const iteratorKey = Symbol();
            iteratorState.set(iteratorKey, {
                __hasPolled: false,
                publishQueue: []
            });
            try {
                while(true){
                    const state = iteratorState.get(iteratorKey);
                    if (!state) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING"]);
                    }
                    if (state.__hasPolled) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE"]);
                    }
                    const publishQueue = state.publishQueue;
                    try {
                        if (publishQueue.length) {
                            state.publishQueue = [];
                            for (const item of publishQueue){
                                if (item.__type === 0 /* DATA */ ) {
                                    yield item.data;
                                } else {
                                    throw item.err;
                                }
                            }
                        } else {
                            yield await new Promise((resolve, reject)=>{
                                iteratorState.set(iteratorKey, {
                                    __hasPolled: true,
                                    onData: resolve,
                                    onError: reject
                                });
                            });
                        }
                    } catch (e2) {
                        if (e2 === (EXPLICIT_ABORT_TOKEN ||= createExplicitAbortToken())) {
                            return;
                        } else {
                            throw e2;
                        }
                    }
                }
            } finally{
                iteratorState.delete(iteratorKey);
            }
        }
    };
}
// src/data-publisher.ts
function getDataPublisherFromEventEmitter(eventEmitter) {
    return {
        on (channelName, subscriber, options) {
            function innerListener(ev) {
                if (ev instanceof CustomEvent) {
                    const data = ev.detail;
                    subscriber(data);
                } else {
                    subscriber();
                }
            }
            eventEmitter.addEventListener(channelName, innerListener, options);
            return ()=>{
                eventEmitter.removeEventListener(channelName, innerListener);
            };
        }
    };
}
// src/demultiplex.ts
function demultiplexDataPublisher(publisher, sourceChannelName, messageTransformer) {
    let innerPublisherState;
    const eventTarget = new s();
    const demultiplexedDataPublisher = getDataPublisherFromEventEmitter(eventTarget);
    return {
        ...demultiplexedDataPublisher,
        on (channelName, subscriber, options) {
            if (!innerPublisherState) {
                const innerPublisherUnsubscribe = publisher.on(sourceChannelName, (sourceMessage)=>{
                    const transformResult = messageTransformer(sourceMessage);
                    if (!transformResult) {
                        return;
                    }
                    const [destinationChannelName, message] = transformResult;
                    eventTarget.dispatchEvent(new CustomEvent(destinationChannelName, {
                        detail: message
                    }));
                });
                innerPublisherState = {
                    dispose: innerPublisherUnsubscribe,
                    numSubscribers: 0
                };
            }
            innerPublisherState.numSubscribers++;
            const unsubscribe = demultiplexedDataPublisher.on(channelName, subscriber, options);
            let isActive = true;
            function handleUnsubscribe() {
                if (!isActive) {
                    return;
                }
                isActive = false;
                options?.signal.removeEventListener("abort", handleUnsubscribe);
                innerPublisherState.numSubscribers--;
                if (innerPublisherState.numSubscribers === 0) {
                    innerPublisherState.dispose();
                    innerPublisherState = void 0;
                }
                unsubscribe();
            }
            options?.signal.addEventListener("abort", handleUnsubscribe);
            return handleUnsubscribe;
        }
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRpcSubscriptionsApi",
    ()=>createRpcSubscriptionsApi,
    "createSubscriptionRpc",
    ()=>createSubscriptionRpc,
    "executeRpcPubSubSubscriptionPlan",
    ()=>executeRpcPubSubSubscriptionPlan,
    "transformChannelInboundMessages",
    ()=>transformChannelInboundMessages,
    "transformChannelOutboundMessages",
    ()=>transformChannelOutboundMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/subscribable/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/node_modules/@solana/promises/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec-types/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/rpc-subscriptions.ts
function createSubscriptionRpc(rpcConfig) {
    return new Proxy(rpcConfig.api, {
        defineProperty () {
            return false;
        },
        deleteProperty () {
            return false;
        },
        get (target, p, receiver) {
            if (p === "then") {
                return void 0;
            }
            return function(...rawParams) {
                const notificationName = p.toString();
                const createRpcSubscriptionPlan = Reflect.get(target, notificationName, receiver);
                if (!createRpcSubscriptionPlan) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN"], {
                        notificationName
                    });
                }
                const subscriptionPlan = createRpcSubscriptionPlan(...rawParams);
                return createPendingRpcSubscription(rpcConfig.transport, subscriptionPlan);
            };
        }
    });
}
function createPendingRpcSubscription(transport, subscriptionsPlan) {
    return {
        async subscribe ({ abortSignal }) {
            const notificationsDataPublisher = await transport({
                signal: abortSignal,
                ...subscriptionsPlan
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAsyncIterableFromDataPublisher"])({
                abortSignal,
                dataChannelName: "notification",
                dataPublisher: notificationsDataPublisher,
                errorChannelName: "error"
            });
        }
    };
}
// src/rpc-subscriptions-api.ts
function createRpcSubscriptionsApi(config) {
    return new Proxy({}, {
        defineProperty () {
            return false;
        },
        deleteProperty () {
            return false;
        },
        get (...args) {
            const [_, p] = args;
            const methodName = p.toString();
            return function(...params) {
                const rawRequest = {
                    methodName,
                    params
                };
                const request = config.requestTransformer ? config.requestTransformer(rawRequest) : rawRequest;
                return {
                    execute (planConfig) {
                        return config.planExecutor({
                            ...planConfig,
                            request
                        });
                    },
                    request
                };
            };
        }
    });
}
// src/rpc-subscriptions-channel.ts
function transformChannelInboundMessages(channel, transform) {
    return Object.freeze({
        ...channel,
        on (type, subscriber, options) {
            if (type !== "message") {
                return channel.on(type, subscriber, options);
            }
            return channel.on("message", (message)=>subscriber(transform(message)), options);
        }
    });
}
function transformChannelOutboundMessages(channel, transform) {
    return Object.freeze({
        ...channel,
        send: (message)=>channel.send(transform(message))
    });
}
var e = class extends globalThis.AbortController {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this.signal);
    }
};
var subscriberCountBySubscriptionIdByChannel = /* @__PURE__ */ new WeakMap();
function decrementSubscriberCountAndReturnNewCount(channel, subscriptionId) {
    return augmentSubscriberCountAndReturnNewCount(-1, channel, subscriptionId);
}
function incrementSubscriberCount(channel, subscriptionId) {
    augmentSubscriberCountAndReturnNewCount(1, channel, subscriptionId);
}
function getSubscriberCountBySubscriptionIdForChannel(channel) {
    let subscriberCountBySubscriptionId = subscriberCountBySubscriptionIdByChannel.get(channel);
    if (!subscriberCountBySubscriptionId) {
        subscriberCountBySubscriptionIdByChannel.set(channel, subscriberCountBySubscriptionId = {});
    }
    return subscriberCountBySubscriptionId;
}
function augmentSubscriberCountAndReturnNewCount(amount, channel, subscriptionId) {
    if (subscriptionId === void 0) {
        return;
    }
    const subscriberCountBySubscriptionId = getSubscriberCountBySubscriptionIdForChannel(channel);
    if (!subscriberCountBySubscriptionId[subscriptionId] && amount > 0) {
        subscriberCountBySubscriptionId[subscriptionId] = 0;
    }
    const newCount = amount + subscriberCountBySubscriptionId[subscriptionId];
    if (newCount <= 0) {
        delete subscriberCountBySubscriptionId[subscriptionId];
    } else {
        subscriberCountBySubscriptionId[subscriptionId] = newCount;
    }
    return newCount;
}
var cache = /* @__PURE__ */ new WeakMap();
function getMemoizedDemultiplexedNotificationPublisherFromChannelAndResponseTransformer(channel, subscribeRequest, responseTransformer) {
    let publisherByResponseTransformer = cache.get(channel);
    if (!publisherByResponseTransformer) {
        cache.set(channel, publisherByResponseTransformer = /* @__PURE__ */ new WeakMap());
    }
    const responseTransformerKey = responseTransformer ?? channel;
    let publisher = publisherByResponseTransformer.get(responseTransformerKey);
    if (!publisher) {
        publisherByResponseTransformer.set(responseTransformerKey, publisher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demultiplexDataPublisher"])(channel, "message", (rawMessage)=>{
            const message = rawMessage;
            if (!("method" in message)) {
                return;
            }
            const transformedNotification = responseTransformer ? responseTransformer(message.params.result, subscribeRequest) : message.params.result;
            return [
                `notification:${message.params.subscription}`,
                transformedNotification
            ];
        }));
    }
    return publisher;
}
async function executeRpcPubSubSubscriptionPlan({ channel, responseTransformer, signal, subscribeRequest, unsubscribeMethodName }) {
    let subscriptionId;
    channel.on("error", ()=>{
        subscriptionId = void 0;
        subscriberCountBySubscriptionIdByChannel.delete(channel);
    }, {
        signal
    });
    const abortPromise = new Promise((_, reject)=>{
        function handleAbort() {
            if (decrementSubscriberCountAndReturnNewCount(channel, subscriptionId) === 0) {
                const unsubscribePayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRpcMessage"])({
                    methodName: unsubscribeMethodName,
                    params: [
                        subscriptionId
                    ]
                });
                subscriptionId = void 0;
                channel.send(unsubscribePayload).catch(()=>{});
            }
            reject(this.reason);
        }
        if (signal.aborted) {
            handleAbort.call(signal);
        } else {
            signal.addEventListener("abort", handleAbort);
        }
    });
    const subscribePayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRpcMessage"])(subscribeRequest);
    await channel.send(subscribePayload);
    const subscriptionIdPromise = new Promise((resolve, reject)=>{
        const abortController = new e();
        signal.addEventListener("abort", abortController.abort.bind(abortController));
        const options = {
            signal: abortController.signal
        };
        channel.on("error", (err)=>{
            abortController.abort();
            reject(err);
        }, options);
        channel.on("message", (message)=>{
            if (message && typeof message === "object" && "id" in message && message.id === subscribePayload.id) {
                abortController.abort();
                if ("error" in message) {
                    reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSolanaErrorFromJsonRpcError"])(message.error));
                } else {
                    resolve(message.result);
                }
            }
        }, options);
    });
    subscriptionId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$promises$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeRace"])([
        abortPromise,
        subscriptionIdPromise
    ]);
    if (subscriptionId == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID"]);
    }
    incrementSubscriberCount(channel, subscriptionId);
    const notificationPublisher = getMemoizedDemultiplexedNotificationPublisherFromChannelAndResponseTransformer(channel, subscribeRequest, responseTransformer);
    const notificationKey = `notification:${subscriptionId}`;
    return {
        on (type, listener, options) {
            switch(type){
                case "notification":
                    return notificationPublisher.on(notificationKey, listener, options);
                case "error":
                    return channel.on("error", listener, options);
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED"], {
                        channelName: type,
                        supportedChannelNames: [
                            "notification",
                            "error"
                        ]
                    });
            }
        }
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-subscriptions-api/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSolanaRpcSubscriptionsApi",
    ()=>createSolanaRpcSubscriptionsApi,
    "createSolanaRpcSubscriptionsApi_UNSTABLE",
    ()=>createSolanaRpcSubscriptionsApi_UNSTABLE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-transformers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/index.ts
function createSolanaRpcSubscriptionsApi_INTERNAL(config) {
    const requestTransformer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultRequestTransformerForSolanaRpc"])(config);
    const responseTransformer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultResponseTransformerForSolanaRpcSubscriptions"])({
        allowedNumericKeyPaths: getAllowedNumericKeypaths()
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRpcSubscriptionsApi"])({
        planExecutor ({ request, ...rest }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeRpcPubSubSubscriptionPlan"])({
                ...rest,
                responseTransformer,
                subscribeRequest: {
                    ...request,
                    methodName: request.methodName.replace(/Notifications$/, "Subscribe")
                },
                unsubscribeMethodName: request.methodName.replace(/Notifications$/, "Unsubscribe")
            });
        },
        requestTransformer
    });
}
function createSolanaRpcSubscriptionsApi(config) {
    return createSolanaRpcSubscriptionsApi_INTERNAL(config);
}
function createSolanaRpcSubscriptionsApi_UNSTABLE(config) {
    return createSolanaRpcSubscriptionsApi_INTERNAL(config);
}
var memoizedKeypaths;
function getAllowedNumericKeypaths() {
    if (!memoizedKeypaths) {
        memoizedKeypaths = {
            accountNotifications: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].map((c)=>[
                    "value",
                    ...c
                ]),
            blockNotifications: [
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "preTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accountIndex"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "postTokenBalances",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "uiTokenAmount",
                    "decimals"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "rewards",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "innerInstructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "index"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "innerInstructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "instructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "programIdIndex"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "meta",
                    "innerInstructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "instructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accounts",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"]
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "addressTableLookups",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "writableIndexes",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"]
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "addressTableLookups",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "readonlyIndexes",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"]
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "instructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "programIdIndex"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "instructions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "accounts",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"]
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "header",
                    "numReadonlySignedAccounts"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "header",
                    "numReadonlyUnsignedAccounts"
                ],
                [
                    "value",
                    "block",
                    "transactions",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "transaction",
                    "message",
                    "header",
                    "numRequiredSignatures"
                ],
                [
                    "value",
                    "block",
                    "rewards",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                    "commission"
                ]
            ],
            programNotifications: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonParsedAccountsConfigs"].flatMap((c)=>[
                    [
                        "value",
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "account",
                        ...c
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$transformers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYPATH_WILDCARD"],
                        "account",
                        ...c
                    ]
                ])
        };
    }
    return memoizedKeypaths;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-subscriptions-channel-websocket/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWebSocketChannel",
    ()=>createWebSocketChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-channel-websocket/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/subscribable/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
// src/websocket-channel.ts
var s = class extends globalThis.EventTarget {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this);
    }
};
var l = globalThis.WebSocket ? globalThis.WebSocket : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
// src/websocket-channel.ts
var NORMAL_CLOSURE_CODE = 1e3;
function createWebSocketChannel({ sendBufferHighWatermark, signal, url }) {
    if (signal.aborted) {
        return Promise.reject(signal.reason);
    }
    let bufferDrainWatcher;
    let hasConnected = false;
    const listenerRemovers = /* @__PURE__ */ new Set();
    function cleanupListeners() {
        listenerRemovers.forEach((r)=>{
            r();
        });
        listenerRemovers.clear();
    }
    function handleAbort() {
        cleanupListeners();
        if (!hasConnected) {
            rejectOpen(signal.reason);
        }
        if (webSocket.readyState !== l.CLOSED && webSocket.readyState !== l.CLOSING) {
            webSocket.close(NORMAL_CLOSURE_CODE);
        }
    }
    function handleClose(ev) {
        cleanupListeners();
        bufferDrainWatcher?.onCancel();
        signal.removeEventListener("abort", handleAbort);
        webSocket.removeEventListener("close", handleClose);
        webSocket.removeEventListener("error", handleError);
        webSocket.removeEventListener("message", handleMessage);
        webSocket.removeEventListener("open", handleOpen);
        if (!signal.aborted && !(ev.wasClean && ev.code === NORMAL_CLOSURE_CODE)) {
            eventTarget.dispatchEvent(new CustomEvent("error", {
                detail: new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED"], {
                    cause: ev
                })
            }));
        }
    }
    function handleError(ev) {
        if (signal.aborted) {
            return;
        }
        if (!hasConnected) {
            const failedToConnectError = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT"], {
                errorEvent: ev
            });
            rejectOpen(failedToConnectError);
            eventTarget.dispatchEvent(new CustomEvent("error", {
                detail: failedToConnectError
            }));
        }
    }
    function handleMessage(ev) {
        if (signal.aborted) {
            return;
        }
        eventTarget.dispatchEvent(new CustomEvent("message", {
            detail: ev.data
        }));
    }
    const eventTarget = new s();
    const dataPublisher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$subscribable$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataPublisherFromEventEmitter"])(eventTarget);
    function handleOpen() {
        hasConnected = true;
        resolveOpen({
            ...dataPublisher,
            async send (message) {
                if (webSocket.readyState !== l.OPEN) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED"]);
                }
                if (!bufferDrainWatcher && webSocket.bufferedAmount > sendBufferHighWatermark) {
                    let onCancel;
                    const promise = new Promise((resolve, reject)=>{
                        const intervalId = setInterval(()=>{
                            if (webSocket.readyState !== l.OPEN || !(webSocket.bufferedAmount > sendBufferHighWatermark)) {
                                clearInterval(intervalId);
                                bufferDrainWatcher = void 0;
                                resolve();
                            }
                        }, 16);
                        onCancel = ()=>{
                            bufferDrainWatcher = void 0;
                            clearInterval(intervalId);
                            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED"]));
                        };
                    });
                    bufferDrainWatcher = {
                        onCancel,
                        promise
                    };
                }
                if (bufferDrainWatcher) {
                    if (ArrayBuffer.isView(message) && !(message instanceof DataView)) {
                        const TypedArrayConstructor = message.constructor;
                        message = new TypedArrayConstructor(message);
                    }
                    await bufferDrainWatcher.promise;
                }
                webSocket.send(message);
            }
        });
    }
    const webSocket = new l(url);
    signal.addEventListener("abort", handleAbort);
    webSocket.addEventListener("close", handleClose);
    webSocket.addEventListener("error", handleError);
    webSocket.addEventListener("message", handleMessage);
    webSocket.addEventListener("open", handleOpen);
    let rejectOpen;
    let resolveOpen;
    return new Promise((resolve, reject)=>{
        rejectOpen = reject;
        resolveOpen = resolve;
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/rpc-subscriptions/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_RPC_SUBSCRIPTIONS_CONFIG",
    ()=>DEFAULT_RPC_SUBSCRIPTIONS_CONFIG,
    "createDefaultRpcSubscriptionsChannelCreator",
    ()=>createDefaultRpcSubscriptionsChannelCreator,
    "createDefaultRpcSubscriptionsTransport",
    ()=>createDefaultRpcSubscriptionsTransport,
    "createDefaultSolanaRpcSubscriptionsChannelCreator",
    ()=>createDefaultSolanaRpcSubscriptionsChannelCreator,
    "createRpcSubscriptionsTransportFromChannelCreator",
    ()=>createRpcSubscriptionsTransportFromChannelCreator,
    "createSolanaRpcSubscriptions",
    ()=>createSolanaRpcSubscriptions,
    "createSolanaRpcSubscriptionsFromTransport",
    ()=>createSolanaRpcSubscriptionsFromTransport,
    "createSolanaRpcSubscriptions_UNSTABLE",
    ()=>createSolanaRpcSubscriptions_UNSTABLE,
    "getRpcSubscriptionsChannelWithJSONSerialization",
    ()=>getRpcSubscriptionsChannelWithJSONSerialization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-api/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-spec/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions-channel-websocket/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-spec-types/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$fast$2d$stable$2d$stringify$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/fast-stable-stringify/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// src/index.ts
function createSolanaJsonRpcIntegerOverflowError(methodName, keyPath, value) {
    let argumentLabel = "";
    if (typeof keyPath[0] === "number") {
        const argPosition = keyPath[0] + 1;
        const lastDigit = argPosition % 10;
        const lastTwoDigits = argPosition % 100;
        if (lastDigit == 1 && lastTwoDigits != 11) {
            argumentLabel = argPosition + "st";
        } else if (lastDigit == 2 && lastTwoDigits != 12) {
            argumentLabel = argPosition + "nd";
        } else if (lastDigit == 3 && lastTwoDigits != 13) {
            argumentLabel = argPosition + "rd";
        } else {
            argumentLabel = argPosition + "th";
        }
    } else {
        argumentLabel = `\`${keyPath[0].toString()}\``;
    }
    const path = keyPath.length > 1 ? keyPath.slice(1).map((pathPart)=>typeof pathPart === "number" ? `[${pathPart}]` : pathPart).join(".") : void 0;
    const error = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC__INTEGER_OVERFLOW"], {
        argumentLabel,
        keyPath,
        methodName,
        optionalPathLabel: path ? ` at path \`${path}\`` : "",
        value,
        ...path !== void 0 ? {
            path
        } : void 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(error, createSolanaJsonRpcIntegerOverflowError);
    return error;
}
// src/rpc-default-config.ts
var DEFAULT_RPC_SUBSCRIPTIONS_CONFIG = {
    defaultCommitment: "confirmed",
    onIntegerOverflow (request, keyPath, value) {
        throw createSolanaJsonRpcIntegerOverflowError(request.methodName, keyPath, value);
    }
};
var e = class extends globalThis.AbortController {
    constructor(...t){
        super(...t), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["setMaxListeners"])(Number.MAX_SAFE_INTEGER, this.signal);
    }
};
// src/rpc-subscriptions-autopinger.ts
var PING_PAYLOAD = {
    jsonrpc: "2.0",
    method: "ping"
};
function getRpcSubscriptionsChannelWithAutoping({ abortSignal: callerAbortSignal, channel, intervalMs }) {
    let intervalId;
    function sendPing() {
        channel.send(PING_PAYLOAD).catch((e2)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(e2, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED"])) {
                pingerAbortController.abort();
            }
        });
    }
    function restartPingTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(sendPing, intervalMs);
    }
    const pingerAbortController = new e();
    pingerAbortController.signal.addEventListener("abort", ()=>{
        clearInterval(intervalId);
    });
    callerAbortSignal.addEventListener("abort", ()=>{
        pingerAbortController.abort();
    });
    channel.on("error", ()=>{
        pingerAbortController.abort();
    }, {
        signal: pingerAbortController.signal
    });
    channel.on("message", restartPingTimer, {
        signal: pingerAbortController.signal
    });
    {
        restartPingTimer();
    }
    return {
        ...channel,
        send (...args) {
            if (!pingerAbortController.signal.aborted) {
                restartPingTimer();
            }
            return channel.send(...args);
        }
    };
}
// src/rpc-subscriptions-channel-pool-internal.ts
function createChannelPool() {
    return {
        entries: [],
        freeChannelIndex: -1
    };
}
// src/rpc-subscriptions-channel-pool.ts
function getChannelPoolingChannelCreator(createChannel, { maxSubscriptionsPerChannel, minChannels }) {
    const pool = createChannelPool();
    function recomputeFreeChannelIndex() {
        if (pool.entries.length < minChannels) {
            pool.freeChannelIndex = -1;
            return;
        }
        let mostFreeChannel;
        for(let ii = 0; ii < pool.entries.length; ii++){
            const nextPoolIndex = (pool.freeChannelIndex + ii + 2) % pool.entries.length;
            const nextPoolEntry = // Start from the item two positions after the current item. This way, the
            // search will finish on the item after the current one. This ensures that, if
            // any channels tie for having the most capacity, the one that will be chosen is
            // the one immediately to the current one's right (wrapping around).
            pool.entries[nextPoolIndex];
            if (nextPoolEntry.subscriptionCount < maxSubscriptionsPerChannel && (!mostFreeChannel || mostFreeChannel.subscriptionCount >= nextPoolEntry.subscriptionCount)) {
                mostFreeChannel = {
                    poolIndex: nextPoolIndex,
                    subscriptionCount: nextPoolEntry.subscriptionCount
                };
            }
        }
        pool.freeChannelIndex = mostFreeChannel?.poolIndex ?? -1;
    }
    return function getExistingChannelWithMostCapacityOrCreateChannel({ abortSignal }) {
        let poolEntry;
        function destroyPoolEntry() {
            const index = pool.entries.findIndex((entry)=>entry === poolEntry);
            pool.entries.splice(index, 1);
            poolEntry.dispose();
            recomputeFreeChannelIndex();
        }
        if (pool.freeChannelIndex === -1) {
            const abortController = new e();
            const newChannelPromise = createChannel({
                abortSignal: abortController.signal
            });
            newChannelPromise.then((newChannel)=>{
                newChannel.on("error", destroyPoolEntry, {
                    signal: abortController.signal
                });
            }).catch(destroyPoolEntry);
            poolEntry = {
                channel: newChannelPromise,
                dispose () {
                    abortController.abort();
                },
                subscriptionCount: 0
            };
            pool.entries.push(poolEntry);
        } else {
            poolEntry = pool.entries[pool.freeChannelIndex];
        }
        poolEntry.subscriptionCount++;
        abortSignal.addEventListener("abort", function destroyConsumer() {
            poolEntry.subscriptionCount--;
            if (poolEntry.subscriptionCount === 0) {
                destroyPoolEntry();
            } else if (pool.freeChannelIndex !== -1) {
                pool.freeChannelIndex--;
                recomputeFreeChannelIndex();
            }
        });
        recomputeFreeChannelIndex();
        return poolEntry.channel;
    };
}
function getRpcSubscriptionsChannelWithJSONSerialization(channel) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(channel, (c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformChannelInboundMessages"])(c, JSON.parse), (c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformChannelOutboundMessages"])(c, JSON.stringify));
}
function getRpcSubscriptionsChannelWithBigIntJSONSerialization(channel) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(channel, (c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformChannelInboundMessages"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonWithBigInts"]), (c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformChannelOutboundMessages"])(c, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$spec$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyJsonWithBigints"]));
}
// src/rpc-subscriptions-channel.ts
function createDefaultSolanaRpcSubscriptionsChannelCreator(config) {
    return createDefaultRpcSubscriptionsChannelCreatorImpl({
        ...config,
        jsonSerializer: getRpcSubscriptionsChannelWithBigIntJSONSerialization
    });
}
function createDefaultRpcSubscriptionsChannelCreator(config) {
    return createDefaultRpcSubscriptionsChannelCreatorImpl({
        ...config,
        jsonSerializer: getRpcSubscriptionsChannelWithJSONSerialization
    });
}
function createDefaultRpcSubscriptionsChannelCreatorImpl(config) {
    if (/^wss?:/i.test(config.url) === false) {
        const protocolMatch = config.url.match(/^([^:]+):/);
        throw new DOMException(protocolMatch ? `Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${protocolMatch[1]}:' is not allowed.` : `Failed to construct 'WebSocket': The URL '${config.url}' is invalid.`);
    }
    const { intervalMs, ...rest } = config;
    const createDefaultRpcSubscriptionsChannel = ({ abortSignal })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$channel$2d$websocket$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWebSocketChannel"])({
            ...rest,
            sendBufferHighWatermark: config.sendBufferHighWatermark ?? // Let 128KB of data into the WebSocket buffer before buffering it in the app.
            131072,
            signal: abortSignal
        }).then(config.jsonSerializer).then((channel)=>getRpcSubscriptionsChannelWithAutoping({
                abortSignal,
                channel,
                intervalMs: intervalMs ?? 5e3
            }));
    };
    return getChannelPoolingChannelCreator(createDefaultRpcSubscriptionsChannel, {
        maxSubscriptionsPerChannel: config.maxSubscriptionsPerChannel ?? /**
     * A note about this default. The idea here is that, because some RPC providers impose
     * an upper limit on the number of subscriptions you can make per channel, we must
     * choose a number low enough to avoid hitting that limit. Without knowing what provider
     * a given person is using, or what their limit is, we have to choose the lowest of all
     * known limits. As of this writing (October 2024) that is the public mainnet RPC node
     * (api.mainnet-beta.solana.com) at 100 subscriptions.
     */ 100,
        minChannels: config.minChannels ?? 1
    });
}
function getRpcSubscriptionsTransportWithSubscriptionCoalescing(transport) {
    const cache = /* @__PURE__ */ new Map();
    return function rpcSubscriptionsTransportWithSubscriptionCoalescing(config) {
        const { request, signal } = config;
        const subscriptionConfigurationHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$fast$2d$stable$2d$stringify$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            request.methodName,
            request.params
        ]);
        let cachedDataPublisherPromise = cache.get(subscriptionConfigurationHash);
        if (!cachedDataPublisherPromise) {
            const abortController = new e();
            const dataPublisherPromise = transport({
                ...config,
                signal: abortController.signal
            });
            dataPublisherPromise.then((dataPublisher)=>{
                dataPublisher.on("error", ()=>{
                    cache.delete(subscriptionConfigurationHash);
                    abortController.abort();
                }, {
                    signal: abortController.signal
                });
            }).catch(()=>{});
            cache.set(subscriptionConfigurationHash, cachedDataPublisherPromise = {
                abortController,
                dataPublisherPromise,
                numSubscribers: 0
            });
        }
        cachedDataPublisherPromise.numSubscribers++;
        signal.addEventListener("abort", ()=>{
            cachedDataPublisherPromise.numSubscribers--;
            if (cachedDataPublisherPromise.numSubscribers === 0) {
                queueMicrotask(()=>{
                    if (cachedDataPublisherPromise.numSubscribers === 0) {
                        cache.delete(subscriptionConfigurationHash);
                        cachedDataPublisherPromise.abortController.abort();
                    }
                });
            }
        }, {
            signal: cachedDataPublisherPromise.abortController.signal
        });
        return cachedDataPublisherPromise.dataPublisherPromise;
    };
}
// src/rpc-subscriptions-transport.ts
function createDefaultRpcSubscriptionsTransport({ createChannel }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(createRpcSubscriptionsTransportFromChannelCreator(createChannel), (transport)=>getRpcSubscriptionsTransportWithSubscriptionCoalescing(transport));
}
function createRpcSubscriptionsTransportFromChannelCreator(createChannel) {
    return async ({ execute, signal })=>{
        const channel = await createChannel({
            abortSignal: signal
        });
        return await execute({
            channel,
            signal
        });
    };
}
// src/rpc-subscriptions.ts
function createSolanaRpcSubscriptionsImpl(clusterUrl, config) {
    const transport = createDefaultRpcSubscriptionsTransport({
        createChannel: createDefaultSolanaRpcSubscriptionsChannelCreator({
            ...config,
            url: clusterUrl
        })
    });
    return createSolanaRpcSubscriptionsFromTransport(transport);
}
function createSolanaRpcSubscriptions(clusterUrl, config) {
    return createSolanaRpcSubscriptionsImpl(clusterUrl, config);
}
function createSolanaRpcSubscriptions_UNSTABLE(clusterUrl, config) {
    return createSolanaRpcSubscriptionsImpl(clusterUrl, config);
}
function createSolanaRpcSubscriptionsFromTransport(transport) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$spec$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSubscriptionRpc"])({
        api: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2d$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSolanaRpcSubscriptionsApi"])(DEFAULT_RPC_SUBSCRIPTIONS_CONFIG),
        transport
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 *
 * Efficiently compare {@link Indexed} arrays (e.g. `Array` and `Uint8Array`).
 *
 * @param a An array.
 * @param b Another array.
 *
 * @return `true` if the arrays have the same length and elements, `false` otherwise.
 *
 * @group Internal
 */ __turbopack_context__.s([
    "arraysEqual",
    ()=>arraysEqual,
    "bytesEqual",
    ()=>bytesEqual
]);
function arraysEqual(a, b) {
    if (a === b) return true;
    const length = a.length;
    if (length !== b.length) return false;
    for(let i = 0; i < length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function bytesEqual(a, b) {
    return arraysEqual(a, b);
} //# sourceMappingURL=util.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/signMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyMessageSignature",
    ()=>verifyMessageSignature,
    "verifySignMessage",
    ()=>verifySignMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/curves/esm/ed25519.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/util.js [app-ssr] (ecmascript)");
;
;
function verifyMessageSignature({ message, signedMessage, signature, publicKey }) {
    // TODO: implement https://github.com/solana-labs/solana/blob/master/docs/src/proposals/off-chain-message-signing.md
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesEqual"])(message, signedMessage) && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ed25519"].verify(signature, signedMessage, publicKey);
}
function verifySignMessage(input, output) {
    const { message, account: { publicKey } } = input;
    const { signedMessage, signature } = output;
    return verifyMessageSignature({
        message,
        signedMessage,
        signature,
        publicKey: publicKey
    });
} //# sourceMappingURL=signMessage.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/signIn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSignInMessage",
    ()=>createSignInMessage,
    "createSignInMessageText",
    ()=>createSignInMessageText,
    "deriveSignInMessage",
    ()=>deriveSignInMessage,
    "deriveSignInMessageText",
    ()=>deriveSignInMessageText,
    "parseSignInMessage",
    ()=>parseSignInMessage,
    "parseSignInMessageText",
    ()=>parseSignInMessageText,
    "verifySignIn",
    ()=>verifySignIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/wallet-standard-util/lib/esm/util.js [app-ssr] (ecmascript)");
;
;
function verifySignIn(input, output) {
    const { signedMessage, signature, account: { publicKey } } = output;
    const message = deriveSignInMessage(input, output);
    return !!message && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyMessageSignature"])({
        message,
        signedMessage,
        signature,
        publicKey: publicKey
    });
}
function deriveSignInMessage(input, output) {
    const text = deriveSignInMessageText(input, output);
    if (!text) return null;
    return new TextEncoder().encode(text);
}
function deriveSignInMessageText(input, output) {
    const parsed = parseSignInMessage(output.signedMessage);
    if (!parsed) return null;
    if (input.domain && input.domain !== parsed.domain) return null;
    if (input.address && input.address !== parsed.address) return null;
    if (input.statement !== parsed.statement) return null;
    if (input.uri !== parsed.uri) return null;
    if (input.version !== parsed.version) return null;
    if (input.chainId !== parsed.chainId) return null;
    if (input.nonce !== parsed.nonce) return null;
    if (input.issuedAt !== parsed.issuedAt) return null;
    if (input.expirationTime !== parsed.expirationTime) return null;
    if (input.notBefore !== parsed.notBefore) return null;
    if (input.requestId !== parsed.requestId) return null;
    if (input.resources) {
        if (!parsed.resources) return null;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$util$2f$lib$2f$esm$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqual"])(input.resources, parsed.resources)) return null;
    } else if (parsed.resources) return null;
    return createSignInMessageText(parsed);
}
function parseSignInMessage(message) {
    const text = new TextDecoder().decode(message);
    return parseSignInMessageText(text);
}
// TODO: implement https://github.com/solana-labs/solana/blob/master/docs/src/proposals/off-chain-message-signing.md
const DOMAIN = '(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n';
const ADDRESS = '(?<address>[^\\n]+)(?:\\n|$)';
const STATEMENT = '(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??';
const URI = '(?:\\nURI: (?<uri>[^\\n]+))?';
const VERSION = '(?:\\nVersion: (?<version>[^\\n]+))?';
const CHAIN_ID = '(?:\\nChain ID: (?<chainId>[^\\n]+))?';
const NONCE = '(?:\\nNonce: (?<nonce>[^\\n]+))?';
const ISSUED_AT = '(?:\\nIssued At: (?<issuedAt>[^\\n]+))?';
const EXPIRATION_TIME = '(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?';
const NOT_BEFORE = '(?:\\nNot Before: (?<notBefore>[^\\n]+))?';
const REQUEST_ID = '(?:\\nRequest ID: (?<requestId>[^\\n]+))?';
const RESOURCES = '(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?';
const FIELDS = `${URI}${VERSION}${CHAIN_ID}${NONCE}${ISSUED_AT}${EXPIRATION_TIME}${NOT_BEFORE}${REQUEST_ID}${RESOURCES}`;
const MESSAGE = new RegExp(`^${DOMAIN}${ADDRESS}${STATEMENT}${FIELDS}\\n*$`);
function parseSignInMessageText(text) {
    const match = MESSAGE.exec(text);
    if (!match) return null;
    const groups = match.groups;
    if (!groups) return null;
    return {
        domain: groups.domain,
        address: groups.address,
        statement: groups.statement,
        uri: groups.uri,
        version: groups.version,
        nonce: groups.nonce,
        chainId: groups.chainId,
        issuedAt: groups.issuedAt,
        expirationTime: groups.expirationTime,
        notBefore: groups.notBefore,
        requestId: groups.requestId,
        resources: groups.resources?.split('\n- ').slice(1)
    };
}
function createSignInMessage(input) {
    const text = createSignInMessageText(input);
    return new TextEncoder().encode(text);
}
function createSignInMessageText(input) {
    // ${domain} wants you to sign in with your Solana account:
    // ${address}
    //
    // ${statement}
    //
    // URI: ${uri}
    // Version: ${version}
    // Chain ID: ${chain}
    // Nonce: ${nonce}
    // Issued At: ${issued-at}
    // Expiration Time: ${expiration-time}
    // Not Before: ${not-before}
    // Request ID: ${request-id}
    // Resources:
    // - ${resources[0]}
    // - ${resources[1]}
    // ...
    // - ${resources[n]}
    let message = `${input.domain} wants you to sign in with your Solana account:\n`;
    message += `${input.address}`;
    if (input.statement) {
        message += `\n\n${input.statement}`;
    }
    const fields = [];
    if (input.uri) {
        fields.push(`URI: ${input.uri}`);
    }
    if (input.version) {
        fields.push(`Version: ${input.version}`);
    }
    if (input.chainId) {
        fields.push(`Chain ID: ${input.chainId}`);
    }
    if (input.nonce) {
        fields.push(`Nonce: ${input.nonce}`);
    }
    if (input.issuedAt) {
        fields.push(`Issued At: ${input.issuedAt}`);
    }
    if (input.expirationTime) {
        fields.push(`Expiration Time: ${input.expirationTime}`);
    }
    if (input.notBefore) {
        fields.push(`Not Before: ${input.notBefore}`);
    }
    if (input.requestId) {
        fields.push(`Request ID: ${input.requestId}`);
    }
    if (input.resources) {
        fields.push(`Resources:`);
        for (const resource of input.resources){
            fields.push(`- ${resource}`);
        }
    }
    if (fields.length) {
        message += `\n\n${fields.join('\n')}`;
    }
    return message;
} //# sourceMappingURL=signIn.js.map
}),
"[project]/frontend/node_modules/@solana/wallet-standard-chains/lib/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Solana Mainnet (beta) cluster, e.g. https://api.mainnet-beta.solana.com */ __turbopack_context__.s([
    "SOLANA_CHAINS",
    ()=>SOLANA_CHAINS,
    "SOLANA_DEVNET_CHAIN",
    ()=>SOLANA_DEVNET_CHAIN,
    "SOLANA_LOCALNET_CHAIN",
    ()=>SOLANA_LOCALNET_CHAIN,
    "SOLANA_MAINNET_CHAIN",
    ()=>SOLANA_MAINNET_CHAIN,
    "SOLANA_TESTNET_CHAIN",
    ()=>SOLANA_TESTNET_CHAIN,
    "isSolanaChain",
    ()=>isSolanaChain
]);
const SOLANA_MAINNET_CHAIN = 'solana:mainnet';
const SOLANA_DEVNET_CHAIN = 'solana:devnet';
const SOLANA_TESTNET_CHAIN = 'solana:testnet';
const SOLANA_LOCALNET_CHAIN = 'solana:localnet';
const SOLANA_CHAINS = [
    SOLANA_MAINNET_CHAIN,
    SOLANA_DEVNET_CHAIN,
    SOLANA_TESTNET_CHAIN,
    SOLANA_LOCALNET_CHAIN
];
function isSolanaChain(chain) {
    return SOLANA_CHAINS.includes(chain);
} //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=9e883_%40solana_c099f199._.js.map