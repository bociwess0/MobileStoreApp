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

export async function addCommentToDB(productKey, comment) {
    axios.post(URL + `products/${productKey}/comments.json`, comment);
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

    const resposne = await axios.post(URL + `users.json`, newUser);
    const userKey = resposne.data.name
    return userKey;
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

// Email Sender

export const sendEmail = async (email, code) => {
    const apiKey = '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'; 
    const apiUrl = 'https://api.sendgrid.com/v3/mail/send';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    const payload = {
      personalizations: [
        {
          to: [{ email: email }],
        },
      ],
      from: { email: 'mobileapp@yopmail.com' },
      subject: 'Password code',
      content: [
        { type: 'text/plain', value: `This is your password code: ${code}` },
      ],
    };

    try {
      const response = await axios.post(apiUrl, payload, { headers });

      if (response.status === 202) {
        console.log('Email sent successfully');
      } else {
        console.log(`Failed to send email. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
};