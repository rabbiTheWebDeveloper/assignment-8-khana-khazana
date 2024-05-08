import { usersModel } from "@/models/users-modes";
import { dbConnect } from "@/services/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

const { recipesModel } = require("@/models/recipes-modes");

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
  await dbConnect();
  const recipe = await recipesModel.findById(id).lean();
  return replaceMongoIdInObject(recipe);
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
export  {
  getAllRecipes,
  getRecipeById,
  getAllRecipesCategory,
  createUser,
  findByCredentials

}