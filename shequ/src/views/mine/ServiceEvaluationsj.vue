<template>
  <div class="serviceEvaluation">
    <div class="myOrder-box">
      <div class="myOrder-sxandsoso">
        <ul>
          <li :class="{'sty':tabInd==1}" @click="tabCli(1)">待完成({{dwcDatLis.length}})</li>
          <li :class="{'sty':tabInd==2}" @click="tabCli(2)">待评价({{dpjDatLis.length}})</li>
          <li :class="{'sty':tabInd==3}" @click="tabCli(3)">已评价({{ypjDatLis.length}})</li>
        </ul>
      </div>
      <div class="myOrder-sx">
        <div class="sx-box">
          <div class="sx-r">
            <ul>
              <li>订单详情</li>
              <li>操作</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="myOrder-lis">
        <ul>
          <template v-if="tabInd==1">
            <li class="ywc" v-for="(item,index) in dwcDatLis" :key="index">
              <p class="dd-title">
                <span class="title-time">商家名称：金万通保洁</span>
                <span class="title-ddh">{{item.apply_time}}</span>
              </p>
              <table>
                <tr>
                  <td width="426px" align="center">
                    <div class="tb-box">
                      <div class="tb-img">
                        <img src="img/fwjl.png" alt />
                      </div>
                      <div class="tb-con">{{item.community.title}}</div>
                    </div>
                  </td>

                  <td width="152px" align="center">
                    <p class="wc">完成</p>
                  </td>
                </tr>
              </table>
            </li>
          </template>
          <template v-if="tabInd==2">
            <li class="ywc" v-for="(item,index) in dpjDatLis" :key="index">
              <p class="dd-title">
                <span class="title-time">商家名称：金万通保洁</span>
                <span class="title-ddh">{{item.apply_time}}</span>
              </p>
              <table>
                <tr>
                  <td width="426px" align="center">
                    <div class="tb-box">
                      <div class="tb-img">
                        <img src="img/fwjl.png" alt />
                      </div>
                      <div class="tb-con">{{item.community.title}}</div>
                    </div>
                  </td>

                  <td width="152px" align="center">
                    <router-link to="/serviceEvaluationDetails">
                      <p class="dpj">待客户评价...</p>
                    </router-link>
                  </td>
                </tr>
              </table>
            </li>
          </template>
          <template v-if="tabInd==3">
            <li class="ywc" v-for="(item,index) in ypjDatLis" :key="index">
              <p class="dd-title">
                <span class="title-time">商家名称：金万通保洁</span>
                <span class="title-ddh">{{item.apply_time}}</span>
              </p>
              <table>
                <tr>
                  <td width="426px" align="center">
                    <div class="tb-box">
                      <div class="tb-img">
                        <img src="img/fwjl.png" alt />
                      </div>
                      <div class="tb-con">{{item.community.title}}</div>
                    </div>
                  </td>

                  <td width="152px" align="center">
                    <router-link to="/serviceEvaluationDetails">
                      <p class="ckpj">查看评价</p>
                    </router-link>
                  </td>
                </tr>
              </table>
            </li>
          </template>
        </ul>
      </div>
    </div>
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
import "@style/mine/serviceEvaluationsj.scss";
export default {
  data() {
    return {
      token: null,
      tabInd: 1,
      dwcDatLis: [],
      dpjDatLis: [],
      ypjDatLis: [],
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
    // 导航改变状态
    this.$store.dispatch("setMin", this.$route.query.id);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 获取用户订单列表
    this.$api.article
      .my_service({
        token: this.token,
        page: 1,
      })
      .then((res) => {
        console.log("获取用户订单列表", res);
        if (res.data.code == 1) {
          let lis = res.data.data;
          let arr1 = [];
          let arr2 = [];
          let arr3 = [];
          for (let i = 0; i < lis.length; i++) {
            lis[i].apply_time = this.$moment(lis[i].apply_time).format(
              "YYYY-MM-DD hh:mm"
            );
            if (lis[i].status == 1) {
              arr1.push(lis[i]);
            } else {
              if (lis[i].star) {
                arr3.push(lis[i]);
              } else {
                arr2.push(lis[i]);
              }
            }
          }
          this.dwcDatLis = arr1;
          this.dpjDatLis = arr2;
          this.ypjDatLis = arr3;
        }
      });
  },
  methods: {
    tabCli(index) {
      this.tabInd = index;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>