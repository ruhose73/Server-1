const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Output = sequelize.define("Output", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    SV: {type:DataTypes.REAL},
    SI: {type:DataTypes.REAL},
    UO: {type:DataTypes.REAL},
    IUO: {type:DataTypes.REAL},   
    CHSS: {type:DataTypes.REAL}
})

Output.hasMany(User);
User.belongsTo(Output);

module.exports = Output;