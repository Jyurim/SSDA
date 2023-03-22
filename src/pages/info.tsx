const info = () => {
  return (
    <div className="flex flex-row px-4 py-5 md:container md:mx-auto">
      <div className="max-w-[40%]">
        <h1 className="text-2xl font-bold">Our Team</h1>
        <p className="py-1 text-gray-600">
          This is the info page sadlkqwlenalksndlknwe lknalksdnklwqnewkln
        </p>
      </div>

      <div className="grid grid-flow-col">
        <div className="w-full max-w-sm px-4 lg:flex lg:max-w-full">
          <div className="flex flex-col justify-between rounded border border-gray-400 bg-white p-4 leading-normal lg:border-gray-400">
            <div className="mb-8">
              <div className="text-gray-900 mb-2 text-xl font-bold ">
                Can coffee make you a better developer?
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-col justify-between rounded border border-gray-400 bg-white p-4 leading-normal lg:border-gray-400">
            <div className="mb-8">
              <div className="text-gray-900 mb-2 text-xl font-bold ">
                Can coffee make you a better developer?
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
