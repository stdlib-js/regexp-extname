// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).reExtname={})}(this,(function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,c,p,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||f.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),p="get"in r,s="set"in r,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),s&&u&&u.call(e,t,r.set),e};function c(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var s=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function y(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}c(p,"REGEXP",s);var b=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;c(y,"REGEXP",b);var m="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof m.setTimeout&&setTimeout,"function"==typeof m.clearTimeout&&clearTimeout;function v(e,t){this.fun=e,this.array=t}v.prototype.run=function(){this.fun.apply(null,this.array)};var d=m.performance||{};d.now||d.mozNow||d.msNow||d.oNow||d.webkitNow;new Date;var g="win32"==="browser",_=Math.floor;function h(e){return _(e)===e}function w(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&h(e.length)&&e.length>=0&&e.length<=9007199254740991}function E(e){return"number"==typeof e}var S="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return S&&"symbol"==typeof Symbol.toStringTag}var P=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;var T="function"==typeof Symbol?Symbol.toStringTag:"";var I=j()?function(e){var t,r,n,o,i;if(null==e)return P.call(e);r=e[T],i=T,t=null!=(o=e)&&O.call(o,i);try{e[T]=void 0}catch(t){return P.call(e)}return n=P.call(e),t?e[T]=r:delete e[T],n}:function(e){return P.call(e)},N=Number,G=N.prototype.toString;var X=j();function R(e){return"object"==typeof e&&(e instanceof N||(X?function(e){try{return G.call(e),!0}catch(e){return!1}}(e):"[object Number]"===I(e)))}function V(e){return E(e)||R(e)}c(V,"isPrimitive",E),c(V,"isObject",R);var x=Number.POSITIVE_INFINITY,A=N.NEGATIVE_INFINITY;function $(e){return e<x&&e>A&&h(e)}function k(e){return E(e)&&$(e)}function z(e){return R(e)&&$(e.valueOf())}function F(e){return k(e)||z(e)}function M(e){return"string"==typeof e}c(F,"isPrimitive",k),c(F,"isObject",z);var Z=String.prototype.valueOf;var C=j();function W(e){return"object"==typeof e&&(e instanceof String||(C?function(e){try{return Z.call(e),!0}catch(e){return!1}}(e):"[object String]"===I(e)))}function Y(e){return M(e)||W(e)}function D(e){return e!=e}function U(e){return E(e)&&D(e)}function q(e){return R(e)&&D(e.valueOf())}function B(e){return U(e)||q(e)}function H(e,t,r){var n,o,i;if(!w(e)&&!M(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!k(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(o=r)<0&&(o=0)}else o=0;if(M(e)){if(!M(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==e.indexOf(t,o)}if(n=e.length,U(t)){for(i=o;i<n;i++)if(U(e[i]))return!0;return!1}for(i=o;i<n;i++)if(e[i]===t)return!0;return!1}function J(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}c(Y,"isPrimitive",M),c(Y,"isObject",W),c(B,"isPrimitive",U),c(B,"isObject",q);var K=["posix","win32"];function L(e){if(arguments.length>0&&!H(K,e))throw new Error(J('invalid argument. Must be one of the following: "%s". Value: `%s`.',K.join('", "'),e));return"win32"===e||g?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var Q=g?b:s;c(L,"REGEXP",Q),c(L,"REGEXP_POSIX",s),c(L,"REGEXP_WIN32",b),e.REGEXP=Q,e.REGEXP_POSIX=s,e.REGEXP_WIN32=b,e.default=L,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
