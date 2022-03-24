import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"

/*
* Action Types
*/
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT_DISCOUNT = 'UPDATE_PRODUCT_DISCOUNT'

/*
* Action
*/
/**
 * 
 * @param {name, price, discount, stock} product 
 * @returns 
 */
//  export function addProduct(product = {}){
//     return {
//         type: ADD_PRODUCT,
//         payload: {
//             name: product.name,
//             price: product.price,
//             discount: product.discount,
//             stock: product.stock
//         }
//     }
// }
export const addProduct = createAction(ADD_PRODUCT)

/**
 * @param {productId, discount} product
 * @returns 
 */
//  export function updateProductDiscount(product = {}){
//     return {
//         type: UPDATE_PRODUCT_DISCOUNT,
//         payload: {
//             productId: product.productId,
//             discount: product.discount
//         }
//     }
// }
export const updateProductDiscount = createAction(UPDATE_PRODUCT_DISCOUNT)

/**
 * @param {productId} product
 * @returns 
 */
//  export function removeProduct(product = {}){
//     return {
//         type: REMOVE_PRODUCT,
//         payload: {
//             productId: product.productId
//         }
//     }
// }
export const removeProduct = createAction(REMOVE_PRODUCT)

/*
* Reducer
*/
let lastId = 0;
const initialState = [];
// export default function reducer(state = initialState, action){
//     switch (action.type) {
//         case actions.ADD_PRODUCT:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     name: action.payload.name,
//                     price: action.payload.price,
//                     discount: action.payload.discount,
//                     stock: action.payload.stock
//                 }
//             ];
//         case actions.REMOVE_PRODUCT:
//             return state.filter(product => product.id !== action.payload.productId);

//         case actions.UPDATE_PRODUCT_DISCOUNT:
//             return state.map(product=> {
//                 if(product.id === action.payload.productId) {
//                     return {...product, discount: action.payload.discount}
//                 }
//                 return product
//             })
//         default:
//             return state;
//     }
// }
export default createReducer(initialState, {
    addProduct: (products, action)=> {
        products.push({
            id: ++lastId,
            name: action.payload.name,
            price: action.payload.price,
            discount: action.payload.discount,
            stock: action.payload.stock
        })
    },
    updateProductDiscount: (products, action)=> {
        products.map(product=> {
            if(product.id === action.payload.productId) {
                return {...product, discount: action.payload.discount}
            }
            return product
        })
    },
    removeProduct: (products, action)=> {
        products.filter(product => product.id !== action.payload.productId);
    }
})