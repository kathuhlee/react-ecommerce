import React from 'react'; 


export function UpdateCartButton ({item,cart,editCart}) {


    const addItem = () => {
        let cart2 = [...cart];
        let id = item.id;
        let currentItem = cart2.find(cartItem => cartItem.id === id );
        
        if (!currentItem) {
            item.count = 1
            cart2.push(item)
        } else {
            currentItem.count++
        }
        editCart(cart2)
    }



return(
        <button onClick={addItem}>Add to Cart</button>
)
}