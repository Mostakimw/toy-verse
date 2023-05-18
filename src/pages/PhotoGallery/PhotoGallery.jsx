import React from "react";

const PhotoGallery = () => {
  const images = [
    {
      id: 1,
      src: "image1.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "image2.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "image3.jpg",
      alt: "Image 3",
    },
    // Add more images here
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-50">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
