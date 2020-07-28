import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
let httpFFs = process.env.NODE_ENV === 'production' ? 'http://zt.shenyueyun.com/' : 'http://zt.shenyueyun.com/';
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
    // 获取用户我的基本信息
    getUserInfo(params){
        return axios.post(`${base.sq}/User/getUserInfo`, qs.stringify(params));
    },
    // 修改用户名称
    xgyhm(params){
        return axios.post(`${base.sq}/User/getUsernameEdit`, qs.stringify(params));
    },
    // 修改手机号  
    getMobileEdit(params){
        return axios.post(`${base.sq}/User/getMobileEdit`, qs.stringify(params));
    },
    // 修改性别
    getGenderEdit(params){
        return axios.post(`${base.sq}/User/getGenderEdit`, qs.stringify(params));
    },
    // 修改头像
    getAvatarEdit(params){
        return axios.post(`${base.sq}/User/getAvatarEdit`, qs.stringify(params));
    },
    // 社区服务类型列表
    gerServiceList(params){
        return axios.post(`${base.sq}/Community/gerServiceList`, qs.stringify(params));
    },
    // 社区服务列表
    gerCommunityList(params){
        return axios.post(`${base.sq}/Community/gerCommunityList`, qs.stringify(params));
    },
    // 社区房屋列表
    gerHousingList(params){
        return axios.post(`${base.sq}/Housing/gerHousingList`, qs.stringify(params));
    },
    // 获取服务详情
    gerCommunityDetailed(params){
        return axios.post(`${base.sq}/Community/gerCommunityDetailed`, qs.stringify(params));
    },
     // 获取房屋详情
     gerHousingDetailed(params){
        return axios.post(`${base.sq}/Housing/gerHousingDetailed`, qs.stringify(params));
    },
    // 修改密码
    getPwdEdit(params){
        return axios.post(`${base.sq}/User/getPwdEdit`, qs.stringify(params));
    },
    // 发布消息通知
    getValidateAdd(params){
        return axios.post(`${base.sq}/Notice/getValidateAdd`, qs.stringify(params));
    }
}

export default article;
