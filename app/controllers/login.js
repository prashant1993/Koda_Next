var express = require('express');
var router = express.Router();
var koda = require('../models/kodaSchema').koda;
var common = require('../common/common');
var com = new common();

router.post('/login', function(req, res) {
  try {
        data={
          Name:req.body.Name
          // username:"",
          // userEmailAddress:"",
          // parentEmailAddress:'',
          // ParentPassword:'',
          // userPassword:'',
          // location:'',
          // activityZone:'',
          // gameZone:''
        };
        console.log(data);
    var loginDetail=com.save(data,function (err,detail) {
      console.log("hello");
      console.log("data",detail);
      if(err){
        if(typeof err === "object"){
                  var field = err.message.split('.$')[0];
                  field = field.split('dup key')[0];
                  field = field.substring(0, field.lastIndexOf('_')); // returns email
                  res.status(401).send({
                      "status": false,
                      "message":"data already exists"
                  });
                }
      }
      else{
        // res.json(detail);
        res.json({
          "data":detail,
          "status":true,
          "message":"logined Successfully"
        });

      }
    });
  } catch (e) {
    if(e===401){
      res.status(401).send({
        "status":false,
        "message":"logined data alreay exist"
      });
    }
  }

});
module.exports = router;
