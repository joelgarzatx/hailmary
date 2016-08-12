var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  name: String,
  account: String,
  url: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
