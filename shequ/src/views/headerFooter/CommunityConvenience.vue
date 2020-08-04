<template>
  <div class="communityConvenience">
    <!--banner-->
    <div class="banner">
      <div class="sqBox">
        <div class="banner-box">
          <div class="box-txt">
            <p class="box-top webfont">社区便民</p>
            <p class="box-bot">满足居民群众需求、提高人民生活质量</p>
          </div>
        </div>
      </div>
    </div>
    <!--内容模块-->
    <div class="sqbmnrmo">
      <div class="sqBox">
        <!--生活缴费-->
        <div class="sqshjf">
          <div class="imgList">
            <ul>
              <li v-for="(item,index) in imgList" :key="index" @click="imgCli(index)">
                <a v-if="item.url" :href="item.url" target="view_window">
                  <img :src="item.imgUrl" alt />
                  <p :class="imgIndex==index?'sty'+index:''">{{item.name}}</p>
                </a>
                <a v-else>
                  <img :src="item.imgUrl" alt />
                  <p :class="imgIndex==index?'sty'+index:''">{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>
          <!--服务分类-->
          <div class="flNav">
            <div class="fl1">
              <div class="fl1-l">
                <span>服务类别：</span>
              </div>
              <div class="fl1-r">
                <template v-for="(item,index) in fl1List">
                  <span
                    :key="index"
                    :class="fl1Indexs==index?'sty':''"
                    @click="fl1Cli(index,item.name,item.id)"
                  >{{item.name}}</span>
                </template>
              </div>
            </div>
            <div class="fl2">
              <div class="fl2-l">
                <span>服务区域：</span>
              </div>
              <div class="fl2-r">
                <template v-for="(item,index) in fl2List">
                  <span
                    :key="index"
                    :class="fl2Index==index?'sty':''"
                    @click="fl2Cli(index,item.STREET_CODE)"
                  >{{item.STREET_NAME}}</span>
                </template>
              </div>
            </div>
          </div>
          <!--社区便民-->
          <div class="sqbmFw">
            <p class="sqbmFw-title">社区便民</p>
            <div class="sqbmFw-lists">
              <template v-if="fl1Index!=4">
                <ul v-if="fwLists&&fwLists.length!=0">
                  <li v-for="(item,index) in fwLists" :key="index" @click="lisClis(item.id)">
                    <div class="lists-box">
                      <div class="box-top">
                        <img v-if="item.image" :src="'http://zt.shenyueyun.com/'+item.image" alt />
                        <img v-else src="img/sqbmzw.png" alt />
                      </div>
                      <p class="box-txt">{{item.title}}</p>
                      <div class="box-con">
                        <p class="dz">
                          <i class="iconfont">&#xe634;</i>
                          <span>{{item.address}}</span>
                        </p>
                      </div>
                      <div class="box-jg">
                        <span class="jg-number" v-if="item.price_type==0">暂无报价</span>
                        <span class="jg-number" v-if="item.price_type==1">{{item.price}}</span>
                        <span class="jg-number" v-if="item.price_type==2">面议</span>
                        <span class="jg-yy" v-if="item.price_type==1">元/{{item.price_unit}}</span>
                      </div>
                      <div class="box-lxdh">
                        <i class="iconfont">&#xe645;</i>
                        <span>联系商家</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </template>
              <template v-else>
                <ul v-if="fwLists&&fwLists.length!=0">
                  <li v-for="(item,index) in fwLists" :key="index" @click="lisClis(item.id)">
                    <div class="lists-box">
                      <div class="box-top">
                        <img v-if="item.image" :src="'http://zt.shenyueyun.com/'+item.image" alt />
                        <img v-else src="img/sqbmzw.png" alt />
                      </div>
                      <p class="box-txt">{{item.title}}</p>
                      <div class="box-con">
                        <p class="dz" :title="item.address">
                          <i class="iconfont">&#xe634;</i>
                          <span>{{item.address}}</span>
                        </p>
                        <p class="hx">
                          <i class="iconfont">&#xe6c2;</i>
                          <span>{{item.bedroom}}({{item.room}}室{{item.hall}}厅{{item.toilet}}卫){{item.area}}㎡</span>
                        </p>
                      </div>
                      <div class="box-jg">
                        <span class="jg-number">{{item.rent}}</span>
                        <span class="jg-yy">元/{{item.price_unit}}</span>
                      </div>
                      <div class="box-lxdh">
                        <i class="iconfont">&#xe645;</i>
                        <span>联系商家</span>
                      </div>
                    </div>
                  </li>
                  <!--<li>
                  <div class="lists-box">
                    <div class="box-top">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                  </li>-->
                </ul>
              </template>
            </div>
          </div>
          <!--分页-->
          <div class="fy">
            <div class="fy-box">
              <el-pagination
                background
                :pageSize="16"
                layout="prev, pager, next"
                :total="total"
                prev-text="上一页"
                next-text="下一页"
                :hideOnSinglePage="true"
                :current-page.sync="currentPage3"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/communityConvenience.scss";
export default {
  data() {
    return {
      token: null,
      // 带图片导航
      imgIndex: 0,
      imgList: [
        {
          name: "水费",
          imgUrl: "img/sqbmsf.png",
          url:
            "https://billcloud.unionpay.com/ccfront/entry/search?category=D4&areaId=1900",
        },
        {
          name: "电费",
          imgUrl: "img/sqbmdf.png",
          url:
            "https://billcloud.unionpay.com/ccfront/entry/search?category=D1&areaId=1900",
        },
        { name: "燃气费", imgUrl: "img/sqbmrqf.png", url: "" },
        { name: "物业费", imgUrl: "img/sqbmwyf.png", url: "" },
      ],
      // 分类导航
      fl1Name: "全部",
      fl1Index: 0,
      fl1Indexs: 0,
      fl1List: [
        { name: "全部", id: 0 },
        // { name: "保洁劳务", id: 0 },
        // { name: "开锁/换锁/修锁", id: 0 },
        // { name: "管道疏通", id: 0 },
        // { name: "房屋租赁", id: 0 },
      ],
      fl2Index: 0,
      ids: 0,
      fl2List: [
        { STREET_NAME: "全部", STREET_CODE: 0 },
        // { name: "保洁劳务", id: 0 },
        // { name: "开锁/换锁/修锁", id: 0 },
        // { name: "管道疏通", id: 0 },
        // { name: "房屋租赁", id: 0 },
      ],
      // 用户信息
      userInfo: null,
      // 服务列表
      fwLists: [],
      // 数据数量
      total: 1000,
      currentPage3: 1,
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 1);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 社区服务类型列表
    this.$api.article
      .gerServiceList({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        let arr = this.fl1List;
        if (res.data.code == 1) {
          let lis = res.data.data;
          for (let i = 0; i < lis.length; i++) {
            arr.push(lis[i]);
          }
          let fcfw = { id: arr.length, name: "房屋租赁" };
          arr.push(fcfw);
          this.fl1List = arr;
        }
      });
    // 获取用户信息
    this.$api.article
      .user({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.userInfo = res.data.data;
          // 获取社区
          this.$api.article
            .getUserClassstreet({
              code: this.userInfo.AREA_CODE,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                let arrs = this.fl2List;
                let list = res.data.data;
                for (let i = 0; i < list.length; i++) {
                  arrs.push(list[i]);
                }
                this.fl2List = arrs;
              }
            });
          // 获取服务列表
          this.$api.article
            .gerCommunityList({
              token: this.token,
              AREA_CODE: this.userInfo.AREA_CODE,
              service_type: this.fl1Index,
              STREET_CODE: this.ids,
            })
            .then((res) => {
              console.log("服务列表", res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
                this.total = res.data.data.total;
              }
            });
        }
      });
  },
  methods: {
    // 生活缴费
    imgCli(index) {
      this.imgIndex = index;
    },
    fl1Cli(index, name, id) {
      this.fl1Indexs = index;
      this.fl1Index = id;
      this.fl1Name = name;
      if (index != 4) {
        // 获取服务列表
        this.$api.article
          .gerCommunityList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
            service_type: this.fl1Index,
            STREET_CODE: this.ids,
          })
          .then((res) => {
            console.log("服务列表", res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
              this.total = res.data.data.total;
            }
          });
      } else {
        if (this.ids == 0) {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.userInfo.AREA_CODE,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
                this.total = res.data.data.total;
              }
            });
        } else {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.ids,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
                this.total = res.data.data.total;
              }
            });
        }
      }
    },
    // 点击社区
    fl2Cli(index, ids) {
      this.fl2Index = index;
      this.ids = ids;
      if (this.fl1Index != 4) {
        // 获取服务列表
        this.$api.article
          .gerCommunityList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
            service_type: this.fl1Index,
            STREET_CODE: this.ids,
          })
          .then((res) => {
            console.log("服务列表", res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
              this.total = res.data.data.total;
            }
          });
      } else {
        if (this.ids == 0) {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.userInfo.AREA_CODE,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
                this.total = res.data.data.total;
              }
            });
        } else {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.ids,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
                this.total = res.data.data.total;
              }
            });
        }
      }
    },
    // 进入商品详情
    lisClis(index) {
      console.log(index);
      if (this.fl1Name == "房屋租赁") {
        this.$router.push({ path: "/productDetails1", query: { id: index } });
      } else {
        this.$router.push({ path: "/productDetails", query: { id: index } });
      }
    },
    // 分页
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
      if (this.fl1Index != 4) {
        // 获取服务列表
        this.$api.article
          .gerCommunityList({
            token: this.token,
            AREA_CODE: this.userInfo.AREA_CODE,
            service_type: this.fl1Index,
            STREET_CODE: this.ids,
            page: val,
          })
          .then((res) => {
            console.log("服务列表", res);
            if (res.data.code == 1) {
              this.fwLists = res.data.data.rows;
            }
          });
      } else {
        if (this.ids == 0) {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.userInfo.AREA_CODE,
              page: val,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
              }
            });
        } else {
          this.$api.article
            .gerHousingList({
              token: this.token,
              AREA_CODE: this.ids,
              page: val,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.fwLists = res.data.data.rows;
              }
            });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>