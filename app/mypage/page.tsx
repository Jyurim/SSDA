"use client";

import Head from "next/head";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Rating } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { noAuth } from "@libs/myAlert";

const boardData = [
  {
    id: 1,
    title: "Abstract Colors",
    owner: "Esthera Jackson",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Two Title",
    owner: "홍길동",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Three Shit",
    owner: "재익 최",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
    rating: 4.5,
  },
];

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      noAuth(router);
    }
  }, [router, session]);

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="min-h-screen">
        <div className="flex">
          <div className="min-h-screen bg-white">
            <Menu />
          </div>
          <div className="w-full">
            <div className="px-3 py-2">
              <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
                <div className="mb-2 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4">
                    <div>
                      <FontAwesomeIcon
                        className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        icon={faChessPawn}
                      />
                      내 계정
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div>
                      <FontAwesomeIcon
                        className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        icon={faChessPawn}
                      />
                      나의 폰트
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div>
                    <FontAwesomeIcon
                      className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      icon={faChessPawn}
                    />
                    내가 쓴 글
                  </div>

                  <div className="mb-4 grid grid-cols-4 gap-4 p-4">
                    {boardData.map(item => (
                      <div
                        key={item.id}
                        className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4 dark:border-gray-700"
                      >
                        <div className="h-full w-full">
                          <div className="relative w-full">
                            <Image
                              src={item.image}
                              className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                              alt=""
                              width={300}
                              height={300}
                            />
                          </div>
                          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                            <div className="mb-2">
                              <p className="text-navy-700 text-lg font-bold"> {item.title} </p>
                              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                                By {item.owner}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between md:items-center lg:justify-between ">
                            <div className="flex items-center justify-between md:items-center lg:justify-between ">
                              <div className="flex">
                                <Rating>
                                  <Rating.Star />
                                  <Rating.Star />
                                  <Rating.Star />
                                  <Rating.Star />
                                  <Rating.Star filled={false} />
                                  {/* <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    4.95 out of 5
                                  </p> */}
                                </Rating>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
