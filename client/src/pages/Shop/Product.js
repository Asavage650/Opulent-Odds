import React from "react";

export const Product = (props) => {
  const { id, productName, description, productImage, price } = props.data;
  return (
    <div className="product">
      <img alt="product" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add To Cart</button>
    </div>
  );
};
