import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import ProductList from './components/Product/ProductList';
import Cart from './components/CartItem/Cart';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
