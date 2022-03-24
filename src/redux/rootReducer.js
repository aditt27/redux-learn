import { combineReducers } from "redux";
import productReducer from "./product";
import cartReducer from "./cart";
import currentUserReducer from "./currentUser";

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    currentUser: currentUserReducer
})