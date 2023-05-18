import React, { useEffect, useState } from "react";

const PhotoGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://img.freepik.com/free-photo/top-view-basketball-football_23-2148796953.jpg?w=1380&t=st=1684442273~exp=1684442873~hmac=961a7b00e0fd3c3eb6c077b0b4f8eddd831ce0908f9bcb47dce616bae89266ad",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://img.freepik.com/premium-photo/different-balls-isolated-white_392895-334237.jpg?w=1380",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-vector/flat-design-christmas-toy-collection_23-2148365291.jpg?w=826&t=st=1684442278~exp=1684442878~hmac=67362c79980dbe3d4a188743727fa44e98d9592f108bd05f01ea39ee3365c7f6",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-photo/top-view-basketball-football_23-2148796953.jpg?w=1380&t=st=1684442273~exp=1684442873~hmac=961a7b00e0fd3c3eb6c077b0b4f8eddd831ce0908f9bcb47dce616bae89266ad",
      alt: "Image 1",
    },
    {
      id: 5,
      src: "https://img.freepik.com/premium-photo/different-balls-isolated-white_392895-334237.jpg?w=1380",
      alt: "Image 2",
    },
    {
      id: 6,
      src: "https://img.freepik.com/free-vector/flat-design-christmas-toy-collection_23-2148365291.jpg?w=826&t=st=1684442278~exp=1684442878~hmac=67362c79980dbe3d4a188743727fa44e98d9592f108bd05f01ea39ee3365c7f6",
      alt: "Image 3",
    },
    {
      id: 7,
      src: "https://img.freepik.com/free-photo/top-view-basketball-football_23-2148796953.jpg?w=1380&t=st=1684442273~exp=1684442873~hmac=961a7b00e0fd3c3eb6c077b0b4f8eddd831ce0908f9bcb47dce616bae89266ad",
      alt: "Image 1",
    },
    {
      id: 8,
      src: "https://img.freepik.com/premium-photo/different-balls-isolated-white_392895-334237.jpg?w=1380",
      alt: "Image 2",
    },
    {
      id: 9,
      src: "https://img.freepik.com/free-vector/flat-design-christmas-toy-collection_23-2148365291.jpg?w=826&t=st=1684442278~exp=1684442878~hmac=67362c79980dbe3d4a188743727fa44e98d9592f108bd05f01ea39ee3365c7f6",
      alt: "Image 3",
    },
    // Add more images here
  ];

  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="relative" style={{ height: image.height }}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain mx-auto h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-50">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
