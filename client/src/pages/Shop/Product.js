import React, { useContext } from "react";
import { Shopper } from '../Context/Shopctx'


export const Product = (props) => {
  const { id, productName, description, productImage, price } = props.data;
  const { addToCart, cartProducts } = useContext(Shopper);
  const cartProductAmount = cartProducts[id]
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
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartProductAmount > 0 && <> ({cartProductAmount}) </>}
      </button>
    </div>
  );
};

export default Product