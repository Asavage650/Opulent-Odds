import React from "react";
import {
  FURNITUREPRODUCTS,
  PRODUCTS,
} from "../../pages/Shop/pagelayouts/FurniturePages";
import { Product } from "./Product";
import "../../CSS/ProductsPages.css";

const Furniture = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Furniture</h1>
      </div>
      <div className="items">
        {FURNITUREPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Furniture;
