import React from "react";

const State = ({ state }) => {
  const { title, description, statistic, icon, gradient } = state;
  return (
    <div className="bg-base-100 shadow-xl p-8 flex flex-col gap-4 flex-1 h-full justify-between rounded-xl cursor-pointer hover:scale-102 duration-300">
      <div className={`p-5 bg-gradient-to-r opacity-90 ${gradient} text-white text-2xl rounded-2xl shadow-xl w-fit`}>
        {icon}
      </div>
      <h1 className="text-2xl poppins-semibold">{title}</h1>
      <p className="font-semibold text-[17px]">{description}</p>
      <div className="border w-fit px-3 rounded-full border-gray-400 font-semibold">
        {statistic}
      </div>
    </div>
  );
};

export default State;
