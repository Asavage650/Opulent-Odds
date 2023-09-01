import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Shop/pagelayouts/ProductPages';
import { VinylPRODUCTS } from '../Shop/pagelayouts/VinylPages';
import { TRINKETPRODUCTS } from '../Shop/pagelayouts/TrinketsPages';
import { FURNITUREPRODUCTS } from '../Shop/pagelayouts/FurniturePages';
import { MEMOROBILIAPRODUCTS } from '../Shop/pagelayouts/Sportspages';


export const Shopper = createContext(null);


const getCart = () => {
    const allProducts = [...PRODUCTS, ...VinylPRODUCTS, ...TRINKETPRODUCTS, ...FURNITUREPRODUCTS, ...MEMOROBILIAPRODUCTS]
    let cart = {}
    for (let i = 0; i < allProducts.length; i++) {
        cart[i] = 0
    }
    // for (let i = 0; i < VinylPRODUCTS.length; i++) {
    //     cart[i] = 0;

    // }
    // for (let i = 0; i < TRINKETPRODUCTS.length; i++) {
    //     cart[i] = 0;

    // }
    // for (let i = 0; i < FURNITUREPRODUCTS.length; i++) {
    //     cart[i] = 0;

    // }
    return cart;
}

function Shopctx(props) {
    const totalCart = getCart()
    const [cartProducts, setCartProducts] = useState(totalCart);
    console.log(cartProducts)
    const addToCart = (id) => {

        setCartProducts((prev) => (

            { ...prev, [id]: prev[id] + 1 }))
    }

    const removeFromCart = (id) => {
        console.log(id)
        if (cartProducts[id] === 0) {
            return
        }
        console.log(cartProducts)
        setCartProducts((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const ShopValue = { cartProducts, addToCart, removeFromCart }

    // console.log(cartProducts)

    return <Shopper.Provider value={ShopValue}>{props.children}</Shopper.Provider>

}

export default Shopctx