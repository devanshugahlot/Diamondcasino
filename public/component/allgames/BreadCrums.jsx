import React from "react";
// import arrow_icon from "../Assets/breadcrum_arrow.png";

function BreadCrums({ product }) {
  // Check if the 'product' object and 'category' property are defined
  if (!product || !product.category) {
    console.error(
      "Error: 'product' object or 'category' property is undefined",
      product
    );
    return null;
  }

  return (
    <div className="breadcrum">
      home 
      <span>
        {product.category} 
      </span>
      <p>{product.name}</p>
    </div>
  );
}

export default BreadCrums;
