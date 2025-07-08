module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Transaksi', {
    nama_driver: DataTypes.STRING,
    plat_driver: DataTypes.STRING,
    point_start: DataTypes.STRING,
    point_end: DataTypes.STRING,
    distance: DataTypes.FLOAT,
    date: DataTypes.DATEONLY,
    actual_time: DataTypes.INTEGER,
    waktu_standart: DataTypes.INTEGER,
    total_cost: DataTypes.FLOAT,
    telat: DataTypes.INTEGER
  });
};
