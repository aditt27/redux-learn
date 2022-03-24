import store from "./redux/store";
//import { addProduct, updateProductDiscount, removeProduct } from './redux/product/action'
import { addProduct, removeProduct, updateProductDiscount } from './redux/productSlice'
//import { addProduct, removeProduct, updateProductDiscount } from './redux/productOld'

store.subscribe(()=> {
    console.log('Store Changed!', store.getState())
})

store.dispatch(addProduct({
    name: "CAMERA",
    price: 10000,
    discount: 0,
    stock: 100
}))

store.dispatch(addProduct({
    name: "HP",
    price: 5000,
    discount: 0,
    stock: 100
}))

store.dispatch(addProduct({
    name: "SPEAKER",
    price: 8000,
    discount: 0,
    stock: 100
}))

store.dispatch(updateProductDiscount({
    productId: 2,
    discount: 15
}))

store.dispatch(removeProduct({
    productId: 1
}))

store.dispatch(updateProductDiscount({
    productId: 3,
    discount: 30
}))

