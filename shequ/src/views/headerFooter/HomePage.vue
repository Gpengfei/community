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
  </div>
</template>

<script>
import "@style/headerFooter/homePage.scss";
export default {
  data() {
    return {
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
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 0);
  },
};
</script>

<style lang="scss" scoped>
</style>