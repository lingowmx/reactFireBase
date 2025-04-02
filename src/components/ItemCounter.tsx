// import { useState } from "react";
// import { Product } from "../types";

interface ItemCounterProps {
  // item: Product;
  quantity: number;
  handleRemove: () => void;
  handleAdd: () => void;
  handleAddToCart: () => void;
}

export const ItemCounter = ({
  handleAdd,
  handleRemove,
  handleAddToCart,
  quantity,
}: ItemCounterProps) => {
  return (
    <div className="w-28 flex flex-col justify-between items-center">
      <div className="w-full flex items-center justify-between">
        <button
          className="border border-black w-8 h-8 rounded-md"
          onClick={handleRemove}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="border border-black w-8 h-8 rounded-md"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
