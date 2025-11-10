module.exports = [
"[project]/frontend/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = "undefined" == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationObserver"](client, options));
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(options);
    }, [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)), [
        observer
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((variables, mutateOptions)=>{
        observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }, [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/frontend/node_modules/nanostores/task/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allTasks",
    ()=>allTasks,
    "cleanTasks",
    ()=>cleanTasks,
    "startTask",
    ()=>startTask,
    "task",
    ()=>task
]);
let tasks = 0;
let resolves = [];
function startTask() {
    tasks += 1;
    return ()=>{
        tasks -= 1;
        if (tasks === 0) {
            let prevResolves = resolves;
            resolves = [];
            for (let i of prevResolves)i();
        }
    };
}
function task(cb) {
    let endTask = startTask();
    let promise = cb().finally(endTask);
    promise.t = true;
    return promise;
}
function allTasks() {
    if (tasks === 0) {
        return Promise.resolve();
    } else {
        return new Promise((resolve)=>{
            resolves.push(resolve);
        });
    }
}
function cleanTasks() {
    tasks = 0;
}
}),
"[project]/frontend/node_modules/nanostores/clean-stores/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clean",
    ()=>clean,
    "cleanStores",
    ()=>cleanStores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/task/index.js [app-ssr] (ecmascript)");
;
let clean = Symbol('clean');
let cleanStores = (...stores)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cleanTasks"])();
    for (let $store of stores){
        if ($store) {
            if ($store.mocked) delete $store.mocked;
            if ($store[clean]) $store[clean]();
        }
    }
};
}),
"[project]/frontend/node_modules/nanostores/atom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "atom",
    ()=>atom,
    "epoch",
    ()=>epoch,
    "readonlyType",
    ()=>readonlyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/clean-stores/index.js [app-ssr] (ecmascript)");
;
let listenerQueue = [];
let lqIndex = 0;
const QUEUE_ITEMS_PER_LISTENER = 4;
let epoch = 0;
let atom = (initialValue)=>{
    let listeners = [];
    let $atom = {
        get () {
            if (!$atom.lc) {
                $atom.listen(()=>{})();
            }
            return $atom.value;
        },
        lc: 0,
        listen (listener) {
            $atom.lc = listeners.push(listener);
            return ()=>{
                for(let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length;){
                    if (listenerQueue[i] === listener) {
                        listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
                    } else {
                        i += QUEUE_ITEMS_PER_LISTENER;
                    }
                }
                let index = listeners.indexOf(listener);
                if (~index) {
                    listeners.splice(index, 1);
                    if (!--$atom.lc) $atom.off();
                }
            };
        },
        notify (oldValue, changedKey) {
            epoch++;
            let runListenerQueue = !listenerQueue.length;
            for (let listener of listeners){
                listenerQueue.push(listener, $atom.value, oldValue, changedKey);
            }
            if (runListenerQueue) {
                for(lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER){
                    listenerQueue[lqIndex](listenerQueue[lqIndex + 1], listenerQueue[lqIndex + 2], listenerQueue[lqIndex + 3]);
                }
                listenerQueue.length = 0;
            }
        },
        /* It will be called on last listener unsubscribing.
       We will redefine it in onMount and onStop. */ off () {},
        set (newValue) {
            let oldValue = $atom.value;
            if (oldValue !== newValue) {
                $atom.value = newValue;
                $atom.notify(oldValue);
            }
        },
        subscribe (listener) {
            let unbind = $atom.listen(listener);
            listener($atom.value);
            return unbind;
        },
        value: initialValue
    };
    if ("TURBOPACK compile-time truthy", 1) {
        $atom[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
            listeners = [];
            $atom.lc = 0;
            $atom.off();
        };
    }
    return $atom;
};
const readonlyType = (store)=>store;
}),
"[project]/frontend/node_modules/nanostores/map/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "map",
    ()=>map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/atom/index.js [app-ssr] (ecmascript)");
;
let map = (initial = {})=>{
    let $map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(initial);
    $map.setKey = function(key, value) {
        let oldMap = $map.value;
        if (typeof value === 'undefined' && key in $map.value) {
            $map.value = {
                ...$map.value
            };
            delete $map.value[key];
            $map.notify(oldMap, key);
        } else if ($map.value[key] !== value) {
            $map.value = {
                ...$map.value,
                [key]: value
            };
            $map.notify(oldMap, key);
        }
    };
    return $map;
};
}),
"[project]/frontend/node_modules/nanostores/lifecycle/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORE_UNMOUNT_DELAY",
    ()=>STORE_UNMOUNT_DELAY,
    "on",
    ()=>on,
    "onMount",
    ()=>onMount,
    "onNotify",
    ()=>onNotify,
    "onSet",
    ()=>onSet,
    "onStart",
    ()=>onStart,
    "onStop",
    ()=>onStop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/clean-stores/index.js [app-ssr] (ecmascript)");
;
const START = 0;
const STOP = 1;
const SET = 2;
const NOTIFY = 3;
const MOUNT = 5;
const UNMOUNT = 6;
const REVERT_MUTATION = 10;
let on = (object, listener, eventKey, mutateStore)=>{
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
        object.events[eventKey + REVERT_MUTATION] = mutateStore((eventProps)=>{
            // eslint-disable-next-line no-sequences
            object.events[eventKey].reduceRight((event, l)=>(l(event), event), {
                shared: {},
                ...eventProps
            });
        });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return ()=>{
        let currentListeners = object.events[eventKey];
        let index = currentListeners.indexOf(listener);
        currentListeners.splice(index, 1);
        if (!currentListeners.length) {
            delete object.events[eventKey];
            object.events[eventKey + REVERT_MUTATION]();
            delete object.events[eventKey + REVERT_MUTATION];
        }
    };
};
let onStart = ($store, listener)=>on($store, listener, START, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (arg)=>{
            if (!$store.lc && !$store.starting) {
                $store.starting = true;
                runListeners();
                delete $store.starting;
            }
            return originListen(arg);
        };
        return ()=>{
            $store.listen = originListen;
        };
    });
let onStop = ($store, listener)=>on($store, listener, STOP, (runListeners)=>{
        let originOff = $store.off;
        $store.off = ()=>{
            runListeners();
            originOff();
        };
        return ()=>{
            $store.off = originOff;
        };
    });
let onSet = ($store, listener)=>on($store, listener, SET, (runListeners)=>{
        let originSet = $store.set;
        let originSetKey = $store.setKey;
        if ($store.setKey) {
            $store.setKey = (changed, changedValue)=>{
                let isAborted;
                let abort = ()=>{
                    isAborted = true;
                };
                runListeners({
                    abort,
                    changed,
                    newValue: {
                        ...$store.value,
                        [changed]: changedValue
                    }
                });
                if (!isAborted) return originSetKey(changed, changedValue);
            };
        }
        $store.set = (newValue)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                newValue
            });
            if (!isAborted) return originSet(newValue);
        };
        return ()=>{
            $store.set = originSet;
            $store.setKey = originSetKey;
        };
    });
let onNotify = ($store, listener)=>on($store, listener, NOTIFY, (runListeners)=>{
        let originNotify = $store.notify;
        $store.notify = (oldValue, changed)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                changed,
                oldValue
            });
            if (!isAborted) return originNotify(oldValue, changed);
        };
        return ()=>{
            $store.notify = originNotify;
        };
    });
let STORE_UNMOUNT_DELAY = 1000;
let onMount = ($store, initialize)=>{
    let listener = (payload)=>{
        let destroy = initialize(payload);
        if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (...args)=>{
            if (!$store.lc && !$store.active) {
                $store.active = true;
                runListeners();
            }
            return originListen(...args);
        };
        let originOff = $store.off;
        $store.events[UNMOUNT] = [];
        $store.off = ()=>{
            originOff();
            setTimeout(()=>{
                if ($store.active && !$store.lc) {
                    $store.active = false;
                    for (let destroy of $store.events[UNMOUNT])destroy();
                    $store.events[UNMOUNT] = [];
                }
            }, STORE_UNMOUNT_DELAY);
        };
        if ("TURBOPACK compile-time truthy", 1) {
            let originClean = $store[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"]];
            $store[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
                for (let destroy of $store.events[UNMOUNT])destroy();
                $store.events[UNMOUNT] = [];
                $store.active = false;
                originClean();
            };
        }
        return ()=>{
            $store.listen = originListen;
            $store.off = originOff;
        };
    });
};
}),
"[project]/frontend/node_modules/nanostores/computed/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "batched",
    ()=>batched,
    "computed",
    ()=>computed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/atom/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/lifecycle/index.js [app-ssr] (ecmascript)");
;
;
let computedStore = (stores, cb, batched)=>{
    if (!Array.isArray(stores)) stores = [
        stores
    ];
    let previousArgs;
    let currentEpoch;
    let set = ()=>{
        if (currentEpoch === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epoch"]) return;
        currentEpoch = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epoch"];
        let args = stores.map(($store)=>$store.get());
        if (!previousArgs || args.some((arg, i)=>arg !== previousArgs[i])) {
            previousArgs = args;
            let value = cb(...args);
            if (value && value.then && value.t) {
                value.then((asyncValue)=>{
                    if (previousArgs === args) {
                        // Prevent a stale set
                        $computed.set(asyncValue);
                    }
                });
            } else {
                $computed.set(value);
                currentEpoch = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epoch"];
            }
        }
    };
    let $computed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(undefined);
    let get = $computed.get;
    $computed.get = ()=>{
        set();
        return get();
    };
    let timer;
    let run = batched ? ()=>{
        clearTimeout(timer);
        timer = setTimeout(set);
    } : set;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onMount"])($computed, ()=>{
        let unbinds = stores.map(($store)=>$store.listen(run));
        set();
        return ()=>{
            for (let unbind of unbinds)unbind();
        };
    });
    return $computed;
};
let computed = (stores, fn)=>computedStore(stores, fn);
let batched = (stores, fn)=>computedStore(stores, fn, true);
}),
"[project]/frontend/node_modules/nanostores/listen-keys/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listenKeys",
    ()=>listenKeys,
    "subscribeKeys",
    ()=>subscribeKeys
]);
function listenKeys($store, keys, listener) {
    let keysSet = new Set(keys).add(undefined);
    return $store.listen((value, oldValue, changed)=>{
        if (keysSet.has(changed)) {
            listener(value, oldValue, changed);
        }
    });
}
function subscribeKeys($store, keys, listener) {
    let unbind = listenKeys($store, keys, listener);
    listener($store.value);
    return unbind;
}
}),
"[project]/frontend/node_modules/@nanostores/persistent/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanTestStorage",
    ()=>cleanTestStorage,
    "getTestStorage",
    ()=>getTestStorage,
    "persistentAtom",
    ()=>persistentAtom,
    "persistentMap",
    ()=>persistentMap,
    "setPersistentEngine",
    ()=>setPersistentEngine,
    "setTestStorageKey",
    ()=>setTestStorageKey,
    "useTestStorageEngine",
    ()=>useTestStorageEngine,
    "windowPersistentEvents",
    ()=>windowPersistentEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/atom/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$map$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/map/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/lifecycle/index.js [app-ssr] (ecmascript)");
;
let identity = (a)=>a;
let storageEngine = {};
let eventsEngine = {
    addEventListener () {},
    removeEventListener () {}
};
function testSupport() {
    try {
        return typeof localStorage !== 'undefined';
    /* c8 ignore next 4 */ } catch  {
        // In Privacy Mode access to localStorage will return error
        return false;
    }
}
if (testSupport()) {
    storageEngine = localStorage;
}
let windowPersistentEvents = {
    addEventListener (key, listener, restore) {
        window.addEventListener('storage', listener);
        window.addEventListener('pageshow', restore);
    },
    removeEventListener (key, listener, restore) {
        window.removeEventListener('storage', listener);
        window.removeEventListener('pageshow', restore);
    }
};
if ("undefined" !== 'undefined') {
    eventsEngine = windowPersistentEvents;
}
function setPersistentEngine(storage, events) {
    storageEngine = storage;
    eventsEngine = events;
}
function persistentAtom(name, initial = undefined, opts = {}) {
    let encode = opts.encode || identity;
    let decode = opts.decode || identity;
    let store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])(initial);
    let set = store.set;
    store.set = (newValue)=>{
        let converted = encode(newValue);
        if (typeof converted === 'undefined') {
            delete storageEngine[name];
        } else {
            storageEngine[name] = converted;
        }
        set(newValue);
    };
    function listener(e) {
        if (e.key === name) {
            if (e.newValue === null) {
                set(initial);
            } else {
                set(decode(e.newValue));
            }
        } else if (!storageEngine[name]) {
            set(initial);
        }
    }
    function restore() {
        store.set(storageEngine[name] ? decode(storageEngine[name]) : initial);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onMount"])(store, ()=>{
        restore();
        if (opts.listen !== false) {
            eventsEngine.addEventListener(name, listener, restore);
            return ()=>{
                eventsEngine.removeEventListener(name, listener, restore);
            };
        }
    });
    return store;
}
function persistentMap(prefix, initial = {}, opts = {}) {
    let encode = opts.encode || identity;
    let decode = opts.decode || identity;
    let store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$map$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])();
    let setKey = store.setKey;
    let storeKey = (key, newValue)=>{
        if (typeof newValue === 'undefined') {
            if (opts.listen !== false && eventsEngine.perKey) {
                eventsEngine.removeEventListener(prefix + key, listener, restore);
            }
            delete storageEngine[prefix + key];
        } else {
            if (opts.listen !== false && eventsEngine.perKey && !(key in store.value)) {
                eventsEngine.addEventListener(prefix + key, listener, restore);
            }
            storageEngine[prefix + key] = encode(newValue);
        }
    };
    store.setKey = (key, newValue)=>{
        storeKey(key, newValue);
        setKey(key, newValue);
    };
    let set = store.set;
    store.set = function(newObject) {
        for(let key in newObject){
            storeKey(key, newObject[key]);
        }
        for(let key in store.value){
            if (!(key in newObject)) {
                storeKey(key, undefined);
            }
        }
        set(newObject);
    };
    function listener(e) {
        if (!e.key) {
            set({});
        } else if (e.key.startsWith(prefix)) {
            if (e.newValue === null) {
                setKey(e.key.slice(prefix.length), undefined);
            } else {
                setKey(e.key.slice(prefix.length), decode(e.newValue));
            }
        }
    }
    function restore() {
        let data = {
            ...initial
        };
        for(let key in storageEngine){
            if (key.startsWith(prefix)) {
                data[key.slice(prefix.length)] = decode(storageEngine[key]);
            }
        }
        for(let key in data){
            store.setKey(key, data[key]);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onMount"])(store, ()=>{
        restore();
        if (opts.listen !== false) {
            eventsEngine.addEventListener(prefix, listener, restore);
            return ()=>{
                eventsEngine.removeEventListener(prefix, listener, restore);
                for(let key in store.value){
                    eventsEngine.removeEventListener(prefix + key, listener, restore);
                }
            };
        }
    });
    return store;
}
let testStorage = {};
let testListeners = [];
function useTestStorageEngine() {
    setPersistentEngine(testStorage, {
        addEventListener (key, cb) {
            testListeners.push(cb);
        },
        removeEventListener (key, cb) {
            testListeners = testListeners.filter((i)=>i !== cb);
        }
    });
}
function setTestStorageKey(key, newValue) {
    if (typeof newValue === 'undefined') {
        delete testStorage[key];
    } else {
        testStorage[key] = newValue;
    }
    let event = {
        key,
        newValue
    };
    for (let listener of testListeners){
        listener(event);
    }
}
function getTestStorage() {
    return testStorage;
}
function cleanTestStorage() {
    for(let i in testStorage){
        setTestStorageKey(i, undefined);
    }
}
}),
"[project]/frontend/node_modules/@nanostores/react/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/listen-keys/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
let emit = (snapshotRef, onChange)=>(value)=>{
        if (snapshotRef.current === value) return;
        snapshotRef.current = value;
        onChange();
    };
function useStore(store, { keys, deps = [
    store,
    keys
] } = {}) {
    let snapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    snapshotRef.current = store.get();
    let subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onChange)=>{
        emit(snapshotRef, onChange)(store.value);
        return keys?.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listenKeys"])(store, keys, emit(snapshotRef, onChange)) : store.listen(emit(snapshotRef, onChange));
    }, deps);
    let get = ()=>snapshotRef.current;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, get, get);
}
}),
"[project]/frontend/node_modules/@wallet-ui/core/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Storage",
    ()=>Storage,
    "createSolanaDevnet",
    ()=>createSolanaDevnet,
    "createSolanaLocalnet",
    ()=>createSolanaLocalnet,
    "createSolanaMainnet",
    ()=>createSolanaMainnet,
    "createSolanaTestnet",
    ()=>createSolanaTestnet,
    "createStorage",
    ()=>createStorage,
    "createStorageAccount",
    ()=>createStorageAccount,
    "createStorageCluster",
    ()=>createStorageCluster,
    "handleCopyText",
    ()=>handleCopyText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$nanostores$2f$persistent$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@nanostores/persistent/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$computed$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nanostores/computed/index.js [app-ssr] (ecmascript)");
