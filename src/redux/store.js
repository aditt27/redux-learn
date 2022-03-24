import { configureStore } from "@reduxjs/toolkit";

// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

//import reducer from "./product/reducer";
import reducer from "./productSlice"

// const store = createStore(
//     reducer,
//     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({trace: true}))

// using redux-toolkit
const store = configureStore({
    reducer
})

export default store