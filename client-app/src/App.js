import './App.css';
import Header from './Components/Common/Header';
import ProductDetails from './Screens/ProductScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MiniCart from './Components/MiniCart/MiniCart';
import { useState } from 'react';

function App() {

  const [showMiniCart, setShowMiniCart] = useState(false)

  const handleMyCartClick = () => {
    setShowMiniCart(!showMiniCart)
  }

  return (
    <Router>
      <ToastContainer position = 'bottom-right' theme = 'colored' />
      <Header handleMyCartClick = { handleMyCartClick } />
      {
        showMiniCart && <MiniCart />
      }
      <Routes>
        <Route path='/' element = { <ProductDetails/> } />
      </Routes>
    </Router>
  );
}

export default App;
