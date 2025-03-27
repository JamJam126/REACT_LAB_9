import React, { useState } from "react";

export default function OrderCard(props) {
  const { order, index, onQuantityChange } = props;

  const [quantity, setQuantity] = useState(order.quantity);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(index, newQuantity); // Update parent with the new quantity
        return newQuantity;
      });
    }
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(index, newQuantity); // Update parent with the new quantity
      return newQuantity;
    });
  };

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price}</small>
      </div>

      <div className="order-quantity">
        <div
          className={`${quantity === 0 ? "order-button disable" : "order-button"}`}
          onClick={handleDecrease}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>
          +
        </div>
      </div>
    </div>
  );
}
