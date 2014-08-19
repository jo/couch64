var test = require('tap').test
var nano = require('nano')
var fs = require('fs')

var url   = exports.url   = process.env.COUCH || 'http://localhost:5984'
var couch = exports.couch = nano(url)

exports.test = function(desc, shows, callback) {
  test(desc, function(t) {
    var name = 'couch64-test-' + Math.round(Math.random() * 100000)
    var db = couch.use(name)

    var ddoc = {
      _id: '_design/couch64',
      couch64: fs.readFileSync(__dirname + '/../couch64.js', 'utf-8'),
      shows: shows
    }

    couch.db.destroy(name, function() {
      couch.db.create(name, function() {
        db.insert(ddoc, ddoc._id, function(err) {
          t.ok(!err, 'the design document has been inserted without an error')

          t.on('end', function() {
            couch.db.destroy(name)
          })

          callback(t, db)
        })
      })
    })
  })
}
