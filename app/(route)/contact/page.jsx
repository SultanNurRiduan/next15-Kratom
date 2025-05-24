"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KontakForm from "@/components/elements/kontakForm";
import Maps from "@/components/elements/maps";
import React from "react";
import Benefit from "@/components/elements/benefit";

const ContactPage = () => {
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
      <section className="min-h-screen px-6 py-12 bg-white text-primary-dark">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <KontakForm />
          </div>
          <div data-aos="fade-left">
            <Maps />
          </div>
        </div>
      </section>

      <section data-aos="fade-down">
        <Benefit />
      </section>
    </>
  );
};

export default ContactPage;
