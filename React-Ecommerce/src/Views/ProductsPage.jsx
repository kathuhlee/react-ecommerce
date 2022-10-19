import React, { useState } from 'react';
import data from '../data.json';
import { Product } from '../Components/Product';



export function ProductsPage ({cart, editCart}) {
  const [products, setProducts] = useState(data);

  return (
    <div className="product-grid">
    {products.map((item, key) => {

      return (
        <div key={key}>
        <Product
          product = {item}
          index = {key}
          editCart = {editCart}
          cart = {cart}

          
        />
        
        </div>
      );
    })}
    </div>
  )
}

