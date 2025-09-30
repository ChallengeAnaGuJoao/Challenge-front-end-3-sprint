import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
