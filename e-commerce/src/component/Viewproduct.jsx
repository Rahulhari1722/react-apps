import React, { useState } from 'react';
import Viewproduct from './Viewproduct';

const Product = ({ product, cart, addCart, removeCart }) => {
  const [showViewProduct, setShowViewProduct] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setShowViewProduct(true);
    setHide(true);
  };

  if (hide) {
    return (
      <Viewproduct product={product} cart={cart} addCart={addCart} removeCart={removeCart} />
    );
  }

  return (
    <div>
      <div>
        <div className="img">
          <img src={product.pic} alt={product.name} />
        </div>
        <div className="details">
          <h3>{product.name.length > 18 ? product.name.substring(0, 17) + "..." : product.name}</h3>
          <p>Price Rs:{product.amt}</p>
          {cart.some((c) => c.id === product.id) ? (
            <button onClick={removeCart} className='btnRemove'>
              Remove from Cart
            </button>
          ) : (
            <button onClick={addCart}>
              Add to Cart
            </button>
          )}
          <button onClick={handleClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;