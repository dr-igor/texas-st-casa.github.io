import * as Tabs from '@radix-ui/react-tabs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GardenContent from '../content/garden.mdx';

interface Plant {
  name: string;
  scientificName: string;
  description: string;
  care: string;
  season: string;
}

const plants: Plant[] = [
  {
    name: 'Texas Sage',
    scientificName: 'Leucophyllum frutescens',
    description: 'A beautiful drought-tolerant shrub native to Texas and Mexico, known for its silvery foliage and purple flowers that bloom after rain.',
    care: 'Requires full sun and well-drained soil. Drought-tolerant once established. Minimal watering needed.',
    season: 'Blooms primarily in summer and fall, especially after rainfall.',
  },
  {
    name: 'Mexican Petunia',
    scientificName: 'Ruellia simplex',
    description: 'A vibrant perennial with beautiful purple, pink, or white flowers. It spreads readily and provides excellent ground cover.',
    care: 'Thrives in full sun to partial shade. Water regularly but can tolerate some drought. Prune to control spread.',
    season: 'Blooms from spring through fall.',
  },
  {
    name: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    description: 'An aromatic evergreen herb with needle-like leaves and blue flowers. Used for both culinary and ornamental purposes.',
    care: 'Prefers full sun and well-drained soil. Drought-tolerant. Harvest regularly to encourage bushier growth.',
    season: 'Can bloom year-round in Texas, primarily in winter and spring.',
  },
  {
    name: 'Pride of Barbados',
    scientificName: 'Caesalpinia pulcherrima',
    description: 'A stunning tropical shrub with vibrant red and orange flowers that attract butterflies and hummingbirds.',
    care: 'Loves full sun and heat. Water moderately. May die back in winter but returns in spring.',
    season: 'Blooms profusely from late spring through fall.',
  },
  {
    name: 'Lantana',
    scientificName: 'Lantana camara',
    description: 'A hardy, heat-loving perennial with colorful flower clusters that attract butterflies. Flowers change color as they age.',
    care: 'Thrives in full sun. Extremely drought-tolerant and heat-resistant. Deadhead to promote continuous blooming.',
    season: 'Blooms from spring through fall, sometimes year-round.',
  },
];

export function Garden() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with tropical garden theme */}
      <div ref={heroRef} className="relative min-h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-olive via-sage-green to-forest-green dark:from-graphite dark:via-forest-green dark:to-teal"
          style={{ y }}
        >
          {/* Tropical leaves pattern */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10 Q40 30 60 60 Q80 30 60 10 M60 110 Q40 90 60 60 Q80 90 60 110 M10 60 Q30 40 60 60 Q30 80 10 60 M110 60 Q90 40 60 60 Q90 80 110 60' fill='none' stroke='%23ffffff' stroke-width='2' opacity='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
          
          {/* Animated tropical flowers/leaves */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 20) % 100}%`,
                top: `${(i * 15 + 10) % 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <ellipse cx="40" cy="40" rx="30" ry="15" fill="white" opacity="0.2" transform="rotate(45 40 40)"/>
                <ellipse cx="40" cy="40" rx="30" ry="15" fill="white" opacity="0.2" transform="rotate(-45 40 40)"/>
              </svg>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Garden
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-stone-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the beautiful plants that thrive in our Texas garden
            </motion.p>
          </div>
        </div>
      </div>

      {/* MDX Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <GardenContent />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs.Root defaultValue={plants[0].name} className="w-full">
          <Tabs.List className="flex flex-wrap gap-3 mb-8 bg-white dark:bg-slate-800 rounded-xl p-2 shadow-lg">
            {plants.map((plant, index) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Tabs.Trigger
                  value={plant.name}
                  className="px-6 py-3 text-sm font-medium rounded-lg text-stone dark:text-slate hover:text-forest-green dark:hover:text-sage-green transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-sage-green data-[state=active]:to-forest-green data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  {plant.name}
                </Tabs.Trigger>
              </motion.div>
            ))}
          </Tabs.List>

          {plants.map((plant) => (
            <Tabs.Content key={plant.name} value={plant.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border-t-4 border-terracotta dark:border-terracotta-light"
              >
                <h2 className="text-4xl font-bold text-forest-green dark:text-sage-green mb-2">{plant.name}</h2>
                <p className="text-sm italic text-stone dark:text-slate mb-8">{plant.scientificName}</p>

                <div className="grid gap-8 md:grid-cols-3">
                  <motion.div 
                    className="bg-stone-50 dark:bg-graphite rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold text-terracotta dark:text-terracotta-light mb-3">Description</h3>
                    <p className="text-stone dark:text-slate leading-relaxed">{plant.description}</p>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 dark:bg-graphite rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold text-turquoise dark:text-turquoise-light mb-3">Care Instructions</h3>
                    <p className="text-stone dark:text-slate leading-relaxed">{plant.care}</p>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 dark:bg-graphite rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold text-mustard dark:text-mustard-light mb-3">Blooming Season</h3>
                    <p className="text-stone dark:text-slate leading-relaxed">{plant.season}</p>
                  </motion.div>
                </div>
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <motion.div 
          className="mt-12 bg-gradient-to-r from-sage-green to-olive dark:from-forest-green dark:to-teal rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Garden Care Tips</h3>
          <ul className="list-disc list-inside space-y-3 text-stone-100">
            <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              Water deeply but infrequently to encourage deep root growth
            </motion.li>
            <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              Mulch around plants to retain moisture and regulate soil temperature
            </motion.li>
            <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              Native and adapted plants require less water and maintenance
            </motion.li>
            <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              Prune dead or diseased branches to maintain plant health
            </motion.li>
            <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              Consider composting to enrich your soil naturally
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
