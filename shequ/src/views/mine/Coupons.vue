<template>
  <div class="coupons">
    <div class="coupons-box">
      <div class="coupons-title">
        <p>我的券包</p>
      </div>
      <div class="coupons-lis">
        <div class="lis-sx">
          <template v-for="(item,index) in listSx">
            <p :key="index" :class="{'sty':listSxInd==index}" @click="sxCli(index)">
              <span>{{item}}</span>
            </p>
          </template>
        </div>
        <ul>
          <li>
            <div class="lis-box zc">
              <div class="box-top">
                <p class="box-many">
                  <span class="rmb">￥</span>
                  <span class="number">5</span>
                </p>
                <p class="box-lx">满30可用</p>
                <p class="box-time">2020.06.12 15:00</p>
                <p class="box-time">2020.06.12 15:00</p>
              </div>
              <div class="box-bot">
                <div class="bot-ss">
                  <p class="box-text">
                    <span class="text-l">限品类：</span>
                    <span class="text-r">全品类(特例商品除外)</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">限平台：</span>
                    <span class="text-r">全平台</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">券编号：</span>
                    <span class="text-r">116642314853</span>
                  </p>
                </div>

                <p class="sybtn">立即使用</p>
              </div>
            </div>
          </li>
          <li>
            <div class="lis-box gq">
              <div class="box-top">
                <p class="box-many">
                  <span class="rmb">￥</span>
                  <span class="number">5</span>
                </p>
                <p class="box-lx">满30可用</p>
                <p class="box-time">2020.06.12 15:00</p>
                <p class="box-time">2020.06.12 15:00</p>
              </div>
              <div class="box-bot">
                <div class="bot-ss">
                  <p class="box-text">
                    <span class="text-l">限品类：</span>
                    <span class="text-r">全品类(特例商品除外)</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">限平台：</span>
                    <span class="text-r">全平台</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">券编号：</span>
                    <span class="text-r">116642314853</span>
                  </p>
                </div>

                <p class="sybtn">立即使用</p>
              </div>
            </div>
          </li>
          <li>
            <div class="lis-box gq">
              <div class="box-top">
                <p class="box-many">
                  <span class="rmb">￥</span>
                  <span class="number">5</span>
                </p>
                <p class="box-lx">满30可用</p>
                <p class="box-time">2020.06.12 15:00</p>
                <p class="box-time">2020.06.12 15:00</p>
              </div>
              <div class="box-bot">
                <div class="bot-ss">
                  <p class="box-text">
                    <span class="text-l">限品类：</span>
                    <span class="text-r">全品类(特例商品除外)</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">限平台：</span>
                    <span class="text-r">全平台</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">券编号：</span>
                    <span class="text-r">116642314853</span>
                  </p>
                </div>

                <p class="sybtn">立即使用</p>
              </div>
            </div>
          </li>
          <li>
            <div class="lis-box gq">
              <div class="box-top">
                <p class="box-many">
                  <span class="rmb">￥</span>
                  <span class="number">5</span>
                </p>
                <p class="box-lx">满30可用</p>
                <p class="box-time">2020.06.12 15:00</p>
                <p class="box-time">2020.06.12 15:00</p>
              </div>
              <div class="box-bot">
                <div class="bot-ss">
                  <p class="box-text">
                    <span class="text-l">限品类：</span>
                    <span class="text-r">全品类(特例商品除外)</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">限平台：</span>
                    <span class="text-r">全平台</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">券编号：</span>
                    <span class="text-r">116642314853</span>
                  </p>
                </div>

                <p class="sybtn">立即使用</p>
              </div>
            </div>
          </li>
          <li>
            <div class="lis-box gq">
              <div class="box-top">
                <p class="box-many">
                  <span class="rmb">￥</span>
                  <span class="number">5</span>
                </p>
                <p class="box-lx">满30可用</p>
                <p class="box-time">2020.06.12 15:00</p>
                <p class="box-time">2020.06.12 15:00</p>
              </div>
              <div class="box-bot">
                <div class="bot-ss">
                  <p class="box-text">
                    <span class="text-l">限品类：</span>
                    <span class="text-r">全品类(特例商品除外)</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">限平台：</span>
                    <span class="text-r">全平台</span>
                  </p>
                  <p class="box-text">
                    <span class="text-l">券编号：</span>
                    <span class="text-r">116642314853</span>
                  </p>
                </div>

                <p class="sybtn">立即使用</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/coupons.scss";
export default {
  data() {
    return {
      listSxInd: 0,
      listSx: ["全部券类型", "新到账", "即将过期"]
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 导航改变状态
    this.$store.dispatch("setMin", this.$route.query.id);
  },
  methods: {
    sxCli(i) {
      this.listSxInd = i;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>