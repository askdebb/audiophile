import React from 'react';

import AppCategoryItemList from '@/components/AppCategoryItemList';
import { categorySpeakerData } from '@/data/CategoryItemData';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';
import AppInfoComponent from '@/components/AppInfoComponent';

const SpeakersCategory = () => {
  return (
    <>
      <AppCategoryItemList
        category={categorySpeakerData}
        categoryHeader="speakers"
      />
      <div className="mb-5">
        <AppMenuComponent menuCard={menuInfo} />
      </div>
      <AppInfoComponent />
    </>
  );
};

export default SpeakersCategory;
