import{D as b,s as y,u as c,H as S,E as T,F as w,f as d,h as u,n as f,G as v,e as E,c as C,o as m,i as I}from"./scheduler.CDiKNjU5.js";import{S as q,i as H}from"./index.Cp3Gq1St.js";import{u as M,d as k,t as A,a as N,s as g,l as P,i as j}from"./stores.hp_hegus.js";function V(){M.set(b(k)==="dark"?"light":"dark")}function D(n){M.set(n)}function F(n,e){const a=document.documentElement,o=localStorage.getItem("mode-watcher-mode")||n,s=o==="light"||o==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(a.classList[s?"remove":"add"]("dark"),a.style.colorScheme=s?"light":"dark",e){const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",o==="light"?e.light:e.dark)}localStorage.setItem("mode-watcher-mode",o)}function _(n){let e,a;return{c(){e=E("meta"),this.h()},l(o){e=C(o,"META",{name:!0,content:!0}),this.h()},h(){m(e,"name","theme-color"),m(e,"content",a=n[0].dark)},m(o,s){I(o,e,s)},p(o,s){s&1&&a!==(a=o[0].dark)&&m(e,"content",a)},d(o){o&&d(e)}}}function G(n){let e,a,o='<script nonce="%sveltekit.nonce%">('+F.toString()+")("+n[1]+");<\/script>",s,t=n[0]&&_(n);return{c(){t&&t.c(),e=c(),a=new S(!1),s=c(),this.h()},l(i){const l=T("svelte-cpyj77",document.head);t&&t.l(l),e=c(),a=w(l,!1),s=c(),l.forEach(d),this.h()},h(){a.a=s},m(i,l){t&&t.m(document.head,null),u(document.head,e),a.m(o,document.head),u(document.head,s)},p(i,[l]){i[0]?t?t.p(i,l):(t=_(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:f,o:f,d(i){i&&a.d(),t&&t.d(i),d(e),d(s)}}}function J(n,e,a){let{track:o=!0}=e,{defaultMode:s="system"}=e,{themeColors:t=void 0}=e,{disableTransitions:i=!0}=e;A.set(t),N.set(i),v(()=>{const r=k.subscribe(()=>{});g.tracking(o),g.query();const h=localStorage.getItem(P);return D(j(h)?h:s),()=>{r()}});const l=`"${s}"${t?`, ${JSON.stringify(t)}`:""}`;return n.$$set=r=>{"track"in r&&a(2,o=r.track),"defaultMode"in r&&a(3,s=r.defaultMode),"themeColors"in r&&a(0,t=r.themeColors),"disableTransitions"in r&&a(4,i=r.disableTransitions)},[t,l,o,s,i]}class z extends q{constructor(e){super(),H(this,e,J,G,y,{track:2,defaultMode:3,themeColors:0,disableTransitions:4})}}export{z as M,D as s,V as t};