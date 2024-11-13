const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  viewCount: { type: Number, default: 1 },
  lastViewed: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserActivity', userActivitySchema);
