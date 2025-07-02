import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";
import "./hero.css";

import { FiUsers, FiStar, FiTrendingUp, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
  {
    title: "Share Your Experience",
    subtitle: "Help Others Make Better Choices",
    description:
      "Your product insights can help others avoid costly mistakes and find products that truly meet their needs.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    cta: "Join Community",
    ctaSecondary: "See Examples",
    link: "/queries",
    stats: [
      { icon: FiUsers, label: "Community", value: "Growing" },
      { icon: FiStar, label: "Reviews", value: "Trusted" },
      { icon: FiTrendingUp, label: "Impact", value: "Real" },
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Discover Better Alternatives",
    subtitle: "Smart Product Recommendations",
    description:
      "Join thousands of users finding better products through community-driven recommendations and honest reviews.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    cta: "Explore Queries",
    ctaSecondary: "Learn More",
    link: "/queries",
    stats: [
      { icon: FiUsers, label: "Active Users", value: "5K+" },
      { icon: FiStar, label: "Recommendations", value: "30K+" },
      { icon: FiTrendingUp, label: "Success Rate", value: "94%" },
    ],
    gradient: "from-blue-600 via-purple-600 to-teal-600",
  },

  {
    title: "Make Informed Decisions",
    subtitle: "Data-Driven Product Choices",
    description:
      "Get comprehensive insights from real users before making your next purchase. Save money and time with smart recommendations.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
    cta: "Get Started",
    ctaSecondary: "View Demo",
    link: "/queries",
    stats: [
      { icon: FiUsers, label: "Satisfied Users", value: "98%" },
      { icon: FiStar, label: "Average Rating", value: "4.9" },
      { icon: FiTrendingUp, label: "Money Saved", value: "$2M+" },
    ],
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden z-0">
      {/* Custom Navigation Arrows */}
      <div className="hidden md:block absolute top-1/2 left-4 z-20 -translate-y-1/2">
        <button className="custom-prev bg-white/80 backdrop-blur-md  text-gray-900 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200">
          <FaAngleLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="hidden md:block absolute top-1/2 right-4 z-20 -translate-y-1/2">
        <button className="custom-next bg-white/80 text-gray-900 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200">
          <FaAngleRight className="h-5 w-5" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={500}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r opacity-90 ${slide.gradient}`}
              />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                      {/* Animated Badge */}
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                        <span>{slide.subtitle}</span>
                      </div>

                      {/* Main Title */}
                      <div className="space-y-2 sm:space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                          <span className="block animate-slide-up">
                            {slide.title.split(" ")[0]}
                          </span>
                          <span className="block animate-slide-up animation-delay-200 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                            {slide.title.split(" ").slice(1).join(" ")}
                          </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl animate-slide-up animation-delay-400 mx-auto lg:mx-0">
                          {slide.description}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-600 justify-center lg:justify-start">
                        <Link
                          to={slide.link}
                          className="btn btn-lg bg-white text-gray-900 hover:bg-white/90 border-none"
                        >
                          {slide.cta}
                          <FiArrowRight className="ml-2" />
                        </Link>
                        <button className="btn btn-lg btn-outline text-white border-white/30 hover:bg-white/10">
                          {slide.ctaSecondary}
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8 animate-slide-up animation-delay-800">
                        {slide.stats.map((stat, statIndex) => {
                          const IconComponent = stat.icon;
                          return (
                            <div key={statIndex} className="text-center">
                              <div className="flex justify-center mb-1 sm:mb-2">
                                <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                                </div>
                              </div>
                              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                                {stat.value}
                              </div>
                              <div className="text-xs sm:text-sm text-white/80">
                                {stat.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Content - Floating Cards */}
                    <div className="hidden lg:block relative">
                      <div className="space-y-6 animate-float">
                        {/* Feature Cards */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                              <FiStar className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-sm lg:text-base">
                                Trusted Reviews
                              </h3>
                              <p className="text-white/80 text-xs lg:text-sm">
                                Real user experiences
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white/20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <FiTrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-sm lg:text-base">
                                Smart Recommendations
                              </h3>
                              <p className="text-white/80 text-xs lg:text-sm">
                                AI-powered suggestions
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                              <FiUsers className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-sm lg:text-base">
                                Active Community
                              </h3>
                              <p className="text-white/80 text-xs lg:text-sm">
                                5000+ helpful members
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
