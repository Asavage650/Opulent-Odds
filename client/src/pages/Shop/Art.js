import React from "react";
import { PRODUCTS } from "../../pages/Shop/pagelayouts/ProductPages";
import { Product } from "./Product";
import "../../CSS/ProductsPages.css";

const Art = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Art</h1>
      </div>
      <div className="items">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Art;
