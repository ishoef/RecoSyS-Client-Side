import React from "react";
import Title from "../../../Components/Title/Title";
import { responsive } from "../../../Layouts/RootLayout";


const OurCommunity = () => {
  const states = [
    {
      value: "5,000+",
      label: "Active Users",
    },
    {
      value: "12,000+",
      label: "Product Queries",
    },
    {
      value: "30,000+",
      label: "Recommendations",
    },
    ];
    


  return (
    <div className="my-20">
      <div className={`${responsive} space-y-8`}>
        <Title title={"Our Growing Community"} className={"text-center"} />
        <div className="grid md:grid-cols-3 gap-5">
          {states.map((state, index) => (
            <div key={index} className="hover:scale-102 transition-transform duration-300 ease-in-out flex flex-col items-center gap-3 p-10  bg-primary text-white rounded-2xl">
              <p className="text-5xl poppins font-semibold">{state.value}</p>
              <p className="poppins text-2xl">{state.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
