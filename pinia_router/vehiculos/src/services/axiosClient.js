import axios from 'axios'
import { useUserStore } from '../stores/user';

// importar el store, sacar el user... 

const axiosClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        // configurar el token y pasarle user.token
    }
})

export default {
    getApiClient() {
        return axiosClient;
    }
}