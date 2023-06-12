'use client';

import Image from 'next/image';
import { usePathname} from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";


export default function Post() {
  const { data: session } = useSession();
  const id = usePathname()?.split('/')[3];
    return (
        <section className="h-screen">
        <div className="container my-4 flex flex-col justify-center px-4 md:container md:mx-auto">
        <div className="flex justify-between">
          <div className="relative mb-6">
            <label className="block">
            <span className="block  text-2xl font-medium text-slate-700 after:ml-0.5 after:text-red-500 afFter:content-['*']">
              뭐하지{id} 아아아아아아아아아아아
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