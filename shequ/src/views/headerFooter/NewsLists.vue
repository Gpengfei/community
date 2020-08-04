<template>
  <div class="newsLists">
    <div class="sqBox">
      <!--tab导航-->
      <div class="newsListTab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="'全部通知 '+total" name="first"></el-tab-pane>
          <el-tab-pane :label="'系统通知 '+total1" name="second"></el-tab-pane>
          <el-tab-pane :label="'社区通知 '+total2" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <!--消息通知-->
      <div class="xxtzLists" v-if="activeIndex==0">
        <ul v-if="newsLis.length!=0">
          <li v-for="(item,index) in newsLis" :key="index">
            <div class="newsListBox">
              <p class="newsListBox-top">
                <span class="top-txt">通知：{{item.title}}</span>
                <span class="top-time">{{item.createtime}}</span>
              </p>
              <p class="newsListBox-con" v-html="item.content"></p>
              <!--<div class="newsListBox-img">
                <img src="@assets/img/xxlb.png" alt />
              </div>-->
              <i class="iconfont">&#xe785;</i>
            </div>
          </li>
        </ul>
        <p class="not-yet" v-else>
          <img src="@assets/img/kzt.png" alt="">
          <span>暂无通知</span>
        </p>
      </div>
      <div class="xxtzLists" v-else-if="activeIndex==1">
        <ul v-if="newsLis1.length!=0">
          <li v-for="(item,index) in newsLis1" :key="index">
            <div class="newsListBox">
              <p class="newsListBox-top">
                <span class="top-txt">通知：{{item.title}}</span>
                <span class="top-time">{{item.createtime}}</span>
              </p>
              <p class="newsListBox-con" v-html="item.content"></p>
              <!--<div class="newsListBox-img">
                <img src="@assets/img/xxlb.png" alt />
              </div>-->
              <i class="iconfont">&#xe785;</i>
            </div>
          </li>
        </ul>
         <p class="not-yet" v-else>
          <img src="@assets/img/kzt.png" alt="">
          <span>暂无通知</span>
        </p>
      </div>
      <div class="xxtzLists" v-else>
        <ul v-if="newsLis2.length!=0">
          <li v-for="(item,index) in newsLis2" :key="index">
            <div class="newsListBox">
              <p class="newsListBox-top">
                <span class="top-txt">通知：{{item.title}}</span>
                <span class="top-time">{{item.createtime}}</span>
              </p>
              <p class="newsListBox-con" v-html="item.content"></p>
              <!--<div class="newsListBox-img">
                <img src="@assets/img/xxlb.png" alt />
              </div>-->
              <i class="iconfont">&#xe785;</i>
            </div>
          </li>
        </ul>
         <p class="not-yet" v-else>
          <img src="@assets/img/kzt.png" alt="">
          <span>暂无通知</span>
        </p>
      </div>
      <!--分页-->
      <div class="fy" v-if="activeIndex==0">
        <div class="fy-box">
          <el-pagination
            @current-change="currentChange"
            background
            layout="prev, pager, next"
            :total="total"
            prev-text="上一页"
            next-text="下一页"
          ></el-pagination>
        </div>
      </div>
      <div class="fy" v-if="activeIndex==2">
        <div class="fy-box">
          <el-pagination
            @current-change="currentChange"
            background
            layout="prev, pager, next"
            :total="total1"
            prev-text="上一页"
            next-text="下一页"
          ></el-pagination>
        </div>
      </div>
      <div class="fy" v-if="activeIndex==3">
        <div class="fy-box">
          <el-pagination
            @current-change="currentChange"
            background
            layout="prev, pager, next"
            :total="total2"
            prev-text="上一页"
            next-text="下一页"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/newsLists.scss";
export default {
  data() {
    return {
      newsLis: [],
      newsLis1: [],
      newsLis2: [],
      activeName: "first",
      activeIndex: "0",
      token: "",
      total: 0,
      total1: 0,
      total2: 0
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    let token = this.$store.state.token;
    this.token = token;
    // 获取消息列表
    this.$api.article
      .getNoticeList({
        token: this.token,
        page: 1,
        limit: 10,
        status: 0
      })
      .then(res => {
        console.log(res);
        this.total = res.data.data.total;
        let lis = res.data.data.rows;
        for (let i = 0; i < lis.length; i++) {
          lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
            "YYYY-MM-DD"
          );
        }
        this.newsLis = lis;
      });
    this.$api.article
      .getNoticeList({
        token: this.token,
        page: 1,
        limit: 10,
        status: 1
      })
      .then(res => {
        console.log(res);
        this.total1 = res.data.data.total;
        let lis = res.data.data.rows;
        for (let i = 0; i < lis.length; i++) {
          lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
            "YYYY-MM-DD"
          );
        }
        this.newsLis1 = lis;
      });
    this.$api.article
      .getNoticeList({
        token: this.token,
        page: 1,
        limit: 10,
        status: 2
      })
      .then(res => {
        console.log(res);
        this.total2 = res.data.data.total;
        let lis = res.data.data.rows;
        for (let i = 0; i < lis.length; i++) {
          lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
            "YYYY-MM-DD"
          );
        }
        this.newsLis2 = lis;
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.activeIndex = tab.index;
    },
    // 分页
    currentChange(e) {
      console.log(e);
      if (this.activeIndex == 0) {
        this.$api.article
          .getNoticeList({
            token: this.token,
            page: e,
            limit: 10,
            status: 0
          })
          .then(res => {
            console.log(res);
            this.total = res.data.data.total;
            let lis = res.data.data.rows;
            for (let i = 0; i < lis.length; i++) {
              lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
                "YYYY-MM-DD"
              );
            }
            this.newsLis = lis;
          });
      } else if (this.activeIndex == 1) {
        this.$api.article
          .getNoticeList({
            token: this.token,
            page: e,
            limit: 10,
            status: 1
          })
          .then(res => {
            console.log(res);
            this.total1 = res.data.data.total;
            let lis = res.data.data.rows;
            for (let i = 0; i < lis.length; i++) {
              lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
                "YYYY-MM-DD"
              );
            }
            this.newsLis1 = lis;
          });
      } else {
        this.$api.article
          .getNoticeList({
            token: this.token,
            page: e,
            limit: 10,
            status: 2
          })
          .then(res => {
            console.log(res);
            this.total2 = res.data.data.total;
            let lis = res.data.data.rows;
            for (let i = 0; i < lis.length; i++) {
              lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
                "YYYY-MM-DD"
              );
            }
            this.newsLis2 = lis;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>