;
;
// src/clusters.ts
function createSolanaCluster(props, { id, label, url }) {
    if (typeof props === "string") {
        return {
            id,
            label,
            url: props
        };
    }
    return {
        id,
        label: props.label ?? label,
        url: props.url ?? url
    };
}
function createSolanaDevnet(props = {}) {
    return createSolanaCluster(props, {
        id: "solana:devnet",
        label: "Devnet",
        url: "devnet"
    });
}
function createSolanaLocalnet(props = {}) {
    return createSolanaCluster(props, {
        id: "solana:localnet",
        label: "Localnet",
        url: "localnet"
    });
}
function createSolanaMainnet(props = {}) {
    return createSolanaCluster(props, {
        id: "solana:mainnet",
        label: "Mainnet",
        url: "mainnet"
    });
}
function createSolanaTestnet(props = {}) {
    return createSolanaCluster(props, {
        id: "solana:testnet",
        label: "Testnet",
        url: "testnet"
    });
}
var Storage = class {
    constructor(key, initial){
        this.key = key;
        this.initial = initial;
        this.atom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$nanostores$2f$persistent$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistentAtom"])(key, initial, {
            decode: JSON.parse,
            encode: JSON.stringify
        });
    }
    atom;
    get() {
        return this.atom.get();
    }
    set(value) {
        this.atom.set(value);
    }
    get value() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nanostores$2f$computed$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computed"])(this.atom, (value)=>value);
    }
};
// src/create-storage.ts
function createStorage({ initial, key }) {
    return new Storage(key, initial);
}
// src/create-storage-account.ts
function createStorageAccount({ initial, key } = {}) {
    return createStorage({
        initial,
        key: key ?? "wallet-ui:account"
    });
}
// src/create-storage-cluster.ts
function createStorageCluster({ initial, key } = {}) {
    return createStorage({
        initial: initial ?? "solana:devnet",
        key: key ?? "wallet-ui:cluster"
    });
}
// src/handle-copy-text.ts
function handleCopyText(text) {
    if (!text) {
        return;
    }
    if (typeof globalThis === "undefined" || !globalThis.navigator || !globalThis.navigator.clipboard || !globalThis.navigator.clipboard.writeText) {
        return;
    }
    void globalThis.navigator.clipboard.writeText(text);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@wallet-ui/react/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseButton",
    ()=>BaseButton,
    "BaseDropdown",
    ()=>BaseDropdown,
    "BaseDropdownChevronDown",
    ()=>BaseDropdownChevronDown,
    "BaseDropdownItemType",
    ()=>BaseDropdownItemType,
    "BaseModal",
    ()=>BaseModal,
    "BaseSvg",
    ()=>BaseSvg,
    "WalletUi",
    ()=>WalletUi,
    "WalletUiAccountContext",
    ()=>WalletUiAccountContext,
    "WalletUiAccountContextProvider",
    ()=>WalletUiAccountContextProvider,
    "WalletUiAccountGuard",
    ()=>WalletUiAccountGuard,
    "WalletUiClusterContext",
    ()=>WalletUiClusterContext,
    "WalletUiClusterContextProvider",
    ()=>WalletUiClusterContextProvider,
    "WalletUiClusterDropdown",
    ()=>WalletUiClusterDropdown,
    "WalletUiContext",
    ()=>WalletUiContext,
    "WalletUiContextProvider",
    ()=>WalletUiContextProvider,
    "WalletUiDropdown",
    ()=>WalletUiDropdown,
    "WalletUiIcon",
    ()=>WalletUiIcon,
    "WalletUiIconClose",
    ()=>WalletUiIconClose,
    "WalletUiIconNoWallet",
    ()=>WalletUiIconNoWallet,
    "WalletUiLabel",
    ()=>WalletUiLabel,
    "WalletUiList",
    ()=>WalletUiList,
    "WalletUiListButton",
    ()=>WalletUiListButton,
    "WalletUiModal",
    ()=>WalletUiModal,
    "WalletUiModalTrigger",
    ()=>WalletUiModalTrigger,
    "createWalletUiConfig",
    ()=>createWalletUiConfig,
    "ellipsify",
    ()=>ellipsify,
    "useBaseDropdown",
    ()=>useBaseDropdown,
    "useBaseModal",
    ()=>useBaseModal,
    "useWalletUi",
    ()=>useWalletUi,
    "useWalletUiAccount",
    ()=>useWalletUiAccount,
    "useWalletUiCluster",
    ()=>useWalletUiCluster,
    "useWalletUiDropdown",
    ()=>useWalletUiDropdown,
    "useWalletUiSigner",
    ()=>useWalletUiSigner,
    "useWalletUiWallet",
    ()=>useWalletUiWallet,
    "useWalletUiWallets",
    ()=>useWalletUiWallets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/useConnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWallets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$storage$2d$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-compare/lib/esm/storage-key.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-compare/lib/esm/compare.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@zag-js/react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@zag-js/menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@zag-js/dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/react/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$nanostores$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@nanostores/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-ui/core/dist/index.node.mjs [app-ssr] (ecmascript)");
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
// src/base-button.tsx
function BaseButton({ className, label, leftSection, onClick, rightSection, ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-wu": "base-button",
        className: `${className ?? ""}`,
        onClick,
        ...props
    }, leftSection ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-wu": "base-button-left-section"
    }, leftSection) : null, label, rightSection ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-wu": "base-button-right-section"
    }, rightSection) : null);
}
var WalletUiContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({});
// src/use-wallet-ui.tsx
function useWalletUi() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(WalletUiContext);
}
var WalletUiAccountContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
// src/use-wallet-ui-account.tsx
function useWalletUiAccount() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletUiAccountContext);
}
// src/use-wallet-ui-wallet.tsx
function useWalletUiWallet({ wallet }) {
    const { connect: connectAccount } = useWalletUi();
    const { setAccount } = useWalletUiAccount();
    const [isConnecting, connect3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnect"])(wallet);
    const [isDisconnecting, disconnect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])(wallet);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{}, [
        isDisconnecting
    ]);
    return {
        connect: async ()=>{
            const connectedAccount = await connect3();
            if (!connectedAccount.length) {
                console.warn(`Connect to ${wallet.name} but there are no accounts.`);
                return connectedAccount;
            }
            const first = connectedAccount[0];
            setAccount(first);
            connectAccount(first);
            return connectedAccount;
        },
        disconnect,
        isConnecting,
        isDisconnecting
    };
}
function WalletUiIcon({ className, wallet, ...props }) {
    if (!wallet) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("img", {
        "data-wu": "wallet-ui-icon",
        src: wallet.icon,
        alt: wallet.name,
        className: className ?? "",
        ...props
    });
}
// src/base-dropdown.tsx
var BaseDropdownItemType = /* @__PURE__ */ ((BaseDropdownItemType2)=>{
    BaseDropdownItemType2["Item"] = "Item";
    BaseDropdownItemType2["WalletConnect"] = "WalletConnect";
    BaseDropdownItemType2["WalletCopy"] = "WalletCopy";
    BaseDropdownItemType2["WalletDisconnect"] = "WalletDisconnect";
    BaseDropdownItemType2["WalletNeeded"] = "WalletNeeded";
    return BaseDropdownItemType2;
})(BaseDropdownItemType || {});
function BaseDropdown({ buttonProps, dropdown, items, showIndicator }) {
    const api = dropdown.api;
    const trigger = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseButton, {
        ...api.getTriggerProps(),
        rightSection: showIndicator ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            ...api.getIndicatorProps()
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownChevronDown, null)) : null,
        ...buttonProps
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-wu": "base-dropdown"
    }, trigger, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...api.getPositionerProps(),
        "data-wu": "base-dropdown-wrapper"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...api.getContentProps(),
        "data-wu": "base-dropdown-list",
        "data-part": "content"
    }, items.map((item)=>{
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItem, {
            ...api.getItemProps({
                value: item.value
            }),
            key: item.value,
            item,
            afterClick: ()=>{
                if (item.disabled) {
                    return;
                }
                if (item.closeMenu !== false) {
                    dropdown.close();
                }
            }
        });
    }))));
}
function BaseDropdownItem({ afterClick, item }) {
    if (!item.wallet) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemRender, {
            afterClick,
            item
        });
    }
    switch(item.type){
        case "Item" /* Item */ :
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemRender, {
                afterClick,
                item
            });
        case "WalletConnect" /* WalletConnect */ :
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemWalletConnect, {
                afterClick,
                item,
                wallet: item.wallet
            });
        case "WalletCopy" /* WalletCopy */ :
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemRender, {
                afterClick,
                item
            });
        case "WalletDisconnect" /* WalletDisconnect */ :
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemWalletDisconnect, {
                afterClick,
                item,
                wallet: item.wallet
            });
    }
}
function BaseDropdownItemWalletConnect({ afterClick, item, wallet }) {
    const { connect: connect3 } = useWalletUiWallet({
        wallet
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemRender, {
        afterClick,
        item: {
            ...item,
            handler: async ()=>{
                await connect3();
                return await item.handler();
            },
            leftSection: wallet ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiIcon, {
                wallet
            }) : void 0
        }
    });
}
function BaseDropdownItemWalletDisconnect({ afterClick, item, wallet }) {
    const { disconnect } = useWalletUiWallet({
        wallet
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdownItemRender, {
        afterClick,
        item: {
            ...item,
            handler: async ()=>{
                await disconnect();
                return await item.handler();
            }
        }
    });
}
function BaseDropdownItemRender({ afterClick, item }) {
    function onClick() {
        if (item.disabled) {
            return;
        }
        void item.handler().then(()=>{
            afterClick();
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        type: "button",
        "data-wu": "base-dropdown-item",
        "data-part": "item",
        onClick
    }, item.leftSection ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-wu": "base-dropdown-item-left-section"
    }, item.leftSection) : null, item.label, item.rightSection ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-wu": "base-dropdown-item-right-section"
    }, item.rightSection) : null);
}
function BaseDropdownChevronDown(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "m6 9 6 6 6-6"
    }));
}
function BaseSvg({ ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        ...props
    }, props.children);
}
// src/wallet-ui-icon-close.tsx
function WalletUiIconClose({ ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseSvg, {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        width: 12,
        height: 12,
        viewBox: "0 0 14 14",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
    }));
}
// src/base-modal.tsx
function BaseModal({ modal, buttonLabel, buttonProps = {}, ...props }) {
    const api = modal.api;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, buttonLabel ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseButton, {
        label: buttonLabel,
        ...buttonProps,
        ...api.getTriggerProps()
    }) : null, api.open && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Portal"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...api.getBackdropProps()
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...api.getPositionerProps()
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...api.getContentProps()
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("header", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...api.getCloseTriggerProps()
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiIconClose, null))), props.description ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        ...api.getDescriptionProps()
    }, props.description) : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("main", null, props.children)))));
}
function useBaseDropdown() {
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMachine"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["machine"], {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])()
    });
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connect"](service, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeProps"]);
    return {
        api,
        close: ()=>service.send({
                type: "CLOSE"
            }),
        open: ()=>service.send({
                type: "OPEN"
            })
    };
}
function useBaseModal() {
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMachine"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["machine"], {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        modal: true
    });
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connect"](service, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeProps"]);
    return {
        api,
        close: ()=>service.send({
                type: "CLOSE"
            }),
        open: ()=>service.send({
                type: "OPEN"
            })
    };
}
var WalletUiClusterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
// src/use-wallet-ui-cluster.tsx
function useWalletUiCluster() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletUiClusterContext);
}
function getDropdownItemsWallets({ wallets, connect: connect3 }) {
    return wallets.length ? wallets.map((wallet)=>({
            handler: async ()=>{
                const account = wallet.accounts.length > 0 ? wallet.accounts[0] : void 0;
                if (!account) {
                    return;
                }
                connect3(account);
                await Promise.resolve();
            },
            label: wallet.name,
            type: "WalletConnect" /* WalletConnect */ ,
            value: wallet.name,
            wallet
        })) : [
        {
            handler: async ()=>{
                window.open("https://solana.com/solana-wallets", "_blank");
                await Promise.resolve();
            },
            label: "You'll need a wallet on Solana to continue",
            type: "WalletNeeded" /* WalletNeeded */ ,
            value: "no-wallets"
        }
    ];
}
function useWalletUiDropdown() {
    const dropdown = useBaseDropdown();
    const { account, connect: connect3, copy, disconnect, connected, wallet, wallets } = useWalletUi();
    const itemsWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getDropdownItemsWallets({
            connect: connect3,
            wallets
        }), [
        wallets,
        connect3
    ]);
    const itemsConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                handler: async ()=>{
                    copy();
                    void await Promise.resolve();
                },
                label: "Copy Address",
                type: "WalletCopy" /* WalletCopy */ ,
                value: "copy"
            },
            {
                handler: async ()=>{
                    disconnect();
                    dropdown.close();
                    await Promise.resolve();
                },
                label: "Disconnect",
                type: "WalletDisconnect" /* WalletDisconnect */ ,
                value: "disconnect",
                wallet
            },
            ...itemsWallets
        ], [
        copy,
        disconnect,
        dropdown,
        wallet,
        itemsWallets
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return connected ? itemsConnected : itemsWallets;
    }, [
        connected,
        itemsConnected,
        itemsWallets
    ]);
    const buttonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            label: connected ? (account ? ellipsify(account.address) : wallet?.name) ?? "Connected" : "Select Wallet",
            leftSection: connected ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiIcon, {
                wallet
            }) : void 0
        };
    }, [
        account,
        connected,
        wallet
    ]);
    return {
        buttonProps,
        connected,
        dropdown,
        items
    };
}
function ellipsify(str = "", len = 4, delimiter = "..") {
    const strLen = str.length;
    const limit = len * 2 + delimiter.length;
    return strLen >= limit ? str.substring(0, len) + delimiter + str.substring(strLen - len, strLen) : str;
}
function useWalletUiSigner({ account }) {
    const { cluster } = useWalletUi();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$react$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWalletAccountTransactionSendingSigner"])(account, cluster.id);
}
function useWalletUiWallets() {
    const readonlyWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallets"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>readonlyWallets.filter((wallet)=>wallet.chains.some((i)=>i.startsWith("solana:"))).sort((a, b)=>a.name.localeCompare(b.name)), [
        readonlyWallets
    ]);
}
var wasSetterInvoked = false;
function getSavedWalletAccount(wallets, savedWalletNameAndAddress) {
    if (wasSetterInvoked) {
        return;
    }
    if (!savedWalletNameAndAddress || typeof savedWalletNameAndAddress !== "string") {
        return;
    }
    const [savedWalletName, savedAccountAddress] = savedWalletNameAndAddress.split(":");
    if (!savedWalletName || !savedAccountAddress) {
        return;
    }
    const wallet = wallets.find((w)=>w.name === savedWalletName);
    if (!wallet) {
        return;
    }
    return wallet.accounts.find((a)=>a.address === savedAccountAddress);
}
function WalletUiAccountContextProvider({ children, cluster, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorageAccount"])() }) {
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallets"])();
    const accountId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$nanostores$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(storage.value);
    const [account, setAccountInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getSavedWalletAccount(wallets, accountId));
    const setAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((setStateAction)=>{
        setAccountInternal((prevAccount)=>{
            wasSetterInvoked = true;
            const nextWalletAccount = typeof setStateAction === "function" ? setStateAction(prevAccount) : setStateAction;
            const accountKey = nextWalletAccount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$storage$2d$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUiWalletAccountStorageKey"])(nextWalletAccount) : void 0;
            storage.set(accountKey ? accountKey : void 0);
            return nextWalletAccount;
        });
    }, [
        storage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedWalletAccount = getSavedWalletAccount(wallets, accountId);
        if (savedWalletAccount) {
            setAccountInternal(savedWalletAccount);
        }
    }, [
        accountId,
        wallets
    ]);
    const walletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (account) {
            for (const uiWallet of wallets){
                for (const uiWalletAccount of uiWallet.accounts){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiWalletAccountsAreSame"])(account, uiWalletAccount)) {
                        return uiWalletAccount;
                    }
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiWalletAccountBelongsToUiWallet"])(account, uiWallet) && uiWallet.accounts[0]) {
                    return uiWallet.accounts[0];
                }
            }
        }
    }, [
        account,
        wallets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (account && !walletAccount) {
            setAccountInternal(void 0);
        }
    }, [
        account,
        walletAccount
    ]);
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!walletAccount) {
            return void 0;
        }
        for (const uiWallet of wallets){
            for (const uiWalletAccount of uiWallet.accounts){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiWalletAccountsAreSame"])(walletAccount, uiWalletAccount)) {
                    return uiWallet;
                }
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uiWalletAccountBelongsToUiWallet"])(walletAccount, uiWallet) && uiWallet.accounts[0]) {
                return uiWallet;
            }
        }
    }, [
        walletAccount,
        wallets
    ]);
    const accountKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!walletAccount) {
            return [];
        }
        return [
            cluster.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$compare$2f$lib$2f$esm$2f$storage$2d$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUiWalletAccountStorageKey"])(walletAccount)
        ].filter(Boolean);
    }, [
        walletAccount,
        cluster.id
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiAccountContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                account: walletAccount,
                accountKeys,
                cluster,
                setAccount,
                wallet
            }), [
            accountKeys,
            cluster,
            setAccount,
            wallet,
            walletAccount
        ])
    }, children);
}
function WalletUiClusterContextProvider({ clusters, render, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorageCluster"])() }) {
    const clusterId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$nanostores$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(storage.value);
    if (!clusters.length) {
        throw new Error("No clusters provided");
    }
    const found = clusters.find((c)=>c.id === clusterId);
    const first = clusters[0];
    const value = {
        cluster: found ?? first,
        clusters,
        setCluster: (clusterId2)=>{
            const cluster = clusters.find((c)=>c.id === clusterId2);
            if (!cluster) {
                throw new Error(`Cluster ${clusterId2} not found`);
            }
            storage.set(clusterId2);
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiClusterContext.Provider, {
        value
    }, render(value));
}
function WalletUiContextProvider({ children }) {
    const { account, accountKeys, cluster, setAccount, wallet } = useWalletUiAccount();
    const wallets = useWalletUiWallets();
    const connected = Boolean(wallet && wallet?.accounts.length > 0);
    function connect3(account2) {
        setAccount(account2);
    }
    function disconnect() {
        setAccount(void 0);
    }
    function copy() {
        if (!account) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleCopyText"])(account.address);
    }
    const value = {
        account,
        accountKeys,
        cluster,
        connect: connect3,
        connected,
        copy,
        disconnect,
        wallet,
        wallets
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiContext.Provider, {
        value
    }, children);
}
// src/wallet-ui.tsx
function createWalletUiConfig(props) {
    return {
        ...props
    };
}
function WalletUi({ children, config: { accountStorage, clusters, clusterStorage, ...config } }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiClusterContextProvider, {
        clusters,
        storage: clusterStorage,
        render: ({ cluster })=>{
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiAccountContextProvider, {
                cluster,
                storage: accountStorage
            }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiContextProvider, {
                ...config
            }, children));
        }
    }));
}
function WalletUiDropdown({ ...props }) {
    const { buttonProps, items, dropdown } = useWalletUiDropdown();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdown, {
        ...props,
        buttonProps: {
            ...buttonProps
        },
        dropdown,
        items
    });
}
// src/wallet-ui-account-guard.tsx
function WalletUiAccountGuard({ fallback = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiDropdown, null), render }) {
    const { account, accountKeys, cluster, wallet } = useWalletUiAccount();
    return account ? render({
        account,
        accountKeys,
        cluster,
        wallet
    }) : fallback;
}
function WalletUiClusterDropdown({ buttonProps, ...props }) {
    const dropdown = useBaseDropdown();
    const { cluster, clusters, setCluster } = useWalletUiCluster();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseDropdown, {
        buttonProps: {
            ...buttonProps,
            label: cluster.label
        },
        items: clusters.map((cluster2)=>({
                handler: async ()=>{
                    setCluster(cluster2.id);
                    await Promise.resolve();
                },
                label: cluster2.label,
                type: "Item" /* Item */ ,
                value: cluster2.id
            })),
        dropdown,
        ...props
    });
}
function WalletUiIconNoWallet({ ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseSvg, {
        fill: "none",
        height: 100,
        width: 100,
        viewBox: "0 0 97 96",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "48.5",
        cy: "48",
        r: "48",
        fill: "url(#paint0_linear_880_5115)",
        fillOpacity: "0.1"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "48.5",
        cy: "48",
        r: "47",
        stroke: "url(#paint1_linear_880_5115)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        clipPath: "url(#clip0_880_5115)"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
        fill: "url(#paint2_linear_880_5115)"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
        fill: "url(#paint3_linear_880_5115)"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "paint0_linear_880_5115",
        x1: "3.41664",
        y1: "98.0933",
        x2: "103.05",
        y2: "8.42498",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#9945FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "paint1_linear_880_5115",
        x1: "3.41664",
        y1: "98.0933",
        x2: "103.05",
        y2: "8.42498",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#9945FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "paint2_linear_880_5115",
        x1: "25.9583",
        y1: "68.7101",
        x2: "67.2337",
        y2: "23.7879",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#9945FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "paint3_linear_880_5115",
        x1: "58.3326",
        y1: "49.4467",
        x2: "61.0002",
        y2: "45.4453",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        stopColor: "#9945FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("clipPath", {
        id: "clip0_880_5115"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        width: "48",
        height: "48",
        fill: "white",
        transform: "translate(24.5 24)"
    }))));
}
function WalletUiLabel({ className, wallet, ...props }) {
    if (!wallet) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-wu": "wallet-ui-label",
        className: `${className ?? ""}`,
        ...props
    }, wallet.name);
}
function WalletUiListButton({ className, select, wallet, ...props }) {
    const [pending, setPending] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    function handleSelect() {
        if (!select) {
            return;
        }
        setPending(true);
        const account = wallet.accounts.length > 0 ? wallet.accounts[0] : void 0;
        if (!account) {
            return;
        }
        void select(account).finally(()=>setPending(false));
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        disabled: pending,
        "data-wu": "wallet-ui-list-button",
        className: `${pending ? "pending" : ""} ${className ?? ""}`,
        onClick: handleSelect,
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiIcon, {
        wallet
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiLabel, {
        wallet
    }));
}
// src/wallet-ui-list.tsx
function WalletUiList({ className, select, wallets, ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-wu": "wallet-ui-list",
        className: `${className ?? ""}`,
        ...props
    }, wallets.map((wallet)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiListButton, {
            key: wallet.name,
            select,
            wallet
        })));
}
function WalletUiModal({ wallets, select, ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseModal, {
        description: "Connect a wallet on Solana to continue",
        ...props
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiList, {
        wallets,
        select
    }));
}
function WalletUiModalTrigger({ label = "Select Wallet", modal, ...props }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BaseButton, {
        label,
        onClick: ()=>void modal.open(),
        ...props
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@wallet-ui/react-gill/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletUiGillContext",
    ()=>WalletUiGillContext,
    "WalletUiGillProvider",
    ()=>WalletUiGillProvider,
    "getSolanaClusterMoniker",
    ()=>getSolanaClusterMoniker,
    "useWalletUiGill",
    ()=>useWalletUiGill,
    "useWalletUiSignAndSend",
    ()=>useWalletUiSignAndSend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$VC6NKDS2$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/gill/dist/chunk-VC6NKDS2.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$react$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-ui/react/dist/index.node.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
// src/get-solana-cluster-moniker.ts
function getSolanaClusterMoniker(clusterId) {
    if (!clusterId.startsWith("solana:")) {
        throw new Error(`Invalid cluster id: ${clusterId}`);
    }
    return clusterId.replace("solana:", "");
}
var WalletUiGillContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
// src/use-wallet-ui-gill.tsx
function useWalletUiGill() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletUiGillContext);
}
function useWalletUiSignAndSend() {
    const client = useWalletUiGill();
    return async (ix, signer)=>{
        const { value: latestBlockhash } = await client.rpc.getLatestBlockhash().send();
        const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$VC6NKDS2$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransaction"])({
            feePayer: signer,
            instructions: Array.isArray(ix) ? ix : [
                ix
            ],
            latestBlockhash,
            version: 0
        });
        const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signAndSendTransactionMessageWithSigners"])(transaction);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])().decode(signature);
    };
}
function WalletUiGillProvider({ children, url }) {
    const { cluster } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$ui$2f$react$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWalletUiCluster"])();
    const urlOrMoniker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>url ?? cluster.url, [
        cluster.url,
        url
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WalletUiGillContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gill$2f$dist$2f$chunk$2d$VC6NKDS2$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSolanaClient"])({
                urlOrMoniker
            }), [
            urlOrMoniker
        ])
    }, children);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/frontend/node_modules/@wallet-standard/features/lib/esm/connect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Connect",
    ()=>Connect,
    "StandardConnect",
    ()=>StandardConnect
]);
const StandardConnect = 'standard:connect';
const Connect = StandardConnect; //# sourceMappingURL=connect.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/features/lib/esm/disconnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Disconnect",
    ()=>Disconnect,
    "StandardDisconnect",
    ()=>StandardDisconnect
]);
const StandardDisconnect = 'standard:disconnect';
const Disconnect = StandardDisconnect; //# sourceMappingURL=disconnect.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/features/lib/esm/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Events",
    ()=>Events,
    "StandardEvents",
    ()=>StandardEvents
]);
const StandardEvents = 'standard:events';
const Events = StandardEvents; //# sourceMappingURL=events.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * To add a new error, follow the instructions at
 * https://github.com/wallet-standard/wallet-standard/tree/master/packages/core/errors/#adding-a-new-error
 *
 * WARNING:
 *   - Don't remove error codes
 *   - Don't change or reorder error codes.
 *
 * Good naming conventions:
 *   - Prefixing common errors — e.g. under the same package — can be a good way to namespace them. E.g. All codec-related errors start with `WALLET_STANDARD_ERROR__ACCOUNT__`.
 *   - Use consistent names — e.g. choose `PDA` or `PROGRAM_DERIVED_ADDRESS` and stick with it. Ensure your names are consistent with existing error codes. The decision might have been made for you.
 *   - Recommended prefixes and suffixes:
 *     - `MALFORMED_`: Some input was not constructed properly. E.g. `MALFORMED_BASE58_ENCODED_ADDRESS`.
 *     - `INVALID_`: Some input is invalid (other than because it was MALFORMED). E.g. `INVALID_NUMBER_OF_BYTES`.
 *     - `EXPECTED_`: Some input was different than expected, no need to specify the "GOT" part unless necessary. E.g. `EXPECTED_DECODED_ACCOUNT`.
 *     - `_CANNOT_`: Some operation cannot be performed or some input cannot be used due to some condition. E.g. `CANNOT_DECODE_EMPTY_BYTE_ARRAY` or `PDA_CANNOT_END_WITH_PDA_MARKER`.
 *     - `_MUST_BE_`: Some condition must be true. E.g. `NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE`.
 *     - `_FAILED_TO_`: Tried to perform some operation and failed. E.g. `FAILED_TO_DECODE_ACCOUNT`.
 *     - `_NOT_FOUND`: Some operation lead to not finding something. E.g. `ACCOUNT_NOT_FOUND`.
 *     - `_OUT_OF_RANGE`: Some value is out of range. E.g. `ENUM_DISCRIMINATOR_OUT_OF_RANGE`.
 *     - `_EXCEEDED`: Some limit was exceeded. E.g. `PDA_MAX_SEED_LENGTH_EXCEEDED`.
 *     - `_MISMATCH`: Some elements do not match. E.g. `ENCODER_DECODER_FIXED_SIZE_MISMATCH`.
 *     - `_MISSING`: Some required input is missing. E.g. `TRANSACTION_FEE_PAYER_MISSING`.
 *     - `_UNIMPLEMENTED`: Some required component is not available in the environment. E.g. `SUBTLE_CRYPTO_VERIFY_FUNCTION_UNIMPLEMENTED`.
 */ // Registry-related errors.
// Reserve error codes in the range [3834000-3834999].
__turbopack_context__.s([
    "WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED",
    ()=>WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED,
    "WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_FEATURE_UNIMPLEMENTED",
    ()=>WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_FEATURE_UNIMPLEMENTED,
    "WALLET_STANDARD_ERROR__FEATURES__WALLET_FEATURE_UNIMPLEMENTED",
    ()=>WALLET_STANDARD_ERROR__FEATURES__WALLET_FEATURE_UNIMPLEMENTED,
    "WALLET_STANDARD_ERROR__REGISTRY__WALLET_ACCOUNT_NOT_FOUND",
    ()=>WALLET_STANDARD_ERROR__REGISTRY__WALLET_ACCOUNT_NOT_FOUND,
    "WALLET_STANDARD_ERROR__REGISTRY__WALLET_NOT_FOUND",
    ()=>WALLET_STANDARD_ERROR__REGISTRY__WALLET_NOT_FOUND,
    "WALLET_STANDARD_ERROR__USER__REQUEST_REJECTED",
    ()=>WALLET_STANDARD_ERROR__USER__REQUEST_REJECTED
]);
const WALLET_STANDARD_ERROR__REGISTRY__WALLET_NOT_FOUND = 3834000;
const WALLET_STANDARD_ERROR__REGISTRY__WALLET_ACCOUNT_NOT_FOUND = 3834001;
const WALLET_STANDARD_ERROR__USER__REQUEST_REJECTED = 4001000;
const WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED = 6160000;
const WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_FEATURE_UNIMPLEMENTED = 6160001;
const WALLET_STANDARD_ERROR__FEATURES__WALLET_FEATURE_UNIMPLEMENTED = 6160002; //# sourceMappingURL=codes.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/messages.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletStandardErrorMessages",
    ()=>WalletStandardErrorMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)");
;
const WalletStandardErrorMessages = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_CHAIN_UNSUPPORTED"]]: 'The wallet account $address does not support the chain `$chain`',
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_FEATURE_UNIMPLEMENTED"]]: 'The wallet account $address does not support the `$featureName` feature',
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_FEATURE_UNIMPLEMENTED"]]: "The wallet '$walletName' does not support the `$featureName` feature",
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__REGISTRY__WALLET_ACCOUNT_NOT_FOUND"]]: "No account with address $address could be found in the '$walletName' wallet",
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__REGISTRY__WALLET_NOT_FOUND"]]: 'No underlying Wallet Standard wallet could be found for this handle. This can happen if ' + 'the wallet associated with the handle has been unregistered.',
    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__USER__REQUEST_REJECTED"]]: 'The user rejected the request'
}; //# sourceMappingURL=messages.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/message-formatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage,
    "getHumanReadableErrorMessage",
    ()=>getHumanReadableErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/messages.js [app-ssr] (ecmascript)");
;
;
var StateType;
(function(StateType) {
    StateType[StateType["EscapeSequence"] = 0] = "EscapeSequence";
    StateType[StateType["Text"] = 1] = "Text";
    StateType[StateType["Variable"] = 2] = "Variable";
})(StateType || (StateType = {}));
const START_INDEX = 'i';
const TYPE = 't';
function getHumanReadableErrorMessage(code, context = {}) {
    const messageFormatString = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardErrorMessages"][code];
    if (messageFormatString.length === 0) {
        return '';
    }
    let state;
    function commitStateUpTo(endIndex) {
        if (state[TYPE] === StateType.Variable) {
            const variableName = messageFormatString.slice(state[START_INDEX] + 1, endIndex);
            fragments.push(variableName in context ? `${context[variableName]}` : `$${variableName}`);
        } else if (state[TYPE] === StateType.Text) {
            fragments.push(messageFormatString.slice(state[START_INDEX], endIndex));
        }
    }
    const fragments = [];
    messageFormatString.split('').forEach((char, ii)=>{
        if (ii === 0) {
            state = {
                [START_INDEX]: 0,
                [TYPE]: messageFormatString[0] === '\\' ? StateType.EscapeSequence : messageFormatString[0] === '$' ? StateType.Variable : StateType.Text
            };
            return;
        }
        let nextState;
        switch(state[TYPE]){
            case StateType.EscapeSequence:
                nextState = {
                    [START_INDEX]: ii,
                    [TYPE]: StateType.Text
                };
                break;
            case StateType.Text:
                if (char === '\\') {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: StateType.EscapeSequence
                    };
                } else if (char === '$') {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: StateType.Variable
                    };
                }
                break;
            case StateType.Variable:
                if (char === '\\') {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: StateType.EscapeSequence
                    };
                } else if (char === '$') {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: StateType.Variable
                    };
                } else if (!char.match(/\w/)) {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: StateType.Text
                    };
                }
                break;
        }
        if (nextState) {
            if (state !== nextState) {
                commitStateUpTo(ii);
            }
            state = nextState;
        }
    });
    commitStateUpTo();
    return fragments.join('');
}
function getErrorMessage(code, context = {}) {
    if ("TURBOPACK compile-time truthy", 1) {
        return getHumanReadableErrorMessage(code, context);
    } else //TURBOPACK unreachable
    ;
} //# sourceMappingURL=message-formatter.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletStandardError",
    ()=>WalletStandardError,
    "isWalletStandardError",
    ()=>isWalletStandardError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$message$2d$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/message-formatter.js [app-ssr] (ecmascript)");
