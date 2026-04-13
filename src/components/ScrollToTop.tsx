import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scroll = () => {
      const hash = location.hash?.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // Wait a tick so the next route can render before we scroll.
    const timeoutId = window.setTimeout(scroll, 0);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return null;
}
