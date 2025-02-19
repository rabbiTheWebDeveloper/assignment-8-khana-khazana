import { usersModel } from "@/models/users-modes";
import { dbConnect } from "@/services/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

const { recipesModel } = require("@/models/recipes-modes");
import mongoose from "mongoose";

async function getAllRecipes() {
  await dbConnect();
  const recipes = await recipesModel.find().lean();
  // console.log(recipes);
  return replaceMongoIdInArray(recipes);
}

async function getAllRecipesCategory() {
  await dbConnect();
  const recipes = await recipesModel.find().lean();
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  return categories;
}

async function getRecipeById(id) {
  try {
    await dbConnect();
    const recipe = await recipesModel.findById(id).lean();
    if (!recipe) {
      return false;
    }
    return replaceMongoIdInObject(recipe);
  } catch (error) {
    console.error(error);
    return false;
   
  }
}
async function createUser(user) {
  await dbConnect();
  return await usersModel.create(user);
}

async function findByCredentials(formData) {
  await dbConnect();
  const user = await usersModel.findOne(formData).lean();
  return replaceMongoIdInObject(user);
}


async function updateFavourite(favoriteId, authId) {

  const user = await usersModel.findById(authId);

  if (user) {
      const foundUsers = user.favourites.find(id => id.toString() === favoriteId);

      if(foundUsers) {
        user.favourites.pull(new mongoose.Types.ObjectId(favoriteId));
      } else {
        user.favourites.push(new mongoose.Types.ObjectId(favoriteId));
      }

      user.save();
  }
}
export  {
  getAllRecipes,
  getRecipeById,
  getAllRecipesCategory,
  createUser,
  findByCredentials,
  updateFavourite

}