import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const monuments = [
    {
      category: "Одиночні Пам'ятники",
      images: ["/1.jpg", "/2.jpg", "/3.jpg"],
    },
    {
      category: "Подвійні Пам'ятники",
      images: ["/4.jpg", "/5.jpg", "/6.jpg"],
    },
  ];

  const allImages = monuments.flatMap((category) => category.images);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % allImages.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      alt={`${category.category} ${imageIndex + 1}`}
                      className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                      onClick={() => openLightbox(globalIndex)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-lg font-semibold">View Details</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X size={32} />
            </button>

            <img
              src={allImages[selectedImage]}
              alt="Monument"
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
