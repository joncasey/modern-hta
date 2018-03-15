
function windowProps (r, m) {
  var x = function (s) {
    return s.replace(/w/g, screen.availWidth).replace(/h/g, screen.availHeight)
            .split(' ').map(function (v) { return Function('return ' + v)() })
  }
  if (r) {
    r = x(r)
    resizeTo(r[0], r[1])
  } else r = [0, 0]
  if (m) {
    m = m
      .replace(/^c$/, 'c c')
      .replace(/^c /, '(w-' + r[0] + ')/2 ')
      .replace(/ c$/, ' (h-' + r[1] + ')/2')
    m = x(m)
    moveTo(m[0], m[1])
  }
}

