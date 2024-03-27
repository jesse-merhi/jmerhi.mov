import{S as Q,s as z,o as j,H as R,T as Y,J as Z,f,h as v,n as A,v as ee,e as k,c as y,m as p,i as S,a as C,b as I,g as V,z as te,k as ae,t as ne,d as se,l as re,U as oe,V as le,W as ie,X as ce,y as ue}from"../chunks/scheduler.le9opu6N.js";import{S as X,i as x,e as D,f as H,m as N,a as w,c as de,t as M,h as P,d as fe,b as me,g as he}from"../chunks/index.WZr-zFpT.js";import{e as O}from"../chunks/spread.CK8js_jb.js";import{u as F,d as G,t as _e,a as ge,s as B,l as pe,i as ve}from"../chunks/stores.OAvHVPZ9.js";import{I as J,b as be}from"../chunks/index.Ca52OC0N.js";import"../chunks/index.DfAT3v1M.js";import{p as ke}from"../chunks/stores.DyvCm2K4.js";import{B as ye}from"../chunks/button.DP4LDZ1H.js";const $e=!0;function we({url:i}){return{url:i.pathname}}const Je=Object.freeze(Object.defineProperty({__proto__:null,load:we,prerender:$e},Symbol.toStringTag,{value:"Module"}));function Me(){F.set(Q(G)==="dark"?"light":"dark")}function Se(i){F.set(i)}function Te(i,e){const o=document.documentElement,n=localStorage.getItem("mode-watcher-mode")||i,l=n==="light"||n==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(o.classList[l?"remove":"add"]("dark"),o.style.colorScheme=l?"light":"dark",e){const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",n==="light"?e.light:e.dark)}localStorage.setItem("mode-watcher-mode",n)}function L(i){let e,o;return{c(){e=k("meta"),this.h()},l(n){e=y(n,"META",{name:!0,content:!0}),this.h()},h(){p(e,"name","theme-color"),p(e,"content",o=i[0].dark)},m(n,l){S(n,e,l)},p(n,l){l&1&&o!==(o=n[0].dark)&&p(e,"content",o)},d(n){n&&f(e)}}}function Ee(i){let e,o,n='<script nonce="%sveltekit.nonce%">('+Te.toString()+")("+i[1]+");<\/script>",l,t=i[0]&&L(i);return{c(){t&&t.c(),e=j(),o=new R(!1),l=j(),this.h()},l(s){const r=Y("svelte-cpyj77",document.head);t&&t.l(r),e=j(),o=Z(r,!1),l=j(),r.forEach(f),this.h()},h(){o.a=l},m(s,r){t&&t.m(document.head,null),v(document.head,e),o.m(n,document.head),v(document.head,l)},p(s,[r]){s[0]?t?t.p(s,r):(t=L(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(s){s&&o.d(),t&&t.d(s),f(e),f(l)}}}function Ie(i,e,o){let{track:n=!0}=e,{defaultMode:l="system"}=e,{themeColors:t=void 0}=e,{disableTransitions:s=!0}=e;_e.set(t),ge.set(s),ee(()=>{const a=G.subscribe(()=>{});B.tracking(n),B.query();const u=localStorage.getItem(pe);return Se(ve(u)?u:l),()=>{a()}});const r=`"${l}"${t?`, ${JSON.stringify(t)}`:""}`;return i.$$set=a=>{"track"in a&&o(2,n=a.track),"defaultMode"in a&&o(3,l=a.defaultMode),"themeColors"in a&&o(0,t=a.themeColors),"disableTransitions"in a&&o(4,s=a.disableTransitions)},[t,r,n,l,s]}class Ce extends X{constructor(e){super(),x(this,e,Ie,Ee,z,{track:2,defaultMode:3,themeColors:0,disableTransitions:4})}}function K(i,e,o){const n=i.slice();return n[6]=e[o],n}function U(i){let e,o=i[6].content+"",n,l,t;return{c(){e=k("a"),n=ne(o),l=C(),this.h()},l(s){e=y(s,"A",{class:!0,href:!0});var r=I(e);n=se(r,o),l=V(r),r.forEach(f),this.h()},h(){p(e,"class",t=(i[1].url.pathname==i[6].path?"text-muted-muted":"text-muted-foreground hover:text-white")+" transition ease-in-out duration-100 h-full items-center flex pl-8 pr-8"),p(e,"href",i[6].path)},m(s,r){S(s,e,r),v(e,n),v(e,l)},p(s,r){r&2&&t!==(t=(s[1].url.pathname==s[6].path?"text-muted-muted":"text-muted-foreground hover:text-white")+" transition ease-in-out duration-100 h-full items-center flex pl-8 pr-8")&&p(e,"class",t)},d(s){s&&f(e)}}}function Ve(i){let e,o,n,l,t,s="Toggle theme",r;return e=new J({props:{icon:"ph:sun",class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}}),n=new J({props:{icon:"ph:moon",class:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}}),{c(){D(e.$$.fragment),o=C(),D(n.$$.fragment),l=C(),t=k("span"),t.textContent=s,this.h()},l(a){H(e.$$.fragment,a),o=V(a),H(n.$$.fragment,a),l=V(a),t=y(a,"SPAN",{class:!0,"data-svelte-h":!0}),re(t)!=="svelte-ntgole"&&(t.textContent=s),this.h()},h(){p(t,"class","sr-only")},m(a,u){N(e,a,u),S(a,o,u),N(n,a,u),S(a,l,u),S(a,t,u),r=!0},p:A,i(a){r||(M(e.$$.fragment,a),M(n.$$.fragment,a),r=!0)},o(a){w(e.$$.fragment,a),w(n.$$.fragment,a),r=!1},d(a){a&&(f(o),f(l),f(t)),P(e,a),P(n,a)}}}function W(i){let e,o,n,l;const t=i[4].default,s=oe(t,i,i[5],null);return{c(){e=k("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var a=I(e);s&&s.l(a),a.forEach(f),this.h()},h(){p(e,"class","bg-background w-screen h-[93vh] flex justify-center items-center")},m(r,a){S(r,e,a),s&&s.m(e,null),l=!0},p(r,a){s&&s.p&&(!l||a&32)&&le(s,t,r,r[5],l?ce(t,r[5],a,null):ie(r[5]),null)},i(r){l||(M(s,r),r&&ue(()=>{l&&(n&&n.end(1),o=fe(e,i[3],{duration:400,delay:0}),o.start())}),l=!0)},o(r){w(s,r),o&&o.invalidate(),r&&(n=me(e,i[3],{duration:400})),l=!1},d(r){r&&f(e),s&&s.d(r),r&&n&&n.end()}}}function je(i){let e,o,n,l,t,s,r,a,u,T=i[0].url,E,b=O(i[2]),d=[];for(let c=0;c<b.length;c+=1)d[c]=U(K(i,b,c));s=new Ce({}),a=new ye({props:{variant:"outline",size:"icon",$$slots:{default:[Ve]},$$scope:{ctx:i}}}),a.$on("click",Me);let _=W(i);return{c(){e=k("div"),o=k("nav"),n=k("div");for(let c=0;c<d.length;c+=1)d[c].c();l=C(),t=k("div"),D(s.$$.fragment),r=C(),D(a.$$.fragment),u=C(),_.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=I(e);o=y(h,"NAV",{class:!0});var g=I(o);n=y(g,"DIV",{class:!0});var m=I(n);for(let q=0;q<d.length;q+=1)d[q].l(m);m.forEach(f),l=V(g),t=y(g,"DIV",{});var $=I(t);H(s.$$.fragment,$),r=V($),H(a.$$.fragment,$),$.forEach(f),g.forEach(f),u=V(h),_.l(h),h.forEach(f),this.h()},h(){p(n,"class","flex flex-row"),p(o,"class","bg-secondary w-screen h-[5vh] flex items-center justify-between pl-10 pr-10"),p(e,"class","w-screen h-screen")},m(c,h){S(c,e,h),v(e,o),v(o,n);for(let g=0;g<d.length;g+=1)d[g]&&d[g].m(n,null);v(o,l),v(o,t),N(s,t,null),v(t,r),N(a,t,null),v(e,u),_.m(e,null),E=!0},p(c,[h]){if(h&6){b=O(c[2]);let m;for(m=0;m<b.length;m+=1){const $=K(c,b,m);d[m]?d[m].p($,h):(d[m]=U($),d[m].c(),d[m].m(n,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=b.length}const g={};h&32&&(g.$$scope={dirty:h,ctx:c}),a.$set(g),h&1&&z(T,T=c[0].url)?(he(),w(_,1,1,A),de(),_=W(c),_.c(),M(_,1),_.m(e,null)):_.p(c,h)},i(c){E||(M(s.$$.fragment,c),M(a.$$.fragment,c),M(_),E=!0)},o(c){w(s.$$.fragment,c),w(a.$$.fragment,c),w(_),E=!1},d(c){c&&f(e),te(d,c),P(s),P(a),_.d(c)}}}function Ae(i,e,o){let n;ae(i,ke,u=>o(1,n=u));let{$$slots:l={},$$scope:t}=e;n.url.pathname;const s=[{path:"/",content:"Home"},{path:"/6443",content:"6443"}];let{data:r}=e;function a(u,T){const E=be(u,T);return{duration:T.duration,delay:T.delay||0,css:b=>`
            ${E.css(b)}
            opacity: ${b};
        `}}return i.$$set=u=>{"data"in u&&o(0,r=u.data),"$$scope"in u&&o(5,t=u.$$scope)},[r,n,s,a,l,t]}class Le extends X{constructor(e){super(),x(this,e,Ae,je,z,{data:0})}}export{Le as component,Je as universal};