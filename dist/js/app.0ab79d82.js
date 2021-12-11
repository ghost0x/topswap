(function(e){function t(t){for(var o,l,c=t[0],s=t[1],i=t[2],d=0,b=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3e5f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("bc3a"),a=n.n(r),l=n("130e"),c={class:"body-bg min-h-screen pb-6 px-2 md:px-0",style:{"font-family":"'Lato',sans-serif"}},s=Object(o["d"])("header",{class:"max-w-lg mx-auto"},[Object(o["d"])("a",{href:"#"},[Object(o["d"])("h1",{class:"text-4xl font-bold text-white text-center"},"Top Swap"),Object(o["d"])("h1",{class:"text-2xl text-white text-center"},"Top Uniswap Pools based on ROI")])],-1),i={class:"bg-white max-w-3xl mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"};function u(e,t,n,r,a,l){var u=Object(o["h"])("Pools");return Object(o["f"])(),Object(o["c"])("div",c,[s,Object(o["d"])("main",i,[Object(o["e"])(u)])])}n("b0c0");var d={class:"hello"},b=Object(o["d"])("h2",{class:"text-2xl mb-4"},"Pools",-1),p={class:"text-lg"},f={class:"mt-4"},O=Object(o["d"])("thead",null,[Object(o["d"])("tr",null,[Object(o["d"])("th"),Object(o["d"])("th",null,"Pool"),Object(o["d"])("th",null,"TVL"),Object(o["d"])("th",null,"Fees"),Object(o["d"])("th",null,"Fee:TVL Ratio")])],-1),j=["href"];function h(e,t,n,r,a,l){return Object(o["f"])(),Object(o["c"])("div",d,[b,Object(o["d"])("span",p,"Found "+Object(o["i"])(a.pools.length)+" pools.",1),Object(o["d"])("table",f,[O,Object(o["d"])("tbody",null,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["g"])(a.pools,(function(e,t){return Object(o["f"])(),Object(o["c"])("tr",{key:e.id},[Object(o["d"])("td",null,Object(o["i"])(t+1),1),Object(o["d"])("td",null,[Object(o["d"])("a",{target:"_blank",href:"https://info.uniswap.org/#/pools/"+e.pool.id},Object(o["i"])(e.pool.token0.name)+"/"+Object(o["i"])(e.pool.token1.name),9,j)]),Object(o["d"])("td",null,"$"+Object(o["i"])(parseFloat(e.feesUSD).toLocaleString()),1),Object(o["d"])("td",null,"$"+Object(o["i"])(parseFloat(e.tvlUSD).toLocaleString()),1),Object(o["d"])("th",null,Object(o["i"])(e.feeTvlRatio),1)])})),128))])])])}n("b680"),n("4e82");var v={name:"HelloWorld",data:function(){return{pools:Array}},mounted:function(){var e=this;this.pools=[];var t=432e6,n=new Date;n.setTime(n.getTime()-t),n=parseInt(n.getTime()/1e3),this.axios.post("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",{query:"{    poolDayDatas(first: 1000, orderBy: feesUSD,      orderDirection: desc, where:{        date_gt:"+n+" })  {      id,   pool {     id ,    token0 { name }   ,  token1 { name }   }  , tvlUSD  , feesUSD  } }"}).then((function(t){for(var n=t.data.data.poolDayDatas,o=0;o<n.length;o++)n[o].feeTvlRatio=(parseFloat(n[o].feesUSD)/parseFloat(n[o].tvlUSD)).toFixed(3);n.sort((function(e,t){return e.feeTvlRatio<t.feeTvlRatio?1:-1})),e.pools=n}))}},m=n("6b0d"),g=n.n(m);const y=g()(v,[["render",h]]);var x=y,w={name:"App",components:{Pools:x}};n("d514");const S=g()(w,[["render",u]]);var D=S;n("b3d2"),n("ba8c");Object(o["b"])(D).use(l["a"],a.a).mount("#app")},b3d2:function(e,t,n){},ba8c:function(e,t,n){},d514:function(e,t,n){"use strict";n("3e5f")}});
//# sourceMappingURL=app.0ab79d82.js.map