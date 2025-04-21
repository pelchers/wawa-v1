import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config'
import { logAction } from './utils/logger'
import { wawaTheme } from './styles/wawa-theme'

// Import Navigation component
import Navigation from './components/Navigation'

// Import section components (we'll create these next)
import ExecutiveSummary from './sections/ExecutiveSummary'
import MissionStatement from './sections/MissionStatement'
import MarketingObjectives from './sections/MarketingObjectives'
import SwotAnalysis from './sections/SwotAnalysis'
import MarketResearch from './sections/MarketResearch'
import MarketingStrategy from './sections/MarketingStrategy'
import ExecutionPlan from './sections/ExecutionPlan'
import Budget from './sections/Budget'
import Conclusion from './sections/Conclusion'
import Feedback from './sections/Feedback'

function App() {
  const [count, setCount] = useState(0)

  const handleCountClick = () => {
    logAction('increment_count', { from: count, to: count + 1 })
    setCount((count) => count + 1)
  }

  return <RouterProvider router={router} />;
}

export default App
