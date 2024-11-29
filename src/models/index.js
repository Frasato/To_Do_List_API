const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
    }
);

const User = require('./user')(sequelize);
const Task = require('./task')(sequelize);

User.hasMany(Task, { foreignKey: 'userId', onDelete: 'CASACADE' });
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Task };