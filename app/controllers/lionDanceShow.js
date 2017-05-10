var express = require('express'),
    router  = express.Router();

    //router.use("/welcomeUser",require('./welcomeUser'));
    router.use("/welcome",require('./welcome'));
    router.use("/helpLion",require('./helpLion'));
    // router.use("/learndance",require('./learndance'));
    // router.use("/flipbook",require('./flipbook'));
    // router.use("/stepShown",require('./stepShown'));
    // router.use("/wrongMoves",require('./wrongMoves'));
    // router.use("/flipeffect",require('./flipeffect'));
    // router.use("/fulldance",require('./fulldance'));
    // router.use("/thankyou",require('./thankyou'));
    // router.use("/ninjaBadge",require('./ninjaBadge'));




module.exports = router;
