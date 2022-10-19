import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartSubtotal } from "../Components/CartSubtotal";
import CartItem from "../Components/CartItem";


export function Cart ({cart, editCart}) {
    
    const [total, setTotal] = useState();


    return (
        <div>
            <div className="cart-details">
                <h1 className="cart-title">Cart</h1>
                <h3 className="cart-second-title">Items in Cart</h3>
                    {cart.map((cartItem, key) => {

                        return (
                            <CartItem key={key} cartItem={cartItem} cart={cart} editCart={editCart} />
                                
                            
                        )
                    })}
                
                <h3><CartSubtotal cart={cart} total={total} setTotal={setTotal}/></h3>
                <Link to="PaymentMethod">
                    <h4><button>Proceed to payment</button></h4>
                </Link>
            </div>
            
        </div>
    );
}

