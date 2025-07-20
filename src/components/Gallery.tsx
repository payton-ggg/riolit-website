/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const monuments = [
    {
      category: "Гравірування",
      images: [
        "/IMG_3952.JPG",
        "/IMG_3951.JPG",
        "/IMG_3950.JPG",
        "/IMG_3954.JPG",
        "/IMG_3955.JPG",
        "/IMG_3953.JPG",
      ],
    },
    {
      category: "Моделювання",
      images: [
        "/IMG_3947.JPG",
        "/IMG_3948.JPG",
        "/IMG_3958.JPG",
        "/IMG_3957.JPG",
      ],
    },
  ];

  const allImages = monuments.flatMap((category) => category.images);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Галерея Нашої Роботи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Дивіться наші колекції з красиво зображенними пам'ятниками, кожен з
            яких розповідає унікальну історію.
          </p>
        </div>

        {monuments.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              {category.category}
            </h3>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                categoryIndex === 1 ? "lg:grid-cols-2" : "lg:grid-cols-3"
              }`}
            >
              {category.images.map((image, imageIndex) => {
                const globalIndex =
                  monuments
                    .slice(0, categoryIndex)
                    .reduce((sum, cat) => sum + cat.images.length, 0) +
                  imageIndex;
                return (
                  <div
                    key={imageIndex}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Гранитный памятник на кладбище Киев Установка памятника на могиле ${
                        imageIndex + 1
                      }`}
                      className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"
                      onClick={() => openLightbox(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
