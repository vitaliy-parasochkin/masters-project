const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  location: String,
  details: String
});

module.exports = mongoose.model('Route', routeSchema);