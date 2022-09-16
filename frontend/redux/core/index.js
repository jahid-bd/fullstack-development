const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Define Constants
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CART_ITEMS = "GET_CART";
const ADD_CART_ITEM = "ADD_CART";

// State
const initialProductState = {
  products: ["Head Phone", "Mouse"],
  numberOfProducts: 2,
};
const initialCartState = {
  cartItems: ["Head Phone", "Mouse"],
  numberOfCartItems: 2,
};

// Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return state;

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state;

    case ADD_CART_ITEM:
      return {
        cartItems: [...state.cartItems, action.payload],
        numberOfCartItems: state.numberOfCartItems + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger));

// Action
const getProductAction = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getCartAction = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCartAction = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(getProductAction());
store.dispatch(addProductAction("Keyboard"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("Keyboard"));
