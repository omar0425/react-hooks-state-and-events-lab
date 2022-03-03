import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("");
  function handleClick() {
    setCart((cart) => !cart);
    console.log(cart);
  }
  const itemClass = cart ? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button className='add' onClick={handleClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
