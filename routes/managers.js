var express = require('express');
var router = express.Router();
var DB=require('../public/mongoose/db')
let db = new DB('market')

/* GET home page. */
router.get('/managers', function(req, res, next) {
  db.find('managers',{},ret=>{
    // console.log(ret,'managers')
    // res.render('managers', { title: 'Express' });
    res.send(ret)
  })
  
  });
module.exports = router;
