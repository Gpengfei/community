<template>
  <div class="release">
    <div class="sqBox">
      <div class="release-box">
        <div class="release-box-l">
          <ul>
            <template v-for="(item,index) in navFb">
              <li :key="index" :class="{'sty':navIs==index}">{{item}}</li>
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
      navFb: ["房屋租赁", "发布服务", "发布通知"]
    };
  },
  mounted() {
    this.$store.dispatch("setNav", 100);
  },
  computed:{
      navIs(){
          return this.$store.state.navFb
      }
  }
};
</script>

<style lang="scss" scoped>
</style>