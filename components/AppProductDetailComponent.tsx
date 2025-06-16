'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@heroui/react';
import { useRouter } from 'next/navigation';

import AppQtyCountComponent from './AppQtyCountComponent';
import AppMenuComponent from './AppMenuComponent';
import AppInfoComponent from './AppInfoComponent';

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

  // Optional: Handle additional actions when item is added to cart
  const handleAddToCart = (quantity: number) => {
    // You can add additional logic here like:
    // - Show success toast
    // - Analytics tracking
    // - etc.

    console.log(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className=" pb-10">
      <div className="w-[380px] h-[400px] flex items-center mx-auto justify-center rounded-radius my-10 bg-[#979797]">
        <Image
          alt={product.name}
          className="object-cover"
          height={400}
          src={product.image.mobile}
          width={400}
        />
      </div>
      <div className="container space-y-6 mb-10">
        <span className="uppercase text-subtitle text-primary tracking-overline">
          {product.new ? 'new product' : ''}
        </span>
        <h2 className="uppercase leading-h2 tracking-h2 text-h3 font-bold">
          {product.name}
        </h2>
        <p className="opacity-50 leading-body">{product.description}</p>
        <p className="leading-body tracking-subtitle font-bold text-h5">
          ${checkComma(product.price)}
        </p>
      </div>
      <div className="pb-10">
        <AppQtyCountComponent product={product} onAddToCart={handleAddToCart} />
      </div>

      <div className="container">
        <h2 className="my-5 uppercase leading-h2 tracking-h2 text-h4 font-extrabold">
          Features
        </h2>
        <p className="text-body opacity-50 leading-body mb-10">
          {product.features}
        </p>
      </div>

      <div className="container mb-10">
        <h2 className="my-5 uppercase leading-h2 tracking-h2 text-h4 font-extrabold">
          in the box
        </h2>
        <ul className="text-body opacity-50 leading-body mb-10 space-y-1">
          {product.includes.map((accessoryItem, index) => (
            <li key={index} className="flex gap-x-5">
              <span className="text-primary font-bold">
                {accessoryItem.quantity}x
              </span>
              <span>{accessoryItem.item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <div className="flex flex-col gap-y-5  mb-10">
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
        <h3 className="my-5 uppercase leading-h2 tracking-h3 text-center text-h4 font-extrabold">
          you make also like
        </h3>
        <div>
          {product.others.map((otherItems, index) => (
            <div key={index}>
              <Card className="bg-[#f1f1f1] shadow-none">
                <CardBody>
                  <Image
                    alt={otherItems.slug}
                    height={240}
                    src={otherItems.image.mobile}
                    width={654}
                  />
                </CardBody>
              </Card>
              <h3 className="my-5 uppercase leading-h2 tracking-h3 text-center text-h4 font-extrabold">
                {otherItems.name}
              </h3>
              <div className=" flex justify-center mb-10 ">
                <button
                  className="container uppercase w-[160px] h-[48px] text-white bg-primary  font-bold tracking-subtitle text-subtitle hover:bg-hoverColor hover:transition-all hover:delay-200"
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
