import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';

// Lazy Load Pages
const Home = lazy(() => import('./Pages/Home'));

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Apply Theme on Mount & Change
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={theme}>
        <Suspense fallback={<div className="text-center text-black dark:text-white mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home setTheme={setTheme} theme={theme} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;