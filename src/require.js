require.cache = {}
require.path = cwd

function require (src, path) {

  if (!path) {
    path = require.path
  }

  if (src.indexOf(':') === -1) {
    src = path + '/' + src
  }

  var re1 = /\/.\//g
  var re2 = /([^\\\/]+[\\{2}\/]\.{2}[\\{2}\/]?)/
  src = src.replace(/\\/g, '/').replace(re1, '/')
  while (re2.test(src)) src = src.replace(re2, '')
  path = src.split('/').slice(0, -1).join('/')

  if (src in require.cache) {
    return require.cache[src].exports
  }

  var code
  var exports = {}

  try {

    code = getSync(src)

    if (/\.json$/i.test(src)) {
      exports = JSON.parse(code)
    }

    else {
      code = transform(code)
      Function('exports', 'require', code)
      (exports, function (src) { require(src, path) })
    }

  } catch (e) {
    log('require(' + src + ') error = ' + e)
  }

  require.cache[src] = {
    code: code,
    exports: exports
  }

  return exports

}
