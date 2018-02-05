var fso = new ActiveXObject('Scripting.FileSystemObject')
var xhr = new ActiveXObject('Msxml2.XMLHTTP.6.0')
var sys = new ActiveXObject('Wscript.Shell')
var cwd = sys.CurrentDirectory

function getSync (url) {
  if (!/:/.test(url) && !/^\\{2}/.test(url)) {
    url = cwd + '/' + url
  }
  xhr.open('GET', url, false)
  xhr.send()
  return xhr.responseText
}
