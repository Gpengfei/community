import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
let httpFFs = process.env.NODE_ENV === 'production' ? 'http://zt.shenyueyun.com/' : 'http://zt.shenyueyun.com/';
const article = {
    getUserClassification(params) {
        return axios.post(`${base.sq}/Userclass/getUserClassification`, params);
    },
    // 获取社区
    getUserClassstreet(params) {
        return axios.post(`${base.sq}/Userclass/getUserClassstreet`, params);
    },
    // 注册接口
    register(params) {
        return axios.post(`${base.sq}/User/register`, params);
    },
    // 登录接口
    login(params) {
        return axios.post(`${base.sq}/User/login`, params);
    },
    // 获取用户信息
    user(params) {
        return axios.post(`${base.sq}/User/user`, params);
    },
    // 获取消息列表
    getNoticeList(params) {
        return axios.post(`${base.sq}/Notice/getNoticeList`, params);
    },
    // 获取用户我的基本信息
    getUserInfo(params) {
        return axios.post(`${base.sq}/User/getUserInfo`, params);
    },
    // 修改用户名称
    xgyhm(params) {
        return axios.post(`${base.sq}/User/getUsernameEdit`, params);
    },
    // 修改手机号  
    getMobileEdit(params) {
        return axios.post(`${base.sq}/User/getMobileEdit`, params);
    },
    // 修改性别
    getGenderEdit(params) {
        return axios.post(`${base.sq}/User/getGenderEdit`, params);
    },
    // 修改头像
    getAvatarEdit(params) {
        return axios.post(`${base.sq}/User/getAvatarEdit`, params);
    },
    // 社区服务类型列表
    gerServiceList(params) {
        return axios.post(`${base.sq}/Community/gerServiceList`, params);
    },
    // 社区服务列表
    gerCommunityList(params) {
        return axios.post(`${base.sq}/Community/gerCommunityList`, params);
    },
    // 社区房屋列表
    gerHousingList(params) {
        return axios.post(`${base.sq}/Housing/gerHousingList`, params);
    },
    // 获取服务详情
    gerCommunityDetailed(params) {
        return axios.post(`${base.sq}/Community/gerCommunityDetailed`, params);
    },
    // 获取房屋详情
    gerHousingDetailed(params) {
        return axios.post(`${base.sq}/Housing/gerHousingDetailed`, params);
    },
    // 修改密码
    getPwdEdit(params) {
        return axios.post(`${base.sq}/User/getPwdEdit`, params);
    },
    // 发布消息通知
    getValidateAdd(params) {
        return axios.post(`${base.sq}/Notice/getValidateAdd`, params);
    },
    // 获取店铺信息
    getSelect(params) {
        return axios.post(`${base.sq}/ShopCom/getSelect`, params);
    },
    // 提交店铺信息
    getAdd(params) {
        return axios.post(`${base.sq}/ShopCom/getAdd`, params);
    },
    // 发布服务
    gerSetviceAdd(params) {
        return axios.post(`${base.sq}/Community/gerSetviceAdd`, params);
    }
}

export default article;
