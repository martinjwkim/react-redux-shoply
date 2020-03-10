import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { Card, CardBody, CardTitle, CardText, ListGroup } from "reactstrap";

function Cart() {
  const cart = useSelector(st=>st.cart);

  let itemsInCart = [];

  cart.forEach(product => {
    const ids = itemsInCart.map(item=>item.id)
    const id = ids.find(id => id===product.id)
    if (id){
      let product = itemsInCart.find(product=> id===product.id)
      product.count = product.count + 1 
    } else {
      itemsInCart.push({...product, count: 1})
    }
  })

  const listOfProducts = () => (
    itemsInCart.map((product) =>
      <ProductCard key={product.id} product={product}/>
    )
  );

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Your Cart
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

export default Cart