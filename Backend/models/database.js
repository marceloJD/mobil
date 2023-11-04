const { Sequelize } = require('sequelize');
const appRoot = require('app-root-path');
const path = require('path');

const dbPath = path.join(appRoot.path,'BD', 'database.db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

module.exports = sequelize;
