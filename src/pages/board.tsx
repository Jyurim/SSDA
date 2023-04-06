// import Image from "next/image";
import { Rating } from "flowbite-react";

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

const board = () => {
  return (
    <section className="h-screen">
      <div className="flex w-10/12 flex-col justify-center px-4 py-5 md:container md:mx-auto">
        <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-6">
          {boardData.map(item => (
            <div
              key={item.id}
              className="!z-5 shadow-3xl shadow-shadow-500 3xl:p-![18px] undefined relative flex w-full max-w-[300px] flex-col rounded-[20px] bg-white bg-clip-border !p-4"
            >
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
                      By {item.owner}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:items-center lg:justify-between ">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default board;
