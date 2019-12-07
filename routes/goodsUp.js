var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID
let DB=require('../public/mongoose/db')
let db=new DB('market')
/* GET home page. */
// router.get('/managersUp', function(req, res, next) {
//   res.render('managersDel', { title: 'Express' });
// });
router.post('/goodsUp',function(req,res,next){
  let data = req.body._id
  let id = { '_id': ObjectID(data) }
  let json={
    name:req.body.name,
    type:req.body.type,
    date1:req.body.date1,
    units:req.body.units,
    inPrice:req.body.inPrice,
    outPrice:req.body.outPrice,
    counts:req.body.counts,
  }
  db.updata('goods', id,json, ret => {
    res.send(ret)
  })
  // console.log(req.body,'ddd')
  // res.render('managersDel', { title: 'Express' });
})

module.exports = router;
