"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const StoryCompany = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Menghindari perbedaan render SSR & CSR
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-green-100 to-white px-4 py-8 md:px-12 md:py-16 gap-6 md:gap-12"
      data-aos="fade-right"
    >
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/4Daun.png"
          alt="Daun Kiri"
          width={500}
          height={500}
          className={`rounded-xl object-contain mx-auto transition-transform duration-300 ${
            isLargeScreen ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-left"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
          About US
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
          Established in 2018 by Julian, S.E. and Adika Putra, Boneo Royal Green
          is a trusted producer and exporter of premium Kratom sourced directly
          from the rich and fertile lands of Borneo, Indonesia. With a deep
          understanding of the Kratom industry and a passion for natural
          wellness, Boneo Royal Green has grown into a respected name in the
          global market. Our Kratom is cultivated in the biodiverse rainforests
          of Borneo, where the unique climate and soil conditions contribute to
          the potency and purity of every leaf we harvest.
          <br />
          <br />
          What distinguishes Boneo Royal Green is our founder-driven dedication
          to quality, integrity, and sustainability. From meticulous harvesting
          techniques to advanced processing methods, each step of our production
          is designed to maintain the highest standards. We implement strict
          quality control and lab testing to ensure every batch is clean,
          consistent, and effective.
          <br />
          <br />
          Serving both individual customers and international business clients,
          we are committed to delivering Kratom that meets and exceeds
          expectations. Whether you're seeking a reliable supplier or a
          long-term partner, Boneo Royal Green offers professionalism,
          transparency, and excellence in every product.
          <br />
          <br />
          <strong>Boneo Royal Green</strong> — Rooted in Borneo. Grown with
          Purpose. Delivered with Integrity.
        </p>
      </div>
    </section>
  );
};

export default StoryCompany;
