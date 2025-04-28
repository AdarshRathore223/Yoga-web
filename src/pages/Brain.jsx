import { useState } from "react";

import BalasanaImage from "../assets/yogas/Balasana.png";
import ShirshasanaImage from "../assets/yogas/Shirshasana.png";
import PadmasanaImage from "../assets/yogas/Padmasana.png";

import Balasana from "../Components/Brain/Balasana";
import Shirshasana from "../Components/Brain/Shirshasana";
import Padmasana from "../Components/Brain/Padmasana";

const cards = [
  { image: BalasanaImage, name: "Balasana" },
  { image: ShirshasanaImage, name: "Shirshasana" },
  { image: PadmasanaImage, name: "Padmasana" },
];
function BrainPage() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="mt-20 flex justify-center items-center px-[10%] h-[80vh]">
      <div className="flex justify-center gap-4">
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <div className="col-span-3 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
              Brain & Nervous System Yoga
            </h1>
            <p>
              Our brain and nervous system are the command centers of the body,
              influencing everything from movement to emotions. Yoga practices
              that target the nervous system help regulate stress responses,
              improve cognitive function, and enhance emotional resilience.
              Gentle stretches, balancing poses, and mindful breathing activate
              the parasympathetic nervous system, promoting relaxation and
              mental clarity. Regular practice can boost memory, sharpen
              concentration, and foster a deeper sense of inner peace. In a
              world filled with constant stimulation, Brain & Nervous System
              Yoga offers a sanctuary — nurturing both mental sharpness and
              emotional well-being.
            </p>
          </div>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#def7f3] cursor-pointer rounded-md ${
                activeCard === index ? "border-2 border-[#254a488f]" : ""
              }`}
              onClick={() => setActiveCard(index)}
            >
              <img
                src={card.image}
                alt=""
                className="min-h-80 object-contain"
              />

              <h1
                className={`text-center font-medium text-xl ${
                  activeCard === index ? "text-[#254a48]" : "text-[#569b97]"
                }`}
              >
                {card.name}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-1/2 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
          {activeCard === 0 && <Balasana />}
          {activeCard === 1 && <Shirshasana />}
          {activeCard === 2 && <Padmasana />}
        </div>
      </div>
    </div>
  );
}

export default BrainPage;
