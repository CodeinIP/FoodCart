import React from "react";

const Itemcount = ({
  item,
  handleQty,
}) => {
    const style1 = {
        border:"none",
        backgroundColor:"orange",
        color:"white",
        borderRadius:"50%",
        padding:"5px 9px",
        cursor:"pointer"
    }
  return (
    <>
      <button style={style1} onClick={() => handleQty(item.id, 1)}>+</button>
      <span>{item.count}</span>
      <button style={style1} disabled={item.count == 0} onClick={() => handleQty(item.id, -1)}>
        -
      </button>
    </>
  );
};

export default Itemcount;
