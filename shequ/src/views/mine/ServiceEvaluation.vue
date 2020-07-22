<template>
  <div class="serviceEvaluation">
    <div class="myOrder-box">
      <div class="myOrder-sxandsoso">
        <ul>
          <li class="sty">待评价（16）</li>
          <li>已评价</li>
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
          <li class="ywc">
            <p class="dd-title">
              <span class="title-time">商家名称：金万通保洁</span>
              <span class="title-ddh">2019-06-27 15:30</span>
            </p>
            <table>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/fwjl.png" alt />
                    </div>
                    <div class="tb-con">开荒保洁、日常保洁、物业保洁、擦玻璃、清洗地毯</div>
                  </div>
                </td>

                <td width="152px" align="center">
                  <router-link to="/serviceEvaluation1">
                    <p class="pj">评价</p>
                  </router-link>
                </td>
              </tr>
            </table>
          </li>
          <li class="ywc">
            <p class="dd-title">
              <span class="title-time">商家名称：金万通保洁</span>
              <span class="title-ddh">2019-06-27 15:30</span>
            </p>
            <table>
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img src="img/fwjl.png" alt />
                    </div>
                    <div class="tb-con">开荒保洁、日常保洁、物业保洁、擦玻璃、清洗地毯</div>
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
import "@style/mine/serviceEvaluation.scss";
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