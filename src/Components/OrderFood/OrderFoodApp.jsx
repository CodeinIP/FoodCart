import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OrderedItems from "./OrderedItems";
import TotalPrice from "./TotalPrice";
const foodList = [
  {
    id: 1,
    title: "Noodles",
    price_per_item: 30,
    count: 1,
  },
  {
    id: 2,
    title: "Biryani",
    price_per_item: 90,
    count: 2,
  },
  {
    id: 3,
    title: "Chips",
    price_per_item: 10,
    count: 3,
  },
];
const OrderFoodApp = () => {
  const [items, setItems] = useState(foodList);
  const handleTotal = (items) => {
    return items.reduce(
      (acc, item) => acc + item.count * item.price_per_item,
      0
    );
  };
  const handleQty = (id, qty) => {
    let res = items.map((ele) =>
      ele.id == id ? { ...ele, count: ele.count + qty } : ele
    );
    setItems(res);
  };
  return (
    <div
      style={{
        background: "lightgray",
        padding: "10px",
        width: "250px",
        margin: "auto",
      }}
    >
      <h1>Order Food</h1>
      <OrderedItems items={items} handleQty={handleQty} />
      <TotalPrice total={handleTotal(items)} />
    </div>
  );
};

export default OrderFoodApp;
