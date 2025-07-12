import React, { createContext, useEffect, useReducer } from 'react'
import { CartReducer, productReducer } from '../Context-Reducer/CartReducer'
import Data from '../Data';

export const CartContext = createContext();

const initialState = {
  cart: [],
  searchQuery: "",
};

const productInitialState = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  sort: "",
  products: [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);


  const [productState, productDispatch] = useReducer(productReducer, productInitialState);


  useEffect(() => {
    productDispatch({ type: "SET_PRODUCTS", payload: Data.products });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        searchQuery: state.searchQuery,
        dispatch,
        productState,
        productDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
