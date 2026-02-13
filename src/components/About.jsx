"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const About = () => {
  const features = [
    {
      number: "01",
      title: "Radical Transparency",
      desc: "Every deal is documented and verified. In our showroom, what you see is exactly what you get.",
    },
    {
      number: "02",
      title: "Swift Execution",
      desc: "We value your time. From car sourcing to package delivery, our systems are optimized for speed.",
    },
    {
      number: "03",
      title: "Unwavering Trust",
      desc: "We build long-lasting relationships. Our business grows through integrity and customer loyalty.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950/40 relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200 dark:bg-white/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-slate-200 dark:bg-white/5 hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24 flex flex-col items-center">
          {/* <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-black uppercase tracking-[0.5em] text-xs mb-8"
          >
            Our Philosophy
          </motion.span> */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl mb-6 md:mb-10 leading-tight font-black"
          >
            Redefining <span className="text-brand-blue font-playfair italic font-normal tracking-tight">Luxury</span> & Efficiency in Nigeria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium"
          >
            Swiftee Autos & Logistics is a reputable brand dedicated to providing premium car-buying experiences 
            and ultra-secure logistics. We don't just move cars and packages; we move people's 
            dreams forward with <span className="text-foreground font-black">absolute reliability</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <MagneticEffect key={idx} strength={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                style={{ 
                  y: idx === 1 ? 40 : 0 // Stagger middle card
                }}
                data-cursor="pointer"
                className="relative bg-white dark:bg-white/[0.03] p-10 rounded-[3.5rem] shadow-3xl shadow-black/5 border border-slate-100 dark:border-white/10 overflow-hidden group transition-all duration-700"
              >
                {/* Reveal Background Shape */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full group-hover:scale-[3] transition-transform duration-1000 ease-out" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-last justify-between mb-8">
                    <span className="text-5xl font-black text-slate-100 dark:text-white/5 group-hover:text-brand-orange/20 transition-colors duration-700 leading-none">
                      {feature.number}
                    </span>
                    <div className="w-12 h-1 bg-brand-blue/20 rounded-full mt-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-brand-blue transition-colors duration-500">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-medium group-hover:text-foreground transition-colors duration-500">
                    {feature.desc}
                  </p>
                  
                  <div className="mt-12 w-full h-px bg-slate-100 dark:bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </motion.div>
            </MagneticEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


