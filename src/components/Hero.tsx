import React from "react";
import { Phone, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const phone = "+380967081858";
  const encodedPhone = encodeURIComponent(phone);
  const viberLink = `viber://chat?number=${encodedPhone}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-80"
        style={{
          backgroundImage:
            "url(https://wallpapercrafter.com/desktop/41204-Switzerland-4K-4k-wallpaper-4K-HD-Mountains-sunset-hills-meadows.jpg)",
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-400 opacity-30 rounded-full animate-pulse delay-1000"></div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto max-lg:mt-20">
        {/* Logo and branding */}
        <div className="mb-12 animate-fade-in">
          <img
            src="/logo-yellow.png"
            alt="Riolit"
            className="w-24 h-24 text-white drop-shadow-lg bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 max-lg:hidden"
          />

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-yellow-300 drop-shadow-lg">Ріоліт</span>
            <br />
            <span className="text-4xl md:text-5xl font-light text-gray-200">
              мономентна майстерня
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>

          <p className="text-2xl md:text-3xl mb-12 text-gray-200 font-light italic">
            вічна пам'ять у камені - якість та традиції
          </p>
        </div>

        {/* Contact information */}
        <div className="mb-12">
          <p className="text-lg text-gray-300 mb-6">
            Контакти для консультації
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <a
              href={viberLink}
              className="group flex items-center space-x-3 text-xl text-yellow-300 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <Phone size={20} />
              </div>
              <span className="font-medium">+38 096 708 1858</span>
            </a>
            <a
              href="tel:+380967410940"
              className="group flex items-center space-x-3 text-xl text-yellow-300 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <Phone size={20} />
              </div>
              <span className="font-medium">+38 096 741 0940</span>
            </a>
          </div>
        </div>

        {/* Call to action */}
        <div className="mb-16">
          <button
            onClick={() => smoothScroll("contact")}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-lg text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Записатись на консультацію</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-[48%] transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => smoothScroll("about")}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
