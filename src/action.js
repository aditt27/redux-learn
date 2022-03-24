import * as actions from './actionTypes'

/**
 * 
 * @param {name, price, discount, stock} product 
 * @returns 
 */
 export function addProduct(product = {}){
    return {
        type: actions.ADD_PRODUCT,
        payload: {
            name: product.name,
            price: product.price,
            discount: product.discount,
            stock: product.stock
        }
    }
}

/**
 * 
 * @param {productId, discount} product
 * @returns 
 */
 export function updateProductDiscount(product = {}){
    return {
        type: actions.UPDATE_PRODUCT_DISCOUNT,
        payload: {
            productId: product.productId,
            discount: product.discount
        }
    }
}

/**
 * 
 * @param {productId} product
 * @returns 
 */
 export function removeProduct(product = {}){
    return {
        type: actions.REMOVE_PRODUCT,
        payload: {
            productId: product.productId
        }
    }
}
