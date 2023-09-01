import React, { useContext } from 'react';
import { Shopper } from './Shopctx';

function CartProduct(props) {
    const { id, productName, description, productImage, price } = props.data;
    const { addToCart, cartProducts, removeFromCart } = useContext(Shopper);
    console.log(id)
    return (
        <div className='Cart-Product'>
            <img alt="product" src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>{description}</p>
                <p>${price}</p>
                <div className='quanity'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartProducts[id]} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>

        </div>
    )
}

export default CartProduct