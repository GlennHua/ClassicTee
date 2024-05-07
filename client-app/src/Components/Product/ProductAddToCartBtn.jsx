import React from 'react'

const ProductAddToCartBtn = (props) => {
    
    return(
        <button 
            className='add-to-cart-btn'
            onClick={props.handleAddToCart}
        >
            <p>Add to Cart</p>
        </button>
    )
}

export default ProductAddToCartBtn