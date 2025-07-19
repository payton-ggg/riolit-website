import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenu = {
    "про нас": "about",
    галерея: "gallery",
    контакти: "contact",
  };

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(
      navMenu[elementId as keyof typeof navMenu]
    );

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-white" : "bg-transparent text-white"
      } ${isMenuOpen ? "bg-white text-black" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Pantheon"
              className="w-12 h-12 rounded-full flex items-center justify-center"
            />
            <div>
              <h1
                className={`text-xl font-bold ${
                  isMenuOpen ? "text-black" : ""
                }`}
              >
                Ріоліт
              </h1>
              <p className={`text-sm ${isMenuOpen ? "text-black" : ""}`}>
                майстерня пам'ятників
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {Object.keys(navMenu).map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item)}
                className={`hover:text-yellow-600 transition-colors duration-200 capitalize font-medium`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden  hover:text-yellow-600 transition-colors duration-200`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              {Object.keys(navMenu).map((item) => (
                <button
                  key={item}
                  onClick={() => smoothScroll(item)}
                  className={`block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200 capitalize`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
