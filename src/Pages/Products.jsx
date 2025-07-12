import React, { useContext } from "react";
import { CartContext } from "../Context-Reducer/CartContext";
import Product from "../Component/Product";
import FilterProduct from "../Component/FilterProduct";

const Products = () => {
  const { productState } = useContext(CartContext);
  const { products, sort, byStock, byFastDelivery, byRating, searchQuery } = productState;

  const transformProduct = () => {
    let sortedProducts = [...products];

    if (sort) {
      sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating
);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())  
      );
    }

    return sortedProducts;
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-4 border p-3 rounded bg-white">
            <div className="row row-cols-1 row-cols-md-3">
              {transformProduct().map((p) => (
                <Product key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border rounded bg-white">
            <FilterProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
