"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Instagram, Mail, Clock, MapPin, ChevronRight, Globe } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Swiftee", href: "#about" },
    { name: "Luxury Fleet", href: "#autos" },
    { name: "Global Logistics", href: "#logistics" },
    { name: "Customer Stories", href: "#reviews" },
  ];

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-32 pb-16 overflow-hidden relative border-t border-white/5 selection:bg-brand-orange selection:text-white">
      {/* Background Depth */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-24 mb-24">
          {/* Brand Col */}
          <div className="flex flex-col gap-10 text-center md:text-left items-center md:items-start">
            <MagneticEffect strength={0.2}>
              <Link href="/" className="relative h-12 w-32 block" data-cursor="pointer">
                <Image
                  src="/logo.png"
                  alt="Swiftee Autos & Logistics"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </Link>
            </MagneticEffect>
            <p className="text-lg leading-relaxed text-slate-400 font-medium italic">
              "Reliability is not a promise — it's our culture."
            </p>
            <div className="flex gap-6">
              <MagneticEffect strength={0.4}>
                <a
                  href="https://instagram.com/swifteeautos_logistics"
                  target="_blank"
                  data-cursor="pointer"
                  className="flex items-center justify-center bg-white/5 p-5 rounded-3xl hover:bg-brand-orange hover:text-white transition-all border border-white/10 shadow-2xl"
                >
                  <Instagram size={24} />
                </a>
              </MagneticEffect>
              <MagneticEffect strength={0.4}>
                <a
                  href="tel:+2349039634446"
                  data-cursor="pointer"
                  className="flex items-center justify-center bg-white/5 p-5 rounded-3xl hover:bg-brand-blue hover:text-white transition-all border border-white/10 shadow-2xl"
                >
                  <Phone size={24} />
                </a>
              </MagneticEffect>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-12">Experience</h4>
            <ul className="flex flex-col gap-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <MagneticEffect strength={0.1}>
                    <Link
                      href={link.href}
                      data-cursor="pointer"
                      className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors group text-lg font-bold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange scale-0 group-hover:scale-100 transition-transform" />
                      {link.name}
                    </Link>
                  </MagneticEffect>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-12">Direct Reach</h4>
            <ul className="flex flex-col gap-10">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="bg-brand-orange/10 p-4 rounded-2xl border border-brand-orange/20">
                  <Phone className="text-brand-orange" size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Global Hotline</span>
                  <a href="tel:+2349039634446" className="text-xl hover:text-brand-orange transition-colors font-black tracking-tight" data-cursor="pointer">
                    +234 903 963 4446
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="bg-brand-blue/10 p-4 rounded-2xl border border-brand-blue/20">
                  <Instagram className="text-brand-blue" size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Connect Digitally</span>
                  <a href="https://instagram.com/swifteeautos_logistics" target="_blank" className="text-xl hover:text-brand-blue transition-colors font-black tracking-tight" data-cursor="pointer">
                    @swifteeautos_logistics
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-12">Operations</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex items-center justify-center md:justify-start gap-5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-lg font-bold">Mon – Sat: 8 AM – 7 PM</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-5 opacity-60">
                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                <span className="text-lg font-bold">Sunday: On Request</span>
              </li>
            </ul>
            <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-3xl text-center">
              <Globe className="mx-auto text-brand-blue mb-4" size={32} />
              <p className="text-sm font-black uppercase tracking-widest text-white">Nationwide Logistics</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-slate-600">
          <p className="">© {currentYear} Swiftee Autos Ltd. Full Performance Architecture.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors" data-cursor="pointer">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors" data-cursor="pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


