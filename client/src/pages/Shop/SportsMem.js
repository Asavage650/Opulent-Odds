import React from "react";
import { PRODUCTS } from "./ProductPages";
import { Product } from "./Product";

const SportsMem = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Sports Memorobilia</h1>
      </div>
      <div className="items">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default SportsMem;
