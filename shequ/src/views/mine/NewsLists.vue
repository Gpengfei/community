<template>
  <div class="newsLists">
    <!--tab导航-->
    <div class="newsListTab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部通知 12" name="first"></el-tab-pane>
        <el-tab-pane label="系统通知 12" name="second"></el-tab-pane>
        <el-tab-pane label="社区通知 12" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <!--消息通知-->
    <div class="xxtzLists" v-if="activeIndex==0">
      <ul>
        <li>
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：北门道路维修通知</span>
              <span class="top-time">2020-06-09</span>
              <span class="top-sc">删除</span>
              <span class="top-bj">编辑</span>
            </p>
            <p
              class="newsListBox-con"
            >端午节，又称端阳节、龙舟节、重午节、龙节、正阳节、天中节等，节期在农历五月初五，是中国民间的传统节日。端午节源自天象崇拜，由上古时代祭龙演变而来。仲夏端午，苍龙七宿飞升至正南中天，是龙飞天的日子，即如《易经·乾卦》第五爻的爻辞曰：“飞龙在天”。端午日龙星既“得中”又“得正”，乃大吉大利之象。</p>
            <div class="newsListBox-img">
              <img src="@assets/img/xxlb.png" alt />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="xxtzLists" v-else-if="activeIndex==1">
      <ul>
        <li>
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：北门道路维修通知</span>
              <span class="top-time">2020-06-10</span>
            </p>
            <p
              class="newsListBox-con"
            >端午节，又称端阳节、龙舟节、重午节、龙节、正阳节、天中节等，节期在农历五月初五，是中国民间的传统节日。端午节源自天象崇拜，由上古时代祭龙演变而来。仲夏端午，苍龙七宿飞升至正南中天，是龙飞天的日子，即如《易经·乾卦》第五爻的爻辞曰：“飞龙在天”。端午日龙星既“得中”又“得正”，乃大吉大利之象。</p>
            <div class="newsListBox-img">
              <img src="@assets/img/xxlb.png" alt />
            </div>
            <i class="iconfont">&#xe785;</i>
          </div>
        </li>
      </ul>
    </div>
    <div class="xxtzLists" v-else>
      <ul>
        <li>
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：北门道路维修通知</span>
              <span class="top-time">2020-06-11</span>
            </p>
            <p
              class="newsListBox-con"
            >端午节，又称端阳节、龙舟节、重午节、龙节、正阳节、天中节等，节期在农历五月初五，是中国民间的传统节日。端午节源自天象崇拜，由上古时代祭龙演变而来。仲夏端午，苍龙七宿飞升至正南中天，是龙飞天的日子，即如《易经·乾卦》第五爻的爻辞曰：“飞龙在天”。端午日龙星既“得中”又“得正”，乃大吉大利之象。</p>
            <div class="newsListBox-img">
              <img src="@assets/img/xxlb.png" alt />
            </div>
            <i class="iconfont">&#xe785;</i>
          </div>
        </li>
      </ul>
    </div>
    <!--分页-->
    <div class="fy">
      <div class="fy-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="上一页"
          next-text="下一页"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/newsLists.scss";
export default {
  data() {
    return {
      activeName: "first",
      activeIndex: "0"
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 导航改变状态
    if (this.$route.query.id) {
      this.$store.dispatch("setMin", this.$route.query.id);
    } else {
      this.$store.dispatch("setMin", 0);
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.activeIndex = tab.index;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>