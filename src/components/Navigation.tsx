import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/garden', label: 'Garden' },
    { path: '/history', label: 'History' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg border-b-2 border-terracotta dark:border-terracotta-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-forest-green dark:text-sage-green">
                3749 Texas Casa
              </h1>
            </div>
            <div className="ml-4 sm:ml-6 flex space-x-4 sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'border-terracotta text-forest-green dark:text-sage-green font-semibold'
                      : 'border-transparent text-stone dark:text-slate hover:border-terracotta-light hover:text-forest-green dark:hover:text-sage-green'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
