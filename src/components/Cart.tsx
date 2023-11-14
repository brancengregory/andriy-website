import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
