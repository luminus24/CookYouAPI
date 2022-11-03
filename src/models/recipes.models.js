const db = require ('../utils/databases')
const {DataTypes} = require('sequelize')
const Users = require('./user.models')

const Recipes = db.define('recipes',{
   id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
         min: 5 //? Longitud minima del titulo
      }
   },
   description:{
      type: DataTypes.TEXT,
      allowNull: false
   },
   urlImg:{
      type: DataTypes.STRING,
      validate:{
         isUrl: true
      },
      field: 'img_url'
   },
   time:{
      type: DataTypes.INTEGER,
      allowNull: false
   },
   portions:{
      type: DataTypes.INTEGER,
      allowNull: false
   },
   userID:{
      type: DataTypes.UUID,
      allowNull:false,
      fields: 'user_id',
      references:{
         key: 'id',
         model: Users
      }
   },
   categoryId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      references:{
         key : 'id',
         model: '' //! AGREGAR EL MODELO UNA VEZ CREADO
      }
   },
   origin:{
      type: DataTypes.STRING
   },
   likes:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
   }
})

module.exports = Recipes