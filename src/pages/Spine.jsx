import { useState } from "react";

import Marjaryasanaimg from "../assets/yogas/Marjaysana.png";
import Adhoimg from "../assets/yogas/Adho.png";
import Salambaimg from "../assets/yogas/Salamba.png";

import Marjaryasana from "../Components/spine/Marjaryasana";
import Adho from "../Components/spine/AdhoMukhaSvanasana";
import Salamba from "../Components/spine/SalambaBhujangasana";

const cards = [
  { image: Marjaryasanaimg, name: "Marjaryasana" },
  { image: Adhoimg, name: "Adho Mukha Svanasana" },
  { image: Salambaimg, name: "Salamba Bhujangasana" },
];
function SpinePage() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="mt-20 flex justify-center items-center px-[10%] h-[80vh]">
      <div className="flex justify-center gap-4">
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <div className="col-span-3 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
              Spine & Back Care Yoga
            </h1>
            <p>
              A healthy spine is essential for overall strength, mobility, and
              well-being. Spine & Back Care Yoga focuses on improving posture,
              strengthening core muscles, and increasing flexibility to prevent
              and relieve back pain. Gentle stretches, spinal twists, and
              mindful alignment techniques nourish the vertebrae, support the
              discs, and release tension from the neck to the lower back.
              Regular practice can alleviate stiffness, correct imbalances, and
              enhance body awareness. By caring for your spine, you not only
              move with greater ease but also support your nervous system and
              inner vitality — creating a strong foundation for a vibrant life.
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
         {activeCard === 0 && <Marjaryasana />}
          {activeCard === 1 && <Adho />}
          {activeCard === 2 && <Salamba />}
        </div>
      </div>
    </div>
  );
}

export default SpinePage;
