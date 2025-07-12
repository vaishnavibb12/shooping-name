import React, { useContext } from "react";
import { CartContext } from "../Context-Reducer/CartContext";
import CartProduct from "../Component/CartProduct";
import { totalItem, totalPrice } from "../Context-Reducer/CartReducer";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p}></CartProduct>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="col-4 ">
            <div className="bg-secondary p-3 text-white">
              <h5>Total Items: {totalItem(cart)}</h5>
              <h5>Total Price: ${totalPrice(cart)} </h5>
              {/* <button className="btn btn-warning">Checkout</button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
