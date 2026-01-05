import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome.jsx'
import Image from './Logo'
import About from './About.jsx'
import Table from './Table.jsx'
import ContactMe from './ContactMe.jsx'
import GitHubLink from './GitHubLink.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-right">
        <ContactMe />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Image />
      </div>
      <h1>Vite + React</h1>
      <GitHubLink />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome />
      <About />
      <Table />
      
    </>
  )
}

export default App
