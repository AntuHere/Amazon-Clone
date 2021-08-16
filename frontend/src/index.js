import homeScreen from "./screen/HomeScreen.js";
import Error404Screen from "./screen/Error404Screen.js";
import ProductScreen from "./screen/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";
import cartScreen from "./screen/cartScreen.js";
import signInScreen from "./screen/signInScreen.js";
const routes = {
    "/": homeScreen,
    "/product/:id": ProductScreen,
    "/cart" : cartScreen,
    "/signin": signInScreen
}
const router = async () => {
    const request = parseRequestUrl();
    
    const parseUrl =    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : ''); 
    
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main_container');
    main.innerHTML = await screen.render();
} 
window.addEventListener('load', router)
window.addEventListener('hashchange', router)