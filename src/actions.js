import { PRODUCT_ADD, PRODUCT_DELETE, CART_ADD, CART_DELETE } from "./actionTypes";

export function add_product(payload) {
  return {
    type: PRODUCT_ADD,
    payload
  };
}

export function delete_product(id) {
  return {
    type: PRODUCT_DELETE,
    id
  };
}

export function add_to_cart(payload) {
  return {
    type: CART_ADD,
    payload
  };
}

export function delete_from_cart(id) {
  return {
    type: CART_DELETE,
    id
  };
}