import React from 'react'

export default function CartItem({cartItem, cart, editCart}) {

    function removeItem() {
        editCart([]);
    };

    function decrease() {

        const newState = cart.map(item => {

        if (item.id === cartItem.id) { 
            return {...item, count: cartItem.count - 1};
              }
        
            return item;
            });
        
            editCart(newState);
    };

    function increase() {

        const newState = cart.map(item => {

            if (item.id === cartItem.id) { 
              return {...item, count: cartItem.count + 1};
            }

            return item;
          });
      
          editCart(newState);
    };

  return (
    <div>
        <div className="cart-item-container">
            
            <img className="book-image-cart" src={cartItem.Image} />
            <div className="cart-item-info">
            <p>{cartItem.Name}</p>
            <p>${cartItem.Price}</p>
            <button className="change-quantity" onClick={decrease}> - </button>
            <button className="change-quantity" onClick={increase}> + </button>
            <p>Quantity: {cartItem.count}</p>
            </div>
            
        </div>
        <button onClick={removeItem}>Clear entire cart</button>
    </div>
    
  )
}
