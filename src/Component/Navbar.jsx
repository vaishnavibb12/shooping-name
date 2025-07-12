import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context-Reducer/CartContext";
import "../index.css";

const Navbar = () => {
  const { cart, productDispatch } = useContext(CartContext);

  return (
    <>
     <div className="container">
      <div className="d-flex justify-content-between py-3 px-5 bg-secondary text-white">
        <Link to="/" className="navbar-brand fs-4 fw-bolder">
          Shop
        </Link>
        <Link
          to="/cart"
          className="navbar-link fs-5 text-white text-decoration-none"
        >
          <BsCart />
          {cart.length}
        </Link>
      </div>
      {cart.length === 0 && (
  <div className="search">
    <input
      type="text"
      placeholder="search your product"
      onChange={(e) => {
      productDispatch({
  type: "FILTER_BY_SEARCH",
  payload: e.target.value,
});

      }}
    />
  </div>
 
)}
</div>

    </>
  );
};

export default Navbar;
