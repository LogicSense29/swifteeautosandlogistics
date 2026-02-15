"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Instagram } from "lucide-react";

// Import assets
import deliverySwiftee from "../assets/delivery-swiftee.png";
import lexusLandscape from "../assets/lexus-landscape.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: lexusLandscape,
      position: "object-center",
      category: "Premium Inventory",
      title: "Drive Your",
      highlight: "Dream",
      desc: "Premium foreign & Nigerian-used cars verified for your absolute peace of mind.",
      primaryColor: "bg-brand-orange",
      textColor: "text-brand-orange"
    },
    {
      id: 2,
      image: deliverySwiftee,
      position: "object-[center_30%]",
      isFlip: true,
      category: "Global Logistics",
      title: "Redefining",
      highlight: "Speed",
      desc: "Logistics that keeps pace with your business. Swift, secure, and always on time.",
      primaryColor: "bg-brand-blue",
      textColor: "text-brand-blue"
    }
  ];

  const slideDuration = 7000;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, slideDuration);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // --- Cinematic Fade & Scale Transition ---
  const bgVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.8 } 
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.4 } 
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-950">
      
      {/* Background Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slides[currentIndex].id}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt="Hero Background"
            fill
            className={`object-cover ${slides[currentIndex].position} ${slides[currentIndex].isFlip ? "scale-x-[-1]" : ""}`}
            priority
          />
          {/* Refined Gradients for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex items-center section-container">
        <div className="w-full max-w-2xl px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-start text-left"
            >
              {/* Category Label */}
              <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                 <div className={`h-[2px] w-8 ${slides[currentIndex].primaryColor}`} />
                 <span className="text-sm md:text-base font-medium tracking-[0.2em] text-slate-300 uppercase">
                   {slides[currentIndex].category}
                 </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="text-fluid-h1 text-white font-bold leading-[0.95] tracking-tight mb-6">
                {slides[currentIndex].title} <br />
                <span className={slides[currentIndex].textColor}>
                  {slides[currentIndex].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-lg mb-10">
                {slides[currentIndex].desc}
              </motion.p>

              {/* Actions */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <a 
                  href="tel:+2349039634446" 
                  className={`group relative px-8 py-4 ${slides[currentIndex].primaryColor} text-white rounded-none font-semibold text-lg overflow-hidden transition-all hover:brightness-110 flex items-center gap-2`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://instagram.com/swifteeautos_logistics" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group px-8 py-4 bg-transparent border border-white/30 text-white rounded-none font-semibold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Gallery</span>
                </a>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-4 md:right-10 z-20 flex flex-col items-end gap-8 pr-4">
        
        {/* Progress Bars */}
        <div className="flex gap-2">
            {slides.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        setCurrentIndex(idx);
                        setIsAutoPlaying(false);
                    }}
                    className={`h-1 transition-all duration-300 ${idx === currentIndex ? `w-12 ${slides[currentIndex].primaryColor}` : "w-6 bg-white/20"}`}
                />
            ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4">
            <button 
                onClick={() => {
                    handlePrev();
                    setIsAutoPlaying(false);
                }}
                className="p-3 border border-white/10 hover:border-white/40 text-white/60 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => {
                    handleNext();
                    setIsAutoPlaying(false);
                }}
                className="p-3 border border-white/10 hover:border-white/40 text-white/60 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;