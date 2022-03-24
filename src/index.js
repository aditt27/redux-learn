import store from "./redux/store";
//import { addProduct, updateProductDiscount, removeProduct } from './redux/product/action'
//import { addProduct, removeProduct, updateProductDiscount } from './redux/productOld'
import { addProduct, removeProduct, updateProductDiscount } from './redux/product'
import { addToCart, removeFromCart } from './redux/cart'
import { changeUser, updateUserWallet} from './redux/currentUser'


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

store.dispatch(addToCart({
    productId: 1,
    quantity: 12,
}))

store.dispatch(addToCart({
    productId: 2,
    quantity: 6,
}))

store.dispatch(removeFromCart({
    productId: 2
}))

store.dispatch(changeUser({
    username: "adit",
    email: "adittbudi@gmail.com",
    role: "admin",
    wallet: "10000"
}))

store.dispatch(updateUserWallet({
    wallet: "14000"
}))

store.dispatch({
    type: 'apiRequest', //3.1 Create Action Creators
    payload: {
        url: '/products',
        method: 'get'
    }
});


