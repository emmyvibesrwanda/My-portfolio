// file: src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/data';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillCategories = [
    { title: 'Frontend Development', icon: '🎨', skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend Development', icon: '⚙️', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'Tools & DevOps', icon: '🛠️', skills: skills.tools, color: 'from-orange-500 to-red-500' },
    { title: 'Gaming & Streaming', icon: '🎮', skills: skills.gaming, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-800 dark:text-white text-sm font-medium`}
                    style={{ backgroundOpacity: 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;