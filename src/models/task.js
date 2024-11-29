const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })
}