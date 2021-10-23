import constants from './constants';
let initialState = {
    activeDropDown: false,
};


const CartDropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SHOW_DROPDOWN:
            return {
                ...state,
                ...action.payload,
            };

        case constants.HIDE_DROPDOWN:
            return initialState;

        default:
            return state;
    }
}


export default CartDropDownReducer;