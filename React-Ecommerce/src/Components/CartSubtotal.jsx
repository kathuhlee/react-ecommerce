import React, { useEffect } from 'react';

export function CartSubtotal ({cart, total, setTotal}) {

    
    const itemPrice = cart.reduce((car,cart) => car + cart.Price * cart.count, 0 )
    
    useEffect(() => {
        setTotal(itemPrice)
    }, [(itemPrice)])
    
    return (
        <div>
            <p>Subtotal: ${itemPrice.toFixed(2)}</p>
        </div>
    );
}


