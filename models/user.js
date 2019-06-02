var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  name:String,
  mark:String,
  model:String,
  type: String,
  cost: Number,
  
});

module.exports = mongoose.model('User', UserSchema);