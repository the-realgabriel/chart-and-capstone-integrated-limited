import { ScrollReveal } from "./ScrollReveal";
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

      <div className="grid m-auto pb-12 px-5 py-8 w-full mt-4 md:grid-cols-2 md:px-16 md:mt-0 xl:px-32 gap-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/image1.jpg"
            alt="Our Services"
            className="w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="m-auto space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold pb-4 text-gray-800 animate-bottom">
              Our Services
            </h2>
          </ScrollReveal>
          <div className="space-y-4 animate-bottom">
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-gas-pump mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Oil & Gas</span> – Reliable
                  natural gas supply, energy solutions, and infrastructure
                  development.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-tractor mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Agriculture</span> –
                  Agro-processing, food supply chains, and sustainable farming
                  initiatives.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-gem mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Solid Minerals</span> –
                  Exploration, mining, and supply of high-quality mineral
                  resources.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-truck mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Transportation</span> – Logistics,
                  fleet management, and efficient delivery networks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-chart-line mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Project Finance</span> – Funding
                  solutions, trade finance, and investment advisory services.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="pt-6">
            <a
              href="./"
              className="inline-flex items-center text-lg text-red-500 hover:text-red-600 transition-colors group"
            >
              <span className="font-medium transition-transform duration-300 group-hover:-translate-x-2">
                Read More
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:-translate-x-2">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid m-auto pb-12 px-5 py-8 w-full mt-4 md:grid-cols-2 md:px-16 md:mt-0 xl:px-32 gap-8 bg-gray-50">
        <div className="m-auto space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold pb-4 text-gray-800 animate-bottom">
              Why Choose Us?
            </h2>
          </ScrollReveal>
          <div className="space-y-4 animate-bottom">
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-star mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Experience & Expertise</span> –
                  Over a decade of industry experience delivering top-tier
                  solutions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-lightbulb mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Innovation & Technology</span> –
                  Leveraging cutting-edge technologies to optimize operations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-leaf mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Sustainability & Growth</span> –
                  Commitment to eco-friendly and impactful business practices.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-start space-x-3">
                <i className="fas fa-globe mt-1 text-red-500"></i>
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Global Reach, Local Impact</span>{" "}
                  – Strong presence across Africa with international
                  partnerships.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="pt-6">
            <a
              href="./"
              className="inline-flex items-center text-lg text-red-500 hover:text-red-600 transition-colors group"
            >
              <span className="font-medium transition-transform duration-300 group-hover:-translate-x-2">
                Read More
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:-translate-x-2">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/image2.jpg"
              alt="Why Choose Us"
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full relative pb-8">
        <div className="w-full md:w-1/2">
          <img src="/image3.jpg" alt="Our Impact" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/Rectangle.png"
            alt="Background"
            className="w-full h-full object-cover bg-blue-600"
          />
          <div className="absolute inset-0 p-8 md:p-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Impact
              </h2>
              <div className="text-white text-lg">
                <p>
                  We are committed to transforming industries through innovative
                  business practices.
                </p>
                <div className="mt-4">
                  <div className="flex items-start space-x-1">
                    <i className="fas fa-check mt-1"></i>
                    <p>
                      Facilitating energy access for businesses and households
                    </p>
                  </div>
                  <div className="flex items-start space-x-1">
                    <i className="fas fa-check mt-1"></i>
                    <p>Enhancing agricultural productivity and food security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/image4.jpg"
            alt="Overlay-Image"
            className="hidden md:block absolute top-[70%] left-[35%] w-full -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
