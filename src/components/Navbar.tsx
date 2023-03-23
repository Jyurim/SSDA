import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-neutral-100">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="text-gray-700 flex items-center px-2">
                <Image src={logo} alt="" width={100} />
                <span className="pl-4 font-bold">Home</span>
              </Link>
            </div>
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="demo" className="text-gray-700 hover:text-gray-900 py-5 px-3">
                Demo
              </Link>
              <Link href="board" className="text-gray-700 hover:text-gray-900 py-5 px-3">
                Board
              </Link>
              <Link href="info" className="text-gray-700 hover:text-gray-900 py-5 px-3">
                Info
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden items-center space-x-1 md:flex">
            <Link
              href="login"
              className="text-white-900 hover:bg-yellow-300 hover:text-yellow-800 rounded bg-white py-2 px-3 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="signup"
              className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 rounded py-2 px-3 transition duration-300"
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
        <Link href="demo" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Demo
        </Link>
        <Link href="board" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Board
        </Link>
        <Link href="info" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Info
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
