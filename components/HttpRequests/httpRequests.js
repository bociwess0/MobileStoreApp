import axios from "axios";
import { allProducts } from "../ProductList/AllProducts";
import { allUsers } from "../Profile/Users";

const URL = "https://rn-project-93ce7-default-rtdb.firebaseio.com/";

//Product requests

export async function fetchProducts() {
    const response = await axios.get(URL + "products.json");

    const products = [];

    for(const key in response.data) {
        const productsArray = {
            productKey: key,
            product: response.data[key]      
        }
        products.push(productsArray);
    }

    return products;

}

export async function addProduct(product) {
    axios.post(URL + "products.json", product);
}

export async function updateProduct(productKey, newProduct) {
    axios.put(URL + `products/${productKey}.json`, newProduct);
}

//User reqeusts

export async function fetchUsers() {
    const response = await axios.get(URL + 'users.json');

    const users = [];

    for(const key in response.data) {

        let userObj = {
            id: key,
            user: response.data[key]
        }

        users.push(userObj);
    }

    return users;

}

export async function registerUserToDB(newUser) {

    axios.post(URL + `users.json`, newUser);

}

export async function updateUserInDB(user) {
    axios.put(URL + `users/${user.id}.json`, user.user);
}

export async function addToFavoritesDB(userKey, product) {
    const response = await axios.post(URL + `users/${userKey}/favoriteProducts.json`, product);


    return response.data.name;

}
    
export async function deleteFromFavoritesDB(userKey, productKey) {
    axios.delete(URL + `users/${userKey}/favoriteProducts/${productKey}.json`);
}

export async function fetchFavorites(userKey) {
    const response = await axios.get(URL + `users/${userKey}/favoriteProducts.json`);

    const favoritesArray = [];

    for(const key in response.data) {
        const productObj = {
            ...response.data[key],
            productKey: key,
        }
        favoritesArray.push(productObj);
    }

    return favoritesArray;

}