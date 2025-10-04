export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background */}
      <div className="relative bg-gradient-to-br from-sage-green via-teal to-forest-green dark:from-graphite dark:via-slate-800 dark:to-forest-green overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to 3749 Texas Casa
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-stone-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              A showcase of our home, garden, and the rich history of our neighborhood.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Our Home Card */}
          <div className="relative group bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-terracotta to-terracotta-dark text-white mx-auto shadow-lg">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-forest-green dark:text-sage-green text-center">Our Home</h3>
              <p className="mt-4 text-base text-stone dark:text-slate text-center leading-relaxed">
                A beautiful residence with character and charm.
              </p>
            </div>
          </div>

          {/* Garden Card */}
          <div className="relative group bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-sage-green to-forest-green text-white mx-auto shadow-lg">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-forest-green dark:text-sage-green text-center">Garden</h3>
              <p className="mt-4 text-base text-stone dark:text-slate text-center leading-relaxed">
                Explore the diverse plants and flowers in our garden.
              </p>
            </div>
          </div>

          {/* History Card */}
          <div className="relative group bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-turquoise to-teal text-white mx-auto shadow-lg">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-forest-green dark:text-sage-green text-center">History</h3>
              <p className="mt-4 text-base text-stone dark:text-slate text-center leading-relaxed">
                Learn about the history of our home and neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

