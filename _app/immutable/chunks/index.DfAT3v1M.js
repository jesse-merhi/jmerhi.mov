import"./index.WZr-zFpT.js";import{d as Te,r as J}from"./index.DGFOjnpZ.js";function Fe(e){return Object.keys(e).reduce((t,r)=>e[r]===void 0?t:t+`${r}:${e[r]};`,"")}Fe({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function fe(e){function t(r){return r(e),()=>{}}return{subscribe:t}}const ee=e=>new Proxy(e,{get(t,r,o){return Reflect.get(t,r,o)},ownKeys(t){return Reflect.ownKeys(t).filter(r=>r!=="action")}}),pe=e=>typeof e=="function";Oe("empty");function Oe(e,t){const{stores:r,action:o,returned:l}=t??{},n=(()=>{if(r&&l)return Te(r,a=>{const c=l(a);if(pe(c)){const m=(...u)=>ee({...c(...u),[`data-melt-${e}`]:"",action:o??N});return m.action=o??N,m}return ee({...c,[`data-melt-${e}`]:"",action:o??N})});{const a=l,c=a==null?void 0:a();if(pe(c)){const m=(...u)=>ee({...c(...u),[`data-melt-${e}`]:"",action:o??N});return m.action=o??N,fe(m)}return fe(ee({...c,[`data-melt-${e}`]:"",action:o??N}))}})(),i=o??(()=>{});return i.subscribe=n.subscribe,i}function N(){}function ve(e,t,r,o){const l=Array.isArray(t)?t:[t];return l.forEach(n=>e.addEventListener(n,r,o)),()=>{l.forEach(n=>e.removeEventListener(n,r,o))}}function Ve(e,...t){const r={};for(const o of Object.keys(e))t.includes(o)||(r[o]=e[o]);return r}const Ge={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};J(void 0,e=>{function t(o){e(o),e(void 0)}return ve(document,"pointerup",t,{passive:!1,capture:!0})});J(void 0,e=>{function t(o){o&&o.key===Ge.ESCAPE&&e(o),e(void 0)}return ve(document,"keydown",t,{passive:!1})});J(!1),J(!1),J(void 0);const $e={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...Ve($e,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});const de="-";function Ie(e){const t=Ne(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;function l(i){const a=i.split(de);return a[0]===""&&a.length!==1&&a.shift(),we(a,t)||Le(i)}function n(i,a){const c=r[i]||[];return a&&o[i]?[...c,...o[i]]:c}return{getClassGroupId:l,getConflictingClassGroupIds:n}}function we(e,t){var i;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),l=o?we(e.slice(1),o):void 0;if(l)return l;if(t.validators.length===0)return;const n=e.join(de);return(i=t.validators.find(({validator:a})=>a(n)))==null?void 0:i.classGroupId}const be=/^\[(.+)\]$/;function Le(e){if(be.test(e)){const t=be.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Ne(e){const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return _e(Object.entries(e.classGroups),r).forEach(([n,i])=>{se(i,o,n,t)}),o}function se(e,t,r,o){e.forEach(l=>{if(typeof l=="string"){const n=l===""?t:ge(t,l);n.classGroupId=r;return}if(typeof l=="function"){if(We(l)){se(l(o),t,r,o);return}t.validators.push({validator:l,classGroupId:r});return}Object.entries(l).forEach(([n,i])=>{se(i,ge(t,n),r,o)})})}function ge(e,t){let r=e;return t.split(de).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r}function We(e){return e.isThemeGetter}function _e(e,t){return t?e.map(([r,o])=>{const l=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[t+i,a])):n);return[r,l]}):e}function Ue(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;function l(n,i){r.set(n,i),t++,t>e&&(t=0,o=r,r=new Map)}return{get(n){let i=r.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return l(n,i),i},set(n,i){r.has(n)?r.set(n,i):l(n,i)}}}const xe="!";function De(e){const t=e.separator,r=t.length===1,o=t[0],l=t.length;return function(i){const a=[];let c=0,m=0,u;for(let x=0;x<i.length;x++){let A=i[x];if(c===0){if(A===o&&(r||i.slice(x,x+l)===t)){a.push(i.slice(m,x)),m=x+l;continue}if(A==="/"){u=x;continue}}A==="["?c++:A==="]"&&c--}const C=a.length===0?i:i.substring(m),z=C.startsWith(xe),R=z?C.substring(1):C,P=u&&u>m?u-m:void 0;return{modifiers:a,hasImportantModifier:z,baseClassName:R,maybePostfixModifierPosition:P}}}function Be(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t}function Ke(e){return{cache:Ue(e.cacheSize),splitModifiers:De(e),...Ie(e)}}const He=/\s+/;function qe(e,t){const{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:l}=t,n=new Set;return e.trim().split(He).map(i=>{const{modifiers:a,hasImportantModifier:c,baseClassName:m,maybePostfixModifierPosition:u}=r(i);let C=o(u?m.substring(0,u):m),z=!!u;if(!C){if(!u)return{isTailwindClass:!1,originalClassName:i};if(C=o(m),!C)return{isTailwindClass:!1,originalClassName:i};z=!1}const R=Be(a).join(":");return{isTailwindClass:!0,modifierId:c?R+xe:R,classGroupId:C,originalClassName:i,hasPostfixModifier:z}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:a,classGroupId:c,hasPostfixModifier:m}=i,u=a+c;return n.has(u)?!1:(n.add(u),l(c,m).forEach(C=>n.add(a+C)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function Je(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ke(t))&&(o&&(o+=" "),o+=r);return o}function ke(e){if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=ke(e[o]))&&(r&&(r+=" "),r+=t);return r}function le(e,...t){let r,o,l,n=i;function i(c){const m=t.reduce((u,C)=>C(u),e());return r=Ke(m),o=r.cache.get,l=r.cache.set,n=a,a(c)}function a(c){const m=o(c);if(m)return m;const u=qe(c,r);return l(c,u),u}return function(){return n(Je.apply(null,arguments))}}function k(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const Ae=/^\[(?:([a-z-]+):)?(.+)\]$/i,Xe=/^\d+\/\d+$/,Ze=new Set(["px","full","screen"]),Qe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ye=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,er=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function F(e){return $(e)||Ze.has(e)||Xe.test(e)}function V(e){return W(e,"length",dr)}function $(e){return!!e&&!Number.isNaN(Number(e))}function re(e){return W(e,"number",$)}function K(e){return!!e&&Number.isInteger(Number(e))}function or(e){return e.endsWith("%")&&$(e.slice(0,-1))}function d(e){return Ae.test(e)}function G(e){return Qe.test(e)}const nr=new Set(["length","size","percentage"]);function ir(e){return W(e,nr,Ce)}function sr(e){return W(e,"position",Ce)}const lr=new Set(["image","url"]);function ar(e){return W(e,lr,fr)}function cr(e){return W(e,"",ur)}function H(){return!0}function W(e,t,r){const o=Ae.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1}function dr(e){return Ye.test(e)&&!er.test(e)}function Ce(){return!1}function ur(e){return rr.test(e)}function fr(e){return tr.test(e)}function ae(){const e=k("colors"),t=k("spacing"),r=k("blur"),o=k("brightness"),l=k("borderColor"),n=k("borderRadius"),i=k("borderSpacing"),a=k("borderWidth"),c=k("contrast"),m=k("grayscale"),u=k("hueRotate"),C=k("invert"),z=k("gap"),R=k("gradientColorStops"),P=k("gradientColorStopPositions"),x=k("inset"),A=k("margin"),T=k("opacity"),h=k("padding"),Z=k("saturate"),I=k("scale"),Q=k("sepia"),Y=k("skew"),_=k("space"),U=k("translate"),L=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",d,t],s=()=>[d,t],p=()=>["",F,V],f=()=>["auto",$,d],g=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],b=()=>["solid","dashed","dotted","double","none"],y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],v=()=>["start","end","center","between","around","evenly","stretch"],w=()=>["","0",d],S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[$,re],E=()=>[$,d];return{cacheSize:500,separator:":",theme:{colors:[H],spacing:[F,V],blur:["none","",G,d],brightness:j(),borderColor:[e],borderRadius:["none","","full",G,d],borderSpacing:s(),borderWidth:p(),contrast:j(),grayscale:w(),hueRotate:E(),invert:w(),gap:s(),gradientColorStops:[e],gradientColorStopPositions:[or,V],inset:B(),margin:B(),opacity:j(),padding:s(),saturate:j(),scale:j(),sepia:w(),skew:E(),space:s(),translate:s()},classGroups:{aspect:[{aspect:["auto","square","video",d]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...g(),d]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",K,d]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",d]}],grow:[{grow:w()}],shrink:[{shrink:w()}],order:[{order:["first","last","none",K,d]}],"grid-cols":[{"grid-cols":[H]}],"col-start-end":[{col:["auto",{span:["full",K,d]},d]}],"col-start":[{"col-start":f()}],"col-end":[{"col-end":f()}],"grid-rows":[{"grid-rows":[H]}],"row-start-end":[{row:["auto",{span:[K,d]},d]}],"row-start":[{"row-start":f()}],"row-end":[{"row-end":f()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",d]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",d]}],gap:[{gap:[z]}],"gap-x":[{"gap-x":[z]}],"gap-y":[{"gap-y":[z]}],"justify-content":[{justify:["normal",...v()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...v(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...v(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[A]}],mx:[{mx:[A]}],my:[{my:[A]}],ms:[{ms:[A]}],me:[{me:[A]}],mt:[{mt:[A]}],mr:[{mr:[A]}],mb:[{mb:[A]}],ml:[{ml:[A]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",d,t]}],"min-w":[{"min-w":[d,t,"min","max","fit"]}],"max-w":[{"max-w":[d,t,"none","full","min","max","fit","prose",{screen:[G]},G]}],h:[{h:[d,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[d,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[d,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[d,t,"auto","min","max","fit"]}],"font-size":[{text:["base",G,V]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[H]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",d]}],"line-clamp":[{"line-clamp":["none",$,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",F,d]}],"list-image":[{"list-image":["none",d]}],"list-style-type":[{list:["none","disc","decimal",d]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...b(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",F,V]}],"underline-offset":[{"underline-offset":["auto",F,d]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:s()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",d]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",d]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...g(),sr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ir]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ar]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[R]}],"gradient-via":[{via:[R]}],"gradient-to":[{to:[R]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...b(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:b()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...b()]}],"outline-offset":[{"outline-offset":[F,d]}],"outline-w":[{outline:[F,V]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[F,V]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,cr]}],"shadow-color":[{shadow:[H]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":y()}],"bg-blend":[{"bg-blend":y()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",G,d]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[C]}],saturate:[{saturate:[Z]}],sepia:[{sepia:[Q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[C]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[Z]}],"backdrop-sepia":[{"backdrop-sepia":[Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",d]}],duration:[{duration:E()}],ease:[{ease:["linear","in","out","in-out",d]}],delay:[{delay:E()}],animate:[{animate:["none","spin","ping","pulse","bounce",d]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[I]}],"scale-x":[{"scale-x":[I]}],"scale-y":[{"scale-y":[I]}],rotate:[{rotate:[K,d]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",d]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",d]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":s()}],"scroll-mx":[{"scroll-mx":s()}],"scroll-my":[{"scroll-my":s()}],"scroll-ms":[{"scroll-ms":s()}],"scroll-me":[{"scroll-me":s()}],"scroll-mt":[{"scroll-mt":s()}],"scroll-mr":[{"scroll-mr":s()}],"scroll-mb":[{"scroll-mb":s()}],"scroll-ml":[{"scroll-ml":s()}],"scroll-p":[{"scroll-p":s()}],"scroll-px":[{"scroll-px":s()}],"scroll-py":[{"scroll-py":s()}],"scroll-ps":[{"scroll-ps":s()}],"scroll-pe":[{"scroll-pe":s()}],"scroll-pt":[{"scroll-pt":s()}],"scroll-pr":[{"scroll-pr":s()}],"scroll-pb":[{"scroll-pb":s()}],"scroll-pl":[{"scroll-pl":s()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",d]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[F,V,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function pr(e,{cacheSize:t,prefix:r,separator:o,extend:l={},override:n={}}){te(e,"cacheSize",t),te(e,"prefix",r),te(e,"separator",o);for(const i in n)br(e[i],n[i]);for(const i in l)gr(e[i],l[i]);return e}function te(e,t,r){r!==void 0&&(e[t]=r)}function br(e,t){if(t)for(const r in t)te(e,r,t[r])}function gr(e,t){if(t)for(const r in t){const o=t[r];o!==void 0&&(e[r]=(e[r]||[]).concat(o))}}function mr(e,...t){return typeof e=="function"?le(ae,e,...t):le(()=>pr(ae(),e),...t)}const yr=le(ae);var me=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,M=e=>!e||typeof e!="object"||Object.keys(e).length===0,hr=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Se(e,t){e.forEach(function(r){Array.isArray(r)?Se(r,t):t.push(r)})}function ze(e){let t=[];return Se(e,t),t}var Me=(...e)=>ze(e).filter(Boolean),Ee=(e,t)=>{let r={},o=Object.keys(e),l=Object.keys(t);for(let n of o)if(l.includes(n)){let i=e[n],a=t[n];typeof i=="object"&&typeof a=="object"?r[n]=Ee(i,a):Array.isArray(i)||Array.isArray(a)?r[n]=Me(a,i):r[n]=a+" "+i}else r[n]=e[n];for(let n of l)o.includes(n)||(r[n]=t[n]);return r},ye=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),vr={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Re=e=>e||void 0,X=(...e)=>Re(ze(e).filter(Boolean).join(" ")),ie=null,O={},ce=!1,q=(...e)=>t=>t.twMerge?((!ie||ce)&&(ce=!1,ie=M(O)?yr:mr({...O,extend:{theme:O.theme,classGroups:O.classGroups,conflictingClassGroupModifiers:O.conflictingClassGroupModifiers,conflictingClassGroups:O.conflictingClassGroups,...O.extend}})),Re(ie(X(e)))):X(e),he=(e,t)=>{for(let r in t)e.hasOwnProperty(r)?e[r]=X(e[r],t[r]):e[r]=t[r];return e},wr=(e,t)=>{let{extend:r=null,slots:o={},variants:l={},compoundVariants:n=[],compoundSlots:i=[],defaultVariants:a={}}=e,c={...vr,...t},m=r!=null&&r.base?X(r.base,e==null?void 0:e.base):e==null?void 0:e.base,u=r!=null&&r.variants&&!M(r.variants)?Ee(l,r.variants):l,C=r!=null&&r.defaultVariants&&!M(r.defaultVariants)?{...r.defaultVariants,...a}:a;!M(c.twMergeConfig)&&!hr(c.twMergeConfig,O)&&(ce=!0,O=c.twMergeConfig);let z=M(r==null?void 0:r.slots),R=M(o)?{}:{base:X(e==null?void 0:e.base,z&&(r==null?void 0:r.base)),...o},P=z?R:he({...r==null?void 0:r.slots},M(R)?{base:e==null?void 0:e.base}:R),x=M(r==null?void 0:r.compoundVariants)?n:Me(r==null?void 0:r.compoundVariants,n),A=h=>{if(M(u)&&M(o)&&z)return q(m,h==null?void 0:h.class,h==null?void 0:h.className)(c);if(x&&!Array.isArray(x))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);let Z=(s,p,f=[],g)=>{let b=f;if(typeof p=="string")b=b.concat(ye(p).split(" ").map(y=>`${s}:${y}`));else if(Array.isArray(p))b=b.concat(p.reduce((y,v)=>y.concat(`${s}:${v}`),[]));else if(typeof p=="object"&&typeof g=="string"){for(let y in p)if(p.hasOwnProperty(y)&&y===g){let v=p[y];if(v&&typeof v=="string"){let w=ye(v);b[g]?b[g]=b[g].concat(w.split(" ").map(S=>`${s}:${S}`)):b[g]=w.split(" ").map(S=>`${s}:${S}`)}else Array.isArray(v)&&v.length>0&&(b[g]=v.reduce((w,S)=>w.concat(`${s}:${S}`),[]))}}return b},I=(s,p=u,f=null,g=null)=>{var b;let y=p[s];if(!y||M(y))return null;let v=(b=g==null?void 0:g[s])!=null?b:h==null?void 0:h[s];if(v===null)return null;let w=me(v),S=Array.isArray(c.responsiveVariants)&&c.responsiveVariants.length>0||c.responsiveVariants===!0,j=C==null?void 0:C[s],E=[];if(typeof w=="object"&&S)for(let[ne,ue]of Object.entries(w)){let je=y[ue];if(ne==="initial"){j=ue;continue}Array.isArray(c.responsiveVariants)&&!c.responsiveVariants.includes(ne)||(E=Z(ne,je,E,f))}let Pe=w!=null&&typeof w!="object"?w:me(j),oe=y[Pe||"false"];return typeof E=="object"&&typeof f=="string"&&E[f]?he(E,oe):E.length>0?(E.push(oe),E):oe},Q=()=>u?Object.keys(u).map(s=>I(s,u)):null,Y=(s,p)=>{if(!u||typeof u!="object")return null;let f=new Array;for(let g in u){let b=I(g,u,s,p),y=s==="base"&&typeof b=="string"?b:b&&b[s];y&&(f[f.length]=y)}return f},_={};for(let s in h)h[s]!==void 0&&(_[s]=h[s]);let U=(s,p)=>{var f;let g=typeof(h==null?void 0:h[s])=="object"?{[s]:(f=h[s])==null?void 0:f.initial}:{};return{...C,..._,...g,...p}},L=(s=[],p)=>{let f=[];for(let{class:g,className:b,...y}of s){let v=!0;for(let[w,S]of Object.entries(y)){let j=U(w,p);if(Array.isArray(S)){if(!S.includes(j[w])){v=!1;break}}else if(j[w]!==S){v=!1;break}}v&&(g&&f.push(g),b&&f.push(b))}return f},D=s=>{let p=L(x,s);if(!Array.isArray(p))return p;let f={};for(let g of p)if(typeof g=="string"&&(f.base=q(f.base,g)(c)),typeof g=="object")for(let[b,y]of Object.entries(g))f[b]=q(f[b],y)(c);return f},B=s=>{if(i.length<1)return null;let p={};for(let{slots:f=[],class:g,className:b,...y}of i){if(!M(y)){let v=!0;for(let w of Object.keys(y)){let S=U(w,s)[w];if(S===void 0||(Array.isArray(y[w])?!y[w].includes(S):y[w]!==S)){v=!1;break}}if(!v)continue}for(let v of f)p[v]=p[v]||[],p[v].push([g,b])}return p};if(!M(o)||!z){let s={};if(typeof P=="object"&&!M(P))for(let p of Object.keys(P))s[p]=f=>{var g,b;return q(P[p],Y(p,f),((g=D(f))!=null?g:[])[p],((b=B(f))!=null?b:[])[p],f==null?void 0:f.class,f==null?void 0:f.className)(c)};return s}return q(m,Q(),L(x),h==null?void 0:h.class,h==null?void 0:h.className)(c)},T=()=>{if(!(!u||typeof u!="object"))return Object.keys(u)};return A.variantKeys=T(),A.extend=r,A.base=m,A.slots=P,A.variants=u,A.defaultVariants=C,A.compoundSlots=i,A.compoundVariants=x,A};const Ar=wr({base:"inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{Ar as b,yr as t};
