import React from "react";

const DownwardDog = () => {
  return (
    <div>
      <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">
        Downward-Facing Dog - Adho Mukha Svanasana
      </h1>
      <p>
        Downward-Facing Dog is an iconic yoga pose where the body forms an inverted V-shape. Hands and feet are grounded firmly while the hips lift high. It stretches the entire body and builds strength.
      </p>

      <h2 className="text-lg font-semibold text-[#254a48] mt-4">Body Benefits:</h2>
      <ul className="list-disc list-inside">
        <li>Strengthens the arms, shoulders, and legs.</li>
        <li>Deeply stretches the spine, hamstrings, calves, and arches of the feet.</li>
        <li>Decompresses the spine and stimulates blood flow throughout the body.</li>
      </ul>

      <h2 className="text-lg font-semibold text-[#254a48] mt-4">Posture Benefits:</h2>
      <ul className="list-disc list-inside">
        <li>Engages the shoulders and lengthens the spine.</li>
        <li>Promotes proper spinal alignment.</li>
        <li>Reduces rounding of the upper back, enhancing posture stability.</li>
      </ul>

      <h2 className="text-lg font-semibold text-[#254a48] mt-4">Everyday Impact:</h2>
      <p>
        Regular practice of Downward Dog refreshes the body after long periods of sitting or standing. It relieves mild back pain, boosts circulation, and re-energizes the nervous system, helping you feel stronger and more balanced throughout the day.
      </p>
    </div>
  );
};

export default DownwardDog;