;
function isWalletStandardError(e, code) {
    const isWalletStandardError = e instanceof Error && e.name === 'WalletStandardError';
    if (isWalletStandardError) {
        if (code !== undefined) {
            return e.context.__code === code;
        }
        return true;
    }
    return false;
}
class WalletStandardError extends Error {
    constructor(...[code, contextAndErrorOptions]){
        let context;
        let errorOptions;
        if (contextAndErrorOptions) {
            // If the `ErrorOptions` type ever changes, update this code.
            const { cause, ...contextRest } = contextAndErrorOptions;
            if (cause) {
                errorOptions = {
                    cause
                };
            }
            if (Object.keys(contextRest).length > 0) {
                context = contextRest;
            }
        }
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$message$2d$formatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(code, context);
        super(message, errorOptions);
        this.context = {
            __code: code,
            ...context
        };
        // This is necessary so that `isWalletStandardError()` can identify a `WalletStandardError`
        // without having to import the class for use in an `instanceof` check.
        this.name = 'WalletStandardError';
    }
} //# sourceMappingURL=error.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/stack-trace.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeCaptureStackTrace",
    ()=>safeCaptureStackTrace
]);
function safeCaptureStackTrace(...args) {
    if ('captureStackTrace' in Error && typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(...args);
    }
} //# sourceMappingURL=stack-trace.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    "getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    "registerWalletHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>registerWalletHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/stack-trace.js [app-ssr] (ecmascript)");
;
const uiWalletHandlesToWallets = new WeakMap();
function registerWalletHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(uiWalletHandle, wallet) {
    uiWalletHandlesToWallets.set(uiWalletHandle, wallet);
}
function getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(uiWalletAccount) {
    const wallet = getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(uiWalletAccount);
    const account = wallet.accounts.find(({ address })=>address === uiWalletAccount.address);
    if (!account) {
        const err = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__REGISTRY__WALLET_ACCOUNT_NOT_FOUND"], {
            address: uiWalletAccount.address,
            walletName: wallet.name
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(err, getWalletAccountForUiWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
        throw err;
    }
    return account;
}
function getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(uiWalletHandle) {
    const wallet = uiWalletHandlesToWallets.get(uiWalletHandle);
    if (!wallet) {
        const err = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__REGISTRY__WALLET_NOT_FOUND"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(err, getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
        throw err;
    }
    return wallet;
} //# sourceMappingURL=UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "identifierArraysAreDifferent",
    ()=>identifierArraysAreDifferent
]);
function identifierArraysAreDifferent(a, b) {
    // NOTE: Do not optimize this with an `a.length !== b.length` check. A length check does not
    // take into consideration that the array might contain duplicate items.
    const itemsSetA = new Set(a);
    const itemsSetB = new Set(b);
    if (itemsSetA.size !== itemsSetB.size) {
        return true;
    }
    for (const itemFromA of itemsSetA){
        if (!itemsSetB.has(itemFromA)) {
            return true;
        }
    }
    return false;
} //# sourceMappingURL=compare.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/compare.js [app-ssr] (ecmascript)");
;
;
const walletAccountsToUiWalletAccounts = new WeakMap();
function getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(wallet, account) {
    let existingUiWalletAccount = walletAccountsToUiWalletAccounts.get(account);
    if (existingUiWalletAccount) {
        try {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(existingUiWalletAccount) !== wallet) {
                existingUiWalletAccount = undefined;
            }
        } catch  {
            existingUiWalletAccount = undefined;
        }
    }
    const mustInitialize = !existingUiWalletAccount;
    let uiWalletAccount = existingUiWalletAccount ?? {};
    let isDirty = !existingUiWalletAccount;
    function dirtyUiWallet() {
        if (!isDirty) {
            uiWalletAccount = {
                ...uiWalletAccount
            };
            isDirty = true;
        }
    }
    if (mustInitialize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifierArraysAreDifferent"])(uiWalletAccount.chains, account.chains)) {
        dirtyUiWallet();
        uiWalletAccount.chains = Object.freeze([
            ...account.chains
        ]);
    }
    if (mustInitialize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifierArraysAreDifferent"])(uiWalletAccount.features, account.features)) {
        dirtyUiWallet();
        uiWalletAccount.features = Object.freeze([
            ...account.features
        ]);
    }
    if (mustInitialize || uiWalletAccount.address !== account.address || uiWalletAccount.icon !== account.icon || uiWalletAccount.label !== account.label || uiWalletAccount.publicKey !== account.publicKey) {
        dirtyUiWallet();
        uiWalletAccount.address = account.address;
        uiWalletAccount.icon = account.icon;
        uiWalletAccount.label = account.label;
        uiWalletAccount.publicKey = account.publicKey;
    }
    if (isDirty) {
        walletAccountsToUiWalletAccounts.set(account, uiWalletAccount);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerWalletHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletAccount, wallet);
    }
    return Object.freeze(uiWalletAccount);
} //# sourceMappingURL=UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateUiWalletForStandardWallet_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    ()=>getOrCreateUiWalletForStandardWallet_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/compare.js [app-ssr] (ecmascript)");
;
;
;
const walletsToUiWallets = new WeakMap();
function getOrCreateUiWalletForStandardWallet_DO_NOT_USE_OR_YOU_WILL_BE_FIRED(wallet) {
    const existingUiWallet = walletsToUiWallets.get(wallet);
    const mustInitialize = !existingUiWallet;
    let uiWallet = existingUiWallet ?? {};
    let isDirty = !existingUiWallet;
    function dirtyUiWallet() {
        if (!isDirty) {
            uiWallet = {
                ...uiWallet
            };
            isDirty = true;
        }
    }
    const nextUiWalletAccounts = {
        _cache: [],
        *[Symbol.iterator] () {
            if (this._cache.length) {
                yield* this._cache;
            }
            for (const walletAccount of wallet.accounts.slice(this._cache.length)){
                const uiWalletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(wallet, walletAccount);
                this._cache.push(uiWalletAccount);
                yield uiWalletAccount;
            }
        },
        some (predicateFn) {
            if (this._cache.some(predicateFn)) {
                return true;
            }
            for (const walletAccount of wallet.accounts.slice(this._cache.length)){
                const uiWalletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(wallet, walletAccount);
                this._cache.push(uiWalletAccount);
                if (predicateFn(uiWalletAccount)) {
                    return true;
                }
            }
            return false;
        },
        get length () {
            return wallet.accounts.length;
        }
    };
    if (mustInitialize || uiWallet.accounts.length !== wallet.accounts.length || nextUiWalletAccounts.some((account)=>!uiWallet.accounts.includes(account))) {
        dirtyUiWallet();
        uiWallet.accounts = Object.freeze(Array.from(nextUiWalletAccounts));
    }
    if (mustInitialize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifierArraysAreDifferent"])(uiWallet.features, Object.keys(wallet.features))) {
        dirtyUiWallet();
        uiWallet.features = Object.freeze(Object.keys(wallet.features));
    }
    if (mustInitialize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identifierArraysAreDifferent"])(uiWallet.chains, wallet.chains)) {
        dirtyUiWallet();
        uiWallet.chains = Object.freeze([
            ...wallet.chains
        ]);
    }
    if (mustInitialize || uiWallet.icon !== wallet.icon || uiWallet.name !== wallet.name || uiWallet.version !== wallet.version) {
        dirtyUiWallet();
        uiWallet.icon = wallet.icon;
        uiWallet.name = wallet.name;
        uiWallet.version = wallet.version;
    }
    if (isDirty) {
        walletsToUiWallets.set(wallet, uiWallet);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerWalletHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWallet, wallet);
    }
    return Object.freeze(uiWallet);
} //# sourceMappingURL=UiWalletRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletFeature.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletFeature",
    ()=>getWalletFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/stack-trace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
;
;
function getWalletFeature(uiWalletHandle, featureName) {
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletHandle);
    if (!(featureName in wallet.features)) {
        const err = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_FEATURE_UNIMPLEMENTED"], {
            featureName,
            supportedChains: [
                ...wallet.chains
            ],
            supportedFeatures: Object.keys(wallet.features),
            walletName: wallet.name
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(err, getWalletFeature);
        throw err;
    }
    return wallet.features[featureName];
} //# sourceMappingURL=getWalletFeature.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletAccountFeature.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWalletAccountFeature",
    ()=>getWalletAccountFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/errors/lib/esm/stack-trace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletFeature.js [app-ssr] (ecmascript)");
;
;
function getWalletAccountFeature(walletAccount, featureName) {
    if (!walletAccount.features.includes(featureName)) {
        const err = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletStandardError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_STANDARD_ERROR__FEATURES__WALLET_ACCOUNT_FEATURE_UNIMPLEMENTED"], {
            address: walletAccount.address,
            featureName,
            supportedChains: [
                ...walletAccount.chains
            ],
            supportedFeatures: [
                ...walletAccount.features
            ]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$errors$2f$lib$2f$esm$2f$stack$2d$trace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeCaptureStackTrace"])(err, getWalletAccountFeature);
        throw err;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletFeature"])(walletAccount, featureName);
} //# sourceMappingURL=getWalletAccountFeature.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWeakRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWeakRef",
    ()=>useWeakRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const values = new WeakMap();
const subscribers = new Map();
function getServerSnapshot() {
    return {
        current: undefined
    };
}
function createMutableRef(keyObj) {
    return {
        get current () {
            return values.get(keyObj);
        },
        set current (newValue){
            if (newValue === values.get(keyObj)) {
                return;
            }
            if (newValue === undefined) {
                values.delete(keyObj);
            } else {
                values.set(keyObj, newValue);
            }
            subscribers.get(keyObj)?.forEach((cb)=>cb());
        }
    };
}
function useWeakRef(keyObj) {
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onStoreChange)=>{
        let callbacks = subscribers.get(keyObj);
        if (callbacks == null) {
            subscribers.set(keyObj, callbacks = new Set());
        }
        function handleChange() {
            // This is super subtle; When there's a change, we want to create a new ref object
            // so that `useSyncExternalStore()` perceives it as changed and triggers a rerender.
            ref.current = createMutableRef(keyObj);
            onStoreChange();
        }
        callbacks.add(handleChange);
        return ()=>{
            ref.current = undefined;
            callbacks.delete(handleChange);
            if (callbacks.size === 0) {
                subscribers.delete(keyObj);
            }
        };
    }, [
        keyObj
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>ref.current || (ref.current = createMutableRef(keyObj)), [
        keyObj
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
} //# sourceMappingURL=useWeakRef.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/useConnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnect",
    ()=>useConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/features/lib/esm/connect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWeakRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWeakRef.js [app-ssr] (ecmascript)");
;
;
;
;
;
function useConnect(uiWallet) {
    const connectFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletFeature"])(uiWallet, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$connect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardConnect"]);
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWallet);
    const connectionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWeakRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWeakRef"])(wallet);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async function connect(input, ...rest) {
        if (connectionPromise.current) {
            return connectionPromise.current;
        }
        const newConnectionPromise = connectFeature.connect(input, ...rest).then(({ accounts })=>{
            return accounts.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletAccountRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUiWalletAccountForStandardWalletAccount_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"].bind(null, wallet));
        }).finally(()=>{
            connectionPromise.current = undefined;
        });
        connectionPromise.current = newConnectionPromise;
        return await newConnectionPromise;
    }, [
        connectFeature,
        connectionPromise,
        wallet
    ]);
    const isConnecting = !!connectionPromise.current;
    return [
        isConnecting,
        connect
    ];
} //# sourceMappingURL=useConnect.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/useDisconnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisconnect",
    ()=>useDisconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$disconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/features/lib/esm/disconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-features/lib/esm/getWalletFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWeakRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWeakRef.js [app-ssr] (ecmascript)");
;
;
;
;
;
function useDisconnect(uiWallet) {
    const disconnectFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$features$2f$lib$2f$esm$2f$getWalletFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletFeature"])(uiWallet, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$disconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardDisconnect"]);
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWallet);
    const disconnectionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWeakRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWeakRef"])(wallet);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async function disconnect(...inputs) {
        if (disconnectionPromise.current) {
            return disconnectionPromise.current;
        }
        const newDisconnectionPromise = disconnectFeature.disconnect(...inputs).finally(()=>{
            disconnectionPromise.current = undefined;
        });
        disconnectionPromise.current = newDisconnectionPromise;
        return await newDisconnectionPromise;
    }, [
        disconnectFeature,
        disconnectionPromise
    ]);
    const isDisconnecting = !!disconnectionPromise.current;
    return [
        isDisconnecting,
        disconnect
    ];
} //# sourceMappingURL=useDisconnect.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "walletHasStandardEventsFeature",
    ()=>walletHasStandardEventsFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/features/lib/esm/events.js [app-ssr] (ecmascript)");
;
function walletHasStandardEventsFeature(wallet) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardEvents"] in wallet.features;
} //# sourceMappingURL=events.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useStable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStable",
    ()=>useStable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const UNRESOLVED = Symbol();
function useStable(getValue) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(UNRESOLVED);
    if (ref.current === UNRESOLVED) {
        ref.current = getValue();
    }
    return ref.current;
} //# sourceMappingURL=useStable.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT",
    ()=>useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$app$2f$lib$2f$esm$2f$wallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/app/lib/esm/wallets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/features/lib/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/features/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useStable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useStable.js [app-ssr] (ecmascript)");
;
;
;
;
;
const NO_WALLETS = [];
function getServerSnapshot() {
    return NO_WALLETS;
}
function useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT() {
    const { get, on } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useStable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStable"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$app$2f$lib$2f$esm$2f$wallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWallets"]);
    const prevWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(get());
    const outputWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(prevWallets.current);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const nextWallets = get();
        if (nextWallets !== prevWallets.current) {
            // The Wallet Standard itself recyled the wallets array wrapper. Use that array.
            outputWallets.current = nextWallets;
        }
        prevWallets.current = nextWallets;
        return outputWallets.current;
    }, [
        get
    ]);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onStoreChange)=>{
        const walletsToChangeListenerDisposeFn = new Map();
        function subscribeToWalletEvents(wallet) {
            const dispose = wallet.features[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$features$2f$lib$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardEvents"]].on('change', ()=>{
                // Despite a change in a property of a wallet, the array that contains the
                // list of wallets will be reused. The wallets array before and after the
                // change will be referentially equal.
                //
                // Here, we force a new wallets array wrapper to be created by cloning the
                // array. This gives React the signal to re-render, because it will notice
                // that the return value of `getSnapshot()` has changed.
                outputWallets.current = [
                    ...get()
                ];
                onStoreChange();
            });
            walletsToChangeListenerDisposeFn.set(wallet, dispose);
            return dispose;
        }
        const disposeRegisterListener = on('register', (...wallets)=>{
            wallets.filter(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletHasStandardEventsFeature"]).map(subscribeToWalletEvents);
            onStoreChange();
        });
        const disposeUnregisterListener = on('unregister', (...wallets)=>{
            wallets.forEach((wallet)=>{
                const dispose = walletsToChangeListenerDisposeFn.get(wallet);
                if (!dispose) {
                    // Not all wallets will have a corresponding dispose function because they
                    // might not support `standard:events`.
                    return;
                }
                walletsToChangeListenerDisposeFn.delete(wallet);
                dispose();
            });
            onStoreChange();
        });
        get().filter(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$features$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletHasStandardEventsFeature"]).map(subscribeToWalletEvents);
        return ()=>{
            disposeRegisterListener();
            disposeUnregisterListener();
            walletsToChangeListenerDisposeFn.forEach((d)=>d());
            walletsToChangeListenerDisposeFn.clear();
        };
    }, [
        get,
        on
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
} //# sourceMappingURL=useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWallets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallets",
    ()=>useWallets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/react-core/lib/esm/useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT.js [app-ssr] (ecmascript)");
;
;
;
function useWallets() {
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$react$2d$core$2f$lib$2f$esm$2f$useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallets_INTERNAL_ONLY_NOT_FOR_EXPORT"])();
    const uiWallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>wallets.map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateUiWalletForStandardWallet_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"]), [
        wallets
    ]);
    return uiWallets;
} //# sourceMappingURL=useWallets.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/app/lib/esm/wallets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_getWallets",
    ()=>DEPRECATED_getWallets,
    "getWallets",
    ()=>getWallets
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AppReadyEvent_detail;
let wallets = undefined;
const registeredWalletsSet = new Set();
function addRegisteredWallet(wallet) {
    cachedWalletsArray = undefined;
    registeredWalletsSet.add(wallet);
}
function removeRegisteredWallet(wallet) {
    cachedWalletsArray = undefined;
    registeredWalletsSet.delete(wallet);
}
const listeners = {};
function getWallets() {
    if (wallets) return wallets;
    wallets = Object.freeze({
        register,
        get,
        on
    });
    if ("TURBOPACK compile-time truthy", 1) return wallets;
    //TURBOPACK unreachable
    ;
    const api = undefined;
}
function register(...wallets) {
    // Filter out wallets that have already been registered.
    // This prevents the same wallet from being registered twice, but it also prevents wallets from being
    // unregistered by reusing a reference to the wallet to obtain the unregister function for it.
    wallets = wallets.filter((wallet)=>!registeredWalletsSet.has(wallet));
    // If there are no new wallets to register, just return a no-op unregister function.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!wallets.length) return ()=>{};
    wallets.forEach((wallet)=>addRegisteredWallet(wallet));
    listeners['register']?.forEach((listener)=>guard(()=>listener(...wallets)));
    // Return a function that unregisters the registered wallets.
    return function unregister() {
        wallets.forEach((wallet)=>removeRegisteredWallet(wallet));
        listeners['unregister']?.forEach((listener)=>guard(()=>listener(...wallets)));
    };
}
let cachedWalletsArray;
function get() {
    if (!cachedWalletsArray) {
        cachedWalletsArray = [
            ...registeredWalletsSet
        ];
    }
    return cachedWalletsArray;
}
function on(event, listener) {
    listeners[event]?.push(listener) || (listeners[event] = [
        listener
    ]);
    // Return a function that removes the event listener.
    return function off() {
        listeners[event] = listeners[event]?.filter((existingListener)=>listener !== existingListener);
    };
}
function guard(callback) {
    try {
        callback();
    } catch (error) {
        console.error(error);
    }
}
class AppReadyEvent extends Event {
    get detail() {
        return __classPrivateFieldGet(this, _AppReadyEvent_detail, "f");
    }
    get type() {
        return 'wallet-standard:app-ready';
    }
    constructor(api){
        super('wallet-standard:app-ready', {
            bubbles: false,
            cancelable: false,
            composed: false
        });
        _AppReadyEvent_detail.set(this, void 0);
        __classPrivateFieldSet(this, _AppReadyEvent_detail, api, "f");
    }
    /** @deprecated */ preventDefault() {
        throw new Error('preventDefault cannot be called');
    }
    /** @deprecated */ stopImmediatePropagation() {
        throw new Error('stopImmediatePropagation cannot be called');
    }
    /** @deprecated */ stopPropagation() {
        throw new Error('stopPropagation cannot be called');
    }
}
_AppReadyEvent_detail = new WeakMap();
function DEPRECATED_getWallets() {
    if (wallets) return wallets;
    wallets = getWallets();
    if ("TURBOPACK compile-time truthy", 1) return wallets;
    //TURBOPACK unreachable
    ;
    const callbacks = undefined;
    const register = undefined;
    const push = undefined;
} //# sourceMappingURL=wallets.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-compare/lib/esm/storage-key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUiWalletAccountStorageKey",
    ()=>getUiWalletAccountStorageKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
;
function getUiWalletAccountStorageKey(uiWalletAccount) {
    const underlyingWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(uiWalletAccount);
    return `${underlyingWallet.name.replace(':', '_')}:${uiWalletAccount.address}`;
} //# sourceMappingURL=storage-key.js.map
}),
"[project]/frontend/node_modules/@wallet-standard/ui-compare/lib/esm/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uiWalletAccountBelongsToUiWallet",
    ()=>uiWalletAccountBelongsToUiWallet,
    "uiWalletAccountsAreSame",
    ()=>uiWalletAccountsAreSame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wallet-standard/ui-registry/lib/esm/UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.js [app-ssr] (ecmascript)");
;
function uiWalletAccountsAreSame(a, b) {
    if (a.address !== b.address) {
        return false;
    }
    const underlyingWalletA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(a);
    const underlyingWalletB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(b);
    return underlyingWalletA === underlyingWalletB;
}
function uiWalletAccountBelongsToUiWallet(account, wallet) {
    const underlyingWalletForUiWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(wallet);
    const underlyingWalletForUiWalletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wallet$2d$standard$2f$ui$2d$registry$2f$lib$2f$esm$2f$UiWalletHandleRegistry_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletForHandle_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"])(account);
    return underlyingWalletForUiWallet === underlyingWalletForUiWalletAccount;
} //# sourceMappingURL=compare.js.map
}),
"[project]/frontend/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
var vars = process.config && process.config.variables || {};
var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
var abi = process.versions.modules // TODO: support old node where this is undef
;
var runtime = isElectron() ? 'electron' : isNwjs() ? 'node-webkit' : 'node';
var arch = process.env.npm_config_arch || os.arch();
var platform = process.env.npm_config_platform || os.platform();
var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc');
var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || '';
var uv = (process.versions.uv || '').split('.')[0];
module.exports = load;
function load(dir) {
    return runtimeRequire(load.resolve(dir));
}
load.resolve = load.path = function(dir) {
    dir = path.resolve(dir || '.');
    try {
        var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
        if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
    } catch (err) {}
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
        if (debug) return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild) return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby) return nearby;
    var target = [
        'platform=' + platform,
        'arch=' + arch,
        'runtime=' + runtime,
        'abi=' + abi,
        'uv=' + uv,
        armv ? 'armv=' + armv : '',
        'libc=' + libc,
        'node=' + process.versions.node,
        process.versions.electron ? 'electron=' + process.versions.electron : '',
        typeof __webpack_require__ === 'function' ? 'webpack=true' : '' // eslint-disable-line
    ].filter(Boolean).join(' ');
    throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n');
    function resolve(dir) {
        // Find matching "prebuilds/<platform>-<arch>" directory
        var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        // Find most specific flavor first
        var prebuilds = path.join(dir, 'prebuilds', tuple.name);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path.join(prebuilds, winner.file);
    }
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTuple(name) {
    // Example: darwin-x64+arm64
    var arr = name.split('-');
    if (arr.length !== 2) return;
    var platform = arr[0];
    var architectures = arr[1].split('+');
    if (!platform) return;
    if (!architectures.length) return;
    if (!architectures.every(Boolean)) return;
    return {
        name,
        platform,
        architectures
    };
}
function matchTuple(platform, arch) {
    return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform) return false;
        return tuple.architectures.includes(arch);
    };
}
function compareTuples(a, b) {
    // Prefer single-arch prebuilds over multi-arch
    return a.architectures.length - b.architectures.length;
}
function parseTags(file) {
    var arr = file.split('.');
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== 'node') return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
            tags.runtime = tag;
        } else if (tag === 'napi') {
            tags.napi = true;
        } else if (tag.slice(0, 3) === 'abi') {
            tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === 'uv') {
            tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === 'armv') {
            tags.armv = tag.slice(4);
        } else if (tag === 'glibc' || tag === 'musl') {
            tags.libc = tag;
        } else {
            continue;
        }
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi && tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === 'node' && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) {
            return a.runtime === runtime ? -1 : 1;
        } else if (a.abi !== b.abi) {
            return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
            return a.specificity > b.specificity ? -1 : 1;
        } else {
            return 0;
        }
    };
}
function isNwjs() {
    return !!(process.versions && process.versions.nw);
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    if (process.env.ELECTRON_RUN_AS_NODE) return true;
    return "undefined" !== 'undefined' && window.process && window.process.type === 'renderer';
}
function isAlpine(platform) {
    return platform === 'linux' && fs.existsSync('/etc/alpine-release');
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;
load.parseTuple = parseTuple;
load.matchTuple = matchTuple;
load.compareTuples = compareTuples;
}),
"[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
if (typeof runtimeRequire.addon === 'function') {
    module.exports = runtimeRequire.addon.bind(runtimeRequire);
} else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ const mask = (source, mask, output, offset, length)=>{
    for(var i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
};
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ const unmask = (buffer, mask)=>{
    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
    const length = buffer.length;
    for(var i = 0; i < length; i++){
        buffer[i] ^= mask[i & 3];
    }
};
module.exports = {
    mask,
    unmask
};
}),
"[project]/frontend/node_modules/bufferutil/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/frontend/node_modules/bufferutil"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0x00) {
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong
            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong
            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
module.exports = isValidUTF8;
}),
"[project]/frontend/node_modules/utf-8-validate/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/frontend/node_modules/utf-8-validate"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/@solana-program/compute-budget/dist/src/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPUTE_BUDGET_PROGRAM_ADDRESS",
    ()=>COMPUTE_BUDGET_PROGRAM_ADDRESS,
    "ComputeBudgetInstruction",
    ()=>ComputeBudgetInstruction,
    "MAX_COMPUTE_UNIT_LIMIT",
    ()=>MAX_COMPUTE_UNIT_LIMIT,
    "PROVISORY_COMPUTE_UNIT_LIMIT",
    ()=>PROVISORY_COMPUTE_UNIT_LIMIT,
    "REQUEST_HEAP_FRAME_DISCRIMINATOR",
    ()=>REQUEST_HEAP_FRAME_DISCRIMINATOR,
    "REQUEST_UNITS_DISCRIMINATOR",
    ()=>REQUEST_UNITS_DISCRIMINATOR,
    "SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR",
    ()=>SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR,
    "SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR",
    ()=>SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR,
    "SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR",
    ()=>SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR,
    "estimateAndUpdateProvisoryComputeUnitLimitFactory",
    ()=>estimateAndUpdateProvisoryComputeUnitLimitFactory,
    "estimateComputeUnitLimitFactory",
    ()=>estimateComputeUnitLimitFactory,
    "fillProvisorySetComputeUnitLimitInstruction",
    ()=>fillProvisorySetComputeUnitLimitInstruction,
    "getRequestHeapFrameDiscriminatorBytes",
    ()=>getRequestHeapFrameDiscriminatorBytes,
    "getRequestHeapFrameInstruction",
    ()=>getRequestHeapFrameInstruction,
    "getRequestHeapFrameInstructionDataCodec",
    ()=>getRequestHeapFrameInstructionDataCodec,
    "getRequestHeapFrameInstructionDataDecoder",
    ()=>getRequestHeapFrameInstructionDataDecoder,
    "getRequestHeapFrameInstructionDataEncoder",
    ()=>getRequestHeapFrameInstructionDataEncoder,
    "getRequestUnitsDiscriminatorBytes",
    ()=>getRequestUnitsDiscriminatorBytes,
    "getRequestUnitsInstruction",
    ()=>getRequestUnitsInstruction,
    "getRequestUnitsInstructionDataCodec",
    ()=>getRequestUnitsInstructionDataCodec,
    "getRequestUnitsInstructionDataDecoder",
    ()=>getRequestUnitsInstructionDataDecoder,
    "getRequestUnitsInstructionDataEncoder",
    ()=>getRequestUnitsInstructionDataEncoder,
    "getSetComputeUnitLimitDiscriminatorBytes",
    ()=>getSetComputeUnitLimitDiscriminatorBytes,
    "getSetComputeUnitLimitInstruction",
    ()=>getSetComputeUnitLimitInstruction,
    "getSetComputeUnitLimitInstructionDataCodec",
    ()=>getSetComputeUnitLimitInstructionDataCodec,
    "getSetComputeUnitLimitInstructionDataDecoder",
    ()=>getSetComputeUnitLimitInstructionDataDecoder,
    "getSetComputeUnitLimitInstructionDataEncoder",
    ()=>getSetComputeUnitLimitInstructionDataEncoder,
    "getSetComputeUnitPriceDiscriminatorBytes",
    ()=>getSetComputeUnitPriceDiscriminatorBytes,
    "getSetComputeUnitPriceInstruction",
    ()=>getSetComputeUnitPriceInstruction,
    "getSetComputeUnitPriceInstructionDataCodec",
    ()=>getSetComputeUnitPriceInstructionDataCodec,
    "getSetComputeUnitPriceInstructionDataDecoder",
    ()=>getSetComputeUnitPriceInstructionDataDecoder,
    "getSetComputeUnitPriceInstructionDataEncoder",
    ()=>getSetComputeUnitPriceInstructionDataEncoder,
    "getSetLoadedAccountsDataSizeLimitDiscriminatorBytes",
    ()=>getSetLoadedAccountsDataSizeLimitDiscriminatorBytes,
    "getSetLoadedAccountsDataSizeLimitInstruction",
    ()=>getSetLoadedAccountsDataSizeLimitInstruction,
    "getSetLoadedAccountsDataSizeLimitInstructionDataCodec",
    ()=>getSetLoadedAccountsDataSizeLimitInstructionDataCodec,
    "getSetLoadedAccountsDataSizeLimitInstructionDataDecoder",
    ()=>getSetLoadedAccountsDataSizeLimitInstructionDataDecoder,
    "getSetLoadedAccountsDataSizeLimitInstructionDataEncoder",
    ()=>getSetLoadedAccountsDataSizeLimitInstructionDataEncoder,
    "identifyComputeBudgetInstruction",
    ()=>identifyComputeBudgetInstruction,
    "parseRequestHeapFrameInstruction",
    ()=>parseRequestHeapFrameInstruction,
    "parseRequestUnitsInstruction",
    ()=>parseRequestUnitsInstruction,
    "parseSetComputeUnitLimitInstruction",
    ()=>parseSetComputeUnitLimitInstruction,
    "parseSetComputeUnitPriceInstruction",
    ()=>parseSetComputeUnitPriceInstruction,
    "parseSetLoadedAccountsDataSizeLimitInstruction",
    ()=>parseSetLoadedAccountsDataSizeLimitInstruction,
    "setTransactionMessageComputeUnitPrice",
    ()=>setTransactionMessageComputeUnitPrice,
    "updateOrAppendSetComputeUnitLimitInstruction",
    ()=>updateOrAppendSetComputeUnitLimitInstruction,
    "updateOrAppendSetComputeUnitPriceInstruction",
    ()=>updateOrAppendSetComputeUnitPriceInstruction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/kit/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/generated/instructions/requestHeapFrame.ts
