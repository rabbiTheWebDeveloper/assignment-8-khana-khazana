import { usersModel } from "@/models/users-modes";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

const { recipesModel } = require("@/models/recipes-modes");

async function getAllRecipes() {
  const recipes = await recipesModel.find().lean();
  // console.log(recipes);
  return replaceMongoIdInArray(recipes);
}

async function getRecipeById(id) {
  const recipe = await recipesModel.findById(id).lean();
  return replaceMongoIdInObject(recipe);
}
async function createUser(user) {
  return await usersModel.create(user);
}

async function findByCredentials(formData) {
  const user = await usersModel.findOne(formData).lean();
  return replaceMongoIdInObject(user);
}
export  {
  getAllRecipes,
  getRecipeById,
  createUser,
  findByCredentials

}