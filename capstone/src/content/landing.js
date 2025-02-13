import Navbar from "./navbar";
import Footer from "./footer";
import LandingCarousel from "./landingcarousel";

export default function Landing() {
  return (
    <div>
      <style>
        {`
          @keyframes slideInFromBottom {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-bottom {
            animation: slideInFromBottom 4s ease-out;
          }
        `}
      </style>

      <Navbar />
      <LandingCarousel />

      <div className="grid m-auto pb-3 px-5 py-4 w-full mt-4 md:grid-cols-2 md:px-16 md:mt-0  xl:px-32 gap-4">
        <div className=" ">
          <img src="/image1.png" alt="Image" className="max-w-full h-[auto]" />
        </div>
        <div className="m-auto">
          <h2 className="text-[28px] font-extrabold  pb-4 md:text-[24px] lg:text-[30px] animate-bottom">
            Premium Coal Quality
          </h2>
          <p className="font-bold text-lg animate-bottom">
            BOSS and PB have high quality coal with high CV (6,400 GAR Kcal/kg)
            and lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button justify-center items-center pt-8">
          <a
              href="./"
              className="text-lg rounded-md text-red-500 flex items-center group"
            >
              <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              <i className="transition-transform duration-300 group-hover:-translate-x-2">
                Read More
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="grid m-auto pb-3 px-5 py-4 w-full mt-4 md:grid-cols-2 md:px-16 md:mt-0 xl:px-32 gap-4">
        <div className="m-auto ">
          <h2 className="text-[28px] font-extrabold  pb-4 md:text-[24px] lg:text-[30px] animate-bottom">
            Unique Positioning in the Market
          </h2>
          <p className="font-bold text-lg animate-bottom">
            BOSS and PB have high quality coal with high CV (6,400 GAR Kcal/kg)
            and lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqualorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button justify-center items-center pt-8">
            <a
              href="./"
              className="text-lg rounded-md text-red-500 flex items-center group"
            >
              <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              <i className="transition-transform duration-300 group-hover:-translate-x-2">
                Read More
              </i>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last sm:order-last">
          <img src="/image2.png" alt="Image" className="max-w-full h-[auto]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full relative pb-8">
        <div className="w-full md:w-1/2">
          <img src="/image3.png" alt="Image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/Rectangle.png"
            alt="Image"
            className="w-full h-auto bg-blue-600"
          />
          <div className="absolute top-0 left-0 m-3 text-left transform text-white pl-8 pt-8">
            <h2 className="text-2xl font-bold">ABOUT US</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src="/image4.png"
            alt="Overlay-Image"
            className="hidden md:block absolute top-[70%] left-[35%] w-full -translate-x-1/2 -translate-y-1/2 z-10 "
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
