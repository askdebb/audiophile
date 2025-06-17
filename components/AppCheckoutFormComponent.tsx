'use client';
import React, { useEffect, useState } from 'react';
import { Checkbox } from '@heroui/react';
import Image from 'next/image';
import { useFormik } from 'formik';

import { checkoutSchema } from '@/models/checkoutSchema';

interface AppCheckoutFormComponent {
  checkValidEmail: (email: string) => void;
}

const AppCheckoutFormComponent = ({
  checkValidEmail,
}: AppCheckoutFormComponent) => {
  const [paymentMethod, setPaymentMethod] = useState<
    'e-Money' | 'Cash on Delivery'
  >('e-Money');

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: { email: '' },
      validationSchema: checkoutSchema,
      onSubmit: (values, { setSubmitting }) => {
        checkValidEmail(values.email);
        setSubmitting(false);
      },
    });

  useEffect(() => {
    checkValidEmail(values.email);
  }, [values.email, checkValidEmail]);

  return (
    <div className="container my-10 lg:w-2/3 lg:ml-6 xl:max-w-none xl:px-0 xl:ml-0">
      <div className="bg-white p-5 rounded-radius">
        <h1 className="uppercase  text-h4 font-extrabold">checkout</h1>

        <form onSubmit={handleSubmit}>
          <div>
            {/* billing details */}
            <div>
              <h2 className="text-subtitle uppercase tracking-subtitle text-primary font-bold my-8">
                billing details
              </h2>
              <div className="space-y-5 my-5 md:flex md:flex-col">
                {/* Top Row - Two equal width inputs */}
                <div className="md:flex md:space-x-5">
                  {/* Name Input */}
                  <div className="flex flex-col md:w-1/2">
                    <label className="mb-2 font-bold text-12" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                      id="name"
                      placeholder="Alexei Ward"
                      type="text"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col md:w-1/2 mt-5 md:mt-0">
                    <label
                      className={`mb-2 font-bold text-12 flex items-start justify-between ${errors.email && touched.email && 'text-[#cd2c2c]'}`}
                      htmlFor="email"
                    >
                      Email Address{' '}
                      <>
                        {errors.email && touched.email ? (
                          <span className="text-[#cd2c2c]">{errors.email}</span>
                        ) : (
                          ''
                        )}
                      </>
                    </label>
                    <input
                      className={`rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold ${errors.email && touched.email && 'text-[#cd2c2c] focus:outline-[#cd2c2c] focus:border-[#cd2c2c]'}`}
                      id="email"
                      placeholder="alexei@mail.com"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Bottom Row - Full width input */}
                <div className="flex flex-col md:w-1/2">
                  <label
                    className="mb-2 font-bold text-12"
                    htmlFor="phone-number"
                  >
                    Phone Number
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                    id="phone-number"
                    placeholder="+1 202-555-0136"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/*  shipping info */}
            <div>
              <h2 className="text-subtitle uppercase tracking-subtitle text-primary font-bold my-8">
                shipping info
              </h2>
              <div className="space-y-5 my-5 md:flex md:flex-col">
                <div className="flex flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="address">
                    Your Address
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    type="text"
                  />
                </div>
                <div className="md:flex md:space-x-5">
                  <div className="flex flex-col md:w-1/2 ">
                    <label
                      className="mb-2 font-bold text-12"
                      htmlFor="zip-code"
                    >
                      ZIP Code
                    </label>
                    <input
                      className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                      id="zip-code"
                      placeholder="10001"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col md:w-1/2 ">
                    <label className="mb-2 font-bold text-12" htmlFor="city">
                      City
                    </label>
                    <input
                      className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                      id="city"
                      placeholder="New York"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2 ">
                  <label className="mb-2 font-bold text-12" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                    id="country"
                    placeholder="United States"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/*  payment details */}
            <div>
              <h2 className="text-subtitle uppercase tracking-subtitle text-primary font-bold my-8">
                payment details
              </h2>
              <div className="space-y-5 my-5">
                <div className="md:flex md:justify-between">
                  <p className="mb-2 font-bold text-12 mb md:w-1/2">
                    {' '}
                    Payment Method
                  </p>
                  <div className="space-y-3 md:w-1/2 ">
                    <div
                      className={`w-full h-16 border-2 rounded-radius flex hover:border-primary font-bold ${paymentMethod === 'e-Money' && 'border-primary'}`}
                    >
                      <Checkbox
                        className="ml-5 font-bold text-14"
                        isSelected={paymentMethod === 'e-Money'}
                        radius="full"
                        onChange={() => setPaymentMethod('e-Money')}
                      >
                        e-Money
                      </Checkbox>
                    </div>
                    <div
                      className={`w-full h-16 border-2 rounded-radius flex hover:border-primary font-bold ${paymentMethod === 'Cash on Delivery' && 'border-primary'}`}
                    >
                      <Checkbox
                        className="ml-5 font-bold text-14"
                        isSelected={paymentMethod === 'Cash on Delivery'}
                        radius="full"
                        onChange={() => setPaymentMethod('Cash on Delivery')}
                      >
                        Cash on Delivery
                      </Checkbox>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap flex-col md:hidden">
                  <label className="mb-2 font-bold text-12" htmlFor="zip-code">
                    ZIP Code
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                    id="zip-code"
                    placeholder="10001"
                    type="text"
                  />
                </div>

                <div className="md:flex md:space-x-5">
                  <div className="flex flex-wrap flex-col md:w-1/2 ">
                    <label
                      className="mb-2 font-bold text-12"
                      htmlFor="e-money-number"
                    >
                      e-Money Number
                    </label>
                    <input
                      className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                      id="e-money-number"
                      placeholder="238521993"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-wrap flex-col md:w-1/2">
                    <label
                      className="mb-2 font-bold text-12"
                      htmlFor="e-money-pin"
                    >
                      e-Money PIN
                    </label>
                    <input
                      className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary hover:border-primary font-bold"
                      id="e-money-pin"
                      placeholder="6891"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:container  lg:my-10 lg:flex lg:items-center lg:gap-x-10">
              <Image
                alt="cash on delivery"
                height={64}
                src="/assets/checkout/icon-cash-on-delivery.svg"
                width={64}
              />
              <p className="lg:text-body lg:opacity-80">
                The `Cash on Delivery` option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppCheckoutFormComponent;
