import * as Accordion from '@radix-ui/react-accordion';

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
  return (
    <div className="min-h-screen">
      {/* Hero Section with history theme background */}
      <div className="relative bg-gradient-to-br from-warm-brown via-terracotta to-earth-brown dark:from-graphite dark:via-earth-brown dark:to-warm-brown overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">History</h1>
            <p className="text-xl text-stone-100">
              Learn about the rich history of our home and neighborhood
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Home History */}
          <div>
            <h2 className="text-3xl font-bold text-forest-green dark:text-sage-green mb-6">Our Home's Story</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {homeHistory.map((section) => (
                <Accordion.Item
                  key={section.id}
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
              ))}
            </Accordion.Root>
          </div>

          {/* Neighborhood History */}
          <div>
            <h2 className="text-3xl font-bold text-forest-green dark:text-sage-green mb-6">Neighborhood Heritage</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {neighborhoodHistory.map((section) => (
                <Accordion.Item
                  key={section.id}
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
              ))}
            </Accordion.Root>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-mustard to-terracotta dark:from-warm-brown dark:to-terracotta-dark rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6">Timeline</h3>
          <div className="space-y-6">
            <div className="flex items-start border-l-4 border-white pl-6">
              <div className="flex-shrink-0 w-32 text-sm font-bold text-white">Early 1900s</div>
              <div className="flex-1 text-stone-100 leading-relaxed">Original construction of the home</div>
            </div>
            <div className="flex items-start border-l-4 border-white pl-6">
              <div className="flex-shrink-0 w-32 text-sm font-bold text-white">Mid-1900s</div>
              <div className="flex-1 text-stone-100 leading-relaxed">Neighborhood growth and development</div>
            </div>
            <div className="flex items-start border-l-4 border-white pl-6">
              <div className="flex-shrink-0 w-32 text-sm font-bold text-white">2000s</div>
              <div className="flex-1 text-stone-100 leading-relaxed">Historic preservation efforts begin</div>
            </div>
            <div className="flex items-start border-l-4 border-white pl-6">
              <div className="flex-shrink-0 w-32 text-sm font-bold text-white">Present</div>
              <div className="flex-1 text-stone-100 leading-relaxed">Continued stewardship and modern updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
