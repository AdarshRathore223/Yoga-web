import React from "react";

const Pranayam = () => {
  return (
    <div>
      <h1 className="text-xl font-medium text-[#254a48] hover:underline cursor-pointer">Pranayama - The Art of Conscious Breathing</h1>
      <p>
        Pranayama, or "expansion of the spirit," is a primary phase of yoga that
        works directly with the lungs and the respiratory system. Unlike aerobic
        exercise, where the improvement and modification of breathing occur but
        are not the prototype, pranayama is affecting the mechanics of breathing
        itself to modify and improve. From regular aspiratory patterns, we can
        take in and use a greater amount of oxygen, calm our nervous systems,
        and develop endurance.
      </p>

      <ul className="list-disc list-inside">
        <li>
          One simple method of pranayama is Nadi Shodhana (Alternate-Nostril
          Breathing).
        </li>
        <li>Find a comfortable, upright position.</li>
        <li>With your thumb, gently close the right nostril.</li>
        <li>Slowly inhale through your left nostril.</li>
        <li>
          Gently close the left nostril with your ring finger and exhale through
          your right nostril.
        </li>
        <li>Reverse the sequence, which completes one full cycle.</li>
      </ul>

      <p>
        This technique balances the hemispheres of the brain to clear desired
        channels of energy and nurtures the health of the respiratory system.
      </p>

      <p>
        Another popular type of pranayama is Kapalabhati (Skull Brilliance):
      </p>

      <ul className="list-disc list-inside">
        <li>Consists of short, forceful exhalations with passive inhalations.</li>
        <li>Tones the lungs, clears mucus, and invigorates the mind!</li>
      </ul>
    </div>
  );
};

export default Pranayam;
