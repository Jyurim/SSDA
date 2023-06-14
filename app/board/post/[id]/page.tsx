'use client';

import Image from 'next/image';
import { usePathname} from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

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

export default function Post() {
  const { data: session } = useSession();
  const [post, setPost] = useState<{ id: number; title: string; owner: string; image: string }>();
  const uid = usePathname()?.split('/')[3];

  useEffect(() => {
    const getPost = (uid: any) => {
      const newPost = boardData.find((post) => post.id === Number(uid));
      if (newPost) {
        setPost(newPost);
      }
    };

    if (uid) {
      getPost(uid);
    }
  }, [uid]);

  // const getPost = async () => {
  //   await fetch(`/api/board/${uid}`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     mode: 'cors',
  //     credentials: 'include',
  //   })
  //     .then((res) => {
  //       if (res.ok) return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPost(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getPost();
  // }, [id]);

    return (
        <section className="h-screen">
        <div className="container my-4 flex flex-col justify-center px-4 md:container md:mx-auto">
        <div className="flex justify-between">
          <div className="relative mb-6">
            <label className="block">
            <span className="block  text-2xl font-medium text-slate-700 after:ml-0.5 after:text-red-500 afFter:content-['*']">
              {post?.title}
            </span>
            <span className="block  text-lg font-medium text-slate-600 after:ml-0.5 after:text-red-500 afFter:content-['*']">
              By. {post?.owner}
            </span>
            </label>
          </div>
          <div>
            <button 
                className="mb-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
              삭제
            </button>
          </div>
          </div>
          <div className="relative mb-6">
            <Image 
            width={500}
            height={500}
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
              // className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
              alt=""/>
          </div>
         
        </div>
      </section>
    )
}