import { useState } from "react";

const Menu = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="dark:bg-gray-800 h-full overflow-y-auto bg-white px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/mypage"
                className="text-gray-900 dark:hover:bg-gray-700 flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="group-hover:text-gray-900 h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/mypage/user"
                className="text-gray-900 dark:hover:bg-gray-700 flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="group-hover:text-gray-900 h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/mypage/favorites"
                className="text-gray-900 dark:hover:bg-gray-700 flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="group-hover:text-gray-900 h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">즐겨찾기</span>
                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-900 dark:hover:bg-gray-700 flex items-center rounded-lg p-2 hover:bg-gray-100 dark:text-white"
                onClick={() => {
                  alert("탈퇴하시겠습니까?");
                }}
              >
                <svg
                  aria-hidden="true"
                  className="group-hover:text-gray-900 h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">회원탈퇴</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Menu;
