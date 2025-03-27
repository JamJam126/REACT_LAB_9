import React from "react";
import { useState } from "react";

export default function OrderCard(props, {onQuantityChange}) {
  const [quantity, setQuantity] = useState(props.order.quantity)

  const handleDecrease = () => {

    if (quantity !== 0) setQuantity(quantity - 1)
      
    returnQuantity()
  }

  const handleIncrease = () => {

    setQuantity(quantity + 1)
    returnQuantity()
  }

  const returnQuantity = () => {


    onQuantityChange(props.index, quantity)
  }

  return (
    <div className="order">
      <div>
        <h4>{props.order.product}</h4>
        <small>{props.order.price}</small>
      </div>

      <div className="order-quantity">
        <div className={`${quantity === 0 ? 'order-button disable' : 'order-button'}`} onClick={handleDecrease}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
}
