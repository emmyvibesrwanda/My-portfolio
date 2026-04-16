// file: src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiJavascript, SiPython, SiReact, SiNodedotjs } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-5xl">🎮</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  I'm Emmy — a passionate Software Engineer, competitive Gamer, and Gaming Content Creator. 
                  I blend my love for code and gaming to create awesome content and build innovative projects.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  With over 5 years of experience in full-stack development and a growing YouTube channel 
                  with 50K+ subscribers, I help brands and creators level up their online presence.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm flex items-center gap-1">
                    <SiJavascript /> JavaScript/TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm flex items-center gap-1">
                    <SiPython /> Python
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-sm flex items-center gap-1">
                    <SiReact /> React/Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm flex items-center gap-1">
                    <SiNodedotjs /> Node.js
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;