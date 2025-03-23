import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';


// Lazy Load Pages
const Home = lazy(() => import('./Pages/Home'));
const Terms = lazy(() => import('./Pages/Terms'));
const Policy = lazy(() => import('./Pages/Policy'));
const Loader = lazy(() => import('./components/Loader'));
const Cert = lazy(() => import('./Pages/Cert'));

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home setTheme={setTheme} theme={theme} />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/certificates" element={<Cert />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;