import React from "react";
import { PRODUCTS } from "../../pages/Shop/pagelayouts/ProductPages";
import { Product } from "./Product";

const Clothing = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Clothing</h1>
      </div>
      <div className="items">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Clothing;
