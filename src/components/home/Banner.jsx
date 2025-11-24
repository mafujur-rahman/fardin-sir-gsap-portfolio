import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDownLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-[#121212] text-white h-[90vh] overflow-hidden font-sans">
      <div className="flex flex-col lg:flex-row ">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen z-999" >
          <Image
            src="/images/bg.png"
            alt="Fardeen Ahmed"
            fill
            className="object-cover object-top "
            priority
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 sm:px-8 md:px-12 xl:px-16 ">
          {/* Top Content */}
          <div className="flex flex-col justify-center flex-1">
            <p className="text-3xl tracking-wider flex items-center justify-center lg:justify-start">
              <span role="img" aria-label="wave" className="mr-2">👋</span>
              Hello, i&apos;m Fardeen Ahmed
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mt-4">
              Professional <br /> Designer
            </h1>

            <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mt-6">
              <div className="w-72 h-0.5 bg-gray-100 mx-auto lg:mx-0" />
              <p className="text-2xl text-gray-100 font-light">
                Hey, are you looking for a designer to build your brand and grow your business? Lets shake hands with me.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 mt-6">
              {['LINKEDIN', 'GITHUB', 'INSTAGRAM'].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="border border-white py-2 px-10 text-md font-medium tracking-wider hover:bg-white hover:text-gray-900 transition duration-300 rounded-full"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Keep Scrolling */}
            <div className="flex items-center justify-end gap-2 mt-12">
              <p className="text-xs tracking-widest uppercase text-white text-right">
                Keep <br /> Scrolling
              </p>
              <FaArrowDownLong className="w-6 h-6 animate-bounce text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
