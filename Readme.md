
# interpolate

  Simple interpolation

## Installation

  With [component(1)](http://component.io):

    $ component install stephenmathieson/interpolate

  With npm:

    $ npm install stephenmathieson/interpolate

## API

### `interpolate(str, obj)`

  Interpolate / replace placeholders in `str` with properties from `obj`.

### `interpolate.delimiter`

  Array of head/tail delimiters.  Defaults to `[ '{', '}' ]`, but can be anything.

## Example

```js

var interpolate = require('interpolate');

// object
var obj = { thing: 'World' };
var str = 'Hello {thing}!';

console.log(interpolate(str, obj));
//=> 'Hello World!'

// array
var arr = [ 'World' ];
var str = 'Hello {0}!';
console.log(interpolate(str, arr));
//=> 'Hello World!';

```

## License 

(The MIT License)

Copyright (c) 2014 Stephen Mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.