var COMPUTE_BUDGET_PROGRAM_ADDRESS = "ComputeBudget111111111111111111111111111111";
var ComputeBudgetInstruction = /* @__PURE__ */ ((ComputeBudgetInstruction2)=>{
    ComputeBudgetInstruction2[ComputeBudgetInstruction2["RequestUnits"] = 0] = "RequestUnits";
    ComputeBudgetInstruction2[ComputeBudgetInstruction2["RequestHeapFrame"] = 1] = "RequestHeapFrame";
    ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetComputeUnitLimit"] = 2] = "SetComputeUnitLimit";
    ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetComputeUnitPrice"] = 3] = "SetComputeUnitPrice";
    ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetLoadedAccountsDataSizeLimit"] = 4] = "SetLoadedAccountsDataSizeLimit";
    return ComputeBudgetInstruction2;
})(ComputeBudgetInstruction || {});
function identifyComputeBudgetInstruction(instruction) {
    const data = "data" in instruction ? instruction.data : instruction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(0), 0)) {
        return 0 /* RequestUnits */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(1), 0)) {
        return 1 /* RequestHeapFrame */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(2), 0)) {
        return 2 /* SetComputeUnitLimit */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(3), 0)) {
        return 3 /* SetComputeUnitPrice */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(4), 0)) {
        return 4 /* SetLoadedAccountsDataSizeLimit */ ;
    }
    throw new Error("The provided instruction could not be identified as a computeBudget instruction.");
}
// src/generated/instructions/requestHeapFrame.ts
var REQUEST_HEAP_FRAME_DISCRIMINATOR = 1;
function getRequestHeapFrameDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(REQUEST_HEAP_FRAME_DISCRIMINATOR);
}
function getRequestHeapFrameInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "bytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: REQUEST_HEAP_FRAME_DISCRIMINATOR
        }));
}
function getRequestHeapFrameInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "bytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getRequestHeapFrameInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getRequestHeapFrameInstructionDataEncoder(), getRequestHeapFrameInstructionDataDecoder());
}
function getRequestHeapFrameInstruction(input, config) {
    const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
    const args = {
        ...input
    };
    const instruction = {
        programAddress,
        data: getRequestHeapFrameInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseRequestHeapFrameInstruction(instruction) {
    return {
        programAddress: instruction.programAddress,
        data: getRequestHeapFrameInstructionDataDecoder().decode(instruction.data)
    };
}
var REQUEST_UNITS_DISCRIMINATOR = 0;
function getRequestUnitsDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(REQUEST_UNITS_DISCRIMINATOR);
}
function getRequestUnitsInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "units",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "additionalFee",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: REQUEST_UNITS_DISCRIMINATOR
        }));
}
function getRequestUnitsInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "units",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "additionalFee",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getRequestUnitsInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getRequestUnitsInstructionDataEncoder(), getRequestUnitsInstructionDataDecoder());
}
function getRequestUnitsInstruction(input, config) {
    const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
    const args = {
        ...input
    };
    const instruction = {
        programAddress,
        data: getRequestUnitsInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseRequestUnitsInstruction(instruction) {
    return {
        programAddress: instruction.programAddress,
        data: getRequestUnitsInstructionDataDecoder().decode(instruction.data)
    };
}
var SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR = 2;
function getSetComputeUnitLimitDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR);
}
function getSetComputeUnitLimitInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "units",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR
        }));
}
function getSetComputeUnitLimitInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "units",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getSetComputeUnitLimitInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetComputeUnitLimitInstructionDataEncoder(), getSetComputeUnitLimitInstructionDataDecoder());
}
function getSetComputeUnitLimitInstruction(input, config) {
    const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
    const args = {
        ...input
    };
    const instruction = {
        programAddress,
        data: getSetComputeUnitLimitInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseSetComputeUnitLimitInstruction(instruction) {
    return {
        programAddress: instruction.programAddress,
        data: getSetComputeUnitLimitInstructionDataDecoder().decode(instruction.data)
    };
}
var SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR = 3;
function getSetComputeUnitPriceDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR);
}
function getSetComputeUnitPriceInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "microLamports",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR
        }));
}
function getSetComputeUnitPriceInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "microLamports",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getSetComputeUnitPriceInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetComputeUnitPriceInstructionDataEncoder(), getSetComputeUnitPriceInstructionDataDecoder());
}
function getSetComputeUnitPriceInstruction(input, config) {
    const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
    const args = {
        ...input
    };
    const instruction = {
        programAddress,
        data: getSetComputeUnitPriceInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseSetComputeUnitPriceInstruction(instruction) {
    return {
        programAddress: instruction.programAddress,
        data: getSetComputeUnitPriceInstructionDataDecoder().decode(instruction.data)
    };
}
var SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR = 4;
function getSetLoadedAccountsDataSizeLimitDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR);
}
function getSetLoadedAccountsDataSizeLimitInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "accountDataSizeLimit",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR
        }));
}
function getSetLoadedAccountsDataSizeLimitInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "accountDataSizeLimit",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getSetLoadedAccountsDataSizeLimitInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetLoadedAccountsDataSizeLimitInstructionDataEncoder(), getSetLoadedAccountsDataSizeLimitInstructionDataDecoder());
}
function getSetLoadedAccountsDataSizeLimitInstruction(input, config) {
    const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
    const args = {
        ...input
    };
    const instruction = {
        programAddress,
        data: getSetLoadedAccountsDataSizeLimitInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseSetLoadedAccountsDataSizeLimitInstruction(instruction) {
    return {
        programAddress: instruction.programAddress,
        data: getSetLoadedAccountsDataSizeLimitInstructionDataDecoder().decode(instruction.data)
    };
}
// src/constants.ts
var PROVISORY_COMPUTE_UNIT_LIMIT = 0;
var MAX_COMPUTE_UNIT_LIMIT = 14e5;
function getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage) {
    const index = getSetComputeUnitLimitInstructionIndex(transactionMessage);
    if (index < 0) {
        return null;
    }
    const units = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])().decode(transactionMessage.instructions[index].data, 1);
    return {
        index,
        units
    };
}
function getSetComputeUnitLimitInstructionIndex(transactionMessage) {
    return transactionMessage.instructions.findIndex(isSetComputeUnitLimitInstruction);
}
function isSetComputeUnitLimitInstruction(instruction) {
    return instruction.programAddress === COMPUTE_BUDGET_PROGRAM_ADDRESS && identifyComputeBudgetInstruction(instruction.data) === 2 /* SetComputeUnitLimit */ ;
}
function getSetComputeUnitPriceInstructionIndexAndMicroLamports(transactionMessage) {
    const index = getSetComputeUnitPriceInstructionIndex(transactionMessage);
    if (index < 0) {
        return null;
    }
    const microLamports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])().decode(transactionMessage.instructions[index].data, 1);
    return {
        index,
        microLamports
    };
}
function getSetComputeUnitPriceInstructionIndex(transactionMessage) {
    return transactionMessage.instructions.findIndex(isSetComputeUnitPriceInstruction);
}
function isSetComputeUnitPriceInstruction(instruction) {
    return instruction.programAddress === COMPUTE_BUDGET_PROGRAM_ADDRESS && identifyComputeBudgetInstruction(instruction.data) === 3 /* SetComputeUnitPrice */ ;
}
function fillProvisorySetComputeUnitLimitInstruction(transactionMessage) {
    return updateOrAppendSetComputeUnitLimitInstruction((previousUnits)=>previousUnits === null ? PROVISORY_COMPUTE_UNIT_LIMIT : previousUnits, transactionMessage);
}
function updateOrAppendSetComputeUnitLimitInstruction(units, transactionMessage) {
    const getUnits = (previousUnits2)=>typeof units === "function" ? units(previousUnits2) : units;
    const instructionDetails = getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage);
    if (!instructionDetails) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(getSetComputeUnitLimitInstruction({
            units: getUnits(null)
        }), transactionMessage);
    }
    const { index, units: previousUnits } = instructionDetails;
    const newUnits = getUnits(previousUnits);
    if (newUnits === previousUnits) {
        return transactionMessage;
    }
    const newInstruction = getSetComputeUnitLimitInstruction({
        units: newUnits
    });
    const newInstructions = [
        ...transactionMessage.instructions
    ];
    newInstructions.splice(index, 1, newInstruction);
    return Object.freeze({
        ...transactionMessage,
        instructions: newInstructions
    });
}
// src/estimateAndSetComputeLimit.ts
function estimateAndUpdateProvisoryComputeUnitLimitFactory(estimateComputeUnitLimit2) {
    return async function fn(transactionMessage, config) {
        const instructionDetails = getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage);
        if (instructionDetails && instructionDetails.units !== PROVISORY_COMPUTE_UNIT_LIMIT && instructionDetails.units !== MAX_COMPUTE_UNIT_LIMIT) {
            return transactionMessage;
        }
        return updateOrAppendSetComputeUnitLimitInstruction(await estimateComputeUnitLimit2(transactionMessage, config), transactionMessage);
    };
}
var PROVISORY_BLOCKHASH_LIFETIME_CONSTRAINT = {
    blockhash: "11111111111111111111111111111111",
    lastValidBlockHeight: 0n
};
function fillMissingTransactionMessageLifetimeUsingProvisoryBlockhash(transactionMessage) {
    if ("lifetimeConstraint" in transactionMessage) {
        return transactionMessage;
    }
    return setTransactionMessageLifetimeUsingProvisoryBlockhash(transactionMessage);
}
function setTransactionMessageLifetimeUsingProvisoryBlockhash(transactionMessage) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(PROVISORY_BLOCKHASH_LIFETIME_CONSTRAINT, transactionMessage);
}
// src/estimateComputeLimitInternal.ts
async function estimateComputeUnitLimit({ transactionMessage, ...configs }) {
    const replaceRecentBlockhash = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDurableNonceTransaction"])(transactionMessage);
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(transactionMessage, fillMissingTransactionMessageLifetimeUsingProvisoryBlockhash, (m)=>updateOrAppendSetComputeUnitLimitInstruction(MAX_COMPUTE_UNIT_LIMIT, m), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"]);
    return await simulateTransactionAndGetConsumedUnits({
        transaction,
        replaceRecentBlockhash,
        ...configs
    });
}
async function simulateTransactionAndGetConsumedUnits({ abortSignal, rpc, transaction, ...simulateConfig }) {
    const wireTransactionBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction);
    try {
        const { value: { err: transactionError, unitsConsumed } } = await rpc.simulateTransaction(wireTransactionBytes, {
            ...simulateConfig,
            encoding: "base64",
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
// src/estimateComputeLimit.ts
function estimateComputeUnitLimitFactory({ rpc }) {
    return async function estimateComputeUnitLimitFactoryFunction(transactionMessage, config) {
        return await estimateComputeUnitLimit({
            ...config,
            rpc,
            transactionMessage
        });
    };
}
function setTransactionMessageComputeUnitPrice(microLamports, transactionMessage) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(getSetComputeUnitPriceInstruction({
        microLamports
    }), transactionMessage);
}
function updateOrAppendSetComputeUnitPriceInstruction(microLamports, transactionMessage) {
    const getMicroLamports = (previousMicroLamports2)=>typeof microLamports === "function" ? microLamports(previousMicroLamports2) : microLamports;
    const instructionDetails = getSetComputeUnitPriceInstructionIndexAndMicroLamports(transactionMessage);
    if (!instructionDetails) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(getSetComputeUnitPriceInstruction({
            microLamports: getMicroLamports(null)
        }), transactionMessage);
    }
    const { index, microLamports: previousMicroLamports } = instructionDetails;
    const newMicroLamports = getMicroLamports(previousMicroLamports);
    if (newMicroLamports === previousMicroLamports) {
        return transactionMessage;
    }
    const newInstruction = getSetComputeUnitPriceInstruction({
        microLamports: newMicroLamports
    });
    const newInstructions = [
        ...transactionMessage.instructions
    ];
    newInstructions.splice(index, 1, newInstruction);
    return Object.freeze({
        ...transactionMessage,
        instructions: newInstructions
    });
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/frontend/node_modules/gill/dist/chunk-VC6NKDS2.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENESIS_HASH",
    ()=>GENESIS_HASH,
    "GILL_EXTERNAL_MODULE_MAP",
    ()=>GILL_EXTERNAL_MODULE_MAP,
    "LAMPORTS_PER_SOL",
    ()=>LAMPORTS_PER_SOL,
    "assertKeyPairIsExtractable",
    ()=>assertKeyPairIsExtractable,
    "checkedAddress",
    ()=>checkedAddress,
    "checkedTransactionSigner",
    ()=>checkedTransactionSigner,
    "createCodamaConfig",
    ()=>createCodamaConfig,
    "createKeypairFromBase58",
    ()=>createKeypairFromBase58,
    "createKeypairSignerFromBase58",
    ()=>createKeypairSignerFromBase58,
    "createSolanaClient",
    ()=>createSolanaClient,
    "createTransaction",
    ()=>createTransaction,
    "debug",
    ()=>debug,
    "extractBytesFromKeyPair",
    ()=>extractBytesFromKeyPair,
    "extractBytesFromKeyPairSigner",
    ()=>extractBytesFromKeyPairSigner,
    "generateExtractableKeyPair",
    ()=>generateExtractableKeyPair,
    "generateExtractableKeyPairSigner",
    ()=>generateExtractableKeyPairSigner,
    "getExplorerLink",
    ()=>getExplorerLink,
    "getMinimumBalanceForRentExemption",
    ()=>getMinimumBalanceForRentExemption,
    "getMonikerFromGenesisHash",
    ()=>getMonikerFromGenesisHash,
    "getOldestSignatureForAddress",
    ()=>getOldestSignatureForAddress,
    "getPublicSolanaRpcUrl",
    ()=>getPublicSolanaRpcUrl,
    "hasSetComputeLimitInstruction",
    ()=>hasSetComputeLimitInstruction,
    "hasSetComputeUnitPriceInstruction",
    ()=>hasSetComputeUnitPriceInstruction,
    "insertReferenceKeyToTransactionMessage",
    ()=>insertReferenceKeyToTransactionMessage,
    "insertReferenceKeysToTransactionMessage",
    ()=>insertReferenceKeysToTransactionMessage,
    "isDebugEnabled",
    ()=>isDebugEnabled,
    "isSetComputeLimitInstruction",
    ()=>isSetComputeLimitInstruction,
    "isSetComputeUnitPriceInstruction",
    ()=>isSetComputeUnitPriceInstruction,
    "lamportsToSol",
    ()=>lamportsToSol,
    "localnet",
    ()=>localnet,
    "prepareTransaction",
    ()=>prepareTransaction,
    "sendAndConfirmTransactionWithSignersFactory",
    ()=>sendAndConfirmTransactionWithSignersFactory,
    "simulateTransactionFactory",
    ()=>simulateTransactionFactory,
    "transactionFromBase64",
    ()=>transactionFromBase64,
    "transactionToBase64",
    ()=>transactionToBase64,
    "transactionToBase64WithSigners",
    ()=>transactionToBase64WithSigners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/kit/dist/index.node.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc/dist/index.node.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/rpc-subscriptions/dist/index.node.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/codecs/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/kit/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana-program/compute-budget/dist/src/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/core/debug.ts
var GILL_LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
var getMinLogLevel = ()=>process.env.GILL_DEBUG_LEVEL || /*TURBOPACK member replacement*/ __turbopack_context__.g.__GILL_DEBUG_LEVEL__ || "undefined" !== "undefined" && window.__GILL_DEBUG_LEVEL__ || "info";
var isDebugEnabled = ()=>Boolean(process.env.GILL_DEBUG_LEVEL || /*TURBOPACK member replacement*/ __turbopack_context__.g.__GILL_DEBUG_LEVEL__ || process.env.GILL_DEBUG === "true" || process.env.GILL_DEBUG === "1" || /*TURBOPACK member replacement*/ __turbopack_context__.g.__GILL_DEBUG__ === true || "undefined" !== "undefined" && window.__GILL_DEBUG__ === true);
function debug(message, level = "info", prefix = "[GILL]") {
    if (!isDebugEnabled()) return;
    if (GILL_LOG_LEVELS[level] < GILL_LOG_LEVELS[getMinLogLevel()]) return;
    const formattedMessage = typeof message === "string" ? message : JSON.stringify(message, null, 2);
    switch(level){
        case "debug":
            console.log(prefix, formattedMessage);
            break;
        case "info":
            console.info(prefix, formattedMessage);
            break;
        case "warn":
            console.warn(prefix, formattedMessage);
            break;
        case "error":
            console.error(prefix, formattedMessage);
            break;
    }
}
// src/core/const.ts
var LAMPORTS_PER_SOL = 1e9;
var GENESIS_HASH = {
    mainnet: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d",
    devnet: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG",
    testnet: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY"
};
function getMonikerFromGenesisHash(hash) {
    switch(hash){
        case GENESIS_HASH.mainnet:
            return "mainnet";
        case GENESIS_HASH.devnet:
            return "devnet";
        case GENESIS_HASH.testnet:
            return "testnet";
        default:
            return "unknown";
    }
}
function checkedAddress(input) {
    return typeof input == "string" ? input : input.address;
}
function checkedTransactionSigner(input) {
    if (typeof input === "string" || "address" in input == false) input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNoopSigner"])(input);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionSigner"])(input)) throw new Error("A signer or address is required");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsTransactionSigner"])(input);
    return input;
}
function lamportsToSol(lamports) {
    return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 9
    }).format(`${lamports}E-9`);
}
// src/core/rpc.ts
function localnet(putativeString) {
    return putativeString;
}
function getPublicSolanaRpcUrl(cluster) {
    switch(cluster){
        case "devnet":
            return "https://api.devnet.solana.com";
        case "testnet":
            return "https://api.testnet.solana.com";
        case "mainnet-beta":
        case "mainnet":
            return "https://api.mainnet-beta.solana.com";
        case "localnet":
        case "localhost":
            return "http://127.0.0.1:8899";
        default:
            throw new Error("Invalid cluster moniker");
    }
}
// src/core/explorer.ts
function getExplorerLink(props = {}) {
    let url = new URL("https://explorer.solana.com");
    if (!props.cluster || props.cluster == "mainnet") props.cluster = "mainnet-beta";
    if ("address" in props) {
        url.pathname = `/address/${props.address}`;
    } else if ("transaction" in props) {
        url.pathname = `/tx/${props.transaction}`;
    } else if ("block" in props) {
        url.pathname = `/block/${props.block}`;
    }
    if (props.cluster !== "mainnet-beta") {
        if (props.cluster === "localnet" || props.cluster === "localhost") {
            url.searchParams.set("cluster", "custom");
            url.searchParams.set("customUrl", "http://localhost:8899");
        } else {
            url.searchParams.set("cluster", props.cluster);
        }
    }
    return url.toString();
}
function createTransaction({ version, feePayer, instructions, latestBlockhash, computeUnitLimit, computeUnitPrice }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransactionMessage"])({
        version: version ?? "legacy"
    }), (tx)=>{
        const withLifetime = latestBlockhash ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, tx) : tx;
        if (typeof feePayer !== "string" && "address" in feePayer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionSigner"])(feePayer)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayerSigner"])(feePayer, withLifetime);
        } else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayer"])(feePayer, withLifetime);
    }, (tx)=>{
        const withComputeLimit = typeof computeUnitLimit !== "undefined" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
            units: Number(computeUnitLimit)
        }), tx) : tx;
        const withComputePrice = typeof computeUnitPrice !== "undefined" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSetComputeUnitPriceInstruction"])({
            microLamports: Number(computeUnitPrice)
        }), withComputeLimit) : withComputeLimit;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstructions"])(instructions, withComputePrice);
    });
}
function sendAndConfirmTransactionWithSignersFactory({ rpc, rpcSubscriptions }) {
    const sendAndConfirmTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendAndConfirmTransactionFactory"])({
        rpc,
        rpcSubscriptions
    });
    return async function sendAndConfirmTransactionWithSigners(transaction, config = {
        commitment: "confirmed"
    }) {
        if ("messageBytes" in transaction == false) {
            if ("lifetimeConstraint" in transaction === false) {
                const { value: latestBlockhash } = await rpc.getLatestBlockhash().send({
                    abortSignal: config.abortSignal
                });
                transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, transaction);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsTransactionMessageWithBlockhashLifetime"])(transaction);
            }
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTransactionMessageWithSigners"])(transaction);
        }
        debug(`Sending transaction: ${getExplorerLink({
            transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction)
        })}`);
        debug(`Transaction as base64: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction)}`, "debug");
        await sendAndConfirmTransaction(transaction, config);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignatureFromTransaction"])(transaction);
    };
}
function isSetComputeLimitInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComputeBudgetInstruction"].SetComputeUnitLimit;
}
function hasSetComputeLimitInstruction(tx) {
    return tx.instructions.filter(isSetComputeLimitInstruction).length == 1;
}
function isSetComputeUnitPriceInstruction(instruction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionForProgram"])(instruction, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInstructionWithData"])(instruction) && instruction.data[0] === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComputeBudgetInstruction"].SetComputeUnitPrice;
}
function hasSetComputeUnitPriceInstruction(tx) {
    return tx.instructions.filter(isSetComputeUnitPriceInstruction).length == 1;
}
function transactionToBase64(tx) {
    if ("messageBytes" in tx) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
    else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(tx, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"]);
}
async function transactionToBase64WithSigners(tx) {
    if ("messageBytes" in tx) return transactionToBase64(tx);
    else return transactionToBase64(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(tx));
}
async function prepareTransaction(config) {
    if (!config.computeUnitLimitMultiplier) config.computeUnitLimitMultiplier = 1.1;
    if (config.blockhashReset !== false) config.blockhashReset = true;
    const computeBudgetIndex = {
        limit: -1,
        price: -1
    };
    config.transaction.instructions.map((ix, index)=>{
        if (ix.programAddress != __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPUTE_BUDGET_PROGRAM_ADDRESS"]) return;
        if (isSetComputeLimitInstruction(ix)) {
            computeBudgetIndex.limit = index;
        }
    });
    if (computeBudgetIndex.limit < 0 || config.computeUnitLimitReset) {
        const units = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getComputeUnitEstimateForTransactionMessageFactory"])({
            rpc: config.rpc
        })(config.transaction);
        debug(`Obtained compute units from simulation: ${units}`, "debug");
        const ix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2d$program$2f$compute$2d$budget$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSetComputeUnitLimitInstruction"])({
            units: units * config.computeUnitLimitMultiplier
        });
        if (computeBudgetIndex.limit < 0) {
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(ix, config.transaction);
        } else if (config.computeUnitLimitReset) {
            const nextInstructions = [
                ...config.transaction.instructions
            ];
            nextInstructions.splice(computeBudgetIndex.limit, 1, ix);
            config.transaction = Object.freeze({
                ...config.transaction,
                instructions: nextInstructions
            });
        }
    }
    if (config.blockhashReset || "lifetimeConstraint" in config.transaction == false) {
        const { value: latestBlockhash } = await config.rpc.getLatestBlockhash().send();
        if ("lifetimeConstraint" in config.transaction == false) {
            debug("Transaction missing latest blockhash, fetching one.", "debug");
            config.transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(latestBlockhash, config.transaction);
        } else if (config.blockhashReset) {
            debug("Auto resetting the latest blockhash.", "debug");
            config.transaction = Object.freeze({
                ...config.transaction,
                lifetimeConstraint: latestBlockhash
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsTransactionMessageWithBlockhashLifetime"])(config.transaction);
    if (isDebugEnabled()) {
        debug(`Transaction as base64: ${await transactionToBase64WithSigners(config.transaction)}`, "debug");
    }
    return config.transaction;
}
function simulateTransactionFactory({ rpc }) {
    return async function simulateTransaction(transaction, config) {
        if ("messageBytes" in transaction == false) {
            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partiallySignTransactionMessageWithSigners"])(transaction);
        }
        return rpc.simulateTransaction((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64EncodedWireTransaction"])(transaction), {
            replaceRecentBlockhash: true,
            // innerInstructions: true,
            ...config,
            sigVerify: false,
            encoding: "base64"
        }).send();
    };
}
function createSolanaClient({ urlOrMoniker, rpcConfig, rpcSubscriptionsConfig }) {
    if (!urlOrMoniker) throw new Error("Cluster url or moniker is required");
    if (urlOrMoniker instanceof URL == false) {
        try {
            urlOrMoniker = new URL(urlOrMoniker.toString());
        } catch (err) {
            try {
                urlOrMoniker = new URL(getPublicSolanaRpcUrl(urlOrMoniker.toString()));
            } catch (err2) {
                throw new Error("Invalid URL or cluster moniker");
            }
        }
    }
    if (!urlOrMoniker.protocol.match(/^https?/i)) {
        throw new Error("Unsupported protocol. Only HTTP and HTTPS are supported");
    }
    if (rpcConfig?.port) {
        urlOrMoniker.port = rpcConfig.port.toString();
    }
    const rpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpc"])(urlOrMoniker.toString(), rpcConfig);
    urlOrMoniker.protocol = urlOrMoniker.protocol.replace("http", "ws");
    if (rpcSubscriptionsConfig?.port) {
        urlOrMoniker.port = rpcSubscriptionsConfig.port.toString();
    } else if (urlOrMoniker.hostname == "localhost" || urlOrMoniker.hostname.startsWith("127")) {
        urlOrMoniker.port = "8900";
    }
    const rpcSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$rpc$2d$subscriptions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSolanaRpcSubscriptions"])(urlOrMoniker.toString(), rpcSubscriptionsConfig);
    return {
        rpc,
        rpcSubscriptions,
        sendAndConfirmTransaction: sendAndConfirmTransactionWithSignersFactory({
            // @ts-ignore - TODO(FIXME:nick)
            rpc,
            // @ts-ignore - TODO(FIXME:nick)
            rpcSubscriptions
        }),
        // @ts-ignore
        simulateTransaction: simulateTransactionFactory({
            rpc
        })
    };
}
// src/core/accounts.ts
function getMinimumBalanceForRentExemption(space = 0) {
    const RENT = {
        /**
     * Account storage overhead for calculation of base rent. (aka the number of bytes required to store an account with no data.
     */ ACCOUNT_STORAGE_OVERHEAD: 128n,
        /**
     * Amount of time (in years) a balance must include rent for the account to
     * be rent exempt.
     */ DEFAULT_EXEMPTION_THRESHOLD: BigInt(Math.floor(2 * 1e3)) / 1000n,
        /**
     * Default rental rate in lamports/byte-year. This calculation is based on:
     * - 10^9 lamports per SOL
     * - $1 per SOL
     * - $0.01 per megabyte day
     * - $3.65 per megabyte year
     */ DEFAULT_LAMPORTS_PER_BYTE_YEAR: BigInt(Math.floor(1e9 / 100 * 365 / (1024 * 1024)))
    };
    return (RENT.ACCOUNT_STORAGE_OVERHEAD + BigInt(space)) * RENT.DEFAULT_LAMPORTS_PER_BYTE_YEAR * RENT.DEFAULT_EXEMPTION_THRESHOLD / 1n;
}
function assertKeyPairIsExtractable(keyPair) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (!keyPair.privateKey) {
        throw new Error("Keypair is missing private key");
    }
    if (!keyPair.publicKey) {
        throw new Error("Keypair is missing public key");
    }
    if (!keyPair.privateKey.extractable) {
        throw new Error("Private key is not extractable");
    }
}
async function generateExtractableKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    return crypto.subtle.generateKey(/* algorithm */ "Ed25519", // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ true, /* allowed uses */ [
        "sign",
        "verify"
    ]);
}
async function generateExtractableKeyPairSigner() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await generateExtractableKeyPair());
}
async function extractBytesFromKeyPair(keypair) {
    assertKeyPairIsExtractable(keypair);
    const [publicKeyBytes, privateKeyJwk] = await Promise.all([
        crypto.subtle.exportKey("raw", keypair.publicKey),
        crypto.subtle.exportKey("jwk", keypair.privateKey)
    ]);
    if (!privateKeyJwk.d) throw new Error("Failed to get private key bytes");
    return new Uint8Array([
        ...Buffer.from(privateKeyJwk.d, "base64"),
        ...new Uint8Array(publicKeyBytes)
    ]);
}
async function extractBytesFromKeyPairSigner(keypairSigner) {
    return extractBytesFromKeyPair(keypairSigner.keyPair);
}
async function createKeypairFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createKeyPairFromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(punitiveSecretKey));
}
async function createKeypairSignerFromBase58(punitiveSecretKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSignerFromKeyPair"])(await createKeypairFromBase58(punitiveSecretKey));
}
function transactionFromBase64(base64EncodedTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionDecoder"])().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$codecs$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Encoder"])().encode(base64EncodedTransaction));
}
async function getOldestSignatureForAddress(rpc, address, config) {
    const signatures = await rpc.getSignaturesForAddress(address, config).send({
        abortSignal: config?.abortSignal
    });
    if (!signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"], {
            errorName: "OldestSignatureNotFound"
        });
    }
    const oldest = signatures[signatures.length - 1];
    if (signatures.length < (config?.limit || 1e3)) return oldest;
    try {
        return await getOldestSignatureForAddress(rpc, address, {
            ...config,
            before: oldest.signature
        });
    } catch (err) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(err, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN"])) return oldest;
        throw err;
    }
}
function insertReferenceKeyToTransactionMessage(reference, transaction) {
    return insertReferenceKeysToTransactionMessage([
        reference
    ], transaction);
}
function insertReferenceKeysToTransactionMessage(references, transaction) {
    const nonMemoIndex = transaction.instructions.findIndex((ix)=>ix.programAddress !== "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
    if (transaction.instructions.length == 0 || nonMemoIndex == -1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$kit$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR"], {
            index: transaction.instructions.length || nonMemoIndex,
            cause: "At least one non-memo instruction is required"
        });
    }
    const modifiedIx = {
        ...transaction.instructions[nonMemoIndex],
        accounts: [
            ...transaction.instructions[nonMemoIndex].accounts || [],
            // actually insert the reference keys
            ...references.map((ref)=>({
                    address: ref,
                    role: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
                }))
        ]
    };
    const instructions = [
        ...transaction.instructions
    ];
    instructions.splice(nonMemoIndex, 1, modifiedIx);
    return Object.freeze({
        ...transaction,
        instructions: Object.freeze(instructions)
    });
}
// src/core/create-codama-config.ts
var GILL_EXTERNAL_MODULE_MAP = {
    solanaAccounts: "gill",
    solanaAddresses: "gill",
    solanaCodecsCore: "gill",
    solanaCodecsDataStructures: "gill",
    solanaCodecsNumbers: "gill",
    solanaCodecsStrings: "gill",
    solanaErrors: "gill",
    solanaInstructions: "gill",
    solanaOptions: "gill",
    solanaPrograms: "gill",
    solanaRpcTypes: "gill",
    solanaSigners: "gill"
};
function createCodamaConfig({ idl, clientJs, clientRust, dependencyMap = GILL_EXTERNAL_MODULE_MAP }) {
    return {
        idl,
        scripts: {
            js: {
                args: [
                    clientJs,
                    {
                        dependencyMap
                    }
                ],
                from: "@codama/renderers-js"
            },
            rust: clientRust ? {
                from: "@codama/renderers-rust",
                args: [
                    clientRust,
                    {
                        crateFolder: "clients/rust",
                        formatCode: true
                    }
                ]
            } : void 0
        }
    };
}
;
 //# sourceMappingURL=chunk-VC6NKDS2.node.mjs.map
 //# sourceMappingURL=chunk-VC6NKDS2.node.mjs.map
}),
"[project]/frontend/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/bit-buffer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++){
            this.putBit((num >>> length - i - 1 & 1) === 1);
        }
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }
        this.length++;
    }
};
module.exports = BitBuffer;
}),
"[project]/frontend/node_modules/qrcode/lib/core/bit-matrix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;
}),
"[project]/frontend/node_modules/qrcode/lib/core/alignment-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++){
        positions[i] = positions[i - 1] - intervals;
    }
    positions.push(6); // First coord is always 6
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++){
        for(let j = 0; j < posLength; j++){
            // Skip if position is occupied by finder patterns
            if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
                continue;
            }
            coords.push([
                pos[i],
                pos[j]
            ]);
        }
    }
    return coords;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/finder-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const getSymbolSize = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/mask-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) {
                sameCountCol++;
            } else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) {
                sameCountRow++;
            } else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++){
        for(let col = 0; col < size - 1; col++){
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
        }
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++){
        for(let row = 0; row < size; row++){
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
        }
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const ECLevel = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/galois-field.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) {
            x ^= 0x11D;
        }
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++){
        EXP_TABLE[i] = EXP_TABLE[i - 255];
    }
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/polynomial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const GF = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/galois-field.js [app-ssr] (ecmascript)");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++){
        for(let j = 0; j < p2.length; j++){
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
    }
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++){
            result[i] ^= GF.mul(divisor[i], coeff);
        }
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++){
        poly = exports.mul(poly, new Uint8Array([
            1,
            GF.exp(i)
        ]));
    }
    return poly;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Polynomial = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/polynomial.js [app-ssr] (ecmascript)");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
        throw new Error('Encoder not initialized');
    }
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;
}),
"[project]/frontend/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const VersionCheck = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid version: ' + version);
    }
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/version.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const VersionCheck = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)");
// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
        }
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
        }
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
    }
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid QR Code version');
    }
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
            return 1;
        }
        seg = data[0];
    } else {
        seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error('Invalid QR Code version');
    }
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0){
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    }
    return version << 12 | d;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/format-info.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0){
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    }
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/numeric-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;
}),
"[project]/frontend/node_modules/qrcode/lib/core/alphanumeric-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
    }
};
module.exports = AlphanumericData;
}),
"[project]/frontend/node_modules/qrcode/lib/core/byte-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === 'string') {
        this.data = new TextEncoder().encode(data);
    } else {
        this.data = new Uint8Array(data);
    }
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++){
        bitBuffer.put(this.data[i], 8);
    }
};
module.exports = ByteData;
}),
"[project]/frontend/node_modules/qrcode/lib/core/kanji-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140;
        // For characters with Shift JIS values from 0xE040 to 0xEBBF
        } else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
        } else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        }
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;
}),
"[project]/frontend/node_modules/qrcode/lib/core/segments.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const NumericData = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/numeric-data.js [app-ssr] (ecmascript)");
const AlphanumericData = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/alphanumeric-data.js [app-ssr] (ecmascript)");
const ByteData = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/byte-data.js [app-ssr] (ecmascript)");
const KanjiData = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/kanji-data.js [app-ssr] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const dijkstra = __turbopack_context__.r("[project]/frontend/node_modules/dijkstrajs/dijkstra.js [app-ssr] (ecmascript)");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null){
        segments.push({
            data: result[0],
            index: result.index,
            mode: mode,
            length: result[0].length
        });
    }
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        'start'
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++){
        graph[prevNodeIds[n]].end = 0;
    }
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    }
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
    }
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') {
            acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++){
        optimizedSegs.push(graph.table[path[i]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};
}),
"[project]/frontend/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const BitBuffer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/bit-buffer.js [app-ssr] (ecmascript)");
const BitMatrix = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/bit-matrix.js [app-ssr] (ecmascript)");
const AlignmentPattern = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/alignment-pattern.js [app-ssr] (ecmascript)");
const FinderPattern = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/finder-pattern.js [app-ssr] (ecmascript)");
const MaskPattern = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mask-pattern.js [app-ssr] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)");
const ReedSolomonEncoder = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-ssr] (ecmascript)");
const Version = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/version.js [app-ssr] (ecmascript)");
const FormatInfo = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/format-info.js [app-ssr] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const Segments = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/segments.js [app-ssr] (ecmascript)");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++){
                if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) {
            matrix.set(i, 8, mod, true);
        } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
        } else {
            matrix.set(size - 15 + i, 8, mod, true);
        }
        // horizontal
        if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
            matrix.set(8, 15 - i - 1, mod, true);
        }
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++){
                if (!matrix.isReserved(row, col - c)) {
                    let dark = false;
                    if (byteIndex < data.length) {
                        dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                    }
                    matrix.set(row, col - c, dark);
                    bitIndex--;
                    if (bitIndex === -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
    }
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0){
        buffer.putBit(0);
    }
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++){
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    }
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            if (i < dcData[r].length) {
                data[index++] = dcData[r][i];
            }
        }
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            data[index++] = ecData[r][i];
        }
    }
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
    } else if (typeof data === 'string') {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else {
        throw new Error('Invalid data');
    }
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
    }
    // If not specified, use min version as default
    if (!version) {
        version = bestVersion;
    // Check if the specified version can contain the data
    } else if (version < bestVersion) {
        throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
    }
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) {
        setupVersionInfo(modules, version);
    }
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) {
        // Find best mask pattern
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    }
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
    }
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
        }
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function hex2rgba(hex) {
    if (typeof hex === 'number') {
        hex = hex.toString();
    }
    if (typeof hex !== 'string') {
        throw new Error('Color should be defined as hex string');
    }
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error('Invalid hex color: ' + hex);
    }
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [
                c,
                c
            ];
        }));
    }
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++){
        for(let j = 0; j < symbolSize; j++){
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                const iSrc = Math.floor((i - scaledMargin) / scale);
                const jSrc = Math.floor((j - scaledMargin) / scale);
                pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
        }
    }
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/canvas.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) {
        canvasEl = getCanvasElement();
    }
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else {
            moveBy++;
        }
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') {
        cb(null, svgTag);
    }
    return svgTag;
};
}),
"[project]/frontend/node_modules/qrcode/lib/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)");
const CanvasRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/canvas.js [app-ssr] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
    }
    if (isLastArgCb) {
        if (argsNum < 2) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/png.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const PNG = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/png.js [app-ssr] (ecmascript)").PNG;
const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
exports.render = function render(qrData, options) {
    const opts = Utils.getOptions(options);
    const pngOpts = opts.rendererOpts;
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    const pngImage = new PNG(pngOpts);
    Utils.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
};
exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    exports.renderToBuffer(qrData, options, function(err, output) {
        if (err) cb(err);
        let url = 'data:image/png;base64,';
        url += output.toString('base64');
        cb(null, url);
    });
};
exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const png = exports.render(qrData, options);
    const buffer = [];
    png.on('error', cb);
    png.on('data', function(data) {
        buffer.push(data);
    });
    png.on('end', function() {
        cb(null, Buffer.concat(buffer));
    });
    png.pack();
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    let called = false;
    const done = (...args)=>{
        if (called) return;
        called = true;
        cb.apply(null, args);
    };
    const stream = fs.createWriteStream(path);
    stream.on('error', done);
    stream.on('close', done);
    exports.renderToFileStream(stream, qrData, options);
};
exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
    const png = exports.render(qrData, options);
    png.pack().pipe(stream);
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/utf8.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
const BLOCK_CHAR = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀'
};
const INVERTED_BLOCK_CHAR = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀'
};
function getBlockChar(top, bottom, blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
}
exports.render = function(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    let blocks = BLOCK_CHAR;
    if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
        blocks = INVERTED_BLOCK_CHAR;
    }
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    let output = '';
    let hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + '\n');
    const vMargin = Array(opts.margin + 1).join(blocks.WW);
    output += hMargin;
    for(let i = 0; i < size; i += 2){
        output += vMargin;
        for(let j = 0; j < size; j++){
            const topModule = data[i * size + j];
            const bottomModule = data[(i + 1) * size + j];
            output += getBlockChar(topModule, bottomModule, blocks);
        }
        output += vMargin + '\n';
    }
    output += hMargin.slice(0, -1);
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const utf8 = exports.render(qrData, options);
    fs.writeFile(path, utf8, cb);
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// let Utils = require('./utils')
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    // let opts = Utils.getOptions(options)
    // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)
    const black = '\x1b[40m  \x1b[0m';
    const white = '\x1b[47m  \x1b[0m';
    let output = '';
    const hMargin = Array(size + 3).join(white);
    const vMargin = Array(2).join(white);
    output += hMargin + '\n';
    for(let i = 0; i < size; ++i){
        output += white;
        for(let j = 0; j < size; j++){
            // let topModule = data[i * size + j]
            // let bottomModule = data[(i + 1) * size + j]
            output += data[i * size + j] ? black : white; // getBlockChar(topModule, bottomModule)
        }
        // output += white+'\n'
        output += vMargin + '\n';
    }
    output += hMargin + '\n';
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
}; /*
exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  let fs = require('fs')
  let utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}
*/ 
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const backgroundWhite = '\x1b[47m';
const backgroundBlack = '\x1b[40m';
const foregroundWhite = '\x1b[37m';
const foregroundBlack = '\x1b[30m';
const reset = '\x1b[0m';
const lineSetupNormal = backgroundWhite + foregroundBlack // setup colors
;
const lineSetupInverse = backgroundBlack + foregroundWhite // setup colors
;
const createPalette = function(lineSetup, foregroundWhite, foregroundBlack) {
    return {
        // 1 ... white, 2 ... black, 0 ... transparent (default)
        '00': reset + ' ' + lineSetup,
        '01': reset + foregroundWhite + '▄' + lineSetup,
        '02': reset + foregroundBlack + '▄' + lineSetup,
        10: reset + foregroundWhite + '▀' + lineSetup,
        11: ' ',
        12: '▄',
        20: reset + foregroundBlack + '▀' + lineSetup,
        21: '▀',
        22: '█'
    };
};
/**
 * Returns code for QR pixel
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {'0' | '1' | '2'}
 */ const mkCodePixel = function(modules, size, x, y) {
    const sizePlus = size + 1;
    if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1) return '0';
    if (x >= size || y >= size || y < 0 || x < 0) return '1';
    const idx = y * size + x;
    return modules[idx] ? '2' : '1';
};
/**
 * Returns code for four QR pixels. Suitable as key in palette.
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {keyof palette}
 */ const mkCode = function(modules, size, x, y) {
    return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
};
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const inverse = !!(options && options.inverse);
    const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
    const white = inverse ? foregroundBlack : foregroundWhite;
    const black = inverse ? foregroundWhite : foregroundBlack;
    const palette = createPalette(lineSetup, white, black);
    const newLine = reset + '\n' + lineSetup;
    let output = lineSetup // setup colors
    ;
    for(let y = -1; y < size + 1; y += 2){
        for(let x = -1; x < size; x++){
            output += palette[mkCode(data, size, x, y)];
        }
        output += palette[mkCode(data, size, size, y)] + newLine;
    }
    output += reset;
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const big = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-ssr] (ecmascript)");
const small = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-ssr] (ecmascript)");
exports.render = function(qrData, options, cb) {
    if (options && options.small) {
        return small.render(qrData, options, cb);
    }
    return big.render(qrData, options, cb);
};
}),
"[project]/frontend/node_modules/qrcode/lib/renderer/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const svgTagRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)");
exports.render = svgTagRenderer.render;
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const svgTag = exports.render(qrData, options);
    const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag;
    fs.writeFile(path, xmlStr, cb);
};
}),
"[project]/frontend/node_modules/qrcode/lib/server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)");
const PngRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/png.js [app-ssr] (ecmascript)");
const Utf8Renderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/utf8.js [app-ssr] (ecmascript)");
const TerminalRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/terminal.js [app-ssr] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/renderer/svg.js [app-ssr] (ecmascript)");
function checkParams(text, opts, cb) {
    if (typeof text === 'undefined') {
        throw new Error('String required as first argument');
    }
    if (typeof cb === 'undefined') {
        cb = opts;
        opts = {};
    }
    if (typeof cb !== 'function') {
        if (!canPromise()) {
            throw new Error('Callback required as last argument');
        } else {
            opts = cb || {};
            cb = null;
        }
    }
    return {
        opts: opts,
        cb: cb
    };
}
function getTypeFromFilename(path) {
    return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
}
function getRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'txt':
        case 'utf8':
            return Utf8Renderer;
        case 'png':
        case 'image/png':
        default:
            return PngRenderer;
    }
}
function getStringRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'terminal':
            return TerminalRenderer;
        case 'utf8':
        default:
            return Utf8Renderer;
    }
}
function render(renderFunc, text, params) {
    if (!params.cb) {
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, params.opts);
                return renderFunc(data, params.opts, function(err, data) {
                    return err ? reject(err) : resolve(data);
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, params.opts);
        return renderFunc(data, params.opts, params.cb);
    } catch (e) {
        params.cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/browser.js [app-ssr] (ecmascript)").toCanvas;
exports.toString = function toString(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const type = params.opts ? params.opts.type : undefined;
    const renderer = getStringRendererFromType(type);
    return render(renderer.render, text, params);
};
exports.toDataURL = function toDataURL(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToDataURL, text, params);
};
exports.toBuffer = function toBuffer(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToBuffer, text, params);
};
exports.toFile = function toFile(path, text, opts, cb) {
    if (typeof path !== 'string' || !(typeof text === 'string' || typeof text === 'object')) {
        throw new Error('Invalid argument');
    }
    if (arguments.length < 3 && !canPromise()) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, cb);
    const type = params.opts.type || getTypeFromFilename(path);
    const renderer = getRendererFromType(type);
    const renderToFile = renderer.renderToFile.bind(null, path);
    return render(renderToFile, text, params);
};
exports.toFileStream = function toFileStream(stream, text, opts) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, stream.emit.bind(stream, 'error'));
    const renderer = getRendererFromType('png') // Only png support for now
    ;
    const renderToFileStream = renderer.renderToFileStream.bind(null, stream);
    render(renderToFileStream, text, params);
};
}),
"[project]/frontend/node_modules/qrcode/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/ module.exports = __turbopack_context__.r("[project]/frontend/node_modules/qrcode/lib/server.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/dijkstrajs/dijkstra.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes){
                if (adjacent_nodes.hasOwnProperty(v)) {
                    // Get the cost of the edge running from u to v.
                    cost_of_e = adjacent_nodes[v];
                    // Cost of s to u plus the cost of u to v across e--this is *a*
                    // cost from s to v that may or may not be less than the current
                    // known cost to v.
                    cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                    // If we haven't visited v yet OR if the current known cost from s to
                    // v is greater than the new cost we just found (cost of s to u plus
                    // cost of u to v across e), update v's cost in the cost list and
                    // update v's predecessor in the predecessor list (it's now u).
                    cost_of_s_to_v = costs[v];
                    first_visit = typeof costs[v] === 'undefined';
                    if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                        costs[v] = cost_of_s_to_u_plus_cost_of_e;
                        open.push(v, cost_of_s_to_u_plus_cost_of_e);
                        predecessors[v] = u;
                    }
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T){
                if (T.hasOwnProperty(key)) {
                    t[key] = T[key];
                }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
// node.js module exports
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = dijkstra;
}
}),
"[project]/frontend/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let ChunkStream = module.exports = function() {
    Stream.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = "utf8";
    this.writable = true;
};
util.inherits(ChunkStream, Stream);
ChunkStream.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
    process.nextTick((function() {
        this._process();
        // its paused and there is not enought data then ask for more
        if (this._paused && this._reads && this._reads.length > 0) {
            this._paused = false;
            this.emit("drain");
        }
    }).bind(this));
};
ChunkStream.prototype.write = function(data, encoding) {
    if (!this.writable) {
        this.emit("error", new Error("Stream not writable"));
        return false;
    }
    let dataBuffer;
    if (Buffer.isBuffer(data)) {
        dataBuffer = data;
    } else {
        dataBuffer = Buffer.from(data, encoding || this._encoding);
    }
    this._buffers.push(dataBuffer);
    this._buffered += dataBuffer.length;
    this._process();
    // ok if there are no more read requests
    if (this._reads && this._reads.length === 0) {
        this._paused = true;
    }
    return this.writable && !this._paused;
};
ChunkStream.prototype.end = function(data, encoding) {
    if (data) {
        this.write(data, encoding);
    }
    this.writable = false;
    // already destroyed
    if (!this._buffers) {
        return;
    }
    // enqueue or handle end
    if (this._buffers.length === 0) {
        this._end();
    } else {
        this._buffers.push(null);
        this._process();
    }
};
ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;
ChunkStream.prototype._end = function() {
    if (this._reads.length > 0) {
        this.emit("error", new Error("Unexpected end of input"));
    }
    this.destroy();
};
ChunkStream.prototype.destroy = function() {
    if (!this._buffers) {
        return;
    }
    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit("close");
};
ChunkStream.prototype._processReadAllowingLess = function(read) {
    // ok there is any data so that we can satisfy this request
    this._reads.shift(); // == read
    // first we need to peek into first buffer
    let smallerBuf = this._buffers[0];
    // ok there is more data than we need
    if (smallerBuf.length > read.length) {
        this._buffered -= read.length;
        this._buffers[0] = smallerBuf.slice(read.length);
        read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
        // ok this is less than maximum length so use it all
        this._buffered -= smallerBuf.length;
        this._buffers.shift(); // == smallerBuf
        read.func.call(this, smallerBuf);
    }
};
ChunkStream.prototype._processRead = function(read) {
    this._reads.shift(); // == read
    let pos = 0;
    let count = 0;
    let data = Buffer.alloc(read.length);
    // create buffer for all data
    while(pos < read.length){
        let buf = this._buffers[count++];
        let len = Math.min(buf.length, read.length - pos);
        buf.copy(data, pos, 0, len);
        pos += len;
        // last buffer wasn't used all so just slice it and leave
        if (len !== buf.length) {
            this._buffers[--count] = buf.slice(len);
        }
    }
    // remove all used buffers
    if (count > 0) {
        this._buffers.splice(0, count);
    }
    this._buffered -= read.length;
    read.func.call(this, data);
};
ChunkStream.prototype._process = function() {
    try {
        // as long as there is any data and read requests
        while(this._buffered > 0 && this._reads && this._reads.length > 0){
            let read = this._reads[0];
            // read any data (but no more than length)
            if (read.allowLess) {
                this._processReadAllowingLess(read);
            } else if (this._buffered >= read.length) {
                // ok we can meet some expectations
                this._processRead(read);
            } else {
                break;
            }
        }
        if (this._buffers && !this.writable) {
            this._end();
        }
    } catch (ex) {
        this.emit("error", ex);
    }
};
}),
"[project]/frontend/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Adam 7
//   0 1 2 3 4 5 6 7
// 0 x 6 4 6 x 6 4 6
// 1 7 7 7 7 7 7 7 7
// 2 5 6 5 6 5 6 5 6
// 3 7 7 7 7 7 7 7 7
// 4 3 6 4 6 3 6 4 6
// 5 7 7 7 7 7 7 7 7
// 6 5 6 5 6 5 6 5 6
// 7 7 7 7 7 7 7 7 7
let imagePasses = [
    {
        // pass 1 - 1px
        x: [
            0
        ],
        y: [
            0
        ]
    },
    {
        // pass 2 - 1px
        x: [
            4
        ],
        y: [
            0
        ]
    },
    {
        // pass 3 - 2px
        x: [
            0,
            4
        ],
        y: [
            4
        ]
    },
    {
        // pass 4 - 4px
        x: [
            2,
            6
        ],
        y: [
            0,
            4
        ]
    },
    {
        // pass 5 - 8px
        x: [
            0,
            2,
            4,
            6
        ],
        y: [
            2,
            6
        ]
    },
    {
        // pass 6 - 16px
        x: [
            1,
            3,
            5,
            7
        ],
        y: [
            0,
            2,
            4,
            6
        ]
    },
    {
        // pass 7 - 32px
        x: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        y: [
            1,
            3,
            5,
            7
        ]
    }
];
exports.getImagePasses = function(width, height) {
    let images = [];
    let xLeftOver = width % 8;
    let yLeftOver = height % 8;
    let xRepeats = (width - xLeftOver) / 8;
    let yRepeats = (height - yLeftOver) / 8;
    for(let i = 0; i < imagePasses.length; i++){
        let pass = imagePasses[i];
        let passWidth = xRepeats * pass.x.length;
        let passHeight = yRepeats * pass.y.length;
        for(let j = 0; j < pass.x.length; j++){
            if (pass.x[j] < xLeftOver) {
                passWidth++;
            } else {
                break;
            }
        }
        for(let j = 0; j < pass.y.length; j++){
            if (pass.y[j] < yLeftOver) {
                passHeight++;
            } else {
                break;
            }
        }
        if (passWidth > 0 && passHeight > 0) {
            images.push({
                width: passWidth,
                height: passHeight,
                index: i
            });
        }
    }
    return images;
};
exports.getInterlaceIterator = function(width) {
    return function(x, y, pass) {
        let outerXLeftOver = x % imagePasses[pass].x.length;
        let outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
        let outerYLeftOver = y % imagePasses[pass].y.length;
        let outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
        return outerX * 4 + outerY * width * 4;
    };
};
}),
"[project]/frontend/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function paethPredictor(left, above, upLeft) {
    let paeth = left + above - upLeft;
    let pLeft = Math.abs(paeth - left);
    let pAbove = Math.abs(paeth - above);
    let pUpLeft = Math.abs(paeth - upLeft);
    if (pLeft <= pAbove && pLeft <= pUpLeft) {
        return left;
    }
    if (pAbove <= pUpLeft) {
        return above;
    }
    return upLeft;
};
}),
"[project]/frontend/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)");
let paethPredictor = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)");
function getByteWidth(width, bpp, depth) {
    let byteWidth = width * bpp;
    if (depth !== 8) {
        byteWidth = Math.ceil(byteWidth / (8 / depth));
    }
    return byteWidth;
}
let Filter = module.exports = function(bitmapInfo, dependencies) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let interlace = bitmapInfo.interlace;
    let bpp = bitmapInfo.bpp;
    let depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];
    if (interlace) {
        let passes = interlaceUtils.getImagePasses(width, height);
        for(let i = 0; i < passes.length; i++){
            this._images.push({
                byteWidth: getByteWidth(passes[i].width, bpp, depth),
                height: passes[i].height,
                lineIndex: 0
            });
        }
    } else {
        this._images.push({
            byteWidth: getByteWidth(width, bpp, depth),
            height: height,
            lineIndex: 0
        });
    }
    // when filtering the line we look at the pixel to the left
    // the spec also says it is done on a byte level regardless of the number of pixels
    // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
    // a pixel rather than just a different byte part. However if we are sub byte, we ignore.
    if (depth === 8) {
        this._xComparison = bpp;
    } else if (depth === 16) {
        this._xComparison = bpp * 2;
    } else {
        this._xComparison = 1;
    }
};
Filter.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
};
Filter.prototype._unFilterType1 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        unfilteredLine[x] = rawByte + f1Left;
    }
};
Filter.prototype._unFilterType2 = function(rawData, unfilteredLine, byteWidth) {
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f2Up = lastLine ? lastLine[x] : 0;
        unfilteredLine[x] = rawByte + f2Up;
    }
};
Filter.prototype._unFilterType3 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f3Up = lastLine ? lastLine[x] : 0;
        let f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f3Add = Math.floor((f3Left + f3Up) / 2);
        unfilteredLine[x] = rawByte + f3Add;
    }
};
Filter.prototype._unFilterType4 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f4Up = lastLine ? lastLine[x] : 0;
        let f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
        let f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
        unfilteredLine[x] = rawByte + f4Add;
    }
};
Filter.prototype._reverseFilterLine = function(rawData) {
    let filter = rawData[0];
    let unfilteredLine;
    let currentImage = this._images[this._imageIndex];
    let byteWidth = currentImage.byteWidth;
    if (filter === 0) {
        unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
        unfilteredLine = Buffer.alloc(byteWidth);
        switch(filter){
            case 1:
                this._unFilterType1(rawData, unfilteredLine, byteWidth);
                break;
            case 2:
                this._unFilterType2(rawData, unfilteredLine, byteWidth);
                break;
            case 3:
                this._unFilterType3(rawData, unfilteredLine, byteWidth);
                break;
            case 4:
                this._unFilterType4(rawData, unfilteredLine, byteWidth);
                break;
            default:
                throw new Error("Unrecognised filter type - " + filter);
        }
    }
    this.write(unfilteredLine);
    currentImage.lineIndex++;
    if (currentImage.lineIndex >= currentImage.height) {
        this._lastLine = null;
        this._imageIndex++;
        currentImage = this._images[this._imageIndex];
    } else {
        this._lastLine = unfilteredLine;
    }
    if (currentImage) {
        // read, using the byte width that may be from the new current image
        this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
        this._lastLine = null;
        this.complete();
    }
};
}),
"[project]/frontend/node_modules/pngjs/lib/filter-parse-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)");
let FilterAsync = module.exports = function(bitmapInfo) {
    ChunkStream.call(this);
    let buffers = [];
    let that = this;
    this._filter = new Filter(bitmapInfo, {
        read: this.read.bind(this),
        write: function(buffer) {
            buffers.push(buffer);
        },
        complete: function() {
            that.emit("complete", Buffer.concat(buffers));
        }
    });
    this._filter.start();
};
util.inherits(FilterAsync, ChunkStream);
}),
"[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    PNG_SIGNATURE: [
        0x89,
        0x50,
        0x4e,
        0x47,
        0x0d,
        0x0a,
        0x1a,
        0x0a
    ],
    TYPE_IHDR: 0x49484452,
    TYPE_IEND: 0x49454e44,
    TYPE_IDAT: 0x49444154,
    TYPE_PLTE: 0x504c5445,
    TYPE_tRNS: 0x74524e53,
    TYPE_gAMA: 0x67414d41,
    // color-type bits
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    // color-type combinations
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
        0: 1,
        2: 3,
        3: 1,
        4: 2,
        6: 4
    },
    GAMMA_DIVISION: 100000
};
}),
"[project]/frontend/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let crcTable = [];
(function() {
    for(let i = 0; i < 256; i++){
        let currentCrc = i;
        for(let j = 0; j < 8; j++){
            if (currentCrc & 1) {
                currentCrc = 0xedb88320 ^ currentCrc >>> 1;
            } else {
                currentCrc = currentCrc >>> 1;
            }
        }
        crcTable[i] = currentCrc;
    }
})();
let CrcCalculator = module.exports = function() {
    this._crc = -1;
};
CrcCalculator.prototype.write = function(data) {
    for(let i = 0; i < data.length; i++){
        this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ this._crc >>> 8;
    }
    return true;
};
CrcCalculator.prototype.crc32 = function() {
    return this._crc ^ -1;
};
CrcCalculator.crc32 = function(buf) {
    let crc = -1;
    for(let i = 0; i < buf.length; i++){
        crc = crcTable[(crc ^ buf[i]) & 0xff] ^ crc >>> 8;
    }
    return crc ^ -1;
};
}),
"[project]/frontend/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let CrcCalculator = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)");
let Parser = module.exports = function(options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false;
    // input flags/metadata
    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;
    this.headersFinished = dependencies.headersFinished || function() {};
};
Parser.prototype.start = function() {
    this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
};
Parser.prototype._parseSignature = function(data) {
    let signature = constants.PNG_SIGNATURE;
    for(let i = 0; i < signature.length; i++){
        if (data[i] !== signature[i]) {
            this.error(new Error("Invalid file signature"));
            return;
        }
    }
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._parseChunkBegin = function(data) {
    // chunk content length
    let length = data.readUInt32BE(0);
    // chunk type
    let type = data.readUInt32BE(4);
    let name = "";
    for(let i = 4; i < 8; i++){
        name += String.fromCharCode(data[i]);
    }
    //console.log('chunk ', name, length);
    // chunk flags
    let ancillary = Boolean(data[4] & 0x20); // or critical
    //    priv = Boolean(data[5] & 0x20), // or public
    //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe
    if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
        this.error(new Error("Expected IHDR on beggining"));
        return;
    }
    this._crc = new CrcCalculator();
    this._crc.write(Buffer.from(name));
    if (this._chunks[type]) {
        return this._chunks[type](length);
    }
    if (!ancillary) {
        this.error(new Error("Unsupported critical chunk type " + name));
        return;
    }
    this.read(length + 4, this._skipChunk.bind(this));
};
Parser.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
};
Parser.prototype._parseChunkEnd = function(data) {
    let fileCrc = data.readInt32BE(0);
    let calcCrc = this._crc.crc32();
    // check CRC
    if (this._options.checkCRC && calcCrc !== fileCrc) {
        this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
        return;
    }
    if (!this._hasIEND) {
        this.read(8, this._parseChunkBegin.bind(this));
    }
};
Parser.prototype._handleIHDR = function(length) {
    this.read(length, this._parseIHDR.bind(this));
};
Parser.prototype._parseIHDR = function(data) {
    this._crc.write(data);
    let width = data.readUInt32BE(0);
    let height = data.readUInt32BE(4);
    let depth = data[8];
    let colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha
    let compr = data[10];
    let filter = data[11];
    let interlace = data[12];
    // console.log('    width', width, 'height', height,
    //     'depth', depth, 'colorType', colorType,
    //     'compr', compr, 'filter', filter, 'interlace', interlace
    // );
    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
        this.error(new Error("Unsupported bit depth " + depth));
        return;
    }
    if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
        this.error(new Error("Unsupported color type"));
        return;
    }
    if (compr !== 0) {
        this.error(new Error("Unsupported compression method"));
        return;
    }
    if (filter !== 0) {
        this.error(new Error("Unsupported filter method"));
        return;
    }
    if (interlace !== 0 && interlace !== 1) {
        this.error(new Error("Unsupported interlace method"));
        return;
    }
    this._colorType = colorType;
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
        width: width,
        height: height,
        depth: depth,
        interlace: Boolean(interlace),
        palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
        color: Boolean(colorType & constants.COLORTYPE_COLOR),
        alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
        bpp: bpp,
        colorType: colorType
    });
    this._handleChunkEnd();
};
Parser.prototype._handlePLTE = function(length) {
    this.read(length, this._parsePLTE.bind(this));
};
Parser.prototype._parsePLTE = function(data) {
    this._crc.write(data);
    let entries = Math.floor(data.length / 3);
    // console.log('Palette:', entries);
    for(let i = 0; i < entries; i++){
        this._palette.push([
            data[i * 3],
            data[i * 3 + 1],
            data[i * 3 + 2],
            0xff
        ]);
    }
    this.palette(this._palette);
    this._handleChunkEnd();
};
Parser.prototype._handleTRNS = function(length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
};
Parser.prototype._parseTRNS = function(data) {
    this._crc.write(data);
    // palette
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
        if (this._palette.length === 0) {
            this.error(new Error("Transparency chunk must be after palette"));
            return;
        }
        if (data.length > this._palette.length) {
            this.error(new Error("More transparent colors than palette size"));
            return;
        }
        for(let i = 0; i < data.length; i++){
            this._palette[i][3] = data[i];
        }
        this.palette(this._palette);
    }
    // for colorType 0 (grayscale) and 2 (rgb)
    // there might be one gray/color defined as transparent
    if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
        // grey, 2 bytes
        this.transColor([
            data.readUInt16BE(0)
        ]);
    }
    if (this._colorType === constants.COLORTYPE_COLOR) {
        this.transColor([
            data.readUInt16BE(0),
            data.readUInt16BE(2),
            data.readUInt16BE(4)
        ]);
    }
    this._handleChunkEnd();
};
Parser.prototype._handleGAMA = function(length) {
    this.read(length, this._parseGAMA.bind(this));
};
Parser.prototype._parseGAMA = function(data) {
    this._crc.write(data);
    this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);
    this._handleChunkEnd();
};
Parser.prototype._handleIDAT = function(length) {
    if (!this._emittedHeadersFinished) {
        this._emittedHeadersFinished = true;
        this.headersFinished();
    }
    this.read(-length, this._parseIDAT.bind(this, length));
};
Parser.prototype._parseIDAT = function(length, data) {
    this._crc.write(data);
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
        throw new Error("Expected palette not found");
    }
    this.inflateData(data);
    let leftOverLength = length - data.length;
    if (leftOverLength > 0) {
        this._handleIDAT(leftOverLength);
    } else {
        this._handleChunkEnd();
    }
};
Parser.prototype._handleIEND = function(length) {
    this.read(length, this._parseIEND.bind(this));
};
Parser.prototype._parseIEND = function(data) {
    this._crc.write(data);
    this._hasIEND = true;
    this._handleChunkEnd();
    if (this.finished) {
        this.finished();
    }
};
}),
"[project]/frontend/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)");
let pixelBppMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos === data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = 0xff;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 1 >= data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = data[rawPos + 1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 2 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = 0xff;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 3 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = data[rawPos + 3];
    }
];
let pixelBppCustomMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = maxBit;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, pixelData, pxPos) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = pixelData[1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = maxBit;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, pixelData, pxPos) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = pixelData[3];
    }
];
function bitRetriever(data, depth) {
    let leftOver = [];
    let i = 0;
    function split() {
        if (i === data.length) {
            throw new Error("Ran out of data");
        }
        let byte = data[i];
        i++;
        let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
        switch(depth){
            default:
                throw new Error("unrecognised depth");
            case 16:
                byte2 = data[i];
                i++;
                leftOver.push((byte << 8) + byte2);
                break;
            case 4:
                byte2 = byte & 0x0f;
                byte1 = byte >> 4;
                leftOver.push(byte1, byte2);
                break;
            case 2:
                byte4 = byte & 3;
                byte3 = byte >> 2 & 3;
                byte2 = byte >> 4 & 3;
                byte1 = byte >> 6 & 3;
                leftOver.push(byte1, byte2, byte3, byte4);
                break;
            case 1:
                byte8 = byte & 1;
                byte7 = byte >> 1 & 1;
                byte6 = byte >> 2 & 1;
                byte5 = byte >> 3 & 1;
                byte4 = byte >> 4 & 1;
                byte3 = byte >> 5 & 1;
                byte2 = byte >> 6 & 1;
                byte1 = byte >> 7 & 1;
                leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
                break;
        }
    }
    return {
        get: function(count) {
            while(leftOver.length < count){
                split();
            }
            let returner = leftOver.slice(0, count);
            leftOver = leftOver.slice(count);
            return returner;
        },
        resetAfterLine: function() {
            leftOver.length = 0;
        },
        end: function() {
            if (i !== data.length) {
                throw new Error("extra data found");
            }
        }
    };
}
function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
            rawPos += bpp; //eslint-disable-line no-param-reassign
        }
    }
    return rawPos;
}
function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pixelData = bits.get(bpp);
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
        }
        bits.resetAfterLine();
    }
}
exports.dataToBitMap = function(data, bitmapInfo) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let depth = bitmapInfo.depth;
    let bpp = bitmapInfo.bpp;
    let interlace = bitmapInfo.interlace;
    let bits;
    if (depth !== 8) {
        bits = bitRetriever(data, depth);
    }
    let pxData;
    if (depth <= 8) {
        pxData = Buffer.alloc(width * height * 4);
    } else {
        pxData = new Uint16Array(width * height * 4);
    }
    let maxBit = Math.pow(2, depth) - 1;
    let rawPos = 0;
    let images;
    let getPxPos;
    if (interlace) {
        images = interlaceUtils.getImagePasses(width, height);
        getPxPos = interlaceUtils.getInterlaceIterator(width, height);
    } else {
        let nonInterlacedPxPos = 0;
        getPxPos = function() {
            let returner = nonInterlacedPxPos;
            nonInterlacedPxPos += 4;
            return returner;
        };
        images = [
            {
                width: width,
                height: height
            }
        ];
    }
    for(let imageIndex = 0; imageIndex < images.length; imageIndex++){
        if (depth === 8) {
            rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
        } else {
            mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
        }
    }
    if (depth === 8) {
        if (rawPos !== data.length) {
            throw new Error("extra data found");
        }
    } else {
        bits.end();
    }
    return pxData;
};
}),
"[project]/frontend/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function dePalette(indata, outdata, width, height, palette) {
    let pxPos = 0;
    // use values from palette
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let color = palette[indata[pxPos]];
            if (!color) {
                throw new Error("index " + indata[pxPos] + " not in palette");
            }
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = color[i];
            }
            pxPos += 4;
        }
    }
}
function replaceTransparentColor(indata, outdata, width, height, transColor) {
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let makeTrans = false;
            if (transColor.length === 1) {
                if (transColor[0] === indata[pxPos]) {
                    makeTrans = true;
                }
            } else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) {
                makeTrans = true;
            }
            if (makeTrans) {
                for(let i = 0; i < 4; i++){
                    outdata[pxPos + i] = 0;
                }
            }
            pxPos += 4;
        }
    }
}
function scaleDepth(indata, outdata, width, height, depth) {
    let maxOutSample = 255;
    let maxInSample = Math.pow(2, depth) - 1;
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + 0.5);
            }
            pxPos += 4;
        }
    }
}
module.exports = function(indata, imageData) {
    let depth = imageData.depth;
    let width = imageData.width;
    let height = imageData.height;
    let colorType = imageData.colorType;
    let transColor = imageData.transColor;
    let palette = imageData.palette;
    let outdata = indata; // only different for 16 bits
    if (colorType === 3) {
        // paletted
        dePalette(indata, outdata, width, height, palette);
    } else {
        if (transColor) {
            replaceTransparentColor(indata, outdata, width, height, transColor);
        }
        // if it needs scaling
        if (depth !== 8) {
            // if we need to change the buffer size
            if (depth === 16) {
                outdata = Buffer.alloc(width * height * 4);
            }
            scaleDepth(indata, outdata, width, height, depth);
        }
    }
    return outdata;
};
}),
"[project]/frontend/node_modules/pngjs/lib/parser-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)");
let FilterAsync = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/filter-parse-async.js [app-ssr] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)");
let ParserAsync = module.exports = function(options) {
    ChunkStream.call(this);
    this._parser = new Parser(options, {
        read: this.read.bind(this),
        error: this._handleError.bind(this),
        metadata: this._handleMetaData.bind(this),
        gamma: this.emit.bind(this, "gamma"),
        palette: this._handlePalette.bind(this),
        transColor: this._handleTransColor.bind(this),
        finished: this._finished.bind(this),
        inflateData: this._inflateData.bind(this),
        simpleTransparency: this._simpleTransparency.bind(this),
        headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;
    this._parser.start();
};
util.inherits(ParserAsync, ChunkStream);
ParserAsync.prototype._handleError = function(err) {
    this.emit("error", err);
    this.writable = false;
    this.destroy();
    if (this._inflate && this._inflate.destroy) {
        this._inflate.destroy();
    }
    if (this._filter) {
        this._filter.destroy();
        // For backward compatibility with Node 7 and below.
        // Suppress errors due to _inflate calling write() even after
        // it's destroy()'ed.
        this._filter.on("error", function() {});
    }
    this.errord = true;
};
ParserAsync.prototype._inflateData = function(data) {
    if (!this._inflate) {
        if (this._bitmapInfo.interlace) {
            this._inflate = zlib.createInflate();
            this._inflate.on("error", this.emit.bind(this, "error"));
            this._filter.on("complete", this._complete.bind(this));
            this._inflate.pipe(this._filter);
        } else {
            let rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
            let imageSize = rowSize * this._bitmapInfo.height;
            let chunkSize = Math.max(imageSize, zlib.Z_MIN_CHUNK);
            this._inflate = zlib.createInflate({
                chunkSize: chunkSize
            });
            let leftToInflate = imageSize;
            let emitError = this.emit.bind(this, "error");
            this._inflate.on("error", function(err) {
                if (!leftToInflate) {
                    return;
                }
                emitError(err);
            });
            this._filter.on("complete", this._complete.bind(this));
            let filterWrite = this._filter.write.bind(this._filter);
            this._inflate.on("data", function(chunk) {
                if (!leftToInflate) {
                    return;
                }
                if (chunk.length > leftToInflate) {
                    chunk = chunk.slice(0, leftToInflate);
                }
                leftToInflate -= chunk.length;
                filterWrite(chunk);
            });
            this._inflate.on("end", this._filter.end.bind(this._filter));
        }
    }
    this._inflate.write(data);
};
ParserAsync.prototype._handleMetaData = function(metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new FilterAsync(this._bitmapInfo);
};
ParserAsync.prototype._handleTransColor = function(transColor) {
    this._bitmapInfo.transColor = transColor;
};
ParserAsync.prototype._handlePalette = function(palette) {
    this._bitmapInfo.palette = palette;
};
ParserAsync.prototype._simpleTransparency = function() {
    this._metaData.alpha = true;
};
ParserAsync.prototype._headersFinished = function() {
    // Up until this point, we don't know if we have a tRNS chunk (alpha)
    // so we can't emit metadata any earlier
    this.emit("metadata", this._metaData);
};
ParserAsync.prototype._finished = function() {
    if (this.errord) {
        return;
    }
    if (!this._inflate) {
        this.emit("error", "No Inflate block");
    } else {
        // no more data to inflate
        this._inflate.end();
    }
};
ParserAsync.prototype._complete = function(filteredData) {
    if (this.errord) {
        return;
    }
    let normalisedBitmapData;
    try {
        let bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
        normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
        bitmapData = null;
    } catch (ex) {
        this._handleError(ex);
        return;
    }
    this.emit("parsed", normalisedBitmapData);
};
}),
"[project]/frontend/node_modules/pngjs/lib/bitpacker.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
module.exports = function(dataIn, width, height, options) {
    let outHasAlpha = [
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) !== -1;
    if (options.colorType === options.inputColorType) {
        let bigEndian = function() {
            let buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] !== 256;
        }();
        // If no need to convert to grayscale and alpha is present/absent in both, take a fast route
        if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) {
            return dataIn;
        }
    }
    // map to a UInt16 array if data is 16bit, fix endianness below
    let data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
    let maxValue = 255;
    let inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];
    if (inBpp === 4 && !options.inputHasAlpha) {
        inBpp = 3;
    }
    let outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];
    if (options.bitDepth === 16) {
        maxValue = 65535;
        outBpp *= 2;
    }
    let outData = Buffer.alloc(width * height * outBpp);
    let inIndex = 0;
    let outIndex = 0;
    let bgColor = options.bgColor || {};
    if (bgColor.red === undefined) {
        bgColor.red = maxValue;
    }
    if (bgColor.green === undefined) {
        bgColor.green = maxValue;
    }
    if (bgColor.blue === undefined) {
        bgColor.blue = maxValue;
    }
    function getRGBA() {
        let red;
        let green;
        let blue;
        let alpha = maxValue;
        switch(options.inputColorType){
            case constants.COLORTYPE_COLOR_ALPHA:
                alpha = data[inIndex + 3];
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_COLOR:
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_ALPHA:
                alpha = data[inIndex + 1];
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            case constants.COLORTYPE_GRAYSCALE:
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            default:
                throw new Error("input color type:" + options.inputColorType + " is not supported at present");
        }
        if (options.inputHasAlpha) {
            if (!outHasAlpha) {
                alpha /= maxValue;
                red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
                green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
                blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
            }
        }
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let rgba = getRGBA(data, inIndex);
            switch(options.colorType){
                case constants.COLORTYPE_COLOR_ALPHA:
                case constants.COLORTYPE_COLOR:
                    if (options.bitDepth === 8) {
                        outData[outIndex] = rgba.red;
                        outData[outIndex + 1] = rgba.green;
                        outData[outIndex + 2] = rgba.blue;
                        if (outHasAlpha) {
                            outData[outIndex + 3] = rgba.alpha;
                        }
                    } else {
                        outData.writeUInt16BE(rgba.red, outIndex);
                        outData.writeUInt16BE(rgba.green, outIndex + 2);
                        outData.writeUInt16BE(rgba.blue, outIndex + 4);
                        if (outHasAlpha) {
                            outData.writeUInt16BE(rgba.alpha, outIndex + 6);
                        }
                    }
                    break;
                case constants.COLORTYPE_ALPHA:
                case constants.COLORTYPE_GRAYSCALE:
                    {
                        // Convert to grayscale and alpha
                        let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
                        if (options.bitDepth === 8) {
                            outData[outIndex] = grayscale;
                            if (outHasAlpha) {
                                outData[outIndex + 1] = rgba.alpha;
                            }
                        } else {
                            outData.writeUInt16BE(grayscale, outIndex);
                            if (outHasAlpha) {
                                outData.writeUInt16BE(rgba.alpha, outIndex + 2);
                            }
                        }
                        break;
                    }
                default:
                    throw new Error("unrecognised color Type " + options.colorType);
            }
            inIndex += inBpp;
            outIndex += outBpp;
        }
    }
    return outData;
};
}),
"[project]/frontend/node_modules/pngjs/lib/filter-pack.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let paethPredictor = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)");
function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        rawData[rawPos + x] = pxData[pxPos + x];
    }
}
function filterSumNone(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let i = pxPos; i < length; i++){
        sum += Math.abs(pxData[i]);
    }
    return sum;
}
function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        rawData[rawPos + x] = val;
    }
}
function filterSumSub(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        sum += Math.abs(val);
    }
    return sum;
}
function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - up;
        rawData[rawPos + x] = val;
    }
}
function filterSumUp(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let x = pxPos; x < length; x++){
        let up = pxPos > 0 ? pxData[x - byteWidth] : 0;
        let val = pxData[x] - up;
        sum += Math.abs(val);
    }
    return sum;
}
function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        rawData[rawPos + x] = val;
    }
}
function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        sum += Math.abs(val);
    }
    return sum;
}
function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        rawData[rawPos + x] = val;
    }
}
function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        sum += Math.abs(val);
    }
    return sum;
}
let filters = {
    0: filterNone,
    1: filterSub,
    2: filterUp,
    3: filterAvg,
    4: filterPaeth
};
let filterSums = {
    0: filterSumNone,
    1: filterSumSub,
    2: filterSumUp,
    3: filterSumAvg,
    4: filterSumPaeth
};
module.exports = function(pxData, width, height, options, bpp) {
    let filterTypes;
    if (!("filterType" in options) || options.filterType === -1) {
        filterTypes = [
            0,
            1,
            2,
            3,
            4
        ];
    } else if (typeof options.filterType === "number") {
        filterTypes = [
            options.filterType
        ];
    } else {
        throw new Error("unrecognised filter types");
    }
    if (options.bitDepth === 16) {
        bpp *= 2;
    }
    let byteWidth = width * bpp;
    let rawPos = 0;
    let pxPos = 0;
    let rawData = Buffer.alloc((byteWidth + 1) * height);
    let sel = filterTypes[0];
    for(let y = 0; y < height; y++){
        if (filterTypes.length > 1) {
            // find best filter for this line (with lowest sum of values)
            let min = Infinity;
            for(let i = 0; i < filterTypes.length; i++){
                let sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
                if (sum < min) {
                    sel = filterTypes[i];
                    min = sum;
                }
            }
        }
        rawData[rawPos] = sel;
        rawPos++;
        filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
        rawPos += byteWidth;
        pxPos += byteWidth;
    }
    return rawData;
};
}),
"[project]/frontend/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let CrcStream = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)");
let bitPacker = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/bitpacker.js [app-ssr] (ecmascript)");
let filter = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/filter-pack.js [app-ssr] (ecmascript)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let Packer = module.exports = function(options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib.createDeflate;
    options.bitDepth = options.bitDepth || 8;
    // This is outputColorType
    options.colorType = typeof options.colorType === "number" ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === "number" ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) === -1) {
        throw new Error("option color type:" + options.colorType + " is not supported at present");
    }
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.inputColorType) === -1) {
        throw new Error("option input color type:" + options.inputColorType + " is not supported at present");
    }
    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
        throw new Error("option bit depth:" + options.bitDepth + " is not supported at present");
    }
};
Packer.prototype.getDeflateOptions = function() {
    return {
        chunkSize: this._options.deflateChunkSize,
        level: this._options.deflateLevel,
        strategy: this._options.deflateStrategy
    };
};
Packer.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
};
Packer.prototype.filterData = function(data, width, height) {
    // convert to correct format for filtering (e.g. right bpp and bit depth)
    let packedData = bitPacker(data, width, height, this._options);
    // filter pixel data
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    let filteredData = filter(packedData, width, height, this._options, bpp);
    return filteredData;
};
Packer.prototype._packChunk = function(type, data) {
    let len = data ? data.length : 0;
    let buf = Buffer.alloc(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);
    if (data) {
        data.copy(buf, 8);
    }
    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
};
Packer.prototype.packGAMA = function(gamma) {
    let buf = Buffer.alloc(4);
    buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
    return this._packChunk(constants.TYPE_gAMA, buf);
};
Packer.prototype.packIHDR = function(width, height) {
    let buf = Buffer.alloc(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth; // Bit depth
    buf[9] = this._options.colorType; // colorType
    buf[10] = 0; // compression
    buf[11] = 0; // filter
    buf[12] = 0; // interlace
    return this._packChunk(constants.TYPE_IHDR, buf);
};
Packer.prototype.packIDAT = function(data) {
    return this._packChunk(constants.TYPE_IDAT, data);
};
Packer.prototype.packIEND = function() {
    return this._packChunk(constants.TYPE_IEND, null);
};
}),
"[project]/frontend/node_modules/pngjs/lib/packer-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let constants = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)");
let PackerAsync = module.exports = function(opt) {
    Stream.call(this);
    let options = opt || {};
    this._packer = new Packer(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
};
util.inherits(PackerAsync, Stream);
PackerAsync.prototype.pack = function(data, width, height, gamma) {
    // Signature
    this.emit("data", Buffer.from(constants.PNG_SIGNATURE));
    this.emit("data", this._packer.packIHDR(width, height));
    if (gamma) {
        this.emit("data", this._packer.packGAMA(gamma));
    }
    let filteredData = this._packer.filterData(data, width, height);
    // compress it
    this._deflate.on("error", this.emit.bind(this, "error"));
    this._deflate.on("data", (function(compressedData) {
        this.emit("data", this._packer.packIDAT(compressedData));
    }).bind(this));
    this._deflate.on("end", (function() {
        this.emit("data", this._packer.packIEND());
        this.emit("end");
    }).bind(this));
    this._deflate.end(filteredData);
};
}),
"[project]/frontend/node_modules/pngjs/lib/sync-inflate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)").ok;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let kMaxLength = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").kMaxLength;
function Inflate(opts) {
    if (!(this instanceof Inflate)) {
        return new Inflate(opts);
    }
    if (opts && opts.chunkSize < zlib.Z_MIN_CHUNK) {
        opts.chunkSize = zlib.Z_MIN_CHUNK;
    }
    zlib.Inflate.call(this, opts);
    // Node 8 --> 9 compatibility check
    this._offset = this._offset === undefined ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;
    if (opts && opts.maxLength != null) {
        this._maxLength = opts.maxLength;
    }
}
function createInflate(opts) {
    return new Inflate(opts);
}
function _close(engine, callback) {
    if (callback) {
        process.nextTick(callback);
    }
    // Caller may invoke .close after a zlib error (which will null _handle).
    if (!engine._handle) {
        return;
    }
    engine._handle.close();
    engine._handle = null;
}
Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === "function") {
        return zlib.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }
    let self = this;
    let availInBefore = chunk && chunk.length;
    let availOutBefore = this._chunkSize - this._offset;
    let leftToInflate = this._maxLength;
    let inOff = 0;
    let buffers = [];
    let nread = 0;
    let error;
    this.on("error", function(err) {
        error = err;
    });
    function handleChunk(availInAfter, availOutAfter) {
        if (self._hadError) {
            return;
        }
        let have = availOutBefore - availOutAfter;
        assert(have >= 0, "have should not go down");
        if (have > 0) {
            let out = self._buffer.slice(self._offset, self._offset + have);
            self._offset += have;
            if (out.length > leftToInflate) {
                out = out.slice(0, leftToInflate);
            }
            buffers.push(out);
            nread += out.length;
            leftToInflate -= out.length;
            if (leftToInflate === 0) {
                return false;
            }
        }
        if (availOutAfter === 0 || self._offset >= self._chunkSize) {
            availOutBefore = self._chunkSize;
            self._offset = 0;
            self._buffer = Buffer.allocUnsafe(self._chunkSize);
        }
        if (availOutAfter === 0) {
            inOff += availInBefore - availInAfter;
            availInBefore = availInAfter;
            return true;
        }
        return false;
    }
    assert(this._handle, "zlib binding closed");
    let res;
    do {
        res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore); // out_len
        // Node 8 --> 9 compatibility check
        res = res || this._writeState;
    }while (!this._hadError && handleChunk(res[0], res[1]))
    if (this._hadError) {
        throw error;
    }
    if (nread >= kMaxLength) {
        _close(this);
        throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
    }
    let buf = Buffer.concat(buffers, nread);
    _close(this);
    return buf;
};
util.inherits(Inflate, zlib.Inflate);
function zlibBufferSync(engine, buffer) {
    if (typeof buffer === "string") {
        buffer = Buffer.from(buffer);
    }
    if (!(buffer instanceof Buffer)) {
        throw new TypeError("Not a string or buffer");
    }
    let flushFlag = engine._finishFlushFlag;
    if (flushFlag == null) {
        flushFlag = zlib.Z_FINISH;
    }
    return engine._processChunk(buffer, flushFlag);
}
function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
}
module.exports = exports = inflateSync;
exports.Inflate = Inflate;
exports.createInflate = createInflate;
exports.inflateSync = inflateSync;
}),
"[project]/frontend/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = module.exports = function(buffer) {
    this._buffer = buffer;
    this._reads = [];
};
SyncReader.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
};
SyncReader.prototype.process = function() {
    // as long as there is any data and read requests
    while(this._reads.length > 0 && this._buffer.length){
        let read = this._reads[0];
        if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
            // ok there is any data so that we can satisfy this request
            this._reads.shift(); // == read
            let buf = this._buffer;
            this._buffer = buf.slice(read.length);
            read.func.call(this, buf.slice(0, read.length));
        } else {
            break;
        }
    }
    if (this._reads.length > 0) {
        return new Error("There are some read requests waitng on finished stream");
    }
    if (this._buffer.length > 0) {
        return new Error("unrecognised content at end of stream");
    }
};
}),
"[project]/frontend/node_modules/pngjs/lib/filter-parse-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)");
exports.process = function(inBuffer, bitmapInfo) {
    let outBuffers = [];
    let reader = new SyncReader(inBuffer);
    let filter = new Filter(bitmapInfo, {
        read: reader.read.bind(reader),
        write: function(bufferPart) {
            outBuffers.push(bufferPart);
        },
        complete: function() {}
    });
    filter.start();
    reader.process();
    return Buffer.concat(outBuffers);
};
}),
"[project]/frontend/node_modules/pngjs/lib/parser-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let inflateSync = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/sync-inflate.js [app-ssr] (ecmascript)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let SyncReader = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)");
let FilterSync = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/filter-parse-sync.js [app-ssr] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)");
module.exports = function(buffer, options) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let err;
    function handleError(_err_) {
        err = _err_;
    }
    let metaData;
    function handleMetaData(_metaData_) {
        metaData = _metaData_;
    }
    function handleTransColor(transColor) {
        metaData.transColor = transColor;
    }
    function handlePalette(palette) {
        metaData.palette = palette;
    }
    function handleSimpleTransparency() {
        metaData.alpha = true;
    }
    let gamma;
    function handleGamma(_gamma_) {
        gamma = _gamma_;
    }
    let inflateDataList = [];
    function handleInflateData(inflatedData) {
        inflateDataList.push(inflatedData);
    }
    let reader = new SyncReader(buffer);
    let parser = new Parser(options, {
        read: reader.read.bind(reader),
        error: handleError,
        metadata: handleMetaData,
        gamma: handleGamma,
        palette: handlePalette,
        transColor: handleTransColor,
        inflateData: handleInflateData,
        simpleTransparency: handleSimpleTransparency
    });
    parser.start();
    reader.process();
    if (err) {
        throw err;
    }
    //join together the inflate datas
    let inflateData = Buffer.concat(inflateDataList);
    inflateDataList.length = 0;
    let inflatedData;
    if (metaData.interlace) {
        inflatedData = zlib.inflateSync(inflateData);
    } else {
        let rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
        let imageSize = rowSize * metaData.height;
        inflatedData = inflateSync(inflateData, {
            chunkSize: imageSize,
            maxLength: imageSize
        });
    }
    inflateData = null;
    if (!inflatedData || !inflatedData.length) {
        throw new Error("bad png - invalid inflate data response");
    }
    let unfilteredData = FilterSync.process(inflatedData, metaData);
    inflateData = null;
    let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
    unfilteredData = null;
    let normalisedBitmapData = formatNormaliser(bitmapData, metaData);
    metaData.data = normalisedBitmapData;
    metaData.gamma = gamma || 0;
    return metaData;
};
}),
"[project]/frontend/node_modules/pngjs/lib/packer-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let constants = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)");
module.exports = function(metaData, opt) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let options = opt || {};
    let packer = new Packer(options);
    let chunks = [];
    // Signature
    chunks.push(Buffer.from(constants.PNG_SIGNATURE));
    // Header
    chunks.push(packer.packIHDR(metaData.width, metaData.height));
    if (metaData.gamma) {
        chunks.push(packer.packGAMA(metaData.gamma));
    }
    let filteredData = packer.filterData(metaData.data, metaData.width, metaData.height);
    // compress it
    let compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
    filteredData = null;
    if (!compressedData || !compressedData.length) {
        throw new Error("bad png - invalid compressed data response");
    }
    chunks.push(packer.packIDAT(compressedData));
    // End
    chunks.push(packer.packIEND());
    return Buffer.concat(chunks);
};
}),
"[project]/frontend/node_modules/pngjs/lib/png-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let parse = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/parser-sync.js [app-ssr] (ecmascript)");
let pack = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/packer-sync.js [app-ssr] (ecmascript)");
exports.read = function(buffer, options) {
    return parse(buffer, options || {});
};
exports.write = function(png, options) {
    return pack(png, options);
};
}),
"[project]/frontend/node_modules/pngjs/lib/png.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let Parser = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/parser-async.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/packer-async.js [app-ssr] (ecmascript)");
let PNGSync = __turbopack_context__.r("[project]/frontend/node_modules/pngjs/lib/png-sync.js [app-ssr] (ecmascript)");
let PNG = exports.PNG = function(options) {
    Stream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null;
    if (options.fill && this.data) {
        this.data.fill(0);
    }
    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new Parser(options);
    this._parser.on("error", this.emit.bind(this, "error"));
    this._parser.on("close", this._handleClose.bind(this));
    this._parser.on("metadata", this._metadata.bind(this));
    this._parser.on("gamma", this._gamma.bind(this));
    this._parser.on("parsed", (function(data) {
        this.data = data;
        this.emit("parsed", data);
    }).bind(this));
    this._packer = new Packer(options);
    this._packer.on("data", this.emit.bind(this, "data"));
    this._packer.on("end", this.emit.bind(this, "end"));
    this._parser.on("close", this._handleClose.bind(this));
    this._packer.on("error", this.emit.bind(this, "error"));
};
util.inherits(PNG, Stream);
PNG.sync = PNGSync;
PNG.prototype.pack = function() {
    if (!this.data || !this.data.length) {
        this.emit("error", "No data provided");
        return this;
    }
    process.nextTick((function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
    }).bind(this));
    return this;
};
PNG.prototype.parse = function(data, callback) {
    if (callback) {
        let onParsed, onError;
        onParsed = (function(parsedData) {
            this.removeListener("error", onError);
            this.data = parsedData;
            callback(null, this);
        }).bind(this);
        onError = (function(err) {
            this.removeListener("parsed", onParsed);
            callback(err, null);
        }).bind(this);
        this.once("parsed", onParsed);
        this.once("error", onError);
    }
    this.end(data);
    return this;
};
PNG.prototype.write = function(data) {
    this._parser.write(data);
    return true;
};
PNG.prototype.end = function(data) {
    this._parser.end(data);
};
PNG.prototype._metadata = function(metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit("metadata", metadata);
};
PNG.prototype._gamma = function(gamma) {
    this.gamma = gamma;
};
PNG.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) {
        this.emit("close");
    }
};
PNG.bitblt = function(src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    /* eslint-disable no-param-reassign */ srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    /* eslint-enable no-param-reassign */ if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
        throw new Error("bitblt reading outside image");
    }
    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
        throw new Error("bitblt writing outside image");
    }
    for(let y = 0; y < height; y++){
        src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
};
PNG.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
};
PNG.adjustGamma = function(src) {
    if (src.gamma) {
        for(let y = 0; y < src.height; y++){
            for(let x = 0; x < src.width; x++){
                let idx = src.width * y + x << 2;
                for(let i = 0; i < 3; i++){
                    let sample = src.data[idx + i] / 255;
                    sample = Math.pow(sample, 1 / 2.2 / src.gamma);
                    src.data[idx + i] = Math.round(sample * 255);
                }
            }
        }
        src.gamma = 0;
    }
};
PNG.prototype.adjustGamma = function() {
    PNG.adjustGamma(this);
};
}),
"[project]/frontend/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal webcrypto alias.
 * We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
 * Falls back to Node.js built-in crypto for Node.js <=v14.
 * See utils.ts for details.
 * @module
 */ // @ts-ignore
