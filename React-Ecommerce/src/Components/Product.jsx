import React from 'react';
import { Link } from 'react-router-dom';
import { UpdateCartButton } from './UpdateCartButton';

export function Product ({product, index, editCart, cart}) {



    return (
        <div className="product">
            <div className="main-page">
                <h4 className="book-title">{product.Name}</h4>
                <Link to={`/products/${index}`}>
                    <img className="book-img" src={product.Image}/>
                </Link>
                <p>${product.Price}</p>
                <UpdateCartButton
                     item={product} cart={cart} editCart={editCart}
                />
            </div>
        </div>
    );
}




