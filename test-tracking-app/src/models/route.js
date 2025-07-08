module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Route', {
    point_awal: DataTypes.STRING,
    point_akhir: DataTypes.STRING,
    jarak: DataTypes.FLOAT,
    waktu_standart: DataTypes.INTEGER,
    price_per_km: DataTypes.FLOAT,
    total_cost: DataTypes.FLOAT
  });
};
