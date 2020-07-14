<template>
  <div class="healthRecords">
    <div class="healthRecords-box">
      <div class="healthRecords-title">
        <p>会员权益</p>
      </div>
      <div class="healthRecords-sx">
        <div class="sx-box">
          <div class="sx-l">
            <el-date-picker v-model="value2" type="month" placeholder="请选择年月"></el-date-picker>
          </div>
        </div>
      </div>
      <div class="healthRecords-con">
        <ul>
          <li>
            <div class="demo-image__preview">
              <el-image style="width: 100%; height: auto" :src="url" :preview-src-list="srcList"></el-image>
            </div>
            <p>第一周</p>
          </li>
          <li>
            <div class="demo-image__preview">
              <el-image style="width: 100%; height: auto" :src="url" :preview-src-list="srcList"></el-image>
            </div>
            <p>第二周</p>
          </li>
          <li>
            <div class="demo-image__preview">
              <el-image style="width: 100%; height: auto" :src="url" :preview-src-list="srcList"></el-image>
            </div>
            <p>第三周</p>
          </li>
          <li>
            <div class="demo-image__preview">
              <el-image style="width: 100%; height: auto" :src="url" :preview-src-list="srcList"></el-image>
            </div>
            <p>第四周</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/healthRecords.scss";
export default {
  data() {
    return {
      value2: "",
      url: "img/jkda.png",
      srcList: ["img/jkda.png"]
    };
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