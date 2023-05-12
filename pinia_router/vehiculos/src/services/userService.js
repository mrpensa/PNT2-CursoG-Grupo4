import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    login(user) {
        //Utilizo api Client que es el objeto inicializado de axios
        return apiClient.post('/users/login', usuario);
               // axios pero instanciado con la direccion y las caracteristicas de la peticion.
    },
    register(user){
        return apiClient.post('/users/register', usuario);
    },
    getAll(){
        return apiClient.get('/users', lista)
    }
}