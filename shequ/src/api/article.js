import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
let httpFFs = process.env.NODE_ENV === 'production' ? 'http://smart.zhuwenyong.xyz' : 'http://smart.zhuwenyong.xyz';
const article = {
    // 新闻列表
    // articleList () {
    //     return axios.get(`${base.sq}/topics`);
    // },
    // 新闻详情,演示
    // articleDetail (id, params) {
    //     return axios.get(`${base.sq}/topic/${id}`, {
    //         params: params
    //     });
    // },
    // post提交
    // 注册页面
    // 获取用户类型
    getUserClassification (params) {
        return axios.post(`${base.sq}/Userclass/getUserClassification`, qs.stringify(params));
    },
    // 获取社区
    getUserClassstreet(params){
        return axios.post(`${base.sq}/Userclass/getUserClassstreet`, qs.stringify(params));
    },
    // 注册接口
    register(params){
        return axios.post(`${base.sq}/User/register`, qs.stringify(params));
    },
    // 登录接口
    login(params){
        return axios.post(`${base.sq}/User/login`, qs.stringify(params));
    },
     // 获取用户信息
     user(params){
        return axios.post(`${base.sq}/User/user`, qs.stringify(params));
    },
    // 获取消息列表
    getNoticeList(params){
        return axios.post(`${base.sq}/Notice/getNoticeList`, qs.stringify(params));
    },
}

export default article;
