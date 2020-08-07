<template>
  <div class="serviceEvaluation1">
    <div class="sqBox">
      <div class="serviceEvaluationDetails-box">
        <ul class="ul">
          <li class="li">
            <div class="lists-box">
              <div class="lis-l">
                <div class="l-box">
                  <div class="l-img">
                    <img src="img/fwjl.png" alt />
                  </div>
                  <p class="l-js" v-if="pjxx.community">{{pjxx.community.title}}</p>
                </div>
              </div>
              <div class="lis-r">
                <p class="r-time">
                  <span class="text">订单号：</span>
                  <span class="num">119515308597</span>
                  <span class="time">{{pjxx.apply_time}}</span>
                </p>
                <div class="r-xx">
                  <p class="text">商品评分</p>
                  <p class="xx-box">
                    <template v-for="(item,index) in 5">
                      <i
                        class="iconfont"
                        :class="{'sty':index<=xxInd}"
                        :key="index"
                        @click="xxCli(index)"
                      >&#xe642;</i>
                    </template>
                  </p>
                </div>
                <div class="r-inp">
                  <p class="text">评价晒单</p>
                  <textarea name placeholder="分享新的体验，给千万想买的人一个参考~" v-model="pjnr"></textarea>
                </div>
                <div class="tjtp">
                  <template v-if="imgsLis.length!=0">
                    <img
                      :src="'http://zt.shenyueyun.com'+item"
                      alt
                      v-for="(item,index) in imgsLis"
                      :key="index"
                      @click="qtClis(index)"
                    />
                  </template>

                  <p class="sctp" @click="qtCli">
                    <i class="iconfont">&#xe61e;</i>
                  </p>
                </div>
              </div>
            </div>
            <div class="tj-box">
              <!-- <router-link to="/serviceEvaluationCompleted"> -->
              <span class="btn" @click="tjpjCli">提交评价</span>
              <!-- </router-link> -->
              <el-checkbox v-model="checked">匿名提交</el-checkbox>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 图片剪切 -->
    <div class="smrzTpjq" v-if="tpjqOff">
      <i class="iconfont" @click="gbjqCli">&#xe62a;</i>
      <croppers :wbl="5" :hbl="5" @tpscCli="tpscClis" />
    </div>
  </div>
</template>

<script>
import croppers from "@components/croppers.vue";
import "@style/mine/serviceEvaluation1.scss";
export default {
  data() {
    return {
      id: null,
      token: null,
      checked: true,
      pjxx: {},
      // 切图控制变量
      tpjqOff: false,
      imgsLis: [],
      xxInd: 0,
      pjnr: "",
      imgInd: "",
    };
  },
  mounted() {
    // 获取id
    let id = this.$route.query.id;
    this.id = id;
    console.log(this.id);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 获取评价列表
    this.$api.article
      .my_com_service({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        let lis = res.data.data;
        for (let i = 0; i < lis.length; i++) {
          if (lis[i].id == this.id) {
            lis[i].apply_time = this.$moment(lis[i].apply_time).format(
              "YYYY-MM-DD hh:mm"
            );
            this.pjxx = lis[i];
            console.log(this.pjxx);
          }
        }
      });
  },
  methods: {
    // 切图
    gbjqCli() {
      this.tpjqOff = false;
    },
    tpscClis(e) {
      console.log(e);
      if (this.imgInd === "") {
        let arr = this.imgsLis;
        arr.push(e);
        this.imgsLis = arr;
        this.tpjqOff = false;
      } else {
        let arrs = this.imgsLis;
        arrs[this.imgInd] = e;
        this.imgsLis = arrs;
        this.tpjqOff = false;
        this.imgInd = "";
      }
    },
    qtCli() {
      this.tpjqOff = true;
    },
    // 点击图片更换
    qtClis(index) {
      this.tpjqOff = true;
      this.imgInd = index;
    },
    // 点击星星
    xxCli(index) {
      this.xxInd = index;
    },
    // 提交评价信息
    tjpjCli() {
      let pjx = this.xxInd + 1;
      let pjnr = this.pjnr;
      let imgStr = this.imgsLis.join(",");
      let sfnm;
      if (this.checked) {
        sfnm = 1;
      } else {
        sfnm = 0;
      }
      if (this.pjnr == "") {
        this.$message({
          message: "评价内容不能为空！",
          type: "warning",
        });
        return;
      }
      this.$api.article
        .sub_comment({
          token: this.token,
          apply_id: this.id,
          star: pjx,
          attachment: imgStr,
          comment_text: pjnr,
          is_anonymous: sfnm,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 1) {
            this.$message({
              message: "评价成功！",
              type: "success",
            });
            this.$router.push({
              path: "/serviceEvaluationCompleted",
              query: { id: this.id },
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
    },
  },
  components: {
    croppers,
  },
};
</script>

<style lang="scss" scoped>
</style>