"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/elements/banner";
import Benefit from "@/components/elements/benefit";
import CartHome from "@/components/elements/cartHome";
import React from "react";
import AboutPage from "@/components/elements/aboutPage";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <>
      <section className="relative bg-[url('/Background.1.jpg')] bg-cover bg-[center_0%] h-screen flex items-center justify-center">
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Konten teks */}
        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <h1 className="text-white font-extrabold text-5xl md:text-6xl drop-shadow-lg mb-4">
            Welcome to Borneo Royal Green
          </h1>
          <p
            className="text-white font-semibold text-2xl md:text-3xl drop-shadow-md"
            data-aos="fade-up"
          >
            Authentic Kratom from Borneo, West Kalimantan
          </p>
          <p
            className="text-white font-light drop-shadow-md max-w-xl mx-auto text-center"
            data-aos="fade-up"
          >
            At Borneo Royal Green, we present premium kratom leaves grown in the
            fertile soil of western Borneo — a green gem hidden in the heart of
            the island. Known to kratom lovers worldwide, each leaf contains
            natural power and rich alkaloid content, bringing harmony between
            tradition and serenity.
          </p>
        </div>
      </section>

      <section className="bg-[#152d1b] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-white font-extrabold text-[0.6rem] md:text-base tracking-wide uppercase">
          <span>Looking for real</span>
          <span>|</span>
          <span>high-quality kratom?</span>
          <span>|</span>
          <span>You’ve come to the right place.</span>
        </div>
      </section>

      <section data-aos="fade-up">
        <CartHome />
      </section>

      <section data-aos="fade-right">
        <Banner />
      </section>

      <section data-aos="fade-left">
        <Benefit />
      </section>
      <section>
        <AboutPage/>
      </section>
    </>
  );
};

export default Home;
