// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reExtname=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,S=isNaN,j=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,s,l,f,p;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(c(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function $(e){var r,t,n;if(!V(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var A=Object.prototype,N=A.toString,F=A.__defineGetter__,R=A.__defineSetter__,G=A.__lookupGetter__,L=A.__lookupSetter__;var M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function X(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var C=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function z(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}X(Z,"REGEXP",C);var W=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}X(z,"REGEXP",W);var U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Y(){throw new Error("setTimeout has not been defined")}function q(){throw new Error("clearTimeout has not been defined")}var B=Y,H=q;function J(e){if(B===setTimeout)return setTimeout(e,0);if((B===Y||!B)&&setTimeout)return B=setTimeout,setTimeout(e,0);try{return B(e,0)}catch(r){try{return B.call(null,e,0)}catch(r){return B.call(this,e,0)}}}"function"==typeof U.setTimeout&&(B=setTimeout),"function"==typeof U.clearTimeout&&(H=clearTimeout);var K,Q=[],ee=!1,re=-1;function te(){ee&&K&&(ee=!1,K.length?Q=K.concat(Q):re=-1,Q.length&&ne())}function ne(){if(!ee){var e=J(te);ee=!0;for(var r=Q.length;r;){for(K=Q,Q=[];++re<r;)K&&K[re].run();re=-1,r=Q.length}K=null,ee=!1,function(e){if(H===clearTimeout)return clearTimeout(e);if((H===q||!H)&&clearTimeout)return H=clearTimeout,clearTimeout(e);try{H(e)}catch(r){try{return H.call(null,e)}catch(r){return H.call(this,e)}}}(e)}}function ie(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Q.push(new oe(e,r)),1!==Q.length||ee||J(ne)}function oe(e,r){this.fun=e,this.array=r}oe.prototype.run=function(){this.fun.apply(null,this.array)};var ae="browser",ue="browser",ce={},se=[],le={},fe={},pe={};function ge(){}var de=ge,he=ge,ve=ge,me=ge,we=ge,be=ge,ye=ge;function Ee(e){throw new Error("process.binding is not supported")}function _e(){return"/"}function Te(e){throw new Error("process.chdir is not supported")}function Se(){return 0}var je=U.performance||{},ke=je.now||je.mozNow||je.msNow||je.oNow||je.webkitNow||function(){return(new Date).getTime()};function xe(e){var r=.001*ke.call(je),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Oe=new Date;function Pe(){return(new Date-Oe)/1e3}var Ie={nextTick:ie,title:ae,browser:true,env:ce,argv:se,version:"",versions:le,on:de,addListener:he,once:ve,off:me,removeListener:we,removeAllListeners:be,emit:ye,binding:Ee,cwd:_e,chdir:Te,umask:Se,hrtime:xe,platform:ue,release:fe,config:pe,uptime:Pe},Ve="win32"===D(Object.freeze({__proto__:null,addListener:he,argv:se,binding:Ee,browser:true,chdir:Te,config:pe,cwd:_e,default:Ie,emit:ye,env:ce,hrtime:xe,nextTick:ie,off:me,on:de,once:ve,platform:ue,release:fe,removeAllListeners:be,removeListener:we,title:ae,umask:Se,uptime:Pe,version:"",versions:le})).platform,$e=Math.floor;function Ae(e){return $e(e)===e}function Ne(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ae(e.length)&&e.length>=0&&e.length<=9007199254740991}function Fe(e){return"number"==typeof e}var Re="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Ge(){return Re&&"symbol"==typeof Symbol.toStringTag}var Le=Object.prototype.toString;var Me=Object.prototype.hasOwnProperty;var Xe="function"==typeof Symbol?Symbol:void 0,Ze="function"==typeof Xe?Xe.toStringTag:"";var Ce=Ge()?function(e){var r,t,n,i,o;if(null==e)return Le.call(e);t=e[Ze],o=Ze,r=null!=(i=e)&&Me.call(i,o);try{e[Ze]=void 0}catch(r){return Le.call(e)}return n=Le.call(e),r?e[Ze]=t:delete e[Ze],n}:function(e){return Le.call(e)},ze=Number,We=ze.prototype.toString;var De=Ge();function Ue(e){return"object"==typeof e&&(e instanceof ze||(De?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Ce(e)))}function Ye(e){return Fe(e)||Ue(e)}X(Ye,"isPrimitive",Fe),X(Ye,"isObject",Ue);var qe=Number.POSITIVE_INFINITY,Be=ze.NEGATIVE_INFINITY;function He(e){return e<qe&&e>Be&&Ae(e)}function Je(e){return Fe(e)&&He(e)}function Ke(e){return Ue(e)&&He(e.valueOf())}function Qe(e){return Je(e)||Ke(e)}function er(e){return"string"==typeof e}X(Qe,"isPrimitive",Je),X(Qe,"isObject",Ke);var rr=String.prototype.valueOf;var tr=Ge();function nr(e){return"object"==typeof e&&(e instanceof String||(tr?function(e){try{return rr.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ce(e)))}function ir(e){return er(e)||nr(e)}function or(e){return e!=e}function ar(e){return Fe(e)&&or(e)}function ur(e){return Ue(e)&&or(e.valueOf())}function cr(e){return ar(e)||ur(e)}function sr(e,r,t){var n,i,o;if(!Ne(e)&&!er(e))throw new TypeError($("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!Je(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(er(e)){if(!er(r))throw new TypeError($("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,ar(r)){for(o=i;o<n;o++)if(ar(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}X(ir,"isPrimitive",er),X(ir,"isObject",nr),X(cr,"isPrimitive",ar),X(cr,"isObject",ur);var lr=["posix","win32"];function fr(e){if(arguments.length>0&&!sr(lr,e))throw new Error($('invalid argument. Must be one of the following: "%s". Value: `%s`.',lr.join('", "'),e));return"win32"===e||Ve?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}return X(fr,"REGEXP",Ve?W:C),X(fr,"REGEXP_POSIX",C),X(fr,"REGEXP_WIN32",W),fr}));
//# sourceMappingURL=browser.js.map