__turbopack_context__.s([
    "crypto",
    ()=>crypto
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const crypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'webcrypto' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__.webcrypto : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'randomBytes' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ : undefined; //# sourceMappingURL=cryptoNode.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
__turbopack_context__.s([
    "Hash",
    ()=>Hash,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "byteSwapIfBE",
    ()=>byteSwapIfBE,
    "bytesToHex",
    ()=>bytesToHex,
    "bytesToUtf8",
    ()=>bytesToUtf8,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "createHasher",
    ()=>createHasher,
    "createOptHasher",
    ()=>createOptHasher,
    "createView",
    ()=>createView,
    "createXOFer",
    ()=>createXOFer,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "toBytes",
    ()=>toBytes,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapConstructor",
    ()=>wrapConstructor,
    "wrapConstructorWithOpts",
    ()=>wrapConstructorWithOpts,
    "wrapXOFConstructorWithOpts",
    ()=>wrapXOFConstructorWithOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)");
;
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
const byteSwapIfBE = swap8IfBE;
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
function kdfInputToBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
class Hash {
}
function createHasher(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function createOptHasher(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function createXOFer(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
const wrapConstructor = createHasher;
const wrapConstructorWithOpts = createOptHasher;
const wrapXOFConstructorWithOpts = createXOFer;
function randomBytes(bytesLength = 32) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].randomBytes === 'function') {
        return Uint8Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].randomBytes(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ __turbopack_context__.s([
    "Chi",
    ()=>Chi,
    "HashMD",
    ()=>HashMD,
    "Maj",
    ()=>Maj,
    "SHA224_IV",
    ()=>SHA224_IV,
    "SHA256_IV",
    ()=>SHA256_IV,
    "SHA384_IV",
    ()=>SHA384_IV,
    "SHA512_IV",
    ()=>SHA512_IV,
    "setBigUint64",
    ()=>setBigUint64
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]); //# sourceMappingURL=_md.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ __turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/frontend/node_modules/@noble/hashes/esm/sha2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ __turbopack_context__.s([
    "SHA224",
    ()=>SHA224,
    "SHA256",
    ()=>SHA256,
    "SHA384",
    ()=>SHA384,
    "SHA512",
    ()=>SHA512,
    "SHA512_224",
    ()=>SHA512_224,
    "SHA512_256",
    ()=>SHA512_256,
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256,
    "sha384",
    ()=>sha384,
    "sha512",
    ()=>sha512,
    "sha512_224",
    ()=>sha512_224,
    "sha512_256",
    ()=>sha512_256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen = 32){
        super(64, outputLen, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0;
        this.B = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0;
        this.C = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0;
        this.D = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0;
        this.E = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0;
        this.F = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0;
        this.G = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0;
        this.H = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class SHA224 extends SHA256 {
    constructor(){
        super(28);
        this.A = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][0] | 0;
        this.B = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][1] | 0;
        this.C = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][2] | 0;
        this.D = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][3] | 0;
        this.E = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][4] | 0;
        this.F = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][5] | 0;
        this.G = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][6] | 0;
        this.H = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][7] | 0;
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["split"]([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen = 64){
        super(128, outputLen, 16, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][0] | 0;
        this.Al = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][1] | 0;
        this.Bh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][2] | 0;
        this.Bl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][3] | 0;
        this.Ch = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][4] | 0;
        this.Cl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][5] | 0;
        this.Dh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][6] | 0;
        this.Dl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][7] | 0;
        this.Eh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][8] | 0;
        this.El = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][9] | 0;
        this.Fh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][10] | 0;
        this.Fl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][11] | 0;
        this.Gh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][12] | 0;
        this.Gl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][13] | 0;
        this.Hh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][14] | 0;
        this.Hl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][15] | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSH"](W15h, W15l, 7);
            const s0l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSL"](W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSH"](W2h, W2l, 6);
            const s1l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSL"](W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add4L"](s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add4H"](SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Eh, El, 41);
            const sigma1l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add5L"](Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add5H"](T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 39);
            const sigma0l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add3L"](T1l, sigma0l, MAJl);
            Ah = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add3H"](All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super(48);
        this.Ah = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][0] | 0;
        this.Al = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][1] | 0;
        this.Bh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][2] | 0;
        this.Bl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][3] | 0;
        this.Ch = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][4] | 0;
        this.Cl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][5] | 0;
        this.Dh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][6] | 0;
        this.Dl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][7] | 0;
        this.Eh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][8] | 0;
        this.El = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][9] | 0;
        this.Fh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][10] | 0;
        this.Fl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][11] | 0;
        this.Gh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][12] | 0;
        this.Gl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][13] | 0;
        this.Hh = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][14] | 0;
        this.Hl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][15] | 0;
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */ /** SHA512/224 IV */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA512/256 IV */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class SHA512_224 extends SHA512 {
    constructor(){
        super(28);
        this.Ah = T224_IV[0] | 0;
        this.Al = T224_IV[1] | 0;
        this.Bh = T224_IV[2] | 0;
        this.Bl = T224_IV[3] | 0;
        this.Ch = T224_IV[4] | 0;
        this.Cl = T224_IV[5] | 0;
        this.Dh = T224_IV[6] | 0;
        this.Dl = T224_IV[7] | 0;
        this.Eh = T224_IV[8] | 0;
        this.El = T224_IV[9] | 0;
        this.Fh = T224_IV[10] | 0;
        this.Fl = T224_IV[11] | 0;
        this.Gh = T224_IV[12] | 0;
        this.Gl = T224_IV[13] | 0;
        this.Hh = T224_IV[14] | 0;
        this.Hl = T224_IV[15] | 0;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super(32);
        this.Ah = T256_IV[0] | 0;
        this.Al = T256_IV[1] | 0;
        this.Bh = T256_IV[2] | 0;
        this.Bl = T256_IV[3] | 0;
        this.Ch = T256_IV[4] | 0;
        this.Cl = T256_IV[5] | 0;
        this.Dh = T256_IV[6] | 0;
        this.Dl = T256_IV[7] | 0;
        this.Eh = T256_IV[8] | 0;
        this.El = T256_IV[9] | 0;
        this.Fh = T256_IV[10] | 0;
        this.Fl = T256_IV[11] | 0;
        this.Gh = T256_IV[12] | 0;
        this.Gl = T256_IV[13] | 0;
        this.Hh = T256_IV[14] | 0;
        this.Hl = T256_IV[15] | 0;
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA256());
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA224());
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512());
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA384());
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512_256());
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512_224()); //# sourceMappingURL=sha2.js.map
}),
"[project]/frontend/node_modules/base-x/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Find code of next character
            var charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            var carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;
}),
"[project]/frontend/node_modules/bs58/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const basex = __turbopack_context__.r("[project]/frontend/node_modules/base-x/src/index.js [app-ssr] (ecmascript)");
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
module.exports = basex(ALPHABET);
}),
"[project]/frontend/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster,
    "toast",
    ()=>toast,
    "useSonner",
    ()=>useSonner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
