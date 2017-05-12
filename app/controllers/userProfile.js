var express = require('express');
var app = express();
var router = express.Router();
var koda = require('../models/kodaSchema').koda;
var common = require('../common/common');
var com = new common();

router.post("/", function(req, res) {
    var kodaData = {
        Name: req.body.Name
    };
    koda.find(kodaData, function(error, data) {
          if (error) {
          console.log(error);
            res.send(error);
        } else {
            res.json(data);
              console.log("save",data);
        }
    });
});

module.exports = router;
