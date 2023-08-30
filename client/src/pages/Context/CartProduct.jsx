import React from 'react'

function CartProduct(props) {
    const { productName, description, productImage, price } = props.data;
    return (
        <div className='Cart-Product'>
            <img alt="product" src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>{description}</p>
                <p>${price}</p>
            </div>

        </div>
    )
}

export default CartProduct