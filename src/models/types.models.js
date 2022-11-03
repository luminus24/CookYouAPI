const db = require ('../utils/databases')
const {DataTypes} = require('sequelize')

const Types = db.define('types', {
   id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
   },
   name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
}, {
   timestamps: false
})

module.exports = Types