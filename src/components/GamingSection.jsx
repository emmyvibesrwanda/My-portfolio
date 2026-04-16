// file: src/components/GamingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTrophy, FiClock, FiTarget } from 'react-icons/fi';
import { favoriteGames } from '../data/data';

const GamingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="gaming" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Gaming Identity</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Competitive gaming is in my blood — here's what I play
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Favorite Games */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiTarget className="text-purple-500" />
              Favorite Games
            </h3>
            <div className="space-y-4">
              {favoriteGames.map((game, index) => (
                <motion.div
                  key={game.name}
                  variants={itemVariants}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:neon-border transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{game.icon}</span>
                    <div>
                      <p className="font-semibold">{game.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{game.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <FiClock className="w-4 h-4" />
                    <span>{game.hours} hours</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiTrophy className="text-yellow-500" />
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white/20 dark:bg-gray-800/50 rounded-xl">
                <p className="text-3xl font-bold text-purple-500">Top 1%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Valorant Players</p>
              </div>
              <div className="text-center p-4 bg-white/20 dark:bg-gray-800/50 rounded-xl">
                <p className="text-3xl font-bold text-pink-500">5+ Years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Competitive Gaming</p>
              </div>
            </div>
            
            {/* Gameplay Highlight Placeholder */}
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">🎬 Gameplay Highlight</p>
                  <p className="text-sm text-gray-500">Watch my best moments on YouTube</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;