

import React from "react";
import CartCard from "./card";

const ProductList = ({ products, selectedId, onSelect }) => {
  return (
    <div
      className="
        w-[354px] md:w-1/4
        max-h-[420px] md:max-h-[100vh]
        overflow-y-auto overflow-x-hidden
        space-y-4
        px-4
        mx-auto
        scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent
      "
    >
      <div className="flex flex-col w-full space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            className={`cursor-pointer rounded-2xl transition-shadow duration-300 ${
              selectedId === product.id
                ? "border-2 border-green-700 shadow-2xl"
                : "shadow-lg"
            }`}
          >
            <CartCard
              name={product.name}
              image={product.image}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
