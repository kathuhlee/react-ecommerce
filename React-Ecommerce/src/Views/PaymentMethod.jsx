import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentMethod() {
  return (
    <div>
        <h1 className="payment-title">Payment Method</h1>
        <div className="payment-info">
        <h1>Checkout</h1>
            <form action="process.php" />
            <div>
                <label htmlFor="text">Name</label>
                <input type="text" name="name" id="name" ></input>
            </div>
            <div className="personal-details">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" ></input>
            </div>
            <div className="address">
                <label htmlFor="text">Address</label>
                <input type="address" name="address" id="address" ></input>
            </div>
            <div className="credit-card">
                <label htmlFor="text">Name on Card</label>
                <input type="text" name="text" id="text" ></input>
            </div>
            <div className="zip">
                <label htmlFor="text">Address</label>
                <input type="zip" name="zip" id="zip" ></input>
            </div>
            <div className="credit-card">
                <label htmlFor="text">Credit Card Number</label>
                <input type="credit-card" name="credit-card" id="credit-card" ></input>
            </div>
            <div className="CVV">
                <label htmlFor="text">CVV</label>
                <input type="cvv" name="cvv" id="cvv" ></input>
            </div>
        <Link to="PaymentConfirmation">
            <button type="submit" className="payment-submit">Submit Order</button>
        </Link>
        </div>
    </div>
  )
}
