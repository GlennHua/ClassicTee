import React from 'react'

const MiniCartItem = (props) => {

    return(
        <div className='cart-item' >
            <div className='products-details-screen-grid-container'>
                <img 
                    src= {props.item.product.imageURL}
                    alt= {props.item.product.title}
                    className='product-image'
                />

                <div className='cart-item-info'>
                    <p>{props.item.product.title}</p>
                    <p>
                        {`${props.item.qty}x $${props.item.product.price}`}
                    </p>
                    <p>{`Size: ${props.item.size}`}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCartItem