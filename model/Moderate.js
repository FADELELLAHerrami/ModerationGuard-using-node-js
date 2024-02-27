const mongoose = require('mongoose');



const moderateSchema = mongoose.Schema({
  text: { type: String, required: true },
  language: { type: String , required: true },
  is_accepted: { type: Boolean , required: true }
})


module.exports = mongoose.model('Moderate', moderateSchema);
