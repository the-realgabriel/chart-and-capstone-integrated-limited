import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingCarousel.css";

export default function LandingCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        carouselRef.current.decrement();
      } else if (event.key === "ArrowRight") {
        carouselRef.current.increment();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      showThumbs={false}
      autoPlay
      infiniteLoop
      showArrows
      showStatus={false}
    >
      <div className="relative h-screen">
        <img
          src="/carousel1.png"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start text-white p-8">
          <h2 className="text-7xl font-bold break-words transition-transform duration-1000 ease-in-out transform translate-y-full animate-slideInFromBottom">
            GROWING BEYOND EXPECTATION
          </h2>
          {/* <div className="">
            <a
              href="./home.html"
              className="bg-green-400 py-2 px-2 rounded-md text-white text-xs "
            >
              Contact Us
            </a>
          </div> */}
        </div>
      </div>
      <div className="relative h-screen">
        <img
          src="/carousel2.png"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start text-white p-8">
          <h2 className="text-7xl font-bold break-words transition-transform duration-1000 ease-in-out transform translate-y-full animate-slideInFromBottom">
            GROWING BEYOND EXPECTATION
          </h2>
        </div>
      </div>
      <div className="relative h-screen">
        <img
          src="/image3.png"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start text-white p-8">
          <h2 className="text-7xl font-bold break-words transition-transform duration-1000 ease-in-out transform translate-y-full animate-slideInFromBottom">
            GROWING BEYOND EXPECTATION
          </h2>
        </div>
      </div>
    </Carousel>
  );
}
