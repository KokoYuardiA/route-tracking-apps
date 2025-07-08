module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Driver', {
    nama: DataTypes.STRING,
    plat: DataTypes.STRING
  });
};
