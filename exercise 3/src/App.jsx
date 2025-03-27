import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const handleQuantityChange = (index, newQuantity) => {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) =>
        i === index ? { ...order, quantity: newQuantity } : order
      )
    );
  };

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        
        {
          orders.map((order, index) => (
            <OrderCard key={index} order={order} index={index} onQuantityChange={handleQuantityChange} ></OrderCard>
          ))
        } 
      </div>

      <CheckoutButton total={totalQuantity}></CheckoutButton>
    </>
  );
}
