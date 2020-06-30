<template>
  <div class="productDetails1">
    <div class="sqBox">
      <Breadcrumb :lis-data="breData" />
      <div class="productDetails-box">
        <div class="productDetails-box-l">
          <div class="headers">
            <div class="headers-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
            <div class="headers-bottom">
              <div class="bottom-l">
                <div class="l-top">
                  <img :src="imgUrl" alt />
                </div>
                <div class="l-bot">
                  <div class="bot-img-box">
                    <swiper :options="swiperOptions" ref="mySwiper">
                      <swiper-slide v-for="(item,index) in bannerData" :key="index">
                        <img :src="item.url" alt @click="banCli(item.url)" />
                      </swiper-slide>
                      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
                  </div>
                </div>
              </div>
              <div class="bottom-r">
                <p class="jg">
                  <span class="number">1170</span>
                  <span class="yc">元/月</span>
                </p>
                <div class="jbxx">
                  <p class="jbxx-l">租赁方式：</p>
                  <p class="jbxx-r">整租</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">房屋类型：</p>
                  <p class="jbxx-r">1室1厅1卫生 55平 精装修</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">朝向楼层：</p>
                  <p class="jbxx-r">东 中层 / 28层</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">所在小区：</p>
                  <p class="jbxx-r">明X园</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">所属区域：</p>
                  <p class="jbxx-r">赛罕区 乌兰察布东街</p>
                </div>
                <div class="jbxx">
                  <p class="jbxx-l">详细地址：</p>
                  <p class="jbxx-r">赛罕区乌兰察布东街与东影南路交汇处南150米</p>
                </div>
                <p class="lxsjbtn">
                  <i class="iconfont">&#xe645;</i>
                  <span>联系商家</span>
                </p>
              </div>
            </div>
          </div>
          <div class="fwms">
            <p class="fwms-title">房源描述</p>
            <ul>
              <li>
                <p class="lis-l">
                  <img src="@assets/img/fyms1.png" alt />
                  <span>房屋亮点：</span>
                </p>
                <p class="lis-r">
                  温馨提示：我只能把房子基本的信息传递给你，如果您诚意的买房，建议您打电话沟通，了解更多房屋信息，不仅省去了不必要的麻烦，还能找到适合房子。不要因为一个电话，错过了一套好房子。
                  【周边环境】繁华地段，周边菜市场，超市等生活设施齐全。
                  【小区概况】成熟社区，配套设施齐全。
                  【房型格局】经典格局，南北通透，阴阳卧室，采光全天充足。
                  【装修情况】精装修。
                  【交通状况】交通便利，出行方便。
                </p>
              </li>
              <li>
                <p class="lis-l">
                  <img src="@assets/img/fyms2.png" alt />
                  <span>小区介绍：</span>
                </p>
                <p
                  class="lis-r"
                >恒大城新房配备全新家具首次出租，三楼适合老人带孩子长期居住，紧邻幼儿园，不影响采光，附近苏虎街小学，小区环境好，绿化率40%，物业服务细致入微，出门公交便利对。</p>
              </li>
              <li>
                <p class="lis-l">
                  <img src="@assets/img/fyms3.png" alt />
                  <span>周边配套：</span>
                </p>
                <p
                  class="lis-r"
                >位置：小区地理位置，绿化，居民素质高配套：有健身器材，小型篮球场，可供小区居民使用车位：停车位充足，建有地上停车场和地下车库保安：小区内24保安巡逻</p>
              </li>
              <li>
                <p class="lis-l">
                  <img src="@assets/img/fyms4.png" alt />
                  <span>交通出行：</span>
                </p>
                <p
                  class="lis-r"
                >楼下就是长乐宫摩尔城维多利商场，公交车次：k52路3路75路83路92路102路等多躺公交线路地铁：地铁一号站点是东影南路站，离站牌200米</p>
              </li>
              <li>
                <p class="lis-l">
                  <img src="@assets/img/fyms5.png" alt />
                  <span>服务介绍：</span>
                </p>
                <p class="lis-r">本人从事房地产多年，公司有大量好房源，欢迎进入我的店铺查看，欢迎随时电话咨询，相信我的专业，为您置业安家保驾护航。</p>
              </li>
            </ul>
          </div>
          <div class="fwts">
            <p class="fwts-title">配套设施</p>
            <ul>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb1.png" alt />
                </div>
                <p>床</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb2.png" alt />
                </div>
                <p>宽带</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb3.png" alt />
                </div>
                <p>电视</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb4.png" alt />
                </div>
                <p>冰箱</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb5.png" alt />
                </div>
                <p>洗衣机</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb6.png" alt />
                </div>
                <p>空调</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb7.png" alt />
                </div>
                <p>热水器</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb8.png" alt />
                </div>
                <p>暖气</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb9.png" alt />
                </div>
                <p>微波炉</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb10.png" alt />
                </div>
                <p>可做饭</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb11.png" alt />
                </div>
                <p>卫生间</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb12.png" alt />
                </div>
                <p>沙发</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb13.png" alt />
                </div>
                <p>衣柜</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb14.png" alt />
                </div>
                <p>阳台</p>
              </li>
              <li>
                <div class="img31">
                  <img src="@assets/img/ptsb15.png" alt />
                </div>
                <p>电梯</p>
              </li>
            </ul>
          </div>
          <div class="fwtp">
            <p class="fwtp-title">服务图片</p>
            <ul>
              <li>
                <img src="img/fytp.png" alt />
              </li>
              <li>
                <img src="img/fytp.png" alt />
              </li>
              <li>
                <img src="img/fytp.png" alt />
              </li>
              <li>
                <img src="img/fytp.png" alt />
              </li>
              <li>
                <img src="img/fytp.png" alt />
              </li>
              <li>
                <img src="img/fytp.png" alt />
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
            <p class="cnxh1-title">推荐房源</p>
            <ul>
              <li>
                <img src="img/tjfy.png" alt />
                <p>整租 6室3厅</p>
              </li>
              <li>
                <img src="img/tjfy.png" alt />
                <p>整租 6室3厅</p>
              </li>
              <li>
                <img src="img/tjfy.png" alt />
                <p>整租 6室3厅</p>
              </li>
              <li>
                <img src="img/tjfy.png" alt />
                <p>整租 6室3厅</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cnxh2">
        <p class="cnxh2-title">小区环境</p>
        <ul>
          <li>
            <img src="img/xqhj1.png" alt />
            <p>XXX小区外景图</p>
          </li>
          <li>
            <img src="img/xqhj2.png" alt />
            <p>XXX小区外景图</p>
          </li>
          <li>
            <img src="img/xqhj3.png" alt />
            <p>XXX小区外景图</p>
          </li>
          <li>
            <img src="img/xqhj4.png" alt />
            <p>XXX小区外景图</p>
          </li>
          <li>
            <img src="img/xqhj1.png" alt />
            <p>XXX小区外景图</p>
          </li>
        </ul>
      </div>
      <div class="bddt">
        <p class="bddt-title">小区地图</p>
        <Map />
      </div>
      <div class="tj">
        <div class="rmtj">
          <p class="rmtj-title">XX小区周边租房</p>
          <ul>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
          </ul>
        </div>
        <div class="rmtj">
          <p class="rmtj-title">呼和浩特热门小区租房</p>
          <ul>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
          </ul>
        </div>
        <div class="rmtj">
          <p class="rmtj-title">赛罕区其他小区推荐</p>
          <ul>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙古农发行租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
            <li>内蒙农发行租房</li>
            <li>金汉御园租房</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/productDetails1.scss";
import Breadcrumb from "@components/Breadcrumb.vue";
import Map from "@components/Map.vue";
export default {
  data() {
    return {
      breData: [
        { name: "社区便民", url: "/" },
        { name: "房屋租赁", url: "" },
        { name: "赛罕区", url: "" }
      ],
      imgUrl: "img/fwzl1.png",
      bannerData: [
        { url: "img/fwzl1.png" },
        { url: "img/fwzl2.png" },
        { url: "img/fwzl3.png" },
        { url: "img/fwzl4.png" }
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
    jrdp() {
      this.$router.push({ path: "/shop", query: { id: 1 } });
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