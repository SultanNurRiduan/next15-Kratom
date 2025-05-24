import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <div className="w-full md:w-2/3 p-4 md:p-6 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-3xl w-full max-h-[300px] md:max-h-[400px] object-cover mb-6"
      />
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-green-900 text-center md:text-left">
        {product.name}
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-6 whitespace-pre-line text-center md:text-left">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
