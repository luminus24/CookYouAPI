const {DataTypes} = require('sequelize')
const db = require('../utils/databases')
const Types = require('./types.models')

const Ingredients = db.define('ingredients', {
   id:{
      type: DataTypes.UUID,
      primaryKey: false,
      allowNull: false
   },
   name:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   typeId :{
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'type_id',
      references:{
         key: 'id',
         model: Types
      }
   },
   urlImg:{
      type: DataTypes.STRING,
      field: 'url_img',
      validate:{
         isUrl: true
      }

   }
}, {
   timestamps: false
})

module.exports = Ingredients