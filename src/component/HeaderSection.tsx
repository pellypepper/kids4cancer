'use client';

import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeaderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key="header-section"
            className="text-center md:text-left flex flex-col md:flex-row items-center justify-between mb-16"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
      <div className='md:w-[500px]'>
        <h2 className="text-4xl font-bold text-[#FFBC00] mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Reach out to our compassionate team. We're here to support families affected by childhood cancer and answer any questions you may have about our programs and services.
        </p>
      </div>
      <div className="flex justify-center mt-8 mb-3">
        <Image src="/image/logo.png" width={500} height={500} alt="Hope for Childhood Logo" className="w-auto" />
      </div>
   </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}