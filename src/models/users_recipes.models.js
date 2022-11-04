const {DataTypes} = require('sequelize')
const db = require('../utils/databases')
const Users = require('./user.models')
const Recipes = require('./recipes.models')

const UsersRecipes = db.define('users_recipes',{
   id:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true
   },
   favorite:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
   recipesId:{
      type: DataTypes.UUID,
      allowNull: false,
      field: 'recipes_id',
      references:{
         key: 'id',
         model: Recipes
      }
   }
})

module.exports = UsersRecipes