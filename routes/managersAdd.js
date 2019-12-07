var express = require('express');
var router = express.Router();
let DB=require('../public/mongoose/db')
let db=new DB('market')
/* GET home page. */
router.get('/managersAdd', function(req, res, next) {
  res.render('managersAdd', { title: 'Express' });
});

  router.post('/managersAdd',function(req,res,next){
    db.insert('managers',req.body,ret=>{
      console.log(ret)
      res.render('managersAdd', { title: 'Express' });
    })
  })


module.exports = router;
