import axios from "axios";
import { allProducts } from "../ProductList/AllProducts";
import { allUsers } from "../Profile/Users";

const URL = "https://rn-project-93ce7-default-rtdb.firebaseio.com/";
let products_DB_ID = '';
let users_DB_ID = '';

export function storeProduct() {
    axios.post(URL + "products.json", { allProducts: allProducts} )
}



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

export async function fetchUsers() {
    const response = await axios.get(URL + 'users.json');

    const users = [];

    for(const key in response.data) {
        const usersArray = {
            id: key,
            users: response.data[key].Allusers
        }

        users.push(usersArray)
    }

    users_DB_ID = users[0].id;

    return users[0].users;

}

export async function fetchOneProduct(productIndex) {

    const product = await axios.get(URL + `products/${products_DB_ID}/allProducts/${productIndex}.json`);

    return product.data;

}
    

