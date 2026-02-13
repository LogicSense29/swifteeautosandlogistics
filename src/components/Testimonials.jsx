"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticEffect from "./MagneticEffect";

const Testimonials = () => {
  const reviews = [
    {
      name: "Samuel O.",
      location: "Lagos",
      text: "I bought my Toyota Corolla from Swiftee Autos and the experience was smooth from start to finish. No stories. The car was delivered to my doorstep in perfect condition.",
      type: "Autos"
    },
    {
      name: "Joy I.",
      location: "Abeokuta",
      text: "Swiftee Autos made buying my first car stress-free. They showed me full inspection videos and handled documentation. Very honest and professional service.",
      type: "Autos"
    },
    {
      name: "Adeyemi T.",
      location: "Oyo State",
      text: "They’ve helped me move items from Lagos to Ibadan multiple times. Zero damage, zero delay. Swiftee Logistics is simply the best.",
      type: "Logistics"
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 text-center lg:text-left items-center lg:items-start">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block"
            >
              Social Proof
            </motion.span>
            <h2 className="text-fluid-h2 mb-8 leading-tight">What Our <span className="text-brand-blue">Customers</span> Are Saying</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Reliability is our culture. Join thousands of satisfied customers who trust Swiftee.
            </p>
          </div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-brand-orange/5 px-8 py-5 rounded-[2rem] border border-brand-orange/10 shadow-3xl shadow-brand-orange/5"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <span className="ml-2 font-black text-xl">5.0 Brand Rating</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <MagneticEffect key={idx} strength={0.15}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
                data-cursor="pointer"
                className="bg-slate-50 dark:bg-white/[0.03] p-12 rounded-[3rem] relative overflow-hidden group border border-transparent hover:border-brand-blue/20 transition-all duration-700 flex flex-col h-full shadow-2xl shadow-black/5"
              >
                <Quote className="absolute top-10 right-10 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors duration-700" size={100} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-12 text-xl relative z-10 flex-grow italic font-medium">
                  "{review.text}"
                </p>

                <div className="mt-auto pt-10 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-black text-xl tracking-tight">{review.name}</h4>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{review.location}</p>
                  </div>
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full shadow-lg",
                    review.type === "Autos" ? "bg-brand-blue text-white" : "bg-brand-orange text-white"
                  )}>
                    {review.type}
                  </span>
                </div>
              </motion.div>
            </MagneticEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


