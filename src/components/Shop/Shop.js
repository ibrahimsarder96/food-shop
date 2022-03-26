import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css'
const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart)
  useEffect( () =>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setFoods(data))
  },[]);
  const handleAddToCart = (food) =>{
    // console.log(food)
    const newCart = [...cart, food];
    setCart(newCart)
  }
  return (
    <div className='shop-container'>
      <div className="foods-container">
     {
       foods.map(food => <Food 
        key={food.id}
        food={food}
        handleAddToCart={handleAddToCart}
        ></Food>)
     }
      </div>
      <div className="cart-container">
      <Cart key={cart.id} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;