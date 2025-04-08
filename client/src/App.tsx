import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config'
import { logAction } from './utils/logger'

function App() {
  const [count, setCount] = useState(0)

  const handleCountClick = () => {
    logAction('increment_count', { from: count, to: count + 1 })
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCountClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <p>API URL: {config.apiUrl}</p>
        <p>Environment: {config.isProduction ? 'Production' : 'Development'}</p>
      </div>
    </>
  )
}

export default App
