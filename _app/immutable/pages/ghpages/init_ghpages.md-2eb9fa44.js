import{S as M,i as A,s as C,e as u,t as _,k as d,c as k,a as g,h as v,d as a,m as f,b as E,g as e,F as H,E as b}from"../../chunks/index-e812dee1.js";function G(j){let t,h,c,p,x='<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> gh-pages --save-dev</code>',r,l,m,i,o,w=`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> publish <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'gh-pages'</span><span class="token punctuation">;</span>

<span class="token function">publish</span><span class="token punctuation">(</span>
  <span class="token comment">/* ./gh-pages.js */</span>
 <span class="token string">'build'</span><span class="token punctuation">,</span>
 <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">branch</span><span class="token operator">:</span> <span class="token string">'gh-pages'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'https://github.com/robertleroy/ghtest'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dotfiles</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Deploy Complete!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

#### Inintialize git
<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>&#96; bash
# push to main branch
git init
git add <span class="token punctuation">.</span>
git commit <span class="token operator">-</span>m <span class="token string">'initial'</span>
git branch <span class="token operator">-</span><span class="token constant">M</span> main
git remote add origin https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>robertleroy<span class="token operator">/</span>ghtest<span class="token punctuation">.</span>git
git push <span class="token operator">-</span>u origin main

# build <span class="token operator">&amp;</span> deploy to gh<span class="token operator">-</span>pages branch
npm run build
npm run deploy</code>`;return{c(){t=u("h4"),h=_("Install GH-Pages"),c=d(),p=u("pre"),r=d(),l=u("h4"),m=_("Add gh-pages.js to root"),i=d(),o=u("pre"),this.h()},l(s){t=k(s,"H4",{});var n=g(t);h=v(n,"Install GH-Pages"),n.forEach(a),c=f(s),p=k(s,"PRE",{class:!0});var I=g(p);I.forEach(a),r=f(s),l=k(s,"H4",{});var y=g(l);m=v(y,"Add gh-pages.js to root"),y.forEach(a),i=f(s),o=k(s,"PRE",{class:!0});var P=g(o);P.forEach(a),this.h()},h(){E(p,"class","language-bash"),E(o,"class","language-js")},m(s,n){e(s,t,n),H(t,h),e(s,c,n),e(s,p,n),p.innerHTML=x,e(s,r,n),e(s,l,n),H(l,m),e(s,i,n),e(s,o,n),o.innerHTML=w},p:b,i:b,o:b,d(s){s&&a(t),s&&a(c),s&&a(p),s&&a(r),s&&a(l),s&&a(i),s&&a(o)}}}class R extends M{constructor(t){super(),A(this,t,null,G,C,{})}}export{R as default};
