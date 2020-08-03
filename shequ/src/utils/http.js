/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router';
import store from '../store/index';
import { Message } from 'element-ui';
import qs from 'qs';
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const loadingQueue = {};
const tip = msg => {
    Message(msg);
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.log(other);
    }
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(function(config){
    config.data = qs.stringify(config.data)
    if (Object.keys(loadingQueue).length == 0) {
        store.state.isShowLoading = true  //改变为true
    }
    loadingQueue[config.url] = true
    return config;
},function(error) {
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(function(response) {
    /* TODOS 使用store进行loading方法解除 */
    // console.log('loading结束');
    delete loadingQueue[response.config.url];  //删除路径 
    if (Object.keys(loadingQueue).length == 0) {
        store.state.isShowLoading = false  //改变为false
    }
    return response;
}, function(error) {
    return Promise.reject(error);
});

export default instance;
