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
    },
    // 申请服务
    sub_com(params) {
        return axios.post(`${base.sq}/v1/com_service/sub_com`, params);
    },
    // 获取服务评价列表
    my_com_service(params) {
        return axios.post(`${base.sq}/v1/com_service/my_com_service`, params);
    },
    // 获取用户订单
    my_service(params) {
        return axios.post(`${base.sq}/v1/com_service/my_service`, params);
    },
    // 提交评价接口
    sub_comment(params) {
        return axios.post(`${base.sq}/v1/com_service/sub_comment`, params);
    },
    // 发布房源接口
    gerHousingAdd(params) {
        return axios.post(`${base.sq}/Housing/gerHousingAdd`, params);
    },
    // 获取房屋配套
    getFacilities(params) {
        return axios.post(`${base.sq}/Housing/getFacilities`, params);
    },
    // 商家用户获取自己发不服务
    getMyCommunityList(params) {
        return axios.post(`${base.sq}/Community/getMyCommunityList`, params);
    },
    // 二手物品发不
    gerSecondgoodsAdd(params) {
        return axios.post(`${base.sq}/Secondgoods/gerSecondgoodsAdd`, params);
    },
    // 商家用户获取自己房屋信息
    gerMyHousingSelect(params) {
        return axios.post(`${base.sq}/Housing/gerMyHousingSelect`, params);
    },
    // 商家用户获取自己二手物品
    getMySecondgoodsList(params) {
        return axios.post(`${base.sq}/Secondgoods/getMySecondgoodsList`, params);
    },
    // 修改服务信息回填
    gerServiceSelect(params) {
        return axios.post(`${base.sq}/Community/gerServiceSelect`, params);
    },
    // 修改房屋数据回填
    gerHousingSelect(params) {
        return axios.post(`${base.sq}/Housing/gerHousingSelect`, params);
    },
    // 修改二手物品回填
    gerSecondgoodsSelect(params) {
        return axios.post(`${base.sq}/Secondgoods/gerSecondgoodsSelect`, params);
    },
    // 获取二手物品列表
    gerSecondgoodsList(params) {
        return axios.post(`${base.sq}/Secondgoods/gerSecondgoodsList`, params);
    },
    // 二手货详情
    gerSecondgoodsDetailed(params) {
        return axios.post(`${base.sq}/Secondgoods/gerSecondgoodsDetailed`, params);
    },
    // 店铺获取服务列表
    getMyCommunityShop(params) {
        return axios.post(`${base.sq}/Community/getMyCommunityShop`, params);
    },
    // 店铺获取房源信息
    getMyHousingShop(params) {
        return axios.post(`${base.sq}/Housing/getMyHousingShop`, params);
    },
    // 店铺获取二手物品列表
    getMySecondgoodsShop(params) {
        return axios.post(`${base.sq}/Secondgoods/getMySecondgoodsShop`, params);
    },
    // 服务上下架
    getMyCommunityIsOpen(params) {
        return axios.post(`${base.sq}/Community/getMyCommunityIsOpen`, params);
    },
    // 房源上下架
    getMyHousingIsOpen(params) {
        return axios.post(`${base.sq}/Housing/getMyHousingIsOpen`, params);
    },
    // 二手物品上下架
    getMySecondgoodsIsOpen(params) {
        return axios.post(`${base.sq}/Secondgoods/getMySecondgoodsIsOpen`, params);
    },
    // 删除服务
    getMyCommunityDelete(params) {
        return axios.post(`${base.sq}/Community/getMyCommunityDelete`, params);
    },
    // 删除房源
    getMyHousingDelete(params) {
        return axios.post(`${base.sq}/Housing/getMyHousingDelete`, params);
    },
    // 删除二手物品
    getMySecondgoodsDelete(params) {
        return axios.post(`${base.sq}/Secondgoods/getMySecondgoodsDelete`, params);
    },
}

export default article;
