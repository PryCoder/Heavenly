import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';

// Lazy load pages for code splitting (keep HomePage eager for instant landing)
const ContactPage = lazy(() => import('./pages/contact'));
const AboutPage = lazy(() => import('./pages/about'));
const PortfolioPage = lazy(() => import('./pages/portfolio'));
const ServicesPage = lazy(() => import('./pages/services'));
const LocationsPage = lazy(() => import('./pages/locations'));
const CeremoniesPage = lazy(() => import('./pages/ceremonies'));
const FullPlanningPage = lazy(() => import('./pages/services/photography'));
const PartialPlanningPage = lazy(() => import('./pages/services/partial-planning'));
const ItalyPage = lazy(() => import('./pages/locations/italy'));
const FrancePage = lazy(() => import('./pages/locations/france'));
const IndiaPage = lazy(() => import('./pages/locations/india'));
const LakeComoPage = lazy(() => import('./pages/venues/lame-como'));
const TuscanyPage = lazy(() => import('./pages/venues/tuscany'));
const FrenchRivieraPage = lazy(() => import('./pages/venues/french-riviera'));
const GuidesPage = lazy(() => import('./pages/guides'));
const PlanPage = lazy(() => import('./pages/plan'));
const BlogPage = lazy(() => import('./pages/blog'));
const DestinationWeddingPage = lazy(() => import('./pages/services/Destination'));
const PhotoVideoPage = lazy(() => import('./pages/services/partial-planning'));
const AdditionalServicesPage = lazy(() => import('./pages/additonalservices'));

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
    path: '/services/additionalservices',
    element: <AdditionalServicesPage />,
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
