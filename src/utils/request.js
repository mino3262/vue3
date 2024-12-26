import axios from "axios";
import { ElMessage } from "element-plus";

//连接后台端口与超时设置
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000
})


//请求拦截器配置
request.interceptors.request.use(config =>{
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config
},error =>{
    return Promise.reject(error)
})

//响应拦截器配置
request.interceptors.response.use(response =>{
    let res = response.data;
    if (typeof res === 'string'){
        res = res ? JSON.parse(res) : res
    }
    return res
},error =>{
    if (error.response.status === 404){
        ElMessage.error('未找到接口')
    }else {
        console.error(error.message)
    }
    return Promise.reject(error)
})

export default request