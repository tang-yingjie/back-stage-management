var express = require('express');
var router = express.Router();
var DB=require('../public/mongoose/db')
let db = new DB('market')

/* GET home page. */
router.get('/goodsAdd', function(req, res, next) {
  res.render('goodsAdd', { title: 'Express' });
});
router.post('/goodsAdd',function(req,res,next){
  db.insert('goods',req.body,ret=>{
    console.log(ret)
    res.render('goodsAdd', { title: 'Express' });
  })
})

module.exports = router;
