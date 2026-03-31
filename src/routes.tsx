import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ServicesPage from './pages/services';
import LocationsPage from './pages/locations';
import CeremoniesPage from './pages/ceremonies';
import FullPlanningPage from './pages/services/photography';
import PartialPlanningPage from './pages/services/partial-planning';
import ItalyPage from './pages/locations/italy';
import FrancePage from './pages/locations/france';
import IndiaPage from './pages/locations/india';
import LakeComoPage from './pages/venues/lame-como';
import TuscanyPage from './pages/venues/tuscany';
import FrenchRivieraPage from './pages/venues/french-riviera';
import GuidesPage from './pages/guides';
import PlanPage from './pages/plan';
import BlogPage from './pages/blog';
import DestinationWeddingPage from './pages/services/Destination';
import PhotoVideoPage from './pages/services/partial-planning';

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
    path: '/services/full-planning',
    element: <FullPlanningPage />,
  },
  { path:"/locations/italy", element:<ItalyPage /> },
{path:"/locations/france" ,element:<FrancePage /> },
{ path:"/locations/india", element:<IndiaPage /> },
{path:"/venues/lake-como", element:<LakeComoPage /> },
{ path:"/venues/tuscany", element:<TuscanyPage /> },
{ path:"/venues/french-riviera" ,element:<FrenchRivieraPage />},
{ path:"/guides" ,element:<GuidesPage />},
{ path:"/lets-plan" ,element:<PlanPage />},
{ path:"/blog" ,element:<BlogPage />},
  {
    path: '/services/photography',
    element: <PhotoVideoPage/>,
  },
  {
    path: '/services/destination',
    element: <DestinationWeddingPage />,
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
