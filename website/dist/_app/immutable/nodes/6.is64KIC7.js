import { s as x, n as h } from "../chunks/scheduler.Cs0xm5t1.js";
import {
  S as g,
  i as q,
  e as r,
  s as H,
  c as d,
  q as m,
  f as L,
  a as M,
  d as u,
  r as v,
  g as o,
  v as T,
} from "../chunks/index.DV3bnA_r.js";
function b(s) {
  return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function C(s, e, l) {
  const n = s.slice();
  return (n[1] = e[l]), n;
}
function D(s) {
  let e,
    l = '<div class="circle"></div> ';
  return {
    c() {
      (e = r("div")), (e.innerHTML = l), this.h();
    },
    l(n) {
      (e = d(n, "DIV", { class: !0, "data-svelte-h": !0 })),
        m(e) !== "svelte-1qqq8un" && (e.innerHTML = l),
        this.h();
    },
    h() {
      v(e, "class", "circle-container");
    },
    m(n, c) {
      o(n, e, c);
    },
    p: h,
    d(n) {
      n && u(e);
    },
  };
}
function I(s) {
  let e,
    l = '<span id="feature-text"></span> <span class="input-cursor"></span>',
    n,
    c,
    p = b(s[0]),
    i = [];
  for (let t = 0; t < p.length; t += 1) i[t] = D(C(s, p, t));
  return {
    c() {
      (e = r("div")), (e.innerHTML = l), (n = H()), (c = r("div"));
      for (let t = 0; t < i.length; t += 1) i[t].c();
      this.h();
    },
    l(t) {
      (e = d(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        m(e) !== "svelte-19f3feh" && (e.innerHTML = l),
        (n = L(t)),
        (c = d(t, "DIV", { class: !0 }));
      var f = M(c);
      for (let a = 0; a < i.length; a += 1) i[a].l(f);
      f.forEach(u), this.h();
    },
    h() {
      v(
        e,
        "class",
        "text-4xl text-white absolute z-10 w-full h-full flex items-center justify-center",
      ),
        v(c, "class", "container z-0");
    },
    m(t, f) {
      o(t, e, f), o(t, n, f), o(t, c, f);
      for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(c, null);
    },
    p: h,
    i: h,
    o: h,
    d(t) {
      t && (u(e), u(n), u(c)), T(i, t);
    },
  };
}
function V(s) {
  let e = [];
  for (let l = 1; l <= 100; l++) e.push(l);
  return [e];
}
class S extends g {
  constructor(e) {
    super(), q(this, e, V, I, x, {});
  }
}
export { S as component };