"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const StoryAbout = () => {
  // Hook harus berada di dalam komponen
  useEffect(() => {
    AOS.init({
      duration: 1000,  // durasi animasi
      once: false,      // hanya sekali animasi saat scroll
    });
  }, []);

  return (
    <section className="relative w-full min-h-100 md:h-screen bg-white overflow-hidden">
      {/* Daun kiri atas */}
      <div className="absolute left-0 top-0 z-10 w-20 h-28 sm:w-48 sm:h-72" data-aos="fade-right">
        <Image
          src="/DaunKratom.png"
          alt="Daun Kiri"
          fill
          className="rotate-[120deg] object-contain"
          sizes="(max-width: 640px) 5rem, 12rem"
        />
      </div>

      {/* Daun kanan atas */}
      <div className="absolute right-0 top-0 z-10 w-20 h-28 sm:w-48 sm:h-72" data-aos="fade-left">
        <Image
          src="/DaunKratom.png"
          alt="Daun Kanan"
          fill
          className="rotate-[240deg] object-contain"
          sizes="(max-width: 640px) 5rem, 12rem"
        />
      </div>

      {/* Konten Tengah */}
      <div className="flex flex-col sm:flex-row items-center justify-center h-full gap-20 px-4 py-20 text-center" data-aos="zoom-in">
        {/* Julian */}
        <div className="flex flex-col items-center group">
          <div className="relative w-60 h-60 sm:w-96 sm:h-96 transition-transform duration-300 ease-in-out group-hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-30" />
            <Image
              src="/Julian.jpg"
              alt="Julian"
              fill
              className="rounded-full object-cover shadow-2xl ring-4 ring-white"
              sizes="(max-width: 640px) 15rem, 24rem"
            />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-gray-800">Julian, S.E.</h1>
        </div>

        {/* Adika */}
        <div className="flex flex-col items-center group">
          <div className="relative w-60 h-60 sm:w-96 sm:h-96 transition-transform duration-300 ease-in-out group-hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-30" />
            <Image
              src="/Adika.jpg"
              alt="Adika"
              fill
              className="rounded-full object-cover shadow-2xl ring-4 ring-white"
              sizes="(max-width: 640px) 15rem, 24rem"
            />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-gray-800">Adika Putra</h1>
        </div>
      </div>

      {/* Daun kiri bawah */}
      <div className="absolute left-0 bottom-0 z-10 w-20 h-28 sm:w-48 sm:h-72" data-aos="fade-right">
        <Image
          src="/DaunKratom.png"
          alt="Daun Kiri Bawah"
          fill
          className="rotate-[420deg] object-contain"
          sizes="(max-width: 640px) 5rem, 12rem"
        />
      </div>

      {/* Daun kanan bawah */}
      <div className="absolute right-0 bottom-0 z-10 w-20 h-28 sm:w-48 sm:h-72" data-aos="fade-left">
        <Image
          src="/DaunKratom.png"
          alt="Daun Kanan Bawah"
          fill
          className="rotate-[300deg] object-contain"
          sizes="(max-width: 640px) 5rem, 12rem"
        />
      </div>
    </section>
  );
};

export default StoryAbout;
