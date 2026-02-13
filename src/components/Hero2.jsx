"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight, Play, Star, Phone, Instagram } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const words = "Premium Car Sales & Smart Logistics".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 pt-20 lg:pt-30"
    >
      {/* Background Decorative Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col mobile-items-center text-center lg:text-left"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8 w-fit mx-auto lg:mx-0"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground pl-2">
              Trusted by 1,000+ Customers
            </span>
          </motion.div>

          <h1 className="text-fluid-h1 mb-8">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
                <motion.span
                  variants={itemVariants}
                  className="inline-block"
                >
                  {word === "Sales" || word === "Logistics" ? (
                    <span className="text-brand-orange">{word}</span>
                  ) : word === "Smart" ? (
                    <span className="text-brand-blue font-playfair italic font-normal tracking-tight">{word}</span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed"
          >
       Buy your next car with confidence. Move your packages with speed.
At Swiftee Autos & Logistics, reliability is not a promise - <span className="text-foreground font-bold italic">it’s our culture.</span>.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mobile-justify-center items-center"
          >
            <MagneticEffect strength={0.4}>
              <a 
                href="#autos"
                data-cursor="pointer"
                className="group relative px-10 py-4 bg-brand-blue text-white rounded-[2rem] font-bold text-lg overflow-hidden shadow-2xl shadow-brand-blue/20 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  Call Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
            </MagneticEffect>

            <MagneticEffect strength={0.4}>
              <button 
                data-cursor="pointer"
                className="group px-10 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-[2rem] font-bold text-lg flex items-center gap-3 hover:border-brand-orange transition-colors"
              >
                {/* <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                </div> */}
                Instagram
                  <Instagram  className="" />
              </button>
            </MagneticEffect>
          </motion.div>
        </motion.div>

        {/* Visual Content - Overlapping Image Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
        >
          {/* Main Large Image */}
          <motion.div 
            style={{ y: y1 }}
            className="relative w-[90%] h-[90%] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] z-20"
          >
            <Image
              src="/hero_car.png"
              alt="Premium Car"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Floating Smaller Image */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-4 lg:-bottom-12 -right-4 lg:-right-12 w-1/2 h-1/2 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[8px] lg:border-[15px] border-white dark:border-slate-950 z-30"
          >
            <Image
              src="/hero_logistics.png"
              alt="Logistics Courier"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating Decorative Card */}
          {/* <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 hidden md:flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Star fill="currentColor" />
            </div>
            <div>
              <p className="font-black text-xl leading-none">4.9/5</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Average Review</p>
            </div>
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;


