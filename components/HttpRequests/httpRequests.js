import axios from "axios";
import { allProducts } from "../ProductList/AllProducts";
import { allUsers } from "../Profile/Users";

const URL = "https://rn-project-93ce7-default-rtdb.firebaseio.com/";
let products_DB_ID = '';
let users_DB_ID = '';

//Product requests

export async function fetchProducts() {
    const response = await axios.get(URL + "products.json");

    const products = [];

    for(const key in response.data) {
        const productsArray = {
            id: key,
            products: response.data[key].allProducts      
        }
        products.push(productsArray);
    }

    products_DB_ID = products[0].id;

    return products[0].products;

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
    console.log(user);
    axios.put(URL + `users/${user.id}.json`, user.user);
}
    

