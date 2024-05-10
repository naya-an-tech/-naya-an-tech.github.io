import{s as le,u as je,e as u,f as m,c as f,b as w,h as _,d as C,a as g,i as B,k as i,v as se,w as qe,x as Ae,y as De,z as Se,n as ke,A as ye,p as N,B as Ge,g as b,H as Ie,C as Oe}from"../chunks/scheduler.DbCYPGan.js";import{S as Te,i as $e,t as H,g as He,b as M,e as xe,f as Le,h as Pe,c as Me,a as we,m as Ee,d as ze}from"../chunks/index.00wMN4qQ.js";import{P as Ve}from"../chunks/post.Clh1K5kJ.js";import"../chunks/image_banner.DWicrG6p.js";import{f as _e,a as be}from"../chunks/tippy.CrC2_iM6.js";function ge(c){let e,n=c[1],l,d,s,t,v,p,o=Ce(c);return{c(){e=u("button"),o.c(),this.h()},l(r){e=f(r,"BUTTON",{"aria-label":!0,type:!0,class:!0});var h=w(e);o.l(h),h.forEach(C),this.h()},h(){g(e,"aria-label","Copy all codes"),g(e,"type","button"),g(e,"class",l="group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 "+(c[1]?"border-green-400 focus:border-green-500 focus:outline-none":"border-gray-300 hover:border-sky-500"))},m(r,h){B(r,e,h),o.m(e,null),t=!0,v||(p=se(e,"click",c[5]),v=!0)},p(r,h){h&2&&le(n,n=r[1])?(He(),M(o,1,1,ke),xe(),o=Ce(r),o.c(),H(o,1),o.m(e,null)):o.p(r,h),(!t||h&2&&l!==(l="group absolute z-40 right-2 top-2 p2 h-10 w-10 rounded-xl border-2 bg-gray-700 dark:bg-gray-800 "+(r[1]?"border-green-400 focus:border-green-500 focus:outline-none":"border-gray-300 hover:border-sky-500")))&&g(e,"class",l)},i(r){t||(H(o),ye(()=>{t&&(s&&s.end(1),d=Le(e,_e,{y:-25,duration:300,delay:300}),d.start())}),t=!0)},o(r){M(o),d&&d.invalidate(),s=Pe(e,_e,{y:-25,duration:300}),t=!1},d(r){r&&C(e),o.d(r),r&&s&&s.end(),v=!1,p()}}}function Ce(c){let e,n,l,d;return{c(){e=u("div"),this.h()},l(s){e=f(s,"DIV",{class:!0}),w(e).forEach(C),this.h()},h(){g(e,"class","!w5 !h5 color-white m-auto"),N(e,"i-carbon-document-blank",!c[1]),N(e,"i-carbon-document-tasks",c[1])},m(s,t){B(s,e,t),d=!0},p(s,t){(!d||t&2)&&N(e,"i-carbon-document-blank",!s[1]),(!d||t&2)&&N(e,"i-carbon-document-tasks",s[1])},i(s){d||(ye(()=>{d&&(l&&l.end(1),n=Le(e,be,{duration:300,delay:300}),n.start())}),d=!0)},o(s){n&&n.invalidate(),l=Pe(e,be,{duration:300}),d=!1},d(s){s&&C(e),s&&l&&l.end()}}}function Be(c){let e,n,l,d,s,t=c[0]&&ge(c);const v=c[7].default,p=je(v,c,c[6],null);return{c(){e=u("div"),t&&t.c(),n=m(),p&&p.c(),this.h()},l(o){e=f(o,"DIV",{class:!0,role:!0,tabindex:!0});var r=w(e);t&&t.l(r),n=_(r),p&&p.l(r),r.forEach(C),this.h()},h(){g(e,"class","relative overflow-hidden"),g(e,"role","button"),g(e,"tabindex","0")},m(o,r){B(o,e,r),t&&t.m(e,null),i(e,n),p&&p.m(e,null),c[8](e),l=!0,d||(s=[se(e,"mouseenter",c[3]),se(e,"mouseleave",c[4])],d=!0)},p(o,[r]){o[0]?t?(t.p(o,r),r&1&&H(t,1)):(t=ge(o),t.c(),H(t,1),t.m(e,n)):t&&(He(),M(t,1,1,()=>{t=null}),xe()),p&&p.p&&(!l||r&64)&&qe(p,v,o,o[6],l?De(v,o[6],r,null):Ae(o[6]),null)},i(o){l||(H(t),H(p,o),l=!0)},o(o){M(t),M(p,o),l=!1},d(o){o&&C(e),t&&t.d(),p&&p.d(o),c[8](null),d=!1,Se(s)}}}function Re(c,e,n){let{$$slots:l={},$$scope:d}=e,s=!1,t=!1,v;function p(){n(0,s=!0)}function o(){n(0,s=!1),n(1,t=!1)}function r(){n(1,t=!0);const y=v.querySelectorAll(".code-content"),O=Array.from(y).map(T=>T.textContent).join(`
`);navigator.clipboard.writeText(O),setTimeout(()=>{n(1,t=!1)},2e3)}function h(y){Ge[y?"unshift":"push"](()=>{v=y,n(2,v)})}return c.$$set=y=>{"$$scope"in y&&n(6,d=y.$$scope)},[s,t,v,p,o,r,d,l,h]}class Ne extends Te{constructor(e){super(),$e(this,e,Re,Be,le,{})}}function Ue(c){let e,n,l,d=String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">우리는 파이썬으로, 모노레포를 추구하고있어. </div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">여기에는 약 <span class="token number">50</span>개의 project와 각각의 프로젝트에 api, daemon worker<span class="token punctuation">(</span>with kafka<span class="token punctuation">)</span>, batch worker 가 <span class="token number">5</span>~10개씩,  </div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">MSA 형태로 약 <span class="token number">400</span>개의 프로세스가 운영되고있는 서비스를 관리하고있어.</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">또 배포를 위한 k8s manifest, 즉, deployment yaml이 있고, </div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">각 yaml에는 최종적으로 실행시키는 command가 항상 있어.</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">이 커멘드를 활용하여,</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">역으로 해당 deployment가 어떠한 코드들과 연관되어있는지를 추적하고, </div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">모노레포에서 특정 파이썬 코드가 추가/삭제/변경됨에 따라, </div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">어떠한 deployment를 업데이트 해야하는지를 알 수 있는 도구를 만들려고 해.</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">혹은 이미 도구가 있다면 추천도 좋아.</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">어떻게 해당문제를 접근하면 좋을까?</div></div>`+"";return{c(){e=u("pre"),n=u("code"),l=new Ie(!1),this.h()},l(s){e=f(s,"PRE",{});var t=w(e);n=f(t,"CODE",{class:!0});var v=w(n);l=Oe(v,!1),v.forEach(C),t.forEach(C),this.h()},h(){l.a=null,g(n,"class","language-bash")},m(s,t){B(s,e,t),i(e,n),l.m(d,n)},p:ke,d(s){s&&C(e)}}}function Ye(c){let e,n,l='<a href="#">상황</a>',d,s,t="현재 모노 레포를 운영 중에 많은 코드들과 test코드로 인해 빌드 시간이 점점 길어지고있다.",v,p,o=`해당 서비스 배포 전, 관련된 코드들이 무엇인지 찾고 그 코드들의 test code만 실행하여 빌드시간을 단축시켜보려고
      한다.`,r,h,y="GPT에게 질문해보고 관련 답변으로 다시 한번 생각해보자!",O,T,ae='<a href="#gpt">GPT에게 질문</a>',U,x,oe='<a href="#">우리의 상황을 먼저 설명하자</a>',Y,E,$,F,L,ie='<a href="#gpt">GPT 답변</a>',J,z,re="ChatGPT",K,j,de=`모노레포에서 여러 프로젝트를 관리하면서, 특정 파이썬 코드의 변경에 따라 영향을 받는 서비스(또는 deployment)를
      식별하는 것은 효율적인 CI/CD 파이프라인을 구축하는 데 있어 중요한 부분입니다. 여기에는 몇 가지 접근 방법이
      있습니다:`,Q,q,ce=`<li>코드 기반의 의존성 추적</li> <li>Deployment YAML과의 매핑</li> <li>변경 감지 자동화</li> <li>도구 활용</li> <li>사용자 정의 도구 개발 이러한 접근 방법을 통해, 코드 변경이 있을 때 필요한 서비스만 선택적으로 배포함으로써,
        리소스를 절약하고 배포 시간을 단축할 수 있습니다. 여러분의 시스템과 프로세스에 가장 적합한 방법을 선택하고
        필요에 따라 조정하여 적용하는 것이 중요합니다.</li>`,W,P,pe='<a href="#">다시 질문하자. 코드 디펜던시를 찾는 도구 추천.</a>',X,A,ue=`<li>./projects/projectA/src/main.py 를 읽어 import문을 기반으로 연관된 모든 파일들의 목록을 찾는 도구를 개발 또는
        이미 있는 도구를 추천해줘.</li>`,Z,D,fe="ChatGPT",ee,S,ve=`파이썬 파일에서 import 문을 기반으로 연관된 모든 파일을 찾는 작업은 의존성 분석에 해당합니다. 이를 수행할 수 있는
      몇 가지 방법과 도구를 소개합니다:`,te,G,he=`<li>Python 스크립트 사용</li> <li>Pydeps</li> <li>Snakefood</li> <li>Modulegraph 이 중에서 가장 적합한 도구나 방법을 선택하여 사용하면, 주어진 Python 파일과 연관된 모든 파일들의
        목록을 효과적으로 찾을 수 있을 것입니다. 만약 자세한 구현 방법이나 사용 방법에 대해 더 알고 싶다면, 추가로
        질문해 주세요.</li>`,ne,I,me="위 답변을 참고해서 모노 레포에서 효율적인 테스트 코드를 실행시키도록 개선해보자!",R;return $=new Ne({props:{$$slots:{default:[Ue]},$$scope:{ctx:c}}}),{c(){e=u("article"),n=u("h1"),n.innerHTML=l,d=m(),s=u("p"),s.textContent=t,v=m(),p=u("p"),p.textContent=o,r=m(),h=u("p"),h.textContent=y,O=m(),T=u("h1"),T.innerHTML=ae,U=m(),x=u("h2"),x.innerHTML=oe,Y=m(),E=u("div"),Me($.$$.fragment),F=m(),L=u("h2"),L.innerHTML=ie,J=m(),z=u("p"),z.textContent=re,K=m(),j=u("p"),j.textContent=de,Q=m(),q=u("ol"),q.innerHTML=ce,W=m(),P=u("h2"),P.innerHTML=pe,X=m(),A=u("ol"),A.innerHTML=ue,Z=m(),D=u("p"),D.textContent=fe,ee=m(),S=u("p"),S.textContent=ve,te=m(),G=u("ol"),G.innerHTML=he,ne=m(),I=u("p"),I.textContent=me,this.h()},l(k){e=f(k,"ARTICLE",{slot:!0});var a=w(e);n=f(a,"H1",{id:!0,"data-svelte-h":!0}),b(n)!=="svelte-1f9xtts"&&(n.innerHTML=l),d=_(a),s=f(a,"P",{"data-svelte-h":!0}),b(s)!=="svelte-8r1n60"&&(s.textContent=t),v=_(a),p=f(a,"P",{"data-svelte-h":!0}),b(p)!=="svelte-9p5qa7"&&(p.textContent=o),r=_(a),h=f(a,"P",{"data-svelte-h":!0}),b(h)!=="svelte-kt71f7"&&(h.textContent=y),O=_(a),T=f(a,"H1",{id:!0,"data-svelte-h":!0}),b(T)!=="svelte-1goq17r"&&(T.innerHTML=ae),U=_(a),x=f(a,"H2",{id:!0,"data-svelte-h":!0}),b(x)!=="svelte-j8oizv"&&(x.innerHTML=oe),Y=_(a),E=f(a,"DIV",{class:!0});var V=w(E);we($.$$.fragment,V),V.forEach(C),F=_(a),L=f(a,"H2",{id:!0,"data-svelte-h":!0}),b(L)!=="svelte-z8ki34"&&(L.innerHTML=ie),J=_(a),z=f(a,"P",{"data-svelte-h":!0}),b(z)!=="svelte-gqtgzr"&&(z.textContent=re),K=_(a),j=f(a,"P",{"data-svelte-h":!0}),b(j)!=="svelte-1r5zuj0"&&(j.textContent=de),Q=_(a),q=f(a,"OL",{"data-svelte-h":!0}),b(q)!=="svelte-1pp1z31"&&(q.innerHTML=ce),W=_(a),P=f(a,"H2",{id:!0,"data-svelte-h":!0}),b(P)!=="svelte-1bob0ui"&&(P.innerHTML=pe),X=_(a),A=f(a,"OL",{"data-svelte-h":!0}),b(A)!=="svelte-1aaf3ap"&&(A.innerHTML=ue),Z=_(a),D=f(a,"P",{"data-svelte-h":!0}),b(D)!=="svelte-gqtgzr"&&(D.textContent=fe),ee=_(a),S=f(a,"P",{"data-svelte-h":!0}),b(S)!=="svelte-13wtdbk"&&(S.textContent=ve),te=_(a),G=f(a,"OL",{"data-svelte-h":!0}),b(G)!=="svelte-1ev7k2e"&&(G.innerHTML=he),ne=_(a),I=f(a,"P",{"data-svelte-h":!0}),b(I)!=="svelte-16wwqjp"&&(I.textContent=me),a.forEach(C),this.h()},h(){g(n,"id",""),g(T,"id","gpt"),g(x,"id",""),g(E,"class","code-block"),g(L,"id","gpt"),g(P,"id",""),g(e,"slot","post_content")},m(k,a){B(k,e,a),i(e,n),i(e,d),i(e,s),i(e,v),i(e,p),i(e,r),i(e,h),i(e,O),i(e,T),i(e,U),i(e,x),i(e,Y),i(e,E),Ee($,E,null),i(e,F),i(e,L),i(e,J),i(e,z),i(e,K),i(e,j),i(e,Q),i(e,q),i(e,W),i(e,P),i(e,X),i(e,A),i(e,Z),i(e,D),i(e,ee),i(e,S),i(e,te),i(e,G),i(e,ne),i(e,I),R=!0},p(k,a){const V={};a&1&&(V.$$scope={dirty:a,ctx:k}),$.$set(V)},i(k){R||(H($.$$.fragment,k),R=!0)},o(k){M($.$$.fragment,k),R=!1},d(k){k&&C(e),ze($)}}}function Fe(c){let e,n;return e=new Ve({props:{$$slots:{post_content:[Ye]},$$scope:{ctx:c}}}),{c(){Me(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,d){Ee(e,l,d),n=!0},p(l,[d]){const s={};d&1&&(s.$$scope={dirty:d,ctx:l}),e.$set(s)},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){ze(e,l)}}}class Ze extends Te{constructor(e){super(),$e(this,e,null,Fe,le,{})}}export{Ze as component};
