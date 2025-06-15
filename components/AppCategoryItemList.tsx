'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Product } from '@/interfaces/CategoryItem';

interface AppCategoryItemListProps {
  category: Product[];
  categoryHeader: string;
}

const AppCategoryItemList = ({
  category,
  categoryHeader,
}: AppCategoryItemListProps) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="bg-[#000] py-8">
          <h1 className="text-white text-center uppercase tracking-subtitle text-h3 font-bold">
            {categoryHeader}
          </h1>
        </div>
        {Array.isArray(category) &&
          category.map((mobileItem, id) => (
            <div key={id}>
              <div className="w-[380px] h-[400px] flex items-center mx-auto justify-center  rounded-radius my-10 bg-[#979797]">
                <Image
                  alt={mobileItem.slug}
                  className="object-cover "
                  height={400}
                  src={mobileItem.image.mobile}
                  width={400}
                />
              </div>
              <div className="container text-center space-y-6 mb-10">
                <span className="uppercase text-subtitle text-primary tracking-overline">
                  new product
                </span>
                <h2 className=" uppercase leading-h2 tracking-h2 text-h2 font-bold">
                  {mobileItem.name}
                </h2>
                <p className=" opacity-50 leading-body">
                  {mobileItem.description}
                </p>
                <button
                  className="mb-10 uppercase text-white bg-primary w-[160px] h-[48px] font-bold tracking-subtitle text-subtitle hover:bg-hoverColor"
                  type="button"
                  onClick={() => router.push(`/product/${mobileItem.slug}`)}
                >
                  see product
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AppCategoryItemList;
