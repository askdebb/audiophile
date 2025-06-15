'use client';

import Image from 'next/image';
import { Card, CardBody } from '@heroui/card';
import { useRouter } from 'next/navigation';

import AppHomeHeroComponent from '@/components/AppHomeHeroComponent';
import AppInfoComponent from '@/components/AppInfoComponent';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AppHomeHeroComponent
        btnClassName="uppercase text-white bg-primary w-[160px] h-[48px] font-bold tracking-subtitle text-subtitle"
        btnText="see product"
        classNameContainerImage="bg-[url(/assets/home/mobile/image-header.jpg)]"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        overlineText="new product"
        title="XX99 Mark II Headphones"
      />

      <AppMenuComponent menuCard={menuInfo} />

      <div className="container">
        <Card className="mt-32 mb-5 bg-primary rounded-radius min-h-[700px]">
          <CardBody className="text-center text-background">
            <div className="bg-[url(/assets/home/desktop/pattern-circles.svg)] -mt-[170px] bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center my-5 ">
                <Image
                  alt="speaker zx9 icon"
                  className="mt-56"
                  height={300}
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  width={200}
                />
              </div>
              <div className="mt-20 mb-10 text-center">
                <h2 className="text-h2 font-extrabold leading-[60px] tracking-h2">
                  ZX9 SPEAKER
                </h2>
                <p className="my-5 text-center tracking-h6 leading-body">
                  {' '}
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button
                  className="bg-[#000000] font-bold uppercase text-white  w-[160px] h-[48px] tracking-subtitle text-subtitle"
                  onClick={() => router.push('/product/zx9-speaker')}
                >
                  See Product
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="my-10 rounded-radius">
          <CardBody className="bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] h-[360px] bg-no-repeat bg-cover bg-center-top relative ">
            <div className="absolute top-10 flex flex-col items-start justify-center gap-y-2 mt-16">
              <h2 className="text-h3 font-extrabold leading-[60px] tracking-h2 uppercase">
                zx7 speaker
              </h2>
              <button
                className="border border-[#000] uppercase text-[#000] font-bold w-[160px] h-[48px] tracking-subtitle text-subtitle"
                onClick={() => router.push('/product/zx7-speaker')}
              >
                see product
              </button>
            </div>
          </CardBody>
        </Card>

        <div className="mb-10">
          <Image
            alt="erphone"
            className="rounded-radius mt-10"
            height={400}
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            width={650}
          />
          <Card className="my-5 rounded-radius bg-[#979797] min-h-[200px]">
            <CardBody className="">
              <div className="flex flex-col items-start gap-y-2 mt-5">
                <h2 className="text-h3 font-extrabold leading-[60px] tracking-h2 uppercase">
                  yx1 earphones
                </h2>
                <button
                  className="border border-[#000] uppercase text-[#000] font-bold w-[160px] h-[48px] tracking-subtitle text-subtitle"
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
