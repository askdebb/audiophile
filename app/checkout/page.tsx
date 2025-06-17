'use client';

import React, { useEffect, useState } from 'react';

import AppProductSummaryComponent from '@/components/AppProductSummaryComponent';
import AppCheckoutFormComponent from '@/components/AppCheckoutFormComponent';
import AppBackButton from '@/components/AppBackBtnComponent';

const CheckoutPage = () => {
  const [validEmail, setValidEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  useEffect(() => {
    // Check if email is valid (not Valid and properly formatted)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsEmailValid(validEmail.trim() !== '' && emailRegex.test(validEmail));
  }, [validEmail]);

  return (
    <div className="bg-[#f2f2f2] pb-20">
      <div className="container pt-8 ">
        <AppBackButton />
      </div>
      <div className="lg:flex lg:items-start lg:justify-start xl:container">
        <AppCheckoutFormComponent checkValidEmail={setValidEmail} />

        <AppProductSummaryComponent isEmailValid={isEmailValid} />
      </div>
    </div>
  );
};

export default CheckoutPage;
