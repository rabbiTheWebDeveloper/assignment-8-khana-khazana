import Image from "next/image";
import Logo from "../../../public/assets/images/logo.png";
import Link from "next/link";
import LogOut from "../auth/LogOut";


const NavBar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <a href="/">
          <Image
            src={Logo}
            alt=""
            className="object-cover h-[40px]"
          />
        </a>
        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2">
            <Link href="/recipe">Recipe</Link>
          </li>
          <li className="py-2">
            <Link href="/">About us</Link>
          </li>
          <LogOut />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;