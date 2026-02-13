"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, UserCheck, Headset, Star, Search, CreditCard } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const TrustSection = () => {
  const trustItems = [
    { icon: <Search className="text-brand-blue" />, title: "Transparent Pricing" },
    { icon: <Zap className="text-brand-orange" />, title: "Swift Delivery" },
    { icon: <ShieldCheck className="text-brand-blue" />, title: "Verified Vehicles" },
    { icon: <Headset className="text-brand-orange" />, title: "24/7 Support" },
    { icon: <Star className="text-brand-blue" />, title: "Zero Hassle" },
    { icon: <UserCheck className="text-brand-orange" />, title: "Expert Riders" },
    { icon: <CreditCard className="text-brand-blue" />, title: "Safe Payments" },
  ];

  return (
    <section className="section-padding bg-brand-blue text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-[150px] mix-blend-overlay" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange rounded-full blur-[120px] mix-blend-color-dodge" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            Our Core Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 mb-8 leading-tight selection:bg-white selection:text-brand-blue"
          >
            Built on <span className="text-brand-orange font-playfair italic font-normal">Transparency</span> & Reliability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-100/80 text-xl max-w-2xl leading-relaxed"
          >
            We don’t just provide services — we build lasting relationships through excellence.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {trustItems.map((item, idx) => (
            <MagneticEffect key={idx} strength={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
                data-cursor="pointer"
                className="group flex items-center gap-5 bg-white/10 border border-white/20 px-8 py-5 rounded-[2rem] hover:bg-white hover:text-brand-blue transition-all duration-500 backdrop-blur-2xl shadow-2xl"
              >
                <div className="p-3 bg-white rounded-2xl shadow-inner text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="font-black text-lg tracking-tight whitespace-nowrap">{item.title}</span>
              </motion.div>
            </MagneticEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;


