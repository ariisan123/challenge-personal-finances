require('./dotenv');
const { Sequelize } = require('sequelize');
const operationModel = require('./models/Operation.js');
const userModel = require('./models/User.js');

const dbConnection = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

const User = userModel(dbConnection);
const Operation = operationModel(dbConnection);

User.hasMany(Operation, { as: 'operations', foreignKey: 'userId' });
Operation.belongsTo(User, { as: 'user' });

dbConnection
  .sync({ force: false })
  .then(() => {
    console.log('DB Conectada');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { User, Operation };
