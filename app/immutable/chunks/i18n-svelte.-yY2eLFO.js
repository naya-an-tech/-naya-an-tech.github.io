import{s as k,w as g}from"./entry.DguHQ525.js";const L=""+new URL("../assets/avatar.BOw8CoKk.png",import.meta.url).href,_=[""+new URL("../assets/avatar.bd-kRokZ.avif",import.meta.url).href,""+new URL("../assets/avatar.Bk-3PGkM.webp",import.meta.url).href],P=""+new URL("../assets/avatar.DubC4iQ9.png",import.meta.url).href,A=""+new URL("../assets/avatar.DGRY93cy.png",import.meta.url).href,O=""+new URL("../assets/avatar.kYL_GOOf.png",import.meta.url).href,R=""+new URL("../assets/avatar.CSQvskKw.png",import.meta.url).href,C=""+new URL("../assets/qwer.BCtDIkpy.webp",import.meta.url).href,p={url:"https://naya-an-tech.github.io",title:"Ayaan(NaYa) Tech Blog",subtitle:"🚀 Ayaan - lucky Boy",description:"🚀 Developer Life History",lang:"ko-KR",timeZone:"Asia/Seoul",since:2024,cover:C,author:{name:"GiCheon Seong(Ayaan)",status:"🚀",statusTip:`<a href="https://github.com/kichunsung" rel="external" style="color:#0F0" onMouseOver="this.style.color='#0FF'" onMouseOut="this.style.color='#0F0'" >My Life</a> is Awesome !`,avatar:L,avatar_128:_,avatar_48_png:P,avatar_96_png:A,avatar_192_png:O,avatar_512_png:R,website:"https://kichunsung.github.io/profile",github:"https://github.com/kichunsung",email:"skc8957@gmail.com",bio:"Just Do it ! <br/> With a smile"}},$={me:["https://github.com/kichunsung"],custom:({dev:t})=>t?[]:['<script async src="https://www.googletagmanager.com/gtag/js?id=G-6FSLXMZGNS"><\/script>',`<script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());        
          gtag('config', 'G-6FSLXMZGNS');
        <\/script>`,`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8958195214941886"
        crossorigin="anonymous"><\/script>`,'<meta name="google-adsense-account" content="ca-pub-8958195214941886">','<meta name="naver-site-verification" content="cdaf3b09a5ddbf579bf04abe6a2ae3dc580d4497" />','<meta http-equiv="Access-Control-Allow-Origin" content="https://naya-an-tech.github.io">','<meta http-equiv="X-Frame-Options" content="DENY">','<meta http-equiv="X-Content-Type-Options" content="nosniff">','<meta http-equiv="X-XSS-Protection" content="1; mode=block">',`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-ancestors 'self' https://giscus.app; style-src 'self' 'unsafe-inline' https://giscus.app; script-src 'self' 'unsafe-inline' https://naya-an-tech.github.io https://giscus.app https://www.youtube.com https://www.googletagmanager.com;">`,'<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">','<meta http-equiv="Permissions-Policy" content="usb=()">']},Q={toPublishedString:{locales:"ko-KR",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}},toUpdatedString:{locales:"ko-KR",options:{year:"numeric",weekday:"short",month:"short",day:"numeric",timeZone:`${p.timeZone}`}}},J={enable:!0,id:"giscus-comment",repo:"naya-an-tech/naya-an-tech.github.io",repoId:"R_kgDOLy7jrQ",category:"Comments",categoryId:"DIC_kwDOLy7jrc4CgAw8",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",loading:"lazy",lang:"ko-KR","data-strict":"0"},K=[{name:"profile",url:"/profile"},{name:"📄 blog",url:"https://kichunsung.github.io/",rel:"external"},{name:"TIL 🚀",url:"/TIL"}],tt={orientation:2,links:[{name:"profile",url:"/profile"},{name:"📄 blog",url:"https://kichunsung.github.io/",rel:"external"},{name:"TIL 🚀",url:"/TIL"}]},b=()=>{const t=k;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},et={subscribe(t){return b().page.subscribe(t)}},at={subscribe(t){return b().navigating.subscribe(t)}};var f=()=>new Proxy(Object.assign(()=>"",{}),{get:(t,e)=>e==="length"?0:f()}),S=t=>Object.fromEntries(Object.entries(t).map(([e,a])=>e!=="i"&&a&&a!="0"&&[e,a]).filter(Boolean)),j=t=>Object.fromEntries(Object.keys(t).map(e=>{const a=t[e];return[e,Array.isArray(a)?a.map(s=>s==null?void 0:s.trim()):a===!!a?a:a==null?void 0:a.trim()]})),E=t=>{const[e="",...a]=t.split("|"),[s="",n]=e.split(":"),[r,o]=s.split("?");return{k:r,i:n,n:o==="",f:a}},G=t=>!!(t.o||t.r),I=(t,e)=>{let[a,s]=t.split(":");s||(s=a,a=e);const n=s.split("|"),[r,o,i,c,y,v]=n,u=n.filter(w=>w!==void 0).length;return u===1?{k:a,r}:u===2?{k:a,o:r,r:o}:u===3?{k:a,z:r,o,r:i}:{k:a,z:r,o,t:i,f:c,m:y,r:v}},T=/^\{.*\}$/,U=t=>Object.fromEntries(l(t).split(",").map(e=>e.split(":")).reduce((e,a)=>a.length===2?[...e,a.map(s=>s.trim())]:(e[e.length-1][1]+=","+a[0],e),[])),m=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,l=t=>t.substring(1,t.length-1),D=(t,e=!0,a="",s="")=>t.split(m).map(n=>{if(!n.match(m))return n;const r=l(n);if(r.startsWith("{"))return I(l(r),s);const o=E(r);return s=o.k||s,!a&&(a=s),o}).map(n=>{if(typeof n=="string")return n;n.k||(n.k=a||"0");const r=j(n);return e?S(r):r}),N=(t,e,a)=>e.reduce((s,n)=>{var r;return(n.match(T)?(o=>o[s]??o["*"])(U(n)):(r=t[n])==null?void 0:r.call(t,s))??s},a),B=(t,{z:e,o:a,t:s,f:n,m:r,r:o},i)=>{switch(e&&i==0?"zero":t.select(i)){case"zero":return e;case"one":return a;case"two":return s;case"few":return n??o;case"many":return r??o;default:return o}},F=/\?\?/g,X=(t,e,a,s)=>t.map(n=>{if(typeof n=="string")return n;const{k:r="0",f:o=[]}=n,i=s[r];return G(n)?((typeof i=="boolean"?i?n.o:n.r:B(e,n,i))||"").replace(F,i):(""+((o.length?N(a,o,i):i)??"")).trim()}).join(""),q=(t,e,a,s)=>{const n=s[0],r=n&&typeof n=="object"&&n.constructor===Object,o=s.length===1&&r?n:s;return X(t,e,a,o)},z=(t,e)=>t[e]||(t[e]=D(e)),Z=(t,e)=>{const a={},s=new Intl.PluralRules(t);return(n,...r)=>q(z(a,n),s,e,r)};function M(t,e,a={}){return d(e,Z(t,a))}var h=(t={},e)=>typeof t=="string"?e.bind(null,t):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),t),d=(t,e)=>new Proxy(h(t,e),{get:(a,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(a).map(n=>h(n,e))):d(a[s],e)}),x=(t,e={})=>{const a=g(),s=g(f()),n=V(a),r=new Proxy({},{get:(i,c)=>c==="subscribe"?s.subscribe:s[c]});return{locale:n,LL:r,setLocale:i=>{a.set(i),s.set(M(i,t[i],e[i]))}}};function V(t){return{subscribe:t.subscribe.bind(t)}}const nt="en",st=["en","ja","zh","zh-Hans","zh-Hant"],H={},W={},{locale:rt,LL:ot,setLocale:it}=x(H,W);export{ot as L,K as a,W as b,st as c,Q as d,it as e,nt as f,J as g,$ as h,H as l,tt as m,at as n,et as p,p as s};
