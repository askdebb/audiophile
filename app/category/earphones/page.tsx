import React from 'react';

import AppCategoryItemList from '@/components/AppCategoryItemList';
import { categoryEarphoneData } from '@/data/CategoryItemData';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';
import AppInfoComponent from '@/components/AppInfoComponent';

const EarphonesCategory = () => {
  return (
    <>
      <AppCategoryItemList
        category={categoryEarphoneData}
        categoryHeader="earphones"
      />
      <div className="mb-5">
        <AppMenuComponent menuCard={menuInfo} />
      </div>
      <AppInfoComponent />
    </>
  );
};

export default EarphonesCategory;
