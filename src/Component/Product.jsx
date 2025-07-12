import React, { useContext } from "react";
import { CartContext } from "../Context-Reducer/CartContext";
import { FaStar, FaRegStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="col-md-4 mt-2">
      <div className="card h-100">
        <img src={product.thumbnail} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5>${product.price}</h5>
          <p style={{ marginBottom: "0px" }}>
            <strong>{product.description}</strong>
          </p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {product.rating >= star ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>

          {product.inStock ? (
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                if (!isInCart) {
                  dispatch({ type: "ADD", product: product });
                }
              }}
              disabled={isInCart}
            >
              {isInCart ? "Added" : "Add To Cart"}
            </button>
          ) : (
            <button className="btn btn-danger mt-2" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
