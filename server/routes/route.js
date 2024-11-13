const express = require('express');
const Route = require('../models/Route');
const UserActivity = require('../models/UserActivity');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const routeId = req.params.id;
    const userId = req.userId; 

    const route = await Route.findById(routeId);
    if (!route) return res.status(404).json({ message: 'Route not found' });

    let userActivity = await UserActivity.findOne({ userId, routeId });
    if (userActivity) {
      userActivity.viewCount += 1;
      userActivity.lastViewed = Date.now();
    } else {
      userActivity = new UserActivity({ userId, routeId });
    }
    await userActivity.save();

    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;