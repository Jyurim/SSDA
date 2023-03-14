import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="mx-auto  px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700">
                <Image src={logo} alt="" width={80} />
                <span className="pl-4 font-bold">Home</span>
              </Link>
            </div>
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="demo" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Demo
              </Link>
              <Link href="board" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Board
              </Link>
              <Link href="contact" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden items-center space-x-1 md:flex">
            <Link
              href="login"
              className="text-white-900 rounded bg-white py-2 px-3 transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
            >
              Login
            </Link>
            <Link
              href="signup"
              className="rounded bg-yellow-400 py-2 px-3 text-yellow-900 transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
            >
              Signup
            </Link>
          </div>

          {/* mobile menu */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      {/* <div className={classNames("md:hidden", { hidden: !menuToggle })}> */}
      <div className={!menuToggle ? "md:hidden" : ""}>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Demo
        </Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Board
        </Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
