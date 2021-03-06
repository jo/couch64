# couch64
Handle base64 encoding and decoding inside CouchDB (and node) using typed arrays.

[![Build Status](https://travis-ci.org/jo/couch64.svg?branch=master)](https://travis-ci.org/jo/couch64)

The code comes from Mozilla:
```js
/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
|*|
\*/
```

## Usage:
```js
var couch64 = require('couch64')

var sMyInput = "Base 64 \u2014 Mozilla Developer Network"

var aMyUTF8Input = couch64.strToUTF8Arr(sMyInput)
var sMyBase64 = couch64.base64EncArr(aMyUTF8Input)
log(sMyBase64)

var aMyUTF8Output = couch64.base64DecToArr(sMyBase64)
var sMyOutput = couch64.UTF8ArrToStr(aMyUTF8Output)
log(sMyOutput)
```

## API
### `base64EncArr(aBytes)`
Array of bytes to base64 string decoding

### `base64DecToArr(sBase64, nBlocksSize)`
Base64 string to UTF-8 array encoding

### `UTF8ArrToStr(aBytes)`
UTF-8 array to DOMString

### `strToUTF8Arr(sDOMStr)`
DOMString to UTF-8 array


## License
All the code coming from
[Base64 encoding and decoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding)
by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding$history)
is licensed under [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/) (as well as the little rest)

(c) 2014 Johannes J. Schmidt
