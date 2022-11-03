const db = require ('../utils/databases')
const {DataTypes} = require('sequelize')

const Categories = db.define('categories', {
   id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull: false
   },
   name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   }
},{
   timestamps: false //? Evita que sequelize cree la columna de createdAt y updatedAt
})

module.exports = Categories