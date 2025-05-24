import React from "react";


const Maps = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
        <iframe
          title="Lokasi Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.36363063302326!2d109.31713434389331!3d-0.01946380165530892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59006f9d664f%3A0x6bc37688d6447110!2sSambal%20Trebek!5e0!3m2!1sen!2sid!4v1747598616310!5m2!1sen!2sid"
          className="w-full h-[400px] md:h-[500px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
