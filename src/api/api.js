import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const BASE_URL = 'http://localhost:5000/api/v1'

const services = {
    productAPI: {
        getProducts: async (setProducts) => {
            await axios.get(`${BASE_URL}/products/all`)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        },
        getProductsByCategoryID: async (id, setProducts) => {
            await axios.get(`${BASE_URL}/products/category/${id}`)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        },
        getProductById: async (id, setProduct) => {
            await axios.get(`${BASE_URL}/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
        },
        filterProducts: async (id, value, setProducts) => {
            await axios.get(`${BASE_URL}/products/sort?value=${value}&id=${id}`)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        },
        searchProducts: async (value, setProducts) => {
            await axios.get(`${BASE_URL}/products/search?title=${value}`)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        }
    },
    categoryAPI: {
        getCategories: async (setCategories) => {
            await axios.get(`${BASE_URL}/categories/all`)
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
        }
    },
    authAPI: {
        registerUser: async (user) => {
            await axios.post(`${BASE_URL}/auth/register`, user)
            .then(response => alert('Qeydiyyat ugurlu oldu'))
            .catch(error => console.log(error))
        },
        loginUser: async (user) => {
            await axios.post(`${BASE_URL}/auth/login`, user)
            .then(response => localStorage.setItem('token', response.data))
            .catch(error => console.log(error))
        },
        decodeJWT: async () => {
            const token = localStorage.getItem('token')
            if(token) {
                const tokenData = await jwtDecode(token)
                console.log(tokenData);
            }
        }
    }
}

export default services