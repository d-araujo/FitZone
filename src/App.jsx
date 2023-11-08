import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Login from "./pages/Login"
import Produto from "./pages/Produto"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/produto" element={<Produto/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App