"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Car, Phone } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const AutosSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  const services = [
    "Foreign (Tokunbo) cars",
    "Nigerian-used cars",
    "Car sourcing on request",
    "Verified vehicle inspection",
    "Car documentation support",
    "Direct dealer pricing",
  ];

  return (
    <section ref={containerRef} id="autos" className="section-padding overflow-hidden bg-white dark:bg-slate-950">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 section-gap items-center">
          {/* Image side */}
          <motion.div
            style={{ scale, rotate }}
            className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] order-1"
          >
            <Image
              src="/showroom.png"
              alt="Car Showroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent" />
            
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hidden md:block max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-blue rounded-2xl text-white">
                  <Car size={24} />
                </div>
                <span className="font-black text-xl tracking-tight">Vetted Quality</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                Every vehicle undergoes a 150-point inspection before it reaches our showroom.
              </p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div className="flex flex-col gap-10 text-center lg:text-left items-center lg:items-start order-2">
            <div className="flex flex-col gap-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs"
              >
                Premium Inventory
              </motion.span>
              <h2 className="text-fluid-h2">
                Buy Your Next Car With <span className="text-brand-blue">Absolute Peace</span> of Mind
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                At Swiftee Autos, we specialize in helping you find the perfect vehicle that fits your budget 
                and lifestyle without the usual stress of car buying.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 w-full text-left">
              {services.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-lg text-slate-700 dark:text-slate-200">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-center w-full">
              <MagneticEffect strength={0.3}>
                <a
                  href="tel:+2349039634446"
                  data-cursor="pointer"
                  className="group relative flex items-center justify-center gap-3 bg-brand-blue text-white px-12 py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-brand-blue/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone size={22} /> Speak to a Dealer
                  </span>
                </a>
              </MagneticEffect>
              <p className="text-brand-blue font-playfair italic text-2xl font-black">
                "No stories. Just clean cars."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutosSection;


