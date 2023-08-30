import React, { useContext } from 'react'
import { PRODUCTS } from './Shop/pagelayouts/ProductPages'
import { VinylPRODUCTS } from './Shop/pagelayouts/VinylPages'
import { TRINKETPRODUCTS } from './Shop/pagelayouts/TrinketsPages'
import { FURNITUREPRODUCTS } from './Shop/pagelayouts/FurniturePages'
import { Shopper } from './Context/Shopctx'
import CartProduct from './Context/CartProduct'
import "../CSS/Cart.css"

function Cart() {
  const { cartProducts } = useContext(Shopper);
  return (
    <div className='cart'>
      <div>

        <h1>
          Your Cart
        </h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((Product) => {
          if (cartProducts[Product.id] !== 0) {
            return <CartProduct data={Product} />
          }
        })}
      </div>
      <div className='cart-items'>
        {VinylPRODUCTS.map((Product) => {
          if (cartProducts[Product.id] !== 0) {
            return <CartProduct data={Product} />
          }
        })}
      </div>
      <div className='cart-items'>
        {TRINKETPRODUCTS.map((Product) => {
          if (cartProducts[Product.id] !== 0) {
            return <CartProduct data={Product} />
          }
        })}
      </div>
      <div className='cart-items'>
        {FURNITUREPRODUCTS.map((Product) => {
          if (cartProducts[Product.id] !== 0) {
            return <CartProduct data={Product} />
          }
        })}
      </div>
    </div>
  )
}

export default Cart