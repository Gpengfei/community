<template>
  <div class="myService">
    <div class="myService-box">
      <div class="myService-sxandsoso">
        <ul>
          <li class="sty">服务</li>
          <li>房产</li>
        </ul>
        <div class="pfsoso">
          <div class="pfsoso-box">
            <input type="text" placeholder="商品名称" />
            <i class="iconfont">&#xe608;</i>
          </div>
        </div>
      </div>
      <div class="myService-sx">
        <div class="sx-box">
          <div class="sx-r">
            <ul>
              <li class="sty">未出租</li>
              <li>已出租下线</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="myService-lis">
        <ul>
          <li>
            <div class="lis-box">
              <div class="lis-img">
                <img src="img/fcgl.png" alt />
              </div>
              <div class="lis-text">
                <div class="text-top">整租 | 乌兰察布路XX小区精装修公寓初次出租，全新家具家电拎包入住</div>
                <div class="text-con1">
                  <p class="dd">
                    <i class="iconfont">&#xe634;</i>
                    <span>阿尔泰-山水宜居</span>
                  </p>
                  <p class="pm">
                    <i class="iconfont">&#xe6c2;</i>
                    <span>主卧(4室)-28㎡</span>
                  </p>
                </div>
                <div class="text-con2">
                  <span class="num">840</span>
                  <span class="yy">元/月</span>
                </div>
              </div>
              <div class="lis-r">
                <span>编辑</span>
                <span>下架</span>
                <span>删除</span>
              </div>
            </div>
          </li>
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
import "@style/mine/myService.scss";
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