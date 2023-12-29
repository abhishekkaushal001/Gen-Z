import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f1c51ec2dd754a7aaaaee9fe085a6ffe'
    }
});