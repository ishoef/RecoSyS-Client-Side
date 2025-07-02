import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import RecentQueries from './Recent-Queries/RecentQueries';
import WhyChoose from './WhyChoose/WhyChoose';
import WhatYouGet from './WhatYouGet/WhatYouGet';
import OurCommunity from './OurCommunity/OurCommunity';
import HowItWorks from './HowItWorks/HowItWorks';
import SmalHero from '../../Components/smalHero/smalHero';

const Home = () => {

    useEffect(() => {
        document.title = "Home | RecSyS";
      }, []);


    return (
      <div>
        <div className='hidden lg:block z-0'>
          <Hero></Hero>
        </div>

        <SmalHero/>

        <RecentQueries></RecentQueries>
        <WhyChoose></WhyChoose>
        <WhatYouGet />
        <OurCommunity />
        <HowItWorks />
      </div>
    );
};

export default Home;