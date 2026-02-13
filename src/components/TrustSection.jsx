"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Zap, UserCheck, Headset, Star, Search, CreditCard, Lock } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const TrustSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const trustItems = [
    { 
      id: "01",
      title: "Transparent Pricing", 
      desc: "No hidden fees. What you see is exactly what you pay.",
      colSpan: "md:col-span-1",
      delay: 0.1 
    },
    { 
      id: "02",
      title: "Verified Vehicles", 
      desc: "Every car passes a 150-point technical inspection.",
      colSpan: "md:col-span-2",
      delay: 0.2 
    },
    { 
      id: "03",
      title: "Swift Delivery", 
      desc: "From showroom to your driveway in record time.",
      colSpan: "md:col-span-1",
      delay: 0.3 
    },
    { 
      id: "04",
      title: "Secure Payments", 
      desc: "Bank-grade security for all your transactions.",
      colSpan: "md:col-span-1",
      delay: 0.4 
    },
    { 
      id: "05",
      title: "24/7 Support", 
      desc: "Our dedicated team is always just a call away.",
      colSpan: "md:col-span-1",
      delay: 0.5 
    },
     { 
      id: "06",
      title: "Expert Team", 
      desc: "Processed by professionals who know cars & logistics.",
      colSpan: "md:col-span-2",
      delay: 0.6 
    },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-slate-950 text-white overflow-hidden relative min-h-screen flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-sm"
          >
            Why Choose Swiftee
          </motion.span> */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-fluid-h2 font-medium tracking-tight mb-6"
          >
            Built on <span className="font-serif italic text-brand-blue">Transparency</span>, <br />
            Driven by <span className="text-brand-orange">Excellence</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            We've redefined the standards of car sales and logistics in Nigeria. 
            No cutting corners, just premium service delivery.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className={`group relative p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-brand-orange/30 transition-all duration-500 hover:-translate-y-1 ${item.colSpan}`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-brand-orange/20 transition-colors duration-500 select-none">
                  {item.id}
                </span>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
