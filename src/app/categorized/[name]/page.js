
import Card from "@/component/ui/Card";
import { getAllRecipes } from "@/db/queries";
import { notFound } from "next/navigation";



const page = async ({ params }) => {
  const allRecipes = await getAllRecipes();
  const decodedName = decodeURIComponent(params.name);
  const filteredRecipes = allRecipes.filter(recipe => recipe.category === decodedName);
  if (!filteredRecipes){
    notFound()
  }
  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">{decodedName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {
              filteredRecipes.map((recipe, index) => {
                return (
                  <Card key={recipe.id} recipe={recipe} />
                )
              })
            }
          </div>
        </div>
      </section>
    </main>

  );
};

export default page;