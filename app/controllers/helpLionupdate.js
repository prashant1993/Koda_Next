var express = require('express');
var app = express();
var router = express.Router();
var lionDance = require('../models/lionDanceSchema').lionDance;


router.post('/:id', function(req, res) {
  console.log(req.body);
    lionDance.findByIdAndUpdate(req.params, req.body, function(err, data) {
        try {
            if (err) throw err;
            res.send(data);
            console.log(data);
        } catch (e) {
            console.log(e);
            res.send({
                status: false,
                message: "mongoose issue"
            });
        }
    });
});

module.exports = router;
