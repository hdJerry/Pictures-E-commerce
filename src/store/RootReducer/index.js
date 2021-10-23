import {
    combineReducers
} from 'redux';


import {
    cartItems,
    cartDropDown
} from './reducers';

const rootReducer = combineReducers({
    cartItems: cartItems,
    cartDropDown: cartDropDown,
});


export default rootReducer;