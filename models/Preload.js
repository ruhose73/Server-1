const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Preload = sequelize.define("Preload", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    CVD: {type:DataTypes.REAL},
    DZLA: {type:DataTypes.REAL},
    KDO: {type:DataTypes.REAL},
    IKDO: {type:DataTypes.REAL},   
})

Preload.hasMany(User);
User.belongsTo(Preload);

module.exports = Preload;