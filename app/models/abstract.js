var bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    validate = require('mongoose-validate'),
    util = require('util');

require('mongoose-schema-jsonschema')(mongoose);

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var AbstractSchema = function() {
    Schema.apply(this, arguments);
    this.add({
        createdAt: {
            type: Date,
           default: Date.now
        },
            updatedAt: {
            type: Date
            //  default : Date.now
        }
        // ,
        //   deletedAt:{
        //   type: Date
        // },
        // isDeleted: {
        //   type: Boolean,
        //   default:false
        // }
    });
};
util.inherits(AbstractSchema, Schema);

module.exports = {
    BaseSchema: AbstractSchema
};
