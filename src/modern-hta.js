if (!document.title) {
  document.title = unescape(location.href)
  .split('/').pop().replace(/\.hta$/i, '')
}

if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

var log = log || function (v) { console.log(v) }

var script = script || document.scripts[document.scripts.length - 1]

var transform = transform || function (code) { return code }

if (window.Babel) {
  transform = function (code) {
    return Babel.transform(code, {
      presets: ['es2015', 'es2016', 'es2017', ['stage-0', {decoratorsLegacy:true}]]
    }).code.replace(/^"use strict";\s+/, '')
  }
}

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
    try { window.eval(transform(script.text)) }
    catch (e) { log(e) }
  })
}
