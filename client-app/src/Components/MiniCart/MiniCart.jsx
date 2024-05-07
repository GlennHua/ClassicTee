import React from 'react'
import { useSelector } from 'react-redux'
import MiniCartItem from './MiniCartItem'

const MiniCart = () => {

    const miniCartItems = useSelector(state => state.CartMockReducer.cartItems)

    return(
        <div className='mini-cart'>
            {
                miniCartItems && miniCartItems.map(item => {
                    return (
                        <MiniCartItem
                            key={`id:${item.product.id}size:${item.size}`}
                            item={item}
                        />
                    )
                })
            }  
        </div>
    )
}

export default MiniCart