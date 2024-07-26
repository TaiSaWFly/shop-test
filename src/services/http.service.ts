import { APP_CONFIG } from "@/data/app.config";
import axios from "axios";

const baseURL = APP_CONFIG.apiEndPoint;

const http = axios.create({
    baseURL: baseURL
});

http.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: http.get
};
export default httpService;
