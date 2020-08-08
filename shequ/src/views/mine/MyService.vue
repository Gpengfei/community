<template>
  <div class="myService">
    <div class="myService-box">
      <div class="myService-sxandsoso">
        <ul>
          <li :class="{'sty':tab1Ind==0}" @click="tab1Cli(0)">服务</li>
          <li :class="{'sty':tab1Ind==1}" @click="tab1Cli(1)">房产</li>
          <li :class="{'sty':tab1Ind==2}" @click="tab1Cli(2)">二手物品</li>
        </ul>
        <!-- <div class="pfsoso">
          <div class="pfsoso-box">
            <input type="text" placeholder="商品名称" />
            <i class="iconfont">&#xe608;</i>
          </div>
        </div>-->
      </div>
      <div class="myService-sx">
        <div class="sx-box">
          <div class="sx-r">
            <ul>
              <li :class="{'sty':tab2Ind===''}" @click="tab2Cli('')">全部</li>
              <li :class="{'sty':tab2Ind===1}" @click="tab2Cli(1)">已上架</li>
              <li :class="{'sty':tab2Ind===0}" @click="tab2Cli(0)">已下架</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="myService-lis" v-if="tab1Ind==0">
        <ul>
          <li v-for="(item,index) in lisDat" :key="index">
            <div class="lis-box">
              <div class="lis-img">
                <img :src="'http://zt.shenyueyun.com'+item.image" alt />
              </div>
              <div class="lis-text">
                <div class="text-top">{{item.title}}</div>
                <div class="text-con1">
                  <p class="dd">
                    <i class="iconfont">&#xe634;</i>
                    <span>{{item.address}}</span>
                  </p>
                  <!-- <p class="pm">
                    <i class="iconfont">&#xe6c2;</i>
                    <span>主卧(4室)-28㎡</span>
                  </p>-->
                </div>
                <div class="text-con2">
                  <template v-if="item.price_type==0">
                    <span class="num">暂无报价</span>
                  </template>
                  <template v-if="item.price_type==2">
                    <span class="num">面议</span>
                  </template>
                  <template v-if="item.price_type==1">
                    <span class="num">{{item.price}}</span>
                    <span class="yy">元/{{item.price_unit}}</span>
                  </template>
                </div>
              </div>
              <div class="lis-r">
                <span @click="bj(item.id)">编辑</span>
                <span>下架</span>
                <span>删除</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="myService-lis" v-if="tab1Ind==1">
        <ul>
          <li v-for="(item,index) in lisDat" :key="index">
            <div class="lis-box">
              <div class="lis-img">
                <img :src="'http://zt.shenyueyun.com'+item.image" alt />
              </div>
              <div class="lis-text">
                <div class="text-top">{{item.title}}</div>
                <div class="text-con1">
                  <p class="dd">
                    <i class="iconfont">&#xe634;</i>
                    <span>{{item.address}}</span>
                  </p>
                  <p class="pm">
                    <i class="iconfont">&#xe6c2;</i>
                    <span>{{item.room}}室{{item.hall}}厅{{item.toilet}}卫-{{item.area}}㎡</span>
                  </p>
                </div>
                <div class="text-con2">
                  <span class="num">{{item.rent}}</span>
                  <span class="yy" v-if="item.housing_type==2">元/平米</span>
                  <span class="yy" v-else>元/月</span>
                </div>
              </div>
              <div class="lis-r">
                <span @click="bj(item.id)">编辑</span>
                <span>下架</span>
                <span>删除</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="myService-lis" v-if="tab1Ind==2">
        <ul>
          <li v-for="(item,index) in lisDat" :key="index">
            <div class="lis-box">
              <div class="lis-img">
                <img :src="'http://zt.shenyueyun.com'+item.image" alt />
              </div>
              <div class="lis-text">
                <div class="text-top">{{item.title}}</div>
                <div class="text-con1">
                  <p class="dd">
                    <i class="iconfont">&#xe634;</i>
                    <span>{{item.address}}</span>
                  </p>
                  <!-- <p class="pm">
                    <i class="iconfont">&#xe6c2;</i>
                    <span>主卧(4室)-28㎡</span>
                  </p>-->
                </div>
                <div class="text-con2">
                  <template v-if="item.price_type==0">
                    <span class="num">暂无报价</span>
                  </template>
                  <template v-if="item.price_type==2">
                    <span class="num">面议</span>
                  </template>
                  <template v-if="item.price_type==1">
                    <span class="num">{{item.price}}</span>
                    <span class="yy">元/{{item.price_unit}}</span>
                  </template>
                </div>
              </div>
              <div class="lis-r">
                <span @click="bj(item.id)">编辑</span>
                <span>下架</span>
                <span>删除</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fy">
      <div class="fy-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="myts"
          :total="zts"
          :current-page.sync="currentPage"
          :hide-on-single-page="true"
          prev-text="上一页"
          next-text="下一页"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/myService.scss";
