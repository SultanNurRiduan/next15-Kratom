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
    <footer className="bg-accent text-primary-dark px-6 md:px-16 py-10 md:py-14 border-t border-primary-dark">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-sm md:text-base">
        {/* Logo */}
        <div
          className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start"
          data-aos="zoom-in"
        >
          <div className="w-28 md:w-36 mb-4 md:mb-6 transition-transform hover:scale-105 duration-200">
            <LogoFooter />
          </div>
          <p className="text-center md:text-left text-xs text-primary-dark/70 leading-relaxed">
            Discover high-quality kratom products directly from Borneo.
            Safe, natural, and trusted.
          </p>
        </div>

        {/* Navigasi */}
        <div data-aos="fade-up">
          <h2 className="text-base font-semibold mb-4 uppercase tracking-wide">
            Navigasi
          </h2>
          <ul className="space-y-2">
            {NAVBAR.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Produk */}
        <div data-aos="fade-up">
          <h2 className="text-base font-semibold mb-4 uppercase tracking-wide">
            Product
          </h2>
          <ul className="space-y-2">
            {CART_DATA.map((product) => (
              <li key={product.id}>
                <span className="inline-block transition-transform duration-200 hover:scale-105">
                  {product.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak & Sosial Media digabung */}
        <div data-aos="fade-up" className="col-span-2 md:col-span-1">
          <h2 className="text-base font-semibold mb-4 uppercase tracking-wide">
            Contact
          </h2>

          {/* Kontak */}
          <ul className="space-y-3 mb-6">
            {kontakPersonal.map((item, i) => (
              <li key={i} className="flex items-center gap-3 justify-start">
                <span className="text-lg">{ICONS[item.type] ?? null}</span>
                <a
                  href={
                    item.type.toLowerCase() === "email"
                      ? `mailto:${item.value}`
                      : item.type.toLowerCase() === "whatsapp"
                      ? `https://wa.me/${item.value.replace("+", "")}`
                      : `tel:${item.value}`
                  }
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>

          {/* Sosial Media */}
          <ul className="space-y-3">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                >
                  <span className="text-lg">{ICONS[item.type] ?? null}</span>
                  <span>{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-primary-dark mt-12 pt-4 text-center text-xs md:text-sm text-primary-dark">
        COPYRIGHT &copy; {new Date().getFullYear()} KRATOM. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
