var express = require('express');
var app = express();
var router = express.Router();
var lionDance = require('../models/lionDanceSchema').lionDance;
//
// var koda = require('../models/kodaSchema').koda;
// var common = require('../common/common');
// var com = new common();


 router.post('/', function(req, res) {
    // console.log('inside save controller');
    // user=req.body.user;
    // lionDance.findByIdAndUpdate(user,{$inc:{"helpLion.$.visit":1}},function (err,data) {
    //     if(err) throw err;
    //     console.log(data);
    //     res.send(data);
    // });
    var kodaData = new lionDance({

       helpLion:{
        // user:req.body.user,
        progress: req.body.progress,
        timeSpend:req.body.timeSpend,
        visit:req.body.visit

    },
    flipbookeffect:{
     // user:req.body.user,
     progress: req.body.progress,
     timeSpend:req.body.timeSpend,
     visit:req.body.visit

  },
        rearrangeMoves:{
         // user:req.body.user,
         progress: req.body.progress,
         timeSpend:req.body.timeSpend,
         visit:req.body.visit

      },  stepShown:{
         // user:req.body.user,
         progress: req.body.progress,
         timeSpend:req.body.timeSpend,
         visit:req.body.visit

      }
    });
    console.log("inside welcome",kodaData);
    // display saved user
    kodaData.save(function(error, data) {
          if (error) {
          console.log(error);
            res.send(error);
        } else {
            res.json(data);
              console.log("save db",data);
        }
    });

    // db.getCollection('liondances').update({"_id":"59153b93a4e2801e28d9c042"},{$inc:{"helpLion.$.0.visit":1}});
});


// router.post('/', function(req, res) {
// var userID = req.body.userId;
// var userID1 = req.body.userId1;
// var condition={};
// condition.$inc = {visit:1,timeSpend:req.body.timeSpend};
//
//  // var lionData ={lionDanceShow:{helpLion:{visit:1}}};
//
// // var lionData= {lionDanceShow:{helpLion:{visit:condition}}};
// // { $inc: { 'polls.option.$.votes': 1 } }
// // {_id:userID,"lionDanceShow.helpLion_id":userID1}, {$inc:{"_id.$.lionDanceShow.helpLion.visit":1}}
//
// // {"lionDanceShow._id":"5912f78bdce8b7710f76f4f6"},{$inc:{"lionDanceShow.$.visit":1}}
// // ({a:1, "b._id":341445} , {$inc:{"b.$.c":1}})
//   koda.findOneAndUpdate(userID ,condition,function(err, data) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });





module.exports = router;
