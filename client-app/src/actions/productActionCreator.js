import { 
    SINGLE_PRODUCT_MOCK_REQUEST,
    SINGLE_PRODUCT_MOCK_SUCCESS,
    SINGLE_PRODUCT_MOCK_FAIL,
    SINGLE_PRODUCT_MOCK_URL
} from '../constants/productConstants';
import requests from '../requests/agent';

export const fetchSingleProductMock = async(dispatch) => {
    try {
        dispatch({ type: SINGLE_PRODUCT_MOCK_REQUEST })
        const { data } = await requests.fetchSingleMockProduct(SINGLE_PRODUCT_MOCK_URL)
        
        dispatch({
            type: SINGLE_PRODUCT_MOCK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_MOCK_FAIL,
            payload: error.message
        })
    }
}
