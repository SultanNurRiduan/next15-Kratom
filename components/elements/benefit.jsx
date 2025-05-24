import React from 'react';

const Benefit = () => {
  return (
    <section className="bg-[#e9f5ee] py-8 px-4 md:px-20">
      <div className="grid grid-cols-4 gap-4 text-center items-center">
        {[
          ["🚚", "Fast"],
          ["🌿", "Natural"],
          ["📦", "Secure"],
          ["🤝", "Fair"],
        ].map(([emoji, title], i) => (
          <div key={i} className="flex flex-col items-center text-xs md:text-base">
            <div className="text-2xl md:text-4xl mb-1 md:mb-2">{emoji}</div>
            <h3 className="font-bold text-green-800">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
