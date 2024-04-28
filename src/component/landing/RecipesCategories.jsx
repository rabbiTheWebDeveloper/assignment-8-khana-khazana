import Link from "next/link";


const RecipesCategories = () => {
  return (
    <div className="col-span-12 md:col-span-3">
    <h3 className="font-bold text-xl">Recipes</h3>
    <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
      <li>
        <Link href="/">Morning Bliss Café</Link>
      </li>
      <li>
        <a href="#">Sunrise Bites Kitchen</a>
      </li>
      <li>
        <a href="#">Brunch Haven Delights</a>
      </li>
      <li>
        <a href="#">Rise &amp; Dine Eatery</a>
      </li>
      <li>
        <a href="#">Breakfast Oasis Junction</a>
      </li>
    </ul>
  </div>
  );
};

export default RecipesCategories;