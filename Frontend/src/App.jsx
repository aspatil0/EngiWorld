import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionPage from './Pages/SelectionPage'
import Navbar from './Components/Navbar'
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/select" element={
          <div className="min-h-screen bg-bg">
            <div className="pt-28 pb-10 px-7 flex items-start justify-center min-h-screen">
              <SelectionPage />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
