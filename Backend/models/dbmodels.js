var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var casSchema = new Schema({
  castName : String,
  Dateposted : Date,
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
