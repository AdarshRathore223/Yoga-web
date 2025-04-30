import React from "react";
import { RiSparklingFill } from "react-icons/ri";
import pranjal from "../assets/Contributors/PranjalJain.jpg";
import devendra from "../assets/Contributors/DevendraGautam.jpg";
import Satwick from "../assets/Contributors/SatwickSharma.jpg";
import Naman from "../assets/Contributors/NamanGupta.jpg";
import Abhinav from "../assets/Contributors/AbhinavAditiya.png";
import Kishore from "../assets/Contributors/KishoreN.jpg";

// Sample data for contributors
const contributorsData = [
  { id: 1, name: "Satwick Sharma", desc: "Developer", img: Satwick },
  { id: 2, name: "Pranjal Jain", desc: "Content Writer", img: pranjal },
  { id: 3, name: "Devendra Kumar Gautam", desc: "Content Writer", img: devendra },
  { id: 4, name: "Naman Gupta", desc: "Content Writer", img: Naman },
  { id: 5, name: "Abhinav Kumar Aditya", desc: "Content Writer", img: Abhinav },
  { id: 6, name: "Kishore N.", desc: "Content Writer", img: Kishore },
  // Add more contributors as needed
];

const Contributors = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center mt-20 p-4 mb-12">
      <h1 className="text-3xl text-[#254A48]">Our Contributors</h1>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 w-full max-w-7xl">
        {contributorsData.map((contributor) => (
          <div
            key={contributor.id}
            className={`border border-black p-4 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer 
              flex flex-col items-center
              w-full sm:w-[45%] md:w-[30%] lg:w-[22%] 
              min-h-[18rem]
              ${
                contributor.id % 2 !== 0
                  ? "bg-[#31706c] text-white"
                  : "bg-[#b2ddd6]"
              }`}
          >
            <div className="flex justify-between items-center w-full mb-4">
              <div>{String(contributor.id).padStart(2, "0")}</div>
              <RiSparklingFill />
            </div>
            <div className="rounded-full aspect-square overflow-hidden flex justify-center items-center w-28 h-28 mb-4">
              <img
                src={contributor.img}
                alt={contributor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center font-semibold">{contributor.name}</h1>
            <p className="text-sm text-center">{contributor.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
