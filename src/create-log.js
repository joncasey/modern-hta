
function create (tag, html) {
  var tokens = tag.split('.')
  var to = (this && this.nodeName ? this : document.body)
  var el = to.ownerDocument.createElement(tokens.shift())
  if (tokens.length > 0) {
    el.className = tokens.join(' ')
  }
  if (arguments.length > 1) {
    el.innerHTML = [].concat(html).join('\n')
  }
  return to.appendChild(el)
}

function log (v) {
  var t = Object.prototype.toString.call(v).slice(8, -1)
  var to = (this && this.nodeName ? this : log.to)
  if (!to) to = log.to = create('pre.log')
  var el = create.call(to, 'div.log_line')
  if (log[t]) v = log[t](v)
  el.textContent = v
  return el
}

log.clear = function () {
  if (log.to) {
    log.to.textContent = ''
    log.to.scrollTop = 0
  }
}

log.Array = function (v) {
  return v.join('\n')
}

log.Element = log.XMLDocument = function (v) {
  return new XMLSerializer().serializeToString(v)
}

log.Object = function (v) {
  return JSON.stringify(v, null, 2)
}
