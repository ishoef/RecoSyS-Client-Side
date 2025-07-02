import React, { use } from "react";
import { responsive } from "../../../Layouts/RootLayout";
import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
import { AuthContext } from "../../../Context/AuthProvider";
import { SiTicktick } from "react-icons/si";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { PiUsersBold } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoStatsChart } from "react-icons/io5";

const WhatYouGet = () => {
  const { user } = use(AuthContext);
  const benefits = [
    {
      icon: <SiTicktick />,
      title: "Save money on better alternatives",
    },
    {
      icon: <FaRegClock />,
      title: "Save time with instant recommendations",
    },
    {
      icon: <GiArcheryTarget />,
      title: "Find products that match your values",
    },
    {
      icon: <GoLightBulb />,
      title: "Discover innovative solutions",
    },
    {
      icon: <FaRegStar />,
      title: "Access to exclusive deals and offers",
    },
    {
      icon: <TbUsers />,
      title: "Connect with like-minded consumers",
    },
  ];

  const stats = [
    {
      icon: <PiUsersBold />,
      value: "5K+",
      label: "Active Users",
    },
    {
      icon: <FaRegStar />,
      value: "30K+",
      label: "Recommendations",
    },
    {
      icon: <IoStatsChart />,
      value: "94%",
      label: "Success Rate",
    },
    {
      icon: <LiaCertificateSolid />,
      value: "$2M+",
      label: "Money Saved",
    },
  ];

  return (
    <div className={`${responsive} my-10 md:my-20`}>
      <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 w-full  rounded-2xl p-5 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
        
        <div className="lg:basis-1/2 flex flex-col md:items-start items-center gap-5">
          <Title title={"What You Get With RecoSyS"} className={"text-white text-center md:text-start"} />
          <p className="poppins text-center md:text-start text-white">
            More than just product recommendations - join a community that's
            changing how people discover and schoose products.
          </p>

          <div className="grid grid-cols-2 gap-5 w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className=" bg-green-200/20 flex flex-col lg:flex-row items-center gap-3 p-4 text-white poppins rounded-2xl">
                <p className="text-2xl">{benefit.icon}</p>
                <p className="text-center">{benefit.title}</p>
              </div>
            ))}
          </div>
          <Button
            to={user ? "/queries" : "/auth/register"}
            text={"Join Our Community"}
            className={"bg-white btn rounded-3xl poppins text-primary "}
          />
        </div>
        <div className=" w-full md:basis-1/2 ">
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col hover:scale-102 transition-transform duration-300 ease-in-out items-center gap-3 px-5 py-6 text-white  bg-green-200/20 rounded-2xl">
                <p className="text-3xl">{stat.icon}</p>
                <p className="text-3xl poppins font-semibold">{stat.value}</p>
                <p className="poppins">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
