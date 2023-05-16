import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-white">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center px-2 text-gray-700">
                <Image src={logo} alt="" width={100} />
                <span className="pl-4 font-bold">Home</span>
              </Link>
            </div>
            <div className="z-10 hidden items-center space-x-1 md:flex">
              <div className="group relative inline-block">
                <div className="inline-flex items-center">
                  <span className="mr-1">Make</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="absolute hidden pt-1 text-center text-gray-700 group-hover:block">
                  <li className="">
                    <Link
                      className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
                      href="make/draw"
                    >
                      draw
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400"
                      href="make/file"
                    >
                      file
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="board" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Board
              </Link>
              <Link href="info" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Info
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
