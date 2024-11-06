import React, { useState ,useEffect} from 'react';
import './Viewcart.css';
import { CartContext } from "../App"
import {useContext} from 'react'

// Cart component takes cart and setCart as props and returns cart display and total amount
const Viewcart = () => {
  const {cart,setCart}= useContext(CartContext)
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])

  return (
    <>
      <h1 className='cart-heading'>Cart Product</h1>
      
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <div className="cart-product">
              <div className="img">
                <img src={product.pic} alt="" />
              </div>
              <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs:{product.amt}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <h2 className='cart-amt'>Total Amount Rs:{total}</h2>
    </>
  );
};

export default Viewcart;