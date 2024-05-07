import { singleProductMockReducer as SingleProductMockReducer } from './reducers/productReducers';
import { cartReducer as CartMockReducer } from './reducers/cartReducers'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
    SingleProductMockReducer,
    CartMockReducer
});



// const testProd = {
//     product: {
//         id: 1,
//         name: 'Classic Tee',
//         description: 'A classic tee for a classic look',
//     }, 
//     size: 'M',
//     qty: 20
// }
// let testCartItems = [testProd]
// console.log(testCartItems)
// localStorage.setItem('cartItems', JSON.stringify(testCartItems))

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    CartMockReducer: { cartItems: cartItemsFromLocalStorage }
};

const middlewares = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;


