"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=o(function(S,u){
var v=require('@stdlib/assert-contains/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=require('@stdlib/regexp-extname-posix/dist'),R=require('@stdlib/regexp-extname-windows/dist'),w=require('@stdlib/assert-is-windows/dist'),a=["posix","win32"];function X(r){if(arguments.length>0&&!v(a,r))throw new Error(q('0sR7p',a.join('", "'),r));return r==="win32"||w?R():P()}u.exports=X
});var n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/regexp-extname-posix/dist').REGEXP,E=require('@stdlib/regexp-extname-windows/dist').REGEXP,x=require('@stdlib/assert-is-windows/dist'),i=t(),G=x?E:s;n(i,"REGEXP",G);n(i,"REGEXP_POSIX",s);n(i,"REGEXP_WIN32",E);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
