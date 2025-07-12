import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CartContext } from "../Context-Reducer/CartContext";
import Rating from "./Rating";

const FilterProduct = () => {
  const { productDispatch, productState } = useContext(CartContext);

  const { byStock, byFastDelivery, sort, byRating } = productState;

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      <div className="fil">
        <span>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id="inline-1"
            onChange={() =>
              productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
            }
            checked={sort === "lowToHigh"}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id="inline-2"
            onChange={() =>
              productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
            }
            checked={sort === "highToLow"}
          />
        </span>
        {/* <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id="inline-3"
            onChange={() =>
              productDispatch({ type: "FILTER_BY_STOCK" })
            }
            checked={byStock}
          />
        </span> */}
        {/* <span>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id="inline-4"
            onChange={() =>
              productDispatch({ type: "FILTER_BY_DELIVERY" })
            }
            checked={byFastDelivery}
          />
        </span> */}
        <span>
          <label style={{ paddingRight: 10 }}>Rating: </label>
          <Rating
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span>
        <Button
          variant="light"
          onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterProduct;