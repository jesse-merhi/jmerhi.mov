import{s as ne,e as b,a as V,c as x,b as w,f as p,g as M,o as f,i as N,h as _,p as J,r as ce,G as ue,q as B,x as he,l as ee,m as F,_ as G,$ as de,u as te,n as Q,y as Ee,t as Ve,d as Me,j as Se}from"../chunks/scheduler.D0OMobJx.js";import{S as re,i as le,j as fe,b as W,d as Y,m as R,t as P,h as se,a as T,f as U,c as ae,g as ie}from"../chunks/index.CxTYgwSx.js";import{e as oe}from"../chunks/each.D6YF6ztN.js";import{a as O,f as K,I as De,b as pe}from"../chunks/index.CH9dvxOw.js";import"../chunks/entry.IPnIwJrs.js";import{M as Ce,s as Ne}from"../chunks/mode-watcher.uyq74fTn.js";const q=async(a,t,s=80)=>{const e=a.split("");let n=0;for(;n<e.length;)typeof document!=null&&(t.innerHTML+=e[n],await H(s),n++)},H=a=>new Promise(t=>setTimeout(t,a)),me=(a,t)=>Math.floor(Math.random()*(t-a)+a),_e=async(a,t=80)=>{let s=0,e=a.innerHTML.length;for(;s<e;)typeof document!=null&&(a.innerHTML=a.innerHTML.slice(0,-1),await H(t),s++);await H(500)};function Pe(a){let t,s,e,n,l,r,c,v,i,u,m,o,g,h,d,D,L,S,j,$,I,y,k;return{c(){t=b("div"),s=b("div"),e=b("div"),n=b("span"),l=V(),r=b("span"),v=V(),i=b("div"),u=b("span"),m=V(),o=b("span"),h=V(),d=b("div"),D=b("span"),L=V(),S=b("span"),this.h()},l(E){t=x(E,"DIV",{class:!0,role:!0,tabindex:!0});var C=w(t);s=x(C,"DIV",{class:!0});var A=w(s);e=x(A,"DIV",{class:!0});var z=w(e);n=x(z,"SPAN",{}),w(n).forEach(p),l=M(z),r=x(z,"SPAN",{id:!0,class:!0}),w(r).forEach(p),z.forEach(p),v=M(A),i=x(A,"DIV",{class:!0});var X=w(i);u=x(X,"SPAN",{}),w(u).forEach(p),m=M(X),o=x(X,"SPAN",{id:!0,class:!0}),w(o).forEach(p),X.forEach(p),h=M(A),d=x(A,"DIV",{class:!0});var Z=w(d);D=x(Z,"SPAN",{}),w(D).forEach(p),L=M(Z),S=x(Z,"SPAN",{id:!0,class:!0}),w(S).forEach(p),Z.forEach(p),A.forEach(p),C.forEach(p),this.h()},h(){f(r,"id","cursor1"),f(r,"class",c=a[0][0]?"input-cursor h-[35px]":""),f(e,"class","h-[2rem] sm:h-[2.25rem] w-[80dvw]"),f(o,"id","cursor2"),f(o,"class",g=a[0][1]?"input-cursor h-[35px]":""),f(i,"class","h-[2rem] sm:h-[2.25rem] w-[80dvw]"),f(S,"id","cursor3"),f(S,"class",j=a[0][2]?"input-cursor h-[35px]":""),f(d,"class","h-[2rem] sm:h-[2.25rem] w-[80dvw]"),f(s,"class","flex items-center justify-center flex-col text-center"),f(t,"class","text-2xl sm:text-3xl text-white absolute z-10 w-full h-full flex items-center justify-center"),f(t,"role","link"),f(t,"tabindex","0")},m(E,C){N(E,t,C),_(t,s),_(s,e),_(e,n),a[6](n),_(e,l),_(e,r),_(s,v),_(s,i),_(i,u),a[7](u),_(i,m),_(i,o),_(s,h),_(s,d),_(d,D),a[8](D),_(d,L),_(d,S),I=!0,y||(k=[J(t,"click",a[4]),J(t,"keypress",a[4])],y=!0)},p(E,[C]){(!I||C&1&&c!==(c=E[0][0]?"input-cursor h-[35px]":""))&&f(r,"class",c),(!I||C&1&&g!==(g=E[0][1]?"input-cursor h-[35px]":""))&&f(o,"class",g),(!I||C&1&&j!==(j=E[0][2]?"input-cursor h-[35px]":""))&&f(S,"class",j)},i(E){I||($&&$.end(1),I=!0)},o(E){E&&($=fe(t,K,{easing:O})),I=!1},d(E){E&&p(t),a[6](null),a[7](null),a[8](null),E&&$&&$.end(),y=!1,ce(k)}}}function Te(a,t,s){let e=[!0,!1,!1],{next_part:n}=t,l,r,c;function v(){n()}ue(async()=>{await H(1500),await q("Hey I'm Jesse!",l),await H(1e3),s(0,e[0]=!1,e),s(0,e[1]=!0,e),await H(200),await q("Lets have a chat...",r),await H(1e3),s(0,e[1]=!1,e),s(0,e[2]=!0,e),await H(200),await q("Press anywhere to start.",c),await H(1e3),s(0,e[2]=!1,e)});function i(o){B[o?"unshift":"push"](()=>{l=o,s(1,l)})}function u(o){B[o?"unshift":"push"](()=>{r=o,s(2,r)})}function m(o){B[o?"unshift":"push"](()=>{c=o,s(3,c)})}return a.$$set=o=>{"next_part"in o&&s(5,n=o.next_part)},[e,l,r,c,v,n,i,u,m]}class Le extends re{constructor(t){super(),le(this,t,Te,Pe,ne,{next_part:5})}}function Ae(a){let t,s,e,n,l,r,c,v,i,u,m,o,g,h;return e=new De({props:{icon:"mdi:message-badge",width:"100%"}}),{c(){t=b("div"),s=b("div"),W(e.$$.fragment),n=V(),l=b("div"),r=b("span"),c=V(),v=b("span"),this.h()},l(d){t=x(d,"DIV",{class:!0});var D=w(t);s=x(D,"DIV",{class:!0});var L=w(s);Y(e.$$.fragment,L),L.forEach(p),n=M(D),l=x(D,"DIV",{class:!0});var S=w(l);r=x(S,"SPAN",{}),w(r).forEach(p),c=M(S),v=x(S,"SPAN",{id:!0,class:!0}),w(v).forEach(p),S.forEach(p),D.forEach(p),this.h()},h(){f(s,"class","cursor-pointer w-[100px] active:w-[90px] hover:w-[110px] transition-all text-neutral-100 hover:text-white"),f(v,"id","cursor4"),f(v,"class",i=a[2]?"input-cursor h-[35px]":""),f(l,"class","h-[2rem] sm:h-[2.25rem]"),f(t,"class","text-white absolute flex items-center justify-center flex-col")},m(d,D){N(d,t,D),_(t,s),R(e,s,null),_(t,n),_(t,l),_(l,r),a[3](r),_(l,c),_(l,v),o=!0,g||(h=[J(t,"click",function(){he(a[0])&&a[0].apply(this,arguments)}),J(t,"keypress",function(){he(a[0])&&a[0].apply(this,arguments)})],g=!0)},p(d,[D]){a=d,(!o||D&4&&i!==(i=a[2]?"input-cursor h-[35px]":""))&&f(v,"class",i)},i(d){o||(P(e.$$.fragment,d),d&&ee(()=>{o&&(m&&m.end(1),u=se(t,K,{easing:O,delay:2e3}),u.start())}),o=!0)},o(d){T(e.$$.fragment,d),u&&u.invalidate(),d&&(m=fe(t,K,{easing:O})),o=!1},d(d){d&&p(t),U(e),a[3](null),d&&m&&m.end(),g=!1,ce(h)}}}function He(a,t,s){let{change_message:e}=t,n,l=!1;ue(()=>{H(2500).then(()=>s(2,l=!0)).then(()=>H(1e3)).then(()=>q("Message Recieved.",n)).then(()=>s(2,l=!1))});function r(c){B[c?"unshift":"push"](()=>{n=c,s(1,n)})}return a.$$set=c=>{"change_message"in c&&s(0,e=c.change_message)},[e,n,l,r]}class je extends re{constructor(t){super(),le(this,t,He,Ae,ne,{change_message:0})}}function ve(a){let t,s,e,n='<span class="text-base font-semibold text-gray-900 dark:text-white svelte-138061h">You</span>',l,r,c,v,i,u;return{c(){t=b("div"),s=b("div"),e=b("div"),e.innerHTML=n,l=V(),r=b("div"),c=b("span"),v=V(),i=b("span"),this.h()},l(m){t=x(m,"DIV",{class:!0});var o=w(t);s=x(o,"DIV",{class:!0});var g=w(s);e=x(g,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1g38pbd"&&(e.innerHTML=n),l=M(g),r=x(g,"DIV",{class:!0});var h=w(r);c=x(h,"SPAN",{class:!0}),w(c).forEach(p),v=M(h),i=x(h,"SPAN",{id:!0,class:!0}),w(i).forEach(p),h.forEach(p),g.forEach(p),o.forEach(p),this.h()},h(){f(e,"class","flex items-center space-x-2 rtl:space-x-reverse svelte-138061h"),f(c,"class","text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white text-balance break-words svelte-138061h"),f(i,"id","nameCursor"),f(i,"class",u=G(a[1]?"input-cursor h-[25px] mt-[10px] ml-[2px]":"")+" svelte-138061h"),f(r,"class","min-h-[37.33px] svelte-138061h"),f(s,"class","flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 rounded-e-xl rounded-es-xla svelte-138061h"),f(t,"class","flex items-stretch gap-2.5 max-w-[350px] mb-4 w-[350px] transition-height svelte-138061h")},m(m,o){N(m,t,o),_(t,s),_(s,e),_(s,l),_(s,r),_(r,c),a[10](c),_(r,v),_(r,i)},p(m,o){o&2&&u!==(u=G(m[1]?"input-cursor h-[25px] mt-[10px] ml-[2px]":"")+" svelte-138061h")&&f(i,"class",u)},d(m){m&&p(t),a[10](null)}}}function ge(a){let t,s,e,n='<span class="text-base font-semibold text-gray-900 dark:text-white svelte-138061h">Jesse</span>',l,r,c,v,i,u;return{c(){t=b("div"),s=b("div"),e=b("div"),e.innerHTML=n,l=V(),r=b("div"),c=b("span"),v=V(),i=b("span"),this.h()},l(m){t=x(m,"DIV",{class:!0});var o=w(t);s=x(o,"DIV",{class:!0});var g=w(s);e=x(g,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1yoc9s4"&&(e.innerHTML=n),l=M(g),r=x(g,"DIV",{class:!0});var h=w(r);c=x(h,"SPAN",{class:!0}),w(c).forEach(p),v=M(h),i=x(h,"SPAN",{id:!0,class:!0}),w(i).forEach(p),h.forEach(p),g.forEach(p),o.forEach(p),this.h()},h(){f(e,"class","flex items-center space-x-2 rtl:space-x-reverse svelte-138061h"),f(c,"class","text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white text-balance break-words svelte-138061h"),f(i,"id","responseCursor"),f(i,"class",u=G(a[4]?"input-cursor h-[25px] mt-[10px] ml-[2px]":"")+" svelte-138061h"),f(r,"class","min-h-[37.33px] svelte-138061h"),f(s,"class","flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 rounded-e-xl rounded-es-xl svelte-138061h"),f(t,"class","flex items-stretch gap-2.5 max-w-[350px] mb-4 w-[350px] transition-height svelte-138061h")},m(m,o){N(m,t,o),_(t,s),_(s,e),_(s,l),_(s,r),_(r,c),a[11](c),_(r,v),_(r,i)},p(m,o){o&16&&u!==(u=G(m[4]?"input-cursor h-[25px] mt-[10px] ml-[2px]":"")+" svelte-138061h")&&f(i,"class",u)},d(m){m&&p(t),a[11](null)}}}function $e(a){let t,s,e,n='<div class="flex flex-col w-full leading-1.5 p-4 z-20 border-gray-200 bg-transparent rounded-e-xl rounded-es-xl svelte-138061h"><div class="flex items-center space-x-2 rtl:space-x-reverse svelte-138061h"><span class="text-base font-semibold text-secondary-foreground dark:text-white svelte-138061h">Jesse</span></div> <p class="text-base md:text-lg font-normal py-2.5 text-gray-900 dark:text-white svelte-138061h">Alright... lets start with something simple. What&#39;s your name?</p></div>',l,r,c,v,i,u,m,o,g,h,d,D="Send",L,S,j,$,I=a[5]&&ve(a),y=a[2]&&ge(a);return g=new De({props:{icon:"mdi:arrow-right",width:"100%"}}),{c(){t=b("div"),s=b("div"),e=b("div"),e.innerHTML=n,r=V(),I&&I.c(),c=V(),y&&y.c(),v=V(),i=b("div"),u=b("input"),m=V(),o=b("button"),W(g.$$.fragment),h=V(),d=b("span"),d.textContent=D,this.h()},l(k){t=x(k,"DIV",{class:!0});var E=w(t);s=x(E,"DIV",{class:!0});var C=w(s);e=x(C,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1u6j6za"&&(e.innerHTML=n),r=M(C),I&&I.l(C),c=M(C),y&&y.l(C),C.forEach(p),E.forEach(p),v=M(k),i=x(k,"DIV",{class:!0});var A=w(i);u=x(A,"INPUT",{id:!0,"aria-describedby":!0,class:!0,placeholder:!0,maxlength:!0}),m=M(A),o=x(A,"BUTTON",{type:!0,class:!0});var z=w(o);Y(g.$$.fragment,z),h=M(z),d=x(z,"SPAN",{class:!0,"data-svelte-h":!0}),F(d)!=="svelte-vpqh8h"&&(d.textContent=D),z.forEach(p),A.forEach(p),this.h()},h(){f(e,"class","flex items-stretch gap-2.5 max-w-[350px] mb-4 svelte-138061h"),f(s,"class","flex flex-col items-center justify-center scrollbar-shift svelte-138061h"),f(t,"class",G(`max-h-[70vh] w-[100vw]  ${a[8].length>0?"overflow-y-auto":""} `)+" svelte-138061h"),f(u,"id","their-name"),f(u,"aria-describedby","helper-text-explanation"),f(u,"class","w-[88%] z-20 text-base bg-gray-50 border md:text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 svelte-138061h"),f(u,"placeholder","Your name here..."),f(u,"maxlength","50"),f(d,"class","sr-only svelte-138061h"),f(o,"type","button"),f(o,"class","text-white w-[50px] h-[50px] md:w-[50px] md:h-[50px] bg-primary hover:bg-primary-dark active:bg-primary-dark focus:outline-none font-medium rounded-lg text-base p-2.5 text-center inline-flex items-center svelte-138061h"),f(i,"class","w-[350px] flex flex-row svelte-138061h")},m(k,E){N(k,t,E),_(t,s),_(s,e),_(s,r),I&&I.m(s,null),_(s,c),y&&y.m(s,null),a[12](t),N(k,v,E),N(k,i,E),_(i,u),de(u,a[3]),_(i,m),_(i,o),R(g,o,null),_(o,h),_(o,d),S=!0,j||($=[J(u,"input",a[13]),J(u,"mousedown",ze),J(o,"click",a[9])],j=!0)},p(k,[E]){k[5]?I?I.p(k,E):(I=ve(k),I.c(),I.m(s,c)):I&&(I.d(1),I=null),k[2]?y?y.p(k,E):(y=ge(k),y.c(),y.m(s,null)):y&&(y.d(1),y=null),E&8&&u.value!==k[3]&&de(u,k[3])},i(k){S||(k&&(l||ee(()=>{l=se(e,pe,{delay:1e3,duration:1e3,easing:O,y:"50vh"}),l.start()})),P(g.$$.fragment,k),k&&(L||ee(()=>{L=se(i,pe,{delay:3e3,duration:1e3,easing:O,y:"50vh"}),L.start()})),S=!0)},o(k){T(g.$$.fragment,k),S=!1},d(k){k&&(p(t),p(v),p(i)),I&&I.d(),y&&y.d(),a[12](null),U(g),j=!1,ce($)}}}const ze=a=>{};function Je(a,t,s){let e,n=!1,l=!1,r=[],c="",v="",i=!1,u=!1,m,o;async function g(){s(5,u=!0)}async function h(){await g(),D(),L()}async function d(){s(2,l=!0)}async function D(){s(1,n=!0),await _e(m,20),await q(v,m,200),s(1,n=!1)}async function L(){const y=await fetch("/api/gpt/name",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:v})});if(await d(),c="Sorry, I'm having trouble connecting to the server. Please try again later.",y.status==200){const k=await y.text();console.log(k),k==""?c=`Well hey there ${v}! Nice to meet you...`:c=k}s(4,i=!0),await _e(o,10),await q(c,o,50),s(4,i=!1)}function S(y){B[y?"unshift":"push"](()=>{m=y,s(6,m)})}function j(y){B[y?"unshift":"push"](()=>{o=y,s(7,o)})}function $(y){B[y?"unshift":"push"](()=>{e=y,s(0,e)})}function I(){v=this.value,s(3,v)}return[e,n,l,v,i,u,m,o,r,h,S,j,$,I]}class Be extends re{constructor(t){super(),le(this,t,Je,$e,ne,{})}}function be(a,t,s){const e=a.slice();return e[7]=t[s],e}function Oe(a,t,s){const e=a.slice();return e[10]=t[s],e}function qe(a){let t,s,e,n,l;const r=[Re,Ye],c=[];function v(i,u){return i[0]=="2"?0:1}return s=v(a),e=c[s]=r[s](a),{c(){t=b("div"),e.c(),this.h()},l(i){t=x(i,"DIV",{class:!0});var u=w(t);e.l(u),u.forEach(p),this.h()},h(){f(t,"class","text-2xl sm:text-3xl text-white absolute z-10 w-[100vw] h-full flex items-center justify-center flex-col")},m(i,u){N(i,t,u),c[s].m(t,null),l=!0},p(i,u){let m=s;s=v(i),s===m?c[s].p(i,u):(ie(),T(c[m],1,1,()=>{c[m]=null}),ae(),e=c[s],e?e.p(i,u):(e=c[s]=r[s](i),e.c()),P(e,1),e.m(t,null))},i(i){l||(P(e),i&&(n||ee(()=>{n=se(t,K,{easing:O,delay:2e3}),n.start()})),l=!0)},o(i){T(e),l=!1},d(i){i&&p(t),c[s].d()}}}function We(a){let t,s;return t=new Le({props:{next_part:a[3]}}),{c(){W(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,n){R(t,e,n),s=!0},p:Q,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){U(t,e)}}}function Ye(a){let t,s;return t=new Be({}),{c(){W(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,n){R(t,e,n),s=!0},p:Q,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){U(t,e)}}}function Re(a){let t,s;return t=new je({props:{change_message:a[3]}}),{c(){W(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,n){R(t,e,n),s=!0},p:Q,i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){T(t.$$.fragment,e),s=!1},d(e){U(t,e)}}}function xe(a){let t,s,e=oe(a[2]),n=[];for(let l=0;l<e.length;l+=1)n[l]=Ue(Oe(a,e,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=te()},l(l){for(let r=0;r<n.length;r+=1)n[r].l(l);t=te()},m(l,r){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,r);N(l,t,r),s=!0},p:Q,i(l){if(!s){for(let r=0;r<e.length;r+=1)P(n[r]);s=!0}},o(l){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)T(n[r]);s=!1},d(l){l&&p(t),Ee(n,l)}}}function Ue(a){let t,s='<div class="circle"></div> ',e,n;return{c(){t=b("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-colgc5"&&(t.innerHTML=s),this.h()},h(){f(t,"class","circle-container")},m(l,r){N(l,t,r),n=!0},p:Q,i(l){n||(e&&e.end(1),n=!0)},o(l){l&&(e=fe(t,K,{easing:O})),n=!1},d(l){l&&p(t),l&&e&&e.end()}}}function we(a){let t,s=oe(a[1]),e=[];for(let n=0;n<s.length;n+=1)e[n]=ye(be(a,s,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=te()},l(n){for(let l=0;l<e.length;l+=1)e[l].l(n);t=te()},m(n,l){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(n,l);N(n,t,l)},p(n,l){if(l&2){s=oe(n[1]);let r;for(r=0;r<s.length;r+=1){const c=be(n,s,r);e[r]?e[r].p(c,l):(e[r]=ye(c),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(n){n&&p(t),Ee(e,n)}}}function ye(a){let t,s,e=a[7].content+"",n,l;return{c(){t=b("div"),s=b("div"),n=Ve(e),l=V(),this.h()},l(r){t=x(r,"DIV",{class:!0});var c=w(t);s=x(c,"DIV",{class:!0});var v=w(s);n=Me(v,e),v.forEach(p),l=M(c),c.forEach(p),this.h()},h(){f(s,"class","lines select-none"),f(t,"class","lines-container")},m(r,c){N(r,t,c),_(t,s),_(s,n),_(t,l)},p(r,c){c&2&&e!==(e=r[7].content+"")&&Se(n,e)},d(r){r&&p(t)}}}function Fe(a){let t,s,e,n,l,r,c,v;t=new Ce({});const i=[We,qe],u=[];function m(h,d){return h[0]=="1"?0:1}e=m(a),n=u[e]=i[e](a);let o=a[0]=="1"&&xe(a),g=a[0]=="2"&&we(a);return{c(){W(t.$$.fragment),s=V(),n.c(),l=V(),r=b("div"),o&&o.c(),c=V(),g&&g.c(),this.h()},l(h){Y(t.$$.fragment,h),s=M(h),n.l(h),l=M(h),r=x(h,"DIV",{class:!0,id:!0});var d=w(r);o&&o.l(d),c=M(d),g&&g.l(d),d.forEach(p),this.h()},h(){f(r,"class","background-container z-0"),f(r,"id","background-container")},m(h,d){R(t,h,d),N(h,s,d),u[e].m(h,d),N(h,l,d),N(h,r,d),o&&o.m(r,null),_(r,c),g&&g.m(r,null),v=!0},p(h,[d]){let D=e;e=m(h),e===D?u[e].p(h,d):(ie(),T(u[D],1,1,()=>{u[D]=null}),ae(),n=u[e],n?n.p(h,d):(n=u[e]=i[e](h),n.c()),P(n,1),n.m(l.parentNode,l)),h[0]=="1"?o?(o.p(h,d),d&1&&P(o,1)):(o=xe(h),o.c(),P(o,1),o.m(r,c)):o&&(ie(),T(o,1,1,()=>{o=null}),ae()),h[0]=="2"?g?g.p(h,d):(g=we(h),g.c(),g.m(r,null)):g&&(g.d(1),g=null)},i(h){v||(P(t.$$.fragment,h),P(n),P(o),v=!0)},o(h){T(t.$$.fragment,h),T(n),T(o),v=!1},d(h){h&&(p(s),p(l),p(r)),U(t,h),u[e].d(h),o&&o.d(),g&&g.d()}}}const ke=10,Ge=20,Ke=40;function Ie(a){let t="";const s="01",e=s.length;for(let n=0;n<a;n++)t+=s.charAt(Math.floor(Math.random()*e));return t}function Qe(a,t,s){let e=[];for(let i=1;i<=100;i++)e.push(i);let n="1",l=[];ue(async()=>{if(Ne("dark"),n=="2"&&l.length==0)for(let i=0;i<ke;i++)r(i)});function r(i){const u=me(Ge,Ke),m=me(300,500),o=Ie(u);s(1,l=[...l,{id:i,styles:{},content:o}]),setTimeout(()=>c(i,u),m+i*100)}function c(i,u){setInterval(()=>{const m=Ie(u),o={...l[i],content:m};s(1,l=[...l.slice(0,i),o,...l.slice(i+1)])},1e3)}function v(){s(0,n=String(parseInt(n)+1))}return a.$$.update=()=>{if(a.$$.dirty&3&&n=="2"&&l.length==0)for(let i=0;i<ke;i++)r(i)},[n,l,e,v]}class rt extends re{constructor(t){super(),le(this,t,Qe,Fe,ne,{})}}export{rt as component};