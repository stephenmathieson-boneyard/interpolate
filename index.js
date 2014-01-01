
module.exports = interpolate;

/**
 * Interpolate placeholders in `str` with
 * properties of `obj`.
 *
 * @api public
 * @param {String} str
 * @param {Object|Array} obj
 */

function interpolate(str, obj) {
  if (!obj) return str;
  var head = escape(interpolate.delimiter[0]);
  var tail = escape(interpolate.delimiter[1]);
  var regex = new RegExp(head + '([^}{]+)' + tail, 'g');
  return str.replace(regex, function (match, name) {
    var index = Number(name);
    if (isNaN(index)) {
      return null == obj[name]
        ? match
        : obj[name];
    }
    return index < obj.length
      ? obj[index]
      : match;
  });
}

interpolate.delimiter = [ '{', '}' ];

/**
 * Escape special RegExp characters in `str`
 *
 * @api private
 * @param {String} str
 * @return {String}
 */

function escape(str) {
  return str.replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
}
