import axios from "axios";
import { apiProductsRequestSucceeded } from '../product';

const api = store => next => async action => {

    if(action.type !== "apiRequest") return next(action);

    next(action);
    // Prosses

    const { url, method, data, onSuccess, onError } = action.payload;
    const response = await axios.request({
        baseURL: 'https://fakestoreapi.com',
        url,
        method,
        data
    });

    //console.log('responseData', response.data)

    store.dispatch(apiProductsRequestSucceeded(response.data.map(item=> {
        return {
            id: item.id,
            name: item.title,
            price: item.price,
            discount: 0,
            stock: 100}
    })));

}

export default api;
