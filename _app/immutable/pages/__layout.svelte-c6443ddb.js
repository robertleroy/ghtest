import{S as q,i as z,s as C,e as m,t as T,k as H,c as p,a as x,h as j,d as u,m as V,b,g as A,F as d,n as F,G as J,H as K,I as M,J as R,r as B,p as L,K as O}from"../chunks/index-6ba913a4.js";import{b as P}from"../chunks/paths-396f020f.js";function N(n,t,l){const o=n.slice();return o[3]=t[l],o}function S(n){let t,l,o=n[3].name+"",f,g,r;return{c(){t=m("div"),l=m("a"),f=T(o),r=H(),this.h()},l(_){t=p(_,"DIV",{class:!0});var i=x(t);l=p(i,"A",{href:!0});var v=x(l);f=j(v,o),v.forEach(u),r=V(i),i.forEach(u),this.h()},h(){b(l,"href",g=""+(P+n[3].url)),b(t,"class","nav-item")},m(_,i){A(_,t,i),d(t,l),d(l,f),d(t,r)},p:F,d(_){_&&u(t)}}}function Q(n){let t,l,o,f,g,r,_,i,v,y,E=n[0],s=[];for(let e=0;e<E.length;e+=1)s[e]=S(N(n,E,e));const I=n[2].default,c=J(I,n,n[1],null);return{c(){t=m("header"),l=m("div"),o=m("h1"),f=T("GhTest"),g=H(),r=m("nav");for(let e=0;e<s.length;e+=1)s[e].c();_=H(),i=m("main"),v=m("div"),c&&c.c(),this.h()},l(e){t=p(e,"HEADER",{class:!0});var h=x(t);l=p(h,"DIV",{class:!0});var a=x(l);o=p(a,"H1",{});var $=x(o);f=j($,"GhTest"),$.forEach(u),g=V(a),r=p(a,"NAV",{class:!0});var k=x(r);for(let D=0;D<s.length;D+=1)s[D].l(k);k.forEach(u),a.forEach(u),h.forEach(u),_=V(e),i=p(e,"MAIN",{class:!0});var G=x(i);v=p(G,"DIV",{class:!0});var w=x(v);c&&c.l(w),w.forEach(u),G.forEach(u),this.h()},h(){b(r,"class","top-nav svelte-1r2uxxr"),b(l,"class","flex-header svelte-1r2uxxr"),b(t,"class","svelte-1r2uxxr"),b(v,"class","router svelte-1r2uxxr"),b(i,"class","svelte-1r2uxxr")},m(e,h){A(e,t,h),d(t,l),d(l,o),d(o,f),d(l,g),d(l,r);for(let a=0;a<s.length;a+=1)s[a].m(r,null);A(e,_,h),A(e,i,h),d(i,v),c&&c.m(v,null),y=!0},p(e,[h]){if(h&1){E=e[0];let a;for(a=0;a<E.length;a+=1){const $=N(e,E,a);s[a]?s[a].p($,h):(s[a]=S($),s[a].c(),s[a].m(r,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=E.length}c&&c.p&&(!y||h&2)&&K(c,I,e,e[1],y?R(I,e[1],h,null):M(e[1]),null)},i(e){y||(B(c,e),y=!0)},o(e){L(c,e),y=!1},d(e){e&&u(t),O(s,e),e&&u(_),e&&u(i),c&&c.d(e)}}}function U(n,t,l){let{$$slots:o={},$$scope:f}=t;const g=[{name:"Home",url:"/"},{name:"About",url:"/about"}];return n.$$set=r=>{"$$scope"in r&&l(1,f=r.$$scope)},[g,f,o]}class Y extends q{constructor(t){super(),z(this,t,U,Q,C,{})}}export{Y as default};
