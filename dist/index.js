"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=s(function(B,m){
var j=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(a,r,e,f){var t,u,i,n;if(a<=0)return NaN;if(a===1||e===0)return v(r[f]);for(u=f,n=0;n<a&&(i=r[u],i!==i);n++)u+=e;if(n===a)return NaN;for(t=v(i),n+=1,n;n<a;n++)u+=e,i=v(r[u]),!j(i)&&i>t&&(t=i);return t}m.exports=l
});var c=s(function(C,x){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(a,r,e){return _(a,r,e,R(a,e))}x.exports=k
});var p=s(function(D,b){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=o();E(d,"ndarray",O);b.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=p(),q,y=h(g(__dirname,"./native.js"));w(y)?q=z:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
