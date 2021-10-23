const addCartItem = (bcartItems, itemToAdd) => {
    const existing = bcartItems && bcartItems.find(item => item.id === itemToAdd.id);

    if (existing) {
        if (itemToAdd.quantity) {
            return bcartItems && bcartItems.map(item => item.id === itemToAdd.id ? {
                ...item,
                quantity: item.quantity + itemToAdd.quantity
            } : item);
        }
        return new Promise.reject('Quantity expected');
    }

    return [...bcartItems, {...itemToAdd}];
};

const removeCartItem = (bcartItems, itemToRemove) => {

    const existing = bcartItems && bcartItems.find(item => item.id === itemToRemove.id);

    // console.log(existing);
    // console.log(itemToRemove);
    if (existing && existing.quantity === 1){
        return bcartItems && bcartItems.filter(item => item.id !== itemToRemove.id);
    }

    // return [...bcartItems];


    return bcartItems && bcartItems.map(item => item.id === itemToRemove.id ?
        {
        ...item,
        quantity: Number(item.quantity )- 1
        } 
        : item
    );
};

const clearItem = (bcartItems, itemToClear) => {
     return bcartItems.filter(item => item.id !== itemToClear.id);
};


export {
    addCartItem,
    removeCartItem,
    clearItem,
};