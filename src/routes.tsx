import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ServicesPage from './pages/services';
import LocationsPage from './pages/locations';
import CeremoniesPage from './pages/ceremonies';

// Lazy load components for code splitting (except HomePage for instant loading)
const NotFoundPage = lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/locations',
    element: <LocationsPage />,
  },
  {
    path: '/ceremonies',
    element: <CeremoniesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/about' | '/portfolio' | '/services' | '/locations' | '/ceremonies' | '/contact';

export type Params = Record<string, string | undefined>;
