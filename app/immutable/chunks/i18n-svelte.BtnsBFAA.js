import{s as k,w as g}from"./entry.DYQjmQpA.js";const L=""+new URL("../assets/avatar.BOw8CoKk.png",import.meta.url).href,_=[""+new URL("../assets/avatar.bd-kRokZ.avif",import.meta.url).href,""+new URL("../assets/avatar.Bk-3PGkM.webp",import.meta.url).href],P=""+new URL("../assets/avatar.DubC4iQ9.png",import.meta.url).href,R=""+new URL("../assets/avatar.DGRY93cy.png",import.meta.url).href,A=""+new URL("../assets/avatar.kYL_GOOf.png",import.meta.url).href,O=""+new URL("../assets/avatar.CSQvskKw.png",import.meta.url).href,j=""+new URL("../assets/qwer.BCtDIkpy.webp",import.meta.url).href,p={url:"https://kichunsung.github.io",title:"Gicheon Seong(Ayaan) Blog",subtitle:"🚀 Ayaan - lucky Boy",description:"🚀 My Life History",lang:"ko-KR",timeZone:"Asia/Seoul",since:2024,cover:j,author:{name:"GiCheon Seong(Ayaan)",status:"🚀",statusTip:`<a href="https://github.com/kichunsung" rel="external" style="color:#0F0" onMouseOver="this.style.color='#0FF'" onMouseOut="this.style.color='#0F0'" >My Life</a> is Awesome !`,avatar:L,avatar_128:_,avatar_48_png:P,avatar_96_png:R,avatar_192_png:A,avatar_512_png:O,website:"https://kichunsung.github.io/profile",github:"https://github.com/kichunsung",email:"skc8957@gmail.com",bio:"Just Do it ! <br/> With a smile"}},Y={me:["https://github.com/kichunsung"],custom:({dev:t})=>t?[]:['<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GTM-M73KZ297"><\/script>',`<script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-M73KZ297');
          <\/script>`]},J={toPublishedString:{locales:"ko-KR",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}},toUpdatedString:{locales:"ko-KR",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}}},Q={enable:!0,id:"giscus-comment",repo:"rural-escape-project/rural-escape-project.github.io",repoId:"R_kgDOLYrHmw",category:"general",categoryId:"1",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",loading:"lazy",lang:"ko-KR","data-strict":"0"},q=[{name:"profile",url:"/profile"},{name:"📄 blog",url:"https://kichunsung.github.io/",rel:"external"},{name:"TIL 🚀",url:"/TIL"}],tt={orientation:2,links:[{name:"profile",url:"/profile"},{name:"📄 blog",url:"https://kichunsung.github.io/",rel:"external"},{name:"TIL 🚀",url:"/TIL"}]},h=()=>{const t=k;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},et={subscribe(t){return h().page.subscribe(t)}},rt={subscribe(t){return h().navigating.subscribe(t)}};var f=()=>new Proxy(Object.assign(()=>"",{}),{get:(t,e)=>e==="length"?0:f()}),C=t=>Object.fromEntries(Object.entries(t).map(([e,r])=>e!=="i"&&r&&r!="0"&&[e,r]).filter(Boolean)),E=t=>Object.fromEntries(Object.keys(t).map(e=>{const r=t[e];return[e,Array.isArray(r)?r.map(s=>s==null?void 0:s.trim()):r===!!r?r:r==null?void 0:r.trim()]})),S=t=>{const[e="",...r]=t.split("|"),[s="",a]=e.split(":"),[n,o]=s.split("?");return{k:n,i:a,n:o==="",f:r}},G=t=>!!(t.o||t.r),I=(t,e)=>{let[r,s]=t.split(":");s||(s=r,r=e);const a=s.split("|"),[n,o,i,c,d,y]=a,u=a.filter(w=>w!==void 0).length;return u===1?{k:r,r:n}:u===2?{k:r,o:n,r:o}:u===3?{k:r,z:n,o,r:i}:{k:r,z:n,o,t:i,f:c,m:d,r:y}},T=/^\{.*\}$/,U=t=>Object.fromEntries(l(t).split(",").map(e=>e.split(":")).reduce((e,r)=>r.length===2?[...e,r.map(s=>s.trim())]:(e[e.length-1][1]+=","+r[0],e),[])),m=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,l=t=>t.substring(1,t.length-1),M=(t,e=!0,r="",s="")=>t.split(m).map(a=>{if(!a.match(m))return a;const n=l(a);if(n.startsWith("{"))return I(l(n),s);const o=S(n);return s=o.k||s,!r&&(r=s),o}).map(a=>{if(typeof a=="string")return a;a.k||(a.k=r||"0");const n=E(a);return e?C(n):n}),B=(t,e,r)=>e.reduce((s,a)=>{var n;return(a.match(T)?(o=>o[s]??o["*"])(U(a)):(n=t[a])==null?void 0:n.call(t,s))??s},r),z=(t,{z:e,o:r,t:s,f:a,m:n,r:o},i)=>{switch(e&&i==0?"zero":t.select(i)){case"zero":return e;case"one":return r;case"two":return s;case"few":return a??o;case"many":return n??o;default:return o}},Z=/\?\?/g,x=(t,e,r,s)=>t.map(a=>{if(typeof a=="string")return a;const{k:n="0",f:o=[]}=a,i=s[n];return G(a)?((typeof i=="boolean"?i?a.o:a.r:z(e,a,i))||"").replace(Z,i):(""+((o.length?B(r,o,i):i)??"")).trim()}).join(""),D=(t,e,r,s)=>{const a=s[0],n=a&&typeof a=="object"&&a.constructor===Object,o=s.length===1&&n?a:s;return x(t,e,r,o)},F=(t,e)=>t[e]||(t[e]=M(e)),N=(t,e)=>{const r={},s=new Intl.PluralRules(t);return(a,...n)=>D(F(r,a),s,e,n)};function H(t,e,r={}){return v(e,N(t,r))}var b=(t={},e)=>typeof t=="string"?e.bind(null,t):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),t),v=(t,e)=>new Proxy(b(t,e),{get:(r,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(r).map(a=>b(a,e))):v(r[s],e)}),V=(t,e={})=>{const r=g(),s=g(f()),a=K(r),n=new Proxy({},{get:(i,c)=>c==="subscribe"?s.subscribe:s[c]});return{locale:a,LL:n,setLocale:i=>{r.set(i),s.set(H(i,t[i],e[i]))}}};function K(t){return{subscribe:t.subscribe.bind(t)}}const at="en",st=["en","ja","zh","zh-Hans","zh-Hant"],W={},$={},{locale:nt,LL:ot,setLocale:it}=V(W,$);export{ot as L,q as a,$ as b,st as c,J as d,it as e,at as f,Q as g,Y as h,W as l,tt as m,rt as n,et as p,p as s};