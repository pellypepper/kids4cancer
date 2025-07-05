'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // Adjust threshold as needed

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key="contact-info"
            className="bg-gradient-to-br from-[#FFF1D3] via-[#FFF8E7] to-[#FFBC00]/10 rounded-3xl shadow-2xl border-2 border-[#FFBC00]/20 p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
          >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFBC00]/5 to-transparent rounded-3xl"></div>
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFBC00]/30 via-transparent to-[#FFBC00]/30 blur-sm -z-10"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Connect With Us</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">info@hopeforchildhood.org</p>
              <p className="text-gray-600">support@hopeforchildhood.org</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+1 (555) HOPE-123</p>
              <p className="text-gray-600">+1 (555) 467-3123</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">123 Hope Street</p>
              <p className="text-gray-600">Children's Medical Center</p>
              <p className="text-gray-600">Boston, MA 02115</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-4">Support Hours</h3>
          <div className="space-y-2 text-gray-600">
            <p className="flex justify-between">
              <span>Monday - Friday</span><span>8:00 AM - 8:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Saturday</span><span>10:00 AM - 6:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday</span><span>12:00 PM - 4:00 PM</span>
            </p>
            <p className="text-sm text-orange-600 mt-4">Emergency support available 24/7</p>
          </div>
        </div>
      </div>
     </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}