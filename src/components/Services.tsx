import React, { useState } from "react";
import {
  Hammer,
  PenTool,
  Truck,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const phone = "+380967081858";
  const encodedPhone = encodeURIComponent(phone);
  const viberLink = `viber://chat?number=${encodedPhone}`;

  const services = [
    {
      icon: <Hammer className="w-10 h-10 text-yellow-600" />,
      title: "Гранітні та мармурові пам'ятники",
      shortDesc: "Преміальні кам'яні пам'ятники, виготовлені з точністю",
      fullDesc:
        "Індивідуальні пам'ятники, виготовлені з найкращого граніту та мармуру, отриманого з преміальних кар'єрів по всьому світу. Кожен виріб ретельно відбирається за своєю довговічністю, красою та унікальними характеристиками для створення довговічної пам'яті.",
      features: [
        "Преміальний вибір граніту та мармуру",
        "Доступні індивідуальні розміри та форми",
        "Погодостійке покриття",
        "Послуги підбору кольору",
        "Довічна структурна гарантія",
      ],
      image: "/1.1.jpg",
      price: "Від 2 500$",
    },
    {
      icon: <PenTool className="w-10 h-10 text-yellow-600" />,
      title: "Гравірування портретів та написів",
      shortDesc: "Детальне гравірування з довготривалою чіткістю",
      fullDesc:
        "Професійні послуги гравірування з використанням передових лазерних та традиційних технік ручного різьблення. Ми створюємо красиві портрети та змістовні написи, які зберігають свою чіткість та красу протягом поколінь.",
      features: [
        "Гравірування портретів високої роздільної здатності",
        "Написи різними мовами",
        "Індивідуальні шрифти та дизайни",
        "Послуги відновлення фотографій",
        "Точний контроль глибини",
      ],
      image: "1.2.jpg",
      price: "Від 800$",
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-600" />,
      title: "Встановлення та благоустрій",
      shortDesc: "Повна підготовка місця та встановлення",
      fullDesc:
        "Комплексні послуги з встановлення, включаючи підготовку місця, фундаментні роботи та благоустрій території. Наша досвідчена команда забезпечує правильне розміщення та створює спокійний, гідний меморіальний простір.",
      features: [
        "Професійна оцінка місця",
        "Підготовка фундаменту",
        "Точне розміщення пам'ятника",
        "Покращення ландшафту",
        "Налаштування дренажу та обслуговування",
      ],
      image: "/1.3.jpg",
      price: "Від 1 200$",
    },
    {
      icon: <Wrench className="w-10 h-10 text-yellow-600" />,
      title: "Реставраційні послуги",
      shortDesc: "Повертаємо старим пам'ятникам життя",
      fullDesc:
        "Експертна реставрація вивітрених або пошкоджених пам'ятників, зберігаючи їх історичне значення та відновлюючи їх первісну красу. Ми використовуємо спеціалізовані методи для ремонту, очищення та захисту існуючих меморіалів.",
      features: [
        "Оцінка пошкоджень та ремонт",
        "Професійні послуги очищення",
        "Відновлення написів",
        "Структурне зміцнення",
        "Нанесення захисного покриття",
      ],
      image: "/1.4.webp",
      price: "Від 600$",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-50 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-100 to-transparent rounded-full -translate-x-32 translate-y-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Наші послуги
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Комплексні <span className="text-yellow-600">пам'ятні</span> рішення
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Від початкової консультації до фінальної установки та далі, ми
            надаємо повний спектр памятних рішень з увагою до деталей та
            відбірної якості до виробництва.
          </p>
        </div>

        {/* Services navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeService === index
                  ? "bg-yellow-500 text-slate-800 shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 shadow-md"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center max-md:hidden ${
                  activeService === index ? "text-white" : "text-yellow-600"
                }`}
              >
                {service.icon}
              </div>
              <span className="font-medium block">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active service details */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Service image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Service content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-100 rounded-2xl w-16 h-16 flex items-center justify-center">
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {services[activeService].title}
                  </h3>
                  <p className="text-yellow-600 font-medium">
                    {services[activeService].shortDesc}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {services[activeService].fullDesc}
              </p>

              {/* Features list */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Що включено:
                </h4>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ціна</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {services[activeService].price}
                  </p>
                </div>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <a href={viberLink}>Отримати консультацію</a>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service grid overview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.shortDesc}
              </p>
              <button
                onClick={() => setActiveService(index)}
                className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <span>Дізнатися більше</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
