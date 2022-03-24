import * as actions from './actionTypes'

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.ADD_PRODUCT:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    discount: action.payload.discount,
                    stock: action.payload.stock
                }
            ];
        case actions.REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.payload.productId);

        case actions.UPDATE_PRODUCT_DISCOUNT:
            return state.map(product=> {
                if(product.id === action.payload.productId) {
                    return {...product, discount: action.payload.discount}
                }
                return product
            })
        default:
            return state;
    }
}
