"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CART_DATA from "@/constants/cart";
import ProductList from "@/components/elements/productList";
import ProductDetail from "@/components/elements/productDetail";
import Benefit from "@/components/elements/benefit";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(CART_DATA[0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  return (
    <>
      <section
        className="bg-white min-h-screen  mx-auto px-6 py-12 flex flex-col-reverse md:flex-row gap-12"
        data-aos="fade-down"
      >
        <ProductList
          products={CART_DATA}
          selectedId={selectedProduct.id}
          onSelect={setSelectedProduct}
        />
        <ProductDetail product={selectedProduct} />
      </section>

      <section data-aos="fade-down">
        <Benefit />
      </section>
    </>
  );
};

export default ProductPage;
