var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var helpLionSchema = new Schema({
  progress:{
    type:Number,
    default:10,
    trim:true
  },
  visit:{
    type:Number,
    default:0,
    trim:true
  },
  timeSpend:{
    type:Number,
    default:0
  }
});

var lionDanceSchema = new Schema({
 //  helpLion:{
 //    user: {
 //         ref: "kodanext",
 //         type: ObjectId
 //    },
 //   progress:{
 //     type:Number,
 //    //  default:10,
 //    //  trim:true
 //   },
 //   visit:{
 //     type:Number,
 //     default:0,
 //     trim:true
 //   },
 //   timeSpend:{
 //     type:Number,
 //     default:0
 //
 // }
 // }

 //
 // helpLion:[{
 //   progress:{
 //     type:Number,
 //     default:10,
 //     trim:true
 //   },
 //   visit:{
 //     type:Number,
 //     default:0,
 //     trim:true
 //   },
 //   timeSpend:{
 //     type:Number,
 //     default:0
 //   }
 // }],
 lionDance:[{
   progress:{
     type:Number,
     default:20,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
   lionDancecont:[{
   progress:{
     type:Number,
     default:30,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 flipbook:[{
   progress:{
     type:Number,
     default:40,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 flipbookCont:[{
   progress:{
     type:Number,
     default:50,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 stepShown:[{
   progress:{
     type:Number,
     default:65,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 rearrangeMoves:[{
   progress:{
     type:Number,
     default:85,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 flipbookeffect:[{
   progress:{
     type:Number,
     default:100,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 success:[{
   progress:{
     type:Number,
     default:100,
     trim:true
   },
   visit:{
     type:Number,
     default:0,
     trim:true
   },
   timeSpend:{
     type:Number,
     default:0
   }
 }],
 "helpLion": [ helpLionSchema ]
});


module.exports = {
    lionDance : mongoose.model('lionDance',lionDanceSchema),
    };
