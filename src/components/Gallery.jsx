"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticEffect from "./MagneticEffect";

const Gallery = () => {
  const images = [
    { src: "/hero_car.png", alt: "Toyota Corolla", category: "Classic Sedan" },
    { src: "/hero_logistics.png", alt: "Logistics Expert", category: "Global Logistics" },
    { src: "/showroom.png", alt: "Modern Showroom", category: "Premium Experience" },
    { src: "/fleet.png", alt: "Logistics Fleet", category: "Heavy Hauling" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Reset for infinite loop feel
    }
  };

  return (
    <section id="gallery" className="section-padding bg-slate-50 dark:bg-slate-950/40 selection:bg-brand-orange selection:text-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            Visual Showcase
          </motion.span>
          <h2 className="text-fluid-h2 mb-8 leading-tight">Our <span className="text-brand-orange font-playfair italic font-normal">Cinematic</span> Gallery</h2>
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            A showcase of our clean, high-quality vehicles and commitment to excellence.
          </p>
        </div>

        {/* Mobile Tinder Stack */}
        <div className="relative h-[500px] w-full max-w-[400px] mx-auto md:hidden">
          <AnimatePresence>
            {images.map((img, idx) => {
              if (idx < currentIndex) return null;
              const isTop = idx === currentIndex;
              
              return (
                <motion.div
                  key={idx}
                  style={{ zIndex: images.length - idx }}
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ 
                    scale: 1 - (idx - currentIndex) * 0.05,
                    opacity: 1 - (idx - currentIndex) * 0.2,
                    y: (idx - currentIndex) * 10,
                  }}
                  exit={{ x: 300, opacity: 0, rotate: 20 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100 || velocity.x > 500) handleSwipe("right");
                    else if (offset.x < -100 || velocity.x < -500) handleSwipe("left");
                  }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <span className="text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-2">{img.category}</span>
                      <h3 className="text-white text-2xl font-black tracking-tight">{img.alt}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {currentIndex === images.length && (
             <motion.button
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               onClick={() => setCurrentIndex(0)}
               className="absolute inset-0 flex items-center justify-center text-brand-orange font-black uppercase text-sm"
             >
               Restart Gallery
             </motion.button>
          )}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 h-auto lg:h-[700px]">
          {images.map((img, idx) => (
            <div key={idx} className={cn(
              "h-80 lg:h-full transition-all duration-700 hover:scale-[1.02]",
              idx === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : "col-span-1",
              idx === 2 ? "lg:row-span-2" : "",
              idx === 3 ? "col-span-1" : ""
            )}>
              <MagneticEffect strength={0.1} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-800 group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                    <span className="text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">{img.category}</span>
                    <h3 className="text-white text-2xl font-black tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200">{img.alt}</h3>
                  </div>
                </motion.div>
              </MagneticEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Gallery;


