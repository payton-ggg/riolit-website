import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"
                src="/logo.png"
              />
              <div>
                <h3 className="text-xl font-bold">Ріоліт</h3>
                <p className="text-gray-400">майстерня пам'ятників</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Понад 15 років ми створюємо довговічні пам'ятники з найкращих
              природних матеріалів, зберігаючи пам'ять з гідністю та
              майстерністю.
            </p>
            <p className="text-gray-400">
              Вічна пам'ять у камені - якість та традиції.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контактна інформація</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div>
                  <p>+380 (96) 708 18 58</p>
                  <p>+380 (96) 741 09 40</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <p>кл. Святого Миколаю (перший магазин)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p>Пон-п'ят: 9:00 AM - 6:00 PM</p>
                  <p>Суб: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ріоліт. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
