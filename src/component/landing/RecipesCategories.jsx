import { getAllRecipesCategory } from "@/db/queries";
import Link from "next/link";


const RecipesCategories =async () => {
  const allRecipesCategory = await getAllRecipesCategory();
  return (
    <div className="col-span-12 md:col-span-3">
    <h3 className="font-bold text-xl">Recipes</h3>
    <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
      {
        allRecipesCategory.map((category, index) => {
          return (
            <li key={index}>
              <Link href={`/categorized/${category}`}>{category}</Link>
            </li>
          )
        })
      }
    </ul>
  </div>
  );
};

export default RecipesCategories;