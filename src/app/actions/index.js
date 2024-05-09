"use server"
import { createUser, findByCredentials, updateFavourite } from "@/db/queries";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const create = await createUser(user);
  // console.log(user);
  redirect("/login");
}
async function loginUser(formData) {
  try {
    const cradintial = {}
    cradintial.email = formData.get('email');
    cradintial.password = formData.get('password');
    const user = await findByCredentials(cradintial);
    return user;
  } catch (err) {
    console.log(err);
  }


}

async function addFavourite(favoriteId, authId) {
  try {
      await updateFavourite(favoriteId, authId);
  } catch(error) {
      throw error;
  }
  // revalidatePath(`/details/${favoriteId}`);
  revalidatePath(`/`);
}
export {
  registerUser,
  loginUser,
  addFavourite
}