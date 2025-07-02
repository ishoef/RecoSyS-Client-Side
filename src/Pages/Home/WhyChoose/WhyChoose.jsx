import React from "react";
import Title from "../../../Components/Title/Title";
import State from "../../../Components/State/State";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsLightningCharge, BsGraphUpArrow } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { CiGlobe, CiHeart } from "react-icons/ci";

const WhyChoose = () => {
  const states = [
    {
      title: "Trusted Community",
      description:
        "Join thousands of verified users sharing honest, unbiased product experiences and recommendations.",
      statistic: "5,000+ Active Users",
      icon: <VscWorkspaceTrusted />,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "Instant Recommendations",
      description:
        "Get personalized product alternatives within minutes from our active community of experts.",
      statistic: "< 2 Min Response Time",
      icon: <BsLightningCharge />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      title: "Quality Assured",
      description:
        "Every recommendation is vetted by our community through upvotes and detailed reviews.",
      statistic: "94% Success Rate",
      icon: <PiCertificate />,
      gradient: "from-blue-600 to-teal-600",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with comprehensive analytics and user feedback on every product.",
      statistic: "$2M+ Saved by Users",
      icon: <BsGraphUpArrow />,

      gradient: "from-blue-600 to-teal-600",
    },
    {
      title: "Community First",
      description:
        "Built by users, for users. Every feature is designed based on community feedback and needs.",
      statistic: "4.9/5 User Rating",
      icon: <CiHeart />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      title: "Global Reach",
      description:
        "Connect with users worldwide to discover products and alternatives from different markets.",
      statistic: "50+ Countries",
      icon: <CiGlobe />,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="mt-10 md:mt-20 bg-gradient-to-r opacity-90 from-emerald-500 via-teal-500 to-cyan-500 py-10 md:py-20">
      <div className=" w-11/12 lg:w-9/12 mx-auto">
        <div className=" rounded-2xl bg-white text-primary text-center w-fit px-5 py-1 mx-auto">
          <h1>Why Choose RecoSyS</h1>
        </div>

        <Title
          className={
            "px-10 text-white w-fit mx-auto py-5 border-b-4 rounded-2xl"
          }
          title={"The Smart Way to"}
        />
        <p className="mt-4 w-11/12 lg:w-6/12 mx-auto text-center poppins-regular text-[20px] text-base-100">
          Join the revolution in product discovery. Our community-driven
          platform helps you make smarter purchasing decisions, save money, and
          find products that truly match you needs and values.
        </p>
        <div className="grid lg:grid-cols-3 gap-5 md:gap-10 my-10">
          {states.map((state, index) => (
            <State key={index} state={state} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
