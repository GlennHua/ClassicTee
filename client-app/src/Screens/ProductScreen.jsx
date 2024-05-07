import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSingleProductMock } from '../actions/productActionCreator'
import ProductDetails from '../Components/Product/ProductDetails'
import ShowWhenLoadedHOC from '../Components/HOCs/ShowWhenLoadedHOC'
import ShowIfProductFetchedHOC from '../Components/HOCs/ShowIfProductFetchedHOC'

const ProductScreen = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        fetchSingleProductMock(dispatch)
    }, [])

    // This component will only render the ProductDetails when finished loading
    const ShowWhenLoadedProductDetails = ShowWhenLoadedHOC(ProductDetails, 'SingleProductMockReducer')
    // This component will only render the ProductDetails when finished loading, AND without errors
    const ShowWhenProductIsFetchedWithoutErrors = ShowIfProductFetchedHOC(ShowWhenLoadedProductDetails, 'SingleProductMockReducer') 

    return (
        <ShowWhenProductIsFetchedWithoutErrors />
    )
}

export default ProductScreen