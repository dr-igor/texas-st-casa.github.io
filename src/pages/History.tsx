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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">History</h1>
          <p className="text-lg text-gray-600">
            Learn about the rich history of our home and neighborhood
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Home History */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Home's Story</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {homeHistory.map((section) => (
                <Accordion.Item
                  key={section.id}
                  value={section.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between group">
                      {section.title}
                      <svg
                        className="h-5 w-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-4 text-gray-700">
                    {section.content}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          {/* Neighborhood History */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Neighborhood Heritage</h2>
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {neighborhoodHistory.map((section) => (
                <Accordion.Item
                  key={section.id}
                  value={section.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between group">
                      {section.title}
                      <svg
                        className="h-5 w-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-4 text-gray-700">
                    {section.content}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-600">Early 1900s</div>
              <div className="flex-1 text-gray-700">Original construction of the home</div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-600">Mid-1900s</div>
              <div className="flex-1 text-gray-700">Neighborhood growth and development</div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-600">2000s</div>
              <div className="flex-1 text-gray-700">Historic preservation efforts begin</div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-600">Present</div>
              <div className="flex-1 text-gray-700">Continued stewardship and modern updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
