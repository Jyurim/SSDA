"use client";

import Head from "next/head";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { noAuth } from "@libs/myAlert";
import Link from 'next/link';

export interface IDetailInfo {
  id: number;
  title: string;
  fontName: string;
  fontGenerator: string;
  imageFile: string;
}

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [board, setBoard] = useState<IDetailInfo[]>([]);
 
  const getBoard = async () => {
      const response = await fetch(`http://127.0.0.1:8080/api/board/`, {
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

  useEffect(() => {
    if (!session) {
      noAuth(router);
    }
  }, []);

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
              <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700 min-h-screen">
                <div className="mb-2 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4">
                    <div>
                      <FontAwesomeIcon
                        className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        icon={faChessPawn}
                      />
                      내 계정
                    </div>
                    <div className='rounded-lg bg-white p-4'>
                      <div>
                        아이디
                      <p className="text-sm font-medium text-gray-600 p-2">
                        {session?.user.username}
                      </p>
                      </div>
                      
                      이메일
                      <p className="text-sm font-medium text-gray-600 md:mt-2">
                        {session?.user.email}
                      </p>
                    </div>
                    <Link href="/mypage/userCheck">
                      <button className="mt-2 text-sm font-medium text-gray-600 md:mt-2">
                        개인정보 수정
                      </button>
                    </Link>
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
                    {board.filter((post) => post.fontGenerator===session?.user.username).map(item => (
                      <div
                        key={item.id}
                        className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4 dark:border-gray-700"
                      >
                        <Link href={`/board/post/${item.id}`}>
                        <div className="h-full w-full">
                          <div className="relative w-full">
                            <Image
                              src={item.imageFile}
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
                                By. {item.fontGenerator}
                              </p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
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
