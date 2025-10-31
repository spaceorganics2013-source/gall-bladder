"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0D5C40] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand Info */}
          <div className="space-y-4">
            <Image
              src="/image/logo.png"
              alt="Space Organics Logo"
              width={140}
              height={50}
              className="object-contain brightness-200"
            />

            <p className="text-sm text-gray-200 leading-relaxed font-medium">
              Ayurvedic science blended with modern wellness — For digestive harmony
              and gallbladder care you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-l-4 border-[#32D98A] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-[#32D98A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#kit-details" className="hover:text-[#32D98A] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#32D98A] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-[#32D98A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info + Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-l-4 border-[#32D98A] pl-3">
              Contact Us
            </h3>

            <div className="space-y-2 text-sm text-gray-200 font-medium mb-5">
              <p>📧 spaceorganics@yahoo.in</p>
              <p>📞 +91 98914 82214</p>
            </div>

            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#32D98A] rounded-full w-10 h-10 flex items-center justify-center transition">
                <Image src="/social/instagram.svg" alt="Instagram" width={22} height={22} />
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#32D98A] rounded-full w-10 h-10 flex items-center justify-center transition">
                <Image src="/social/facebook.svg" alt="Facebook" width={22} height={22} />
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#32D98A] rounded-full w-10 h-10 flex items-center justify-center transition">
                <Image src="/social/youtube.svg" alt="YouTube" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500/40 pt-4 text-center">
          <p className="text-xs sm:text-sm text-gray-300 font-semibold tracking-wide">
            © 2025 Space Organics — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
