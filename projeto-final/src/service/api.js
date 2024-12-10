import axios from "axios";

const BASE_URL = 'https://ecom-back-strapi.onrender.com/api';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzNTkwNDk5LCJleHAiOjE3MzYxODI0OTl9.b-g3XpiQ4wEVoqWtk3InvHauPvbAbzQEZhVzuMtxUx8' // Exemplo de token de autenticação
    }
});

export default api;