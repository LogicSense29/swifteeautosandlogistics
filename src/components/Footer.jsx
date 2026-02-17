"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Instagram, ArrowUpRight, ArrowRight } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Explore", links: [
      { name: "Luxury Fleet", href: "#autos" },
      { name: "Global Logistics", href: "#logistics" },
      { name: "About Swiftee", href: "#about" },
      { name: "Reviews", href: "#reviews" },
    ]},
    { title: "Connect", links: [
      { name: "Instagram", href: "https://instagram.com/swifteeautos_logistics", external: true },
      { name: "WhatsApp", href: "https://wa.me/2348148811470", external: true },
      { name: "Email Us", href: "mailto:info@swifteeautos.com", external: true },
    ]}
  ];

  return (
    <footer id="contact" className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* 1. Integrated CTA Section */}
        <div className="py-20 md:py-32 border-b border-white/5 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            {/* <span className="block text-brand-orange font-bold tracking-widest uppercase text-xs mb-4">
              Next Steps
            </span> */}
            <h2 className="text-5xl md:text-8xl font-black leading-[0.9]">
              Ready to <br/>
              <span className="text-slate-500">upgrade?</span>
            </h2>
          </div>

          <MagneticEffect strength={0.3}>
            <a 
              href="https://wa.me/2349039634446"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-6 bg-white text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-brand-orange hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Conversation
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
          </MagneticEffect>
        </div>

        {/* 2. Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 md:py-28">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <Link href="/" className="block relative w-40 h-16 opacity-100 hover:opacity-80 transition-opacity mb-8">
                 <Image
                  src="/logo.png"
                  alt="Swiftee Autos"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                Redefining automotive luxury and logistics with absolute <span className="text-white font-medium">transparency</span> and speed.
              </p>
            </div>
            
            <div className="hidden lg:block pt-12">
               <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">
                 Based in Nigeria • Delivering Worldwide
               </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        className="text-lg md:text-xl text-slate-300 hover:text-white transition-colors hover:pl-2 duration-300 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Legal / Policy */}
             <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
                  Legal
                </h4>
                <ul className="flex flex-col gap-4">
                  <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar Mobile */}
        <div className="lg:hidden pb-12 border-t border-white/5 pt-8">
           <p className="text-xs text-slate-600 font-bold uppercase tracking-widest text-center">
             © {currentYear} Swiftee Autos. All rights reserved.
           </p>
        </div>

      </div>

      {/* 3. Massive Signature Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none">
        <h1 className="text-[15vw] lg:text-[18vw] font-black text-white/[0.02] text-center tracking-tighter translate-y-[20%]">
          SWIFTEE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;


