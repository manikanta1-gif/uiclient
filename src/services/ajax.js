import axios from "axios";
import { Cookies } from "./cookies";
// Add a request interceptor
axios.interceptors.request.use(function (request) {
    // Do something before request is sent
    request.headers.Authorization = Cookies.getItem("token");
    return request;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export class Ajax {
    static fnSendGetReq(url) {
        return axios.get(url)

    }
    static fnSendPostReq(url, data) {
        return axios.post(url, data)

    }
    static fnSendPutReq(url, data) {
        return axios.put(url, data)
    }
    static fnSendDeleteReq(url, data) {
        return axios.delete(url, data)
    }
}