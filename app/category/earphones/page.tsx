'use client';

import React from 'react';

import AppCategoryItemList from '@/components/AppCategoryItemList';
import { categoryEarphoneData } from '@/data/CategoryItemData';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';
import AppInfoComponent from '@/components/AppInfoComponent';

const EarphonesCategory = () => {
  const hasEarphoneData = () => {
    return categoryEarphoneData.length !== 0;
  };

  return (
    <>
      {hasEarphoneData() ? (
        <AppCategoryItemList
          category={categoryEarphoneData}
          categoryHeader={categoryEarphoneData[0].category}
        />
      ) : (
        <div className="h-20 my-5 pt-5 font-bold leading-body tracking-h6 text-h6 text-primary border-b-1 border-foreground w-[60%] mx-auto text-center">
          No Earphones data yet, Try again later.
        </div>
      )}
      <div className="mb-5">
        <AppMenuComponent menuCard={menuInfo} />
      </div>
      <AppInfoComponent />
    </>
  );
};

export default EarphonesCategory;
