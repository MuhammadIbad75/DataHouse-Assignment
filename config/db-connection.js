const mongoose = require('mongoose');
const { mongo, db_url } = require('./environment');
function getConnection() {
  mongoose.connect(db_url, mongo['options']);
  mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
  mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
  mongoose.connection.on('connected', () => console.log(`Mongoose default connection open to ${db_url}`));

  process.on('SIGINT', () => mongoose.connection.close(() => process.exit(0)));
}

module.exports = getConnection();