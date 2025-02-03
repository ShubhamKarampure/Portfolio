"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about-me", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#dsa", label: "DSA" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" }
  ];

  return (
    <div className="w-full h-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="flex flex-col w-full px-4 md:px-10">
        <div className="h-[65px] flex items-center justify-between">
          <a href="#about-me" className="flex items-center">
            <span className="font-bold ml-[10px] text-gray-300">
              Shubham Karampure
            </span>
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-5">
            {Socials.map((social) => (
              <a href={social.href} key={social.name}> 
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4 items-center text-gray-200">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-5 mt-4">
                {Socials.map((social) => (
                  <a href={social.href} key={social.name}> 
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;