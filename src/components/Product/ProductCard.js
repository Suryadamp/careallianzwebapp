import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import SuccessModal from '../Model/SuccessModal';
import './ProductCard.css';
const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
  const { addToCart } = useContext(CartContext);
console.log(product.imageUrl)

const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowModal(true);
    setQuantity(1)
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
   <div>
      <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">₹ {product.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
      {showModal && <SuccessModal name={product.name} onClose={handleCloseModal} />}
      </div>
  );
};

export default ProductCard;
