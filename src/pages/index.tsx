import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const Home = () => {
return(
<section className="bg-[url('../../img/landing_bg.jpg')]">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-100">Write Your Own.</h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-100">Make Only One.</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl ">Its been a long day without you my friend. and i will tell you all about it when i see you again.</p>
             
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Try For Free !
          </button>

          
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          
      </div>                
  </div>
</section>)};
 

export default Home;
