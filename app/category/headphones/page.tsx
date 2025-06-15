import React from 'react';

import AppCategoryItemList from '@/components/AppCategoryItemList';
import { categoryHeadphoneData } from '@/data/CategoryItemData';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';
import AppInfoComponent from '@/components/AppInfoComponent';

const HeadphonesCategory = () => {
  return (
    <>
      <AppCategoryItemList
        category={categoryHeadphoneData}
        categoryHeader="headphones"
      />
      <div className="mb-5">
        <AppMenuComponent menuCard={menuInfo} />
      </div>
      <AppInfoComponent />
    </>
  );
};

export default HeadphonesCategory;
