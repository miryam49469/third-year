// const { Sequelize, DataTypes } = require("sequelize");

// module.exports=(sequelize,DataTypes)=>{
//     const User=sequelize.define('user',{
//         id:{
//             type: DataTypes.INTEGER,
//             autoIncrement:true,allowNull: false,uniqe:true,
//             primaryKey:true},
//             name: { type: DataTypes.INTEGER, allowNull: false },
//             email: { type: DataTypes.INTEGER, allowNull: false},
//             phone:{ type: DataTypes.INTEGER, allowNull: false },
//             tuition:{ type: DataTypes.INTEGER , uniqe: true},
//     },
//     {
//         timestamps: false,
//         freezeTableName: true
//     }
//     );
// return User;}