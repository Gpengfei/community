<template>
  <div class="productDetails">
    <div class="sqBox">
      <Breadcrumb :lis-data="breData" />
      <div class="productDetails-box">
        <div class="productDetails-box-l">
          <div class="headers">
            <div class="headers-top">开荒保洁、日常保洁、物业保洁、擦玻璃、清洗地毯</div>
            <div class="headers-bottom">
              <div class="bottom-l">
                <div class="l-top">
                  <img :src="imgUrl" alt />
                </div>
                <div class="l-bot">
                  <swiper :options="swiperOptions" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in bannerData" :key="index">
                      <img :src="item.url" alt @click="banCli(item.url)" />
                    </swiper-slide>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                  </swiper>
                </div>
              </div>
              <div class="bottom-r">
                <p class="jg">
                  <span class="number">200</span>
                  <span class="yc">元/次</span>
                </p>
                <div class="jbxx">
                  <p class="jbxx-l">服务类型：</p>
                  <p class="jbxx-r">地毯清洗、开荒保洁、物业保洁</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">服务区域：</p>
                  <p class="jbxx-r">青福镇青北社区居民委员会 景富社区居委会 光辉社区居委会育新社区居委会</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">联 系 人：</p>
                  <p class="jbxx-r">李师傅</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">商家地址：</p>
                  <p class="jbxx-r">赛罕区乌兰察布东街与东影南路交汇处南150米</p>
                </div>
                <p class="lxsjbtn">
                  <i class="iconfont">&#xe645;</i>
                  <span>联系商家</span>
                </p>
              </div>
            </div>
          </div>
          <div class="fwts">
            <p class="fwts-title">服务特色</p>
            <div class="fwts-bq">
              <span>地毯清洗</span>
              <span>开荒保洁</span>
              <span>物业保洁</span>
            </div>
          </div>
          <div class="fwms">
            <p class="fwms-title">服务描述</p>
            <p
              class="fwms-js"
            >专业承接新居、旧居、楼宇、别墅、商场、工程、厂房、医院、4s店、复式楼、写字楼、办公楼、商厦、宾馆、酒店、及大中小型建筑物的全面日常保洁、开荒保洁、地毯清洗、地板清洗、玻璃清洗、钟点工与小时工。</p>
            <div class="fwms-zt">
              <p class="zt-title">业务范围:</p>
              <ul>
                <li>1.开荒保洁，单位保洁，家庭保洁，企业保洁，日常保洁。</li>
                <li>2.石材翻新，石材养护，石材结晶，石材打蜡，石材抛光。</li>
                <li>3.清洗地毯，羊毛地毯清洗，化纤地毯清洗，普通地毯清洗。</li>
                <li>4.清洗沙发，布衣沙发清洗，皮沙发清洗，皮革沙发清洗。</li>
                <li>5.椅子清洗，办公椅清洗，皮椅清洗，布椅清洗。</li>
                <li>6.窗帘清洗，薄纱窗帘清洗，加厚窗帘清洗，高中低档清洗。</li>
                <li>7.外墙清洗，玻璃清洗，广告牌清洗，室外灯具清洗。</li>
                <li>8.地板打蜡，地板增光，地板翻新，地板固体蜡。</li>
                <li>9.广告牌清洗,大小中等广告牌清洗。</li>
              </ul>
            </div>
          </div>
          <div class="fwtp">
            <p class="fwtp-title">服务图片</p>
            <ul>
              <li>
                <img src="img/fwtp1.png" alt />
              </li>
              <li>
                <img src="img/fwtp2.png" alt />
              </li>
              <li>
                <img src="img/fwtp3.png" alt />
              </li>
            </ul>
          </div>
        </div>
        <div class="productDetails-box-r">
          <div class="dprk">
            <div class="dprk-logo">
              <img src="@assets/img/dplogo.png" alt />
              <p>金万通保洁</p>
            </div>
            <div class="sc">
              <div class="sc-l">
                <p class="l-top">32个月</p>
                <p class="l-bot">加入时长</p>
              </div>
              <div class="sc-r">
                <p class="r-top">9个</p>
                <p class="r-bot">发布商品</p>
              </div>
            </div>
            <div class="dprk-btn" @click="jrdp">进入店铺</div>
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
              <li>
                <img src="img/cnxh1.png" alt="">
                <p>水管/水龙头维修 水龙头安装/维修 水龙</p>
              </li>
              <li>
                <img src="img/cnxh1.png" alt="">
                <p>水管/水龙头维修 水龙头安装/维修 水龙</p>
              </li>
              <li>
                <img src="img/cnxh1.png" alt="">
                <p>水管/水龙头维修 水龙头安装/维修 水龙</p>
              </li>
              <li>
                <img src="img/cnxh1.png" alt="">
                <p>水管/水龙头维修 水龙头安装/维修 水龙</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bddt">
      <p class="bddt-title">店铺信息</p>
        <Map/>
      </div>
      <div class="cnxh2">
        <p class="cnxh2-title">猜你喜欢</p>
        <ul>
            <li>
                <img src="img/cnxh2.png" alt="">
                <p>各种（品牌）家电维修 油烟机 空调，热水器 冰箱 洗衣机，壁挂炉哈哈哈</p>
            </li>
            <li>
                <img src="img/cnxh2.png" alt="">
                <p>各种（品牌）家电维修 油烟机 空调，热水器 冰箱 洗衣机，壁挂炉哈哈哈</p>
            </li>
            <li>
                <img src="img/cnxh2.png" alt="">
                <p>各种（品牌）家电维修 油烟机 空调，热水器 冰箱 洗衣机，壁挂炉哈哈哈</p>
            </li>
            <li>
                <img src="img/cnxh2.png" alt="">
                <p>各种（品牌）家电维修 油烟机 空调，热水器 冰箱 洗衣机，壁挂炉哈哈哈</p>
            </li>
            <li>
                <img src="img/cnxh2.png" alt="">
                <p>各种（品牌）家电维修 油烟机 空调，热水器 冰箱 洗衣机，壁挂炉哈哈哈</p>
            </li>
        </ul>
      </div>
      <div class="tj">
        <div class="rmtj">
            <p class="rmtj-title">热门推荐</p>
            <ul>
                <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等服务清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务</li>
                <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务、专业检测治理设备空气净化提供甲醛检测、除甲醛等服务</li>
                <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等服务清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务</li>
                <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务、专业检测治理设备空气净化提供甲醛检测、除甲醛等服务</li>
            </ul>
        </div>
        <div class="xgtj">
            <p class="xgtj-title">相关推荐</p>
            <ul>
                <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等服务清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务</li>
                <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务、专业检测治理设备空气净化提供甲醛检测、除甲醛等服务</li>
                <li>揽家家政连锁家庭保洁提供3小时消毒保洁、4小时消毒保洁等服务清洗油烟机、疏通维修家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务</li>
                <li>保洁擦玻璃清洗油烟机家庭保洁提供深度保洁低于50平方米、深度保洁50-69平方米等服务、专业检测治理设备空气净化提供甲醛检测、除甲醛等服务</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/productDetails.scss";
import Breadcrumb from "@components/Breadcrumb.vue";
import Map from "@components/Map.vue"
export default {
  data() {
    return {
      breData: [
        { name: "社区便民", url: "/" },
        { name: "保洁劳务", url: "" },
        { name: "青福镇青北社区居民委员会", url: "" }
      ],
      imgUrl: "img/minibanner1.png",
      bannerData: [
        { url: "img/minibanner1.png" },
        { url: "img/minibanner2.png" },
        { url: "img/minibanner3.png" },
        { url: "img/minibanner4.png" }
      ],
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 8,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
  },
  methods: {
    banCli(url) {
      this.imgUrl = url;
    },
    // 进入店铺
    jrdp(){
      this.$router.push({path:'/shop',query:{id:1}})
    }
  },
  components: {
    Breadcrumb,
    Map
  }
};
</script>

<style lang="scss" scoped>
</style>