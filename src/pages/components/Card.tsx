import React from 'react';

const Card = ({name, price, inventory}) => {

  return (
      <div>
          <h1>
              {name}
          </h1>
          <h3>{price}</h3>
          <p>{inventory}</p>
          <button>Add cart</button>
      </div>
  );
};

export default Card;
