const assert = require('assert')

module.exports = Streamdir

function Streamdir (opts) {
  if (!(this instanceof Streamdir)) return new Streamdir(opts)

  opts = opts || {}

  assert.equal(typeof opts, 'object', 'stream-directory: opts should be an object')

  this.cache = {}
  this.opts = opts
}

Streamdir.prototype.get = function (filename) {
}
