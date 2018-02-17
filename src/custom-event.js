!function () {

  var toFunc = function (name, initFn) {
    var func = function (type, init) {
      if (!type) throw new TypeError(name + '(type) was not defined.')
      var event = document.createEvent(name)
      initFn(event, type, init || { bubbles: false, cancelable: false })
      return event
    }
    func.prototype = window[name].prototype

    var origPreventDefault = func.prototype.preventDefault
    func.prototype.preventDefault = function () {
      origPreventDefault.call(this)
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () { return true }
        })
      }
      catch (e) {
        this.defaultPrevented = true
      }
    }

    func.toString = function () {
      return 'function ' + name + '() {\n    [native code]\n}\n'
    }
    window[name] = func
  }

  toFunc('Event', function (e, type, init) {
    e.initEvent(type, init.bubbles, init.cancelable)
  })

  toFunc('CustomEvent', function (e, type, init) {
    e.initCustomEvent(type, init.bubbles, init.cancelable, init.detail)
  })

  toFunc('MouseEvent', function (e, type, init) {
    e.initMouseEvent(
      type, init.bubbles, init.cancelable, init.view, init.detail,
      init.screenX, init.screenY, init.clientX, init.clientY,
      init.ctrlKey, init.altKey, init.shiftKey, init.metaKey,
      init.button, init.relatedTarget
    )
  })

  toFunc('PointerEvent', function (e, type, init) {
    e.initPointerEvent(
      type, init.bubbles, init.cancelable, init.view, init.detail,
      init.screenX, init.screenY, init.clientX, init.clientY,
      init.ctrlKey, init.altKey, init.shiftKey, init.metaKey,
      init.button, init.relatedTarget,
      init.offsetX, init.offsetY, init.width, init.height,
      init.pressure, init.rotation, init.tiltX, init.tiltY,
      init.pointerId, init.pointerType,
      init.hwTimestamp, init.isPrimary
    )
  })

}()