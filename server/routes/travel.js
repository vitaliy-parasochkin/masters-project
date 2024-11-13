const Travel = require('../models/Travel');

const searchRoutes = async (req, res) => {
  const { type, rating, location } = req.query;
  const filter = {};

  if (type) filter.type = { $in: type.split(',') };
  if (rating) filter.rating = { $gte: parseFloat(rating) };
  if (location) filter.location = { $regex: location, $options: 'i' };

  try {
    const routes = await Travel.find(filter);
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching routes' });
  }
};

const getRecommendations = async (req, res) => {
  try {
    const recommendations = await Travel.find().sort({ views: -1 }).limit(5);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
};

const logView = async (req, res) => {
  const { id } = req.params;

  try {
    await Travel.findByIdAndUpdate(id, { $inc: { views: 1 } });
    res.status(200).json({ message: 'View logged' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging view' });
  }
};

module.exports = {
  searchRoutes,
  getRecommendations,
  logView,
};