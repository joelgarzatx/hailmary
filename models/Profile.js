var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  name: String,
  account: String,
  url: String,
});

var Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
