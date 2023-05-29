"use client";
// import Image from "next/image";
import { Rating } from "flowbite-react";
import {useEffect, useState} from "react";
import Link from "next/link";
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

const board = () => {
  return (
    <section className="min-h-3/4">
      <div className="flex w-full h-full flex-col justify-center px-4 py-5 md:container md:mx-auto">
        <div style={{ display: 'flex' }}>
          <Link
              href="/board/write"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-yellow-900"
              //style={{ marginLeft: '30px' }}
          >
            쓰기
          </Link>
        </div>
      <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-6">

          {boardData.map(item => (
            <div
              key={item.id}
              className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4"
            >
              <div className="h-full w-full">
                <div className="relative w-full">
                  {/* <Image
                    width={300}
                    height={300}
                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                    className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                    alt=""
                  /> */}
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div className="mb-2">
                    <p className="text-navy-700 text-lg font-bold">{item.title}</p>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                      By {item.owner}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:items-center lg:justify-between ">
                  <div className="flex">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.95 out of 5
                      </p>
                    </Rating>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
};

export default board;
