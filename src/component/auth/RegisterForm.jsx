import { registerUser } from "@/app/actions";


const RegisterForm = () => {
  return (
    <form className="login-form" action={registerUser}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name " />
    </div>
    <div>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" placeholder="Enter Email Address" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Enter Password" />
    </div>
    <button
      type="submit"
      className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
    >
      Create Account
    </button>
  </form>
  );
};

export default RegisterForm;