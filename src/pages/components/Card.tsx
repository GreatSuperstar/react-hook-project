import React from 'react';

const Card = ({ name, price, inventory, url, type }) => {

    return (
        <div className='card-body'>
            <h1>
                {name}
            </h1>
            <img src={url} className="w-100" />
            <h3>Price: {price}$</h3>
            {inventory === '' ? (
                <></>
            ) : (
                <p>Inventory: {inventory}</p>
            )}
            {type === 1 ? (
                <button>Add cart</button>
            ) : (
                <button>Buy Now</button>
            )}
        </div>
    );
};

export default Card;
