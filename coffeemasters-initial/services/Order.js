import { getProductById } from "./Menu.js";


export async function addToCart(id) {
    const product = await getProductById(id);
    const results = app.Store.cart.filter(
        prodInCart => prodInCart.product.id === id);
    if (results.length == 1) {
        // The product is already in the cart
        // update the current item 
        app.Store.cart = app.Store.cart.map(
            p => p.product.id == id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
    } else {
        app.Store.cart = [...app.Store.cart, {product, quantity: 1}];
    }
}

export function removeFromCart(id) {
    app.Store.cart = app.Store.cart.filter(p => p.product.id != id);
}