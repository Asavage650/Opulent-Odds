import React from "react";
import { PRODUCTS } from "../../pages/Shop/ProductPages";
import { Product } from "./Product";

const Furniture = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Furniture</h1>
      </div>
      <div className="items">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Furniture;
