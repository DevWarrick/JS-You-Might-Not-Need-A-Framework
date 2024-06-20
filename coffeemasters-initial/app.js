import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/Productitem.js';
import CartItem from './components/CartItem.js';

window.app = {}
app.Store = Store;
app.router = Router;


// It's better to wait for the event for manipulating the DOM
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});   

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    const qty = app.Store.cart.reduce(
        (acc, item) => acc + item.quantity, 0
    );
    badge.textContent = qty;
    badge.hidden = qty == 0;
});

