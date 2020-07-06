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
            <input type="text" placeholder="用户名/手机号" v-model="userName" />
          </p>
          <p class="input-lis">
            <input type="password" placeholder="密码" v-model="password" />
          </p>
          <p class="input-btn" @click="ljdl">立即登录</p>
          <p class="wjmm-zc">
            <router-link to="/mobilePhoneVerification">
              <span>忘记密码?</span>
            </router-link>
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
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    ljdl() {
      // this.$store.dispatch("setUser", true);
      // this.$router.push({ path: "/" });
      if (this.userName == "") {
        this.$message({
          message: "用户名不能为空",
          type: "warning"
        });
        return;
      }
      if (this.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "warning"
        });
        return;
      }
      this.$api.article
        .login({
          account: this.userName,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.code != 1) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }else{
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            localStorage.setItem("shequ", "isLogin");
            localStorage.setItem("token", res.data.data.userinfo.token);
            localStorage.setItem("userId", res.data.data.userinfo.id);
            this.$router.push({ path: "/" })
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>