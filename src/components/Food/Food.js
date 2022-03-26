import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Food.css'
const Food = ({food, handleAddToCart}) => {
const {name, img, price} = food;
  return (
    <div className='food'>
      <img src={img} alt=""/>
      <div className="food-info">
        <p className='food-name'>{name}</p>
        <p>Food Price: ${price}</p>
      </div>
      <button onClick={() => handleAddToCart(food)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
    </div>
  );
};

export default Food;