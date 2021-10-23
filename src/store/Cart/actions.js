
import cartConstants from './constants';



export const AddItem = data => ({
    type: cartConstants.ADD_ITEM,
    payload: data,
});


export const RemoveItem = data => ({
    type: cartConstants.REMOVE_ITEM,
    payload: data,
});

export const ClearItem = data => ({
    type: cartConstants.CLEAR_ITEM,
    payload: data,
});

export const EmptyCart = () => ({
    type: cartConstants.EMPTY_CART,
});

export const InitialSync = data => ({
    type: 'INITIAL_SYNC',
    payload: data,
});