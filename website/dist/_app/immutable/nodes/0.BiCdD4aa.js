import {
  s as l,
  b as r,
  u as i,
  g as u,
  d as _,
} from "../chunks/scheduler.Cs0xm5t1.js";
import { S as f, i as c, n as p, o as m } from "../chunks/index.DV3bnA_r.js";
const d = !0,
  S = Object.freeze(
    Object.defineProperty(
      { __proto__: null, prerender: d },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function $(n) {
  let s;
  const a = n[1].default,
    t = r(a, n, n[0], null);
  return {
    c() {
      t && t.c();
    },
    l(e) {
      t && t.l(e);
    },
    m(e, o) {
      t && t.m(e, o), (s = !0);
    },
    p(e, [o]) {
      t &&
        t.p &&
        (!s || o & 1) &&
        i(t, a, e, e[0], s ? _(a, e[0], o, null) : u(e[0]), null);
    },
    i(e) {
      s || (p(t, e), (s = !0));
    },
    o(e) {
      m(t, e), (s = !1);
    },
    d(e) {
      t && t.d(e);
    },
  };
}
function g(n, s, a) {
  let { $$slots: t = {}, $$scope: e } = s;
  return (
    (n.$$set = (o) => {
      "$$scope" in o && a(0, (e = o.$$scope));
    }),
    [e, t]
  );
}
class v extends f {
  constructor(s) {
    super(), c(this, s, g, $, l, {});
  }
}
export { v as component, S as universal };
