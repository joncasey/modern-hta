var transform = transform
var useStrict = useStrict || /^"use strict";\s+/

if (window.Babel && !transform) {

  transform = function (code) {
    return Babel.transform(code, {
      presets: ['es2015', 'es2016', 'es2017', ['stage-0', { decoratorsLegacy: true }], 'react'],
      plugins: ['proposal-object-rest-spread']
    }).code.replace(useStrict, '')
  }

}