import React, { useContext } from "react";
import { CartContext } from "../Context-Reducer/CartContext";

function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: product.id });
  };


  const handleDecrement = () => {
  if (product.quantity <= 1) {
    dispatch({ type: "REMOVE", id: product.id });
  } else {
    dispatch({ type: "DECREMENT", payload: product.id });
  }
};


  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button className="rounded-circle px-2" onClick={handleDecrement}>
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button className="rounded-circle px-2" onClick={handleIncrement}>
            <b>+</b>
          </button>
     
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
