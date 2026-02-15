"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Car, Phone, ShieldCheck, ArrowRight, Star } from "lucide-react";
import MagneticEffect from "./MagneticEffect";
import autoPicture from '../assets/lexus-2.png'

const AutosSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      title: "Foreign Used (Tokunbo)",
      desc: "Direct import, clean titles, and verified history.",
      icon: <Car className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: "Nigerian Used",
      desc: "Pre-inspected premium local vehicles at great value.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: "Pre-Order Sourcing",
      desc: "Tell us your dream car, we find and deliver it.",
      icon: <Star className="w-6 h-6" />,
      delay: 0.3
    }
  ];

  return (
    <section ref={containerRef} id="autos" className="section-padding relative bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-slate-900/50 -skew-x-12 translate-x-32 hidden lg:block" />
      
      <div className="section-container relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 items-end">
          <div className="lg:col-span-7">
            {/* <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold uppercase tracking-wider text-xs mb-6"
            >
              Premium Inventory
            </motion.span> */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fluid-h2 text-slate-900 dark:text-white leading-tight"
            >
              Drive Your Dream. <br/>
              <span className="text-brand-blue relative inline-block">
                Verified Peace of Mind.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              At Swiftee Autos, we don't just sell cars; we deliver confidence. 
              Every vehicle in our inventory passes a rigorous 150-point inspection 
              so you can drive away knowing you made the right choice.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Feature Image - Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[400px]"
          >
            <Image
              src={autoPicture}
              alt="Premium Car Showroom"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-brand-orange text-white p-3 rounded-2xl shadow-lg shadow-brand-orange/20">
                  <ShieldCheck size={28} />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Swiftee Certified</span>
              </div>
              <p className="text-slate-200 text-base md:text-lg font-medium max-w-lg">
                "No stories. Just clean cars." - Our promise to you for every single vehicle.
              </p>
            </div>
          </motion.div>

          {/* Feature List Column */}
          <div className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 group cursor-default flex-1 flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner - Bottom Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-brand-blue rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            {/* Abstract Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -right-20 -top-40 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay" />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to find your perfect ride?</h3>
              <p className="text-blue-100 font-medium">Get in touch with our expert dealers today.</p>
            </div>

            <MagneticEffect strength={0.3}>
              <a 
                href="tel:+2349039634446"
                className="relative z-10 bg-white text-brand-blue px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-3 hover:bg-brand-orange hover:text-white transition-all duration-300 group/btn"
              >
                <Phone size={20} />
                <span>Speak to a Dealer</span>
                <ArrowRight size={20} className="-ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </a>
            </MagneticEffect>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AutosSection;
