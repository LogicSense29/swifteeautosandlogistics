"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for columns (Desktop Only)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  // Smooth spring physics
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothY3 = useSpring(y3, springConfig);

  const galleryImages = [
    // Column 1
    [
      { id: 1, src: "/hero_car.png", title: "Lexus LX 600", tag: "Luxury SUV" },
      { id: 2, src: "/fleet.png", title: "Logistics Fleet", tag: "Global" },
      { id: 3, src: "/lexus-landscape.png", title: "Executive Class", tag: "Premium" },
    ],
    // Column 2
    [
      { id: 4, src: "/showroom.png", title: "Experience Center", tag: "Showroom" },
      { id: 5, src: "/delivery-swiftee.png", title: "Express Delivery", tag: "Logistics" },
      { id: 6, src: "/lexus-2.png", title: "Toyota Prado", tag: "Off-Road" },
    ],
    // Column 3
    [
      { id: 7, src: "/lexus-2-night.png", title: "Night Stealth", tag: "Limited" },
      { id: 8, src: "/hero_logistics.png", title: "Urban Logistics", tag: "City Wide" },
      { id: 9, src: "/delivery-swiftee-customer.png", title: "Happy Clients", tag: "Trust" },
    ]
  ];

  const allImages = galleryImages.flat();

  const handleSwipe = (direction) => {
    if (currentIndex < allImages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  return (
    <section ref={containerRef} className="section-padding bg-slate-950 overflow-hidden relative min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 text-white leading-tight"
          >
            Captured <br/>
            <span className="text-brand-orange">Excellence.</span>
          </motion.h2>

           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg max-w-sm text-right hidden lg:block"
          >
            A visual journey through our premium inventory and logistics operations.
          </motion.p>
        </div>

        {/* 1. Mobile Tinder Stack (< 500px) */}
        <div className="block min-[500px]:hidden relative h-[500px] w-full max-w-[340px] mx-auto">
          <AnimatePresence mode="popLayout">
            {allImages.map((img, idx) => {
              if (idx < currentIndex || idx > currentIndex + 3) return null;
              const isTop = idx === currentIndex;
              const position = idx - currentIndex;
              
              return (
                <motion.div
                  key={img.id}
                  style={{ zIndex: allImages.length - idx }}
                  initial={{ scale: 0.8, opacity: 0, y: 60 }}
                  animate={{ 
                    scale: 1 - position * 0.05,
                    opacity: 1 - position * 0.15,
                    y: position * -15, // Peek out at the top
                    x: position * (position % 2 === 0 ? 8 : -8), // Peek out at the sides
                    rotate: isTop ? 0 : position === 1 ? -4 : position === 2 ? 4 : -2,
                  }}
                  exit={{ x: 500, opacity: 0, rotate: 45, transition: { duration: 0.3 } }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 500) handleSwipe();
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing p-4"
                >
                  <GalleryCard img={img} isMobile />
                </motion.div>
              );
            })}
          </AnimatePresence>
          {currentIndex === allImages.length && (
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

        {/* 2. Tablet Horizontal Scroll (500px to < md) - Hidden Scrollbar */}
        <div className="hidden min-[500px]:flex md:hidden overflow-x-auto gap-6 pb-12 scrollbar-hide snap-x snap-mandatory px-4 -mx-4">
          {allImages.map((img, idx) => (
            <div key={img.id} className="min-w-[70vw] snap-center h-[500px]">
              <GalleryCard img={img} isMobile />
            </div>
          ))}
        </div>

        {/* 3. Desktop Parallax Grid (>= md) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] lg:h-[800px] overflow-hidden rounded-[3rem] bg-slate-900/50 border border-white/5 p-6 relative">
          <motion.div style={{ y: smoothY1 }} className="flex flex-col gap-6">
            {galleryImages[0].map((img, idx) => (
              <GalleryCard key={img.id} img={img} />
            ))}
          </motion.div>

          <motion.div style={{ y: smoothY2 }} className="flex flex-col gap-6">
             {galleryImages[1].map((img, idx) => (
              <GalleryCard key={img.id} img={img} />
            ))}
          </motion.div>

           <motion.div style={{ y: smoothY3 }} className="flex flex-col gap-6 hidden lg:flex">
             {galleryImages[2].map((img, idx) => (
              <GalleryCard key={img.id} img={img} />
            ))}
          </motion.div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-20" />
        </div>

      </div>
    </section>
  );
};

const GalleryCard = ({ img, isMobile }) => {
  return (
    <div className="relative aspect-[3/4] h-full w-full rounded-[2.5rem] overflow-hidden group cursor-pointer md:cursor-none border border-white/5">
      <Image
        src={img.src}
        alt={img.title}
        fill
        className="object-cover transition-transform duration-700 md:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className={cn(
        "absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500",
        isMobile ? "opacity-100" : "lg:opacity-0 lg:group-hover:opacity-100"
      )}>
        <div className={cn(
          "transition-transform duration-500",
          !isMobile && "lg:translate-y-4 lg:group-hover:translate-y-0"
        )}>
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2 block">{img.tag}</span>
          <h3 className="text-white text-2xl font-bold flex items-center justify-between">
            {img.title}
            <ArrowUpRight className="w-6 h-6 text-brand-orange" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
