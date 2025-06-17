import React from "react";
import { ComputerCanvas } from "../canvas/ComputerCanvas";
import { config } from "../constants/config";

const Hero = () => {
  return (
    <section className="flex items-center justify-between h-screen px-10 bg-[#1a1a1a]">
      {/* Left Text Block */}
      <div className="max-w-xl">
        <p className="text-sm tracking-widest text-gray-400">HI, I'M {config.hero.name.toUpperCase()}</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mt-4 leading-tight">
          I’M A <span className="text-[#915EFF]">Full Stack DEVELOPER</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          {config.hero.p[0]} <br /> {config.hero.p[1]}
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-200"
        >
          VIEW MY PROJECTS
        </a>
      </div>

      {/* Right 3D Model */}
      <div className="hidden lg:block w-1/2">
        <ComputerCanvas />
      </div>
    </section>
  );
};

export default Hero;
