import React from "react";
import { PORCELANPRODUCTS } from "../../pages/Shop/pagelayouts/PorcelanPages";
import { Product } from "./Product";
import "../../CSS/ProductsPages.css";

const Porcelan = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Porcelan</h1>
      </div>
      <div className="items">
        {PORCELANPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Porcelan;
