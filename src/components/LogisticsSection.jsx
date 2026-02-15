"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package, Truck, Clock, MapPin, Instagram, ArrowRight, ShieldCheck, Box } from "lucide-react";
import MagneticEffect from "./MagneticEffect";
import deliveryPicture from '../assets/delivery-bus.png'

const LogisticsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      title: "Same-Day Delivery",
      desc: "Speed that keeps your business moving in real-time.",
      icon: <Clock className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: "Nationwide Reach",
      desc: "Reliable movement across all 36 states with safety focus.",
      icon: <MapPin className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: "Secure Handling",
      desc: "Your items are treated with the utmost professional care.",
      icon: <ShieldCheck className="w-6 h-6" />,
      delay: 0.3
    }
  ];

  return (
    <section ref={containerRef} id="logistics" className="section-padding relative bg-white dark:bg-slate-900 overflow-hidden">
       {/* Background Decor - Mirrored from AutosSection */}
       <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 dark:bg-slate-800/20 skew-x-12 -translate-x-32 hidden lg:block" />

      <div className="section-container relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 items-end">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fluid-h2 text-slate-900 dark:text-white leading-tight"
            >
              Move It <span className="text-brand-orange">Fast</span>. <br/>
              Move It <span className="text-brand-blue relative inline-block">
                Safe.
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
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
              Whether it's a single document or a fleet of trucks, we handle your logistics with military precision. 
              Real-time updates, insured handling, and nationwide reach.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid Layout - Matches AutosSection Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">
          
           {/* Feature List Column - Left Side (Mirrored or Same? Let's keep consistent flow: List on Right? No, user said SAME layout. Autos has Image Left, List Right. Let's start with Image Left) */}
           {/* Wait, AutosSection had Image (col-span-2) and List (col-span-1). Let's use THAT exact grid. */}

          {/* Main Feature Image - Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[400px]"
          >
            <Image
              src={deliveryPicture}
              alt="Logistics Fleet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-brand-blue text-white p-3 rounded-2xl shadow-lg shadow-brand-blue/20">
                  <Truck size={28} />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Express Fleet</span>
              </div>
              <p className="text-slate-200 text-base md:text-lg font-medium max-w-lg">
                "Speed meets Safety." - Our commitment to getting your goods there on time, every time.
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
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group cursor-default flex-1 flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner - Bottom Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-brand-orange rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            {/* Abstract Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -left-20 -bottom-40 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay" />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Package ready to go?</h3>
              <p className="text-orange-50 font-medium">Book a pickup instantly via Instagram or Call.</p>
            </div>

            <MagneticEffect strength={0.3}>
              <a 
                href="https://instagram.com/swifteeautos_logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all duration-300 group/btn"
              >
                <Instagram size={20} />
                <span>Book Delivery</span>
                <ArrowRight size={20} className="-ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </a>
            </MagneticEffect>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LogisticsSection;
