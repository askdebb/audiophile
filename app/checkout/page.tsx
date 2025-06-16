import React from 'react';

import AppProductSummaryComponent from '@/components/AppProductSummaryComponent';
import AppCheckoutFormComponent from '@/components/AppCheckoutFormComponent';
import AppBackButton from '@/components/AppBackBtnComponent';

const CheckoutPage = () => {
  return (
    <div>
      <div className="container mt-2 pt-8">
        <AppBackButton />
      </div>
      <AppCheckoutFormComponent />
      <AppProductSummaryComponent />
    </div>
  );
};

export default CheckoutPage;
