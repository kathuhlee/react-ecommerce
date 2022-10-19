import React from 'react';
import data from '../data.json';
import { useParams } from "react-router-dom";
import { UpdateCartButton } from '../Components/UpdateCartButton';

export function ProductDetails (props) {

    const products = data;

    const { id } = useParams();

    console.log(data[id]); 
    const productInfo = data[id];
 
    
    return (
        <div className="product-details">
            <div>
                <h3>{productInfo.Name}</h3>
                <img src={productInfo.Image}/>
                <p><strong>Price:</strong> ${productInfo.Price}</p>
                <p><strong>Quantity Remaining:</strong> {productInfo.Inventory}</p>
                <p>{productInfo.Description}</p>
                <p><strong>Category:</strong> {productInfo.Category}</p>
                <p><strong>Manufacturer:</strong> {productInfo.Manufacturer}</p>
                <p><strong>Serial Number:</strong> {productInfo.SerialNumber}</p>
            </div>
            
            <UpdateCartButton
                item={productInfo} cart={props.cart} editCart={props.editCart}
            />
        </div>
)}



