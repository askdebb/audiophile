import React from 'react';

import AppCategoryItemList from '@/components/AppCategoryItemList';
import { categorySpeakerData } from '@/data/CategoryItemData';
import AppMenuComponent from '@/components/AppMenuComponent';
import { menuInfo } from '@/data/MenuCard';
import AppInfoComponent from '@/components/AppInfoComponent';

const SpeakersCategory = () => {
  const hasSpeakerData = () => {
    return categorySpeakerData.length !== 0;
  };

  return (
    <>
      {hasSpeakerData() ? (
        <AppCategoryItemList
          category={categorySpeakerData}
          categoryHeader={categorySpeakerData[0].category}
        />
      ) : (
        <div className="h-20 my-5 pt-5 font-bold leading-body tracking-h6 text-h6 text-primary border-b-1 border-foreground w-[60%] mx-auto text-center">
          No Speakers data yet, Try again later.
        </div>
      )}
      <div className="mb-5">
        <AppMenuComponent menuCard={menuInfo} />
      </div>
      <AppInfoComponent />
    </>
  );
};

export default SpeakersCategory;
