'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useDisclosure } from '@heroui/react';

import AppMenuDrawerComponent from './AppMenuDrawerComponent';
import AppCheckoutModalComponent from './AppCheckoutModalComponent';

import { useCart } from '@/actions/useCart';

const AppNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
    onOpenChange: onCartOpenChange,
  } = useDisclosure();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const borderLinePath = [
    '/',
    '/category/headphones',
    '/category/speakers',
    '/category/earphones',
  ].includes(pathname);

  if (!isMounted) {
    return (
      <div className="pt-8 bg-[#191919] pb-8">
        <div className="flex items-center justify-between container mb-10">
          <div className="flex items-center gap-x-8 lg:gap-x-0">
            <Image
              priority
              alt="logo image"
              height={25}
              src="/assets/shared/desktop/logo.svg"
              width={143}
            />
          </div>
          <div className="relative">
            <Image
              priority
              alt="cart icon"
              height={20}
              src="/assets/shared/desktop/icon-cart.svg"
              width={23}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`pt-8 ${pathname !== '/' ? 'bg-[#000] -pb-5' : 'bg-[#191919] pb-8'}`}
      >
        <div className="flex items-center justify-between container mb-10">
          <div className="flex items-center gap-x-8 lg:gap-x-0">
            <button
              aria-label="Open menu"
              className="lg:hidden"
              onClick={onMenuOpen}
            >
              <Image
                priority
                alt="menu icon"
                height={15}
                src="/assets/shared/tablet/icon-hamburger.svg"
                width={16}
              />
            </button>
            <Link aria-label="Home" href="/">
              <Image
                priority
                alt="logo image"
                className="cursor-pointer"
                height={25}
                src="/assets/shared/desktop/logo.svg"
                width={143}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex gap-x-[34px] uppercase text-background text-subtitle font-bold tracking-subtitle">
            <Link className="hover:text-hoverColor transition-colors" href="/">
              Home
            </Link>
            <Link
              className="hover:text-hoverColor transition-colors"
              href="/category/headphones"
            >
              Headphones
            </Link>
            <Link
              className="hover:text-hoverColor transition-colors"
              href="/category/speakers"
            >
              Speakers
            </Link>
            <Link
              className="hover:text-hoverColor transition-colors"
              href="/category/earphones"
            >
              Earphones
            </Link>
          </nav>

          <div className="relative">
            <button
              aria-label={`Cart (${cartCount} items)`}
              onClick={onCartOpen}
            >
              <Image
                priority
                alt=""
                height={20}
                src="/assets/shared/desktop/icon-cart.svg"
                width={23}
              />
              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="text-primary font-extrabold absolute -top-5 right-0.5"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        {borderLinePath && (
          <div
            aria-hidden="true"
            className="border-1.5 border-b-[#979797] mx-auto w-full md:w-[42.5rem] lg:w-[57.2rem] xl:w-[73.5rem]"
          />
        )}
      </div>

      <AppMenuDrawerComponent isOpen={isMenuOpen} onClose={onMenuClose} />
      <AppCheckoutModalComponent
        isOpen={isCartOpen}
        onClose={onCartClose}
        onOpenChange={onCartOpenChange}
      />
    </>
  );
};

export default AppNavbar;
