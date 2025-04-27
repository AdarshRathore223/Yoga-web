import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import heart from "../assets/heart.png";
import lung from "../assets/lung.png";
import digestive from "../assets/digestive.png";
import reproductive from "../assets/reproductive.png";
import brain from "../assets/brain.png";
import liver from "../assets/liver.png";
import kidney from "../assets/kidney.png";
import spine from "../assets/spine.png";
const cardData = [
  {
    id: 1,
    title: "Heart Health Yoga",
    focus: "Boost circulation, open the chest, reduce stress.",
    description: "Camel Pose, Cobra Pose, Bridge Pose.",
    image: heart,
  },
  {
    id: 2,
    title: "Lungs & Breathing Yoga",
    focus: "Expand lung capacity, improve breath control.",
    description:
      "Pranayama (Breathwork), Fish Pose, Cow Face Pose.",
    image: lung,
  },
  {
    id: 3,
    title: "Brain & Nervous System Yoga",
    focus: "Calm the mind, enhance focus, reduce anxiety.",
    description:
      "Child's Pose, Headstand (for advanced), Lotus Pose + meditation.",
    image: brain,
  },
  {
    id: 4,
    title: "Digestive System Yoga",
    focus: "Aid digestion, relieve bloating, stimulate metabolism.",
    description: "Seated Twist, Bow Pose, Wind-Relieving Pose.",
    image: digestive,
  },
  {
    id: 5,
    title: "Liver Detox Yoga",
    focus: "Stimulate liver function, twist and compress organs.",
    description:
      "Twisting Lunge, Revolved Chair Pose, Bridge Pose.",
    image: liver,
  },
  {
    id: 6,
    title: "Kidney Support Yoga",
    focus: "Boost kidney health, stimulate blood filtration.",
    description: "Child’s Pose, Cobra Pose, Forward Fold.",
    image: kidney,
  },
  {
    id: 7,
    title: "Spine & Back Care Yoga",
    focus: "Align and strengthen the spine, prevent back pain.",
    description: "Cat-Cow Stretch, Downward Dog, Sphinx Pose.",
    image: spine,
  },
  {
    id: 8,
    title: "Women's Reproductive Health Yoga",
    focus: "Hormone balance, lower abdominal relaxation.",
    description:
      "Butterfly Pose, Reclined Bound Angle Pose, Goddess Pose.",
    image: reproductive,
  },
];

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const { title, description, image,focus } = cardData[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center mt-6 min-h-[90vh] p-4">
      <h1 className="text-3xl text-[#254A48] ">Explore More</h1>

      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 rounded-4xl p-4">
        {/* Image Section */}
        <div className="p-4 w-full md:w-1/2 flex justify-center rounded-full bg-[#3f8c85] aspect-square max-w-[40rem]">
          <img
            key={currentIndex} 
            src={image}
            alt={title}
            className="w-full aspect-square max-w-md object-contain opacity-0 scale-95 transition-all duration-700 ease-out"
            onLoad={(e) => {
              e.target.classList.remove("opacity-0", "scale-95");
            }}
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
          <div>
            <h2 className="text-[#254A48] font-semibold text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              <span className="font-semibold text-[#254A48]">Focus: </span>{focus}
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-700">
            <span className="font-semibold text-[#254A48]">Sample Poses: </span>{description}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6 items-start">
            <button className="px-6 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48]  active:bg-[#254A48] hover:text-white active:text-white transition w-fit">
              Read More
            </button>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48]  active:bg-[#254A48] hover:text-white active:text-white transition"
              >
                <BiLeftArrow size={20} />
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48]  active:bg-[#254A48] hover:text-white active:text-white transition"
              >
                <BiRightArrow size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
