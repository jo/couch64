var helper = require('./helper')

var sMyInput = 'Base 64 \u2014 Mozilla Developer Network'
var sMyBase64 = 'QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw=='

var shows = {
  encode: function(doc, req) {
    var couch64 = require('couch64')

    var sMyInput = 'Base 64 \u2014 Mozilla Developer Network'
    var aMyUTF8Input = couch64.strToUTF8Arr(sMyInput)
    var sMyBase64 = couch64.base64EncArr(aMyUTF8Input)

    return sMyBase64
  },
  decode: function(doc, req) {
    var couch64 = require('couch64')

    var sMyBase64 = 'QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw=='
    var aMyUTF8Output = couch64.base64DecToArr(sMyBase64)
    var sMyOutput = couch64.UTF8ArrToStr(aMyUTF8Output)

    return sMyOutput
  }
}

helper.test('encode', shows, function(t, db) {
  db.show('couch64', 'encode', 'doc-id', function(err, doc) {
    t.ok(!err, 'no error has been occured while running the show function')
    t.equal(doc, sMyBase64, 'UTF-8 string has been encoded to base64')
    t.end()
  })
})

helper.test('decode', shows, function(t, db) {
  db.show('couch64', 'decode', 'doc-id', function(err, doc) {
    t.ok(!err, 'no error has been occured while running the show function')
    t.equal(doc, sMyInput, 'base64 has been decoded to UTF-8 string')
    t.end()
  })
})
