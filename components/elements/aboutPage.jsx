"use client";

import React from "react";
import IMAGE_DATA from "@/constants/image";
import { motion } from "framer-motion";

const fadeFromDirection = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
    },
  },
});

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeFromDirection("left", 0)}
          className="text-5xl md:text-6xl font-extrabold text-green-900 tracking-tight leading-tight"
        >
        Traditional <span className="text-green-600">Kratom</span> Production
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeFromDirection("right", 0.2)}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Follow the natural and traditional journey of kratom — from hand-picked
          leaves to the finest powder, honoring generations of knowledge.
        </motion.p>
      </div>

      <div className="mt-28 space-y-40">
        {IMAGE_DATA.map(({ name, image, description }, index) => {
          const isEven = index % 2 === 0;
          const imgDirection = isEven ? "left" : "right";
          const textDirection = isEven ? "right" : "left";
          const delayBase = index * 0.3;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-14 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeFromDirection(imgDirection, delayBase)}
                className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition duration-700 ease-in-out"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-[22rem] object-cover  transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeFromDirection(textDirection, delayBase + 0.2)}
                className="md:w-1/2 space-y-5 bg-white/60 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 tracking-tight">
                  {name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutPage;
