import { s as o, n as r } from "../chunks/scheduler.Cs0xm5t1.js";
import {
  S as i,
  i as c,
  k as m,
  l as u,
  m as d,
  n as f,
  o as p,
  p as h,
  e as _,
  c as g,
  q as $,
  r as x,
  g as v,
  d as y,
} from "../chunks/index.DV3bnA_r.js";
import { _ as k } from "../chunks/__layout.C7rT4I68.js";
function b(n) {
  let e,
    s =
      '<div class="m-10"><h1 class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight">Slides</h1> <ul class="list-disc"><li><a class="underline" href="/6443/week1">Week 1</a></li></ul></div> <div class="m-10"><h1 class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight">Resources</h1> <ul class="list-disc"><li><a class="underline" href="/6443/resources/recon">Recon Tools</a></li></ul></div>';
  return {
    c() {
      (e = _("div")), (e.innerHTML = s), this.h();
    },
    l(t) {
      (e = g(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        $(e) !== "svelte-z7mf92" && (e.innerHTML = s),
        this.h();
    },
    h() {
      x(e, "class", "flex");
    },
    m(t, a) {
      v(t, e, a);
    },
    p: r,
    d(t) {
      t && y(e);
    },
  };
}
function S(n) {
  let e, s;
  return (
    (e = new k({ props: { $$slots: { default: [b] }, $$scope: { ctx: n } } })),
    {
      c() {
        m(e.$$.fragment);
      },
      l(t) {
        u(e.$$.fragment, t);
      },
      m(t, a) {
        d(e, t, a), (s = !0);
      },
      p(t, [a]) {
        const l = {};
        a & 1 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
      },
      i(t) {
        s || (f(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        p(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        h(e, t);
      },
    }
  );
}
class C extends i {
  constructor(e) {
    super(), c(this, e, null, S, o, {});
  }
}
export { C as component };