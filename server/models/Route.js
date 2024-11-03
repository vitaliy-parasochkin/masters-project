const mongoose = require('mongoose');
const routeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  tags: [String],  
  popularity: { type: Number, default: 0 },
});
module.exports = mongoose.model('Route', routeSchema);