import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MainLayout from '../components/layout/MainLayout';

// Import section pages
import ExecutiveSummary from '../pages/sections/ExecutiveSummary';
import MissionStatement from '../pages/sections/MissionStatement';
import MarketingObjectives from '../pages/sections/MarketingObjectives';
import KeyPerformance from '../pages/sections/KeyPerformance';
import SwotAnalysis from '../pages/sections/SwotAnalysis';
import MarketResearch from '../pages/sections/MarketResearch';
import MarketingStrategy from '../pages/sections/MarketingStrategy';
import ChallengesSolutions from '../pages/sections/ChallengesSolutions';
import Execution from '../pages/sections/Execution';
import Budget from '../pages/sections/Budget';
import Conclusion from '../pages/sections/Conclusion';
import Feedback from '../pages/sections/Feedback';

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/home',
    element: <MainLayout><Home /></MainLayout>,
  },
  // Section pages
  {
    path: '/executive-summary',
    element: <MainLayout><ExecutiveSummary /></MainLayout>,
  },
  {
    path: '/mission-statement',
    element: <MainLayout><MissionStatement /></MainLayout>,
  },
  {
    path: '/marketing-objectives',
    element: <MainLayout><MarketingObjectives /></MainLayout>,
  },
  {
    path: '/key-performance',
    element: <MainLayout><KeyPerformance /></MainLayout>,
  },
  {
    path: '/swot-analysis',
    element: <MainLayout><SwotAnalysis /></MainLayout>,
  },
  {
    path: '/market-research',
    element: <MainLayout><MarketResearch /></MainLayout>,
  },
  {
    path: '/marketing-strategy',
    element: <MainLayout><MarketingStrategy /></MainLayout>,
  },
  {
    path: '/challenges-solutions',
    element: <MainLayout><ChallengesSolutions /></MainLayout>,
  },
  {
    path: '/execution',
    element: <MainLayout><Execution /></MainLayout>,
  },
  {
    path: '/budget',
    element: <MainLayout><Budget /></MainLayout>,
  },
  {
    path: '/conclusion',
    element: <MainLayout><Conclusion /></MainLayout>,
  },
  {
    path: '/feedback',
    element: <MainLayout><Feedback /></MainLayout>,
  },
]);

export default router; 