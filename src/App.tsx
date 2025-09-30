import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contato } from "./pages/contato"
import { NotFound } from "./pages/not-found"

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
