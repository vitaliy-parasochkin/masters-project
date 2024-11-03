const express = require('express');
const auth = require('../middleware/auth');
const Route = require('../models/Route');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/recommendations', auth, async (req, res) => {
  try {
    const popularRoutes = await Route.find().sort({ popularity: -1 }).limit(5);
    res.json(popularRoutes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
