var express = require('express');
var app = express();
var router = express.Router();
var koda = require('../models/kodaSchema').koda;
var common = require('../common/common');
var com = new common();

// var koda = require('../model/kodaSchema').koda;
// var visitor = require('../models/detail');


router.post('/', function(req, res) {
    console.log('inside save controller');
    var kodaData = {
        Name: req.body.Name
        // lionDance:{
        //   welcome:{
        //   progress:req.body.progress
        // }
        // }
    };
    // console.log("inside welcome",kodaData);
    // display saved user
    com.save(kodaData, function(error, data) {
          if (error) {
          console.log(error);
            res.send(error);
        } else {
            res.json(data);
              console.log("save db",data);
        }
    });
});


//
// router.post('/welcome', function(req, res) {
//     try {
//             koda.findOneAndUpdate({firstname:req.body.firstName}, {$push:
//                                                                         {activityZone:
//                                                                           {tutorial:
//                                                                             {lionDance:
//                                                                               {welcomeToShow:
//                                                                                 {$inc:{visit:1}
//                                                                               }
//                                                                             }
//                                                                           }
//                                                                         }
//                                                                       }
//                                                                     }, function(err, data) {
//                                                                               console.log(err,data);
//                                                                               res.send("success");
//                                                                             });
//
//       } catch (e) {
//           console.log(e);
//         if (e == 401) {
//             res.status(401).send({
//                 "status": false,
//                 "message": "this name doesn't exist"
//             });
//         }
//     }
//
// });

module.exports = router;
