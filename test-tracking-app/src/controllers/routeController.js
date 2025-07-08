const { Route } = require('../models');

exports.createRoute = async (req, res) => {
  const route = await Route.create(req.body);
  res.json(route);
};

exports.getRoutes = async (req, res) => {
  const routes = await Route.findAll();
  res.json(routes);
};

exports.updateRoute = async (req, res) => {
  const { id } = req.params;
  await Route.update(req.body, { where: { id } });
  res.json({ message: 'Route updated' });
};

exports.deleteRoute = async (req, res) => {
  const { id } = req.params;
  await Route.destroy({ where: { id } });
  res.json({ message: 'Route deleted' });
};
