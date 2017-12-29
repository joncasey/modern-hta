!function () {

  var prev = Array.from

  var from = function (v) {

    if (v && typeof v.item === 'unknown') {
      v = new Enumerator(v)
    }

    if (v instanceof Enumerator) {
      var a = []
      for (; !v.atEnd(); v.moveNext()) {
        a.push(v.item())
      }
      return a
    }

    if (prev)
      return prev(v)
    else
      return Array.prototype.slice.call(v)

  }

  from.toString = function () {
    return prev.toString()
  }

  Array.from = from

}();