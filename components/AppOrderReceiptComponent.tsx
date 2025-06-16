import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useCart } from '@/actions/useCart';
import { checkComma } from '@/lib';

interface AppOrderReceiptComponent {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
  grandPrice: number;
}

const AppOrderReceiptComponent = ({
  isOpen,
  onOpenChange,
  grandPrice,
}: AppOrderReceiptComponent) => {
  const { cartItems, cartCount } = useCart();

  const router = useRouter();

  return (
    <>
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-2 mt-5">
                <Image
                  alt="confirmation-icon"
                  height={64}
                  src="assets/checkout/icon-order-confirmation.svg"
                  width={64}
                />
                <h1 className="uppercase text-h3 leading-h2 font-bold">
                  thank you for your order
                </h1>
              </ModalHeader>
              <ModalBody>
                <p className="my-5 opacity-50 text-h6 font-semibold">
                  You will receive an email confirmation shortly.
                </p>
                <div className="bg-[#f1f1f1] rounded-t-radius">
                  <div className="p-5">
                    <div className="flex items-start justify-around">
                      <div className="flex items-start gap-x-3">
                        <Image
                          alt={cartItems[0]?.slug ?? ''}
                          className="mt-4"
                          height={64}
                          src={cartItems[0].image ?? ''}
                          width={64}
                        />

                        <div className="mt-5 w-28 space-y-1">
                          <h3 className="font-bold text-body ">
                            {cartItems[0].name}
                          </h3>
                          <p>${checkComma(cartItems[0].price)}</p>
                        </div>
                      </div>
                      <span className=" mt-4 font-medium opacity-50">
                        {cartItems[0].quantity} x
                      </span>
                    </div>
                    <div className="border-b-1.5 w-[85%] mx-auto mt-2" />

                    <p className="text-center text-body font-bold opacity-50 py-3">
                      and {cartCount - 1} other item(s)
                    </p>
                  </div>
                  <div className="rounded-b-radius bg-black p-5">
                    <div className="flex flex-col gap-y-2 py-2">
                      <span className="text-white opacity-50 uppercase text-h6">
                        grand total
                      </span>
                      <span className="text-white text-h6 font-extrabold">
                        ${checkComma(grandPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  className="flex-1 py-3 my-5 w-full bg-primary text-12 text-white font-bold hover:bg-hoverColor uppercase h-16 tracking-subtitle"
                  onClick={() => router.push('/')}
                >
                  back to home
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppOrderReceiptComponent;
