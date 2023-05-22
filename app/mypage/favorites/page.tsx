"use client";
import Menu from "../Menu";
import Image from "next/image";
import { Rating } from "flowbite-react";

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

const favorites = () => {
  return (
    <section className="h-screen">
      <div className="flex">
        <div className="">
          <Menu />
        </div>
        <div className="w-full">
          <div className=" px-3 py-4">
            <div className="flex w-10/12 flex-col justify-center md:container md:mx-auto">
              <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-6">
                {boardData.map(item => (
                  <div
                    key={item.id}
                    className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4"
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
                        {/* <button className="text-brand-500 absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            ></path>
                          </svg>
                        </div>
                      </button> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default favorites;
