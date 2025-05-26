"use client";

import React from "react";
import KONTAK_ITEMS from "@/constants/kontak";
import NAVBAR from "@/constants/navbar";
import Link from "next/link";
import LogoFooter from "../elements/logoFooter";
import CART_DATA from "@/constants/cart";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ICONS = {
  Whatsapp: <FaPhone />,
  Phone: <FaPhone />,
  Email: <FaEnvelope />,
  Facebook: <FaFacebook />,
  Twitter: <FaTwitter />,
  Instagram: <FaInstagram />,
  Tiktok: <FaTiktok />,
  Youtube: <FaYoutube />,
  Address: <FaMapMarkerAlt />,
};

const Footer = () => {
  const kontakPersonal = KONTAK_ITEMS.filter((item) =>
    ["whatsapp", "email", "phone"].includes(item.type.toLowerCase())
  );

  const socialMedia = KONTAK_ITEMS.filter((item) =>
    ["facebook", "twitter", "instagram", "tiktok", "youtube"].includes(
      item.type.toLowerCase()
    )
  );

  return (
    <footer className="bg-accent text-primary-dark px-15 py-8 md:py-12 border-t border-primary-dark">
      <div className="grid grid-cols-3 grid-rows-2 gap-10 text-center md:flex md:justify-evenly md:text-left items-start text-xs md:text-base">
        
        {/* Pindah logo ke urutan paling atas agar tampil pertama di mobile */}
        <div className="col-span-3 md:order-none md:col-start-2 md:row-start-1" data-aos="zoom-in">
          <div className="w-24 md:w-36 mx-auto md:mx-0">
            <LogoFooter />
          </div>
        </div>

        {/* Navigasi */}
        <div className="col-start-1 row-start-1 min-w-[140px]" data-aos="fade-up">
          <h2 className="text-sm md:text-lg font-semibold mb-4 uppercase tracking-wider">
            Navigasi
          </h2>
          <ul className="space-y-2">
            {NAVBAR.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="transition-transform duration-200 hover:scale-105 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Produk */}
        <div className="col-start-1 row-start-2 min-w-[140px]" data-aos="fade-up">
          <h2 className="text-sm md:text-lg font-semibold mb-4 uppercase tracking-wider">
            Produk
          </h2>
          <ul className="space-y-2">
            {CART_DATA.map((product) => (
              <li key={product.id}>
                <span className="inline-block">{product.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak Kami */}
        <div className="col-start-3 row-start-2 min-w-[140px]" data-aos="fade-up">
          <h2 className="text-sm md:text-lg font-semibold mb-4 uppercase tracking-wider">
            Contact US
          </h2>
          <ul className="space-y-3">
            {kontakPersonal.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <span>{ICONS[item.type] ?? null}</span>
                <a
                  href={
                    item.type.toLowerCase() === "email"
                      ? `mailto:${item.value}`
                      : item.type.toLowerCase() === "whatsapp"
                      ? `https://wa.me/${item.value.replace("+", "")}`
                      : `tel:${item.value}`
                  }
                  className="transition-transform duration-200 hover:scale-105 inline-block"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="col-start-3 row-start-1 min-w-[140px]" data-aos="fade-up">
          <h2 className="text-sm md:text-lg font-semibold mb-4 uppercase tracking-wider">
            Sosial
          </h2>
          <ul className="space-y-3">
            {socialMedia.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <span>{ICONS[item.type] ?? null}</span>
                <Link
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-105 inline-block"
                >
                  {item.type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-dark mt-12 pt-4 text-center text-xs md:text-sm text-primary-dark">
        COPYRIGHT &copy; {new Date().getFullYear()} KRATOM. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
