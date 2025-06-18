import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// import { useScreenSize } from '@/helpers/useScreensize';

interface AppHomeHeroCompoent {
  overlineText: string;
  overlineTextClassName?: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  btnText: string;
  btnClassName: string;
  classNameContainerImage: string;
}

const AppHomeHeroComponent = ({
  overlineText,
  overlineTextClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  btnClassName,
  btnText,
  classNameContainerImage,
}: AppHomeHeroCompoent) => {
  const router = useRouter();
  // const screenSizeDetector = useScreenSize();

  return (
    <div className="pb-5 bg-[#191919] w-full ">
      <div className="container w-full max-h-full">
        <div
          className={`-mt-5 h-[600px] md:min-h-[500px] bg-no-repeat bg-contain bg-top ${classNameContainerImage}`}
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="-mt-8 flex flex-col container text-center justify-center h-full lg:w-1/2 lg:mt-20 lg:text-left lg:max-w-none lg:px-0">
              <h1
                className={`mt-48 mb-5 uppercase text-subtitle text-textColor tracking-overline md:text-[1.2rem] md:mt-16 lg:text-subtitle lg:mt-0 ${overlineTextClassName}  `}
              >
                {overlineText}
              </h1>
              <h1
                className={`mb-5 uppercase leading-h2 tracking-h2 text-white text-h2 font-extrabold md:mt-1 md:text-[50px] md:leading-h1 lg:text-h2 lg:text-left lg:max-w-none lg:px-0 lg:leading-h2 xl:w-3/4 xl:text-[4rem] xl:leading-h1 ${titleClassName}`}
              >
                {title}
              </h1>
              <p
                className={`mb-5 text-white opacity-80 leading-body text-subtitle tracking-h3 md:opacity-100 md:font-semibold md:text-center md:w-2/3 md:mx-auto md:text-[1rem] md:tracking-normal lg:font-normal  lg:text-[0.85rem] lg:opacity-50 lg:text-left lg:max-w-none lg:px-0 lg:relative lg:mx-0 xl:opacity-100 ${descriptionClassName} `}
              >
                {description}
              </p>
              <button
                className={`container hover:bg-hoverColor hover:transition-all hover:delay-200 lg:max-w-none lg:px-0 lg:mx-0 xl:mt-5 ${btnClassName} `}
                type="button"
                onClick={() => router.push(`product/xx99-mark-two-headphones`)}
              >
                {btnText}
              </button>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <Image
                alt="hero"
                className="object-cover"
                height={1000}
                src="/assets/home/tablet/image-header.jpg"
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHomeHeroComponent;
