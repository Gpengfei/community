<template>
  <div class="mine">
    <div class="sqBox">
      <div class="mine-box">
        <div class="box-l">
          <div class="grxx">
            <div class="grxx-img">
              <img src="img/minetx.png" alt class="tx" />
              <img src="img/minevip.png" alt class="vip" />
            </div>
            <p class="grxx-name">张三</p>
            <p class="grxx-zz">纺织社区居委会</p>
            <p class="fb-btn">开始发布</p>
          </div>
          <div class="mine-nav">
            <ul>
              <template v-for="(item,index) in navData">
                <li
                  :key="index"
                  :class="{'xian':item.styOff,'sty':index==navIndex}"
                  @click="navCli(item.url,index)"
                >{{item.name}}</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="box-r">
          <transition name="creditFile">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/mine.scss";
export default {
  data() {
    return {
      navData: [
        { name: "我的通知", styOff: false, url: "/mine" },
        { name: "我的服务、房产", styOff: true, url: "/myService" },
        { name: "资料与账号", styOff: false, url: "/dataAndName" },
        { name: "实名认证", styOff: true, url: "/dataAndName" },
        { name: "健康档案", styOff: true, url: "/healthRecords" },
        { name: "我的订单", styOff: false, url: "/myOrder" },
        { name: "商品评价", styOff: true, url: "/commodityEvaluation" },
        { name: "服务评价", styOff: false, url: "/mine" },
        { name: "我的券包", styOff: true, url: "/coupons" },
        { name: "会员权益", styOff: false, url: "/vipPrivilege" },
        { name: "积分商城", styOff: false, url: "/mine" }
      ]
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
  },
  computed: {
    navIndex() {
      return this.$store.state.minNav;
    }
  },
  methods: {
    navCli(url, index) {
      this.$router.push({ path: url, query: { id: index } });
      this.$store.dispatch("setMin", index);
    }
  }
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