"use client";

import React, { useEffect, useState } from "react";

const AboutVideo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="w-full overflow-hidden flex justify-center relative">
      {/* Wrapper yang fleksibel di mobile dan fullscreen di desktop */}
      <div className="relative w-full sm:h-screen">
        {/* Video Background */}
        <video
          className="w-full h-auto sm:h-full object-contain "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay mengikuti ukuran video */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

        {/* Content di atas overlay dan video */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            About Us
          </h1>
          <p className="max-w-md sm:max-w-2xl text-base sm:text-lg md:text-xl">
            Traditional Borneo Kratom Cultivated in West Kalimantan
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
