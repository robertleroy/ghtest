import{S as A,i as C,s as K,e as r,t as w,k as _,c as k,a as f,h as g,d as n,m as v,b as y,g as o,F as E,E as h}from"../../chunks/index-e812dee1.js";function L(S){let t,d,l,c,m,i,e,H=`<code class="language-bash"><span class="token comment"># Init &amp; follow prompts</span>
<span class="token function">npm</span> init @svelte-add/kit@latest

<span class="token comment"># Add plugins</span>
<span class="token function">npm</span> i -D postcss-nested

<span class="token function">npm</span> <span class="token function">install</span>    
<span class="token function">npm</span> run dev</code>`,u,p,b=`<code class="language-js"><span class="token comment">// postcss.config.cjs</span>
<span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"autoprefixer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> postcss_nested <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'postcss-nested'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>autoprefixer<span class="token punctuation">,</span> postcss_nested<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span></code>`;return{c(){t=r("h3"),d=w("Svelte-Add"),l=_(),c=r("h4"),m=w("Create SvelteKit app with integrations"),i=_(),e=r("pre"),u=_(),p=r("pre"),this.h()},l(s){t=k(s,"H3",{});var a=f(t);d=g(a,"Svelte-Add"),a.forEach(n),l=v(s),c=k(s,"H4",{});var x=f(c);m=g(x,"Create SvelteKit app with integrations"),x.forEach(n),i=v(s),e=k(s,"PRE",{class:!0});var j=f(e);j.forEach(n),u=v(s),p=k(s,"PRE",{class:!0});var q=f(p);q.forEach(n),this.h()},h(){y(e,"class","language-bash"),y(p,"class","language-js")},m(s,a){o(s,t,a),E(t,d),o(s,l,a),o(s,c,a),E(c,m),o(s,i,a),o(s,e,a),e.innerHTML=H,o(s,u,a),o(s,p,a),p.innerHTML=b},p:h,i:h,o:h,d(s){s&&n(t),s&&n(l),s&&n(c),s&&n(i),s&&n(e),s&&n(u),s&&n(p)}}}class P extends A{constructor(t){super(),C(this,t,null,L,K,{})}}export{P as default};
