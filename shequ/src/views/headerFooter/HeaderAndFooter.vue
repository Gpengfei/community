<template>
  <div class="header-and-footer">
    <!--头部-->
    <div class="header">
      <div class="sqBox">
        <div class="header-box">
          <div class="box-l">
            <img src="@assets/img/logo1.png" alt />
          </div>
          <div class="soso-box">
            <div class="soso-top">
              <div class="soso-inp">
                <i class="iconfont">&#xe608;</i>
                <input type="text" placeholder="请输入搜索内容" />
              </div>
              <p class="soso-btn">搜索</p>
            </div>
            <p class="soso-ts">一站式养老生活服务尽在这里</p>
          </div>
          <div class="box-r">
            <!-- <i class="iconfont">&#xe608;</i> -->
            <template v-if="isLogin">
              <router-link to="/release">
                <i class="iconfont bj">&#xe60e;</i>
              </router-link>
              <router-link to="/newsLists">
                <i class="iconfont xx tx">&#xe635;</i>
              </router-link>
              <router-link to="/mine">
                <img :src="avatar" alt v-if="avatar" />
                <img src="img/minetx.png" alt v-else />
              </router-link>
            </template>
            <template v-else>
              <router-link to="/login">
                <span class="dl">登录</span>
              </router-link>
              <span class="fgx">丨</span>
              <router-link to="/register">
                <span class="zc">注册</span>
              </router-link>
            </template>
          </div>
        </div>
        <div class="box-nav">
          <ul>
            <li v-for="(item,index) in navData" :key="index">
              <router-link :to="item.url">
                <span :class="navsIndex==index?'sty':''">{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-zw"></div>
    <transition name="creditFile">
      <router-view />
    </transition>
    <!--底部-->
    <div class="footer">
      <div class="sqBox">
        <div class="tooter-box">
          <div class="box-top">
            <ul>
              <li v-for="(item,index) in navData0" :key="index">
                <router-link :to="item.url">
                  <span>{{item.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="box-bot">CopyRight 2006-2020, All Rights Reserved 内蒙古XX有限公司 版权所有</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/headerFooter.scss";
export default {
  data() {
    return {
      navData: [
        { name: "首页", url: "/" },
        { name: "社区便民", url: "/communityConvenience" },
        { name: "会员商城", url: "/shop/index" },
        { name: "居家安防", url: "/" },
      ],
      navData0: [
        { name: "首页", url: "/" },
        { name: "社区便民", url: "/communityConvenience" },
        { name: "会员商城", url: "/shop/index" },
        { name: "居家安防", url: "/" },
        { name: "手机App", url: "/" },
      ],
      token: "",
      avatar: "",
    };
  },
  mounted() {
    let token = this.$store.state.token;
    this.token = token;
    // 获取用户信息
    if (this.token) {
      this.$api.article
        .user({
          token: this.token,
        })
        .then((res) => {
          console.log("头部数据", res);
          this.avatar = res.data.avatar;
          console.log(this.avatar);
        });
    }
  },
  computed: {
    navsIndex() {
      return this.$store.state.isNav;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style lang="scss" scoped>
.creditFile-enter {
  opacity: 0;
}
.creditFile-enter-active {
  transition: opacity 1s ease;
}
.creditFile-enter-to {
  opacity: 1;
  position: relative;
}
.creditFile-leave {
  opacity: 1;
}
.creditFile-leave-active {
  transition: opacity 1s ease;
}
.creditFile-leave-to {
  opacity: 0;
  position: absolute;
}
</style>
