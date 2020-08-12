<template>
  <div class="myOrder">
    <div class="myOrder-box">
      <div class="myOrder-sxandsoso">
        <ul>
          <li :class="{sty:arr.type == type}" v-for="(arr ,index) in orderState" :key="index" @click="changeTitleType(arr.type)">{{arr.title}}</li>
<!--          <li class="sty">全部订单</li>-->
<!--          <li>待付款</li>-->
<!--          <li>待发货</li>-->
<!--          <li>待收货</li>-->
<!--          <li>待评价</li>-->
<!--          <li>退换货</li>-->
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
<!--            <el-select v-model="value" placeholder="默认近三个月订单">-->
<!--              <el-option-->
<!--                v-for="item in options"-->
<!--                :key="item.value"-->
<!--                :label="item.label"-->
<!--                :value="item.value"-->
<!--              ></el-option>-->
<!--            </el-select>-->
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
          <li class="dfk" v-for="(arr,index) in list" :key="index">
            <p class="dd-title">
              <span class="title-time">{{ a_transformTime( parseInt(arr.createtime)) }}</span>
              <span class="title-ddh">订单号:{{ arr.order_sn }}</span>
            </p>
            <table  v-for="(arrItem,j ) in arr.item" :key="j">
              <tr>
                <td width="426px" align="center">
                  <div class="tb-box">
                    <div class="tb-img">
                      <img :src=" arrItem.goods_image " alt />
                    </div>
                    <div class="tb-con">{{ arrItem.goods_title }}</div>
                    <div class="tb-num">x{{ arrItem.goods_num }}</div>
                  </div>
                </td>
                <td width="111px" align="center">李三三</td>
                <td width="111px" align="center">￥ {{arrItem.goods_price}}</td>
                <td width="140px" align="center">
                  <div class="zt-box">
                    <p style="color: #a8700d;">{{ arrItem.status_name||arr.status_name }}</p>
<!--                    <p>订单详情</p>-->
                  </div>
                </td>
                <td width="200px" style="padding: 15px;" align="center">
                  <ul class="ul" style="width: 200px">
                    <li v-for="(btn, btnl) in arr.btns" :key="btnl" class="li">
                      <el-button type="danger" class="cu-btn btn1" v-if="btn === 'pay'">
                        立即支付
                      </el-button>
                      <el-button  v-if="btn === 'cancel'" @click="setCancel(arr.id)" class="cu-btn obtn1">取消订单</el-button>
                      <el-button class="cu-btn btn1"  v-if="btn === 'after_detail'">售后详情</el-button>
                    </li>
                    <li v-for="(btn, btnl) in arrItem.btns" :key="btnl" class="li">
                      <el-button
                          class="cu-btn btn1"
                          v-if="btn === 'buy_again'"
                      >
                        再次购买
                      </el-button>
                      <el-button class="cu-btn btn1" type="primary"  v-if="btn === 'express'" >
                        查看物流
                      </el-button>
                      <el-button  class="cu-btn btn1" type="primary"  v-if="btn === 'get'">
                        确认收货
                      </el-button>
                      <el-button class="cu-btn btn1"  v-if="btn === 'aftersale'">
                        申请售后
                      </el-button>
                      <el-button v-if="btn === 'reapply_refund'" class="cu-btn btn1" >
                        重新退款
                      </el-button>
                      <el-button class="cu-btn btn1"  v-if="btn === 'apply_refund'">
                        申请退款
                      </el-button>
                      <el-button class="cu-btn btn1" type="primary"  v-if="btn === 'comment'">
                        待评价
                      </el-button>
                      <el-button class="cu-btn btn1"  v-if="btn === 'after_detail'">售后详情</el-button>
                    </li>
                  </ul>
<!--                  <p class="czan">123</p>-->
                </td>
              </tr>
            </table>
          </li>
          <!--<li class="dsh">
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
          </li>-->
        </ul>
      </div>
    </div>
    <!-- 底部导航条 -->
    <div class="fy">
      <div class="fy-box">
        <!--<el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            background
            :page-sizes="[10, 30, 100, 300]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>-->
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/myOrder.scss";
export default {
  data() {
    return {
      orderState: [
        {
          id: 0,
          title: '全部',
          type: 'all'
        },
        {
          id: 1,
          title: '待付款',
          type: 'nopay'
        },
        {
          id: 2,
          title: '待发货',
          type: 'nosend'
        },
        {
          id: 3,
          title: '待收货',
          type: 'noget'
        },
        {
          id: 4,
          title: '待评价',
          type: 'nocomment'
        },
        {
          id: 5,
          title: '退换货',
          type: 'aftersale'
        }
      ],
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
      value: "",
      total: 0,
      per_page: 10,
      page: 1,
      type:"all",
      list:[]
    };
  },
  created() {
    this.getPull();
  },
  methods: {
    /* 取消订单 */
    setCancel(id) {
      this.a_post("/addons/shopro/order/cancel", {
        id:id
      }, res => {
        console.log("/addons/shopro/order/cancel", res.data.data);
        if(res.data.code){
          this.$message(res.data.msg);
          this.getPull();
        }
      });
    },
    /* 顶部切换 */
    changeTitleType(type){
      this.type = type;
      this.getPull();
    },
    /* 列表请求 */
    getPull() {
      this.a_post("/addons/shopro/order/index?" +  "type=" + this.type, {
        /*per_page: this.per_page,
        page: this.page,*/
        type: this.type
      }, res => {
        console.log("/addons/shopro/order/index", res.data.data);
        if(res.data.code){
          this.list = [];
          this.total = res.data.data.total;
          for (let i = 0; i < res.data.data.data.length; i++) {
            this.list.splice(i, 0, res.data.data.data[i]);
          }
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.per_page = val;
      this.getPull();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getPull();
    }
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
.myOrder{
  .myOrder-box {
    .myOrder-lis {
      .ul{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .li{
          margin: 0 0 0 0;
        }
      }
    }
  }

}

</style>
