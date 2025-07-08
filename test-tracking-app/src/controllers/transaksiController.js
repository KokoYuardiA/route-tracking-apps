const { Transaksi } = require('../models');

exports.createTransaksi = async (req, res) => {
  const transaksi = await Transaksi.create(req.body);
  res.json(transaksi);
};

exports.getTransaksis = async (req, res) => {
  const transaksis = await Transaksi.findAll();
  res.json(transaksis);
};

exports.updateTransaksi = async (req, res) => {
  const { id } = req.params;
  await Transaksi.update(req.body, { where: { id } });
  res.json({ message: 'Transaksi updated' });
};

exports.deleteTransaksi = async (req, res) => {
  const { id } = req.params;
  await Transaksi.destroy({ where: { id } });
  res.json({ message: 'Transaksi deleted' });
};
