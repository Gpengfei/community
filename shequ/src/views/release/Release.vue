<template>
  <div class="release">
    <div class="sqBox">
      <div class="release-box">
        <div class="release-box-l">
          <ul>
            <template v-for="(item,index) in navFb">
              <router-link :key="index" :to="item.url">
                <li :class="{'sty':navIs==index}">{{item.name}}</li>
              </router-link>
            </template>
          </ul>
        </div>
        <div class="release-box-r">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/release/release.scss";
export default {
  data() {
    return {
      navFb: [
        { name: "房屋租赁", url: "/release" },
        { name: "二手物品", url: "/secondHandGoods" },
        { name: "发布服务", url: "/releaseService" },
        { name: "发布通知", url: "/releaseNotice" },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("setNav", 100);
  },
  computed: {
    navIs() {
      return this.$store.state.navFb;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>