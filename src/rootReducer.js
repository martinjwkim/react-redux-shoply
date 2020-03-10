import { PRODUCT_ADD, PRODUCT_DELETE, CART_ADD, CART_DELETE } from "./actionTypes";
import data from "./data.json"

// turn json data into array with serial code as id
let products = [];
for (let key in data.products) {
  products.push({ ...data.products[key], id: key })
}

const LS_CART = JSON.parse(localStorage.getItem("cart")) || [];
const INITIAL_STATE = { cart: LS_CART, products };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCT_ADD:
      return {
        ...state,
        products: { ...state.products, [action.id]: action.payload }
      };
    case PRODUCT_DELETE:
      return {
        ...state,
      };
    case CART_ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case CART_DELETE:
      const product = state.cart.find(product => product.id === action.id);
      const i = state.cart.indexOf(product);
      if (i >= 0) {
        state.cart.splice(i, 1)
      }
      return {
        ...state,
        cart: [...state.cart]
      };
    default:
      console.warn("You spelled an action type wrong:", action.type)
      return state;
  }

}

export default rootReducer;