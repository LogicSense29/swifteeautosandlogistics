"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticEffect from "./MagneticEffect";

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Samuel O.", location: "Lagos", text: "I bought my Toyota Corolla from Swiftee Autos and the experience was smooth from start to finish. No stories.", type: "Autos" },
    { id: 2, name: "Joy I.", location: "Abeokuta", text: "Swiftee Autos made buying my first car stress-free. Very honest and professional service.", type: "Autos" },
    { id: 3, name: "Adeyemi T.", location: "Oyo State", text: "They’ve helped me move items multiple times. Zero damage, zero delay. Swiftee Logistics is the best.", type: "Logistics" },
    { id: 4, name: "Chukwuma E.", location: "Enugu", text: "The Lexus LX 600 I got is a beast. Swiftee Autos is the most reliable dealership I've dealt with.", type: "Autos" },
    { id: 5, name: "Bisi A.", location: "Abuja", text: "Super fast delivery! I was worried about moving my furniture, but the Swiftee team handled everything.", type: "Logistics" },
    { id: 6, name: "Daniel K.", location: "Port Harcourt", text: "Professionalism at its peak. The tracking system for my vehicle delivery was accurate.", type: "Logistics" }
  ];

  // Doubling content for seamless loop
  const displayReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="section-padding bg-slate-950 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-[160px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fluid-h2 text-white leading-tight"
          >
            Trusted by <br/>
            <span className="text-brand-orange">Thousands.</span>
          </motion.h2>

          <div className="hidden lg:flex items-center gap-6 bg-white/[0.03] backdrop-blur-md border border-white/5 px-8 py-4 rounded-[2rem]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <span className="text-white/60 font-bold uppercase tracking-tighter text-sm">5.0 Customer Rating</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <MarqueeRow items={displayReviews} direction="left" speed={80} />
        <MarqueeRow items={[...displayReviews].reverse()} direction="right" speed={70} />
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

const MarqueeRow = ({ items, direction, speed }) => {
  const controls = useAnimation();
  const [isInteracting, setIsInteracting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isInteracting) {
      controls.start({
        x: direction === "left" ? [0, -2000] : [-2000, 0],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }
      });
    } else {
      controls.stop();
    }
  }, [isInteracting, controls, direction, speed]);

  const handleInteraction = () => {
    setIsInteracting(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsInteracting(false);
      timerRef.current = null;
    }, 5000); // Resume after 5s
  };

  return (
    <div 
      className="flex overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => {
        // Only resume if we aren't in the middle of a click-pause
        if (!timerRef.current) setIsInteracting(false);
      }}
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <motion.div 
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
        dragElastic={0.05}
        animate={controls}
        className="flex gap-6 md:gap-8 whitespace-nowrap px-4"
      >
        {items.map((review, idx) => (
          <TestimonialCard key={idx} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({ review }) => {
  return (
    <div className="min-w-[320px] md:min-w-[450px] bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[3rem] relative group hover:bg-white/[0.05] transition-all duration-500">
      <Quote className="absolute top-8 right-10 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors duration-500" size={60} />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
        ))}
      </div>

      <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed mb-8 whitespace-normal italic">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <div>
          <h4 className="text-white font-bold text-lg">{review.name}</h4>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{review.location}</p>
        </div>
        <span className={cn(
          "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg",
          review.type === "Autos" ? "bg-brand-blue text-white" : "bg-brand-orange text-white"
        )}>
          {review.type}
        </span>
      </div>
    </div>
  );
};

export default Testimonials;


