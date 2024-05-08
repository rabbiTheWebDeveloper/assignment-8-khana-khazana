"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LogOut = () => {
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  
  const logout = () => {
    setAuth(null);
    router.push('/login')
}
  return (
    <>
      {auth ? (
        <>
          <li className="py-2">
            <span href="/">Hello, { auth?.firstName + " " + auth?.lastName}</span>
          </li>
          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <button onClick={logout}>Logout</button>
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
