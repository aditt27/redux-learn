import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
    lists: []
};

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        apiProductsRequestSucceeded: (products, action)=> {
            products.lists = action.payload
        },
        addProduct: (products, action)=> {
            products.lists.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                discount: action.payload.discount,
                stock: action.payload.stock
            })
        },
        updateProductDiscount: (products, action)=> {
            const index = products.lists.findIndex(product=> product.id === action.payload.productId)
            products.lists[index].discount = action.payload.discount
        },
        removeProduct: (products, action)=> {
            const index = products.lists.findIndex(product=> product.id === action.payload.productId)
            products.lists.splice(index, 1)
        }
    }
});

export const { addProduct, updateProductDiscount, removeProduct, apiProductsRequestSucceeded } = slice.actions;
export default slice.reducer;
