import * as Accordion from '@radix-ui/react-accordion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HistoryContent from '../content/history.mdx';

interface HistorySection {
  id: string;
  title: string;
  content: string;
}

const homeHistory: HistorySection[] = [
  {
    id: 'construction',
    title: 'Original Construction',
    content: 'This home was built in the early 20th century, representing the architectural style typical of Texas homes from that era. The original construction featured local materials and design elements suited to the Texas climate.',
  },
  {
    id: 'architecture',
    title: 'Architectural Features',
    content: 'The house features classic elements including high ceilings for air circulation, large windows for natural light, and a front porch that serves as both a welcoming entrance and a shaded outdoor living space. These design choices reflect the practical needs of Texas homeowners before modern air conditioning.',
  },
  {
    id: 'renovations',
    title: 'Modern Updates',
    content: 'Over the years, the home has been thoughtfully updated to include modern amenities while preserving its historic character. Recent renovations have focused on energy efficiency, updated systems, and enhanced outdoor living spaces.',
  },
];

const neighborhoodHistory: HistorySection[] = [
  {
    id: 'founding',
    title: 'Neighborhood Development',
    content: 'The neighborhood developed during a period of significant growth in the area, when Texas cities were expanding and new residential areas were being established. The street layout and home placement reflect early 20th-century urban planning principles.',
  },
  {
    id: 'community',
    title: 'Community Character',
    content: 'Over the decades, this neighborhood has maintained its residential character while adapting to changing times. The tree-lined streets and mix of historic and updated homes create a unique blend of old and new Texas living.',
  },
  {
    id: 'preservation',
    title: 'Historic Preservation',
    content: 'Many homes in the area, including ours, have been carefully preserved or restored. This commitment to maintaining the neighborhood\'s historic character while allowing for modern improvements has helped create a vibrant, livable community.',
  },
];

export function History() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with history theme */}
      <div ref={heroRef} className="relative min-h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-warm-brown via-terracotta to-earth-brown dark:from-graphite dark:via-earth-brown dark:to-warm-brown"
          style={{ y }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </motion.div>
        
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              History
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-stone-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Learn about the rich history of our home and neighborhood
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
          <HistoryContent />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Home History */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-forest-green dark:text-sage-green mb-6">Our Home's Story</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {homeHistory.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion.Item
                    value={section.id}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-l-4 border-terracotta dark:border-terracotta-light"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-forest-green dark:text-sage-green hover:bg-stone-50 dark:hover:bg-graphite flex items-center justify-between group transition-colors">
                        {section.title}
                        <svg
                          className="h-5 w-5 text-terracotta transition-transform group-data-[state=open]:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-6 pb-4 text-stone dark:text-slate leading-relaxed">
                      {section.content}
                    </Accordion.Content>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion.Root>
          </motion.div>

          {/* Neighborhood History */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-forest-green dark:text-sage-green mb-6">Neighborhood Heritage</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {neighborhoodHistory.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion.Item
                    value={section.id}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-l-4 border-turquoise dark:border-turquoise-light"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-forest-green dark:text-sage-green hover:bg-stone-50 dark:hover:bg-graphite flex items-center justify-between group transition-colors">
                        {section.title}
                        <svg
                          className="h-5 w-5 text-turquoise transition-transform group-data-[state=open]:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-6 pb-4 text-stone dark:text-slate leading-relaxed">
                      {section.content}
                    </Accordion.Content>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-gradient-to-r from-mustard to-terracotta dark:from-warm-brown dark:to-terracotta-dark rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Timeline</h3>
          <div className="space-y-6">
            {[
              { period: 'Early 1900s', event: 'Original construction of the home' },
              { period: 'Mid-1900s', event: 'Neighborhood growth and development' },
              { period: '2000s', event: 'Historic preservation efforts begin' },
              { period: 'Present', event: 'Continued stewardship and modern updates' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start border-l-4 border-white pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0 w-32 text-sm font-bold text-white">{item.period}</div>
                <div className="flex-1 text-stone-100 leading-relaxed">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
