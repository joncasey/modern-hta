!function () {

  toFunc('Event', function (e, type, init) {
    e.initEvent(type, init.bubbles, init.cancelable)
  })

  toFunc('CustomEvent', function (e, type, init) {
    e.initCustomEvent(type, init.bubbles, init.cancelable, init.detail)
  })

  function toFunc (name, fn) {
    var object = window[name]

    var func = function (type, init) {
      if (!type) throw new TypeError(name + '(type) was not defined.')
      var e = document.createEvent(name)
      fn(e, type, init || { bubbles: false, cancelable: false })
      return e
    }

    func.prototype = object.prototype

    func.toString = function () {
      return 'function ' + name +
        '() {\n    [native code]\n}\n'
    }

    return window[name] = func
  }

}()