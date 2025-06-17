'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/card';
import Image from 'next/image';
import Link from 'next/link';

import { MenuCard } from '@/interfaces/MenuCardInterface';

interface AppMenuComponentProps {
  menuCard: MenuCard[];
  onClose?: () => void;
}

const AppMenuComponent = ({ menuCard, onClose }: AppMenuComponentProps) => {
  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <>
      <div className="md:flex md:container">
        {Array.isArray(menuCard) &&
          menuCard.map((item, index) => (
            <div
              key={index}
              className="container relative md:max-w-none md:px-0 md:mx-1"
            >
              <div className="">
                <div className="flex justify-center">
                  <Image
                    alt={item.alt}
                    className="absolute top-10 z-10 w-auto h-auto md:w-3/4"
                    height={300}
                    src={item.src}
                    width={200}
                  />
                </div>
                <Card className="rounded-radius h-[200px] mt-28 shadow-sm">
                  <CardBody className="bg-cardColor uppercase tracking-subtitle ">
                    <div className="flex flex-col text-center w-full  justify-center mt-24 space-y-3">
                      <h2 className="text-h6 font-bold">{item.header}</h2>
                      <Link href={item.href} onClick={handleLinkClick}>
                        <p className="flex items-center gap-x-3 w-full justify-center">
                          <span className="font-bold text-textColor hover:text-primary hover:transition-all hover:delay-200 md:text-body">
                            shop
                          </span>
                          <span>
                            <Image
                              alt="Icon arrow rignt"
                              height={10}
                              src="/assets/shared/desktop/icon-arrow-right.svg"
                              width={10}
                            />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AppMenuComponent;
