var express = require('express');
var app = express();
var router = express.Router();

 var koda = require('../models/kodatrySchema').kodanext;
 // var common = require('../common/common');
 // var com = new common();


 router.post('/', function(req, res) {
    console.log('inside save controller');
    var kodaData = new koda({
        Name: req.body.Name
    });
    // console.log("inside welcome",kodaData);
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
});


// var koda = require('../models/kodaSchema').koda;
// var common = require('../common/common');
// var com = new common();
//
//
//
// router.post('/', function(req, res) {
//     console.log('inside save controller');
//     var kodaData = {
//         Name: req.body.Name
//         // lionDance:{
//         //   welcome:{
//         //   progress:req.body.progress
//         // }
//         // }
//     };
//     // console.log("inside welcome",kodaData);
//     // display saved user
//     com.save(kodaData, function(error, data) {
//           if (error) {
//           console.log(error);
//             res.send(error);
//         } else {
//             res.json(data);
//               console.log("save db",data);
//         }
//     });
// });
//

module.exports = router;
