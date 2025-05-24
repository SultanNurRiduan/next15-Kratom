import React from "react";
import CART_DATA from "@/constants/cart";
import CartCard from "./card";

const CartHome = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row md:flex-wrap
        items-center md:items-start
        justify-center
        gap-6
        px-4 py-10
        bg-[#f0fdf4]
        w-full
      "
      data-aos="fade-down"
    >
      {CART_DATA.map((item) => (
        <CartCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CartHome;
