
Element.prototype.matches = Element.prototype.msMatchesSelector

Element.prototype.closest = function closest(selector) {
  for (var p = this; p != null; p = p.parentElement) {
    if (p.matches(selector)) return p
  }
}
