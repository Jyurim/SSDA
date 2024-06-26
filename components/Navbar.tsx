"use client";

import Image from "next/image";
import logo from "@public/logo.png";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center px-2">
                <Image src={logo} alt="" width={100} />
                <span className="pl-4 font-bold">홈</span>
              </Link>
            </div>
            <div className="z-10 hidden items-center space-x-1 md:flex">
              <div className="group relative inline-block hover:text-yellow-400">
                <div className="inline-flex items-center">
                  <span className="mr-1">만들기</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <ul className="absolute hidden pt-1 text-center group-hover:block">
                  <li className="">
                    <Link
                      className="whitespace-no-wrap block rounded-t border border-black bg-white py-2 px-2 text-black transition duration-200  hover:text-yellow-400"
                      href="make/draw"
                    >
                      그리기
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="whitespace-no-wrap block rounded-b border-r border-b border-l border-black bg-white py-2 px-2 text-black transition duration-200 hover:text-yellow-400"
                      href="make/file"
                    >
                      파일
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href="board"
                className="py-5 px-3 transition duration-200 hover:text-yellow-400"
              >
                게시판
              </Link>
              <Link href="info" className="py-5 px-3 transition duration-200 hover:text-yellow-400">
                팀 정보
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          {session?.user ? (
            <div className="flex items-center space-x-1">
              <Link
                href="mypage"
                className="py-5 px-3 transition duration-200 hover:text-yellow-400"
              >
                프로필
              </Link>
              <div
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className="rounded bg-yellow-400 py-2 px-3 text-yellow-900 transition duration-200 hover:bg-yellow-300 hover:text-yellow-800"
              >
                로그아웃
              </div>
            </div>
          ) : (
            <div className="hidden items-center space-x-1 md:flex">
              <Link
                href="/user/login"
                className="text-white-900 rounded bg-white py-2 px-3 transition duration-200 hover:bg-yellow-300 hover:text-yellow-800"
              >
                로그인
              </Link>
              <Link
                href="/user/signup"
                className="rounded bg-yellow-400 py-2 px-3 text-yellow-900 transition duration-200 hover:bg-yellow-300 hover:text-yellow-800"
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
