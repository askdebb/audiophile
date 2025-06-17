'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppFooterComponent = () => {
  const pathname = usePathname();

  return (
    <div className={`${pathname !== '/' ? 'bg-[#000]' : 'bg-[#191919] '}`}>
      <div className="container">
        <div className="border-t-4 w-[104px] mx-auto border-primary md:mx-0" />
        <div className="mx-auto w-1/2 mt-10 pb-5 md:mx-0">
          <Link href="/">
            <Image
              alt="logo image"
              className="cursor-pointer mx-auto md:mx-0"
              height={25}
              src="/assets/shared/desktop/logo.svg"
              width={143}
            />
          </Link>
        </div>

        <div className="text-background flex flex-col justify-center items-center uppercase tracking-subtitle text-subtitle gap-y-[16px] my-8 font-bold md:flex-row md:gap-x-10 md:justify-start">
          <span className="cursor-pointer hover:text-hoverColor">
            <Link href="/">home</Link>
          </span>
          <span className="cursor-pointer hover:text-hoverColor">
            {' '}
            <Link href="/category/headphones">headphones</Link>
          </span>
          <span className="cursor-pointer hover:text-hoverColor">
            <Link href="/category/speakers">speakers</Link>
          </span>
          <span className="cursor-pointer hover:text-hoverColor">
            {' '}
            <Link href="/category/earphones">earphones</Link>
          </span>
        </div>

        <p className="text-background text-body text-center my-5 leading-subtitle opacity-50 md:opacity-100 md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div className="md:flex md:items-center md:justify-between">
          <p className="text-background my-10 text-center opacity-50 md:opacity-100">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-x-4 my-10">
            <span>
              <Image
                alt="facebook logo"
                height={24}
                src="/assets/shared/desktop/icon-facebook.svg"
                width={24}
              />
            </span>
            <span>
              <Image
                alt="Twitter logo"
                height={24}
                src="/assets/shared/desktop/icon-twitter.svg"
                width={24}
              />
            </span>
            <span>
              <Image
                alt="Instagram logo"
                height={24}
                src="/assets/shared/desktop/icon-instagram.svg"
                width={24}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooterComponent;
