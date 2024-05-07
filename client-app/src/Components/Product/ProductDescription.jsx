import React from 'react'
import ProductSizeOptions from './ProductSizeOptions'

const ProductDescription = (props) => {

    return(      
        <div className='column'>
            <div className='product-info-container' >

                    <h3 className='product-name'>{props.currentProduct.title}</h3>
    
                    <p className='product-price'>
                        { 
                            typeof(props.currentProduct.price) == 'number' ? 
                            `$${Number(props.currentProduct.price).toFixed(2)}` : 'Price not available' 
                        }
                    </p>
    
                    <p className='product-description'>{props.currentProduct.description}</p>
                
                    <ProductSizeOptions 
                        currentProduct = {props.currentProduct}
                        sizeOptions={props.currentProduct.sizeOptions}
                    />

            </div>
        </div>
    )
}

export default ProductDescription