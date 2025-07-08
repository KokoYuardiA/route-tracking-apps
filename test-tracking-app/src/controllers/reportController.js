const { Transaksi, sequelize } = require('../models');
const { Op } = require('sequelize');

exports.driverPalingSeringTelat = async (req, res) => {
  const result = await Transaksi.findAll({
    attributes: ['nama_driver', [sequelize.fn('COUNT', sequelize.col('id')), 'telatCount']],
    where: { telat: { [Op.gt]: 0 } },
    group: ['nama_driver'],
    order: [[sequelize.literal('telatCount'), 'DESC']]
  });
  res.json(result);
};

exports.driverTelatKedua = async (req, res) => {
  const result = await Transaksi.findAll({
    attributes: ['nama_driver', [sequelize.fn('COUNT', sequelize.col('id')), 'telatCount']],
    where: { telat: { [Op.gt]: 0 } },
    group: ['nama_driver'],
    order: [[sequelize.literal('telatCount'), 'DESC']],
    limit: 2
  });
  res.json(result[1]);
};

exports.costTertinggiKedua = async (req, res) => {
  const result = await Transaksi.findAll({
    attributes: ['nama_driver', [sequelize.fn('SUM', sequelize.col('total_cost')), 'totalCost']],
    group: ['nama_driver'],
    order: [[sequelize.literal('totalCost'), 'DESC']],
    limit: 2
  });
  res.json(result[1]);
};

exports.jarakTempuhTerjauh = async (req, res) => {
  const result = await Transaksi.findAll({
    attributes: ['nama_driver', [sequelize.fn('SUM', sequelize.col('distance')), 'totalDistance']],
    group: ['nama_driver'],
    order: [[sequelize.literal('totalDistance'), 'DESC']],
    limit: 1
  });
  res.json(result[0]);
};

exports.jumlahTripPerDriver = async (req, res) => {
  const result = await Transaksi.findAll({
    attributes: ['nama_driver', [sequelize.fn('COUNT', sequelize.col('id')), 'tripCount']],
    group: ['nama_driver']
  });
  res.json(result);
};
