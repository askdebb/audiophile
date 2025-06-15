'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppFooterComponent = () => {
  const pathname = usePathname();

  return (
    <div className={`bg-[#191919] ${pathname !== '/' && 'bg-[#000]'}`}>
      <div className="container">
        <div className="border-t-4 w-[104px] mx-auto border-primary" />
        <div className="p-5">
          <Image
            alt="Logo"
            className="mx-auto mt-8"
            height={25}
            src="/assets/shared/desktop/logo.svg"
            width={143}
          />
        </div>

        <div className="text-background flex flex-col justify-center items-center uppercase tracking-subtitle text-subtitle gap-y-[16px] my-8 font-bold">
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

        <p className="text-background text-body text-center my-5 leading-subtitle opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div>
          <p className="text-background my-10 text-center opacity-50">
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
