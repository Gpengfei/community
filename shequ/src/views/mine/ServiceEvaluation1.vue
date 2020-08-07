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
                    <i class="iconfont sty">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                  </p>
                </div>
                <div class="r-inp">
                  <p class="text">评价晒单</p>
                  <textarea name placeholder="分享新的体验，给千万想买的人一个参考~"></textarea>
                </div>
                <div class="tjtp">
                  <template v-if="imgsLis.length!=0"></template>
                  <img src alt />
                  <p class="sctp" @click="qtCli">
                    <i class="iconfont">&#xe61e;</i>
                  </p>
                  <!-- <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt />
                  </el-dialog>-->
                </div>
              </div>
            </div>
            <div class="tj-box">
              <router-link to="/serviceEvaluationCompleted">
                <span class="btn">提交评价</span>
              </router-link>
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
    },
    qtCli() {
      this.tpjqOff = true;
    },
  },
  components: {
    croppers,
  },
};
</script>

<style lang="scss" scoped>
</style>