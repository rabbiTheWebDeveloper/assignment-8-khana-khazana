"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const LogOut = () => {
  const { auth, setAuth } = useAuth();
  console.log("auth" , auth)
  return (
    <>
      {auth ? (
        <>
          <li className="py-2">
            <span href="/">Hello,</span>
          </li>
          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <button>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <Link href="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
};

export default LogOut;
