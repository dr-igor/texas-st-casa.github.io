import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Garden } from './pages/Garden';
import { History } from './pages/History';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-stone-100 dark:bg-graphite">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

