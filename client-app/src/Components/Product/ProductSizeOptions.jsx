import React, { useEffect, useState } from 'react'
import ProductSizeBtn from './ProductSizeBtn'
import ProductAddToCartBtn from './ProductAddToCartBtn'
import { addSingleItemToCart } from '../../actions/cartActionCreator'
import { useDispatch } from 'react-redux'

const ProductSizeOptions = (props) => {

    const [sizeOptions, setSizeOptions] = useState([])
    const [selectedSize, setSelectedSize] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.currentProduct.sizeOptions && props.currentProduct.sizeOptions.length > 0) {
            setSizeOptions(props.sizeOptions)
        }
    }, [props.sizeOptions])

    const handleSizeSelection = (size) => {
        setSelectedSize(size)
    }

    const handleAddToCart = () => {
        selectedSize ? 
            addSingleItemToCart(dispatch, props.currentProduct, selectedSize) 
                : alert('Please select a size')
    }

    return(
        <>
            <div className='product-size' >
                <div className='size' >SIZE</div>
                <div className='star' >*</div>
            </div> 

            <div className='size-options'>
                {
                    sizeOptions.length > 0 && sizeOptions.map((option) => {
                        return (
                            <ProductSizeBtn 
                                key={option.id}
                                option={option.label}
                                handleSizeSelection={handleSizeSelection}
                            />
                        )
                    })
                } 
            </div>   

            <ProductAddToCartBtn 
                handleAddToCart={handleAddToCart}
            />  

        </>

    )
}

export default ProductSizeOptions