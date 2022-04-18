import {data} from '../../Category.js';
import {convertData} from '../../Category'
import { State } from 'react-native-gesture-handler';

const initState = {
    addedItems:[],
    total: 0
}

export const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case "addToCart":
            console.log("Added to cart");
            return {...state, addedItems: [...state.addedItems, action.payload], total: state.total + action.payload.detailPriceOne
            };
        case "purchase":
            return {...state, addedItems: [], total: 0}
        default:
            return state;
    }
}
