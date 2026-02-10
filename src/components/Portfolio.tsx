'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

const Portfolio = () => {
  const { language } = useApp();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t.portfolio.all },
    { id: 'branding', label: t.portfolio.branding },
    { id: 'logo', label: t.portfolio.logo },
    { id: 'print', label: t.portfolio.print },
    { id: 'digital', label: t.portfolio.digital },
  ];

  // Sample projects - در پروژه واقعی می‌توانید تصاویر خود را آپلود کنید
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      description: 'Complete brand identity for tech startup',
    },
    {
      id: 2,
      title: 'Modern Logo Design',
      category: 'logo',
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800',
      description: 'Minimalist logo for coffee brand',
    },
    {
      id: 3,
      title: 'Business Brochure',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800',
      description: 'Professional tri-fold brochure design',
    },
    {
      id: 4,
      title: 'Social Media Pack',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      description: 'Instagram and Facebook templates',
    },
    {
      id: 5,
      title: 'Corporate Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800',
      description: 'Full branding package for finance company',
    },
    {
      id: 6,
      title: 'Startup Logo',
      category: 'logo',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800',
      description: 'Creative logo for tech startup',
    },
    {
      id: 7,
      title: 'Magazine Layout',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800',
      description: 'Editorial design for lifestyle magazine',
    },
    {
      id: 8,
      title: 'Website UI Design',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800',
      description: 'Modern website interface design',
    },
    {
      id: 9,
      title: 'Restaurant Brand',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
      description: 'Complete branding for restaurant chain',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {t.portfolio.viewProject}
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
