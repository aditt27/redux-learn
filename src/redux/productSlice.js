import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
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
            const index = products.findIndex(product=> product.id === action.payload.productId)
            products[index].discount = action.payload.discount
        },
        removeProduct: (products, action)=> {
            const index = products.findIndex(product=> product.id === action.payload.productId)
            products.splice(index, 1)
        }
    }
});

export const { addProduct, updateProductDiscount, removeProduct } = slice.actions;
export default slice.reducer;
