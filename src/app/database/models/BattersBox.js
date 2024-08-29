const db = require("../config/dbConn");
const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const { merge: _merge } = require('lodash');

const Model_Cache = {
    initialized: false,
    getSql:() => db.connect()
}

async function get_models () {

    const {sequelize} = Model_Cache.getSql();

    const BaseOptions = {
        sequelize: sequelize,
        freezeTableName: true,
        timestamps: false
    };

    class pokemon extends Model {}

    pokemon.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'number',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        games: {
            type: DataTypes.JSONB,
            field: 'games'
        },
        front_sprite: {
            type: DataTypes.STRING,
            field: 'front_sprite'
        }
    }, _merge({}, BaseOptions, {
        tableName: 'pokemon'
    }));

    _merge(Model_Cache, {
        pokemon
    },{initialized: true});

    return Model_Cache;
}

module.exports = {
    get_models,
    Op: Op
}