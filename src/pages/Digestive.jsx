import { useState } from "react";

import MatsyendrasanaImage from "../assets/yogas/Matsyendrasana.png";
import PawanmuktasanaImage from "../assets/yogas/Pawanmuktasana.png";
import TrikonasanaImage from "../assets/yogas/Trikonasana.png";

import Matsyendrasana from "../Components/Digestive/Matsyendrasana";
import Pawanmuktasana from "../Components/Digestive/Pawanmuktasana";
import Trikonasana from "../Components/Digestive/Trikonasana";

const yogas = [
  { image: MatsyendrasanaImage, name: "Ardha Matsyendrasana" },
  { image: PawanmuktasanaImage, name: "Pawanmuktasana" },
  { image: TrikonasanaImage, name: "Trikonasana" },
];

function DigestivePage() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="mt-20 flex justify-center items-center px-4 lg:px-[10%] h-auto lg:h-[80vh]">
      <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-3 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
              Digestive System Yoga
            </h1>
            <p>
              A healthy digestive system is the foundation of overall wellness.
              Yoga practices focused on digestion stimulate the abdominal
              organs, enhance metabolism, and promote smoother digestion.
              Twisting postures, gentle compressions, and mindful breathing can
              help relieve bloating, constipation, and indigestion. They also
              activate the parasympathetic nervous system, supporting "rest and
              digest" functions. By improving blood flow to the digestive tract,
              yoga fosters better nutrient absorption and detoxification.
              Digestive System Yoga not only strengthens the body but also
              cultivates a lighter, more energized feeling from within —
              empowering you to live each day with comfort and vitality.
            </p>
          </div>
          {yogas.map((card, index) => (
            <div
              key={index}
              className={`bg-[#def7f3] cursor-pointer rounded-md ${
                activeCard === index ? "border-2 border-[#254a488f]" : ""
              }`}
              onClick={() => setActiveCard(index)}
            >
              <img
                src={card.image}
                alt={card.name}
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

        <div className="w-full lg:w-1/2 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
          {activeCard === 0 && <Matsyendrasana />}
          {activeCard === 1 && <Pawanmuktasana />}
          {activeCard === 2 && <Trikonasana />}
        </div>
      </div>
    </div>
  );
}

export default DigestivePage;
