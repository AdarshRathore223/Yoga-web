import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import img from "../assets/hero.png"; // Use different images for real data

const cardData = [
  {
    id: 1,
    title: "Yoga for Relaxation",
    description:
      "Experience deep relaxation and peace through this calming yoga sequence.",
    image: img,
  },
  {
    id: 2,
    title: "Morning Energy Yoga",
    description:
      "Start your day with vibrant energy by following this quick morning routine.",
    image: img,
  },
  {
    id: 3,
    title: "Strength Building Yoga",
    description:
      "Build your strength and stability with this powerful yoga flow.",
    image: img,
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

  const { title, description, image } = cardData[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center mt-16 min-h-[90vh] p-4">
      <h1 className="text-3xl text-[#254A48] mb-8">Explore More</h1>

      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 rounded-4xl p-4">
        
        {/* Image Section */}
        <div className="rounded-3xl p-4 w-full md:w-1/2 flex justify-center">
          <img src={image} alt={title} className="w-full h-auto max-w-md object-contain" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
          <div>
            <h2 className="text-[#254A48] font-semibold text-2xl md:text-3xl">{title}</h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6 items-start">
            <button className="px-6 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48] hover:text-white transition w-fit">
              Read More
            </button>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48] hover:text-white transition"
              >
                <BiLeftArrow size={20} />
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 border-2 border-[#254A48] text-[#254A48] rounded-full hover:bg-[#254A48] hover:text-white transition"
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
