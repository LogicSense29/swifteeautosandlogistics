"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticEffect from "./MagneticEffect";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Autos", href: "#autos" },
    { name: "Logistics", href: "#logistics" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1]",
        isScrolled ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]" : "bg-transparent py-4 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <MagneticEffect strength={0.2}>
          <Link href="/" className="relative flex items-center py-2" data-cursor="pointer">
            <div className="relative h-10 w-24 md:h-12">
              <Image
                src="/logo.png"
                alt="Swiftee Autos & Logistics"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </MagneticEffect>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <MagneticEffect key={link.name} strength={0.3}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-[0em] hover:text-brand-orange transition-colors"
                  data-cursor="pointer"
                >
                  {link.name}
                </Link>
              </MagneticEffect>
            ))}
          </div>
          
          <div className={`flex items-center gap-4 ml-6 border-l pl-10 transition-colors duration-500 ${isScrolled ? "border-slate-200 dark:border-white/10" : "border-white/20"}`}>
            <MagneticEffect strength={0.5}>
              <a
                href="tel:+2349039634446"
                data-cursor="pointer"
                className={cn(
                  "flex items-center justify-center p-3 rounded-2xl transition-all duration-500",
                  isScrolled 
                    ? "bg-brand-blue text-white hover:bg-brand-orange shadow-xl shadow-brand-blue/20" 
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-blue"
                )}
              >
                <Phone size={18} />
              </a>
            </MagneticEffect>
            <MagneticEffect strength={0.5}>
              <a
                href="https://instagram.com/swifteeautos_logistics"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className={cn(
                  "flex items-center justify-center p-3 rounded-2xl transition-all duration-500",
                  isScrolled 
                    ? "bg-brand-orange text-white hover:bg-brand-blue shadow-xl shadow-brand-orange/20" 
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-orange"
                )}
              >
                <Instagram size={18} />
              </a>
            </MagneticEffect>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-all duration-500 active:scale-90",
            isScrolled 
              ? "text-foreground hover:bg-slate-100 dark:hover:bg-slate-800" 
              : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className="fixed inset-0 w-full h-screen bg-white dark:bg-slate-950 z-[100] flex flex-col md:hidden"
          >
            {/* Menu Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-8">
              <div className="relative h-10 w-24">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain dark:invert"
                  priority
                />
              </div>
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-fluid-h2 uppercase tracking-tighter hover:text-brand-orange transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer CTAs */}
            <div className="p-10 flex flex-col gap-4">
              <a 
                href="tel:+2349039634446" 
                className="w-full bg-brand-blue text-white py-6 rounded-[2rem] font-black text-center text-xl shadow-2xl"
              >
                Call Support
              </a>
              <a 
                href="https://instagram.com/swifteeautos_logistics" 
                target="_blank"
                className="w-full bg-slate-100 dark:bg-white/5 text-foreground py-6 rounded-[2rem] font-black text-center text-xl"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


