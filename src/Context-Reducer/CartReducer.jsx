export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    }
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.id),
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "INCREMENT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        sort: "",
      };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
