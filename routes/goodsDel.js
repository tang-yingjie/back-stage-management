var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID
let DB=require('../public/mongoose/db')
let db=new DB('market')
/* GET home page. */
router.get('/goodsDel', function(req, res, next) {
  res.render('goodsDel', { title: 'Express' });
});
router.post('/goodsDel',function(req,res,next){
  let data = req.body._id
  let id = { '_id': ObjectID(data) }
  db.delete('goods', id, ret => {
    res.send(ret)
  })
})

module.exports = router;
