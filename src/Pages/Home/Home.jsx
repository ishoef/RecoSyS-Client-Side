import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import RecentQueries from "./Recent-Queries/RecentQueries";
import WhyChoose from "./WhyChoose/WhyChoose";
import WhatYouGet from "./WhatYouGet/WhatYouGet";
import OurCommunity from "./OurCommunity/OurCommunity";
import HowItWorks from "./HowItWorks/HowItWorks";
import SmalHero from "../../Components/smalHero/smalHero";
import OfferModal from "../../Components/OfferModal/OfferModal";

const Home = () => {
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    document.title = "Home | RecSyS";
  }, []);

  useEffect(() => {
    const alredySeen = sessionStorage.getItem("hasSeenOfferModal");

    if (!alredySeen) {
      const timer = setTimeout(() => {
        setShowOfferModal(true);
        sessionStorage.setItem("hasSeenOfferModal", true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <div className="hidden lg:block z-0">
        <Hero></Hero>
      </div>

      <SmalHero />

      <RecentQueries></RecentQueries>
      <WhyChoose></WhyChoose>
      <WhatYouGet />
      <OurCommunity />
      <HowItWorks />

      <OfferModal
        show={showOfferModal}
        onClose={() => setShowOfferModal(false)}
      />
    </div>
  );
};

export default Home;
