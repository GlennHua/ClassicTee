import React  from 'react'
import { useSelector } from 'react-redux'
import SingleProductImage from './SingleProductImage'
import ProductDescription from './ProductDescription'

const ProductDetails = () => {

    const { currentProduct } = useSelector(state => state.SingleProductMockReducer)

    return (
        <div className='products-details-screen-grid-container'>

                <SingleProductImage 
                    imageURL={currentProduct.imageURL}
                    title={currentProduct.title}
                />

                <ProductDescription
                    currentProduct={currentProduct}
                />
                
        </div>
    )
}

export default ProductDetails