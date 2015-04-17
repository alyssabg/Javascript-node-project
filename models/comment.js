var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
  comment:    { type: String },
  user: {type: String },
  timestamp:  { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
