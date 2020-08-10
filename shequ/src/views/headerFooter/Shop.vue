<template>
  <div class="shop">
    <div class="sqBox">
      <div class="shop-box">
        <div class="box-left">
          <div class="shop-tab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="便民服务" name="0"></el-tab-pane>
              <el-tab-pane label="二手房" name="1"></el-tab-pane>
              <el-tab-pane label="二手物品" name="2"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="left-list" v-if="activeName==0">
            <ul>
              <li v-for="(item,index) in datlis" :key="index" @click="jrxqCli(item.id)">
                <div class="list-box">
                  <div class="lis-l">
                    <img :src="'http://zt.shenyueyun.com'+item.image" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">{{item.title}}</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>{{item.address}}</span>
                      </p>
                      <!-- <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>-->
                    </div>
                    <div class="r-bot">
                      <span class="number" v-if="item.price_type==0">暂无报价</span>
                      <span class="number" v-if="item.price_type==1">{{item.price}}</span>
                      <span class="number" v-if="item.price_type==2">面议</span>
                      <span class="yy" v-if="item.price_type==1">元/{{item.price_unit}}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="left-list" v-if="activeName==1">
            <ul>
              <li v-for="(item,index) in datlis" :key="index" @click="jrxqCli(item.id)">
                <div class="list-box">
                  <div class="lis-l">
                    <img :src="'http://zt.shenyueyun.com'+item.image" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">{{item.title}}</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>{{item.address}}</span>
                      </p>
                      <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>{{item.room}}室{{item.hall}}厅{{item.toilet}}卫-{{item.area}}㎡</span>
                      </p>
                    </div>
                    <div class="r-bot">
                      <span class="number">{{item.rent}}</span>
                      <span class="yy" v-if="item.housing_type==2">元/平米</span>
                      <span class="yy" v-else>元/月</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="left-list" v-if="activeName==2">
            <ul>
              <li v-for="(item,index) in datlis" :key="index" @click="jrxqCli(item.id)">
                <div class="list-box">
                  <div class="lis-l">
                    <img :src="'http://zt.shenyueyun.com'+item.image" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">{{item.title}}</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>{{item.address}}</span>
                      </p>
                      <!-- <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>-->
                    </div>
                    <div class="r-bot">
                      <span class="number" v-if="item.price_type==0">暂无报价</span>
                      <span class="number" v-if="item.price_type==1">{{item.price}}</span>
                      <span class="number" v-if="item.price_type==2">面议</span>
                      <span class="yy" v-if="item.price_type==1">元/{{item.price_unit}}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--分页-->
          <div class="fy">
            <div class="fy-box">
              <el-pagination
                @current-change="change"
                background
                :current-page.sync="currentPage"
                :hide-on-single-page="true"
                :page-size="16"
                layout="prev, pager, next"
                :total="total"
                prev-text="上一页"
                next-text="下一页"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="box-right">
          <div class="right-top">
            <div class="top-img">
              <img :src="'http://zt.shenyueyun.com'+dpxx.logo" alt />
            </div>
            <p class="top-name">{{dpxx.shop_name}}</p>
            <div class="top-bot">
              <div class="bot-l">
                <p class="l-top">{{dpxx.createtime}}个月</p>
                <p class="l-bot">加入时长</p>
              </div>
              <div class="bor-r">
                <p class="r-top">{{dpxx.count}}个</p>
                <p class="r-bot">发布商品</p>
              </div>
            </div>
          </div>
          <div class="right-bot">
            <p class="bot-title">
              <span>下载APP</span>
              <i class="iconfont">&#xe785;</i>
            </p>
            <div class="bot-rwm">
              <img src="@assets/img/ewm.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/shop.scss";
export default {
  data() {
    return {
      activeName: "0",
      id: null,
      token: null,
      dpxx: {},
      datlis: [],
      // 分页
      total: 0,
      currentPage: 1,
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 获取id
    let id = this.$route.query.id;
    this.id = id;
    console.log(this.id);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 获取服务列表
    this.$api.article
      .getMyCommunityShop({
        token: this.token,
        shop_id: this.id,
      })
      .then((res) => {
        console.log("获取服务列表", res);
        this.dpxx = res.data.data.shop;
        this.datlis = res.data.data.rows;
        this.total = res.data.data.total;
      });
  },
  methods: {
    // tab切换
    handleClick(tab, event) {
      this.currentPage = 1;
      console.log(tab.index, event);
      if (tab.index == 0) {
        this.$api.article
          .getMyCommunityShop({
            token: this.token,
            shop_id: this.id,
          })
          .then((res) => {
            console.log("获取服务列表", res);
            this.datlis = res.data.data.rows;
            this.total = res.data.data.total;
          });
      }
      if (tab.index == 1) {
        this.$api.article
          .getMyHousingShop({
            token: this.token,
            shop_id: this.id,
          })
          .then((res) => {
            console.log(res);
            this.datlis = res.data.data.rows;
            this.total = res.data.data.total;
          });
      }
      if (tab.index == 2) {
        this.$api.article
          .getMySecondgoodsShop({
            token: this.token,
            shop_id: this.id,
          })
          .then((res) => {
            console.log(res);
            this.datlis = res.data.data.rows;
            this.total = res.data.data.total;
          });
      }
    },
    jrxqCli(id) {
      if (this.activeName == 0) {
        this.$router.push({ path: "/productDetails", query: { id: id } });
      }
      if (this.activeName == 1) {
        this.$router.push({ path: "/productDetails1", query: { id: id } });
      }
      if (this.activeName == 2) {
        this.$router.push({ path: "/productDetails2", query: { id: id } });
      }
    },
    // 分页
    change(e) {
      console.log(e);
      if (this.activeName == 0) {
        this.$api.article
          .getMyCommunityShop({
            token: this.token,
            shop_id: this.id,
            page: e,
          })
          .then((res) => {
            console.log("获取服务列表", res);
            this.datlis = res.data.data.rows;
          });
      }
      if (this.activeName == 1) {
        this.$api.article
          .getMyHousingShop({
            token: this.token,
            shop_id: this.id,
            page: e,
          })
          .then((res) => {
            console.log(res);
            this.datlis = res.data.data.rows;
          });
      }
      if (this.activeName == 2) {
        this.$api.article
          .getMySecondgoodsShop({
            token: this.token,
            shop_id: this.id,
            page: e,
          })
          .then((res) => {
            console.log(res);
            this.datlis = res.data.data.rows;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>