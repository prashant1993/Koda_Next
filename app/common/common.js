var express = require('express');
//
var koda = require('../models/kodatrySchema').koda;
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

function commonMethod() {

}

//
//
commonMethod.prototype.save = function(kodaData, cb) {
    console.log(kodaData);
    var kodaObj = new koda(kodaData);
    console.log("kodaObj",kodaObj);
    kodaObj.save(function(error, data) {
      // console.log(callback);
      if (error) {
                return cb({
                    success: false,
                    message: 'failed'
                }, null);
            } else if (data) {
                return cb(null, {
                    success: true,
                    message: 'successful'
                });
            }
    });
};


//
// commonMethod.prototype.save = function(kodaData, cb) {
//     var kodaObj = new koda(kodaData);
//     console.log("kodaObj",kodaData);
//     kodaObj.save(function(error, data) {
//       // console.log(callback);
//       if (error) {
//                 return cb({
//                     success: false,
//                     message: 'failed'
//                 }, null);
//             } else if (data) {
//                 return cb(null, {
//                     success: true,
//                     message: 'successful'
//                 });
//             }
//     });
// };
//
//
//

//
// commonMethod.prototype.find = function(kodaData, cb) {
//     var kodaObj = new koda(kodaData);
//     kodaObj.findById(function(error, data) {
//         if (error) {
//             return cb({
//                 success: false,
//                 message: 'User registerated failed'
//             }, null);
//         } else if (data) {
//             return cb(null, {
//                 success: true,
//                 message: 'User registerated successful'
//             });
//         }
//     });
//
// };


module.exports = commonMethod;
