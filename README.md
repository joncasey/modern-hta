# modern-hta

Bringing modern code to the HTML Application (HTA).


## Install

```
npm install modern-hta
```

## Usage

Sample `modern.hta` file.

```html
<meta http-equiv="x-ua-compatible" content="ie=11">
<script src="https://unpkg.com/modern-hta">

  log(`Hello World`)

</script>
```

## Polyfills

* [@babel/polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) - includes Promise, core.js, etc.
* [whatwg-fetch](https://github.com/github/fetch)
* `Array.from` - extended to support `fso` collections & `Enumerator`
* `Element.closest()`
* `Element.matches()`
* `NodeList.forEach`

## Globals

```js
const Babel  // babel-standalone
const script // ref to <script>
const cwd    // current working directory
const fso    // ActiveXObject "Scripting.FileSystemObject"
const sys    // ActiveXObject "Wscript.Shell"
const xhr    // ActiveXObject "Msxml2.XMLHTTP"

function create (tag, html) {
  // returns Element
}

function getSync (url) {
  // returns xhr.responseText
}

function log (any) {
  // returns HTMLDivElement
}

function require (src) {
  // returns ESModule
}

function transform (code, options) {
  // returns transpiledCode
}

function watchFile (file, onchang ) {
  // undefined
}

function windowProps (resize, moveto) {
  // undefined
}
```