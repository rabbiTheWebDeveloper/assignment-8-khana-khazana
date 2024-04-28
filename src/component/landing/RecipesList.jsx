/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../ui/Card';
import { getAllRecipes } from '@/db/queries';


const RecipesList =async () => {
  const allRecipes = await getAllRecipes();
  return (
    <div className="col-span-12 md:col-span-9">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
      {
        allRecipes.map((recipe, index) => {
          return (
            <Card key={recipe.id} recipe={recipe} />
          )
        })
      }
    </div>
  </div>
  );
};

export default RecipesList;