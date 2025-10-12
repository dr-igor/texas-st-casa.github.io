import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HomeContent from '../content/home.mdx';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with parallax and tropical background */}
      <div ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Tropical floral background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-sage-green via-teal to-forest-green dark:from-graphite dark:via-slate-800 dark:to-forest-green"
          style={{ y }}
        >
          {/* Tropical leaf patterns */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q30 30 50 50 Q70 30 50 10 M50 90 Q30 70 50 50 Q70 70 50 90 M10 50 Q30 30 50 50 Q30 70 10 50 M90 50 Q70 30 50 50 Q70 70 90 50' fill='%23ffffff' fill-opacity='0.3' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Animated tropical flowers */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i * 15 + 10) % 100}%`,
                  top: `${(i * 20 + 15) % 100}%`,
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1, 0.95],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="8" fill="white" opacity="0.4"/>
                  <path d="M30 22 Q35 25 30 30 Q25 25 30 22" fill="white" opacity="0.6"/>
                  <path d="M30 38 Q35 35 30 30 Q25 35 30 38" fill="white" opacity="0.6"/>
                  <path d="M22 30 Q25 25 30 30 Q25 35 22 30" fill="white" opacity="0.6"/>
                  <path d="M38 30 Q35 25 30 30 Q35 35 38 30" fill="white" opacity="0.6"/>
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
          style={{ opacity }}
        >
          <div className="text-center max-w-5xl">
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to 3749 Texas Casa
            </motion.h1>
            <motion.p 
              className="text-2xl sm:text-3xl text-stone-100 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of our home, garden, and the rich history of our neighborhood.
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <svg className="w-12 h-12 text-white opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* MDX Content Section */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <HomeContent />
        </div>
      </motion.div>

      {/* Feature Cards with scroll animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[
            {
              title: "Our Home",
              description: "A beautiful residence with character and charm.",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              gradient: "from-terracotta to-terracotta-dark"
            },
            {
              title: "Garden",
              description: "Explore the diverse plants and flowers in our garden.",
              icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              gradient: "from-sage-green to-forest-green"
            },
            {
              title: "History",
              description: "Learn about the history of our home and neighborhood.",
              icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              gradient: "from-turquoise to-teal"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <motion.div 
                  className={`flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mx-auto shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-forest-green dark:text-sage-green text-center">{feature.title}</h3>
                <p className="mt-4 text-base text-stone dark:text-slate text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


