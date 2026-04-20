"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=v(function(S,t){
var E=require('@stdlib/array-base-assert-contains/dist').factory,q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=require('@stdlib/regexp-extname-posix/dist'),R=require('@stdlib/regexp-extname-windows/dist'),f=require('@stdlib/assert-is-windows/dist'),n=["posix","win32"],w=E(n);function X(r){if(arguments.length>0&&!w(r))throw new Error(q('0sR7p',n.join('", "'),r));return r==="win32"||f?R():P()}t.exports=X
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/regexp-extname-posix/dist').REGEXP,o=require('@stdlib/regexp-extname-windows/dist').REGEXP,x=require('@stdlib/assert-is-windows/dist'),i=u(),G=x?o:s;a(i,"REGEXP",G);a(i,"REGEXP_POSIX",s);a(i,"REGEXP_WIN32",o);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
