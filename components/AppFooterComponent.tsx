'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppFooterComponent = () => {
  const pathname = usePathname();

  return (
    <footer className={`${pathname !== '/' ? 'bg-[#000]' : 'bg-[#191919]'}`}>
      <div className="container">
        {/* Border line */}
        <div className="border-t-4 w-[104px] mx-auto border-primary md:mx-0" />

        {/* Logo */}
        <div className="w-1/2 mx-auto mt-10 pb-5 md:mx-0 md:w-auto">
          <Link href="/">
            <Image
              priority
              alt="logo image"
              className="cursor-pointer mx-auto md:mx-0"
              height={25}
              src="/assets/shared/desktop/logo.svg"
              width={143}
            />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="text-white flex flex-col items-center uppercase tracking-widest text-sm gap-4 my-8 font-bold md:flex-row md:gap-10 md:justify-start">
          <Link className="hover:text-primary transition-colors" href="/">
            home
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/category/headphones"
          >
            headphones
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/category/speakers"
          >
            speakers
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/category/earphones"
          >
            earphones
          </Link>
        </nav>

        {/* Description */}
        <p className="text-white text-center text-sm leading-6 opacity-50 mb-10 md:text-left md:max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio.
        </p>

        {/* Bottom section */}
        <div className="md:flex md:items-center md:justify-between pt-2 pb-10">
          <p className="text-white text-center opacity-50 md:text-left">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center gap-6 mt-8 md:mt-0">
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <Link key={social} aria-label={social} href="#">
                <Image
                  alt={`${social} logo`}
                  height={24}
                  src={`/assets/shared/desktop/icon-${social}.svg`}
                  width={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooterComponent;
