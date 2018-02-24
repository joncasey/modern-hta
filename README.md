# modern-hta

modern-hta bundles [@babel/standalone](https://github.com/babel/babel/tree/master/packages/babel-standalone) and other [polyfills](#polyfills) to run modern code in an [HTML Application (HTA)](https://en.wikipedia.org/wiki/HTML_Application).


## Usage

Sample `hta` file using [cdn](https://unpkg.com/modern-hta/modern-hta.js).
```html
<meta http-equiv="x-ua-compatible" content="ie=11">
<script src="https://unpkg.com/modern-hta">

  import '$.mjs'
  import data from 'data.json'

  log(`Hello World`)

</script>
```

Or, [install](#install) and run locally.

## Install

```
npm install modern-hta
```

```html
<meta http-equiv="x-ua-compatible" content="ie=11">
<script src="node_modules/modern-hta/modern-hta.js">

  log(`Hello World`)

</script>
```

## What's Included...



## Polyfills

* [@babel/polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) - includes Promise, core.js, etc.
* [whatwg-fetch](https://github.com/github/fetch)
* `Array.from` - extended to support [Enumerator](https://msdn.microsoft.com/en-us/library/6ch9zb09(v=vs.84).aspx) and [FileSystemObject Collections](https://msdn.microsoft.com/en-us/library/x75sb7ff(v=vs.84).aspx) 
* `Element.closest()`
* `Element.matches()`
* `NodeList.forEach`

## Globals (to be continued...)

```js
const Babel  // export from @babel/standalone
const script // Element reference to the <script src=modern-hta>
const cwd    // current working directory
const fso    // instance of "Scripting.FileSystemObject"
const sys    // instance of "Wscript.Shell"
const xhr    // instance of "Msxml2.XMLHTTP"

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
  // returns ES Module
}

function transform (code, options) {
  // runs Babel.transform w/presets "es2015", "es2016", "es2017", "stage-0"
  // which "stage-0" also includes "stage-1", "stage-2", "stage-3"
  // for my purposes this always runs synchronously
  // returns transpiledCode
}

function watchFile (file, onchang ) {
  // this intentionally is a quick/dirty-hack version
  // it runs a setTimeout and checks the last modified date
  // just wanted something super-simple & light-weight for now.
  // undefined
}

function windowProps (resize, moveto) {
  // this just simplifies window resizeTo & moveTo calls
  // and, allows them to run as quickly as possible
  // undefined
}
```