<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reExtname

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][regexp] to capture a filename extension.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-extname
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reExtname = require( '@stdlib/regexp-extname' );
```

#### reExtname( \[platform] )

Returns a [regular expression][regexp] to capture a filename extension.

```javascript
var RE = reExtname();
// returns <RegExp>

RE = reExtname( 'posix' );
// returns <RegExp>

var ext = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'

RE = reExtname( 'win32' );
// returns <RegExp>

ext = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns '.js'
```

#### reExtname.REGEXP

[Regular expression][regexp] to capture a filename extension.

```javascript
var bool = ( reExtname.REGEXP.toString() === reExtname().toString() );
// returns true
```

#### reExtname.REGEXP_POSIX

[Regular expression][@stdlib/regexp/extname-posix] to capture a [POSIX][posix] filename extension.

```javascript
var ext = reExtname.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'
```

#### reExtname.REGEXP_WIN32

[Regular expression][@stdlib/regexp/extname-windows] to capture a Windows filename extension.

```javascript
var ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns '.js'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reExtname = require( '@stdlib/regexp-extname' );
var RE_EXTNAME = reExtname();
var ext;

// Assuming a POSIX platform...
ext = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'

ext = reExtname.REGEXP_WIN32.exec( '/foo/bar/home.html' )[ 1 ];
// returns '.html'

ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns '.html'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp-extname-posix`][@stdlib/regexp/extname-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a POSIX filename extension.</span>
-   <span class="package-name">[`@stdlib/regexp-extname-windows`][@stdlib/regexp/extname-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture a Windows filename extension.</span>
-   <span class="package-name">[`@stdlib/utils-extname`][@stdlib/utils/extname]</span><span class="delimiter">: </span><span class="description">return a filename extension.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-extname.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-extname

[test-image]: https://github.com/stdlib-js/regexp-extname/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-extname/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-extname/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-extname?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-extname.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-extname/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-extname/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-extname/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-extname/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-extname/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-extname/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-extname/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-extname/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-extname/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/extname-posix]: https://github.com/stdlib-js/regexp-extname-posix

[@stdlib/regexp/extname-windows]: https://github.com/stdlib-js/regexp-extname-windows

[@stdlib/utils/extname]: https://github.com/stdlib-js/utils-extname

<!-- </related-links> -->

</section>

<!-- /.links -->
