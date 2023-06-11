'use client';
import { useRouter } from "next/navigation";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Post() {
    // const router = useRouter()

    return (
        <section className="h-screen">
        <div className="flex w-5/12 flex-col justify-center px-4 py-5 md:container md:mx-auto">
          <div className="relative mb-6">
            <label className="block">
            <span className="block  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 afFter:content-['*']">
              제목
            </span>
            </label>
          </div>

          <div className="relative mb-6">
            <label className="block">
            <span className="block  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500">
              폰트
            </span>
              
            </label>
          </div>
         
        </div>
      </section>
    )
}