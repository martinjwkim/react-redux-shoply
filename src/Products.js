import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";

function Products() {
  const products = useSelector(st=>st.products);
  const cart = useSelector(st=>st.cart);

  const listOfProducts = () => (
    products.map((product) =>
      <ProductCard key={product.id} product={product}/>
    )
  );

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Shoply Products
          </CardTitle>
          <CardText>
            You have {cart.length} items in your cart!
          </CardText>
        </CardBody>
        <ListGroup>
          {listOfProducts()}
        </ListGroup>
      </Card>
    </div>
  )
}

export default Products