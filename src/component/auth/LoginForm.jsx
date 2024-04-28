"use client";
import { loginUser } from "@/app/actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from 'next/navigation'
import { useState } from "react";


const LoginForm = () => {
  const [error , setError] = useState(null)
  const router = useRouter();
  const { setAuth} =useAuth()
  async function onSubmit(event) {
    event.preventDefault();
    try{
      const formData = new FormData(event.currentTarget);
      const user =await loginUser(formData);
      console.log(user);
      if(user){
        setAuth(user)
        router.push("/")
      }else{
        setError("Invalid Email or Password")
      }
    }catch(err){
      setError(err.message)
    }
  }
  return (
    <>
    <div className="text-center">
      {error && <p className="text-red-500">{error}</p>}
    </div>
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
    </form>
    </>
  );
};

export default LoginForm;
