// file: src/components/YouTubeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiYoutube, FiEye } from 'react-icons/fi';
import { youtubeVideos } from '../data/data';

const YouTubeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const openYouTube = () => {
    window.open('https://youtube.com/@emmyvibes', '_blank');
  };

  return (
    <section id="youtube" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Latest Videos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Gaming highlights, coding tutorials, and behind-the-scenes content
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {youtubeVideos.slice(0, 6).map((video, index) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiYoutube className="w-12 h-12 text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FiEye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={openYouTube}
            className="group px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold text-white flex items-center justify-center gap-2 mx-auto hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiYoutube className="w-5 h-5" />
            Visit My Channel
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;