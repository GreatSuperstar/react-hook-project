import React from 'react';

const Card = ({name, price, inventory}) => {

  return (
      <div className='card-body'>
          <h1>
              {name}
          </h1>
          <h3>Price: {price}$</h3>
          <p>Inventory: {inventory}</p>
          <button>Add cart</button>
      </div>
  );
};

export default Card;