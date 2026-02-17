"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Instagram } from "lucide-react";
import MagneticEffect from "./MagneticEffect";

// Import assets
import deliverySwiftee from "../assets/delivery-swiftee.png";
import deliverySwifteeCustomer from "../assets/delivery-swiftee-customer.png";
import lexusLandscape from "../assets/lexus-landscape.png";
import lexusLandscape2 from "../assets/lexus-2.png";
import lexusLandscape3 from "../assets/lexus-2-night.png";


const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Parallax for background
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.1]);

  const slides = [
    {
      id: 1,
      image: lexusLandscape3,
      position: "object-center",
      title: "Drive Your",
      highlight: "Dream",
      desc: "Premium foreign & Nigerian-used cars verified for your absolute peace of mind.",
      color: "text-brand-orange"
    },
    {
      id: 2,
      image: deliverySwiftee,
      position: "object-[center_25%]",
      isFlip: true,
      title: "Redefining",
      highlight: "Speed",
      desc: "Logistics that keeps pace with your business. Swift, secure, and always on time.",
      color: "text-brand-orange"
    },
    // {
    //   id: 3,
    //   image: deliverySwifteeCustomer,
    //   position: "object-[center_25%]",
    //   isFlip: true,
    //   title: "Trusted",
    //   highlight: "Everywhere",
    //   desc: "Join thousands of satisfied customers who trust us with their most valuable assets.",
    //   color: "text-white"
    // }
  ];

  const slideDuration = 6000;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, slideDuration);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    initial: (direction) => ({
      opacity: 0,
      scale: 1.1,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" },
        scale: { duration: 2.0, ease: "easeOut" }, // Subtle zoom
      },
    },
    exit: (direction) => ({
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  const textVariants = {
    initial: { y: 30, opacity: 0 }, // Reduced from 50
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.4 } }, // Reduced from -50
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950"
    >
      {/* 1. Cinematic Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[currentIndex].id}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentIndex].image}
              alt="Background"
              fill
              className={`object-cover ${slides[currentIndex].position} ${slides[currentIndex].isFlip ? "scale-x-[-1]" : ""}`}
              priority
            />
            {/* Cinematic Overlay - Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
          </motion.div>
        </AnimatePresence>
        
        {/* Mobile Specific Overlays - Persistent to avoid flashing */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent md:hidden opacity-80 pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden opacity-80 pointer-events-none z-[1]" />
      </div>

      {/* 2. Content Stack */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center section-container pointer-events-none pb-32 md:pb-0">
        <div className="max-w-4xl pt-20 pointer-events-auto flex flex-col items-center text-center md:items-start md:text-left">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="overflow-hidden">
               {/* Label */}
              <motion.div 
                 variants={textVariants}
                 initial="initial" animate="animate" exit="exit"
                 transition={{ delay: 0.1 }}
                 className="inline-flex items-center gap-2 mb-6"
              >
                  <div className={`hidden md:block h-[2px] w-12 ${slides[currentIndex].id === 1 ? "bg-brand-orange" : "bg-brand-orange"}`} />
                  <span className="text-white/80 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
                    {slides[currentIndex].id === 2 ? "Logistics Partner" : "Premium Autos"}
                  </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={textVariants}
                initial="initial" animate="animate" exit="exit"
                transition={{ delay: 0.2 }}
                className="text-fluid-h1 text-white mb-6 leading-[0.9] tracking-tighter"
              >
                {slides[currentIndex].title} <br/>
                <span className={`${slides[currentIndex].color}`}>
                  {slides[currentIndex].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={textVariants}
                initial="initial" animate="animate" exit="exit"
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-slate-200 mb-10 px-10 md:px-0 md:max-w-sm leading-relaxed font-light"
              >
                {slides[currentIndex].desc}
              </motion.p>

              {/* Actions */}
              <motion.div 
                variants={textVariants}
                initial="initial" animate="animate" exit="exit"
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
              >
                <MagneticEffect strength={0.4}>
                  <a href="tel:+2348148811470" className="group relative px-5 py-3 md:px-6 md:py-3 bg-brand-blue text-white rounded-full font-semibold text-base md:text-lg overflow-hidden flex items-center justify-center gap-2 md:gap-3 w-[200px] md:w-auto">
                    <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">Call Now <ArrowRight size={18} className="md:w-5 md:h-5" /></span>
                  </a>
                </MagneticEffect>
                
                <MagneticEffect strength={0.4}>
                  <a href="https://instagram.com/swifteeautos_logistics" target="_blank" rel="noopener noreferrer" className="group px-5 py-3 md:px-6 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-white hover:text-brand-blue transition-all w-[200px] md:w-auto">
                    Instagram <Instagram size={20} className="group-hover:rotate-12 transition-transform md:w-6 md:h-6" />
                  </a>
                </MagneticEffect>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Navigation Controls */}
      <div className="absolute bottom-6 w-full md:w-auto left-0 md:left-auto md:right-0 p-6 md:p-12 z-20 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 pointer-events-none">
        
        {/* Progress Indicators */}
        <div className="flex gap-3 pointer-events-auto">
          {slides.map((_, idx) => (
             <button 
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-12 bg-brand-orange" : "w-6 bg-white/30 hover:bg-white/60"}`}
             />
          ))}
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all text-white backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
             onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
             className="p-2 md:p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all text-white backdrop-blur-sm"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;