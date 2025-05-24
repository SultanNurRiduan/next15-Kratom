"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaPhone, FaEnvelope, FaYoutube, FaTiktok, FaWhatsapp, FaTimes } from "react-icons/fa"; // tambah FaTimes
import NAVBAR from "@/constants/navbar";
import KONTAK_ITEMS from "@/constants/kontak";

const ICONS = {
  Whatsapp: <FaWhatsapp />,
  Phone: <FaPhone />,
  Email: <FaEnvelope />,
  Youtube: <FaYoutube />,
  Tiktok: <FaTiktok />,
};

const MobileMenu = ({ isOpen, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const mainItems = NAVBAR.filter(
    (item) =>
      item.name === "Beranda" ||
      item.name === "Tentang Kami" ||
      item.name === "Kontak"
  );
  const dropdownItems = NAVBAR.filter((item) => !mainItems.includes(item));

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-primary to-primary/90 text-white shadow-lg z-50 transform transition-transform duration-300 md:hidden rounded-l-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 relative">
          {/* Tombol Close X */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-4 right-6 text-white hover:text-primary-dark transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Main navigation */}
          <div className="flex flex-col space-y-4">
            {mainItems.map((item, i) => (
              <Link
                href={item.path}
                key={i}
                onClick={onClose}
                className="uppercase text-sm tracking-wid transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dropdown navigation */}
          <div className="p-2 rounded-lg border-t border-white/30 pt-4 bg-black/50 backdrop-blur-md">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between text-sm uppercase w-full text-left transition-colors duration-200"
            >
              Navigation
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
                size={12}
              />
            </button>
            {showDropdown && (
              <div className="ml-2 mt-3 pl-2 border-l border-white/20 flex flex-col space-y-3">
                {dropdownItems.map((item, i) => (
                  <Link
                    href={item.path}
                    key={i}
                    onClick={onClose}
                    className="relative group uppercase text-xs tracking-wide font-semibold text-white transition-colors duration-300 hover:text-primary-dark"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Social Media Dropdown */}
          <div className="p-2 rounded-lg border-t border-white/30 pt-4 bg-black/50 backdrop-blur-md">
            <button
              onClick={() => setShowSocial(!showSocial)}
              className="flex items-center justify-between text-sm uppercase w-full text-left transition-colors duration-200"
            >
              Sosial Media
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  showSocial ? "rotate-180" : "rotate-0"
                }`}
                size={12}
              />
            </button>
            {showSocial && (
              <div className="ml-2 mt-3 pl-2 border-l border-white/20 flex flex-col space-y-3">
                {KONTAK_ITEMS.map((item, i) => {
                  let href = item.value;
                  if (item.type === "Whatsapp") {
                    const phone = item.value.replace(/\D/g, "");
                    href = `https://wa.me/${phone}`;
                  } else if (item.type === "Email") {
                    href = `mailto:${item.value}`;
                  }
                  return (
                    <a
                      href={href}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="flex items-center gap-2 uppercase text-xs tracking-wide font-semibold text-white transition-colors duration-300 hover:text-primary-dark"
                    >
                      <span className="text-base">{ICONS[item.type] ?? null}</span>
                      <span>{item.type}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
