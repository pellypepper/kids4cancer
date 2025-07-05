'use client';

import HeaderSection from '@/component/HeaderSection';
import ContactInfo from '@/component/ContactInfo';
import ContactForm from '@/component/ContactForm';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  return (
    <motion.div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FFF1D3' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <HeaderSection />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}