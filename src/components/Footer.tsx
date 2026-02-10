'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiHeart } from 'react-icons/fi';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

const Footer = () => {
  const { language } = useApp();
  const t = translations[language];

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'Github' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-t border-white/20 dark:border-gray-700/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              {language === 'fa' ? 'پورتفولیو' : 'Portfolio'}
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fa' 
                ? 'خلاقیت را به واقعیت تبدیل می‌کنم' 
                : 'Turning Creativity Into Reality'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              {language === 'fa' ? 'لینک‌های سریع' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {[
                { name: t.nav.home, href: '#home' },
                { name: t.nav.about, href: '#about' },
                { name: t.nav.services, href: '#services' },
                { name: t.nav.portfolio, href: '#portfolio' },
                { name: t.nav.contact, href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              {t.footer.social}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-gray-700/20 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2024 {language === 'fa' ? t.hero.name : 'Your Name'}.</span>
            <span>{t.footer.rights}</span>
            <span className="flex items-center gap-1">
              {language === 'fa' ? 'ساخته شده با' : 'Made with'}
              <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
