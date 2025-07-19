import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact: React.FC = () => {
  const phone = "+380967081858";
  const encodedPhone = encodeURIComponent(phone);
  const viberLink = `viber://chat?number=${encodedPhone}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Напишіть нам
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Напишіть нам, якщо у вас є питання чи просто хочете зв'язатися з
            нами. Ми завжди раді допомогти та ділитися знаннями.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Зв'яжіться з нами
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Номер телефону
                  </h4>
                  <a href={viberLink} className="text-gray-600">
                    +380 (96) 708 18 58
                  </a>
                  <br />
                  <a href={viberLink} className="text-gray-600">
                    +380 (96) 741 09 40
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Локація магазину
                  </h4>
                  <p className="text-gray-600">
                    кл. Святого Миколаю (перший магазин)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Години роботи
                  </h4>
                  <p className="text-gray-600">
                    Понеділок - П'ятниця: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Субота: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Неділя: зачинені</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">riolit1402@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
