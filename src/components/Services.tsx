'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiAperture, FiPrinter, FiMonitor, FiFeather, FiPackage } from 'react-icons/fi';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

const Services = () => {
  const { language } = useApp();
  const t = translations[language];

  const services = [
    {
      icon: FiLayers,
      title: t.services.branding.title,
      description: t.services.branding.description,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiAperture,
      title: t.services.logo.title,
      description: t.services.logo.description,
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: FiPrinter,
      title: t.services.print.title,
      description: t.services.print.description,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiMonitor,
      title: t.services.digital.title,
      description: t.services.digital.description,
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FiFeather,
      title: t.services.illustration.title,
      description: t.services.illustration.description,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: FiPackage,
      title: t.services.packaging.title,
      description: t.services.packaging.description,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-tl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
