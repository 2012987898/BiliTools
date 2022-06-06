import{_ as r,Q as a,o as d,c as p,b as s,U as n,z as _,D as e,a as o}from"./app.7b99ea9c.js";var u="/BiliTools/images/119252529-6ca84400-bbdf-11eb-98e2-5bd87f3717ff.png",h="/BiliTools/images/scf-base-config.png",m="/BiliTools/images/119252605-cd378100-bbdf-11eb-85a6-ca6aa97ea445.png",g="/BiliTools/images/119252627-e4766e80-bbdf-11eb-9c53-359877711c20.png",f="/BiliTools/images/scf-npm.png",b="/BiliTools/images/bili-scf-config.png",v="/BiliTools/images/create-trigger.png",k="/BiliTools/images/scf-trigger-config.png";const x={},B={id:"\u65B0\u589E-scf",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#\u65B0\u589E-scf","aria-hidden":"true"},"#",-1),I=e(" \u65B0\u589E scf "),j={href:"https://console.cloud.tencent.com/scf",target:"_blank",rel:"noopener noreferrer"},L=e("\u70B9\u51FB\u8FDB\u5165\u4E91\u51FD\u6570\u63A7\u5236\u53F0"),C=s("p",null,[s("img",{src:u,alt:"Snipaste_2021-05-23_14-37-50"})],-1),N=s("p",null,"\u586B\u5199\u57FA\u672C\u7684\u4FE1\u606F",-1),S=s("ul",null,[s("li",null,[e("\u8FD0\u884C\u73AF\u5883\u9009\u62E9\u6700\u65B0\u7684 "),s("code",null,"Nodejs"),e("\uFF08\u76EE\u524D\u662F 16\uFF0C\u6700\u4F4E\u8BF7\u9009\u62E9 14\uFF09")])],-1),O=s("p",null,[s("img",{src:h,alt:"SCF\u57FA\u7840\u914D\u7F6E"})],-1),V=s("p",null,"\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E",-1),y=s("p",null,[s("img",{src:m,alt:"image"})],-1),E=e("\u83B7\u53D6 ID \u548C KEY "),F={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},D=e("API \u5BC6\u94A5\u7BA1\u7406"),G=o('<p><img src="'+g+'" alt="image"></p><h2 id="\u4E0B\u8F7D\u6216\u66F4\u65B0\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6216\u66F4\u65B0\u6A21\u5757" aria-hidden="true">#</a> \u4E0B\u8F7D\u6216\u66F4\u65B0\u6A21\u5757</h2><p><img src="'+f+`" alt="\u4E0B\u8F7D\u6216\u66F4\u65B0\u6A21\u5757"></p><p>\u817E\u8BAF\u4E91\u51FD\u6570\u4F7F\u7528\u4E86\u955C\u50CF\u52A0\u901F\uFF0C\u4F46\u662F\u955C\u50CF\u4E0D\u662F\u5B9E\u65F6\u66F4\u65B0\u7684\uFF0C\u5982\u679C\u60F3\u8981\u4ECA\u5929\u521A\u66F4\u65B0\u7684\u6A21\u5757\uFF0C\u8BF7\u8BBE\u7F6E\u6E90\u4E3A\u9ED8\u8BA4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5/\u66F4\u65B0\u4F9D\u8D56\uFF0C\u90FD\u662F\u540C\u6837\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> src
<span class="token function">yarn</span> <span class="token function">add</span> @catlair/bilitools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u9700\u8981\u968F\u673A\u8FD0\u884C\uFF0C\u8FD8\u9700\u8981 <code>yarn add tencentcloud-sdk-nodejs</code></p><p>\u4FEE\u6539 index.js \u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span>main_handler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@catlair/bilitools&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scf_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u53C2\u8003\u56FE\u4E2D\u4F4D\u7F6E\uFF0C\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6</p><h3 id="\u4EE3\u7801\u81EA\u52A8\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u81EA\u52A8\u66F4\u65B0" aria-hidden="true">#</a> \u4EE3\u7801\u81EA\u52A8\u66F4\u65B0</h3>`,12),R=s("h2",{id:"\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6\u5E76\u6D4B\u8BD5\u662F\u5426\u53EF\u7528",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6\u5E76\u6D4B\u8BD5\u662F\u5426\u53EF\u7528","aria-hidden":"true"},"#"),e(" \u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6\u5E76\u6D4B\u8BD5\u662F\u5426\u53EF\u7528")],-1),q=s("p",null,[s("strong",null,"\u90E8\u7F72\u540E"),e("\u70B9\u51FB\u8FD0\u884C\uFF0C\u67E5\u770B\u662F\u5426\u8FD0\u884C\u6210\u529F\uFF0C\u5982\u82E5\u5931\u8D25\uFF0C\u8BF7\u6839\u636E\u8F93\u51FA\u5185\u5BB9\u4FEE\u6539\u540E\u91CD\u8BD5")],-1),w=e("\u9664\u4E86 config.json \u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u73AF\u5883\u53D8\u91CF "),z=s("code",null,"BILITOOLS_CONFIG",-1),A=o('<p>\u6587\u4EF6\u914D\u7F6E\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>BILITOOLS_CONFIG</code></p><p><img src="'+b+'" alt="bili-scf-config"></p><h2 id="\u589E\u52A0\u89E6\u53D1\u5668" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u89E6\u53D1\u5668" aria-hidden="true">#</a> \u589E\u52A0\u89E6\u53D1\u5668</h2><p><img src="'+v+'" alt="create-trigger"></p><ul><li>\u76F4\u64AD\u5FC3\u8DF3\u7684\u89E6\u53D1\u5668\u540D\u5FC5\u987B\u4E3A<code>heart_bili_timer</code>\uFF0C\u5426\u5219\u65E0\u6CD5\u8C03\u7528</li></ul><p><img src="'+k+'" alt="create-trigger"></p>',6);function K(P,Q){const i=a("TestedVersion"),t=a("ExternalLinkIcon"),c=a("ServerlessCommon"),l=a("RouterLink");return d(),p("div",null,[s("h2",B,[T,I,n(i,{type:"scf"})]),s("p",null,[s("a",j,[L,n(t)])]),C,N,S,O,V,y,s("p",null,[E,s("a",F,[D,n(t)])]),G,n(c),R,q,s("p",null,[w,n(l,{to:"/config/env.html"},{default:_(()=>[z]),_:1})]),A])}var Y=r(x,[["render",K],["__file","tencent_scf.html.vue"]]);export{Y as default};
