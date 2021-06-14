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

# Filename Extension

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Regular expression][regexp] to capture a filename extension.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-extname
```

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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-extname.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-extname

[test-image]: https://github.com/stdlib-js/regexp-extname/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/regexp-extname/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-extname/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-extname?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-extname
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-extname/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-extname/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

[@stdlib/regexp/extname-posix]: https://github.com/stdlib-js/regexp-extname-posix

[@stdlib/regexp/extname-windows]: https://github.com/stdlib-js/regexp-extname-windows

</section>

<!-- /.links -->
