var express = require('express');
var router = express.Router();
var DB = require('../public/mongoose/db')
let db = new DB('market')

/* GET home page. */
router.get('/login',function (res,req,next) {
  res.render('login', { title: 'Express' });
})
router.post('/login', function (req, res, next) {
  console.log(req.body,'123')
  // res.render('login', { title: 'Express' });
  let collection=''
  if (req.body.type==0) {
    collection='madmins'
    // console.log('超管')
  }
  else{
    collection='managers'
    // console.log('普通用户')
  }
  db.find(collection, {'name':req.body.name,'pass':req.body.pass,'type':req.body.type}, ret => {
    console.log(ret, '111')
    if (ret == '') {
      var json = {
        isok: false,
        code: 0,
        info: "登录失败"

      }
      res.send(json)
      return;
    }else{
      console.log('ok')
      var json = {
        type:req.body.type,
        isok: true,
        code: 1,
        info: "登录成功"

      }
      res.send(json)
      return;
    }
    // res.render('login', { title: 'Express' });
  })

});

module.exports = router;
