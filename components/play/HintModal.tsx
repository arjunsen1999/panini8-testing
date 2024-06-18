import React from "react";

const HintModal = ({ setShowHint }: any) => {
  return (
    <div>
      {" "}
      <div className="relative inline-block">
        <button className="bg-yellow-500 text-white py-2 px-5 rounded-full max-sm:px-2 max-sm:text-sm">
          Hint
        </button>

        <div className="absolute mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg">
          <p className="text-black">This is your hint text!</p>
        </div>
      </div>
    </div>
  );
};

export default HintModal;
