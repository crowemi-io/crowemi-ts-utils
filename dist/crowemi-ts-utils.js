import { jsxs as Re, jsx as D } from "react/jsx-runtime";
import * as _ from "react";
import g, { useState as A, useEffect as F, useLayoutEffect as Ut, useRef as y, useContext as M, createContext as U, forwardRef as Bt, useCallback as z, Fragment as H, isValidElement as Vt, cloneElement as Wt, createElement as qt, useId as ve, useMemo as x, useSyncExternalStore as Gt, useReducer as Yt, createRef as zt } from "react";
var Pe = { exports: {} }, $ = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function Kt() {
  if (rt) return $;
  rt = 1;
  var e = g;
  function t(o) {
    var u = "https://react.dev/errors/" + o;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        u += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var n = {
    d: {
      f: r,
      r: function() {
        throw Error(t(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, i = Symbol.for("react.portal");
  function a(o, u, f) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: d == null ? null : "" + d,
      children: o,
      containerInfo: u,
      implementation: f
    };
  }
  var s = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(o, u) {
    if (o === "font") return "";
    if (typeof u == "string")
      return u === "use-credentials" ? u : "";
  }
  return $.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, $.createPortal = function(o, u) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11)
      throw Error(t(299));
    return a(o, u, null, f);
  }, $.flushSync = function(o) {
    var u = s.T, f = n.p;
    try {
      if (s.T = null, n.p = 2, o) return o();
    } finally {
      s.T = u, n.p = f, n.d.f();
    }
  }, $.preconnect = function(o, u) {
    typeof o == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, n.d.C(o, u));
  }, $.prefetchDNS = function(o) {
    typeof o == "string" && n.d.D(o);
  }, $.preinit = function(o, u) {
    if (typeof o == "string" && u && typeof u.as == "string") {
      var f = u.as, d = c(f, u.crossOrigin), l = typeof u.integrity == "string" ? u.integrity : void 0, m = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      f === "style" ? n.d.S(
        o,
        typeof u.precedence == "string" ? u.precedence : void 0,
        {
          crossOrigin: d,
          integrity: l,
          fetchPriority: m
        }
      ) : f === "script" && n.d.X(o, {
        crossOrigin: d,
        integrity: l,
        fetchPriority: m,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0
      });
    }
  }, $.preinitModule = function(o, u) {
    if (typeof o == "string")
      if (typeof u == "object" && u !== null) {
        if (u.as == null || u.as === "script") {
          var f = c(
            u.as,
            u.crossOrigin
          );
          n.d.M(o, {
            crossOrigin: f,
            integrity: typeof u.integrity == "string" ? u.integrity : void 0,
            nonce: typeof u.nonce == "string" ? u.nonce : void 0
          });
        }
      } else u == null && n.d.M(o);
  }, $.preload = function(o, u) {
    if (typeof o == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var f = u.as, d = c(f, u.crossOrigin);
      n.d.L(o, f, {
        crossOrigin: d,
        integrity: typeof u.integrity == "string" ? u.integrity : void 0,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0,
        type: typeof u.type == "string" ? u.type : void 0,
        fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0,
        referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0,
        imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0,
        imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0,
        media: typeof u.media == "string" ? u.media : void 0
      });
    }
  }, $.preloadModule = function(o, u) {
    if (typeof o == "string")
      if (u) {
        var f = c(u.as, u.crossOrigin);
        n.d.m(o, {
          as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0,
          crossOrigin: f,
          integrity: typeof u.integrity == "string" ? u.integrity : void 0
        });
      } else n.d.m(o);
  }, $.requestFormReset = function(o) {
    n.d.r(o);
  }, $.unstable_batchedUpdates = function(o, u) {
    return o(u);
  }, $.useFormState = function(o, u, f) {
    return s.H.useFormState(o, u, f);
  }, $.useFormStatus = function() {
    return s.H.useHostTransitionStatus();
  }, $.version = "19.0.0", $;
}
var R = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Xt() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(d) {
      return "" + d;
    }
    function r(d, l, m) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(p);
        var v = !1;
      } catch {
        v = !0;
      }
      return v && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object"
      ), t(p)), {
        $$typeof: u,
        key: p == null ? null : "" + p,
        children: d,
        containerInfo: l,
        implementation: m
      };
    }
    function n(d, l) {
      if (d === "font") return "";
      if (typeof l == "string")
        return l === "use-credentials" ? l : "";
    }
    function i(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : 'something with type "' + typeof d + '"';
    }
    function a(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : typeof d == "string" ? JSON.stringify(d) : typeof d == "number" ? "`" + d + "`" : 'something with type "' + typeof d + '"';
    }
    function s() {
      var d = f.H;
      return d === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var c = g, o = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, u = Symbol.for("react.portal"), f = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, R.createPortal = function(d, l) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(d, l, null, m);
    }, R.flushSync = function(d) {
      var l = f.T, m = o.p;
      try {
        if (f.T = null, o.p = 2, d)
          return d();
      } finally {
        f.T = l, o.p = m, o.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, R.preconnect = function(d, l) {
      typeof d == "string" && d ? l != null && typeof l != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(l)
      ) : l != null && typeof l.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(l.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(d)
      ), typeof d == "string" && (l ? (l = l.crossOrigin, l = typeof l == "string" ? l === "use-credentials" ? l : "" : void 0) : l = null, o.d.C(d, l));
    }, R.prefetchDNS = function(d) {
      if (typeof d != "string" || !d)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          i(d)
        );
      else if (1 < arguments.length) {
        var l = arguments[1];
        typeof l == "object" && l.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(l)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(l)
        );
      }
      typeof d == "string" && o.d.D(d);
    }, R.preinit = function(d, l) {
      if (typeof d == "string" && d ? l == null || typeof l != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(l)
      ) : l.as !== "style" && l.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(l.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(d)
      ), typeof d == "string" && l && typeof l.as == "string") {
        var m = l.as, p = n(m, l.crossOrigin), v = typeof l.integrity == "string" ? l.integrity : void 0, h = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
        m === "style" ? o.d.S(
          d,
          typeof l.precedence == "string" ? l.precedence : void 0,
          {
            crossOrigin: p,
            integrity: v,
            fetchPriority: h
          }
        ) : m === "script" && o.d.X(d, {
          crossOrigin: p,
          integrity: v,
          fetchPriority: h,
          nonce: typeof l.nonce == "string" ? l.nonce : void 0
        });
      }
    }, R.preinitModule = function(d, l) {
      var m = "";
      if (typeof d == "string" && d || (m += " The `href` argument encountered was " + i(d) + "."), l !== void 0 && typeof l != "object" ? m += " The `options` argument encountered was " + i(l) + "." : l && "as" in l && l.as !== "script" && (m += " The `as` option encountered was " + a(l.as) + "."), m)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          m
        );
      else
        switch (m = l && typeof l.as == "string" ? l.as : "script", m) {
          case "script":
            break;
          default:
            m = a(m), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              m,
              d
            );
        }
      typeof d == "string" && (typeof l == "object" && l !== null ? (l.as == null || l.as === "script") && (m = n(
        l.as,
        l.crossOrigin
      ), o.d.M(d, {
        crossOrigin: m,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0
      })) : l == null && o.d.M(d));
    }, R.preload = function(d, l) {
      var m = "";
      if (typeof d == "string" && d || (m += " The `href` argument encountered was " + i(d) + "."), l == null || typeof l != "object" ? m += " The `options` argument encountered was " + i(l) + "." : typeof l.as == "string" && l.as || (m += " The `as` option encountered was " + i(l.as) + "."), m && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        m
      ), typeof d == "string" && typeof l == "object" && l !== null && typeof l.as == "string") {
        m = l.as;
        var p = n(
          m,
          l.crossOrigin
        );
        o.d.L(d, m, {
          crossOrigin: p,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0,
          nonce: typeof l.nonce == "string" ? l.nonce : void 0,
          type: typeof l.type == "string" ? l.type : void 0,
          fetchPriority: typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
          referrerPolicy: typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
          imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
          imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
          media: typeof l.media == "string" ? l.media : void 0
        });
      }
    }, R.preloadModule = function(d, l) {
      var m = "";
      typeof d == "string" && d || (m += " The `href` argument encountered was " + i(d) + "."), l !== void 0 && typeof l != "object" ? m += " The `options` argument encountered was " + i(l) + "." : l && "as" in l && typeof l.as != "string" && (m += " The `as` option encountered was " + i(l.as) + "."), m && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        m
      ), typeof d == "string" && (l ? (m = n(
        l.as,
        l.crossOrigin
      ), o.d.m(d, {
        as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
        crossOrigin: m,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0
      })) : o.d.m(d));
    }, R.requestFormReset = function(d) {
      o.d.r(d);
    }, R.unstable_batchedUpdates = function(d, l) {
      return d(l);
    }, R.useFormState = function(d, l, m) {
      return s().useFormState(d, l, m);
    }, R.useFormStatus = function() {
      return s().useHostTransitionStatus();
    }, R.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), R;
}
var ot;
function Zt() {
  if (ot) return Pe.exports;
  ot = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), Pe.exports = Kt()) : Pe.exports = Xt(), Pe.exports;
}
var Qt = Zt(), Jt = Object.defineProperty, er = (e, t, r) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Be = (e, t, r) => (er(e, typeof t != "symbol" ? t + "" : t, r), r);
let tr = class {
  constructor() {
    Be(this, "current", this.detect()), Be(this, "handoffState", "pending"), Be(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, ne = new tr();
function Fe(e) {
  return ne.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function xe(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Q() {
  let e = [], t = { addEventListener(r, n, i, a) {
    return r.addEventListener(n, i, a), t.add(() => r.removeEventListener(n, i, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return xe(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = Q();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.includes(r) || e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0) for (let i of e.splice(n, 1)) i();
    };
  }, dispose() {
    for (let r of e.splice(0)) r();
  } };
  return t;
}
function Xe() {
  let [e] = A(Q);
  return F(() => () => e.dispose(), [e]), e;
}
let P = (e, t) => {
  ne.isServer ? F(e, t) : Ut(e, t);
};
function oe(e) {
  let t = y(e);
  return P(() => {
    t.current = e;
  }, [e]), t;
}
let b = function(e) {
  let t = oe(e);
  return g.useCallback((...r) => t.current(...r), [t]);
}, rr = U(void 0);
function nr() {
  return M(rr);
}
function We(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Z), n;
}
var De = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(De || {}), X = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(X || {});
function k() {
  let e = ir();
  return z((t) => or({ mergeRefs: e, ...t }), [e]);
}
function or({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: a = !0, name: s, mergeRefs: c }) {
  c = c ?? lr;
  let o = mt(t, e);
  if (a) return Ne(o, r, n, s, c);
  let u = i ?? 0;
  if (u & 2) {
    let { static: f = !1, ...d } = o;
    if (f) return Ne(d, r, n, s, c);
  }
  if (u & 1) {
    let { unmount: f = !0, ...d } = o;
    return Z(f ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Ne({ ...d, hidden: !0, style: { display: "none" } }, r, n, s, c);
    } });
  }
  return Ne(o, r, n, s, c);
}
function Ne(e, t = {}, r, n, i) {
  let { as: a = r, children: s, refName: c = "ref", ...o } = Ve(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [c]: e.ref } : {}, f = typeof s == "function" ? s(t) : s;
  "className" in o && o.className && typeof o.className == "function" && (o.className = o.className(t)), o["aria-labelledby"] && o["aria-labelledby"] === o.id && (o["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let l = !1, m = [];
    for (let [p, v] of Object.entries(t)) typeof v == "boolean" && (l = !0), v === !0 && m.push(p.replace(/([A-Z])/g, (h) => `-${h.toLowerCase()}`));
    if (l) {
      d["data-headlessui-state"] = m.join(" ");
      for (let p of m) d[`data-${p}`] = "";
    }
  }
  if (a === H && (Object.keys(ee(o)).length > 0 || Object.keys(ee(d)).length > 0)) if (!Vt(f) || Array.isArray(f) && f.length > 1) {
    if (Object.keys(ee(o)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ee(o)).concat(Object.keys(ee(d))).map((l) => `  - ${l}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((l) => `  - ${l}`).join(`
`)].join(`
`));
  } else {
    let l = f.props, m = l == null ? void 0 : l.className, p = typeof m == "function" ? (...w) => We(m(...w), o.className) : We(m, o.className), v = p ? { className: p } : {}, h = mt(f.props, ee(Ve(o, ["ref"])));
    for (let w in d) w in h && delete d[w];
    return Wt(f, Object.assign({}, h, d, u, { ref: i(ar(f), u.ref) }, v));
  }
  return qt(a, Object.assign({}, Ve(o, ["ref"]), a !== H && u, a !== H && d), f);
}
function ir() {
  let e = y([]), t = z((r) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(r) : n.current = r);
  }, []);
  return (...r) => {
    if (!r.every((n) => n == null)) return e.current = r, t;
  };
}
function lr(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function mt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, r = {};
  for (let n of e) for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"]) for (let n in r) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (r[n] = [(i) => {
    var a;
    return (a = i == null ? void 0 : i.preventDefault) == null ? void 0 : a.call(i);
  }]);
  for (let n in r) Object.assign(t, { [n](i, ...a) {
    let s = r[n];
    for (let c of s) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      c(i, ...a);
    }
  } });
  return t;
}
function L(e) {
  var t;
  return Object.assign(Bt(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ee(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Ve(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
function ar(e) {
  return g.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
let ur = "span";
var Le = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Le || {});
function sr(e, t) {
  var r;
  let { features: n = 1, ...i } = e, a = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return k()({ ourProps: a, theirProps: i, slot: {}, defaultTag: ur, name: "Hidden" });
}
let qe = L(sr), pt = Symbol();
function cr(e, t = !0) {
  return Object.assign(e, { [pt]: t });
}
function W(...e) {
  let t = y(e);
  F(() => {
    t.current = e;
  }, [e]);
  let r = b((n) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[pt])) ? void 0 : r;
}
let Ze = U(null);
Ze.displayName = "DescriptionContext";
function gt() {
  let e = M(Ze);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, gt), t;
  }
  return e;
}
function dr() {
  let [e, t] = A([]);
  return [e.length > 0 ? e.join(" ") : void 0, x(() => function(r) {
    let n = b((a) => (t((s) => [...s, a]), () => t((s) => {
      let c = s.slice(), o = c.indexOf(a);
      return o !== -1 && c.splice(o, 1), c;
    }))), i = x(() => ({ register: n, slot: r.slot, name: r.name, props: r.props, value: r.value }), [n, r.slot, r.name, r.props, r.value]);
    return g.createElement(Ze.Provider, { value: i }, r.children);
  }, [t])];
}
let fr = "p";
function mr(e, t) {
  let r = ve(), n = nr(), { id: i = `headlessui-description-${r}`, ...a } = e, s = gt(), c = W(t);
  P(() => s.register(i), [i, s.register]);
  let o = n || !1, u = x(() => ({ ...s.slot, disabled: o }), [s.slot, o]), f = { ref: c, ...s.props, id: i };
  return k()({ ourProps: f, theirProps: a, slot: u, defaultTag: fr, name: s.name || "Description" });
}
let pr = L(mr), gr = Object.assign(pr, {});
var ht = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ht || {});
let hr = U(() => {
});
function vr({ value: e, children: t }) {
  return g.createElement(hr.Provider, { value: e }, t);
}
let yr = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let r = super.get(t);
    return r === void 0 && (r = this.factory(t), this.set(t, r)), r;
  }
};
function vt(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...a) {
    let s = t[i].call(r, ...a);
    s && (r = s, n.forEach((c) => c()));
  } };
}
function yt(e) {
  return Gt(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Er = new yr(() => vt(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let r = this.slice();
  return r.splice(t, 1), r;
} }));
function ae(e, t) {
  let r = Er.get(t), n = ve(), i = yt(r);
  if (P(() => {
    if (e) return r.dispatch("ADD", n), () => r.dispatch("REMOVE", n);
  }, [r, e]), !e) return !1;
  let a = i.indexOf(n), s = i.length;
  return a === -1 && (a = s, s += 1), a === s - 1;
}
let Ge = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map();
function it(e) {
  var t;
  let r = (t = ge.get(e)) != null ? t : 0;
  return ge.set(e, r + 1), r !== 0 ? () => lt(e) : (Ge.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => lt(e));
}
function lt(e) {
  var t;
  let r = (t = ge.get(e)) != null ? t : 1;
  if (r === 1 ? ge.delete(e) : ge.set(e, r - 1), r !== 1) return;
  let n = Ge.get(e);
  n && (n["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n["aria-hidden"]), e.inert = n.inert, Ge.delete(e));
}
function br(e, { allowed: t, disallowed: r } = {}) {
  let n = ae(e, "inert-others");
  P(() => {
    var i, a;
    if (!n) return;
    let s = Q();
    for (let o of (i = r == null ? void 0 : r()) != null ? i : []) o && s.add(it(o));
    let c = (a = t == null ? void 0 : t()) != null ? a : [];
    for (let o of c) {
      if (!o) continue;
      let u = Fe(o);
      if (!u) continue;
      let f = o.parentElement;
      for (; f && f !== u.body; ) {
        for (let d of f.children) c.some((l) => d.contains(l)) || s.add(it(d));
        f = f.parentElement;
      }
    }
    return s.dispose;
  }, [n, t, r]);
}
function wr(e, t, r) {
  let n = oe((i) => {
    let a = i.getBoundingClientRect();
    a.x === 0 && a.y === 0 && a.width === 0 && a.height === 0 && r();
  });
  F(() => {
    if (!e) return;
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!i) return;
    let a = Q();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => n.current(i));
      s.observe(i), a.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => n.current(i));
      s.observe(i), a.add(() => s.disconnect());
    }
    return () => a.dispose();
  }, [t, n, e]);
}
let Ae = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Or = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var G = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(G || {}), Ye = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ye || {}), Tr = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Tr || {});
function Sr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ae)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function _r(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Or)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Et = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Et || {});
function $r(e, t = 0) {
  var r;
  return e === ((r = Fe(e)) == null ? void 0 : r.body) ? !1 : Z(t, { 0() {
    return e.matches(Ae);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Ae)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var Rr = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Rr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Y(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Pr = ["textarea", "input"].join(",");
function Nr(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Pr)) != null ? r : !1;
}
function Dr(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null) return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function he(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? r ? Dr(e) : e : t & 64 ? _r(e) : Sr(e);
  i.length > 0 && s.length > 1 && (s = s.filter((m) => !i.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === m : p === m))), n = n ?? a.activeElement;
  let c = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), o = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, d = s.length, l;
  do {
    if (f >= d || f + d <= 0) return 0;
    let m = o + f;
    if (t & 16) m = (m + d) % d;
    else {
      if (m < 0) return 3;
      if (m >= d) return 1;
    }
    l = s[m], l == null || l.focus(u), f += c;
  } while (l !== a.activeElement);
  return t & 6 && Nr(l) && l.select(), 2;
}
function bt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Lr() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ar() {
  return bt() || Lr();
}
function me(e, t, r, n) {
  let i = oe(r);
  F(() => {
    if (!e) return;
    function a(s) {
      i.current(s);
    }
    return document.addEventListener(t, a, n), () => document.removeEventListener(t, a, n);
  }, [e, t, n]);
}
function wt(e, t, r, n) {
  let i = oe(r);
  F(() => {
    if (!e) return;
    function a(s) {
      i.current(s);
    }
    return window.addEventListener(t, a, n), () => window.removeEventListener(t, a, n);
  }, [e, t, n]);
}
const at = 30;
function Fr(e, t, r) {
  let n = ae(e, "outside-click"), i = oe(r), a = z(function(o, u) {
    if (o.defaultPrevented) return;
    let f = u(o);
    if (f === null || !f.getRootNode().contains(f) || !f.isConnected) return;
    let d = function l(m) {
      return typeof m == "function" ? l(m()) : Array.isArray(m) || m instanceof Set ? m : [m];
    }(t);
    for (let l of d) if (l !== null && (l.contains(f) || o.composed && o.composedPath().includes(l))) return;
    return !$r(f, Et.Loose) && f.tabIndex !== -1 && o.preventDefault(), i.current(o, f);
  }, [i, t]), s = y(null);
  me(n, "pointerdown", (o) => {
    var u, f;
    s.current = ((f = (u = o.composedPath) == null ? void 0 : u.call(o)) == null ? void 0 : f[0]) || o.target;
  }, !0), me(n, "mousedown", (o) => {
    var u, f;
    s.current = ((f = (u = o.composedPath) == null ? void 0 : u.call(o)) == null ? void 0 : f[0]) || o.target;
  }, !0), me(n, "click", (o) => {
    Ar() || s.current && (a(o, () => s.current), s.current = null);
  }, !0);
  let c = y({ x: 0, y: 0 });
  me(n, "touchstart", (o) => {
    c.current.x = o.touches[0].clientX, c.current.y = o.touches[0].clientY;
  }, !0), me(n, "touchend", (o) => {
    let u = { x: o.changedTouches[0].clientX, y: o.changedTouches[0].clientY };
    if (!(Math.abs(u.x - c.current.x) >= at || Math.abs(u.y - c.current.y) >= at)) return a(o, () => o.target instanceof HTMLElement ? o.target : null);
  }, !0), wt(n, "blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function ye(...e) {
  return x(() => Fe(...e), [...e]);
}
function Ot(e, t, r, n) {
  let i = oe(r);
  F(() => {
    e = e ?? window;
    function a(s) {
      i.current(s);
    }
    return e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n);
  }, [e, t, n]);
}
function xr() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement, i = (r = t.defaultView) != null ? r : window;
    e = Math.max(0, i.innerWidth - n.clientWidth);
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = Math.max(0, n.clientWidth - n.offsetWidth), a = Math.max(0, e - i);
    r.style(n, "paddingRight", `${a}px`);
  } };
}
function Cr() {
  return bt() ? { before({ doc: e, d: t, meta: r }) {
    function n(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let c = Q();
        c.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => c.dispose()));
      }
      let a = (i = window.scrollY) != null ? i : window.pageYOffset, s = null;
      t.addEventListener(e, "click", (c) => {
        if (c.target instanceof HTMLElement) try {
          let o = c.target.closest("a");
          if (!o) return;
          let { hash: u } = new URL(o.href), f = e.querySelector(u);
          f && !n(f) && (s = f);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (c) => {
        if (c.target instanceof HTMLElement) if (n(c.target)) {
          let o = c.target;
          for (; o.parentElement && n(o.parentElement); ) o = o.parentElement;
          t.style(o, "overscrollBehavior", "contain");
        } else t.style(c.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (c) => {
        if (c.target instanceof HTMLElement) {
          if (c.target.tagName === "INPUT") return;
          if (n(c.target)) {
            let o = c.target;
            for (; o.parentElement && o.dataset.headlessuiPortal !== "" && !(o.scrollHeight > o.clientHeight || o.scrollWidth > o.clientWidth); ) o = o.parentElement;
            o.dataset.headlessuiPortal === "" && c.preventDefault();
          } else c.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var c;
        let o = (c = window.scrollY) != null ? c : window.pageYOffset;
        a !== o && window.scrollTo(0, a), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function Mr() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function kr(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let re = vt(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Q(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: kr(r) }, i = [Cr(), xr(), Mr()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(n)), i.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
re.subscribe(() => {
  let e = re.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && re.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && re.dispatch("TEARDOWN", r);
  }
});
function jr(e, t, r = () => ({ containers: [] })) {
  let n = yt(re), i = t ? n.get(t) : void 0, a = i ? i.count > 0 : !1;
  return P(() => {
    if (!(!t || !e)) return re.dispatch("PUSH", t, r), () => re.dispatch("POP", t, r);
  }, [e, t]), a;
}
function Ir(e, t, r = () => [document.body]) {
  let n = ae(e, "scroll-lock");
  jr(n, t, (i) => {
    var a;
    return { containers: [...(a = i.containers) != null ? a : [], r] };
  });
}
function Hr(e = 0) {
  let [t, r] = A(e), n = z((o) => r(o), [t]), i = z((o) => r((u) => u | o), [t]), a = z((o) => (t & o) === o, [t]), s = z((o) => r((u) => u & ~o), [r]), c = z((o) => r((u) => u ^ o), [r]);
  return { flags: t, setFlag: n, addFlag: i, hasFlag: a, removeFlag: s, toggleFlag: c };
}
var ut, st;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((ut = process == null ? void 0 : process.env) == null ? void 0 : ut.NODE_ENV) === "test" && typeof ((st = Element == null ? void 0 : Element.prototype) == null ? void 0 : st.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Ur = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Ur || {});
function Br(e) {
  let t = {};
  for (let r in e) e[r] === !0 && (t[`data-${r}`] = "");
  return t;
}
function Vr(e, t, r, n) {
  let [i, a] = A(r), { hasFlag: s, addFlag: c, removeFlag: o } = Hr(e && i ? 3 : 0), u = y(!1), f = y(!1), d = Xe();
  return P(() => {
    var l;
    if (e) {
      if (r && a(!0), !t) {
        r && c(3);
        return;
      }
      return (l = n == null ? void 0 : n.start) == null || l.call(n, r), Wr(t, { inFlight: u, prepare() {
        f.current ? f.current = !1 : f.current = u.current, u.current = !0, !f.current && (r ? (c(3), o(4)) : (c(4), o(2)));
      }, run() {
        f.current ? r ? (o(3), c(4)) : (o(4), c(3)) : r ? o(1) : c(1);
      }, done() {
        var m;
        f.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (u.current = !1, o(7), r || a(!1), (m = n == null ? void 0 : n.end) == null || m.call(n, r));
      } });
    }
  }, [e, r, t, d]), e ? [i, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [r, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Wr(e, { prepare: t, run: r, done: n, inFlight: i }) {
  let a = Q();
  return Gr(e, { prepare: t, inFlight: i }), a.nextFrame(() => {
    r(), a.requestAnimationFrame(() => {
      a.add(qr(e, n));
    });
  }), a.dispose;
}
function qr(e, t) {
  var r, n;
  let i = Q();
  if (!e) return i.dispose;
  let a = !1;
  i.add(() => {
    a = !0;
  });
  let s = (n = (r = e.getAnimations) == null ? void 0 : r.call(e).filter((c) => c instanceof CSSTransition)) != null ? n : [];
  return s.length === 0 ? (t(), i.dispose) : (Promise.allSettled(s.map((c) => c.finished)).then(() => {
    a || t();
  }), i.dispose);
}
function Gr(e, { inFlight: t, prepare: r }) {
  if (t != null && t.current) {
    r();
    return;
  }
  let n = e.style.transition;
  e.style.transition = "none", r(), e.offsetHeight, e.style.transition = n;
}
function Qe(e, t) {
  let r = y([]), n = b(e);
  F(() => {
    let i = [...r.current];
    for (let [a, s] of t.entries()) if (r.current[a] !== s) {
      let c = n(t, i);
      return r.current = t, c;
    }
  }, [n, ...t]);
}
let Ce = U(null);
Ce.displayName = "OpenClosedContext";
var I = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(I || {});
function Me() {
  return M(Ce);
}
function Yr({ value: e, children: t }) {
  return g.createElement(Ce.Provider, { value: e }, t);
}
function zr({ children: e }) {
  return g.createElement(Ce.Provider, { value: null }, e);
}
function Kr(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let K = [];
Kr(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || K[0] === t.target) return;
    let r = t.target;
    r = r.closest(Ae), K.unshift(r ?? t.target), K = K.filter((n) => n != null && n.isConnected), K.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Tt(e) {
  let t = b(e), r = y(!1);
  F(() => (r.current = !1, () => {
    r.current = !0, xe(() => {
      r.current && t();
    });
  }), [t]);
}
function Xr() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in _ ? ((t) => t.useSyncExternalStore)(_)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ee() {
  let e = Xr(), [t, r] = _.useState(ne.isHandoffComplete);
  return t && ne.isHandoffComplete === !1 && r(!1), _.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), _.useEffect(() => ne.handoff(), []), e ? !1 : t;
}
let St = U(!1);
function Zr() {
  return M(St);
}
function ct(e) {
  return g.createElement(St.Provider, { value: e.force }, e.children);
}
function Qr(e) {
  let t = Zr(), r = M($t), n = ye(e), [i, a] = A(() => {
    var s;
    if (!t && r !== null) return (s = r.current) != null ? s : null;
    if (ne.isServer) return null;
    let c = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (c) return c;
    if (n === null) return null;
    let o = n.createElement("div");
    return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
  });
  return F(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), F(() => {
    t || r !== null && a(r.current);
  }, [r, a, t]), i;
}
let _t = H, Jr = L(function(e, t) {
  let r = e, n = y(null), i = W(cr((d) => {
    n.current = d;
  }), t), a = ye(n), s = Qr(n), [c] = A(() => {
    var d;
    return ne.isServer ? null : (d = a == null ? void 0 : a.createElement("div")) != null ? d : null;
  }), o = M(ze), u = Ee();
  P(() => {
    !s || !c || s.contains(c) || (c.setAttribute("data-headlessui-portal", ""), s.appendChild(c));
  }, [s, c]), P(() => {
    if (c && o) return o.register(c);
  }, [o, c]), Tt(() => {
    var d;
    !s || !c || (c instanceof Node && s.contains(c) && s.removeChild(c), s.childNodes.length <= 0 && ((d = s.parentElement) == null || d.removeChild(s)));
  });
  let f = k();
  return u ? !s || !c ? null : Qt.createPortal(f({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: _t, name: "Portal" }), c) : null;
});
function en(e, t) {
  let r = W(t), { enabled: n = !0, ...i } = e, a = k();
  return n ? g.createElement(Jr, { ...i, ref: r }) : a({ ourProps: { ref: r }, theirProps: i, slot: {}, defaultTag: _t, name: "Portal" });
}
let tn = H, $t = U(null);
function rn(e, t) {
  let { target: r, ...n } = e, i = { ref: W(t) }, a = k();
  return g.createElement($t.Provider, { value: r }, a({ ourProps: i, theirProps: n, defaultTag: tn, name: "Popover.Group" }));
}
let ze = U(null);
function nn() {
  let e = M(ze), t = y([]), r = b((a) => (t.current.push(a), e && e.register(a), () => n(a))), n = b((a) => {
    let s = t.current.indexOf(a);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(a);
  }), i = x(() => ({ register: r, unregister: n, portals: t }), [r, n, t]);
  return [t, x(() => function({ children: a }) {
    return g.createElement(ze.Provider, { value: i }, a);
  }, [i])];
}
let on = L(en), Rt = L(rn), ln = Object.assign(on, { Group: Rt });
function an(e, t = typeof document < "u" ? document.defaultView : null, r) {
  let n = ae(e, "escape");
  Ot(t, "keydown", (i) => {
    n && (i.defaultPrevented || i.key === ht.Escape && r(i));
  });
}
function un() {
  var e;
  let [t] = A(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [r, n] = A((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return P(() => {
    if (!t) return;
    function i(a) {
      n(a.matches);
    }
    return t.addEventListener("change", i), () => t.removeEventListener("change", i);
  }, [t]), r;
}
function sn({ defaultContainers: e = [], portals: t, mainTreeNode: r } = {}) {
  let n = ye(r), i = b(() => {
    var a, s;
    let c = [];
    for (let o of e) o !== null && (o instanceof HTMLElement ? c.push(o) : "current" in o && o.current instanceof HTMLElement && c.push(o.current));
    if (t != null && t.current) for (let o of t.current) c.push(o);
    for (let o of (a = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? a : []) o !== document.body && o !== document.head && o instanceof HTMLElement && o.id !== "headlessui-portal-root" && (r && (o.contains(r) || o.contains((s = r == null ? void 0 : r.getRootNode()) == null ? void 0 : s.host)) || c.some((u) => o.contains(u)) || c.push(o));
    return c;
  });
  return { resolveContainers: i, contains: b((a) => i().some((s) => s.contains(a))) };
}
let Pt = U(null);
function dt({ children: e, node: t }) {
  let [r, n] = A(null), i = Nt(t ?? r);
  return g.createElement(Pt.Provider, { value: i }, e, i === null && g.createElement(qe, { features: Le.Hidden, ref: (a) => {
    var s, c;
    if (a) {
      for (let o of (c = (s = Fe(a)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? c : []) if (o !== document.body && o !== document.head && o instanceof HTMLElement && o != null && o.contains(a)) {
        n(o);
        break;
      }
    }
  } }));
}
function Nt(e = null) {
  var t;
  return (t = M(Pt)) != null ? t : e;
}
function Je() {
  let e = y(!1);
  return P(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var pe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pe || {});
function cn() {
  let e = y(0);
  return wt(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Dt(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let dn = "div";
var te = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(te || {});
function fn(e, t) {
  let r = y(null), n = W(r, t), { initialFocus: i, initialFocusFallback: a, containers: s, features: c = 15, ...o } = e;
  Ee() || (c = 0);
  let u = ye(r);
  hn(c, { ownerDocument: u });
  let f = vn(c, { ownerDocument: u, container: r, initialFocus: i, initialFocusFallback: a });
  yn(c, { ownerDocument: u, container: r, containers: s, previousActiveElement: f });
  let d = cn(), l = b((T) => {
    let E = r.current;
    E && ((O) => O())(() => {
      Z(d.current, { [pe.Forwards]: () => {
        he(E, G.First, { skipElements: [T.relatedTarget, a] });
      }, [pe.Backwards]: () => {
        he(E, G.Last, { skipElements: [T.relatedTarget, a] });
      } });
    });
  }), m = ae(!!(c & 2), "focus-trap#tab-lock"), p = Xe(), v = y(!1), h = { ref: n, onKeyDown(T) {
    T.key == "Tab" && (v.current = !0, p.requestAnimationFrame(() => {
      v.current = !1;
    }));
  }, onBlur(T) {
    if (!(c & 4)) return;
    let E = Dt(s);
    r.current instanceof HTMLElement && E.add(r.current);
    let O = T.relatedTarget;
    O instanceof HTMLElement && O.dataset.headlessuiFocusGuard !== "true" && (Lt(E, O) || (v.current ? he(r.current, Z(d.current, { [pe.Forwards]: () => G.Next, [pe.Backwards]: () => G.Previous }) | G.WrapAround, { relativeTo: T.target }) : T.target instanceof HTMLElement && Y(T.target)));
  } }, w = k();
  return g.createElement(g.Fragment, null, m && g.createElement(qe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Le.Focusable }), w({ ourProps: h, theirProps: o, defaultTag: dn, name: "FocusTrap" }), m && g.createElement(qe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Le.Focusable }));
}
let mn = L(fn), pn = Object.assign(mn, { features: te });
function gn(e = !0) {
  let t = y(K.slice());
  return Qe(([r], [n]) => {
    n === !0 && r === !1 && xe(() => {
      t.current.splice(0);
    }), n === !1 && r === !0 && (t.current = K.slice());
  }, [e, K, t]), b(() => {
    var r;
    return (r = t.current.find((n) => n != null && n.isConnected)) != null ? r : null;
  });
}
function hn(e, { ownerDocument: t }) {
  let r = !!(e & 8), n = gn(r);
  Qe(() => {
    r || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && Y(n());
  }, [r]), Tt(() => {
    r && Y(n());
  });
}
function vn(e, { ownerDocument: t, container: r, initialFocus: n, initialFocusFallback: i }) {
  let a = y(null), s = ae(!!(e & 1), "focus-trap#initial-focus"), c = Je();
  return Qe(() => {
    if (e === 0) return;
    if (!s) {
      i != null && i.current && Y(i.current);
      return;
    }
    let o = r.current;
    o && xe(() => {
      if (!c.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === u) {
          a.current = u;
          return;
        }
      } else if (o.contains(u)) {
        a.current = u;
        return;
      }
      if (n != null && n.current) Y(n.current);
      else {
        if (e & 16) {
          if (he(o, G.First | G.AutoFocus) !== Ye.Error) return;
        } else if (he(o, G.First) !== Ye.Error) return;
        if (i != null && i.current && (Y(i.current), (t == null ? void 0 : t.activeElement) === i.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a.current = t == null ? void 0 : t.activeElement;
    });
  }, [i, s, e]), a;
}
function yn(e, { ownerDocument: t, container: r, containers: n, previousActiveElement: i }) {
  let a = Je(), s = !!(e & 4);
  Ot(t == null ? void 0 : t.defaultView, "focus", (c) => {
    if (!s || !a.current) return;
    let o = Dt(n);
    r.current instanceof HTMLElement && o.add(r.current);
    let u = i.current;
    if (!u) return;
    let f = c.target;
    f && f instanceof HTMLElement ? Lt(o, f) ? (i.current = f, Y(f)) : (c.preventDefault(), c.stopPropagation(), Y(u)) : Y(i.current);
  }, !0);
}
function Lt(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
function At(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : xt) !== H || g.Children.count(e.children) === 1;
}
let ke = U(null);
ke.displayName = "TransitionContext";
var En = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(En || {});
function bn() {
  let e = M(ke);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function wn() {
  let e = M(je);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let je = U(null);
je.displayName = "NestingContext";
function Ie(e) {
  return "children" in e ? Ie(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Ft(e, t) {
  let r = oe(e), n = y([]), i = Je(), a = Xe(), s = b((m, p = X.Hidden) => {
    let v = n.current.findIndex(({ el: h }) => h === m);
    v !== -1 && (Z(p, { [X.Unmount]() {
      n.current.splice(v, 1);
    }, [X.Hidden]() {
      n.current[v].state = "hidden";
    } }), a.microTask(() => {
      var h;
      !Ie(n) && i.current && ((h = r.current) == null || h.call(r));
    }));
  }), c = b((m) => {
    let p = n.current.find(({ el: v }) => v === m);
    return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({ el: m, state: "visible" }), () => s(m, X.Unmount);
  }), o = y([]), u = y(Promise.resolve()), f = y({ enter: [], leave: [] }), d = b((m, p, v) => {
    o.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([h]) => h !== m)), t == null || t.chains.current[p].push([m, new Promise((h) => {
      o.current.push(h);
    })]), t == null || t.chains.current[p].push([m, new Promise((h) => {
      Promise.all(f.current[p].map(([w, T]) => T)).then(() => h());
    })]), p === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(p)) : v(p);
  }), l = b((m, p, v) => {
    Promise.all(f.current[p].splice(0).map(([h, w]) => w)).then(() => {
      var h;
      (h = o.current.shift()) == null || h();
    }).then(() => v(p));
  });
  return x(() => ({ children: n, register: c, unregister: s, onStart: d, onStop: l, wait: u, chains: f }), [c, s, n, d, l, f, u]);
}
let xt = H, Ct = De.RenderStrategy;
function On(e, t) {
  var r, n;
  let { transition: i = !0, beforeEnter: a, afterEnter: s, beforeLeave: c, afterLeave: o, enter: u, enterFrom: f, enterTo: d, entered: l, leave: m, leaveFrom: p, leaveTo: v, ...h } = e, [w, T] = A(null), E = y(null), O = At(e), B = W(...O ? [E, t, T] : t === null ? [] : [t]), q = (r = h.unmount) == null || r ? X.Unmount : X.Hidden, { show: j, appear: be, initial: we } = bn(), [C, J] = A(j ? "visible" : "hidden"), ue = wn(), { register: ie, unregister: le } = ue;
  P(() => ie(E), [ie, E]), P(() => {
    if (q === X.Hidden && E.current) {
      if (j && C !== "visible") {
        J("visible");
        return;
      }
      return Z(C, { hidden: () => le(E), visible: () => ie(E) });
    }
  }, [C, E, ie, le, j, q]);
  let se = Ee();
  P(() => {
    if (O && se && C === "visible" && E.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [E, C, se, O]);
  let Oe = we && !be, Te = be && j && we, ce = y(!1), V = Ft(() => {
    ce.current || (J("hidden"), le(E));
  }, ue), Se = b((Ue) => {
    ce.current = !0;
    let $e = Ue ? "enter" : "leave";
    V.onStart(E, $e, (fe) => {
      fe === "enter" ? a == null || a() : fe === "leave" && (c == null || c());
    });
  }), S = b((Ue) => {
    let $e = Ue ? "enter" : "leave";
    ce.current = !1, V.onStop(E, $e, (fe) => {
      fe === "enter" ? s == null || s() : fe === "leave" && (o == null || o());
    }), $e === "leave" && !Ie(V) && (J("hidden"), le(E));
  });
  F(() => {
    O && i || (Se(j), S(j));
  }, [j, O, i]);
  let _e = !(!i || !O || !se || Oe), [, N] = Vr(_e, w, j, { start: Se, end: S }), It = ee({ ref: B, className: ((n = We(h.className, Te && u, Te && f, N.enter && u, N.enter && N.closed && f, N.enter && !N.closed && d, N.leave && m, N.leave && !N.closed && p, N.leave && N.closed && v, !N.transition && j && l)) == null ? void 0 : n.trim()) || void 0, ...Br(N) }), de = 0;
  C === "visible" && (de |= I.Open), C === "hidden" && (de |= I.Closed), N.enter && (de |= I.Opening), N.leave && (de |= I.Closing);
  let Ht = k();
  return g.createElement(je.Provider, { value: V }, g.createElement(Yr, { value: de }, Ht({ ourProps: It, theirProps: h, defaultTag: xt, features: Ct, visible: C === "visible", name: "Transition.Child" })));
}
function Tn(e, t) {
  let { show: r, appear: n = !1, unmount: i = !0, ...a } = e, s = y(null), c = At(e), o = W(...c ? [s, t] : t === null ? [] : [t]);
  Ee();
  let u = Me();
  if (r === void 0 && u !== null && (r = (u & I.Open) === I.Open), r === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [f, d] = A(r ? "visible" : "hidden"), l = Ft(() => {
    r || d("hidden");
  }), [m, p] = A(!0), v = y([r]);
  P(() => {
    m !== !1 && v.current[v.current.length - 1] !== r && (v.current.push(r), p(!1));
  }, [v, r]);
  let h = x(() => ({ show: r, appear: n, initial: m }), [r, n, m]);
  P(() => {
    r ? d("visible") : !Ie(l) && s.current !== null && d("hidden");
  }, [r, l]);
  let w = { unmount: i }, T = b(() => {
    var B;
    m && p(!1), (B = e.beforeEnter) == null || B.call(e);
  }), E = b(() => {
    var B;
    m && p(!1), (B = e.beforeLeave) == null || B.call(e);
  }), O = k();
  return g.createElement(je.Provider, { value: l }, g.createElement(ke.Provider, { value: h }, O({ ourProps: { ...w, as: H, children: g.createElement(Mt, { ref: o, ...w, ...a, beforeEnter: T, beforeLeave: E }) }, theirProps: {}, defaultTag: H, features: Ct, visible: f === "visible", name: "Transition" })));
}
function Sn(e, t) {
  let r = M(ke) !== null, n = Me() !== null;
  return g.createElement(g.Fragment, null, !r && n ? g.createElement(Ke, { ref: t, ...e }) : g.createElement(Mt, { ref: t, ...e }));
}
let Ke = L(Tn), Mt = L(On), et = L(Sn), _n = Object.assign(Ke, { Child: et, Root: Ke });
var $n = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($n || {}), Rn = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Rn || {});
let Pn = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, tt = U(null);
tt.displayName = "DialogContext";
function He(e) {
  let t = M(tt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, He), r;
  }
  return t;
}
function Nn(e, t) {
  return Z(t.type, Pn, e, t);
}
let ft = L(function(e, t) {
  let r = ve(), { id: n = `headlessui-dialog-${r}`, open: i, onClose: a, initialFocus: s, role: c = "dialog", autoFocus: o = !0, __demoMode: u = !1, unmount: f = !1, ...d } = e, l = y(!1);
  c = function() {
    return c === "dialog" || c === "alertdialog" ? c : (l.current || (l.current = !0, console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = Me();
  i === void 0 && m !== null && (i = (m & I.Open) === I.Open);
  let p = y(null), v = W(p, t), h = ye(p), w = i ? 0 : 1, [T, E] = Yt(Nn, { titleId: null, descriptionId: null, panelRef: zt() }), O = b(() => a(!1)), B = b((S) => E({ type: 0, id: S })), q = Ee() ? w === 0 : !1, [j, be] = nn(), we = { get current() {
    var S;
    return (S = T.panelRef.current) != null ? S : p.current;
  } }, C = Nt(), { resolveContainers: J } = sn({ mainTreeNode: C, portals: j, defaultContainers: [we] }), ue = m !== null ? (m & I.Closing) === I.Closing : !1;
  br(u || ue ? !1 : q, { allowed: b(() => {
    var S, _e;
    return [(_e = (S = p.current) == null ? void 0 : S.closest("[data-headlessui-portal]")) != null ? _e : null];
  }), disallowed: b(() => {
    var S;
    return [(S = C == null ? void 0 : C.closest("body > *:not(#headlessui-portal-root)")) != null ? S : null];
  }) }), Fr(q, J, (S) => {
    S.preventDefault(), O();
  }), an(q, h == null ? void 0 : h.defaultView, (S) => {
    S.preventDefault(), S.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), O();
  }), Ir(u || ue ? !1 : q, h, J), wr(q, p, O);
  let [ie, le] = dr(), se = x(() => [{ dialogState: w, close: O, setTitleId: B, unmount: f }, T], [w, T, O, B, f]), Oe = x(() => ({ open: w === 0 }), [w]), Te = { ref: v, id: n, role: c, tabIndex: -1, "aria-modal": u ? void 0 : w === 0 ? !0 : void 0, "aria-labelledby": T.titleId, "aria-describedby": ie, unmount: f }, ce = !un(), V = te.None;
  q && !u && (V |= te.RestoreFocus, V |= te.TabLock, o && (V |= te.AutoFocus), ce && (V |= te.InitialFocus));
  let Se = k();
  return g.createElement(zr, null, g.createElement(ct, { force: !0 }, g.createElement(ln, null, g.createElement(tt.Provider, { value: se }, g.createElement(Rt, { target: p }, g.createElement(ct, { force: !1 }, g.createElement(le, { slot: Oe }, g.createElement(be, null, g.createElement(pn, { initialFocus: s, initialFocusFallback: p, containers: J, features: V }, g.createElement(vr, { value: O }, Se({ ourProps: Te, theirProps: d, slot: Oe, defaultTag: Dn, features: Ln, visible: w === 0, name: "Dialog" })))))))))));
}), Dn = "div", Ln = De.RenderStrategy | De.Static;
function An(e, t) {
  let { transition: r = !1, open: n, ...i } = e, a = Me(), s = e.hasOwnProperty("open") || a !== null, c = e.hasOwnProperty("onClose");
  if (!s && !c) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!c) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!a && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (n !== void 0 || r) && !i.static ? g.createElement(dt, null, g.createElement(_n, { show: n, transition: r, unmount: i.unmount }, g.createElement(ft, { ref: t, ...i }))) : g.createElement(dt, null, g.createElement(ft, { ref: t, open: n, ...i }));
}
let Fn = "div";
function xn(e, t) {
  let r = ve(), { id: n = `headlessui-dialog-panel-${r}`, transition: i = !1, ...a } = e, [{ dialogState: s, unmount: c }, o] = He("Dialog.Panel"), u = W(t, o.panelRef), f = x(() => ({ open: s === 0 }), [s]), d = b((h) => {
    h.stopPropagation();
  }), l = { ref: u, id: n, onClick: d }, m = i ? et : H, p = i ? { unmount: c } : {}, v = k();
  return g.createElement(m, { ...p }, v({ ourProps: l, theirProps: a, slot: f, defaultTag: Fn, name: "Dialog.Panel" }));
}
let Cn = "div";
function Mn(e, t) {
  let { transition: r = !1, ...n } = e, [{ dialogState: i, unmount: a }] = He("Dialog.Backdrop"), s = x(() => ({ open: i === 0 }), [i]), c = { ref: t, "aria-hidden": !0 }, o = r ? et : H, u = r ? { unmount: a } : {}, f = k();
  return g.createElement(o, { ...u }, f({ ourProps: c, theirProps: n, slot: s, defaultTag: Cn, name: "Dialog.Backdrop" }));
}
let kn = "h2";
function jn(e, t) {
  let r = ve(), { id: n = `headlessui-dialog-title-${r}`, ...i } = e, [{ dialogState: a, setTitleId: s }] = He("Dialog.Title"), c = W(t);
  F(() => (s(n), () => s(null)), [n, s]);
  let o = x(() => ({ open: a === 0 }), [a]), u = { ref: c, id: n };
  return k()({ ourProps: u, theirProps: i, slot: o, defaultTag: kn, name: "Dialog.Title" });
}
let In = L(An), kt = L(xn), Hn = L(Mn), jt = L(jn), Un = Object.assign(In, { Panel: kt, Title: jt, Description: gr });
function Bn({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Vn = /* @__PURE__ */ _.forwardRef(Bn);
function Wn({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));
}
const qn = /* @__PURE__ */ _.forwardRef(Wn);
function Gn({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ _.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ _.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ _.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Yn = /* @__PURE__ */ _.forwardRef(Gn);
function zn(e) {
  return /* @__PURE__ */ D("div", { className: "mt-5 sm:mt-6", children: /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      onClick: () => e(!1),
      className: "inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm",
      children: "okay"
    }
  ) });
}
function Kn(e) {
  switch (e) {
    case 0:
      return /* @__PURE__ */ D("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ D(Vn, { "aria-hidden": "true", className: "size-6 text-green-600" }) });
    case 1:
      return /* @__PURE__ */ D("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ D(
        qn,
        {
          "aria-hidden": "true",
          className: "size-6 text-red-600"
        }
      ) });
    case 2:
      return /* @__PURE__ */ D("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-100", children: /* @__PURE__ */ D(
        Yn,
        {
          "aria-hidden": "true",
          className: "size-6 text-yellow-600"
        }
      ) });
  }
}
function eo(e) {
  return /* @__PURE__ */ Re(Un, { open: e.open, onClose: e.setOpen, className: "relative z-10", children: [
    /* @__PURE__ */ D(
      Hn,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      }
    ),
    /* @__PURE__ */ D("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ D("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ Re(
      kt,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
        children: [
          /* @__PURE__ */ Re("div", { children: [
            Kn(e.type),
            /* @__PURE__ */ Re("div", { className: "mt-3 text-center sm:mt-5", children: [
              /* @__PURE__ */ D(
                jt,
                {
                  as: "h3",
                  className: "text-base font-semibold text-gray-900",
                  children: e.title
                }
              ),
              /* @__PURE__ */ D("div", { className: "mt-2", children: /* @__PURE__ */ D("p", { className: "text-sm text-gray-500", children: e.message }) })
            ] })
          ] }),
          e.button ? zn(e.setOpen) : null
        ]
      }
    ) }) })
  ] });
}
export {
  eo as Modal
};
