'use client';
import React, { useState } from 'react';
import { Checkbox } from '@heroui/react';

const AppCheckoutFormComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState<
    'e-Money' | 'Cash on Delivery'
  >('e-Money');

  return (
    <div className="container my-10">
      <div className="bg-white p-5 rounded-radius">
        <h1 className="uppercase  text-h4 font-extrabold">checkout</h1>

        <form action="">
          <div>
            {/* billing details */}
            <div>
              <h2 className="text-subtitle uppercase tracking-subtitle text-primary font-bold my-8">
                billing details
              </h2>
              <div className="space-y-5 my-5">
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="name"
                    placeholder="Alexei Ward"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="email">
                    Email Adress
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="email"
                    placeholder="alexei@mail.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label
                    className="mb-2 font-bold text-12"
                    htmlFor="phone-number"
                  >
                    Phone number
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
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
              <div className="space-y-5 my-5">
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="address">
                    Your Address
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="address"
                    placeholder="1137 Williams Avenuw"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="zip-code">
                    ZIP Code
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="zip-code"
                    placeholder="10001"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="city">
                    City
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="city"
                    placeholder="New York"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
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
                <div>
                  <p className="mb-2 font-bold text-12 mb"> Payment Method</p>
                  <div className="space-y-3 ">
                    <div
                      className={`w-full h-16 border-2 rounded-radius flex ${paymentMethod === 'e-Money' && 'border-primary'}`}
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
                      className={`w-full h-16 border-2 rounded-radius flex ${paymentMethod === 'Cash on Delivery' && 'border-primary'}`}
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

                <div className="flex flex-wrap flex-col ">
                  <label className="mb-2 font-bold text-12" htmlFor="zip-code">
                    ZIP Code
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="zip-code"
                    placeholder="10001"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label
                    className="mb-2 font-bold text-12"
                    htmlFor="e-money-number"
                  >
                    e-Money Number
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="e-money-number"
                    placeholder="238521993"
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap flex-col ">
                  <label
                    className="mb-2 font-bold text-12"
                    htmlFor="e-money-pin"
                  >
                    e-Money PIN
                  </label>
                  <input
                    className="rounded-radius h-[56px] w-full border-textColor border py-1 ps-7 focus:outline-primary focus:border-primary caret-primary"
                    id="e-money-pin"
                    placeholder="6891"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppCheckoutFormComponent;
