<template>
  <div class="login">
    <div class="login-box">
      <div class="logio">
        <img src="@assets/img/logo.png" alt />
      </div>
      <div class="form-box">
        <p class="box-title">登录</p>
        <div class="input-box">
          <p class="input-lis">
            <input type="text" placeholder="用户名/手机号" />
          </p>
          <p class="input-lis">
            <input type="password" placeholder="密码" />
          </p>
          <p class="input-btn" @click="ljdl">立即登录</p>
          <p class="wjmm-zc">
            <span>忘记密码?</span>
            <span>|</span>
            <router-link to="/register">
              <span>注册</span>
            </router-link>
          </p>
        </div>
      </div>
      <div class="bq">www.xxxxxx.com Website management system | Copyright© 2019 XXX</div>
    </div>
  </div>
</template>

<script>
import "@style/login.scss";
export default {
  data() {
    return {};
  },
  methods: {
    ljdl() {
      this.$store.dispatch("setUser", true);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>