const getAsset = (type)=>{
    switch(type){
        case 'success':
            return SuccessIcon;
        case 'info':
            return InfoIcon;
        case 'warning':
            return WarningIcon;
        case 'error':
            return ErrorIcon;
        default:
            return null;
    }
};
const bars = Array(12).fill(0);
const Loader = ({ visible, className })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            'sonner-loading-wrapper',
            className
        ].filter(Boolean).join(' '),
        "data-visible": visible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, bars.map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`
        }))));
};
const SuccessIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}));
const WarningIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}));
const InfoIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}));
const ErrorIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}));
const CloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
const useIsDocumentHidden = ()=>{
    const [isDocumentHidden, setIsDocumentHidden] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const callback = ()=>{
            setIsDocumentHidden(document.hidden);
        };
        document.addEventListener('visibilitychange', callback);
        return ()=>window.removeEventListener('visibilitychange', callback);
    }, []);
    return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
    constructor(){
        // We use arrow functions to maintain the correct `this` reference
        this.subscribe = (subscriber)=>{
            this.subscribers.push(subscriber);
            return ()=>{
                const index = this.subscribers.indexOf(subscriber);
                this.subscribers.splice(index, 1);
            };
        };
        this.publish = (data)=>{
            this.subscribers.forEach((subscriber)=>subscriber(data));
        };
        this.addToast = (data)=>{
            this.publish(data);
            this.toasts = [
                ...this.toasts,
                data
            ];
        };
        this.create = (data)=>{
            var _data_id;
            const { message, ...rest } = data;
            const id = typeof (data == null ? void 0 : data.id) === 'number' || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
            const alreadyExists = this.toasts.find((toast)=>{
                return toast.id === id;
            });
            const dismissible = data.dismissible === undefined ? true : data.dismissible;
            if (this.dismissedToasts.has(id)) {
                this.dismissedToasts.delete(id);
            }
            if (alreadyExists) {
                this.toasts = this.toasts.map((toast)=>{
                    if (toast.id === id) {
                        this.publish({
                            ...toast,
                            ...data,
                            id,
                            title: message
                        });
                        return {
                            ...toast,
                            ...data,
                            id,
                            dismissible,
                            title: message
                        };
                    }
                    return toast;
                });
            } else {
                this.addToast({
                    title: message,
                    ...rest,
                    dismissible,
                    id
                });
            }
            return id;
        };
        this.dismiss = (id)=>{
            if (id) {
                this.dismissedToasts.add(id);
                requestAnimationFrame(()=>this.subscribers.forEach((subscriber)=>subscriber({
                            id,
                            dismiss: true
                        })));
            } else {
                this.toasts.forEach((toast)=>{
                    this.subscribers.forEach((subscriber)=>subscriber({
                            id: toast.id,
                            dismiss: true
                        }));
                });
            }
            return id;
        };
        this.message = (message, data)=>{
            return this.create({
                ...data,
                message
            });
        };
        this.error = (message, data)=>{
            return this.create({
                ...data,
                message,
                type: 'error'
            });
        };
        this.success = (message, data)=>{
            return this.create({
                ...data,
                type: 'success',
                message
            });
        };
        this.info = (message, data)=>{
            return this.create({
                ...data,
                type: 'info',
                message
            });
        };
        this.warning = (message, data)=>{
            return this.create({
                ...data,
                type: 'warning',
                message
            });
        };
        this.loading = (message, data)=>{
            return this.create({
                ...data,
                type: 'loading',
                message
            });
        };
        this.promise = (promise, data)=>{
            if (!data) {
                // Nothing to show
                return;
            }
            let id = undefined;
            if (data.loading !== undefined) {
                id = this.create({
                    ...data,
                    promise,
                    type: 'loading',
                    message: data.loading,
                    description: typeof data.description !== 'function' ? data.description : undefined
                });
            }
            const p = Promise.resolve(promise instanceof Function ? promise() : promise);
            let shouldDismiss = id !== undefined;
            let result;
            const originalPromise = p.then(async (response)=>{
                result = [
                    'resolve',
                    response
                ];
                const isReactElementResponse = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(response);
                if (isReactElementResponse) {
                    shouldDismiss = false;
                    this.create({
                        id,
                        type: 'default',
                        message: response
                    });
                } else if (isHttpResponse(response) && !response.ok) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(`HTTP error! status: ${response.status}`) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (response instanceof Error) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(response) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (data.success !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.success === 'function' ? await data.success(response) : data.success;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'success',
                        description,
                        ...toastSettings
                    });
                }
            }).catch(async (error)=>{
                result = [
                    'reject',
                    error
                ];
                if (data.error !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(error) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(error) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                }
            }).finally(()=>{
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }
                data.finally == null ? void 0 : data.finally.call(data);
            });
            const unwrap = ()=>new Promise((resolve, reject)=>originalPromise.then(()=>result[0] === 'reject' ? reject(result[1]) : resolve(result[1])).catch(reject));
            if (typeof id !== 'string' && typeof id !== 'number') {
                // cannot Object.assign on undefined
                return {
                    unwrap
                };
            } else {
                return Object.assign(id, {
                    unwrap
                });
            }
        };
        this.custom = (jsx, data)=>{
            const id = (data == null ? void 0 : data.id) || toastsCounter++;
            this.create({
                jsx: jsx(id),
                id,
                ...data
            });
            return id;
        };
        this.getActiveToasts = ()=>{
            return this.toasts.filter((toast)=>!this.dismissedToasts.has(toast.id));
        };
        this.subscribers = [];
        this.toasts = [];
        this.dismissedToasts = new Set();
    }
}
const ToastState = new Observer();
// bind this to the toast function
const toastFunction = (message, data)=>{
    const id = (data == null ? void 0 : data.id) || toastsCounter++;
    ToastState.addToast({
        title: message,
        ...data,
        id
    });
    return id;
};
const isHttpResponse = (data)=>{
    return data && typeof data === 'object' && 'ok' in data && typeof data.ok === 'boolean' && 'status' in data && typeof data.status === 'number';
};
const basicToast = toastFunction;
const getHistory = ()=>ToastState.toasts;
const getToasts = ()=>ToastState.getActiveToasts();
// We use `Object.assign` to maintain the correct types as we would lose them otherwise
const toast = Object.assign(basicToast, {
    success: ToastState.success,
    info: ToastState.info,
    warning: ToastState.warning,
    error: ToastState.error,
    custom: ToastState.custom,
    message: ToastState.message,
    promise: ToastState.promise,
    dismiss: ToastState.dismiss,
    loading: ToastState.loading
}, {
    getHistory,
    getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
    return action.label !== undefined;
}
// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;
// Viewport padding
const VIEWPORT_OFFSET = '24px';
// Mobile viewport padding
const MOBILE_VIEWPORT_OFFSET = '16px';
// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;
// Default toast width
const TOAST_WIDTH = 356;
// Default gap between toasts
const GAP = 14;
// Threshold to dismiss a toast
const SWIPE_THRESHOLD = 45;
// Equal to exit animation duration
const TIME_BEFORE_UNMOUNT = 200;
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
function getDefaultSwipeDirections(position) {
    const [y, x] = position.split('-');
    const directions = [];
    if (y) {
        directions.push(y);
    }
    if (x) {
        directions.push(x);
    }
    return directions;
}
const Toast = (props)=>{
    var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
    const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = '', descriptionClassName = '', duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = 'Close toast' } = props;
    const [swipeDirection, setSwipeDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [swipeOutDirection, setSwipeOutDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [removed, setRemoved] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swiping, setSwiping] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swipeOut, setSwipeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isSwiped, setIsSwiped] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [offsetBeforeRemove, setOffsetBeforeRemove] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [initialHeight, setInitialHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const remainingTime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const toastRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || '';
    const toastDescriptionClassname = toast.descriptionClassName || '';
    // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
    const heightIndex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>heights.findIndex((height)=>height.toastId === toast.id) || 0, [
        heights,
        toast.id
    ]);
    const closeButton = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        var _toast_closeButton;
        return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
    }, [
        toast.closeButton,
        closeButtonFromToaster
    ]);
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>toast.duration || durationFromToaster || TOAST_LIFETIME, [
        toast.duration,
        durationFromToaster
    ]);
    const closeTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const lastCloseTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [y, x] = position.split('-');
    const toastsHeightBefore = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return heights.reduce((prev, curr, reducerIndex)=>{
            // Calculate offset up until current toast
            if (reducerIndex >= heightIndex) {
                return prev;
            }
            return prev + curr.height;
        }, 0);
    }, [
        heights,
        heightIndex
    ]);
    const isDocumentHidden = useIsDocumentHidden();
    const invert = toast.invert || ToasterInvert;
    const disabled = toastType === 'loading';
    offset.current = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>heightIndex * gap + toastsHeightBefore, [
        heightIndex,
        toastsHeightBefore
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        remainingTime.current = duration;
    }, [
        duration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Trigger enter animation without using CSS animation
        setMounted(true);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const toastNode = toastRef.current;
        if (toastNode) {
            const height = toastNode.getBoundingClientRect().height;
            // Add toast height to heights array after the toast is mounted
            setInitialHeight(height);
            setHeights((h)=>[
                    {
                        toastId: toast.id,
                        height,
                        position: toast.position
                    },
                    ...h
                ]);
            return ()=>setHeights((h)=>h.filter((height)=>height.toastId !== toast.id));
        }
    }, [
        setHeights,
        toast.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useLayoutEffect(()=>{
        // Keep height up to date with the content in case it updates
        if (!mounted) return;
        const toastNode = toastRef.current;
        const originalHeight = toastNode.style.height;
        toastNode.style.height = 'auto';
        const newHeight = toastNode.getBoundingClientRect().height;
        toastNode.style.height = originalHeight;
        setInitialHeight(newHeight);
        setHeights((heights)=>{
            const alreadyExists = heights.find((height)=>height.toastId === toast.id);
            if (!alreadyExists) {
                return [
                    {
                        toastId: toast.id,
                        height: newHeight,
                        position: toast.position
                    },
                    ...heights
                ];
            } else {
                return heights.map((height)=>height.toastId === toast.id ? {
                        ...height,
                        height: newHeight
                    } : height);
            }
        });
    }, [
        mounted,
        toast.title,
        toast.description,
        setHeights,
        toast.id,
        toast.jsx,
        toast.action,
        toast.cancel
    ]);
    const deleteToast = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        // Save the offset for the exit swipe animation
        setRemoved(true);
        setOffsetBeforeRemove(offset.current);
        setHeights((h)=>h.filter((height)=>height.toastId !== toast.id));
        setTimeout(()=>{
            removeToast(toast);
        }, TIME_BEFORE_UNMOUNT);
    }, [
        toast,
        removeToast,
        setHeights,
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (toast.promise && toastType === 'loading' || toast.duration === Infinity || toast.type === 'loading') return;
        let timeoutId;
        // Pause the timer on each hover
        const pauseTimer = ()=>{
            if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
                // Get the elapsed time since the timer started
                const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                remainingTime.current = remainingTime.current - elapsedTime;
            }
            lastCloseTimerStartTimeRef.current = new Date().getTime();
        };
        const startTimer = ()=>{
            // setTimeout(, Infinity) behaves as if the delay is 0.
            // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
            // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
            if (remainingTime.current === Infinity) return;
            closeTimerStartTimeRef.current = new Date().getTime();
            // Let the toast know it has started
            timeoutId = setTimeout(()=>{
                toast.onAutoClose == null ? void 0 : toast.onAutoClose.call(toast, toast);
                deleteToast();
            }, remainingTime.current);
        };
        if (expanded || interacting || isDocumentHidden) {
            pauseTimer();
        } else {
            startTimer();
        }
        return ()=>clearTimeout(timeoutId);
    }, [
        expanded,
        interacting,
        toast,
        toastType,
        isDocumentHidden,
        deleteToast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (toast.delete) {
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        }
    }, [
        deleteToast,
        toast.delete
    ]);
    function getLoadingIcon() {
        var _toast_classNames;
        if (icons == null ? void 0 : icons.loading) {
            var _toast_classNames1;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, 'sonner-loader'),
                "data-visible": toastType === 'loading'
            }, icons.loading);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Loader, {
            className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
            visible: toastType === 'loading'
        });
    }
    const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
    var _toast_richColors, _icons_close;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: toastRef,
        className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
        "data-sonner-toast": "",
        "data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
        "data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
        "data-mounted": mounted,
        "data-promise": Boolean(toast.promise),
        "data-swiped": isSwiped,
        "data-removed": removed,
        "data-visible": isVisible,
        "data-y-position": y,
        "data-x-position": x,
        "data-index": index,
        "data-front": isFront,
        "data-swiping": swiping,
        "data-dismissible": dismissible,
        "data-type": toastType,
        "data-invert": invert,
        "data-swipe-out": swipeOut,
        "data-swipe-direction": swipeOutDirection,
        "data-expanded": Boolean(expanded || expandByDefault && mounted),
        "data-testid": toast.testId,
        style: {
            '--index': index,
            '--toasts-before': index,
            '--z-index': toasts.length - index,
            '--offset': `${removed ? offsetBeforeRemove : offset.current}px`,
            '--initial-height': expandByDefault ? 'auto' : `${initialHeight}px`,
            ...style,
            ...toast.style
        },
        onDragEnd: ()=>{
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartRef.current = null;
        },
        onPointerDown: (event)=>{
            if (event.button === 2) return; // Return early on right click
            if (disabled || !dismissible) return;
            dragStartTime.current = new Date();
            setOffsetBeforeRemove(offset.current);
            // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
            event.target.setPointerCapture(event.pointerId);
            if (event.target.tagName === 'BUTTON') return;
            setSwiping(true);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        },
        onPointerUp: ()=>{
            var _toastRef_current, _toastRef_current1, _dragStartTime_current;
            if (swipeOut || !dismissible) return;
            pointerStartRef.current = null;
            const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0);
            const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0);
            const timeTaken = new Date().getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;
            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
                setOffsetBeforeRemove(offset.current);
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }
                deleteToast();
                setSwipeOut(true);
                return;
            } else {
                var _toastRef_current2, _toastRef_current3;
                (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty('--swipe-amount-x', `0px`);
                (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty('--swipe-amount-y', `0px`);
            }
            setIsSwiped(false);
            setSwiping(false);
            setSwipeDirection(null);
        },
        onPointerMove: (event)=>{
            var _window_getSelection, _toastRef_current, _toastRef_current1;
            if (!pointerStartRef.current || !dismissible) return;
            const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
            if (isHighlighted) return;
            const yDelta = event.clientY - pointerStartRef.current.y;
            const xDelta = event.clientX - pointerStartRef.current.x;
            var _props_swipeDirections;
            const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
            // Determine swipe direction if not already locked
            if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }
            let swipeAmount = {
                x: 0,
                y: 0
            };
            const getDampening = (delta)=>{
                const factor = Math.abs(delta) / 20;
                return 1 / (1.5 + factor);
            };
            // Only apply swipe in the locked direction
            if (swipeDirection === 'y') {
                // Handle vertical swipes
                if (swipeDirections.includes('top') || swipeDirections.includes('bottom')) {
                    if (swipeDirections.includes('top') && yDelta < 0 || swipeDirections.includes('bottom') && yDelta > 0) {
                        swipeAmount.y = yDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = yDelta * getDampening(yDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
                    }
                }
            } else if (swipeDirection === 'x') {
                // Handle horizontal swipes
                if (swipeDirections.includes('left') || swipeDirections.includes('right')) {
                    if (swipeDirections.includes('left') && xDelta < 0 || swipeDirections.includes('right') && xDelta > 0) {
                        swipeAmount.x = xDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = xDelta * getDampening(xDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
                    }
                }
            }
            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }
            (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty('--swipe-amount-x', `${swipeAmount.x}px`);
            (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty('--swipe-amount-y', `${swipeAmount.y}px`);
        }
    }, closeButton && !toast.jsx && toastType !== 'loading' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": closeButtonAriaLabel,
        "data-disabled": disabled,
        "data-close-button": true,
        onClick: disabled || !dismissible ? ()=>{} : ()=>{
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        },
        className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
    }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
    }, toast.promise || toast.type === 'loading' && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== 'loading' ? icon : null) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
    }, toast.jsx ? toast.jsx : typeof toast.title === 'function' ? toast.title() : toast.title), toast.description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
    }, typeof toast.description === 'function' ? toast.description() : toast.description) : null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-cancel": true,
        style: toast.cancelButtonStyle || cancelButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick == null ? void 0 : toast.cancel.onClick.call(toast.cancel, event);
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
    }, toast.cancel.label) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-action": true,
        style: toast.actionButtonStyle || actionButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick == null ? void 0 : toast.action.onClick.call(toast.action, event);
            if (event.defaultPrevented) return;
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
    }, toast.action.label) : null);
};
function getDocumentDirection() {
    if ("TURBOPACK compile-time truthy", 1) return 'ltr';
    //TURBOPACK unreachable
    ;
    const dirAttribute = undefined;
}
function assignOffset(defaultOffset, mobileOffset) {
    const styles = {};
    [
        defaultOffset,
        mobileOffset
    ].forEach((offset, index)=>{
        const isMobile = index === 1;
        const prefix = isMobile ? '--mobile-offset' : '--offset';
        const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
        function assignAll(offset) {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                styles[`${prefix}-${key}`] = typeof offset === 'number' ? `${offset}px` : offset;
            });
        }
        if (typeof offset === 'number' || typeof offset === 'string') {
            assignAll(offset);
        } else if (typeof offset === 'object') {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                if (offset[key] === undefined) {
                    styles[`${prefix}-${key}`] = defaultValue;
                } else {
                    styles[`${prefix}-${key}`] = typeof offset[key] === 'number' ? `${offset[key]}px` : offset[key];
                }
            });
        } else {
            assignAll(defaultValue);
        }
    });
    return styles;
}
function useSonner() {
    const [activeToasts, setActiveToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return ToastState.subscribe((toast)=>{
            if (toast.dismiss) {
                setTimeout(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                        setActiveToasts((toasts)=>toasts.filter((t)=>t.id !== toast.id));
                    });
                });
                return;
            }
            // Prevent batching, temp solution.
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                    setActiveToasts((toasts)=>{
                        const indexOfExistingToast = toasts.findIndex((t)=>t.id === toast.id);
                        // Update the toast if it already exists
                        if (indexOfExistingToast !== -1) {
                            return [
                                ...toasts.slice(0, indexOfExistingToast),
                                {
                                    ...toasts[indexOfExistingToast],
                                    ...toast
                                },
                                ...toasts.slice(indexOfExistingToast + 1)
                            ];
                        }
                        return [
                            toast,
                            ...toasts
                        ];
                    });
                });
            });
        });
    }, []);
    return {
        toasts: activeToasts
    };
}
const Toaster = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function Toaster(props, ref) {
    const { id, invert, position = 'bottom-right', hotkey = [
        'altKey',
        'KeyT'
    ], expand, closeButton, className, offset, mobileOffset, theme = 'light', richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = 'Notifications' } = props;
    const [toasts, setToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const filteredToasts = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (id) {
            return toasts.filter((toast)=>toast.toasterId === id);
        }
        return toasts.filter((toast)=>!toast.toasterId);
    }, [
        toasts,
        id
    ]);
    const possiblePositions = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return Array.from(new Set([
            position
        ].concat(filteredToasts.filter((toast)=>toast.position).map((toast)=>toast.position))));
    }, [
        filteredToasts,
        position
    ]);
    const [heights, setHeights] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [interacting, setInteracting] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [actualTheme, setActualTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(theme !== 'system' ? theme : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'light');
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFocusWithinRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const removeToast = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((toastToRemove)=>{
        setToasts((toasts)=>{
            var _toasts_find;
            if (!((_toasts_find = toasts.find((toast)=>toast.id === toastToRemove.id)) == null ? void 0 : _toasts_find.delete)) {
                ToastState.dismiss(toastToRemove.id);
            }
            return toasts.filter(({ id })=>id !== toastToRemove.id);
        });
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return ToastState.subscribe((toast)=>{
            if (toast.dismiss) {
                // Prevent batching of other state updates
                requestAnimationFrame(()=>{
                    setToasts((toasts)=>toasts.map((t)=>t.id === toast.id ? {
                                ...t,
                                delete: true
                            } : t));
                });
                return;
            }
            // Prevent batching, temp solution.
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                    setToasts((toasts)=>{
                        const indexOfExistingToast = toasts.findIndex((t)=>t.id === toast.id);
                        // Update the toast if it already exists
                        if (indexOfExistingToast !== -1) {
                            return [
                                ...toasts.slice(0, indexOfExistingToast),
                                {
                                    ...toasts[indexOfExistingToast],
                                    ...toast
                                },
                                ...toasts.slice(indexOfExistingToast + 1)
                            ];
                        }
                        return [
                            toast,
                            ...toasts
                        ];
                    });
                });
            });
        });
    }, [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (theme !== 'system') {
            setActualTheme(theme);
            return;
        }
        if (theme === 'system') {
            // check if current preference is dark
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // it's currently dark
                setActualTheme('dark');
            } else {
                // it's not dark
                setActualTheme('light');
            }
        }
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const darkMediaQuery = undefined;
    }, [
        theme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Ensure expanded is always false when no toasts are present / only one left
        if (toasts.length <= 1) {
            setExpanded(false);
        }
    }, [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handleKeyDown = (event)=>{
            var _listRef_current;
            const isHotkeyPressed = hotkey.every((key)=>event[key] || event.code === key);
            if (isHotkeyPressed) {
                var _listRef_current1;
                setExpanded(true);
                (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
            }
            if (event.code === 'Escape' && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
                setExpanded(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        hotkey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (listRef.current) {
            return ()=>{
                if (lastFocusedElementRef.current) {
                    lastFocusedElementRef.current.focus({
                        preventScroll: true
                    });
                    lastFocusedElementRef.current = null;
                    isFocusWithinRef.current = false;
                }
            };
        }
    }, [
        listRef.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: ref,
        "aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: true
    }, possiblePositions.map((position, index)=>{
        var _heights_;
        const [y, x] = position.split('-');
        if (!filteredToasts.length) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: position,
            dir: dir === 'auto' ? getDocumentDirection() : dir,
            tabIndex: -1,
            ref: listRef,
            className: className,
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: {
                '--front-toast-height': `${((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0}px`,
                '--width': `${TOAST_WIDTH}px`,
                '--gap': `${gap}px`,
                ...style,
                ...assignOffset(offset, mobileOffset)
            },
            onBlur: (event)=>{
                if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                    isFocusWithinRef.current = false;
                    if (lastFocusedElementRef.current) {
                        lastFocusedElementRef.current.focus({
                            preventScroll: true
                        });
                        lastFocusedElementRef.current = null;
                    }
                }
            },
            onFocus: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                if (!isFocusWithinRef.current) {
                    isFocusWithinRef.current = true;
                    lastFocusedElementRef.current = event.relatedTarget;
                }
            },
            onMouseEnter: ()=>setExpanded(true),
            onMouseMove: ()=>setExpanded(true),
            onMouseLeave: ()=>{
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                    setExpanded(false);
                }
            },
            onDragEnd: ()=>setExpanded(false),
            onPointerDown: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                setInteracting(true);
            },
            onPointerUp: ()=>setInteracting(false)
        }, filteredToasts.filter((toast)=>!toast.position && index === 0 || toast.position === position).map((toast, index)=>{
            var _toastOptions_duration, _toastOptions_closeButton;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Toast, {
                key: toast.id,
                icons: icons,
                index: index,
                toast: toast,
                defaultRichColors: richColors,
                duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
                className: toastOptions == null ? void 0 : toastOptions.className,
                descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
                invert: invert,
                visibleToasts: visibleToasts,
                closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
                interacting: interacting,
                position: position,
                style: toastOptions == null ? void 0 : toastOptions.style,
                unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
                classNames: toastOptions == null ? void 0 : toastOptions.classNames,
                cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
                actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
                closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
                removeToast: removeToast,
                toasts: filteredToasts.filter((t)=>t.position == toast.position),
                heights: heights.filter((h)=>h.position == toast.position),
                setHeights: setHeights,
                expandByDefault: expand,
                gap: gap,
                expanded: expanded,
                swipeDirections: props.swipeDirections
            });
        }));
    }));
});
;
}),
"[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}),
"[project]/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}),
"[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 5h16",
            key: "1tepv9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 19h16",
            key: "1djgab"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Moon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm"
        }
    ]
];
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("moon", __iconNode);
;
 //# sourceMappingURL=moon.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
];
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("sun", __iconNode);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRightIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Circle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle", __iconNode);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SquareArrowOutUpRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
            key: "y09zxi"
        }
    ],
    [
        "path",
        {
            d: "m21 3-9 9",
            key: "mpx6sq"
        }
    ],
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ]
];
const SquareArrowOutUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("square-arrow-out-up-right", __iconNode);
;
 //# sourceMappingURL=square-arrow-out-up-right.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRightFromSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRightFromSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$arrow$2d$out$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$arrow$2d$out$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
];

//# sourceMappingURL=9e883_7caded22._.js.map