import React from 'react';
import Image from 'next/image';

const AppInfoComponent = () => {
  return (
    <div className="container my-28">
      <div className="">
        <div className="my-5">
          <Image
            alt="best gear image"
            className="rounded-radius"
            height={600}
            src="/assets/shared/mobile/image-best-gear.jpg"
            width={654}
          />
        </div>
        <div>
          <h2 className="my-5 text-center uppercase font-extrabold text-h3  tracking-subtitle">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="text-center leading-body  text-body mb-5 text-textColor">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppInfoComponent;
