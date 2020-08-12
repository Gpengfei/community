<template>
  <div class="newsLists">
    <!--tab导航-->
    <div class="newsListTab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="'全部通知'+qbxxDat.length " name="0"></el-tab-pane>
        <el-tab-pane :label="'系统通知'+xtxxDat.length" name="1"></el-tab-pane>
        <el-tab-pane :label="'社区通知'+sqtzDat.length" name="2"></el-tab-pane>
      </el-tabs>
    </div>
    <!--消息通知-->
    <div class="xxtzLists" v-if="activeIndex==0">
      <ul>
        <li v-for="(item,index) in qbxxDat" :key="index">
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：{{item.title}}</span>
              <span class="top-time">{{item.createtime}}</span>
              <span class="top-sc" @click="scCli(item.id)">删除</span>
              <span class="top-bj" @click="bj(item.id)">编辑</span>
            </p>
            <p class="newsListBox-con" v-html="item.content"></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="xxtzLists" v-else-if="activeIndex==1">
      <ul>
        <li v-for="(item,index) in xtxxDat" :key="index">
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：{{item.title}}</span>
              <span class="top-time">{{item.createtime}}</span>
              <span class="top-sc">删除</span>
              <span class="top-bj">编辑</span>
            </p>
            <p class="newsListBox-con" v-html="item.content"></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="xxtzLists" v-else>
      <ul>
        <li v-for="(item,index) in sqtzDat" :key="index">
          <div class="newsListBox">
            <p class="newsListBox-top">
              <span class="top-txt">通知：{{item.title}}</span>
              <span class="top-time">{{item.createtime}}</span>
              <span class="top-sc">删除</span>
              <span class="top-bj">编辑</span>
            </p>
            <p class="newsListBox-con" v-html="item.content"></p>
          </div>
        </li>
      </ul>
    </div>
    <!--分页-->
    <!-- <div class="fy">
      <div class="fy-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="上一页"
          next-text="下一页"
        ></el-pagination>
      </div>
    </div>-->
  </div>
</template>

<script>
import "@style/mine/newsLists.scss";
export default {
  data() {
    return {
      activeName: "0",
      activeIndex: "0",
      qbxxDat: [],
      xtxxDat: [],
      sqtzDat: [],
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
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 获取列表
    this.$api.article
      .getMyNoticeList({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        let lis = res.data.data.rows;
        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < lis.length; i++) {
          console.log(lis[i].createtime * 1000);
          lis[i].createtime = this.$moment(lis[i].createtime * 1000).format(
            "YYYY-MM-DD hh:mm"
          );
          if (lis[i].status == 1) {
            arr1.push(lis[i]);
          }
          if (lis[i].status == 2) {
            arr2.push(lis[i]);
          }
        }
        this.qbxxDat = lis;
        this.xtxxDat = arr1;
        this.sqtzDat = arr2;
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.activeIndex = tab.index;
    },
    bj(ids) {
      this.$router.push({ path: "/releaseNotice", query: { ids: ids } });
    },
    scCli(id) {
      this.$api.article
        .getMyNoticeDelete({
          token: this.token,
          id: id,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 1) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.$api.article
              .getMyNoticeList({
                token: this.token,
              })
              .then((res) => {
                console.log(res);
                let lis = res.data.data.rows;
                let arr1 = [];
                let arr2 = [];
                for (let i = 0; i < lis.length; i++) {
                  console.log(lis[i].createtime * 1000);
                  lis[i].createtime = this.$moment(
                    lis[i].createtime * 1000
                  ).format("YYYY-MM-DD hh:mm");
                  if (lis[i].status == 1) {
                    arr1.push(lis[i]);
                  }
                  if (lis[i].status == 2) {
                    arr2.push(lis[i]);
                  }
                }
                this.qbxxDat = lis;
                this.xtxxDat = arr1;
                this.sqtzDat = arr2;
              });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>