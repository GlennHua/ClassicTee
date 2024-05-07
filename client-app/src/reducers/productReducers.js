import {
    SINGLE_PRODUCT_MOCK_REQUEST,
    SINGLE_PRODUCT_MOCK_SUCCESS,
    SINGLE_PRODUCT_MOCK_FAIL
} from '../constants/productConstants';

export const singleProductMockReducer = (state = { currentProduct: {} }, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_MOCK_REQUEST:
            return { loading: true }
        case SINGLE_PRODUCT_MOCK_SUCCESS:
            return { loading: false, currentProduct: action.payload }
        case SINGLE_PRODUCT_MOCK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}