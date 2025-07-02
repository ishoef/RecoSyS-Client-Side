import React from "react";
import { responsive } from "../../../Layouts/RootLayout";
import Title from "../../../Components/Title/Title";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { FaRightLong } from "react-icons/fa6";

const HowItWorks = () => {
  const state = [
    {
      icon: <FaRegComment />,
      heading: "Ask About Products",
      para: "Create queries about products you're considering and ask for alternatives.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      icon: <SlLike />,
      heading: "Get Recommendations",
      para: "Receive personalized recommendations from our community of users.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      icon: <FaRightLong />,
      heading: "Make Better Choices",
      para: "Use Community insights to make informed purchasing decisions.",
      gradient: "from-blue-400 to-teal-400",
    },
  ];
  return (
    <div className={`${responsive} md: my-20`}>
      <div className="space-y-5  ">
        <Title title={"How It Works"} className={"text-primary text-center"} />
        <div className="grid lg:grid-cols-3 gap-5">
          {state.map((stat, index) => (
            <div key={index} className="flex flex-col hover:scale-102 transition-transform duration-300 ease-in-out items-center gap-6 px-8 py-12 rounded-2xl text-center border cursor-pointer border-gray-300 shadow-xl">
              <p
                className={`text-3xl bg-primary p-4 text-white rounded-2xl shadow-xl bg-gradient-to-r opacity-90 ${stat.gradient}`}
              >
                {stat.icon}
              </p>
              <p className="text-2xl poppins font-semibold">{stat.heading}</p>
              <p className="poppins">{stat.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
