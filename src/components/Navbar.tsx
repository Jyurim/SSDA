import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { FunctionComponent } from "react";
import { INavItem } from "@/types/interfaces";

type Props = {
  navList: INavItem[];
};

const Navbar: FunctionComponent<Props> = () => {
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
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="make" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Make
              </Link>
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
              href="/user/login"
              className="text-white-900 rounded bg-white py-2 px-3 transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
            >
              Login
            </Link>
            <Link
              href="/user/signup"
              className="rounded bg-yellow-400 py-2 px-3 text-yellow-900 transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
