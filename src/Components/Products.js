import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Shoes from "./../Shoes.json"
console.log(Shoes)
function Products() {

    return (
      <div>
          <h1>These are Products</h1>
         <div className="productContainer">
         {Object.keys(Shoes).map(keyName=>{
           const shoe = Shoes[keyName]
            return <Link to={`/products/${keyName}`} key={keyName}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} height={150} alt="shoe"/>
            </Link>
          })}
         </div>
      </div>
    );
  }
  
  export default Products;