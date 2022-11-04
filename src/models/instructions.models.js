const {DataTypes} = require('sequelize')
const db = require('../utils/databases')
const Recipes = require('./recipes.models')

const Instructions = db.define('instructions', {
   id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false
   },
   description:{
      type: DataTypes.STRING,
      allowNull: false
   },
   step:{
      type:DataTypes.INTEGER,
      allowNull: false,
   },
   recipeId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'recipe_id',
      references:{
         key: id,
         model: Recipes
      }
   }
})

module.exports = Instructions