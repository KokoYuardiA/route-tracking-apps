const { Driver } = require('../models');

exports.createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDrivers = async (req, res) => {
  const drivers = await Driver.findAll();
  res.json(drivers);
};

exports.updateDriver = async (req, res) => {
  const { id } = req.params;
  await Driver.update(req.body, { where: { id } });
  res.json({ message: 'Driver updated' });
};

exports.deleteDriver = async (req, res) => {
  const { id } = req.params;
  await Driver.destroy({ where: { id } });
  res.json({ message: 'Driver deleted' });
};
