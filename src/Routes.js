import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Home'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import NotFound from './NotFound'

function Routes() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route> 
        <Route exact path="/products"><Products/></Route>
        <Route exact path="/products/:id"><Product/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default Routes;
