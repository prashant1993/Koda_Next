var express = require('express'),
    app = express(),
    router = express.Router();


router.use('/koda',require('./login'));
router.use('/koda', require('./lionDanceShow'));
// router.use('/koda', require('./guruGiraffe'));
// router.use('/koda', require('./fruitCatcher'));
// router.use('/koda', require('./flyCatcher'));
// router.use('/koda', require('./hangMan'));
// router.use('/koda', require('./turtleRace'));
// router.use('/koda',require('/memoryGame'));

module.exports = router;
