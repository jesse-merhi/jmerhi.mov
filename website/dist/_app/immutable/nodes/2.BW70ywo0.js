import { s as r, n as l } from "../chunks/scheduler.Cs0xm5t1.js";
import {
  S as i,
  i as c,
  k as m,
  l as u,
  m as f,
  n as p,
  o as _,
  p as $,
  e as d,
  c as h,
  q as g,
  r as x,
  g as v,
  d as y,
} from "../chunks/index.DV3bnA_r.js";
import { _ as C } from "../chunks/__layout.C7rT4I68.js";
function q(a) {
  let t,
    n = "jmerhi.mov";
  return {
    c() {
      (t = d("div")), (t.textContent = n), this.h();
    },
    l(e) {
      (t = h(e, "DIV", { class: !0, "data-svelte-h": !0 })),
        g(t) !== "svelte-1uisofg" && (t.textContent = n),
        this.h();
    },
    h() {
      x(t, "class", "text-8xl");
    },
    m(e, s) {
      v(e, t, s);
    },
    p: l,
    d(e) {
      e && y(t);
    },
  };
}
function S(a) {
  let t, n;
  return (
    (t = new C({ props: { $$slots: { default: [q] }, $$scope: { ctx: a } } })),
    {
      c() {
        m(t.$$.fragment);
      },
      l(e) {
        u(t.$$.fragment, e);
      },
      m(e, s) {
        f(t, e, s), (n = !0);
      },
      p(e, [s]) {
        const o = {};
        s & 1 && (o.$$scope = { dirty: s, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (p(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        _(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        $(t, e);
      },
    }
  );
}
class D extends i {
  constructor(t) {
    super(), c(this, t, null, S, r, {});
  }
}
export { D as component };
