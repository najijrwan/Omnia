import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { uploadCategoriesToFirestore } from "./scripts/uploadCategories";


function App() {
  const handleUpload = async () => {
    await uploadCategoriesToFirestore();
  };
  return (
    <Router>
      <Navbar />
      <MainContent />
      <div>
        <h1>Upload Categories</h1>
        <button onClick={handleUpload} className='bg-base-1 cursor-pointer'>Upload Now</button>
      </div>
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
