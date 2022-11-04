const {DataTypes} = require('sequelize')
const db = require('../utils/databases')
const Recipes = require('./recipes.models')
const Ingredients = require('./ingredients.models')

const RecipesIngredients = db.define('recipes_ingredients', {
   id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   amount:{
      type: DataTypes.STRING,
      allowNull: false
   },
   recipeId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'recipe_id',
      references:{
         key: 'id',
         model : Recipes
      }
   },
   ingredientsId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'ingredients_id',
      references:{
         key: 'id',
         model: Ingredients
      }
   }
})

module.exports = RecipesIngredients