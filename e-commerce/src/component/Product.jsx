import React, { useState, useContext } from 'react';
import { CartContext } from "../App";
import Viewproduct from './Viewproduct';
import './product.css'

const Product = ({ product }) => {
  const [showViewProduct, setShowViewProduct] = useState();
  const { cart, setCart } = useContext(CartContext);
  const [hide, setHide] = useState()

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  const handleClick = () => {
    setShowViewProduct(!showViewProduct);
  };

  return (
    <div className='product' onClick={handleClick}>
  
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
          </div>
        </div>
        
      {showViewProduct && (
        <Viewproduct product={product} cart={cart} addCart={addCart} removeCart={removeCart} />
      )}
    </div>
  );
};

export default Product;