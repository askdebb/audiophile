'use client';

import Image from 'next/image';
import { Card, CardBody } from '@heroui/card';
import { useRouter } from 'next/navigation';

import { useScreenSize } from '@/helpers/useScreensize';
import AppHomeHeroComponent from '@/components/AppHomeHeroComponent';
import AppInfoComponent from '@/components/AppInfoComponent';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';

export default function Home() {
  const router = useRouter();
  const screenSizeDeterminant = useScreenSize();
  const isLargeScreen = ['desktop', '2xl'].includes(screenSizeDeterminant);
  const imgSrc =
    screenSizeDeterminant === 'tablet'
      ? '/assets/home/tablet/image-speaker-zx9.png'
      : isLargeScreen
        ? '/assets/home/desktop/image-speaker-zx9.png'
        : '/assets/home/mobile/image-speaker-zx9.png';

  return (
    <>
      <AppHomeHeroComponent
        btnClassName="uppercase text-white bg-primary w-[160px] h-[48px] font-bold tracking-subtitle text-subtitle"
        btnText="see product"
        classNameContainerImage={`${screenSizeDeterminant === 'mobile' ? 'bg-[url(/assets/home/mobile/image-header.jpg)]' : screenSizeDeterminant === 'tablet' && 'bg-[url(/assets/home/tablet/image-header.jpg)]'} `}
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        overlineText="new product"
        title="XX99 Mark II Headphones"
      />

      <AppMenuComponent menuCard={menuInfo} />

      <div className="container lg:relative">
        <Card className="mt-32 mb-5 bg-primary rounded-radius min-h-[700px] lg:min-h-full ">
          <CardBody className="text-center text-background">
            <div className="lg:flex lg:items-center lg:mt-0">
              <div className=" flex justify-center my-5 lg:w-1/2 overflow-hidden bg-[url(/assets/home/desktop/pattern-circles.svg)] bg-no-repeat bg-center lg:bg-bottom bg-contain">
                <Image
                  alt="speaker zx9 icon"
                  className="lg:object-cover lg:relative lg:bottom-[-3rem]"
                  height={300}
                  src={imgSrc}
                  width={isLargeScreen ? 300 : 200}
                />
              </div>

              <div className="mt-20 mb-10 text-center lg:w-1/2 lg:text-left">
                <h2 className="text-h2 font-extrabold leading-[60px] tracking-h2">
                  ZX9 SPEAKER
                </h2>
                <p className="my-5 tracking-h6 leading-body lg:text-left lg:text-[0.8rem] lg:w-3/4 lg:leading-normal">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button
                  className="bg-black font-bold uppercase text-white w-[160px] h-[48px] tracking-subtitle text-subtitle hover:bg-[#4c4c4c]"
                  onClick={() => router.push('/product/zx9-speaker')}
                >
                  See Product
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="my-10 rounded-radius">
          <CardBody
            className={`h-[360px] bg-no-repeat bg-cover bg-center-top relative ${screenSizeDeterminant === 'tablet' ? 'bg-top bg-contain h-[316px] bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]' : screenSizeDeterminant === 'desktop' ? 'xl:bg-contain xl:-mb-6 bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]' : screenSizeDeterminant === '2xl' ? 'bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]' : 'bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)]'}`}
          >
            <div className="absolute top-10 flex flex-col items-start justify-center gap-y-2 mt-16 md:ml-10">
              <h2 className="text-h3 font-extrabold leading-[60px] tracking-h2 uppercase">
                zx7 speaker
              </h2>
              <button
                className="border border-[#000] uppercase text-[#000] lg:hover:text-background lg:hover:bg-[#000] font-bold w-[160px] h-[48px] tracking-subtitle text-subtitle"
                onClick={() => router.push('/product/zx7-speaker')}
              >
                see product
              </button>
            </div>
          </CardBody>
        </Card>

        <div className="mb-10 md:flex md:gap-x-5 md:items-center lg:items-start">
          <Image
            alt="earphone"
            className="rounded-radius mt-10 md:w-1/2 md:mt-5  "
            height={400}
            src={
              screenSizeDeterminant === 'tablet'
                ? '/assets/home/tablet/image-earphones-yx1.jpg'
                : screenSizeDeterminant === 'desktop'
                  ? '/assets/home/desktop/image-earphones-yx1.jpg'
                  : screenSizeDeterminant === '2xl'
                    ? '/assets/home/desktop/image-earphones-yx1.jpg'
                    : '/assets/home/mobile/image-earphones-yx1.jpg'
            }
            width={650}
          />
          <Card className="my-5 rounded-radius bg-cardColor min-h-[200px] md:h-[320px] md:w-1/2 md:mb-0 shadow-none lg:h-[275px] xl:h-[340px]">
            <CardBody className="">
              <div className="flex flex-col items-start gap-y-2 mt-5 md:mt-20 md:ml-5 lg:ml-20">
                <h2 className="text-h3 font-extrabold leading-[60px] tracking-h2 uppercase md:text-h4 ">
                  yx1 earphones
                </h2>
                <button
                  className="border border-[#000] uppercase text-[#000] lg:hover:text-background lg:hover:bg-[#000] font-bold w-[160px] h-[48px] tracking-subtitle text-subtitle"
                  onClick={() => router.push('/product/yx1-earphones')}
                >
                  see product
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <AppInfoComponent />
    </>
  );
}
