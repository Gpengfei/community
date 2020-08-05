<template>
  <div class="shop">
    <div class="sqBox">
      <div class="shop-box">
        <div class="box-left">
          <div class="shop-tab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="二手房" name="first"></el-tab-pane>
              <el-tab-pane label="二手物品" name="second"></el-tab-pane>
              <el-tab-pane label="便民服务" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="left-list">
            <ul>
              <li>
                <div class="list-box">
                  <div class="lis-l">
                    <img src="@assets/img/dp.png" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="r-bot">
                      <span class="number">840</span>
                      <span class="yy">元/月</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-box">
                  <div class="lis-l">
                    <img src="@assets/img/dp.png" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="r-bot">
                      <span class="number">840</span>
                      <span class="yy">元/月</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-box">
                  <div class="lis-l">
                    <img src="@assets/img/dp.png" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="r-bot">
                      <span class="number">840</span>
                      <span class="yy">元/月</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-box">
                  <div class="lis-l">
                    <img src="@assets/img/dp.png" alt />
                  </div>
                  <div class="lis-r">
                    <div class="r-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
                    <div class="r-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="fwxx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="r-bot">
                      <span class="number">840</span>
                      <span class="yy">元/月</span>
                    </div>
                  </div>
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
        <div class="box-right">
          <div class="right-top">
            <div class="top-img">
              <img src="@assets/img/dplogo.png" alt />
            </div>
            <p class="top-name">京城广厦东影南路店</p>
            <div class="top-bot">
              <div class="bot-l">
                <p class="l-top">32个月</p>
                <p class="l-bot">加入时长</p>
              </div>
              <div class="bor-r">
                <p class="r-top">19个</p>
                <p class="r-bot">发布商品</p>
              </div>
            </div>
          </div>
          <div class="right-bot">
            <p class="bot-title">
              <span>下载APP</span>
              <i class="iconfont">&#xe785;</i>
            </p>
            <div class="bot-rwm">
              <img src="@assets/img/ewm.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/shop.scss";
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 100);
  },
  methods: {
    // tab切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>