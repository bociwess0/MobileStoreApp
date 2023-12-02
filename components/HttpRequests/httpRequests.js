import axios from "axios";
import { allProducts } from "../ProductList/AllProducts";

const URL = "https://rn-project-93ce7-default-rtdb.firebaseio.com/";
let DB_ID = '';

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

    DB_ID = products[0].id;

    return products[0];

}

export async function fetchOneProduct(productIndex) {

    const product = await axios.get(URL + `products/${DB_ID}/allProducts/${productIndex}.json`);

    return product.data;

}
    

