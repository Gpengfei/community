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
      <div class="myOrder-lis">
        <ul>
          <li class="dfk">
            <p class="dd-title">
              <span class="title-time">2020-06-15 12:02:12</span>
              <span class="title-ddh">订单号:123456789123</span>
            </p>
            <table>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/ddt.png" alt />
                    </div>
                    <div class="tb-con">安普生邦利鱼油软胶囊成人中老年人辅助降血脂深海鱼肝油2瓶</div>
                    <div class="tb-num">x1</div>
                  </div>
                </td>
                <td width="111px" align="center">李三三</td>
                <td width="111px" align="center">￥1500</td>
                <td width="140px" align="center">
                  <div class="zt-box">
                    <p>等待商家付款</p>
                    <p>订单详情</p>
                  </div>
                </td>
                <td width="152px" align="center">
                  <p class="czan">立即付款</p>
                </td>
              </tr>
            </table>
          </li>
          <li class="dsh">
            <p class="dd-title">
              <span class="title-time">2020-06-15 12:02:12</span>
              <span class="title-ddh">订单号:123456789123</span>
            </p>
            <table>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/ddt.png" alt />
                    </div>
                    <div class="tb-con">安普生邦利鱼油软胶囊成人中老年人辅助降血脂深海鱼肝油2瓶</div>
                    <div class="tb-num">x1</div>
                  </div>
                </td>
                <td width="111px" align="center">李三三</td>
                <td width="111px" align="center">￥1500</td>
                <td width="140px" align="center">
                  <div class="zt-box">
                    <p>等待商家付款</p>
                    <p>订单详情</p>
                    <p class="ckdd">查看物流</p>
                  </div>
                </td>
                <td width="152px" align="center">
                  <p class="czan">确认收货</p>
                </td>
              </tr>
            </table>
          </li>
          <li class="ywc">
            <p class="dd-title">
              <span class="title-time">2020-06-15 12:02:12</span>
              <span class="title-ddh">订单号:123456789123</span>
            </p>
            <table>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/ddt.png" alt />
                    </div>
                    <div class="tb-con">安普生邦利鱼油软胶囊成人中老年人辅助降血脂深海鱼肝油2瓶</div>
                    <div class="tb-num">x1</div>
                  </div>
                </td>
                <td rowspan="2" width="111px" align="center">李三三</td>
                <td rowspan="2" width="111px" align="center">￥1500</td>
                <td rowspan="2" width="140px" align="center">
                  <div class="zt-box">
                    <p>交易完成</p>
                    <p>订单详情</p>
                  </div>
                </td>
                <td rowspan="2" width="152px" align="center">
                  <p class="zcgm">再次购买</p>
                  <p class="pj">评价</p>
                </td>
              </tr>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/ddt.png" alt />
                    </div>
                    <div class="tb-con">安普生邦利鱼油软胶囊成人中老年人辅助降血脂深海鱼肝油2瓶</div>
                    <div class="tb-num">x1</div>
                  </div>
                </td>
              </tr>
            </table>
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