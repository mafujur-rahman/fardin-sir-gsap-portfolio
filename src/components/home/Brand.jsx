import React from 'react';

const Brand = () => {
  return (
    <section className="bg-[#121212] text-white  flex justify-between items-start gap-10 px-6 sm:px-8 md:px-12 xl:px-40 py-16 pt-40 font-sans">

      <div className="">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none max-w-3xl">
          Some of the impressive Brands I have
        </h1>
      </div>

      <div className=" flex flex-col justify-center">

        <p className="text-xl leading-relaxed mb-10 max-w-2xl">
          These are just a few Brands that I personally enjoy the most. I would be
          glad to show you a bunch of other brands that I have done so far. Would
          you like to have a look at them?
        </p>

        <div className="flex items-center mt-5">
          <span className="text-2xl mr-5">All Brands</span>

          <button
            className="bg-transparent border-2 border-white rounded-full w-16 h-16 flex justify-center items-center text-3xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brand;