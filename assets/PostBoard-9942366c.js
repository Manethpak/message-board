import{S as nt,i as st,s as lt,e as u,a as h,b as e,c as tt,d as n,f as B,l as x,p as ot,t as U,v as H,w as at,g as et,x as it,r as rt,h as ct,y as ut,z as pt,I as ft,A as dt,B as mt,n as ht,C as bt,D as _t,Q as yt,T as gt,E as kt,j as X,F as vt}from"./index-930d8d09.js";import{A as wt}from"./AiOutlineCheck-df621382.js";function Y(s,o,t){const a=s.slice();return a[16]=o[t],a}function Z(s){let o,t=s[16]+"",a,_,b,d;function i(){return s[11](s[16])}return{c(){o=u("button"),a=ut(t),_=h(),e(o,"type","button"),e(o,"class","btn-primary text-sm")},m(f,y){tt(f,o,y),n(o,a),n(o,_),b||(d=x(o,"click",i),b=!0)},p(f,y){s=f,y&2&&t!==(t=s[16]+"")&&pt(a,t)},d(f){f&&et(o),b=!1,d()}}}function $(s){let o,t;return o=new ft({props:{src:wt,size:16,color:"white"}}),{c(){dt(o.$$.fragment)},m(a,_){mt(o,a,_),t=!0},p:ht,i(a){t||(U(o.$$.fragment,a),t=!0)},o(a){H(o.$$.fragment,a),t=!1},d(a){bt(o,a)}}}function Ct(s){let o,t,a,_,b,d,i,f,y,N,P,S,g,z,A,E,T,L,r,M,q,O,v,w,G,C,Q,J,D,K,R,I,F,V,j=s[1],m=[];for(let l=0;l<j.length;l+=1)m[l]=Z(Y(s,j,l));let c=s[4]&&$();return{c(){o=u("div"),t=u("form"),a=u("label"),a.textContent="Title",_=h(),b=u("p"),b.textContent="Title can only contain 30 character",d=h(),i=u("input"),f=h(),y=u("label"),y.textContent="Body",N=h(),P=u("p"),S=h(),g=u("textarea"),z=h(),A=u("label"),A.textContent="Topics",E=h(),T=u("p"),T.textContent="Should contain 0 to 3 topic seperated by comma",L=h(),r=u("input"),M=h(),q=u("div");for(let l=0;l<m.length;l+=1)m[l].c();O=h(),v=u("div"),w=u("input"),G=h(),C=u("button"),c&&c.c(),J=h(),D=u("label"),D.textContent="Post as anonymous?",K=h(),R=u("div"),R.innerHTML=`<button type="reset" class="btn-primary">Reset</button> 
      <button type="submit" class="btn-primary">Post</button>`,e(a,"for","title"),e(a,"class","mt-2"),e(b,"class","text-sm"),i.required=!0,e(i,"id","title"),e(i,"type","text"),e(i,"class","input w-[30rem]"),e(i,"maxlength","30"),e(y,"for","body"),e(y,"class","mt-2"),e(P,"class","text-sm"),g.required=!0,e(g,"rows","6"),e(g,"id","body"),e(g,"class","input w-[30rem]"),e(A,"for","topics"),e(A,"class","mt-2"),e(T,"class","text-xs"),e(r,"id","topics"),e(r,"type","text"),e(r,"class","input w-[30rem]"),e(r,"maxlength","11"),e(q,"class","flex mt-2 space-x-2"),e(w,"type","checkbox"),e(w,"id","isAnonymous"),e(w,"class","hidden"),e(C,"type","button"),e(C,"class",Q=s[7]("w-5 h-5 rounded-md flex justify-center items-center",s[4]?"bg-blue-400":"bg-white")),e(D,"for","isAnonymous"),e(D,"class","select-none"),e(v,"class","flex items-center gap-1 my-4 cursor-pointer"),e(R,"class","flex justify-center gap-5"),e(t,"class","flex flex-col mt-10")},m(l,k){tt(l,o,k),n(o,t),n(t,a),n(t,_),n(t,b),n(t,d),n(t,i),B(i,s[2]),n(t,f),n(t,y),n(t,N),n(t,P),n(t,S),n(t,g),B(g,s[3]),n(t,z),n(t,A),n(t,E),n(t,T),n(t,L),n(t,r),B(r,s[0]),n(t,M),n(t,q);for(let p=0;p<m.length;p+=1)m[p].m(q,null);n(t,O),n(t,v),n(v,w),w.checked=s[4],n(v,G),n(v,C),c&&c.m(C,null),n(v,J),n(v,D),n(t,K),n(t,R),I=!0,F||(V=[x(i,"input",s[8]),x(g,"input",s[9]),x(r,"input",s[10]),x(w,"change",s[12]),x(C,"click",s[13]),x(t,"submit",ot(s[6]))],F=!0)},p(l,[k]){if(k&4&&i.value!==l[2]&&B(i,l[2]),k&8&&B(g,l[3]),k&1&&r.value!==l[0]&&B(r,l[0]),k&34){j=l[1];let p;for(p=0;p<j.length;p+=1){const W=Y(l,j,p);m[p]?m[p].p(W,k):(m[p]=Z(W),m[p].c(),m[p].m(q,null))}for(;p<m.length;p+=1)m[p].d(1);m.length=j.length}k&16&&(w.checked=l[4]),l[4]?c?(c.p(l,k),k&16&&U(c,1)):(c=$(),c.c(),U(c,1),c.m(C,null)):c&&(_t(),H(c,1,1,()=>{c=null}),at()),(!I||k&16&&Q!==(Q=l[7]("w-5 h-5 rounded-md flex justify-center items-center",l[4]?"bg-blue-400":"bg-white")))&&e(C,"class",Q)},i(l){I||(U(c),I=!0)},o(l){H(c),I=!1},d(l){l&&et(o),it(m,l),c&&c.d(),F=!1,rt(V)}}}function At(s,o,t){const{addNotification:a}=ct();let _="",b="",d="",i=[],f=!1;const y=r=>{i.push(r.toLowerCase()),t(1,i)},N=r=>{i.splice(r,1),t(1,i)},P=async()=>{try{const r=await yt(gt(kt,"posts"),{title:_,body:b,topics:i,author:{uid:X.currentUser.uid,displayName:f?"anonymous":X.currentUser.displayName},createdAt:new Date,updatedAt:new Date,replies:[]});a({text:"Post created",position:"top-center",type:"success",removeAfter:2e3}),vt("/board/"+r.id)}catch{a({text:"Error creating post",position:"top-center",type:"error",removeAfter:2e3})}},S=(...r)=>r.filter(Boolean).join(" ");function g(){_=this.value,t(2,_)}function z(){b=this.value,t(3,b)}function A(){d=this.value,t(0,d)}const E=r=>N(r);function T(){f=this.checked,t(4,f)}const L=()=>t(4,f=!f);return s.$$.update=()=>{s.$$.dirty&1&&d&&d.includes(",")&&(y(d.slice(0,d.length-1)),t(0,d="")),s.$$.dirty&2&&i.length>3&&t(1,i=i.slice(0,3))},[d,i,_,b,f,N,P,S,g,z,A,E,T,L]}class jt extends nt{constructor(o){super(),st(this,o,At,Ct,lt,{})}}export{jt as default};