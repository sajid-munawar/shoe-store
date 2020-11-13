import React from "react";
import {NotFound} from "../Components"
import Shoes from "./../Shoes.json"
import { useParams } from "react-router-dom";
function ProductItems() {
  const {id}=useParams();
  const shoe=Shoes[id]
  console.log(shoe)
  // const shoe = Shoes.id
  if (!shoe)
    return <h2>404 Not Found</h2>
  
    return (
      <div>
          <h1>This is Product Item</h1>
          <div><h2>{shoe.name}</h2>
              <img src={shoe.img} height={300} alt="shoe"/></div>
      </div>
    );
  }
  
  export default ProductItems;