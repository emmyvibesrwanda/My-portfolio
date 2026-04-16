// file: src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { navigation, socialLinks } from '../data/data';
import { FiYoutube, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: FiYoutube, url: socialLinks.youtube, label: 'YouTube' },
    { icon: FiGithub, url: socialLinks.github, label: 'GitHub' },
    { icon: FiTwitter, url: socialLinks.twitter, label: 'Twitter' },
    { icon: FaDiscord, url: socialLinks.discord, label: 'Discord' },
    { icon: FiLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Emmy Vibes</h3>
            <p className="text-gray-400 text-sm">
              Gamer • YouTuber • Software Engineer<br />
              Building awesome experiences through code and content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <FiHeart className="text-red-500 animate-pulse" /> by Emmy Vibes
          </p>
          <p className="mt-2">© 2024 Emmy Vibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;