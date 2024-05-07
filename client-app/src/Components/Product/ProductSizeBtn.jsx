import React from 'react'

const ProductSizeBtn = (props) => {

    return(
        <button 
            className='size-btn'
            onClick={() => props.handleSizeSelection(props.option)}
        >
            <p>{props.option}</p>
        </button>
    )
}

export default ProductSizeBtn