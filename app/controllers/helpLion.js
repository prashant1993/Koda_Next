var express = require('express');
var app = express();
var router = express.Router();
var koda = require('../models/kodaSchema').koda;
var common = require('../common/common');
var com = new common();



router.post('/', function(req, res) {
var userId = req.body.userId;
//   var lionData = { lionDanceShow:{helpLion:{
//     timeSpend: req.body.timeSpend,
//       $inc: {
//         visit: 1
//     }
//   }
// }
//  }
var condition={};
condition.$inc = {visit:1};

 // var lionData ={lionDanceShow:{helpLion:{visit:1}}};

// var lionData= {lionDanceShow:{helpLion:condition}};
// { $inc: { 'polls.option.$.votes': 1 } }
  koda.findByIdAndUpdate(userId, condition ,function(err, data) {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
module.exports = router;
