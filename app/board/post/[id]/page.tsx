'use client';

import Image from 'next/image';
import { usePathname} from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

export interface IDetailInfo {
  id: number;
  title: string;
  fontName: string;
  fontGenerator: string;
  imageFile: string;
}

export default function Post() {
  const { data: session } = useSession();
  const [post, setPost] = useState<IDetailInfo>();
  const uid = usePathname()?.split('/')[3];
   
  const getPost = async () => {
    const response = await fetch(`http://127.0.0.1:8080/api/board/${uid}`, {
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
      setPost(data);
      console.log("data",post)
    }
  };

  useEffect(() => {
    if (session?.user.accessToken !== null) getPost();
  }, [session]);

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
              By. {post?.fontGenerator}
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
              src={`/${post?.imageFile}`}
              alt="Font Image"/>
          </div>
        </div>
      </section>
    )
}