"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";

// Import car images
import lexusLandscape from "../assets/lexus-landscape.png";
import lexusLandscape2 from "../assets/lexus-2.png";
import lexusLandscape3 from "../assets/lexus-2-night.png";

const FeaturedCars = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cars = [
    {
      id: 1,
      brand: "lexus",
      name: "Lexus ES 350",
      year: "2019",
      price: "₦18.5M",
      image: lexusLandscape3,
      mileage: "45K km",
      fuel: "Petrol",
      transmission: "Auto"
    },
    {
      id: 2,
      brand: "lexus",
      name: "Lexus RX 350",
      year: "2020",
      price: "₦22M",
      image: lexusLandscape2,
      mileage: "32K km",
      fuel: "Petrol",
      transmission: "Auto"
    },
    {
      id: 3,
      brand: "lexus",
      name: "Lexus GX 460",
      year: "2021",
      price: "₦35M",
      image: lexusLandscape,
      mileage: "18K km",
      fuel: "Petrol",
      transmission: "Auto"
    },
    {
      id: 4,
      brand: "toyota",
      name: "Toyota Camry",
      year: "2020",
      price: "₦12.5M",
      image: lexusLandscape3,
      mileage: "38K km",
      fuel: "Petrol",
      transmission: "Auto"
    },
    {
      id: 5,
      brand: "toyota",
      name: "Toyota Highlander",
      year: "2021",
      price: "₦28M",
      image: lexusLandscape2,
      mileage: "22K km",
      fuel: "Petrol",
      transmission: "Auto"
    },
    {
      id: 6,
      brand: "toyota",
      name: "Toyota Corolla",
      year: "2022",
      price: "₦9.8M",
      image: lexusLandscape,
      mileage: "15K km",
      fuel: "Petrol",
      transmission: "Auto"
    }
  ];

  return (
    <section ref={containerRef} className="section-padding relative bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-slate-900/50 -skew-x-12 translate-x-32 hidden lg:block" />
      
      <div className="section-container relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12 items-end">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fluid-h2 text-slate-900 dark:text-white leading-tight"
            >
              {/* Premium Cars <br/> */}
              <span className="text-brand-orange relative inline-block italic font-playfair font-normal">
                Available Now
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Handpicked, verified, and ready to drive. Every vehicle meets our strict quality standards.
            </motion.p>
          </div>
        </div>

        {/* Clean Cards - Horizontal Scroll */}
        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto overflow-y-hidden pb-8 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-0 lg:px-0 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group w-[320px] md:w-[360px] flex-shrink-0"
                >
                  {/* Simple Clean Card */}
                  <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-orange dark:hover:border-brand-orange transition-all duration-300 shadow-sm hover:shadow-xl h-full">
                    
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title & Year */}
                      <div className="mb-4">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">
                          {car.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                          {car.year} Model
                        </p>
                      </div>

                      {/* Price */}
                      <div className="mb-4 pb-4 border-b border-slate-200 dark:border-white/10">
                        <span className="text-3xl font-black text-brand-orange">{car.price}</span>
                      </div>

                      {/* Specs */}
                      <div className="flex items-center justify-between mb-6 text-xs">
                        <div className="flex items-center gap-1.5">
                          <Gauge size={14} className="text-slate-400" />
                          <span className="text-slate-600 dark:text-slate-400">{car.mileage}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Fuel size={14} className="text-slate-400" />
                          <span className="text-slate-600 dark:text-slate-400">{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-slate-400" />
                          <span className="text-slate-600 dark:text-slate-400">{car.transmission}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      {/* <a
                        href="https://instagram.com/swifteeautos_logistics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[1.5rem] font-bold text-sm hover:bg-brand-orange hover:dark:bg-brand-orange hover:text-white transition-all duration-300"
                      >
                        View Details
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {cars.map((_, idx) => (
              <div
                key={idx}
                className="h-1.5 w-8 rounded-full bg-slate-200 dark:bg-white/10"
              />
            ))}
          </div> */}
        </div>

        {/* View All CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/swifteeautos_logistics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-white/30 text-slate-900 dark:text-white rounded-[2rem] font-bold text-sm md:text-base hover:bg-slate-900 hover:dark:bg-white hover:text-white hover:dark:text-slate-950 hover:border-slate-900 hover:dark:border-white transition-all duration-300"
          >
            View Full Inventory
            <ArrowRight size={20} />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturedCars;
