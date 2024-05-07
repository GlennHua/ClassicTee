import { ADD_SINGLE_ITEM_TO_CART, REMOVE_SINGLE_ITEM_FROM_CART } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        case ADD_SINGLE_ITEM_TO_CART:
            const { cartNewItem } = action.payload

            const existItem = state.cartItems.find(
                x => x.product.id === cartNewItem.product.id && 
                    x.size === cartNewItem.size
            )

            if (existItem) {

                existItem.qty += 1

                let updatedCartItems = state.cartItems.map(x =>
                    x.product.id === existItem.product.id &&
                    x.size === existItem.size ? existItem : x
                )

                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

                return { 
                    ...state,
                    cartItems: updatedCartItems
                }
            } else {
                cartNewItem.qty = 1
                localStorage.setItem('cartItems', JSON.stringify([...state.cartItems, cartNewItem]))
                return {
                    ...state,
                    cartItems: [...state.cartItems, cartNewItem]
                }
                
            }
            
        case REMOVE_SINGLE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        default:
            return state
    }
}