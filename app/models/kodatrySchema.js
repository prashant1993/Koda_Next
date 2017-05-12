var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var kodanextSchema = new Schema({
  Name:{
 type:String,
//  unique:true,
 required:true,
 trim:true
}
});


module.exports = {
    kodanext : mongoose.model('kodanext',kodanextSchema),
    };
