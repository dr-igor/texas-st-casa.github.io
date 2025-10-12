import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Garden } from './pages/Garden';
import { History } from './pages/History';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  useSmoothScroll();
  
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-graphite">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MDXProvider>
        <Router>
          <AppContent />
        </Router>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default App;

