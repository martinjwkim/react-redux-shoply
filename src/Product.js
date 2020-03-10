import React from 'react';
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import { add_to_cart, delete_from_cart } from './actions';


function Product() {
  const products = useSelector(st => st.products);
  const cart = useSelector(st => st.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = products.find(product => id === product.id)
  const { image_url, name, price, description } = product

  let count = 0;
  cart.forEach(product => {
    if (id === product.id) {
      count++
    }
  })


  return (
    <div className="container">
      <Card>
        <CardImg top width="50%" src={image_url} alt={name} />
        <CardBody>
          <CardTitle className="font-weight-bold text-center" style={{ textTransform: "capitalize" }}>
            Details for Product: {name}
          </CardTitle>
          <CardText>
            Price: ${price}
          </CardText>
          <CardText>
            Description: {description}
          </CardText>
          <CardText>
            Quantity in Cart: {count}
          </CardText>
          <Button color="primary" size="sm" onClick={() => dispatch(add_to_cart(product))}>Add to Cart</Button>
          <Button color="danger" size="sm" onClick={() => dispatch(delete_from_cart(id))}>Remove from Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Product