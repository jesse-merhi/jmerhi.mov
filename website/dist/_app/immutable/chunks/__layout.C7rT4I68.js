import {
  s as g,
  b as $,
  u as b,
  g as y,
  d as x,
} from "./scheduler.Cs0xm5t1.js";
import {
  S as w,
  i as H,
  e as f,
  s as V,
  c as d,
  a as v,
  q,
  f as C,
  d as h,
  r as _,
  g as D,
  h as p,
  n as E,
  o as I,
} from "./index.DV3bnA_r.js";
function L(l) {
  let t,
    a,
    c =
      '<a class="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8" href="/">Home</a> <a class="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8" href="/6443/">6443</a>',
    i,
    r,
    o;
  const u = l[1].default,
    s = $(u, l, l[0], null);
  return {
    c() {
      (t = f("div")),
        (a = f("nav")),
        (a.innerHTML = c),
        (i = V()),
        (r = f("div")),
        s && s.c(),
        this.h();
    },
    l(e) {
      t = d(e, "DIV", { class: !0 });
      var n = v(t);
      (a = d(n, "NAV", { class: !0, "data-svelte-h": !0 })),
        q(a) !== "svelte-aezrv2" && (a.innerHTML = c),
        (i = C(n)),
        (r = d(n, "DIV", { class: !0 }));
      var m = v(r);
      s && s.l(m), m.forEach(h), n.forEach(h), this.h();
    },
    h() {
      _(
        a,
        "class",
        "bg-primary w-screen h-[7vh] flex items-center pl-10 pr-10",
      ),
        _(
          r,
          "class",
          "bg-background w-screen h-[93vh] flex justify-center items-center",
        ),
        _(t, "class", "w-screen h-screen");
    },
    m(e, n) {
      D(e, t, n), p(t, a), p(t, i), p(t, r), s && s.m(r, null), (o = !0);
    },
    p(e, [n]) {
      s &&
        s.p &&
        (!o || n & 1) &&
        b(s, u, e, e[0], o ? x(u, e[0], n, null) : y(e[0]), null);
    },
    i(e) {
      o || (E(s, e), (o = !0));
    },
    o(e) {
      I(s, e), (o = !1);
    },
    d(e) {
      e && h(t), s && s.d(e);
    },
  };
}
function M(l, t, a) {
  let { $$slots: c = {}, $$scope: i } = t;
  return (
    (l.$$set = (r) => {
      "$$scope" in r && a(0, (i = r.$$scope));
    }),
    [i, c]
  );
}
class j extends w {
  constructor(t) {
    super(), H(this, t, M, L, g, {});
  }
}
export { j as _ };
