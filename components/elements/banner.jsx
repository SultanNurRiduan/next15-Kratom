import { FEATER } from "@/constants/banner";
import React from "react";


const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-5xl font-extrabold text-green-900 leading-tight mb-4">
            What Makes Us <span className="text-green-600">Special?</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Discover the reasons why thousands trust us for the best kratom in
            Indonesia.
          </p>
          <div className="space-y-6">
            {FEATER.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <Icon className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-green-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right image */}
        <div>
          <img
            src="/Banner.jpg"
            alt="Kratom leaves"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
