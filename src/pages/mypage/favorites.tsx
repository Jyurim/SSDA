import Menu from "./Menu";

const favorites = () => {
  return (
    <section className="h-screen">
      <div className="flex">
        <div className="">
          <Menu />
        </div>
        <div className="w-full">
          <div className=" px-3 py-4">
            <div className="flex w-10/12 flex-col justify-center md:container md:mx-auto">
              <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-6">
                <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4">
                  <div className="h-full w-full">
                    <div className="relative w-full">
                      <img
                        src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                        className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                        alt=""
                      />
                      <button className="text-brand-500 absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            ></path>
                          </svg>
                        </div>
                      </button>
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
                <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4">
                  <div className="h-full w-full">
                    <div className="relative w-full">
                      <img
                        src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                        className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                        alt=""
                      />
                      <button className="text-brand-500 absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            ></path>
                          </svg>
                        </div>
                      </button>
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
                <div className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4">
                  <div className="h-full w-full">
                    <div className="relative w-full">
                      <img
                        src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                        className="3xl:h-full 3xl:w-full mb-3 h-full w-full rounded-xl"
                        alt=""
                      />
                      <button className="text-brand-500 absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            ></path>
                          </svg>
                        </div>
                      </button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default favorites;
