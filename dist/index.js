"use strict";var E=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var u=E(function(c,t){
var q=require('@stdlib/array-base-assert-contains/dist').factory,P=require('@stdlib/error-tools-fmtprodmsg/dist'),R=require('@stdlib/regexp-extname-posix/dist'),f=require('@stdlib/regexp-extname-windows/dist'),w=require('@stdlib/assert-is-windows/dist'),n=["posix","win32"],X=q(n);function x(r){if(arguments.length>0&&!X(r))throw new Error(P('0sR7p',n.join('", "'),r));return r==="win32"||w?f():R()}t.exports=x
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/regexp-extname-posix/dist').REGEXP,o=require('@stdlib/regexp-extname-windows/dist').REGEXP,G=require('@stdlib/assert-is-windows/dist'),i=u(),I=G?o:s;a(i,"REGEXP",I);a(i,"REGEXP_POSIX",s);a(i,"REGEXP_WIN32",o);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
