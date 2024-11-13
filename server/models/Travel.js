const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: [String],
  tags: [String],
  rating: Number,
  duration: String,
  images: [String],
  location: String,
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Travel', travelSchema);
