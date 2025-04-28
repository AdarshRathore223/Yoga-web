import React from "react";
import purpose from "../assets/purpose.png";
const Purpose = () => {
  return (
    <div className="flex flex-col justify-center w-full items-start mt-20 p-10 mb-12">
      <div className="bg-[#def7f3] p-10 border border-[#254A48] rounded-lg shadow-lg w-full">
        <div className="flex justify-center items-center gap-8">
          <div className="w-1/2 flex justify-center items-center">
            <img src={purpose} alt="" />
          </div>
          <div className="text-xl text-justify space-y-4 w-1/2">
            <h1 className="text-3xl text-[#254A48] font-semibold">
              Our Purpose
            </h1>
            <p>
              At the core of our mission is a simple, yet powerful idea: how you
              spend your morning has an impact on your whole day. We want to
              inspire and support you to fully embrace morning yoga as a natural
              and important part of your life.
            </p>

            <p>
              Yoga after sleeping is more than just flexibility or fitness, it
              is about waking your body up, refreshing your mind, and connecting
              with your breath before the world starts clamoring for your
              attention. A few stretches, movements, and mindful breaths, can
              get your energy flowing, help your circulation, and lay the
              groundwork for a positive, productive day.
            </p>

            <p>
              We believe we can impact lives with morning yoga; cultivate
              physical health, calm your mind and ignite a spirit of mindfulness
              that will carry through each day. We want everyone to experience
              this wonderful practice and we want it to be easy, enjoyable and
              exciting!
            </p>

            <p>Start your day with intention. Start it with yoga. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
