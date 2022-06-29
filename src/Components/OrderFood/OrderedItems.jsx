import React from "react";
import Itemcount from "./Itemcount";

const OrderedItems = ({ items,handleQty }) => {
  return (
    <>
      {items.map((item) => (
        <div
        key={item.id}
          style={{
            width: "200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{item.title}</p>
          <p>&#8377;{item.price_per_item}</p>
          <div>
            <Itemcount item={item}
            handleQty={handleQty}
            />
            
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderedItems;
