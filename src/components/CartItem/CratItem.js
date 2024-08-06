import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';
import CommonModal from '../Model/CommonModal';

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartQuantity } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const handleIncreaseQuantity = () => {
    updateCartQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateCartQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="price">₹ {item.price.toFixed(2) * item.quantity}</p>
        <div className="quantity-controls">
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <div >

        <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
        <button className="buy-button" onClick={() => setShowModal(true)}>Buy</button>
        </div>

      </div>
    </div>
   {showModal && <CommonModal name='Place Order Ui' onClose={handleCloseModal}/>}
    </div>
  );
};

export default CartItem;
