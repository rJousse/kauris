var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DLUListSchema = new Schema({
  ProductName : String,
  BestBeforeDate : Date,
  eaten : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('DLUList', DLUListSchema);
