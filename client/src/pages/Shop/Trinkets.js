import React from "react";
import { TRINKETPRODUCTS } from "../../pages/Shop/TrinketsPages";
import { Product } from "./Product";
import "../../CSS/ProductsPages.css";

const Trinkets = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Trinkets</h1>
      </div>
      <div className="items">
        {TRINKETPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Trinkets;
