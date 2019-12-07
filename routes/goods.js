var express = require('express');
var router = express.Router();
var DB=require('../public/mongoose/db')
let db=new DB('market')

/* GET home page. */
router.get('/goods', function(req, res, next) {
db.find('goods',{},ret=>{
  // console.log(ret,'goods')
  // res.render('goods', { title: 'Express' });
  res.send(ret)
})

});

module.exports = router;
