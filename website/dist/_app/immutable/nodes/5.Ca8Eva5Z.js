import { s as i, n as r } from "../chunks/scheduler.Cs0xm5t1.js";
import {
  S as o,
  i as c,
  k as u,
  l as h,
  m,
  n as d,
  o as p,
  p as f,
  e as g,
  c as b,
  q as _,
  r as x,
  g as $,
  d as v,
} from "../chunks/index.DV3bnA_r.js";
import { _ as k } from "../chunks/__layout.C7rT4I68.js";
function w(l) {
  let e,
    s =
      '<div class="m-10"><h1 class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight ">Passive</h1> <ul class="list-disc"><li><a class="underline" href="https://phoenixnap.com/kb/linux-dig-command-examples">dig</a></li> <li><a class="underline" href="https://www.nslookup.io/">nslookup</a></li> <li><a class="underline" href="https://www.google.com">site:???.com</a></li> <li><a class="underline" href="https://crt.sh/">crt.sh</a></li> <li><a class="underline" href="https://archive.org/web/">waybackmachine</a></li> <li><a class="underline" href="https://dnsdumpster.com/">DNS Dumpster</a></li></ul></div> <div class="m-10"><h1 class="mb-4 text-copy text-4xl font-extrabold leading-none tracking-tight ">Active</h1> <ul class="list-disc"><li><a class="underline" href="https://nmap.org/">nmap</a></li> <li><a class="underline" href="https://github.com/TheRook/subbrute">subrute</a></li> <li><a class="underline" href="https://github.com/aboul3la/Sublist3r">sublist3r</a></li> <li><a class="underline" href="https://github.com/darkoperator/dnsrecon">dnsrecon</a></li> <li><a class="underline" href="https://github.com/infosec-au/altdns">altdns</a></li> <li><a class="underline" href="https://github.com/danielmiessler/SecLists">SecLists</a></li></ul></div>';
  return {
    c() {
      (e = g("div")), (e.innerHTML = s), this.h();
    },
    l(t) {
      (e = b(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        _(e) !== "svelte-1ufnfcp" && (e.innerHTML = s),
        this.h();
    },
    h() {
      x(e, "class", "flex");
    },
    m(t, a) {
      $(t, e, a);
    },
    p: r,
    d(t) {
      t && v(e);
    },
  };
}
function y(l) {
  let e, s;
  return (
    (e = new k({ props: { $$slots: { default: [w] }, $$scope: { ctx: l } } })),
    {
      c() {
        u(e.$$.fragment);
      },
      l(t) {
        h(e.$$.fragment, t);
      },
      m(t, a) {
        m(e, t, a), (s = !0);
      },
      p(t, [a]) {
        const n = {};
        a & 1 && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
      },
      i(t) {
        s || (d(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        p(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        f(e, t);
      },
    }
  );
}
class T extends o {
  constructor(e) {
    super(), c(this, e, null, y, i, {});
  }
}
export { T as component };
