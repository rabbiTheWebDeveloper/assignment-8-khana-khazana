"use client"
import { addFavourite } from '@/app/actions';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

const Favourite = ({recipeId}) => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isInterested = auth && auth?.favourites?.find((id) => id === recipeId);
  const [interested, setInterested] = useState(isInterested);

  const toggleInterest = async () => {
    if (auth) {
      addFavourite(recipeId, auth?.id);
        setInterested(!interested);
    } else {
        router.push("/login");
    }
};

console.log(interested)
  return (
    <div  className={`flex gap-2 text-gray-600 cursor-pointer ${interested ? "text-[#eb4a36] hover:text-[#eb4a36]" : ""}`}   onClick={() =>
      startTransition(() => {
          toggleInterest();
      })
  }>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
    <span>{isInterested ? "Favourited" : "Favourite"}</span>
  </div>
  );
};

export default Favourite;