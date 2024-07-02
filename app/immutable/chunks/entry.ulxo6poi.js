import{n as ue,s as ft,J as ut}from"./scheduler.DJEw_kJ_.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function de({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function mt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of gt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const _t="/__data.json",yt=".html__data.json";function wt(e){return e.endsWith(".html")?e.replace(/\.html$/,yt):e.replace(/\/$/,"")+_t}function vt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const qe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(ye(e)),qe(e,n));const M=new Map;function Et(e,n){const t=ye(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=bt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function kt(e,n,t){if(M.size>0){const r=ye(e,t),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(n,t)}function ye(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${vt(...a)}"]`}return r}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${It(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=St.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:n}}function Rt(e){return!/^\([^)]+\)$/.test(e)}function It(e){return e.slice(1).split("/").filter(Rt)}function Lt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Pt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=At(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Lt(f,g,r)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ge(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Te(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const j=[];function rn(e,n){return{subscribe:re(e,n).subscribe}}function re(e,n=ue){let t;const r=new Set;function a(s){if(ft(e,s)&&(e=s,t)){const c=!j.length;for(const l of r)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(e))}function i(s,c=ue){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||ue),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var Ve;const P=((Ve=globalThis.__sveltekit_vmlxum)==null?void 0:Ve.base)??"";var Fe;const xt=((Fe=globalThis.__sveltekit_vmlxum)==null?void 0:Fe.assets)??P,Tt="1719937247988",Me="sveltekit:snapshot",He="sveltekit:scroll",we="sveltekit:states",Be="sveltekit:pageurl",N="sveltekit:history",V="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function ve(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function be(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ue={...Y,"":Y.hover};function Ke(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ke(e)}}function ge(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===z&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function W(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Ke(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ue[r??"off"],preload_data:Ue[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ne(e){const n=re(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ut(){const{set:e,subscribe:n}=re(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${xt}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Tt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function ae(e,n){return e.origin!==z||!e.pathname.startsWith(n)}const Nt=-1,Ot=-2,jt=-3,$t=-4,Dt=-5,Ct=-6;function Vt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Nt)return;if(o===jt)return NaN;if(o===$t)return 1/0;if(o===Dt)return-1/0;if(o===Ct)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ot&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const Ft=new Set([...Je]);[...Ft];function qt(e){return e.filter(n=>n!=null)}class oe{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(n,t){this.status=n,this.location=t}}class Ee extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Gt="x-sveltekit-invalidated",Mt="x-sveltekit-trailing-slash";function X(e){return e instanceof oe||e instanceof Ee?e.status:500}function Ht(e){return e instanceof Ee?e.text:"Internal Error"}const O=Ge(He)??{},B=Ge(Me)??{},T={url:Ne({}),page:Ne({}),navigating:re(null),updated:Ut()};function ke(e){O[e]=be()}function Bt(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;B[t];)delete B[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}function Oe(){}let se,me,Z,x,_e,q;const We=[],Q=[];let L=null;const Xe=[],Kt=[];let D=[],y={branch:[],error:null,url:null},Se=!1,ee=!1,je=!0,K=!1,G=!1,Ze=!1,Ae=!1,ie,S,I,A,te;const H=new Set;async function an(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),q=e,se=Pt(e),x=document.documentElement,_e=n,me=e.nodes[0],Z=e.nodes[1],me(),Z(),S=(a=history.state)==null?void 0:a[N],I=(o=history.state)==null?void 0:o[V],S||(S=I=Date.now(),history.replaceState({...history.state,[N]:S,[V]:I},""));const r=O[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await en(_e,t):Zt(location.href,{replaceState:!0}),Qt()}function zt(){We.length=0,Ae=!1}function Qe(e){Q.some(n=>n==null?void 0:n.snapshot)&&(B[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function et(e){var n;(n=B[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function $e(){ke(S),Te(He,O),Qe(I),Te(Me,B)}async function tt(e,n,t,r){return J({type:"goto",url:ve(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ae=!0)}})}async function Jt(e){if(e.id!==(L==null?void 0:L.id)){const n={};H.add(n),L={id:e.id,token:n,promise:rt({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(L=null),t))}}return L.promise}async function pe(e){const n=se.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function nt(e,n,t){var o;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),A=e.props.page,ie=new q.root({target:n,props:{...e.props,stores:T,components:Q},hydrate:t}),et(I);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),ee=!0}async function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=dt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:qt(t).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const _=t[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:A.data}),c}async function Re({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const _={route:new Proxy(a,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(r,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:mt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const R=new URL(b,t);return s&&d(R.href),R.origin===t.origin&&(b=R.href.slice(t.origin.length)),ee?kt(b,R.href,m):Et(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function De(e,n,t,r,a,o){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(We.some(s=>s(new URL(i))))return!0;return!1}function Ie(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Yt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Ce({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:A,constructors:[]}}}async function rt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===e)return H.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,d=Yt(y.url,t);let _=!1;const f=l.map((p,v)=>{var U;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||De(_,g,h,d,(U=E.server)==null?void 0:U.uses,r));return k&&(_=!0),k});if(f.some(Boolean)){try{u=await it(t,f)}catch(p){const v=await C(p,{url:t,params:r,route:{id:e}});return H.has(o)?Ce({error:v,url:t,params:r,route:a}):ce({status:X(p),error:v,url:t,route:a})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const R=l.map(async(p,v)=>{var le;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!De(b,g,h,d,(le=E.universal)==null?void 0:le.uses,r))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Re({loader:p[1],url:t,params:r,route:a,parent:async()=>{var xe;const Pe={};for(let fe=0;fe<v;fe+=1)Object.assign(Pe,(xe=await R[fe])==null?void 0:xe.data);return Pe},server_data_node:Ie(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await R[p])}catch(v){if(v instanceof Ye)return{type:"redirect",location:v.location};if(H.has(o))return Ce({error:await C(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let E=X(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof oe)k=v.body;else{if(await T.updated.check())return await F(t);k=await C(v,{params:r,url:t,route:{id:a.id}})}const U=await Wt(p,w,i);return U?await ne({url:t,params:r,branch:w.slice(0,U.idx).concat(U.node),status:E,error:k,route:a}):await st(t,{id:a.id},k,E)}else w.push(void 0);return await ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function Wt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:r}){const a={};let o=null;if(q.server_loads[0]===0)try{const l=await it(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==z||t.pathname!==location.pathname||Se)&&await F(t)}const s=await Re({loader:me,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ie(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await ne({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Le(e,n){if(!e||ae(e,P))return;let t;try{t=q.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=at(t);for(const a of se){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:pt(o),url:e}}}function at(e){return ht(e.slice(P.length)||"/")}function ot({url:e,type:n,intent:t,delta:r}){let a=!1;const o=lt(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Xe.forEach(s=>s(i)),a?null:o}async function J({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Oe,block:u=Oe}){const h=Le(n,!1),g=ot({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=S,_=I;l(),K=!0,ee&&T.navigating.set(g.navigation),te=c;let f=h&&await rt(h);if(!f){if(ae(n,P))return await F(n);f=await st(n,{id:null},await C(new Ee(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ce({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return tt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await F(n);if(zt(),ke(d),Qe(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,p={[N]:S+=w,[V]:I+=w,[we]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Bt(S,I)}if(L=null,f.props.page.state=i,ee){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Kt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){D=D.filter(v=>!w.includes(v))};w.push(p),D.push(...w)}ie.$set(f.props),Ze=!0}else nt(f,_e,!1);const{activeElement:m}=document;await ut();const b=t?t.scroll:a?be():null;if(je){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!r&&!R&&tn(),je=!0,f.props.page&&(A=f.props.page),K=!1,e==="popstate"&&et(I),g.fulfil(void 0),D.forEach(w=>w(g.navigation)),T.navigating.set(null)}async function st(e,n,t,r){return e.origin===z&&e.pathname===location.pathname&&!Se?await ce({status:r,error:t,url:e,route:n}):await F(e)}function Xt(){let e;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pe(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=ze(o,x);if(!s)return;const{url:c,external:l,download:u}=ge(s,P);if(l||u)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Le(c,!1);g&&Jt(g)}else i<=h.preload_code&&pe(c.pathname)}function a(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=ge(o,P);if(s||c)continue;const l=W(o);l.reload||(l.preload_code===Y.viewport&&t.observe(o),l.preload_code===Y.eager&&pe(i.pathname))}}D.push(a),a()}function C(e,n){if(e instanceof oe)return e.body;const t=X(e),r=Ht(e);return q.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Zt(e,n={}){return e=ve(e),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):tt(e,n,0)}function on(e,n){const t={[N]:S,[V]:I,[Be]:A.url.href,[we]:n};history.replaceState(t,"",ve(e)),A={...A,state:n},ie.$set({page:A})}function Qt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if($e(),!K){const a=lt(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Xe.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&$e()}),(n=navigator.connection)!=null&&n.saveData||Xt(),x.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=ze(t.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=ge(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ot({url:a,type:"link"})?K=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===de(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(G=!0,ke(S),e(a),!c.replace_state)return;G=!1}t.preventDefault(),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ae(i,P))return;const s=t.target,c=W(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),J({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[N]){const a=t.state[N];if(te={},a===S)return;const o=O[a],i=t.state[we]??{},s=new URL(t.state[Be]??location.href),c=t.state[V],l=de(location)===de(y.url);if(c===I&&(Ze||l)){e(s),O[S]=be(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},ie.$set({page:A})),S=a;return}const h=a-S;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,I=c},block:()=>{history.go(-h)},nav_token:te})}else if(!G){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[N]:++S,[V]:I},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){y.url=t,T.page.set({...A,url:t}),T.page.notify()}}async function en(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Se=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Le(c,!1)||{});let l;try{const u=r.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=ct(f.uses)),Re({loader:q.nodes[d],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Ie(f)})}),h=await Promise.all(u),g=se.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=await ne({url:c,params:a,branch:h,status:n,error:t,form:s,route:g??null})}catch(u){if(u instanceof Ye){await F(new URL(u.location,location.href));return}l=await ce({status:X(u),error:await C(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),nt(l,e,!0)}async function it(e,n){var a;const t=new URL(e);t.pathname=wt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Mt,"1"),t.searchParams.append(Gt,n.map(o=>o?"1":"0").join(""));const r=await qe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new oe(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Vt(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=ct(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:R}=f,w=i.get(m);i.delete(m),R?w.reject(l(R)):w.fulfil(l(b))}}}})}function ct(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function tn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function lt(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{rn as a,an as b,on as r,T as s,re as w};
