import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
