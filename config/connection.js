const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/test'
);

// const seq = new Sequelize({
//   dialect: 'postgres',
//   models
// })

module.exports = sequelize;
