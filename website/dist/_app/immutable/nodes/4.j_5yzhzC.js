import {
  s as p,
  c as d,
  a as $,
  n as f,
} from "../chunks/scheduler.Cs0xm5t1.js";
import {
  S as h,
  i as k,
  k as b,
  l as g,
  m as y,
  n as x,
  o as v,
  p as w,
  u,
  g as i,
  d as l,
  e as m,
  c as _,
  a as C,
  r as c,
  q,
} from "../chunks/index.DV3bnA_r.js";
import { _ as E } from "../chunks/__layout.C7rT4I68.js";
import { p as S } from "../chunks/stores.BvJBZWaX.js";
function A(s) {
  let e, a;
  return {
    c() {
      (e = m("iframe")), this.h();
    },
    l(t) {
      (e = _(t, "IFRAME", { title: !0, src: !0, class: !0 })),
        C(e).forEach(l),
        this.h();
    },
    h() {
      c(e, "title", "6443"),
        $(e.src, (a = "/6443/" + s[0] + "/index.html")) || c(e, "src", a),
        c(e, "class", "w-full h-full");
    },
    m(t, r) {
      i(t, e, r);
    },
    p: f,
    d(t) {
      t && l(e);
    },
  };
}
function F(s) {
  let e,
    a = "Week not found";
  return {
    c() {
      (e = m("h1")), (e.textContent = a);
    },
    l(t) {
      (e = _(t, "H1", { "data-svelte-h": !0 })),
        q(e) !== "svelte-ebb8gh" && (e.textContent = a);
    },
    m(t, r) {
      i(t, e, r);
    },
    p: f,
    d(t) {
      t && l(e);
    },
  };
}
function H(s) {
  let e;
  function a(n, o) {
    return n[0] == null ? F : A;
  }
  let r = a(s)(s);
  return {
    c() {
      r.c(), (e = u());
    },
    l(n) {
      r.l(n), (e = u());
    },
    m(n, o) {
      r.m(n, o), i(n, e, o);
    },
    p(n, o) {
      r.p(n, o);
    },
    d(n) {
      n && l(e), r.d(n);
    },
  };
}
function I(s) {
  let e, a;
  return (
    (e = new E({ props: { $$slots: { default: [H] }, $$scope: { ctx: s } } })),
    {
      c() {
        b(e.$$.fragment);
      },
      l(t) {
        g(e.$$.fragment, t);
      },
      m(t, r) {
        y(e, t, r), (a = !0);
      },
      p(t, [r]) {
        const n = {};
        r & 4 && (n.$$scope = { dirty: r, ctx: t }), e.$set(n);
      },
      i(t) {
        a || (x(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        w(e, t);
      },
    }
  );
}
function M(s, e, a) {
  let t;
  return d(s, S, (n) => a(1, (t = n))), [t.params.week];
}
class z extends h {
  constructor(e) {
    super(), k(this, e, M, I, p, {});
  }
}
export { z as component };
