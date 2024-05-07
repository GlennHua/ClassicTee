import { ADD_SINGLE_ITEM_TO_CART } from '../constants/cartConstants';

export const addSingleItemToCart = (dispatch, product, size) =>{
    const cartNewItem = {
        product: product,
        size: size
    }
    dispatch({
        type: ADD_SINGLE_ITEM_TO_CART,
        payload: {
            cartNewItem
        }
    })
}