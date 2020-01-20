var express = require('express');
var router = express.Router();

/* mongodb connectie */
var MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if(err) return console.log(err);
    db = database.db('exam');
})

/* GET home page. */
router.get('/', (req, res) => {
  db.collection('students').find().sort({naam:1}).toArray((err, result) => {
      if(err) return console.log(err);
      res.render('students.ejs', {studenten: result});
  })
})

module.exports = router;
