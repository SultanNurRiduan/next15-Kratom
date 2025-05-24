

import React from "react";

const CartCard = ({ name, image, description }) => {
  return (
    <div className="w-full max-w-[320px] p-6 flex flex-col rounded-3xl bg-white/20 backdrop-blur-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full aspect-[4/3] mb-4 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h1 className="font-bold text-lg md:text-xl mb-2 text-gray-900">{name}</h1>
      <p className="text-sm md:text-base text-gray-800 mb-3 line-clamp-3">{description}</p>
    </div>
  );
};

export default CartCard;
