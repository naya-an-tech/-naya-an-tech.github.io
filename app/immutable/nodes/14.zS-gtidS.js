import{s as kt,e as l,b as d,c,f as $,g as h,h as p,d as f,a as m,i as M,k as n,H as rt,l as dt,n as pt}from"../chunks/scheduler.DJEw_kJ_.js";import{S as Et,i as Pt,c as U,a as j,m as L,t as B,b as F,d as G}from"../chunks/index.BN7hZ-gT.js";import{P as wt,I as yt}from"../chunks/post.DyPZ_MbV.js";import{C as it}from"../chunks/code_copy.bzpfJWNM.js";function Dt(_){let t,s,a,v=String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"><span class="token function">ssh</span> user@192.168.0.100</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"></div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">Unable to negotiate with <span class="token number">192.168</span>.10.106 port <span class="token number">22</span>: no matching <span class="token function">host</span> key <span class="token builtin class-name">type</span> found. Their offer: ssh-rsa,ssh-dss</div></div>`+"";return{c(){t=l("pre"),s=l("code"),a=new rt(!1),this.h()},l(o){t=c(o,"PRE",{});var i=$(t);s=c(i,"CODE",{class:!0});var u=$(s);a=dt(u,!1),u.forEach(f),i.forEach(f),this.h()},h(){a.a=null,m(s,"class","language-shell")},m(o,i){M(o,t,i),n(t,s),a.m(v,s)},p:pt,d(o){o&&f(t)}}}function It(_){let t,s,a,v=String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content"><span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">HostKeyAlgorithms</span><span class="token operator">=</span>+ssh-rsa user@192.168.10.106</div></div>`+"";return{c(){t=l("pre"),s=l("code"),a=new rt(!1),this.h()},l(o){t=c(o,"PRE",{});var i=$(t);s=c(i,"CODE",{class:!0});var u=$(s);a=dt(u,!1),u.forEach(f),i.forEach(f),this.h()},h(){a.a=null,m(s,"class","language-bash")},m(o,i){M(o,t,i),n(t,s),a.m(v,s)},p:pt,d(o){o&&f(t)}}}function qt(_){let t,s,a,v=String.raw`<div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">Host <span class="token number">192.168</span>.10.106</div></div><div class="code-line"><div class="code-linenotation"><span class="no-line-number"></span><span class="no-line-diff"></span></div><div class="code-content">    HostKeyAlgorithms +ssh-rsa</div></div>`+"";return{c(){t=l("pre"),s=l("code"),a=new rt(!1),this.h()},l(o){t=c(o,"PRE",{});var i=$(t);s=c(i,"CODE",{class:!0});var u=$(s);a=dt(u,!1),u.forEach(f),i.forEach(f),this.h()},h(){a.a=null,m(s,"class","language-bash")},m(o,i){M(o,t,i),n(t,s),a.m(v,s)},p:pt,d(o){o&&f(t)}}}function zt(_){let t,s,a="최신 맥에서 특정 서버로 접근하려할 때, 아래와 같은 애러를 만날 때가 있다.",v,o,i,u,E,ft="이 오류는 SSH 클라이언트와 서버 간의 호스트 키 타입 불일치로 인해 발생한다.",N,P,vt="최신 SSH 클라이언트는 보안상의 이유로 기본적으로 ssh-rsa와 ssh-dss를 비활성화했기 때문이다.",Q,w,ht="이 문제를 해결하기 위한 몇 가지 방법이 있다.",W,x,ut="1. SSH 명령에 호스트 키 타입을 명시적으로 지정",X,y,g,Y,S,mt="2. SSH 구성 파일에 호스트 키 타입 추가",Z,D,$t="~/.ssh/config 파일(없다면 생성)에 다음 내용을 추가합니다:",tt,I,C,et,b,_t="3.서버 측 SSH 구성 업데이트",nt,q,gt=`가능하다면, 서버의 /etc/ssh/sshd_config 파일에서 더 안전한 키 타입(예: ed25519)을 추가하고 SSH 서비스를
      재시작한다.`,st,H,Ct="4. SSH 클라이언트 업데이트",at,z,xt="최신 버전의 SSH 클라이언트는 더 안전한 알고리즘을 지원",ot,O,k,lt,R,St="보안상의 이유로 옵션 3이나 4를 권장하지만, 즉시 서버에 접속해야 한다면 옵션 1이나 2를 사용할 수 있다.",ct,A,bt="단, 이는 임시 해결책이며 장기적으로는 더 안전한 방법(3,4)를 고려해 보자.",J;return i=new it({props:{$$slots:{default:[Dt]},$$scope:{ctx:_}}}),g=new it({props:{$$slots:{default:[It]},$$scope:{ctx:_}}}),C=new it({props:{$$slots:{default:[qt]},$$scope:{ctx:_}}}),k=new yt({props:{src:"/ssh-connection-fail-on-m3-mac/0_Untitled.png",alt:"image"}}),{c(){t=l("article"),s=l("p"),s.textContent=a,v=d(),o=l("div"),U(i.$$.fragment),u=d(),E=l("p"),E.textContent=ft,N=d(),P=l("p"),P.textContent=vt,Q=d(),w=l("p"),w.textContent=ht,W=d(),x=l("h2"),x.textContent=ut,X=d(),y=l("div"),U(g.$$.fragment),Y=d(),S=l("h2"),S.textContent=mt,Z=d(),D=l("p"),D.textContent=$t,tt=d(),I=l("div"),U(C.$$.fragment),et=d(),b=l("h2"),b.textContent=_t,nt=d(),q=l("p"),q.textContent=gt,st=d(),H=l("h2"),H.textContent=Ct,at=d(),z=l("p"),z.textContent=xt,ot=d(),O=l("p"),U(k.$$.fragment),lt=d(),R=l("p"),R.textContent=St,ct=d(),A=l("p"),A.textContent=bt,this.h()},l(r){t=c(r,"ARTICLE",{slot:!0});var e=$(t);s=c(e,"P",{"data-svelte-h":!0}),h(s)!=="svelte-17dzg9r"&&(s.textContent=a),v=p(e),o=c(e,"DIV",{class:!0});var T=$(o);j(i.$$.fragment,T),T.forEach(f),u=p(e),E=c(e,"P",{"data-svelte-h":!0}),h(E)!=="svelte-vtb0ua"&&(E.textContent=ft),N=p(e),P=c(e,"P",{"data-svelte-h":!0}),h(P)!=="svelte-1hnkj11"&&(P.textContent=vt),Q=p(e),w=c(e,"P",{"data-svelte-h":!0}),h(w)!=="svelte-17qe539"&&(w.textContent=ht),W=p(e),x=c(e,"H2",{id:!0,"data-svelte-h":!0}),h(x)!=="svelte-1dkfpb4"&&(x.textContent=ut),X=p(e),y=c(e,"DIV",{class:!0});var V=$(y);j(g.$$.fragment,V),V.forEach(f),Y=p(e),S=c(e,"H2",{id:!0,"data-svelte-h":!0}),h(S)!=="svelte-1hrevda"&&(S.textContent=mt),Z=p(e),D=c(e,"P",{"data-svelte-h":!0}),h(D)!=="svelte-1q3ocav"&&(D.textContent=$t),tt=p(e),I=c(e,"DIV",{class:!0});var K=$(I);j(C.$$.fragment,K),K.forEach(f),et=p(e),b=c(e,"H2",{id:!0,"data-svelte-h":!0}),h(b)!=="svelte-ori4pa"&&(b.textContent=_t),nt=p(e),q=c(e,"P",{"data-svelte-h":!0}),h(q)!=="svelte-1dxb2nz"&&(q.textContent=gt),st=p(e),H=c(e,"H2",{id:!0,"data-svelte-h":!0}),h(H)!=="svelte-ynhytc"&&(H.textContent=Ct),at=p(e),z=c(e,"P",{"data-svelte-h":!0}),h(z)!=="svelte-hbi116"&&(z.textContent=xt),ot=p(e),O=c(e,"P",{});var Ht=$(O);j(k.$$.fragment,Ht),Ht.forEach(f),lt=p(e),R=c(e,"P",{"data-svelte-h":!0}),h(R)!=="svelte-1qfxssi"&&(R.textContent=St),ct=p(e),A=c(e,"P",{"data-svelte-h":!0}),h(A)!=="svelte-1k7ctgd"&&(A.textContent=bt),e.forEach(f),this.h()},h(){m(o,"class","code-block"),m(x,"id","1. SSH 명령에 호스트 키 타입을 명시적으로 지정"),m(y,"class","code-block"),m(S,"id","2. SSH 구성 파일에 호스트 키 타입 추가"),m(I,"class","code-block"),m(b,"id","3.서버 측 SSH 구성 업데이트"),m(H,"id","4. SSH 클라이언트 업데이트"),m(t,"slot","post_content")},m(r,e){M(r,t,e),n(t,s),n(t,v),n(t,o),L(i,o,null),n(t,u),n(t,E),n(t,N),n(t,P),n(t,Q),n(t,w),n(t,W),n(t,x),n(t,X),n(t,y),L(g,y,null),n(t,Y),n(t,S),n(t,Z),n(t,D),n(t,tt),n(t,I),L(C,I,null),n(t,et),n(t,b),n(t,nt),n(t,q),n(t,st),n(t,H),n(t,at),n(t,z),n(t,ot),n(t,O),L(k,O,null),n(t,lt),n(t,R),n(t,ct),n(t,A),J=!0},p(r,e){const T={};e&1&&(T.$$scope={dirty:e,ctx:r}),i.$set(T);const V={};e&1&&(V.$$scope={dirty:e,ctx:r}),g.$set(V);const K={};e&1&&(K.$$scope={dirty:e,ctx:r}),C.$set(K)},i(r){J||(B(i.$$.fragment,r),B(g.$$.fragment,r),B(C.$$.fragment,r),B(k.$$.fragment,r),J=!0)},o(r){F(i.$$.fragment,r),F(g.$$.fragment,r),F(C.$$.fragment,r),F(k.$$.fragment,r),J=!1},d(r){r&&f(t),G(i),G(g),G(C),G(k)}}}function Rt(_){let t,s;return t=new wt({props:{$$slots:{post_content:[zt]},$$scope:{ctx:_}}}),{c(){U(t.$$.fragment)},l(a){j(t.$$.fragment,a)},m(a,v){L(t,a,v),s=!0},p(a,[v]){const o={};v&1&&(o.$$scope={dirty:v,ctx:a}),t.$set(o)},i(a){s||(B(t.$$.fragment,a),s=!0)},o(a){F(t.$$.fragment,a),s=!1},d(a){G(t,a)}}}class Kt extends Et{constructor(t){super(),Pt(this,t,null,Rt,kt,{})}}export{Kt as component};
