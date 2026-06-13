import { useState } from 'react'

import viteLogo from './assets/vite.svg'
import SelectionPage from './Pages/SelectionPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SelectionPage />
    </>
  )
}

export default App
