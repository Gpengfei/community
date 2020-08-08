<template>
  <div class="productDetails">
    <div class="sqBox">
      <Breadcrumb :lis-data="breData" />
      <div class="productDetails-box">
        <div class="productDetails-box-l">
          <div class="headers">
            <div class="headers-top">{{nrData.title}}</div>
            <div class="headers-bottom">
              <div class="bottom-l">
                <div class="l-top">
                  <img :src="'http://zt.shenyueyun.com/'+imgUrl" alt />
                </div>
                <div class="l-bot">
                  <swiper :options="swiperOptions" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in bannerData" :key="index">
                      <img :src="'http://zt.shenyueyun.com/'+item" alt @click="banCli(item)" />
                    </swiper-slide>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                  </swiper>
                </div>
              </div>
              <div class="bottom-r">
                <p class="jg">
                  <span class="number" v-if="nrData.price_type==0">暂无报价</span>
                  <span class="number" v-if="nrData.price_type==1">{{nrData.price}}</span>
                  <span class="number" v-if="nrData.price_type==2">面议</span>
                  <span class="yc" v-if="nrData.price_type==1">元/{{nrData.price_unit}}</span>
                </p>
                <div class="jbxx">
                  <p class="jbxx-l">交易类型：</p>
                  <p class="jbxx-r">
                    <span v-if="nrData.goods_type==1">互换</span>
                    <span v-if="nrData.goods_type==2">寻物</span>
                    <!-- <template v-for="(item,index) in nrData.service_type">
                      <span :key="index" v-if="index==nrData.service_type.length-1">{{item.name}}</span>
                      <span :key="index" v-else>{{item.name}}、</span>
                    </template>-->
                  </p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">区域：</p>
                  <p class="jbxx-r">
                    <template v-for="(item,index) in nrData.contact_area">
                      <span :key="index">{{item.STREET_NAME}}&ensp;&ensp;</span>
                    </template>
                  </p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">联 系 人：</p>
                  <p class="jbxx-r">{{nrData.contact_name}}</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">商家地址：</p>
                  <p class="jbxx-r">{{nrData.address}}</p>
                </div>
                <p class="lxsjbtn" @click="lxsj(nrData.contact_name,nrData.contact_phone)">
                  <i class="iconfont">&#xe645;</i>
                  <span>联系商家</span>
                </p>
                <p class="lxsjbtn" @click="sqfw(nrData.id)">
                  <i class="iconfont">&#xe60b;</i>
                  <span>申请物品</span>
                </p>
              </div>
            </div>
          </div>
          <div class="fwts">
            <p class="fwts-title">物品特色</p>
            <div class="fwts-bq">
              <span>地毯清洗</span>
              <span>开荒保洁</span>
              <span>物业保洁</span>
            </div>
          </div>
          <div class="fwms">
            <p class="fwms-title">物品描述</p>
            <p class="fwms-js">{{nrData.content}}</p>
          </div>
          <div class="fwtp">
            <p class="fwtp-title">物品图片</p>
            <ul>
              <li v-for="(item,index) in bannerData" :key="index">
                <img :src="'http://zt.shenyueyun.com'+item" alt />
              </li>
            </ul>
          </div>
          <!-- <div class="yhpj">
            <p class="fwtp-title">用户评价（68）</p>
            <ul>
              <li>
                <div class="pjlist">
                  <div class="pjlist-l">
                    <img src="img/pjtx.png" alt />
                    <span>用**称233</span>
                  </div>
                  <div class="pjlist-r">
                    <p class="r-top">
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                    </p>
                    <p
                      class="r-text"
                    >家居360°保洁物品：厨房清洁：厨房全面清洁、除污、除油、蒸汽无缝杀菌、橱柜及瓷砖面抑菌处理。卫生间清洁：保养、洁具、瓷砖除污</p>
                    <div class="r-img">
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                    </div>
                    <div class="r-dtp">
                      <img src="img/pjdt.png" alt />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="pjlist">
                  <div class="pjlist-l">
                    <img src="img/pjtx.png" alt />
                    <span>用**称233</span>
                  </div>
                  <div class="pjlist-r">
                    <p class="r-top">
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                    </p>
                    <p
                      class="r-text"
                    >家居360°保洁物品：厨房清洁：厨房全面清洁、除污、除油、蒸汽无缝杀菌、橱柜及瓷砖面抑菌处理。卫生间清洁：保养、洁具、瓷砖除污</p>
                    <div class="r-img">
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="pjlist">
                  <div class="pjlist-l">
                    <img src="img/pjtx.png" alt />
                    <span>用**称233</span>
                  </div>
                  <div class="pjlist-r">
                    <p class="r-top">
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                    </p>
                    <p
                      class="r-text"
                    >家居360°保洁物品：厨房清洁：厨房全面清洁、除污、除油、蒸汽无缝杀菌、橱柜及瓷砖面抑菌处理。卫生间清洁：保养、洁具、瓷砖除污</p>
                    <div class="r-img">
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="pjlist">
                  <div class="pjlist-l">
                    <img src="img/pjtx.png" alt />
                    <span>用**称233</span>
                  </div>
                  <div class="pjlist-r">
                    <p class="r-top">
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                    </p>
                    <p
                      class="r-text"
                    >家居360°保洁物品：厨房清洁：厨房全面清洁、除污、除油、蒸汽无缝杀菌、橱柜及瓷砖面抑菌处理。卫生间清洁：保养、洁具、瓷砖除污</p>
                    <div class="r-img">
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="pjlist">
                  <div class="pjlist-l">
                    <img src="img/pjtx.png" alt />
                    <span>用**称233</span>
                  </div>
                  <div class="pjlist-r">
                    <p class="r-top">
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                      <i class="iconfont">&#xe642;</i>
                    </p>
                    <p
                      class="r-text"
                    >家居360°保洁物品：厨房清洁：厨房全面清洁、除污、除油、蒸汽无缝杀菌、橱柜及瓷砖面抑菌处理。卫生间清洁：保养、洁具、瓷砖除污</p>
                    <div class="r-img">
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                      <img src="img/pjxt.png" alt />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>-->
        </div>
        <div class="productDetails-box-r">
          <div class="dprk">
            <div class="dprk-logo">
              <img v-if="dpxx.logo" :src="'http://zt.shenyueyun.com/'+dpxx.logo" alt />
              <img v-else src="@assets/img/dplogo.png" alt />
              <p>{{dpxx.shop_name}}</p>
            </div>
            <div class="sc">
              <div class="sc-l">
                <p class="l-top">{{dpxx.count}}个月</p>
                <p class="l-bot">加入时长</p>
              </div>
              <div class="sc-r">
                <p class="r-top">{{dpxx.createtime}}个</p>
                <p class="r-bot">发布商品</p>
              </div>
            </div>
            <div class="dprk-btn" @click="jrdp(dpxx.id)">进入店铺</div>
          </div>
          <div class="ewm">
            <p class="ewm-title">
              <span>下载APP</span>
              <i class="iconfont">&#xe785;</i>
            </p>
            <img src="@assets/img/ewm.png" alt />
          </div>
          <div class="cnxh1">
            <p class="cnxh1-title">猜你喜欢</p>
            <ul>
              <li v-for="(item,index) in GuessYouLikeIt" :key="index" @click="fwCli(item.id)">
                <img :src="'http://zt.shenyueyun.com/'+item.image" alt />
                <p>{{item.title}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bddt">
        <p class="bddt-title">店铺信息</p>
        <div id="map" style="min-height: 420px;"></div>
      </div>
      <div class="cnxh2">
        <p class="cnxh2-title">猜你喜欢</p>
        <ul>
          <li v-for="(item,index) in GuessYouLikeIt" :key="index" @click="fwCli(item.id)">
            <img :src="'http://zt.shenyueyun.com/'+item.image" alt />
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="tj">
        <div class="rmtj">
          <p class="rmtj-title">热门推荐</p>
          <ul>
            <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等物品清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品</li>
            <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品、专业检测治理设备空气净化提供甲醛检测、除甲醛等物品</li>
            <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等物品清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品</li>
            <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品、专业检测治理设备空气净化提供甲醛检测、除甲醛等物品</li>
          </ul>
        </div>
        <div class="xgtj">
          <p class="xgtj-title">相关推荐</p>
          <ul>
            <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等物品清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品</li>
            <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品、专业检测治理设备空气净化提供甲醛检测、除甲醛等物品</li>
            <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等物品清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品</li>
            <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等物品、专业检测治理设备空气净化提供甲醛检测、除甲醛等物品</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
import "@style/headerFooter/productDetails2.scss";
import Breadcrumb from "@components/Breadcrumb.vue";
// import Map from "@components/Map.vue";
export default {
  data() {
    return {
      token: null,
      id: null,
      breData: [
        { name: "社区便民", url: "/" },
        { name: "保洁劳务", url: "" },
        { name: "青福镇青北社区居民委员会", url: "" },
      ],
      imgUrl: "",
      bannerData: [],
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 8,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      nrData: {},
      jwd: [],
      GuessYouLikeIt: [],
      dpxx: {},
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 获取物品详情
    let id = this.$route.query.id;
    this.id = id;
    // 获取token
    let token = this.$store.state.token;
    this.token = token;

    this.$api.article
      .gerSecondgoodsDetailed({
        token: this.token,
        id: this.id,
      })
      .then((res) => {
        console.log("详情", res);
        if (res.data.code == 1) {
          let dat = res.data.data;
          dat.images = dat.images.split(",");
          this.init(dat.longitude, dat.latitude); //dat.longitude, dat.longitude
          this.bannerData = dat.images;
          this.imgUrl = dat.images[0];
          this.nrData = dat;
          // 猜你喜欢
          this.GuessYouLikeIt = res.data.data.sent_data;
          // 店铺
          this.dpxx = res.data.data.shop;
        }
      });
  },
  methods: {
    banCli(url) {
      this.imgUrl = url;
    },
    // 地图
    init(longitude, latitude) {
      console.log(longitude, latitude);
      let map = new AMap.Map("map", {
        zoom: 16, //级别
        center: [longitude, latitude], //中心点坐标
        viewMode: "3D", //使用3D视图
      });
      var marker = new AMap.Marker({
        position: [longitude, latitude],
      });
      map.add(marker);
    },
    // 进入店铺
    jrdp(id) {
      this.$router.push({ path: "/shop", query: { id: id } });
    },
    fwCli(id) {
      this.$router.push({ path: "/productDetails", query: { id: id } });
      this.$router.go(0);
    },
    // 联系商家
    lxsj(p, n) {
      console.log(p, n);
      this.$alert("联系方式：" + n, "联系人：" + p, {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: "尽快联系商家哦！",
          });
        },
      });
    },
    // 申请物品
    sqfw(id) {
      console.log(id);
      this.$api.article
        .sub_com({
          token: this.token,
          community_id: id,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 1) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
    },
  },
  components: {
    Breadcrumb,
    // Map,
  },
};
</script>

<style lang="scss" scoped>
</style>