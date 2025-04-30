import img from "../assets/hero.png";
import { FaAngleDoubleDown } from "react-icons/fa";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-[#d8efea] h-[100vh] shadow-[0_4px_10px_rgba(0,0,0,0.3)] relative w-full">
      <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-[10%] py-6 md:py-0">


        <div className="absolute bottom-4 right-4 font-sec text-2xl flex gap-2 text-[#254A48] items-center fade">
          Explore  <FaAngleDoubleDown />
        </div>

        {/* Text Content */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="text-[#254A48] max-w-xl text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Start Your Day Right
            </h1>
            <p className="uppercase text-md tracking-wider text-[#3e706b] font-semibold">
              Morning Flow for a Fresh Start
            </p>
            <p className="text-base text-[#375653]">
              Kickstart your day with a gentle and energizing yoga flow designed
              to awaken your body and focus your mind.
            </p>
            <Link to="/purpose" className="mt-8 px-6 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48] hover:text-white transition">
              Read More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Yoga Pose"
            className="h-[300px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
