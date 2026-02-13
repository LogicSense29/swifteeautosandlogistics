"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const ServiceAreas = () => {
  const hubs = [
    { name: "Lagos", x: "15%", y: "75%", info: "Operations Hub & Ports", delay: 0.1 },
    { name: "Abuja", x: "50%", y: "45%", info: "Administrative Centre", delay: 0.3 },
    { name: "Ogun", x: "12%", y: "70%", info: "Manufacturing & Transit", delay: 0.2 },
    { name: "Oyo", x: "18%", y: "62%", info: "Logistics Corridor", delay: 0.4 },
    { name: "Osun", x: "25%", y: "65%", info: "Regional Distribution", delay: 0.5 },
  ];

  const particles = Array.from({ length: 20 });

  return (
    <section className="section-padding bg-white dark:bg-slate-950 overflow-hidden relative">
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue text-xs font-black uppercase tracking-[0.3em] mb-12 border border-brand-blue/10"
          >
            <Globe size={20} className="animate-spin-slow" />
            Strategic Presence
          </motion.div> */}

          <h2 className="text-fluid-h2 mb-6 max-w-4xl leading-tight">
            Where We <span className="text-brand-orange font-playfair italic font-normal">Connect</span> With You
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Our multi-hub network ensures that no matter where you are, 
            premium service is just a heartbeat away.
          </p>
        </div>

        <div className="relative aspect-[16/10] md:aspect-[21/9] w-full max-w-6xl mx-auto bg-slate-50 dark:bg-white/[0.03] rounded-[4rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-3xl group/map">
          
          {/* 1. Atmospheric Detail - Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -40, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5 + Math.random() * 5, 
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-brand-blue rounded-full"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }}
              />
            ))}
          </div>

          {/* 2. Stylized Map Background (Detailed) */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none p-12 lg:p-24 flex items-center justify-center">
             <svg viewBox="0 0 800 600" className="w-full h-full fill-slate-300 dark:fill-brand-blue/20 transition-all duration-700 group-hover/map:fill-slate-400 group-hover/map:dark:fill-brand-blue/40">
                {/* Nigeria Outer Boundary - Slightly more detailed but still clean */}
                <path d="M123.5,348.5c-43.2-12.4-78.5-56-78.5-121.5c0-65.5,35.3-109.1,78.5-121.5s78.5,56,78.5,121.5C202,292.5,166.7,336.1,123.5,348.5z" className="opacity-0" /> {/* Hidden scaffold */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "circOut" }}
                  d="M150,480 L140,500 L200,550 L350,580 L600,550 L750,500 L780,250 L700,50 L400,20 L150,100 L100,250 L150,480" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  className="text-brand-blue/30 dark:text-brand-blue/50"
                  strokeDasharray="10 5"
                />
                {/* Abstract Data Shapes */}
                <circle cx="400" cy="300" r="150" className="fill-brand-blue/5" />
                <path d="M100,500 L700,100" stroke="currentColor" strokeWidth="0.5" className="text-brand-blue/10" />
             </svg>
          </div>

          {/* 3. Regional Indicators */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <span className="absolute top-[15%] left-1/2 -translate-x-1/2 text-[10vw] font-black text-slate-100 dark:text-white/5 uppercase tracking-[0.5em] leading-none">North</span>
            <span className="absolute bottom-[20%] left-[10%] text-[8vw] font-black text-slate-100 dark:text-white/5 uppercase tracking-[0.3em] rotate-[-90deg] origin-left translate-y-full">West</span>
          </div>

          {/* 4. Interactive Hub Pulse Nodes */}
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: hub.delay + 0.5, type: "spring", stiffness: 100 }}
              style={{ left: hub.x, top: hub.y }}
              className="absolute z-20 group"
            >
              <MagneticEffect strength={0.4}>
                <div className="relative group-hover:z-50" data-cursor="pointer">
                  {/* Pulse Effect Layers */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-orange/20 rounded-full animate-ripple opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-orange/30 rounded-full animate-ripple" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Core Point */}
                  <div className="relative w-5 h-5 bg-brand-orange rounded-full shadow-[0_0_30px_rgba(245,130,32,0.8)] z-10 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Label & Cinematic Tooltip */}
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none z-30">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-[2rem] shadow-3xl translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[0.16,1,0.3,1] backdrop-blur-xl">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-2 h-10 bg-brand-orange rounded-full" />
                        <div>
                          <p className="font-black text-2xl leading-none">{hub.name}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue dark:text-brand-blue/60 mt-1">Core Station</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground border-t border-slate-100 dark:border-white/5 pt-3">{hub.info}</p>
                    </div>
                  </div>
                </div>
              </MagneticEffect>
            </motion.div>
          ))}

          {/* 5. Connectivity Flow (Animated Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
             <motion.path 
               initial={{ pathLength: 0, opacity: 0 }}
               whileInView={{ pathLength: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
               d="M15,75 Q32,60 50,45" 
               stroke="url(#mapGradient)" 
               strokeWidth="0.2" 
               fill="none" 
               strokeDasharray="4 2"
             />
             <defs>
               <linearGradient id="mapGradient" x1="0" y1="0" x2="1" y2="1">
                 <stop offset="0%" stopColor="#2B5895" />
                 <stop offset="100%" stopColor="#F58220" />
               </linearGradient>
             </defs>
          </svg>
        </div>

        {/* 6. Nationwide Impact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-24 flex flex-col items-center"
        >
          <div className="group flex items-center gap-8 md:gap-12">
             <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-20" />
             <div className="text-center">
               <p className="font-black text-brand-blue dark:text-white text-5xl md:text-7xl uppercase tracking-[0.3em] leading-none mb-4 group-hover:tracking-[0.4em] transition-all duration-1000">
                 Nationwide
               </p>
               <div className="flex items-center justify-center gap-4">
                  <div className="h-1 w-1 bg-brand-orange rounded-full animate-ping" />
                  <p className="text-muted-foreground font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Precision Delivered Daily</p>
                  <div className="h-1 w-1 bg-brand-orange rounded-full animate-ping" />
               </div>
             </div>
             <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent via-brand-blue to-transparent opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;


