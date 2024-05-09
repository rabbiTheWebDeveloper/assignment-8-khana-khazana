"use client";

import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { addFavourite } from "@/app/actions";
import useAuth from "@/hooks/useAuth";

const  Favourite = ({ recipeId }) => {
    const { auth } = useAuth();
    const router = useRouter();
    const isInterested = auth?.favourites?.find((id) => id === recipeId);
    const [interested, setInterested] = useState(isInterested);
    const [isPending, startTransition] = useTransition();
    const toggleInterest = async () => {
        if (auth) {
          addFavourite(recipeId, auth?.id);
            setInterested(!interested);
        } else {
            router.push("/login");
        }
    };
    return (
        <div className="flex gap-4 justify-end">
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`flex gap-2 cursor-pointer hover:text-[#eb4a36] ${interested ? "text-[#eb4a36]" : "text-gray-600"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span>Favourite</span>
            </button>
        </div>
    );
};

export default Favourite;