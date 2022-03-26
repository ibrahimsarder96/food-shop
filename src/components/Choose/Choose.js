import React, { useState } from 'react';

const Choose = ({choose}) => {
  const [food, setFood] = useState([])
  for(const item of choose){
    setFood(item)
  }
  return (
    <div>
      <h3>{food}</h3>
    </div>
  );
};

export default Choose;