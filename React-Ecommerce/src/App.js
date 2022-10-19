import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { ProductsPage } from './Views/ProductsPage';
import { ProductDetails } from './Views/ProductDetails';
import { Footer } from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaffView } from './Views/StaffView';
import { Cart } from './Views/Cart';
import { SearchBar } from './Views/SearchBar';
import PaymentMethod from './Views/PaymentMethod';
import PaymentConfirmation from './Views/PaymentConfirmation';

function App() {
  const [cart, setCart] = useState([]);



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" exact element=
            {<ProductsPage 
              cart = {cart}
              editCart = {setCart}
            />} />
            <Route path="/products/:id" element={<ProductDetails 
              cart = {cart}
              editCart = {setCart}
            />}></Route>
            <Route path="/cart" element={<Cart 
              cart = {cart}
              editCart = {setCart}
            />} />
            <Route path="/staffview" element={<StaffView 
              cart = {cart}
              editCart = {setCart}
            />} />
            <Route path="/searchbar" element={<SearchBar />} />
            <Route path="/cart/paymentmethod" element={<PaymentMethod />} />
            <Route path="/cart/paymentmethod/paymentconfirmation" element={<PaymentConfirmation />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
