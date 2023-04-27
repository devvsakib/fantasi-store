const addToDb = id => {
    let addedToCart = getCart();
    // add quantity
    const quantity = addedToCart[id];
    if (!quantity) {
        addedToCart[id] = 1;
    }
    localStorage.setItem('fantasi-cart', JSON.stringify(addedToCart));
}

const removeFromDb = id => {
    const addedToCart = getCart();
    if (id in addedToCart) {
        delete addedToCart[id];
        localStorage.setItem('fantasi-cart', JSON.stringify(addedToCart));
    }
}

const getCart = () => {
    let addedProducts = {};

    const added = localStorage.getItem('fantasi-cart');
    if (added) {
        addedProducts = JSON.parse(added);
    }
    return addedProducts;
}


export {
    addToDb,
    removeFromDb,
    getCart
}
