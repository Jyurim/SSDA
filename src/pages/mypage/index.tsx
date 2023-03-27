import Head from "next/head";
import User from "./user";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="h-screen">
        <div className="flex">
          <div className="">
            <Menu />
          </div>
          <div className="w-full">
            <div className="p-4">
              <div className="dark:border-gray-700 rounded-lg border-2 border-dashed border-gray-200 p-4">
                <div className="mb-4 grid grid-cols-3 gap-4">
                  <div className="dark:bg-gray-800 flex h-24 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                  <div className="dark:bg-gray-800 flex h-24 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                  <div className="dark:bg-gray-800 flex h-24 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                </div>
                <div className="dark:bg-gray-800 mb-4 flex h-48 items-center justify-center rounded bg-gray-50">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="dark:bg-gray-800 flex h-28 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                  <div className="dark:bg-gray-800 flex h-28 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                  <div className="dark:bg-gray-800 flex h-28 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                  <div className="dark:bg-gray-800 flex h-28 items-center justify-center rounded bg-gray-50">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                  </div>
                </div>
                <div className="dark:bg-gray-800 mb-4 flex h-48 items-center justify-center rounded bg-gray-50">
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
