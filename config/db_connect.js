const Sequelize = require("sequelize");

const sequelize = new Sequelize (
    'db_shopee',
    'root',
    'admin', 
    {
        host: '127.0.0.1',
        port: '3302',
        dialect: 'mysql'
    }
)

module.exports = {
    sequelize
}