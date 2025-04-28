import { useState } from "react";
import PranayamImage from "../assets/yogas/Pranayam.png";
import GomhukImage from "../assets/yogas/Gomukhasana.png";
import MatsyasanaImage from "../assets/yogas/Matsyasana.png";
import Pranayam from "../Components/Lungs/Pranayam";
import Matsyasana from "../Components/Lungs/Matsyasana";
import Gomukhasana from "../Components/Lungs/Gomukhasana";

const cards = [
  { image: PranayamImage, name: "Pranayama" },
  { image: MatsyasanaImage, name: "Matsyasana" },
  { image: GomhukImage , name: "Gomukhasana" },
];
function LungsPage() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="mt-20 flex justify-center items-center px-[10%] h-[80vh]">
      <div className="flex justify-center gap-4">
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <div className="col-span-3 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
              Yoga for Lungs: Strengthen Your Breath, Expand Your Life
            </h1>

            <p>
              Breath is life — and healthy lungs and pneumonic function are
              essential to overall health. Practicing yoga for lung health
              develops lung capacity, improves oxygen flow, and increases
              stamina. It increases the strength of the respiratory muscles,
              improves posture, and develops mindful breathing - all important
              components of stress and anxiety reduction. As we lengthen the
              breath we also increase energy, mental clarity, and emotional
              stability. Whether you are an athlete, business professional, or
              someone looking for better vitality, nurturing your breath through
              yoga can improve your health from the inside out. A deep breath
              means a fuller, healthier life.
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
              <img src={card.image} alt="" className="min-h-80 object-contain" />
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
          {activeCard === 0 && <Pranayam />}
          {activeCard === 1 && <Matsyasana />}
          {activeCard === 2 && <Gomukhasana />}
        </div>
      </div>
    </div>
  );
}

export default LungsPage;
