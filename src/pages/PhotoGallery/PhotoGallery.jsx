import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallery = () => {
  const images = [
    "https://eoms.cutpricebd.com/oms_products/big/621753d5bd1a5_funblast-desktop-indoor-football-sports-toy-game-kids-170893.jpg",
    "https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw790c8a43/images/84F5AB25_1.jpg?sw=767&sh=767&sm=fit",
    "https://i.ebayimg.com/images/g/JukAAOSwLSdkOVs3/s-l1600.jpg",
    "https://image.made-in-china.com/2f0j00STdRMjbcAazs/Kids-Tabletop-Soccer-Game-Mini-Soccer-Toy-for-Children-Toy-Soccer-Sport-Game-for-Toddler.jpg",
    "https://sc04.alicdn.com/kf/H8ddb3c10522b4436be453cce5af5c2eck.jpg",
    "https://i5.walmartimages.com/asr/3ebc6ca8-a057-4e6c-926e-66043a02c4de.4cc211a9837f4c926ffc81eb46bb4ba3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    "https://rukminim1.flixcart.com/image/416/416/ksoz53k0/kit/8/z/v/kid-new-toy-plastic-20-20-cricket-kit-for-kids-cricket-set-of-3-original-imag67erdufkvehz.jpeg?q=70",
    "https://images.wowcher.co.uk/images/deal/21100095/777x520/829452.jpg",
    "https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwc49aecdf/images/84F5AB25_6.jpg?sw=767&sh=767&sm=fit",
    "https://cdn0.woolworths.media/content/wowproductimages/large/1074107515.jpg",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto px-5 py-2 max-sm:mt-16 lg:px-32 lg:pt-24">
      <h1 className="my-title">ToyVerse - Unlock the Magic of Toys</h1>
      <div className="-m-1 flex flex-wrap md:mt-16">
        {images.map((image, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={`${index * 100}`}
            key={index}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
