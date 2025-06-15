'use client';

import React, { useState } from 'react';

interface AppQtyCountComponentProps {
  min?: number;
  max?: number;
  onAddToCart?: (quantity: number) => void;
}

const AppQtyCountComponent = ({
  min = 1,
  max = 99,
  onAddToCart,
}: AppQtyCountComponentProps) => {
  const [count, setCount] = useState<number>(min);

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + 1, max));
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - 1, min));
  };

  const handleAddToCart = () => {
    onAddToCart?.(count);
  };

  return (
    <div className="container">
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
          className="uppercase text-white bg-primary hover:bg-hoverColor w-40 h-12 font-bold tracking-subtitle text-subtitle transition-all"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AppQtyCountComponent;
