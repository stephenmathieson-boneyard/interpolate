
var assert = null;
var interpolate = null;

try {
  // node
  assert = require('better-assert');
  interpolate = require('..');
} catch (e) {
  // component
  interpolate = require('interpolate');
  assert = require('assert');
}

describe('interpolate', function () {
  afterEach(function () {
    interpolate.delimiter = [ '{', '}' ];
  });

  it('should interpolate a string', function () {
    assert('hello world' ===
      interpolate('hello {world}', { world: 'world' }));
    assert('hello world' ===
      interpolate('hello {0}', [ 'world' ]));
  });

  it('should handle missing keys', function () {
    assert('hello {world}' ===
      interpolate('hello {world}'));
  });

  it('should allow for custom delimiters', function () {
    interpolate.delimiter = [ '<', '>' ];
    assert('hello world' ===
      interpolate('hello <world>', { world: 'world' }));
  });

  it('should handle multiple matches', function () {
    var killbill =
        'The {l}ead character, ca{l}{l}ed "{bride}", '
      + 'was a member of the Dead{l}y {snake} '
      + 'Assassination Squad, {l}ead by her '
      + '{l}over "{name}".';

    var obj = {
      l: 'l',
      bride: 'The Bride',
      snake: 'Viper',
      name: 'Bill'
    };

    var expected =
        'The lead character, called "The Bride", '
      + 'was a member of the Deadly Viper '
      + 'Assassination Squad, lead by her '
      + 'lover "Bill".';

    assert(expected === interpolate(killbill, obj));
  });
});
