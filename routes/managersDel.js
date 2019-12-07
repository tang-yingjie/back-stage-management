var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID
let DB=require('../public/mongoose/db')
let db=new DB('market')
/* GET home page. */
router.get('/managersDel', function(req, res, next) {
  res.render('managersDel', { title: 'Express' });
});
router.post('/managersDel',function(req,res,next){
  let data = req.body._id
  let id = { '_id': ObjectID(data) }
  db.delete('managers', id, ret => {
    res.send(ret)
  })
  // console.log(req.body,'ddd')
  // res.render('managersDel', { title: 'Express' });
})

module.exports = router;
