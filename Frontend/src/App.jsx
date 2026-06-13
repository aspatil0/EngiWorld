// import { useState } from 'react'
// import Login from './Pages/Login'
// import viteLogo from './assets/vite.svg'
// import SelectionPage from './Pages/SelectionPage'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Login/>
//       {/* <SelectionPage /> */}
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
