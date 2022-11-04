const {DataTypes} = require('sequelize')
const db = require('../utils/databases')
const Ingredients = require('./ingredients.models')
const Users = require('./user.models')

const UsersIngredients = db.define('users_ingredients', {
   id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   amount:{
      type: DataTypes.INTEGER,
      allowNull: false
   },
   userId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
      references:{
         key: 'id',
         model: Users
      }
   },
   ingredientsId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'ingredients_id',
      references:{
         key:'id',
         model: Ingredients
      }
   }
})

module.exports = UsersIngredients