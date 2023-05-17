import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'reflect-metadata'
import { useInjection } from 'inversify-react'
import testViteService from './testService'
import { Services } from './services'

function App() {
  const [count, setCount] = useState(0)
  const testViteService = useInjection<testViteService>(Services.testViteService)

  useLayoutEffect(() => {
    const testVite = testViteService.onDidChangeName.subscribe((name) => {
      console.log(name)
    })

    return () => {
      testVite.unsubscribe()
    };
  }, [])

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
        <button onClick={() => {
          setCount((count) => count + 1)
          testViteService.setName('test')
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
