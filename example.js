
var interpolate = require('./');

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
