import axios from 'axios';

const instance  = axios.create({
    baseURL : "https://new-rect-app.firebaseio.com"
})

export default instance;