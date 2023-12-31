import React from "react";
import { VinylPRODUCTS } from "../../pages/Shop/pagelayouts/VinylPages";
import { Product } from "./Product";
import "../../CSS/ProductsPages.css";

const Vinyl = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Vinyl</h1>
      </div>
      <div className="items">
        {VinylPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Vinyl;
