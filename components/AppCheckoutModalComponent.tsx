'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/react';
import { Trash2 } from 'lucide-react';

import { useCartStore } from '@/store/cartStore';
import { checkComma } from '@/lib';
import { useScreenSize } from '@/helpers/useScreensize';

interface AppCheckoutModalComponentProp {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

const AppCheckoutModalComponent = ({
  isOpen,
  onOpenChange,
}: AppCheckoutModalComponentProp) => {
  const router = useRouter();
  const {
    carts,
    removeProduct,
    getTotal,
    clearCart,
    increaseQty,
    decreaseQty,
  } = useCartStore();

  const screenSizeDetector = useScreenSize();

  const grossPrice = Number(getTotal().toFixed(2));

  return (
    <div className="md:relative">
      <Modal
        className="md:absolute md:top-0 md:right-12"
        isDismissable={false}
        isOpen={isOpen}
        placement={
          screenSizeDetector === 'tablet'
            ? 'top'
            : screenSizeDetector === 'desktop'
              ? 'center'
              : screenSizeDetector === '2xl'
                ? 'center'
                : 'top-center'
        }
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-h5 font-bold uppercase">
                    Cart ({carts.length})
                  </h2>

                  <button
                    className="text-sm text-gray-500 hover:text-hoverColor mr-6 underline"
                    onClick={clearCart}
                  >
                    Remove all
                  </button>
                </div>
              </ModalHeader>
              <ModalBody>
                {carts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-lg opacity-50">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {carts.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 "
                      >
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                          {item.image && (
                            <Image
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                              height={64}
                              src={item.image}
                              width={64}
                            />
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <h3 className="font-bold text-sm uppercase">
                            {item.name}
                          </h3>
                          <p className="text-sm opacity-50">${item.price}</p>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center bg-gray-100">
                          <button
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:text-hoverColor"
                            onClick={() => decreaseQty(item.id)}
                          >
                            −
                          </button>
                          <span className="w-12 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:text-hoverColor"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          aria-label="Remove item"
                          className="text-red-500 hover:text-red-700 text-sm"
                          onClick={() => removeProduct(item.id)}
                        >
                          <Trash2 />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </ModalBody>
              {carts.length > 0 && (
                <ModalFooter className="flex flex-col gap-4">
                  <div className="flex justify-between items-center w-full my-5">
                    <span className="uppercase text-16">Total</span>
                    <span className="font-extrabold text-h6">
                      ${checkComma(grossPrice)}
                    </span>
                  </div>

                  <div className="gap-2 w-full mx-auto">
                    <button
                      className="flex-1 py-3 w-full bg-primary text-white font-bold hover:bg-hoverColor"
                      onClick={() => {
                        // Handle checkout logic
                        router.push(`/checkout`);
                        onClose();
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AppCheckoutModalComponent;
