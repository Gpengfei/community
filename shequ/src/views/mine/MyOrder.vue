<template>
  <div class="myOrder">
    <div class="myOrder-box">
      <div class="myOrder-sxandsoso">
        <ul>
          <li class="sty">全部订单</li>
          <li>待付款</li>
          <li>待收货</li>
        </ul>
        <div class="pfsoso">
          <div class="pfsoso-box">
            <input type="text" placeholder="商品名称/商品编号/订单号" />
            <i class="iconfont">&#xe608;</i>
          </div>
        </div>
      </div>
      <div class="myOrder-sx">
        <div class="sx-box">
          <div class="sx-l">
            <el-select v-model="value" placeholder="默认近三个月订单">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="sx-r">
            <ul>
              <li>订单详情</li>
              <li>收货人</li>
              <li>金额</li>
              <li>状态</li>
              <li>操作</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/myOrder.scss";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "默认近三个月订单"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
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