import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import "./Home.css"

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/products")
  }

  return (
    <div className='jumbotron home'>
      <div className="container">
        <h1 className='display-3'>Shoply</h1>
        <p className='lead'>All your shopping in one, convenient place</p>
        <button className="btn btn-primary btn-lg" onClick={handleClick}>Start Shopping!</button>
      </div>
    </div>
  );
}

export default Home;
