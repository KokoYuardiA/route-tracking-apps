const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Import models
const Driver = require('./driver')(sequelize, DataTypes);
const Route = require('./route')(sequelize, DataTypes);
const Transaksi = require('./transaksi')(sequelize, DataTypes);

// Sync database
sequelize.sync({ force: false }) // ubah ke true hanya jika ingin reset table
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.error('Database sync error:', err));

module.exports = { sequelize, Driver, Route, Transaksi };
