import React, { useState } from 'react';

const CartItem = ({ name, volume, price }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart-item">
      <img src={images/${name.toLowerCase().replace(' ', '-')}.png} alt={name} />
      <div>{name}</div>
      <div>{volume}</div>
      <div>
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        {quantity}
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <div>Rs. {price * quantity}</div>
      <button>Remove all</button>
      <button>Save for later</button>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <CartItem name="Apple Juice" volume="250ml" price={250} />
      <CartItem name="Grapes Juice" volume="250ml" price={200} /> {/* Price assumed as it's not visible */}
      <button>Previous</button>
      <button>Save & Next</button>
    </div>
  );
};

export default ShoppingCart;