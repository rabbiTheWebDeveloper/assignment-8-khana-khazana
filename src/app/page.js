/* eslint-disable react/no-unescaped-entities */

import HeroSection from "@/component/landing/HeroSection";
import RecipesCategories from "@/component/landing/RecipesCategories";
import RecipesList from "@/component/landing/RecipesList";



export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <section className="container py-8">
          <div className="grid grid-cols-12 py-4">
            <RecipesCategories />
            <RecipesList />
          </div>
        </section>
      </main>
    </>

  );
}
