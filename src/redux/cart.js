import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        addToCart: (carts, action)=> {
            carts.push({
                id: ++lastId,
                productId: action.payload.productId,
                quantity: action.payload.quantity
            })
        },
        removeFromCart: (carts, action)=> {
            const index = carts.findIndex(cart=> cart.id === action.payload.cartId)
            carts.splice(index, 1)
        }
    }
})

export const { addToCart, removeFromCart } = slice.actions;
export default slice.reducer;