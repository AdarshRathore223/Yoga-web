import purpose from "../assets/purpose.png";
import { useState } from "react";
import Ustrasan from "../Components/Heart/Ustrasan";
import SetuBhandhasana from "../Components/Heart/SetuBhandhasana";
import UstrasanImage from "../assets/yogas/Ustrasan.png";
import BhujangasanaImage from "../assets/yogas/Bhujangasana.png";
import SetuBhandhasanaImage from "../assets/yogas/SetuBhandhasana.png";
import Bhujangasana from "../Components/Heart/Bhujangasana";

const cards = [
  { image: UstrasanImage, name: "Ustrasan" },
  { image: BhujangasanaImage, name: "Bhujangasana" },
  { image: SetuBhandhasanaImage, name: "Setu Bhandhasana" },
];
function HeartPage() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="mt-20 flex justify-center items-center px-[10%] h-[80vh]">
      <div className="flex justify-center gap-4">
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <div className="col-span-3 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
              Why It Matters?
            </h1>
            <p>
              Certain yoga practices, such as Camel Pose, Cobra Pose, and Bridge
              Pose, help boost circulation and reduce tension in the nervous
              system, actively supporting cardiovascular health. Combining deep
              breathing with focused movement increases the availability of
              oxygen to the heart and tissues, thereby supporting vitality and
              endurance. Chest-opening postures support lung expansion and
              posture, both necessary for a healthy heart. In addition,
              mindfulness and relaxation, which are significant aspects of yoga,
              contribute heavily to reduced levels of stress that greatly impact
              heart health. In time, regular practice of these poses can improve
              cardiovascular health and aid in managing blood pressure.
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
              <img src={card.image} alt="" />
              <h1 className={`text-center font-medium text-xl ${activeCard === index ? "text-[#254a48]" : "text-[#569b97]"}`}>{card.name}</h1>
            </div>
          ))}
        </div>

        <div className="w-1/2 bg-[#def7f3] min-h-6 border border-[#254a488f] rounded-lg shadow-lg p-4">
          {activeCard === 0 && <Ustrasan />}
          {activeCard === 1 && <Bhujangasana />}
          {activeCard === 2 && <SetuBhandhasana />}
        </div>
      </div>
    </div>
  );
}

export default HeartPage;
