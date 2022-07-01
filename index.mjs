// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s,{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname-posix@esm/index.mjs";export{REGEXP as REGEXP_POSIX}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname-posix@esm/index.mjs";import n,{REGEXP as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname-windows@esm/index.mjs";export{REGEXP as REGEXP_WIN32}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var m=["posix","win32"];function p(e){if(arguments.length>0&&!d(m,e))throw new Error(o('invalid argument. Must be one of the following: "%s". Value: `%s`.',m.join('", "'),e));return"win32"===e||r?n():s()}e(p,"REGEXP",r?i:t),e(p,"REGEXP_POSIX",t),e(p,"REGEXP_WIN32",i);export{p as default};
//# sourceMappingURL=index.mjs.map
