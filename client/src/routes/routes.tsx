import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import MainLayout from '../components/layout/MainLayout';

// Import auth pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/auth/Profile';
import ProtectedRoute from '../components/auth/ProtectedRoute';

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
  // Auth routes
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <ProtectedRoute><MainLayout><Profile /></MainLayout></ProtectedRoute>,
  },
  
  // Main routes with protection
  {
    path: '/',
    element: <ProtectedRoute><MainLayout><Home /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/home',
    element: <ProtectedRoute><MainLayout><Home /></MainLayout></ProtectedRoute>,
  },
  
  // Section pages with protection
  {
    path: '/executive-summary',
    element: <ProtectedRoute><MainLayout><ExecutiveSummary /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/mission-statement',
    element: <ProtectedRoute><MainLayout><MissionStatement /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/marketing-objectives',
    element: <ProtectedRoute><MainLayout><MarketingObjectives /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/key-performance',
    element: <ProtectedRoute><MainLayout><KeyPerformance /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/swot-analysis',
    element: <ProtectedRoute><MainLayout><SwotAnalysis /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/market-research',
    element: <ProtectedRoute><MainLayout><MarketResearch /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/marketing-strategy',
    element: <ProtectedRoute><MainLayout><MarketingStrategy /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/challenges-solutions',
    element: <ProtectedRoute><MainLayout><ChallengesSolutions /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/execution',
    element: <ProtectedRoute><MainLayout><Execution /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/budget',
    element: <ProtectedRoute><MainLayout><Budget /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/conclusion',
    element: <ProtectedRoute><MainLayout><Conclusion /></MainLayout></ProtectedRoute>,
  },
  {
    path: '/feedback',
    element: <ProtectedRoute><MainLayout><Feedback /></MainLayout></ProtectedRoute>,
  },
]);

export default router; 