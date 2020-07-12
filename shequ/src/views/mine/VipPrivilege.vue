<template>
  <div class="vipPrivilege">
    <div class="vipPrivilege-box">
      <div class="vipPrivilege-title">
        <p>会员权益</p>
      </div>
      <div class="vipPrivilege-lists">
        <ul>
          <li>
            <p class="lis-title">减免运费特权</p>
            <p
              class="lis-text"
            >见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权</p>
          </li>
          <li>
            <p class="lis-title">减免运费特权</p>
            <p
              class="lis-text"
            >见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权</p>
          </li>
          <li>
            <p class="lis-title">减免运费特权</p>
            <p
              class="lis-text"
            >见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权</p>
          </li>
          <li>
            <p class="lis-title">减免运费特权</p>
            <p
              class="lis-text"
            >见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权</p>
          </li>
          <li>
            <p class="lis-title">减免运费特权</p>
            <p
              class="lis-text"
            >见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权 见面运费特权见面运费特权见面运费特权见面运费特权</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/vipPrivilege.scss";
export default {
  data() {
    return {};
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 导航改变状态
    this.$store.dispatch("setMin", this.$route.query.id);
  }
};
</script>

<style lang="scss" scoped>
</style>