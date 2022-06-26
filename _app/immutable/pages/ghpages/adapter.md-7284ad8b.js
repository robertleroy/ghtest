import{S as N,i as P,s as R,e as r,t as j,k as y,c as i,a as k,h as w,d as a,m as v,b as H,g as t,F as x,E as S}from"../../chunks/index-e812dee1.js";function T(g){let p,_,u,l,h,f,e,A=`<code class="language-bash"><span class="token function">npm</span> remove @sveltejs/adapter-auto
<span class="token function">npm</span> i -D @sveltejs/adapter-static@next</code>`,d,o,D=`<code class="language-js"><span class="token comment">/* svelte.config.js */</span>

<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">"@sveltejs/adapter-static"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">;</span>

<span class="token comment">/** @type &#123;import('@sveltejs/kit').Config&#125; */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".svelte"</span><span class="token punctuation">,</span> <span class="token operator">...</span>mdsvexConfig<span class="token punctuation">.</span>extensions<span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prerender</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
			<span class="token literal-property property">base</span><span class="token operator">:</span> dev <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> <span class="token string">'/ghtest'</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
</code>`,m,c,E;return{c(){p=r("h2"),_=j("Adapter-Static"),u=y(),l=r("h4"),h=j("Swap in adapter-static for adapter-auto"),f=y(),e=r("pre"),d=y(),o=r("pre"),m=y(),c=r("h3"),E=j("Create .nojekyll file in static folder"),this.h()},l(s){p=i(s,"H2",{});var n=k(p);_=w(n,"Adapter-Static"),n.forEach(a),u=v(s),l=i(s,"H4",{});var b=k(l);h=w(b,"Swap in adapter-static for adapter-auto"),b.forEach(a),f=v(s),e=i(s,"PRE",{class:!0});var L=k(e);L.forEach(a),d=v(s),o=i(s,"PRE",{class:!0});var M=k(o);M.forEach(a),m=v(s),c=i(s,"H3",{});var C=k(c);E=w(C,"Create .nojekyll file in static folder"),C.forEach(a),this.h()},h(){H(e,"class","language-bash"),H(o,"class","language-js")},m(s,n){t(s,p,n),x(p,_),t(s,u,n),t(s,l,n),x(l,h),t(s,f,n),t(s,e,n),e.innerHTML=A,t(s,d,n),t(s,o,n),o.innerHTML=D,t(s,m,n),t(s,c,n),x(c,E)},p:S,i:S,o:S,d(s){s&&a(p),s&&a(u),s&&a(l),s&&a(f),s&&a(e),s&&a(d),s&&a(o),s&&a(m),s&&a(c)}}}class F extends N{constructor(p){super(),P(this,p,null,T,R,{})}}export{F as default};
