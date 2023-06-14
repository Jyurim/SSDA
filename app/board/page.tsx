"use client";
// import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';

export interface IDetailInfo {
  id: number;
  title: string;
  fontName: string;
  fontGenerator: string;
}

const Board = () => {
  const { data: session } = useSession();
  const [board, setBoard] = useState<IDetailInfo[]>([]);
 
  const getBoard = async () => {
      const response = await fetch(`http://127.0.0.1:8080/api/board`, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "*",
        },
      });
      console.log("response",response)
      
      if (response.ok) {
        const data = await response.json();
        setBoard(data);
      }
  };

  useEffect(() => {
    if (session?.user.accessToken !== null) getBoard();
  }, [session]);
  
  return (
    <section className="min-h-3/4">
      <div className="flex h-full w-full flex-col justify-center px-4 py-5 md:container md:mx-auto">
        {session?.user ? (
        <div style={{ display: "flex" }}>
          <Link
            href="/board/write"
            className="mb-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            //style={{ marginLeft: '30px' }}
          >
            쓰기
          </Link>
        </div>):(<></>)}
        <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-6">
          {board.map(item => (
            <div
              key={item.id}
              className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4"
            >
              <Link href={`/board/post/${item.id}`}>
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
                        By {item.fontGenerator}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between md:items-center lg:justify-between ">
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
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
