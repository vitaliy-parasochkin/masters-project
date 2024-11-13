const express = require('express');
const { searchRoutes, getRecommendations, logView } = require('./travel');

const router = express.Router();

router.get('/search', searchRoutes);
router.get('/recommendations', getRecommendations);
router.post('/logView/:id', logView);

module.exports = router;
