'use client';
import Image from 'next/image';
import React from 'react';

const AppNavbar = () => {
  return (
    <>
      <div className=" py-8 bg-[#141414] ">
        <div className="flex items-center justify-between container h-12">
          <div>
            <span></span>
            <Image
              alt="logo image"
              height={25}
              src="/assets/shared/desktop/logo.svg"
              width={143}
              className="cursor-pointer"
            />
          </div>

          <div className="flex gap-x-[34px] uppercase text-background text-subtitle font-bold tracking-subtitle">
            <span className="cursor-pointer hover:text-hoverColor">home</span>
            <span className="cursor-pointer hover:text-hoverColor">
              headphones
            </span>
            <span className="cursor-pointer hover:text-hoverColor">
              speakers
            </span>
            <span className="cursor-pointer hover:text-hoverColor">
              earphones
            </span>
          </div>

          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart icon"
            width={23}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div className="border-b-1 border-[#979797] mx-auto lg:w-[73.5rem] 2xl:w-[82.5rem]">
          &apos;
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
