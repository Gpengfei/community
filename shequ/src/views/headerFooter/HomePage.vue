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
                @click="yzfwCli(index,item.id,item.name)"
              >{{item.name}}</li>
            </template>
            <li class="gd">更多</li>
          </ul>
          <div class="sqbmFw-lists">
            <template v-if="nav1Inds==4">
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
            <template v-else-if="nav1Inds==5">
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
                      <!-- <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>{{item.bedroom}}({{item.room}}室{{item.hall}}厅{{item.toilet}}卫){{item.area}}㎡</span>
                      </p>-->
                    </div>
                    <div class="box-jg">
                      <!-- <span class="jg-number">{{item.rent}}</span>
                      <span class="jg-yy">元/{{item.price_unit}}</span>-->
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
          </div>
        </div>
        <!-- 广告位 -->
        <div class="syggw1">
          <img src="img/syggw1.png" alt />
        </div>
        <!-- 精选商品 -->
        <div class="jxsp">
          <p class="jxsp-title">精选商品</p>
          <ul class="lis1nav">
            <template v-for="(item,index) in nav2Dat">
              <li
                :key="index"
                :class="{'sty':index==nav2Ind}"
                @click="jxspCli(index,item.id)"
              >{{item.name}}</li>
            </template>
            <li class="gd">更多</li>
          </ul>
          <div class="spbox">
            <div class="spbox-l">
              <div class="l-top">
                <img src="@assets/img/syspgd.png" alt />
              </div>
              <div class="l-bot">
                <img src="@assets/img/syspgd.png" alt />
              </div>
            </div>
            <div class="spbox-r">
              <ul>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
                <li>
                  <div class="splis-box">
                    <div class="box-top">
                      <img src="img/sysp.png" alt />
                    </div>
                    <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
                    <p class="box-myn">￥91.45</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 广告位 -->
        <div class="syggw1">
          <img src="img/syggw2.png" alt />
        </div>
        <!--猜你喜欢-->
        <div class="cnxh">
          <p class="cnxh-title">猜你喜欢</p>
          <ul>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp1.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp1.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp1.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp1.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp1.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
            <li>
              <div class="splis-box">
                <div class="box-top">
                  <img src="img/sysp.png" alt />
                </div>
                <p class="box-text">网红款床上用品四件套洗水棉被套床单学生单人宿舍三件套4夏季</p>
              </div>
            </li>
          </ul>
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
      nav2Dat: [
        { name: "全部", id: 0 },
        { name: "书画", id: 1 },
        { name: "电器", id: 2 },
        { name: "手工制品", id: 3 },
        { name: "药食同源", id: 4 },
        { name: "老年产品", id: 5 },
        { name: "智能家居", id: 6 },
        { name: "进口食品", id: 7 },
        { name: "康复理疗", id: 8 },
      ],
      nav2Ind: 0,
      fl1Name: "",
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
          let fcfws = { id: arr.length, name: "二手物品" };
          arr.push(fcfws);
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
        this.userInfo = res.data;
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
      });
  },
  methods: {
    // 优质服务
    yzfwCli(ins, id, name) {
      this.nav1Ind = ins;
      this.nav1Inds = id;
      this.fl1Name = name;
      console.log(id);
      if (id == 4) {
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
      } else if (id == 5) {
        this.$api.article
          .gerSecondgoodsList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
          })
          .then((res) => {
            console.log("二手货", res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
            }
          });
      } else {
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
    },
    // 精选商品
    jxspCli(index, id) {
      console.log(id);
      this.nav2Ind = index;
    },
    // 进入商品详情
    lisClis(index) {
      console.log(index);
      if (this.fl1Name == "房屋租赁") {
        this.$router.push({ path: "/productDetails1", query: { id: index } });
      } else if (this.fl1Name == "二手物品") {
        this.$router.push({ path: "/productDetails2", query: { id: index } });
      } else {
        this.$router.push({ path: "/productDetails", query: { id: index } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>