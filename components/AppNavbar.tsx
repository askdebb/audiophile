'use client';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const AppNavbar = () => {
  const pathname = usePathname();

  const borderLinePath = [
    '/',
    '/category/headphones',
    '/category/speakers',
    '/category/earphones',
  ].includes(pathname);

  return (
    <>
      <div
        className={`pt-8  ${pathname !== '/' ? 'bg-[#000] -pb-5' : 'bg-[#191919] pb-8'}`}
      >
        <div className="flex items-center justify-between container  mb-10">
          <div className="flex items-center gap-x-8 lg:gap-x-0">
            <span>
              <Image
                alt="menu icon"
                className="lg:hidden cursor-pointer"
                height={15}
                src="/assets/shared/tablet/icon-hamburger.svg"
                width={16}
              />
            </span>
            <Link href="/">
              <Image
                alt="logo image"
                className="cursor-pointer"
                height={25}
                src="/assets/shared/desktop/logo.svg"
                width={143}
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-x-[34px] uppercase text-background text-subtitle font-bold tracking-subtitle">
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
            alt="cart icon"
            className="cursor-pointer"
            height={20}
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
          />
        </div>
        {borderLinePath && (
          <div className="border-b-1 border-[#979797] mx-auto w-[25.5rem] sm:w-[37.5rem] md:w-[42.5rem] lg:w-[57.5rem] xl:w-[73.5rem] 2xl:w-[82.5rem]" />
        )}
      </div>
    </>
  );
};

export default AppNavbar;
