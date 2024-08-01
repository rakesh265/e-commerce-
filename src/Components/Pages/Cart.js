import React, { useContext, useState } from "react";
import { cartContext } from "../App";
import "../Styles/Cart.css"

const Cart = () => {
  const { CartItems, removeFromCart } = useContext(cartContext);

  const [quantities, setQuantities] = useState(
    CartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] + delta, 1)
    }));
  };

  const totalPrice = CartItems.reduce((total, item) => 
    total + item.price * (quantities[item.id] || 1), 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {CartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {CartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={quantities[item.id] <= 1} 
                    >
                      -
                    </button>
                    <span>Quantity: {quantities[item.id]}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
