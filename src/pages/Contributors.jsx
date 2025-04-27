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
  { id: 2, name: "Pranjal Jain", desc: "UI/UX Designer", img: pranjal },
  { id: 3, name: "Devendra Gautam", desc: "Media Creation", img: devendra },
  { id: 4, name: "Naman Gupta", desc: "Content Writer", img: Naman },
  { id: 5, name: "Abhinav Aditya", desc: "Content Writer", img: Abhinav },
  { id: 6, name: "Kishore N.", desc: "Content Writer", img: Kishore },

  // Add more contributors as needed
];

const Contributors = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center mt-20 p-4 mb-12">
      <h1 className="text-3xl text-[#254A48]">Our Contributors</h1>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-4 w-3/4">
        {/* Map through the contributors data */}
        {contributorsData.map((contributor) => (
          <div
            key={contributor.id}
            className={`border border-black min-h-[18rem] w-1/4 p-4 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${
              contributor.id % 2 !== 0
                ? "bg-[#31706c] text-white"
                : "bg-[#b2ddd6]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>{String(contributor.id).padStart(2, "0")}</div>
              <RiSparklingFill />
            </div>
            <div className="flex justify-center items-center px-8 mb-6">
              <div className="rounded-full aspect-square overflow-hidden flex justify-center items-center mb-4">
                <img
                  src={contributor.img}
                  alt={contributor.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <h1>{contributor.name}</h1>
            <p className="text-sm">{contributor.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
