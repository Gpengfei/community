<template>
  <div class="Register">
    <div class="login-box">
      <div class="logio">
        <img src="@assets/img/logo.png" alt />
      </div>
      <div class="form-box">
        <p class="box-title">注册</p>
        <div class="input-box">
          <div class="xzyhlx">
            <el-select v-model="value" placeholder="请选择用户类型">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="block">
            <el-cascader
              placeholder="请选择地区"
              popper-class="popper1"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
            ></el-cascader>
          </div>
          <div class="xzyhlx">
            <el-select v-model="value1" placeholder="请选择社区">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <p class="input-lis">
            <input type="text" placeholder="请填写用户名" />
          </p>
          <p class="input-lis">
            <input type="password" placeholder="请填写密码" />
          </p>
          <p class="input-lis">
            <input type="password" placeholder="请再次填写密码" />
          </p>
          <p class="input-btn">立即登录</p>
          <p class="wjmm-zc">
            <router-link to="/login">
              <span>已有帐号</span>
              <i class="iconfont">&#xe610;</i>
            </router-link>
          </p>
        </div>
      </div>
      <div class="bq">www.xxxxxx.com Website management system | Copyright© 2019 XXX</div>
    </div>
  </div>
</template>

<script>
import "@style/register.scss";
import { regionData } from "element-china-area-data";
export default {
  data() {
    return {
      // 选择用户类型
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      // 省市区
      options: regionData,
      selectedOptions: [],
      //   选择社区
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: ""
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>