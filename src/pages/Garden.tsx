import * as Tabs from '@radix-ui/react-tabs';

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
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Garden</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the beautiful plants that thrive in our Texas garden
          </p>
        </div>

        <Tabs.Root defaultValue={plants[0].name} className="w-full">
          <Tabs.List className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-8">
            {plants.map((plant) => (
              <Tabs.Trigger
                key={plant.name}
                value={plant.name}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 border-b-2 border-transparent data-[state=active]:border-green-500 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-400 transition-all"
              >
                {plant.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {plants.map((plant) => (
            <Tabs.Content key={plant.name} value={plant.name}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{plant.name}</h2>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6">{plant.scientificName}</p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                    <p className="text-gray-700 dark:text-gray-300">{plant.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Care Instructions</h3>
                    <p className="text-gray-700 dark:text-gray-300">{plant.care}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Blooming Season</h3>
                    <p className="text-gray-700 dark:text-gray-300">{plant.season}</p>
                  </div>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="mt-12 bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Garden Care Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Water deeply but infrequently to encourage deep root growth</li>
            <li>Mulch around plants to retain moisture and regulate soil temperature</li>
            <li>Native and adapted plants require less water and maintenance</li>
            <li>Prune dead or diseased branches to maintain plant health</li>
            <li>Consider composting to enrich your soil naturally</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
