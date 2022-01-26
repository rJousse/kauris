var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var casSchema = new Schema({
  CasName : String,
  DateDone : Date,
  CasDescription : String,
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('cas', casSchema);
