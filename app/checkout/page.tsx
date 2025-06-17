import React from 'react';

import AppProductSummaryComponent from '@/components/AppProductSummaryComponent';
import AppCheckoutFormComponent from '@/components/AppCheckoutFormComponent';
import AppBackButton from '@/components/AppBackBtnComponent';

const CheckoutPage = () => {
  return (
    <div className="bg-[#f2f2f2] pb-20">
      <div className="container pt-8">
        <AppBackButton />
      </div>
      <AppCheckoutFormComponent />

      <AppProductSummaryComponent />
    </div>
  );
};

export default CheckoutPage;
