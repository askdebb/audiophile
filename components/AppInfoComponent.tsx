import React from 'react';
import Image from 'next/image';

import { useScreenSize } from '@/helpers/useScreensize';

const AppInfoComponent = () => {
  const screenSizeDetector = useScreenSize();

  return (
    <div className="container my-28 ">
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:gap-x-16 lg:items-center">
        <div className="my-5 lg:w-1/2 ">
          <Image
            alt="best gear image"
            className="rounded-radius"
            height={600}
            src={
              screenSizeDetector === 'tablet'
                ? '/assets/shared/tablet/image-best-gear.jpg'
                : screenSizeDetector === 'desktop'
                  ? '/assets/shared/desktop/image-best-gear.jpg'
                  : screenSizeDetector === '2xl'
                    ? '/assets/shared/desktop/image-best-gear.jpg'
                    : '/assets/shared/mobile/image-best-gear.jpg'
            }
            width={screenSizeDetector === 'mobile' ? 654 : 700}
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="my-5 text-center uppercase font-extrabold text-h3  tracking-subtitle md:text-h2 md:container md:my-10 lg:max-w-none lg:px-0 lg:text-left lg:leading-tight xl:w-3/4 xl:mx-0">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="text-center leading-body  text-body mb-5 text-textColor md:container lg:max-w-none lg:px-0 lg:text-left">
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
