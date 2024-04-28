"use server"
import { createUser, findByCredentials } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const create = await createUser(user);
  console.log(user);
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
export {
  registerUser,
  loginUser
}