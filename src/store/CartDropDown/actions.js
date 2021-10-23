import constant from './constants';

export const showDropDown = (data) =>({
    type: constant.SHOW_DROPDOWN,
    payload: data
});


export const hideDropDown = () => ({
    type: constant.HIDE_DROPDOWN
});