
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import Choose from '../Choose/Choose';

const Cart = ({cart}) => {
  const [single, setSingle] = useState([]);
  
  const handleChooseItem = (cart) =>{
    const newFood = [...single, cart]
    setSingle(newFood)
  }
  const handleRemoveItem = (cart) =>{
    
  }
  return (
    <div className='cart'>
      <h3>Selected Foods</h3>
      {
        cart.map((item) =>(<p key={item.id}><img src={item.img} alt=''/> <span className='title'>{item.name}</span>  <span> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span></p>))
      }
      {
        single.map(choose => <Choose key={choose.id} choose={choose}></Choose>)
      }
      <button className='choose-btn' onClick={() => handleChooseItem(cart)}><p>CHOOSE 1 FOR ME</p></button>
      <button className='choose-btn' onClick={() => handleRemoveItem()}><p>CHOOSE AGAIN</p></button> 
    </div>
  );
};

export default Cart;