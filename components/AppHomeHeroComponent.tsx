import React from 'react';
import { useRouter } from 'next/navigation';

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

  return (
    <div className="pb-5 bg-[#191919] w-full ">
      <div className="container w-full max-h-full">
        <div
          className={`-mt-5 h-[600px] md:min-h-[500px] bg-no-repeat bg-contain bg-top ${classNameContainerImage}`}
        >
          <div className="-mt-8 flex flex-col container text-center justify-center h-full">
            <h1
              className={`mt-28 mb-5 uppercase text-subtitle text-textColor tracking-overline  ${overlineTextClassName}`}
            >
              {overlineText}
            </h1>
            <h1
              className={`mb-5 uppercase leading-h2 tracking-h2 text-white text-h2 font-extrabold ${titleClassName}`}
            >
              {title}
            </h1>
            <p
              className={`mb-5 text-white opacity-80 leading-body text-subtitle tracking-h3 ${descriptionClassName}`}
            >
              {description}
            </p>
            <button
              className={`container hover:bg-hoverColor hover:transition-all hover:delay-200 ${btnClassName}`}
              type="button"
              onClick={() => router.push(`product/xx99-mark-two-headphones`)}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHomeHeroComponent;
