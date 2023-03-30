import Head from "next/head";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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
              <div className="dark:border-gray-700 rounded-lg border-2 border-dashed border-gray-200 p-4">
                <div className="mb-2 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4">
                    <div>
                      <FontAwesomeIcon
                        className="group-hover:text-gray-900 h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                        icon={faChessPawn}
                      />{" "}
                      내 계정
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div>
                      <FontAwesomeIcon
                        className="group-hover:text-gray-900 h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                        icon={faChessPawn}
                      />{" "}
                      나의 폰트
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div>
                    <FontAwesomeIcon
                      className="group-hover:text-gray-900 h-6 w-6 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      icon={faChessPawn}
                    />{" "}
                    내가 쓴 글
                  </div>

                  <div className="mb-4 grid grid-cols-4 gap-4 p-4">
                    <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined dark:border-gray-700 relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4">
                      <div className="h-full w-full">
                        <div className="relative w-full">
                          <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                            alt=""
                          />
                        </div>
                        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                          <div className="mb-2">
                            <p className="text-navy-700 text-lg font-bold"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                              By Esthera Jackson{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                          <div className="flex">
                            <p className="text-brand-500 !mb-0 text-sm font-bold">
                              Current Bid: 0.91 <span>ETH</span>
                            </p>
                          </div>
                          <button className="linear bg-brand-900 hover:bg-brand-800 active:bg-brand-700 rounded-[20px] px-4 py-2 text-base font-medium text-white transition duration-200">
                            Place Bid
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined dark:border-gray-700 relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4">
                      <div className="h-full w-full">
                        <div className="relative w-full">
                          <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                            alt=""
                          />
                        </div>
                        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                          <div className="mb-2">
                            <p className="text-navy-700 text-lg font-bold"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                              By Esthera Jackson{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                          <div className="flex">
                            <p className="text-brand-500 !mb-0 text-sm font-bold">
                              Current Bid: 0.91 <span>ETH</span>
                            </p>
                          </div>
                          <button className="linear bg-brand-900 hover:bg-brand-800 active:bg-brand-700 rounded-[20px] px-4 py-2 text-base font-medium text-white transition duration-200">
                            Place Bid
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined dark:border-gray-700 relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4">
                      <div className="h-full w-full">
                        <div className="relative w-full">
                          <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                            alt=""
                          />
                        </div>
                        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                          <div className="mb-2">
                            <p className="text-navy-700 text-lg font-bold"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                              By Esthera Jackson{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                          <div className="flex">
                            <p className="text-brand-500 !mb-0 text-sm font-bold">
                              Current Bid: 0.91 <span>ETH</span>
                            </p>
                          </div>
                          <button className="linear bg-brand-900 hover:bg-brand-800 active:bg-brand-700 rounded-[20px] px-4 py-2 text-base font-medium text-white transition duration-200">
                            Place Bid
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined dark:border-gray-700 relative flex w-full max-w-[300px] flex-col rounded-[20px] border-2 border-gray-200 bg-white bg-clip-border !p-4">
                      <div className="h-full w-full">
                        <div className="relative w-full">
                          <img
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                            className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                            alt=""
                          />
                        </div>
                        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                          <div className="mb-2">
                            <p className="text-navy-700 text-lg font-bold"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                              By Esthera Jackson{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                          <div className="flex">
                            <p className="text-brand-500 !mb-0 text-sm font-bold">
                              Current Bid: 0.91 <span>ETH</span>
                            </p>
                          </div>
                          <button className="linear bg-brand-900 hover:bg-brand-800 active:bg-brand-700 rounded-[20px] px-4 py-2 text-base font-medium text-white transition duration-200">
                            Place Bid
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dark:bg-gray-800 mb-4 flex h-48 items-center justify-center rounded bg-gray-50">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
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
