// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,f&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=f,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=g;var m=function(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/},d=m;h(d,"REGEXP",m());var w=d;var b=function(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/},y=b;h(y,"REGEXP",b());var E=y,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function T(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}var j=T,O=_;function x(r){if(j===setTimeout)return setTimeout(r,0);if((j===T||!j)&&setTimeout)return j=setTimeout,setTimeout(r,0);try{return j(r,0)}catch(e){try{return j.call(null,r,0)}catch(e){return j.call(this,r,0)}}}"function"==typeof P.setTimeout&&(j=setTimeout),"function"==typeof P.clearTimeout&&(O=clearTimeout);var S,V=[],k=!1,R=-1;function I(){k&&S&&(k=!1,S.length?V=S.concat(V):R=-1,V.length&&A())}function A(){if(!k){var r=x(I);k=!0;for(var e=V.length;e;){for(S=V,V=[];++R<e;)S&&S[R].run();R=-1,e=V.length}S=null,k=!1,function(r){if(O===clearTimeout)return clearTimeout(r);if((O===_||!O)&&clearTimeout)return O=clearTimeout,clearTimeout(r);try{O(r)}catch(e){try{return O.call(null,r)}catch(e){return O.call(this,r)}}}(r)}}function G(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];V.push(new N(r,e)),1!==V.length||k||x(A)}function N(r,e){this.fun=r,this.array=e}N.prototype.run=function(){this.fun.apply(null,this.array)};var X={},$=[],M={},F={},L={};function C(){}var B=C,W=C,Z=C,z=C,D=C,U=C,Y=C;function q(r){throw new Error("process.binding is not supported")}function H(){return"/"}function J(r){throw new Error("process.chdir is not supported")}function K(){return 0}var Q=P.performance||{},rr=Q.now||Q.mozNow||Q.msNow||Q.oNow||Q.webkitNow||function(){return(new Date).getTime()};function er(r){var e=.001*rr.call(Q),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var tr=new Date;function nr(){return(new Date-tr)/1e3}var ir={nextTick:G,title:"browser",browser:true,env:X,argv:$,version:"",versions:M,on:B,addListener:W,once:Z,off:z,removeListener:D,removeAllListeners:U,emit:Y,binding:q,cwd:H,chdir:J,umask:K,hrtime:er,platform:"browser",release:F,config:L,uptime:nr},or="win32"===r(Object.freeze({__proto__:null,addListener:W,argv:$,binding:q,browser:true,chdir:J,config:L,cwd:H,default:ir,emit:Y,env:X,hrtime:er,nextTick:G,off:z,on:B,once:Z,platform:"browser",release:F,removeAllListeners:U,removeListener:D,title:"browser",umask:K,uptime:nr,version:"",versions:M})).platform,ar=Math.floor;var ur=function(r){return ar(r)===r},cr=ur;var sr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&cr(r.length)&&r.length>=0&&r.length<=9007199254740991};var fr=function(r){return"number"==typeof r};var lr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var vr=function(){return lr&&"symbol"==typeof Symbol.toStringTag},pr=Object.prototype.toString,gr=pr;var hr=function(r){return gr.call(r)},mr=Object.prototype.hasOwnProperty;var dr=function(r,e){return null!=r&&mr.call(r,e)},wr="function"==typeof Symbol?Symbol.toStringTag:"",br=dr,yr=wr,Er=pr;var Pr=hr,Tr=function(r){var e,t,n;if(null==r)return Er.call(r);t=r[yr],e=br(r,yr);try{r[yr]=void 0}catch(e){return Er.call(r)}return n=Er.call(r),e?r[yr]=t:delete r[yr],n},_r=vr()?Tr:Pr,jr=Number,Or=jr.prototype.toString;var xr=_r,Sr=jr,Vr=function(r){try{return Or.call(r),!0}catch(r){return!1}},kr=vr();var Rr=function(r){return"object"==typeof r&&(r instanceof Sr||(kr?Vr(r):"[object Number]"===xr(r)))},Ir=fr,Ar=Rr;var Gr=h,Nr=function(r){return Ir(r)||Ar(r)},Xr=Rr;Gr(Nr,"isPrimitive",fr),Gr(Nr,"isObject",Xr);var $r=Nr,Mr=Number.POSITIVE_INFINITY,Fr=jr.NEGATIVE_INFINITY,Lr=Mr,Cr=Fr,Br=ur;var Wr=function(r){return r<Lr&&r>Cr&&Br(r)},Zr=$r.isPrimitive,zr=Wr;var Dr=function(r){return Zr(r)&&zr(r)},Ur=$r.isObject,Yr=Wr;var qr=function(r){return Ur(r)&&Yr(r.valueOf())},Hr=Dr,Jr=qr;var Kr=h,Qr=function(r){return Hr(r)||Jr(r)},re=qr;Kr(Qr,"isPrimitive",Dr),Kr(Qr,"isObject",re);var ee=Qr;var te=function(r){return"string"==typeof r},ne=String.prototype.valueOf;var ie=_r,oe=function(r){try{return ne.call(r),!0}catch(r){return!1}},ae=vr();var ue=function(r){return"object"==typeof r&&(r instanceof String||(ae?oe(r):"[object String]"===ie(r)))},ce=te,se=ue;var fe=h,le=function(r){return ce(r)||se(r)},ve=ue;fe(le,"isPrimitive",te),fe(le,"isObject",ve);var pe=le;var ge=function(r){return r!=r},he=$r.isPrimitive,me=ge;var de=function(r){return he(r)&&me(r)},we=$r.isObject,be=ge;var ye=function(r){return we(r)&&be(r.valueOf())},Ee=de,Pe=ye;var Te=h,_e=function(r){return Ee(r)||Pe(r)},je=ye;Te(_e,"isPrimitive",de),Te(_e,"isObject",je);var Oe=sr,xe=ee.isPrimitive,Se=pe.isPrimitive,Ve=_e.isPrimitive;var ke=function(r,e,t){var n,i,o;if(!Oe(r)&&!Se(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!xe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Se(r)){if(!Se(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ve(e)){for(o=i;o<n;o++)if(Ve(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Re=pe.isPrimitive;var Ie=function(r){if(!Re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ae=pe.isPrimitive;var Ge=function(r){if(!Ae(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ne=Ie,Xe=Ge,$e=pe.isPrimitive;var Me=function(r){return $e(r)&&r===Xe(r)&&r!==Ne(r)},Fe=Mr,Le=Fr;var Ce=function(r){return r==r&&r>Le&&r<Fe},Be=ee.isPrimitive;var We=function(r){return Be(r)&&r>=0},Ze=ee.isObject;var ze=function(r){return Ze(r)&&r.valueOf()>=0},De=We,Ue=ze;var Ye=h,qe=function(r){return De(r)||Ue(r)},He=ze;Ye(qe,"isPrimitive",We),Ye(qe,"isObject",He);var Je=qe.isPrimitive,Ke=pe.isPrimitive;var Qe=function(r,e){var t,n;if(!Ke(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Je(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},rt=ee.isPrimitive,et=pe.isPrimitive;var tt=Qe,nt=function(r,e,t){var n,i;if(!et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!et(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!rt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var it=function(r,e,t){var n=!1,i=e-r.length;return i<0||(nt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+tt("0",i):tt("0",i)+r,n&&(r="-"+r)),r},ot=Me,at=Ge,ut=Ie,ct=Ce,st=$r.isPrimitive,ft=it;var lt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ct(n)){if(!st(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ft(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ft(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ot(r.specifier)?at(t):ut(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},vt=pe.isPrimitive,pt=/[-\/\\^$*+?.()|[\]{}]/g;var gt=function(r){var e,t;if(!vt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(pt,"\\$&"):(e=(e=r.substring(1,t)).replace(pt,"\\$&"),r=r[0]+e+r.substring(t))},ht=/./;var mt=function(r){return"boolean"==typeof r},dt=Boolean.prototype.toString;var wt=_r,bt=function(r){try{return dt.call(r),!0}catch(r){return!1}},yt=vr();var Et=function(r){return"object"==typeof r&&(r instanceof Boolean||(yt?bt(r):"[object Boolean]"===wt(r)))},Pt=mt,Tt=Et;var _t=h,jt=function(r){return Pt(r)||Tt(r)},Ot=Et;_t(jt,"isPrimitive",mt),_t(jt,"isObject",Ot);var xt="object"==typeof self?self:null,St="object"==typeof window?window:null,Vt=jt.isPrimitive,kt=function(){return new Function("return this;")()},Rt=xt,It=St,At=r(Object.freeze({__proto__:null}));var Gt=function(r){if(arguments.length){if(!Vt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return kt()}if(Rt)return Rt;if(It)return It;if(At)return At;throw new Error("unexpected error. Unable to resolve global object.")},Nt=Gt(),Xt=Nt.document&&Nt.document.childNodes,$t=Int8Array,Mt=ht,Ft=Xt,Lt=$t;var Ct=function(){return"function"==typeof Mt||"object"==typeof Lt||"function"==typeof Ft};var Bt=function(){return/^\s*function\s*([^(]*)/i},Wt=Bt;h(Wt,"REGEXP",Bt());var Zt=Wt,zt=_r;var Dt=Array.isArray?Array.isArray:function(r){return"[object Array]"===zt(r)};var Ut=function(r){return null!==r&&"object"==typeof r};h(Ut,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Dt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ut));var Yt=Ut;var qt=_r,Ht=Zt.REGEXP,Jt=function(r){return Yt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Kt=function(r){var e,t,n;if(("Object"===(t=qt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ht.exec(n.toString()))return e[1]}return Jt(r)?"Buffer":t},Qt=Kt;var rn=Kt;var en=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Qt(r).toLowerCase():e},tn=function(r){return rn(r).toLowerCase()},nn=Ct()?tn:en;var on=function(r){return"function"===nn(r)},an=RegExp.prototype.exec;var un=_r,cn=function(r){try{return an.call(r),!0}catch(r){return!1}},sn=vr();var fn=gt,ln=on,vn=pe.isPrimitive,pn=function(r){return"object"==typeof r&&(r instanceof RegExp||(sn?cn(r):"[object RegExp]"===un(r)))};var gn=Me,hn=Ge,mn=Ie,dn=function(r,e,t){if(!vn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(vn(e))e=fn(e),e=new RegExp(e,"g");else if(!pn(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!vn(t)&&!ln(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},wn=Ce,bn=$r.isPrimitive,yn=function(r){return Math.abs(r)},En=/e\+(\d)$/,Pn=/e-(\d)$/,Tn=/^(\d+)$/,_n=/^(\d+)e/,jn=/\.0$/,On=/\.0*e/,xn=/(\..*[^0])0*e/;var Sn=function(r){var e,t,n=parseFloat(r.arg);if(!wn(n)){if(!bn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":yn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=dn(t,xn,"$1e"),t=dn(t,On,"e"),t=dn(t,jn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dn(t,En,"e+0$1"),t=dn(t,Pn,"e-0$1"),r.alternate&&(t=dn(t,Tn,"$1."),t=dn(t,_n,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=gn(r.specifier)?hn(t):mn(t)},Vn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var kn=Qe;var Rn=pe.isPrimitive,In=ke,An=ge,Gn=lt,Nn=Sn,Xn=function(r){var e,t,n,i,o;for(e=0,n=[],o=Vn.exec(r);o;)(t=r.slice(e,Vn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Vn.lastIndex,o=Vn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},$n=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+kn(" ",n):kn(" ",n)+r},Mn=it,Fn=String.fromCharCode;var Ln=ke,Cn=function(r){var e,t,n,i,o,a,u,c,s;if(!Rn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Xn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Rn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!In(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,An(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,An(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Gn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!An(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=An(o)?String(n.arg):Fn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Nn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Mn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$n(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Bn=w,Wn=E,Zn=or,zn=["posix","win32"];var Dn=function(r){if(arguments.length>0&&!Ln(zn,r))throw new Error(Cn("invalid argument. Platform must be either `posix` or `win32`. Value: `%s`.",r));return"win32"===r||Zn?Wn():Bn()},Un=h,Yn=w.REGEXP,qn=E.REGEXP,Hn=Dn;Un(Hn,"REGEXP",or?qn:Yn),Un(Hn,"REGEXP_POSIX",Yn),Un(Hn,"REGEXP_WIN32",qn);var Jn=Hn;export{Yn as REGEXP_POSIX,qn as REGEXP_WIN32,Jn as default};
//# sourceMappingURL=mod.js.map
