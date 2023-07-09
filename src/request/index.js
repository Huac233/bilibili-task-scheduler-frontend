import axios from 'axios'

const HOST = import.meta.env.VITE_HOST || "https://api.xn--5gq551h.co/"

const service = axios.create({
    baseURL: HOST,
    timeout: 1000 * 10,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
})

service.interceptors.request.use(config => {
    // 在请求头中添加token
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})

service.interceptors.response.use(
    (res) => res,
    (err) => {
        // 登录 token 过期
        if (err.response.status === 401) {
            window.localStorage.clear()
            window.location = "/#/login"
        }
        throw err
    }
);

export default service
