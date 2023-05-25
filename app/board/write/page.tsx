const fontData = [
  {
    id: 1,
    title: "Abstract Colors",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
  },
  {
    id: 2,
    title: "Two Title",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
  },
  {
    id: 3,
    title: "Three Shit",
    image:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
  },
];
const write = () => {
  return (
    <section className="h-screen">
      <div className="flex w-5/12 flex-col justify-center px-4 py-5 md:container md:mx-auto">
        <div className="relative mb-6">
          <label className="block">
            <span className="block  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              제목
            </span>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="mt-1 block h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>
        </div>
        <div className="relative mb-6">
          <label className="block">
            <span className="block  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              폰트
            </span>
            <select
              id="countries"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>선택</option>
              {fontData.map(item => (
                <option key={item.id}>{item.title}</option>
              ))}
            </select>
          </label>
        </div>
        <button className="rounded bg-yellow-300 py-2 px-3 text-yellow-900 transition duration-200 hover:bg-yellow-400 hover:text-yellow-800">
          저장
        </button>
      </div>
    </section>
  );
};

export default write;
