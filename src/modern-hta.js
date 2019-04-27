if (!document.title) {
  document.title = unescape(location.href)
  .split('/').pop().replace(/\.hta$/i, '')
}

if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

var log = log || function (v) { console.log(v) }

var script = script || document.scripts[document.scripts.length - 1]

if (window.watchFile) {
  watchFile(location.pathname.substr(1))
}

if (script && window.windowProps) {
  windowProps(
    script.getAttribute('resize'),
    script.getAttribute('moveto')
  )
}

if (script.text) {
  addEventListener('DOMContentLoaded', function () {
    var t = window.transform || function (s) { return s }
    try {
      var code = t(script.text)
      if (t.eval) t.eval(code)
      else window.eval(code)
    }
    catch (e) {
      log(e)
    }
  })
}
