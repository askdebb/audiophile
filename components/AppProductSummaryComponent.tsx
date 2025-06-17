'use client';

import React from 'react';
import { Card, CardBody, useDisclosure } from '@heroui/react';
import Image from 'next/image';

import AppOrderReceiptComponent from './AppOrderReceiptComponent';

import { checkComma } from '@/lib';
import { useCart } from '@/actions/useCart';
import { SHIPPING_FEE, VAT_CHARGE } from '@/contants/index';

const AppProductSummaryComponent = () => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const { cartItems, getTotalPrice } = useCart();

  const grossPrice = Number(getTotalPrice().toFixed(2));
  const beforeVATprice = grossPrice + SHIPPING_FEE;
  const vatPrice = beforeVATprice * VAT_CHARGE;
  const netPrice = beforeVATprice + vatPrice;

  return (
    <>
      <div className="container mt-10">
        <div className=" bg-white p-5 rounded-radius">
          <h2 className="my-5 uppercase leading-h2 tracking-h2 text-h5 font-extrabold">
            summary
          </h2>
          <div className="py-3">
            {cartItems.map((finalItemToPurchase, index) => (
              <div
                key={index}
                className="flex items-center justify-between my-3"
              >
                <div className="flex gap-x-3">
                  <Card className=" bg-[#fafafa] shadow-none">
                    <CardBody className="flex items-center justify-center">
                      <Image
                        alt={finalItemToPurchase.slug ?? 'Product image'}
                        className="object-cover w-16 h-16"
                        height={60}
                        src={finalItemToPurchase.image ?? '/placeholder.png'}
                        width={60}
                      />
                    </CardBody>
                  </Card>
                  <div className="mt-3 w-24">
                    <h3 className="font-bold text-body ">
                      {finalItemToPurchase.name}
                    </h3>
                    <p>${checkComma(finalItemToPurchase.price)}</p>
                  </div>
                </div>
                <span className="-mt-10 font-medium opacity-50">
                  {finalItemToPurchase.quantity} x
                </span>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center w-full my-1">
              <span className="uppercase text-body opacity-40">Total</span>
              <span className="font-extrabold text-h6 tracking-subtitle">
                ${checkComma(grossPrice)}
              </span>
            </div>
            <div className="flex justify-between items-center w-full my-1">
              <span className="uppercase text-body opacity-40">shipping</span>
              <span className="font-extrabold text-body tracking-subtitle">
                ${SHIPPING_FEE}
              </span>
            </div>
            <div className="flex justify-between items-center w-full my-1">
              <span className="uppercase text-body opacity-40">
                vat (included)
              </span>
              <span className="font-extrabold text-body tracking-1">
                ${checkComma(vatPrice)}
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center w-full my-5">
              <span className="uppercase text-16 opacity-40">grand total</span>
              <span className="font-extrabold text-primary text-h6 tracking-subtitle">
                ${checkComma(netPrice)}
              </span>
            </div>
          </div>

          <button
            className="flex-1 py-3 my-5 w-full bg-primary text-subtitle text-white font-bold hover:bg-hoverColor uppercase tracking-h6"
            onClick={() => onOpen()}
          >
            coutinue & pay
          </button>
        </div>
      </div>

      {isOpen && (
        <AppOrderReceiptComponent
          grandPrice={netPrice}
          isOpen={isOpen}
          onClose={onClose}
          onOpenChange={onOpenChange}
        />
      )}
    </>
  );
};

export default AppProductSummaryComponent;
