"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package, Truck, Clock, MapPin, Instagram, ArrowRight } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const LogisticsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const services = [
    { icon: <Clock size={28} />, title: "Same-Day Delivery", desc: "Speed that keeps your business moving in real-time." },
    { icon: <MapPin size={28} />, title: "Nationwide Reach", desc: "Reliable movement across all 36 states with safety focus." },
    { icon: <Package size={28} />, title: "Secure Handling", desc: "Your items are treated with the utmost professional care." },
    { icon: <Truck size={28} />, title: "E-Commerce", desc: "The logistics backbone for modern online entrepreneurs." },
  ];

  return (
    <section ref={containerRef} id="logistics" className="section-padding bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950 opacity-10" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 section-gap items-center">
          
          {/* Content side */}
          <motion.div
            style={{ opacity }}
            className="flex flex-col gap-12 text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
          >
            <div className="flex flex-col gap-6">
              <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs">
                Logistics Excellence
              </span>
              <h2 className="text-fluid-h2 leading-tight">
                Swift, Secure & <span className="text-brand-orange">Doorstep</span> Delivery
              </h2>
              <p className="text-slate-400 text-xl max-w-xl leading-relaxed">
                Need to move packages? We’ve got you covered. From small parcels to bulk deliveries, 
                we help you get your items to their destination quickly and safely.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-left">
              {services.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-4 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="text-brand-orange group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h3 className="font-black text-xl tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <MagneticEffect strength={0.3}>
              <a
                href="https://instagram.com/swifteeautos_logistics"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="group relative flex items-center justify-center gap-3 bg-brand-orange text-white px-12 py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-brand-orange/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-brand-orange transition-colors">
                  <Instagram size={24} /> Book a Delivery <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
            </MagneticEffect>
          </motion.div>

          {/* Image side */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              style={{ scale }}
              className="relative aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(245,130,32,0.15)]"
            >
              <Image
                src="/fleet.png"
                alt="Logistics Fleet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-10 right-10 bg-brand-orange/90 backdrop-blur-xl text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl border border-white/20">
                Nationwide
              </div>
            </motion.div>
            
            {/* Decorative Vector */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-brand-orange/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;


