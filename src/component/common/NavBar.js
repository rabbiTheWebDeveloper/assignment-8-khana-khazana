

const NavBar = () => {
  return (
    <nav>
    <div className="container flex justify-between py-6">
      <a href="/">
        <img
          src="/assets/images/logo.png"
          alt=""
          className="object-cover h-[40px]"
        />
      </a>
      <ul className="flex gap-4 text-sm text-gray-500">
        <li className="py-2 active">
          <a href="/">Home</a>
        </li>
        <li className="py-2">
          <a href="/">Recipe</a>
        </li>
        <li className="py-2">
          <a href="/">About us</a>
        </li>
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;