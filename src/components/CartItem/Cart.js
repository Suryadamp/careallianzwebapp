import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CratItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div >
      <h2>Shopping Cart</h2>
      { cart.length > 0 ? cart.map(item => (
        <CartItem key={item.id} item={item} />
      )): <h4>No Shopping Cart Items</h4>}
    </div>
  );
};

export default Cart;
