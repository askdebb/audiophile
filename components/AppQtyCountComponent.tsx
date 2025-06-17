'use client';

import React, { useState, useEffect } from 'react';

import { useCart } from '@/actions/useCart';
import { Product } from '@/interfaces/CategoryItem';

interface AppQtyCountComponentProps {
  product: Product;
  min?: number;
  max?: number;
}

const AppQtyCountComponent = ({
  product,
  min = 1,
  max = 99,
}: AppQtyCountComponentProps) => {
  const [addFeedback, setAddFeedback] = useState<boolean>(false);
  const [count, setCount] = useState<number>(min);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + 1, max));
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - 1, min));
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image.mobile,
        slug: product.slug,
      },
      count,
    );
    setAddFeedback(true);
    setCount(min);
  };

  useEffect(() => {
    if (addFeedback) {
      const timer = setTimeout(() => {
        setAddFeedback(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [addFeedback]);

  return (
    <div className="container md:-ml-5 md:">
      <div className="flex items-center gap-5">
        <div className="w-40 h-12 bg-[#f1f1f1] flex items-center">
          <button
            aria-label="Decrease quantity"
            className="w-12 h-full flex justify-center items-center text-subtitle font-bold disabled:opacity-30"
            disabled={count <= min}
            onClick={handleDecrement}
          >
            −
          </button>

          <span className="flex-1 text-center text-subtitle font-bold">
            {count}
          </span>

          <button
            aria-label="Increase quantity"
            className="w-12 h-full flex justify-center items-center text-subtitle font-bold disabled:opacity-30"
            disabled={count >= max}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <button
          aria-label={`Add ${count} items to cart`}
          className={`uppercase text-white bg-primary hover:bg-hoverColor w-40 h-12 font-bold tracking-subtitle text-subtitle transition-all md:tracking-[0.5px] ${addFeedback ? 'focus:bg-green-500 transition-all' : ''}`}
          onClick={handleAddToCart}
        >
          {addFeedback ? 'added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default AppQtyCountComponent;
