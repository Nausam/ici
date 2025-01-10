import Image from "next/image";
import React from "react";
import { Numbers } from "../Home/Numbers";

const Dh_Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-lightBlue/5 backdrop-blur-lg shadow-lg rounded-lg border border-lightBlueGreen/50">
        <div className="grid grid-cols-2 gap-6 py-8 px-6 md:grid-cols-4 font-dhivehi">
          <div className="text-center">
            <Image
              src="/icons/man.png"
              alt="man"
              width={50}
              height={50}
              className="mx-auto invert"
            />
            <Numbers number={495} />
            <p className="text-xl text-gray-300">ފިރިހެން</p>
          </div>

          <div className="text-center">
            <Image
              src="/icons/woman.png"
              alt="woman"
              width={50}
              height={50}
              className="mx-auto invert"
            />
            <Numbers number={455} />
            <p className="text-xl text-gray-300">އަންހެން</p>
          </div>
          <div className="text-center">
            <Image
              src="/icons/home.png"
              alt="households"
              width={50}
              height={50}
              className="mx-auto invert"
            />
            <Numbers number={353} />
            <p className="text-xl text-gray-300">ގޭބިސީ</p>
          </div>

          <div className="text-center">
            <Image
              src="/icons/population.png"
              alt="population"
              width={50}
              height={50}
              className="mx-auto invert"
            />
            <Numbers number={950} />
            <p className="text-xl text-gray-300">އާބާދީ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dh_Home;
