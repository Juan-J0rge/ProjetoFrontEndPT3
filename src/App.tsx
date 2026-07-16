import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

import Footer from './container/Footer'
import Cart from './container/Cart'

import EstiloGlobal from './styles'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurants />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
