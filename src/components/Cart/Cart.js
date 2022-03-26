
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({cart}) => {
  const handleChooseItem = (cart) =>{
    console.log(cart)
  }
  return (
    <div className='cart'>
      <h3>Selected Foods</h3>
      {
        cart.map((item) =>(<p key={item.id}><img src={item.img} alt=''/> <span className='title'>{item.name}</span>  <span> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span></p>))
      }
      <button className='choose-btn' onClick={() => handleChooseItem(cart)}><p>CHOOSE 1 FOR ME</p></button>
      <button className='choose-btn'><p>CHOOSE AGAIN</p></button> 
    </div>
  );
};

export default Cart;