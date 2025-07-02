import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { PiUsersThreeLight } from "react-icons/pi";
import { TbGrowth, TbStars } from "react-icons/tb";
import { Link } from "react-router";

const SmalHero = () => {
  return (
    <section
      className="lg:hidden w-full min-h-fit z-0 bg-gradient-to-r bg-opacity-90
 from-orange-500 via-red-500 to-pink-500 py-10 px-5 text-white text-center"
    >
      <div>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          <h1 className="text-3xl md:text-4xl poppins font-semibold">
            Discover Better Alternatives
          </h1>
          <p className="md:text-xl">
            Join thousands of users finding better products through
            community-driven recommendations and honest reviews.
          </p>
          <Link
            to="/queries"
            className="btn md:w-8/12 btn-lg bg-white text-gray-900 hover:bg-white/90 border-none"
          >
            Join Community
            <FiArrowRight className="ml-2" />
          </Link>
          <button className="btn btn-lg md:w-7/12 btn-outline text-white border-white/30 hover:bg-white/10">
            Learn More
          </button>
        </div>

        {/* States */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8 animate-slide-up animation-delay-800 mt-5">
          <div className="text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                <PiUsersThreeLight />
              </div>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              5k
            </div>
            <div>Active Users</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <div className="p-2 bg-white/20 rounded-full">
                <TbStars />
              </div>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              30k
            </div>
            <div>Recommendations</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                <TbGrowth />
              </div>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              94%
            </div>
            <div>Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmalHero;
