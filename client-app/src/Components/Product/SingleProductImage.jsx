import React from 'react'

const SingleProductImage = (props) => {

    return (
        <div className='column'>
            <div className='product-image-container'>
                <img 
                    src= {props.imageURL}
                    alt= {props.title}
                    className='product-image' 
                />
            </div>
        </div>
    )
}

export default SingleProductImage