export default {
  data() {
    return {
      token: null,
      tab1Ind: 0,
      tab2Ind: "",
      lisDat: [],
      // 分页
      myts: 16,
      zts: 0,
      currentPage: 1,
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 导航改变状态
    this.$store.dispatch("setMin", this.$route.query.id);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    if (this.tab1Ind == 0) {
      // 获取服务
      this.$api.article
        .getMyCommunityList({
          token: this.token,
          is_open: this.tab2Ind,
        })
        .then((res) => {
          console.log(res);
          this.lisDat = res.data.data.rows;
          this.zts = res.data.data.total;
        });
    }
    // 获取房屋
    if (this.tab1Ind == 1) {
      this.$api.article
        .gerMyHousingSelect({
          token: this.token,
          is_open: this.tab2Ind,
        })
        .then((res) => {
          console.log(res);
          this.lisDat = res.data.data.rows;
          this.zts = res.data.data.total;
        });
    }
    // 获取二手货
    if (this.tab1Ind == 2) {
      this.$api.article
        .getMySecondgoodsList({
          token: this.token,
          is_open: this.tab2Ind,
        })
        .then((res) => {
          console.log("获取二手货", res);
          this.lisDat = res.data.data.rows;
          this.zts = res.data.data.total;
        });
    }
  },
  methods: {
    tab1Cli(e) {
      this.currentPage = 1;
      this.tab1Ind = e;
      if (this.tab1Ind == 0) {
        // 获取服务
        this.$api.article
          .getMyCommunityList({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取房屋
      if (this.tab1Ind == 1) {
        this.$api.article
          .gerMyHousingSelect({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取二手货
      if (this.tab1Ind == 2) {
        this.$api.article
          .getMySecondgoodsList({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log("获取二手货", res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
    },
    tab2Cli(e) {
      this.currentPage = 1;
      this.tab2Ind = e;
      if (this.tab1Ind == 0) {
        // 获取服务
        this.$api.article
          .getMyCommunityList({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取房屋
      if (this.tab1Ind == 1) {
        this.$api.article
          .gerMyHousingSelect({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取二手货
      if (this.tab1Ind == 2) {
        this.$api.article
          .getMySecondgoodsList({
            token: this.token,
            is_open: this.tab2Ind,
          })
          .then((res) => {
            console.log("获取二手货", res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
    },
    bj(id) {
      if (this.tab1Ind == 0) {
        this.$router.push({ path: "/releaseService", query: { ids: id } });
      }
      if (this.tab1Ind == 1) {
        this.$router.push({ path: "/release", query: { ids: id } });
      }
      if (this.tab1Ind == 2) {
        this.$router.push({ path: "/secondHandGoods", query: { ids: id } });
      }
    },
    // 分页
    handleCurrentChange(val) {
      console.log(val);
      if (this.tab1Ind == 0) {
        // 获取服务
        this.$api.article
          .getMyCommunityList({
            token: this.token,
            is_open: this.tab2Ind,
            page: val,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取房屋
      if (this.tab1Ind == 1) {
        this.$api.article
          .gerMyHousingSelect({
            token: this.token,
            is_open: this.tab2Ind,
            page: val,
          })
          .then((res) => {
            console.log(res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
      // 获取二手货
      if (this.tab1Ind == 2) {
        this.$api.article
          .getMySecondgoodsList({
            token: this.token,
            is_open: this.tab2Ind,
            page: val,
          })
          .then((res) => {
            console.log("获取二手货", res);
            this.lisDat = res.data.data.rows;
            this.zts = res.data.data.total;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>