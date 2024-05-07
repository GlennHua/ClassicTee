import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = (props) => {

    const cartItems = useSelector(state => state.CartMockReducer.cartItems)
    const [numberOfItems, setNumberOfItems] = useState(0)
    
    useEffect(() => {
        let totalItems = 0;
        
        cartItems && cartItems.forEach(item => {
                totalItems += item.qty
            })
            setNumberOfItems(totalItems)
    }, [cartItems])

    return(
        
        <>
            <div 
                className='my-cart'
                tabIndex='0' // Otherwise the div will not be focusable; Just for recrod
                onClick={() => props.handleMyCartClick()}
            >
                {   `My Cart ( ${numberOfItems} )`}
            </div>
        </>

    )
}

export default Cart