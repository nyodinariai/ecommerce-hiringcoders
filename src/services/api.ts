import axios from 'axios';


const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/nyodinariai/products/produtos'//'http://localhost:8080/produtos',
})

export default api;