'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@heroui/react';
import { useRouter } from 'next/navigation';

import AppQtyCountComponent from './AppQtyCountComponent';
import AppMenuComponent from './AppMenuComponent';
import AppInfoComponent from './AppInfoComponent';

import { useScreenSize } from '@/helpers/useScreensize';
import { Product } from '@/interfaces/CategoryItem';
import { checkComma } from '@/lib';
import { menuInfo } from '@/data/MenuCard';

interface AppProductDetailsComponentProp {
  product: Product;
}

const AppProductDetailComponent = ({
  product,
}: AppProductDetailsComponentProp) => {
  const router = useRouter();
  const screenSizeDetector = useScreenSize();

  return (
    <div className=" pb-10 ">
      <div className="md:flex md:items-center md:gap-x-5 md:container md:mt-16 lg:gap-x-0">
        <div className="w-[380px] h-[400px] flex items-center mx-auto justify-center rounded-radius my-10 bg-cardColor md:bg-transparent md:my-0  md:w-1/2  lg:justify-start">
          <Image
            alt={product.name}
            className="object-cover md:rounded-radius"
            height={400}
            src={
              screenSizeDetector === 'tablet'
                ? product.image.tablet
                : screenSizeDetector === 'desktop'
                  ? product.image.desktop
                  : product.image.mobile
            }
            width={400}
          />
        </div>
        <div className="container space-y-6 mb-10 md:w-1/2 lg:max-w-none lg:px-0">
          <span className="uppercase text-subtitle text-primary tracking-overline">
            {product.new ? 'new product' : ''}
          </span>
          <h2 className="uppercase leading-h2 tracking-h2 text-h3 font-bold md:w-2/3 md:leading-h3 md:text-h4 md:font-extrabold">
            {product.name}
          </h2>
          <p className="opacity-50 leading-body">{product.description}</p>
          <p className="leading-body tracking-subtitle font-bold text-h5 md:pb-5">
            ${checkComma(product.price)}
          </p>
          <div className="pb-10 md:pb-0">
            <AppQtyCountComponent product={product} />
          </div>
        </div>
      </div>

      <div className="lg:container lg:flex lg:justify-between lg:gap-x-10">
        <div className="container lg:w-2/3 lg:max-w-none lg:px-0">
          <h2 className="my-5 uppercase leading-h2 tracking-h2 text-h4 font-extrabold md:mt-24">
            Features
          </h2>
          <p className="text-body opacity-50 leading-body mb-10 lg:w-5/6">
            {product.features}
          </p>
        </div>

        <div className="container mb-10 md:mt-24 md:flex md:items-start md:justify-start md:gap-x-36 lg:w-1/3 lg:block lg:maz-w-none lg:px-0">
          <h2 className="my-5 uppercase leading-h2 tracking-h2 text-h4 font-extrabold md:my-0">
            in the box
          </h2>
          <ul className="text-body opacity-50 leading-body mb-10 space-y-1 md:opacity-100 md:space-y-4 lg:space-y-2 lg:mt-5">
            {product.includes.map((accessoryItem, index) => (
              <li key={index} className="flex gap-x-5">
                <span className="text-primary font-bold">
                  {accessoryItem.quantity}x
                </span>
                <span className="md:opacity-70">{accessoryItem.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-y-5 mb-10 md:grid md:grid-cols-2 md:gap-5">
          <div className="md:space-y-5 lg:space-y-8">
            <Image
              alt={product.name}
              className="object-cover rounded-radius"
              height={300}
              src={product.gallery.first.mobile}
              width={600}
            />
            <Image
              alt={product.name}
              className="object-cover rounded-radius"
              height={300}
              src={product.gallery.second.mobile}
              width={600}
            />
          </div>

          <Image
            alt={product.name}
            className="object-cover rounded-radius"
            height={300}
            src={product.gallery.third.mobile}
            width={600}
          />
        </div>
      </div>

      <div className="container">
        <h3 className="my-5 uppercase leading-h2 tracking-h3 text-center text-h4 font-extrabold md:mt-24">
          you make also like
        </h3>
        <div className="md:flex md:gap-x-5">
          {product.others.map((otherItems, index) => (
            <div key={index}>
              <Card className="bg-[#f1f1f1] shadow-none">
                <CardBody>
                  <Image
                    alt={otherItems.slug}
                    height={240}
                    src={
                      screenSizeDetector === 'mobile'
                        ? otherItems.image.mobile
                        : screenSizeDetector === 'tablet'
                          ? otherItems.image.tablet
                          : otherItems.image.desktop
                    }
                    width={654}
                  />
                </CardBody>
              </Card>
              <h3 className="my-5 uppercase leading-h2 tracking-h3 text-center text-h4 font-extrabold">
                {otherItems.name}
              </h3>
              <div className=" flex justify-center mb-10 ">
                <button
                  className="container uppercase w-[160px] h-[48px] text-white bg-primary  font-bold tracking-subtitle text-subtitle hover:bg-hoverColor hover:transition-all hover:delay-200 lg:w-[180px]"
                  type="button"
                  onClick={() => router.push(`/product/${otherItems.slug}`)}
                >
                  see product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AppMenuComponent menuCard={menuInfo} />
      <AppInfoComponent />
    </div>
  );
};

export default AppProductDetailComponent;
