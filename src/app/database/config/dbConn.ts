const {Sequelize, DataTypes, Model, QueryTypes} = require("sequelize");
console.dir(process.env);
process.env = (require("dotenv").config()).parsed;


const conn_str = `postgres://${process.env.USER}:${process.env.PASS}@${process.env.HOST_NAME}:${process.env.PORT}/${process.env.DB_NAME}?sslmode=disable`
const sequelize = new Sequelize(conn_str);

module.exports = {
    connect: function() {
        return { sequelize, DataTypes, Model };
    }
};