/* eslint-disable react/no-unescaped-entities */

import RecipeDetails from "@/component/RecipeDetails/RecipeDetails";
import Step from "@/component/ui/Step";
import { getRecipeById } from "@/db/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({params: {details}}) {
 
  const recipeInfo = await getRecipeById(details);

  return {
    title: `Recipie - ${recipeInfo?.name}`,
    description: recipeInfo?.description,
    openGraph: {
      images: [recipeInfo?.thumbnail]
    }
  }
}
const page = async ({ params: { details } }) => {
  const recipeInfo = await getRecipeById(details);
  if (!recipeInfo){
    notFound()
  }

  return (
    <main>
      <RecipeDetails recipeInfo={recipeInfo} />
      <Step steps={recipeInfo?.steps} />
    </main>

  );
};

export default page;