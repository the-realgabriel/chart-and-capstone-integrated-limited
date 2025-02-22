import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingCarousel.css";

export default function LandingCarousel() {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        carouselRef.current.decrement();
      } else if (event.key === "ArrowRight") {
        carouselRef.current.increment();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={!isMobile}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        interval={5000}
        stopOnHover={true}
        className="carousel-container"
      >
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src="/carousel1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">
                <h2
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white  
                             animate-fadeIn text-shadow-lg text-left"
                >
                  Innovation in Energy
                </h2>
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white mt-2 md:mt-4 
                             animate-fadeIn text-shadow-md opacity-90 text-left"
                >
                  Pioneering sustainable solutions for tomorrow's energy needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src="/carousel2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">
                <h2
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white  
                             animate-fadeIn text-shadow-lg text-left"
                >
                  Solid Minerals
                </h2>
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white mt-2 md:mt-4 
                             animate-fadeIn text-shadow-md opacity-90 text-left"
                >
                  Sustainable extraction and responsible resource management
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src="/carousel3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">
                <h2
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white  
                             animate-fadeIn text-shadow-lg text-left"
                >
                  Nutritional Growth
                </h2>
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white mt-2 md:mt-4 
                             animate-fadeIn text-shadow-md opacity-90 text-left"
                >
                  Supporting agricultural development for food security
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="absolute bottom-8 right-8 z-50">
        <div className="group relative">
          <button
            className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg 
                     border border-white/20 hover:bg-white/20 transition-all duration-300
                     flex items-center space-x-2"
          >
            <span>Find Us</span>
          </button>

          <div
            className="absolute bottom-full right-0 mb-2 w-64 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              className="bg-white/10 backdrop-blur-md text-white p-4 rounded-lg 
                          border border-white/20 shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-2">Company Address</h3>
              <p className="text-sm opacity-90">
                No. 49, Effurun-Sapele Road
                <br />
                Warri,
                <br />
                Delta State, Nigeria
                <span className="mt-2 block">+234 803 313 3440 <br/> +234 916 024 4807</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
