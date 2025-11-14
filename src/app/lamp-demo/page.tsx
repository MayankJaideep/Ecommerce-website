'use client';

import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';

export default function LampDemoPage() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome to ShopHub <br /> Your Ultimate Shopping Destination
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 text-center text-lg text-slate-400 max-w-2xl mx-auto"
      >
        Discover amazing products, exclusive deals, and seamless shopping experience.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="mt-8"
      >
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
          Start Shopping
        </button>
      </motion.div>
    </LampContainer>
  );
}
