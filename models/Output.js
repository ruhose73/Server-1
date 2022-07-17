const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Output = sequelize.define("Output", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    SV: {type:DataTypes.REAL, required:true},
    SI: {type:DataTypes.REAL, required:true},
    UO: {type:DataTypes.REAL, required:true},
    IUO: {type:DataTypes.REAL, required:true},   
    CHSS: {type:DataTypes.REAL, required:true}
})

Output.hasMany(User);
User.belongsTo(Output);

module.exports = Output;