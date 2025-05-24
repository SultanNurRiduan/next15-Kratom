"use client";

import AboutVideo from "@/components/elements/aboutVideo";
import Benefit from "@/components/elements/benefit";
import CartHome from "@/components/elements/cartHome";
import StoryAbout from "@/components/elements/storyAbout";
import StoryCompany from "@/components/elements/storyCompany";
import React from "react";


const About = () => {
  return (
    <section className="min-h">
      <div>
        <AboutVideo/>
        <CartHome />
        <div className="bg-[#152d1b] py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-white font-extrabold text-sm md:text-base tracking-wide uppercase">
            <span>Meticulously produced using traditional methods</span>
            <span>|</span>
            <span>our kratom upholds the highest standards of quality.</span>
          </div>
        </div>
        <StoryAbout/>
        <StoryCompany/>
        <Benefit />
      </div>
    </section>
  );
};

export default About;
