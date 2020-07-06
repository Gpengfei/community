<template>
  <div class="MobilePhoneVerification">
    <div class="login-box">
      <div class="logio">
        <img src="@assets/img/logo.png" alt />
      </div>
      <div class="form-box">
        <p class="box-title">找回密码</p>
        <div class="input-box">
          <p class="input-lis">
            <span class="qm">+86</span>
            <input type="text" placeholder="请输入手机号" />
          </p>
          <p class="input-list">
            <input type="text" placeholder="请输入验证码" />
            <span class="hqyzm">获取验证码</span>
          </p>
          <p class="input-btn" @click="czmm">重置密码</p>
        </div>
      </div>
      <div class="bq">www.xxxxxx.com Website management system | Copyright© 2019 XXX</div>
    </div>
  </div>
</template>

<script>
import "@style/mobilePhoneVerification.scss"
export default {
    data(){
        return{}
    },
    methods: {
        czmm(){
            this.$router.push({ path: "/retrievePassword" });
        }
    },
};
</script>

<style lang="scss" scoped>
</style>