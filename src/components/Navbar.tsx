"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken")!);
  }, []);

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
                      as={accessToken ? "make/draw" : ""}
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
          {accessToken ? (
            <div className="flex items-center space-x-1">
              <Link href="mypage" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                MyPage
              </Link>
              <div
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  setAccessToken("");
                  window.location.href = "/";
                }}
                className="rounded bg-yellow-400 py-2 px-3 text-yellow-900 transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
              >
                Logout
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
