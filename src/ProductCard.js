import React from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart, delete_from_cart } from './actions';
import { ListGroupItem, CardLink, Button, CardText } from "reactstrap";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, name, price, count } = product;

  return (
    <ListGroupItem>
      <CardLink href={`/products/${id}`} style={{ textTransform: "capitalize" }}>{name}</CardLink>
      <p>${price}</p>
      {count ? <CardText>Quantity: {count}</CardText> : null}
      <Button color="primary" size="sm" onClick={() => dispatch(add_to_cart(product))}>Add to Cart</Button>
      <Button color="danger" size="sm" onClick={() => dispatch(delete_from_cart(id))}>Remove from Cart</Button>
    </ListGroupItem>
  );
}

export default ProductCard;