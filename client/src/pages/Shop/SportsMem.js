import React from "react";

import {
  MEMOROBILIAPRODUCTS,
  PRODUCTS,
} from "../../pages/Shop/pagelayouts/Sportspages";

import { PRODUCTS } from "./pagelayouts/ProductPages";

import { Product } from "./Product";

const SportsMem = () => {
  return (
    <div className="shop-pages">
      <div className="page-header">
        <h1>Sports Memorobilia</h1>
      </div>
      <div className="items">
        {MEMOROBILIAPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default SportsMem;
