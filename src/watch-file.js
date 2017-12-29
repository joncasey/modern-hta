var fso = fso || new ActiveXObject('Scripting.FileSystemObject')

function watchFile (file) {
  var fn = arguments[1] || function () { location.reload() }
  var d = function () { return new Date(fso.GetFile(file).DateLastModified) }
  var c = function () { if (d() > l) fn(l = d()); setTimeout(c, 200) }, l = d(); c()
}
