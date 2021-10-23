import cartConstants from './constants';

import {addCartItem, removeCartItem, clearItem} from './utils'

const initialState = {
  bcartItems: [],
  iniitialSync: false
};
const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case cartConstants.ADD_ITEM:
      return {
        ...state,
        bcartItems: addCartItem(state.bcartItems, action.payload)
      }
    case cartConstants.REMOVE_ITEM:
      return {
        ...state,
        bcartItems: removeCartItem(state.bcartItems, action.payload)
      }
    case cartConstants.CLEAR_ITEM:
      return {
        ...state,
        bcartItems: clearItem(state.bcartItems, action.payload)
      }
    case cartConstants.EMPTY_CART:
      return {
        ...state,
        bcartItems: [],
        iniitialSync: false
      }
    case 'INITIAL_SYNC':
      return {
        ...state,
        iniitialSync: action.payload
      }
    default:
      return state;
  }
}

export default cartReducer;