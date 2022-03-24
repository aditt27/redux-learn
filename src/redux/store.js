import { configureStore } from "@reduxjs/toolkit";

// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

// ---- Import Reducer------
//import reducer from "./product/reducer";
//import reducer from "./product"
import reducer from "./rootReducer";

import logger from "./middleware/logger";

import api from "./middleware/api"

// ---- Create Store -----
// const store = createStore(
//     reducer,
//     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({trace: true}))

// using redux-toolkit
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, api)
})

export default store