<template>
  <div class="homePage">
    <div class="banner">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item,index) in bannerData" :key="index">
          <img :src="item" alt />
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="con-box">
      <div class="sqBox">
        <!--优质服务商-->
        <div class="yzfws">
          <p class="yzfws-title">优质服务商</p>
          <ul class="lis1nav">
            <template v-for="(item,index) in nav1Dat">
              <li
                :key="index"
                :class="{'sty':index==nav1Ind}"
                @click="yzfwCli(index,item.id)"
              >{{item.name}}</li>
            </template>
            <li class="gd">更多</li>
          </ul>
          <div class="sqbmFw-lists">
            <template v-if="nav1Inds!=4">
              <ul v-if="fwLists&&fwLists.length!=0">
                <li v-for="(item,index) in fwLists" :key="index" @click="lisClis(item.id)">
                  <div class="lists-box">
                    <div class="box-top">
                      <img v-if="item.image" :src="'http://zt.shenyueyun.com/'+item.image" alt />
                      <img v-else src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">{{item.title}}</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>{{item.address}}</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number" v-if="item.price_type==0">暂无报价</span>
                      <span class="jg-number" v-if="item.price_type==1">{{item.price}}</span>
                      <span class="jg-number" v-if="item.price_type==2">面议</span>
                      <span class="jg-yy" v-if="item.price_type==1">元/{{item.price_unit}}</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
              </ul>
            </template>
            <template v-else>
              <ul v-if="fwLists&&fwLists.length!=0">
                <li v-for="(item,index) in fwLists" :key="index" @click="lisClis(item.id)">
                  <div class="lists-box">
                    <div class="box-top">
                      <img v-if="item.image" :src="'http://zt.shenyueyun.com/'+item.image" alt />
                      <img v-else src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">{{item.title}}</p>
                    <div class="box-con">
                      <p class="dz" :title="item.address">
                        <i class="iconfont">&#xe634;</i>
                        <span>{{item.address}}</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>{{item.bedroom}}({{item.room}}室{{item.hall}}厅{{item.toilet}}卫){{item.area}}㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">{{item.rent}}</span>
                      <span class="jg-yy">元/{{item.price_unit}}</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
              </ul>
            </template>
          </div>
        </div>
        <!-- 广告位 -->
        <div class="syggw1">
          <img src="img/syggw1.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/homePage.scss";
export default {
  data() {
    return {
      token: null,
      swiperOptions: {
        watchOverflow: true,
        effect: "fade",
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
        },
        uniqueNavElements: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      bannerData: ["img/sybanner.png"],
      nav1Dat: [{ name: "全部", id: 1 }],
      nav1Ind: 0,
      nav1Inds: 0,
      userInfo: {},
      fwLists: [],
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 0);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 社区服务类型列表
    this.$api.article
      .gerServiceList({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        let arr = this.nav1Dat;
        if (res.data.code == 1) {
          let lis = res.data.data;
          for (let i = 0; i < lis.length; i++) {
            arr.push(lis[i]);
          }
          let fcfw = { id: arr.length, name: "房屋租赁" };
          arr.push(fcfw);
          this.nav1Dat = arr;
        }
      });

    // 获取用户信息
    this.$api.article
      .user({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.userInfo = res.data.data;
          // 获取服务列表
          this.$api.article
            .gerCommunityList({
              token: this.token,
              AREA_CODE: this.userInfo.AREA_CODE,
              service_type: this.nav1Inds,
              limit: 12,
            })
            .then((res) => {
              console.log("服务列表", res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
              }
            });
        }
      });
  },
  methods: {
    yzfwCli(ins, id) {
      this.nav1Ind = ins;
      this.nav1Inds = id;
      console.log(id);
      if (id != 4) {
        // 获取服务列表
        this.$api.article
          .gerCommunityList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
            service_type: this.nav1Inds,
            limit: 12,
          })
          .then((res) => {
            console.log("服务列表", res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
            }
          });
      } else {
        this.$api.article
          .gerHousingList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
            limit: 12,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>