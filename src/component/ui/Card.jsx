/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";


const Card = ({recipe}) => {
  return (
    <Link href={`/details/${recipe?.id}`} className="card">
    <Image
      src={recipe?.thumbnail}
      className="rounded-md"
      alt=""
      width={300}
      height={160}
       
    />
    <h4 className="my-2">{ recipe?.name}</h4>
    <div className="py-2 flex justify-between text-xs text-gray-500">
      <span>⭐️ {recipe?.rating}.0</span>
      <span>By: {recipe?.author}</span>
    </div>
  </Link>
  );
};

export default Card;