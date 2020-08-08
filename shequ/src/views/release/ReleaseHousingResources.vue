<template>
  <div class="releaseHousingResources">
    <div class="releaseHome-title">
      <p>房屋租赁</p>
    </div>
    <!--租赁方式-->

    <div class="fwxzlb">
      <p class="titleFw">选择类别</p>
      <div class="fwxzlx-box">
        <span class="bt">*</span>
        <span class="text">房产</span>
        <el-radio v-model="radio" label="0">整租房</el-radio>
        <el-radio v-model="radio" label="1">合租房</el-radio>
        <el-radio v-model="radio" label="2">出售</el-radio>
      </div>
    </div>
    <!--房屋基本信息-->

    <div class="fwjbxx">
      <p class="titleFw">基本信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">标语</span>
          <input type="text" placeholder="填写标语" class="inp" v-model="title" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">小区名称</span>
          <input type="text" placeholder="填写小区名称" class="inp" v-model="xqmc" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">所属区域</span>
          <el-select style="width:420px" v-model="value4" placeholder="请选择卧室">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">房屋户型</span>
          <div class="lis-inp">
            <input type="text" v-model="s" />
            <span>室</span>
          </div>
          <div class="lis-inp">
            <input type="text" v-model="t" />
            <span>厅</span>
          </div>
          <div class="lis-inp">
            <input type="text" v-model="w" />
            <span>卫</span>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">楼层信息</span>
          <div class="lis-inp">
            <span>第</span>
            <input type="text" v-model="djc" />
            <span>层</span>
          </div>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" v-model="gjc" />
            <span>层</span>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text" v-if="radio==0">整租</span>
          <span class="text" v-if="radio==1">出租卧室</span>
          <span class="text" v-if="radio==2">出售</span>
          <el-select v-model="value" v-if="radio==1" placeholder="请选择卧室">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value1" placeholder="请选择朝向">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" v-model="pmdx" />
            <span style="line-height: 32px;">
              m
              <sup>2</sup>
            </span>
          </div>
        </div>
        <!-- <div class="fwjbxx-lis" v-else>
          <span class="bt">*</span>
          <span class="text">房屋朝向</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>-->
      </div>
    </div>
    <!--租金信息-->
    <div class="fwjbxx">
      <p class="titleFw">租金信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">出租卧室</span>
          <div class="lis-inp">
            <input type="text" v-model="je" />
            <span v-if="radio==2">元/平米</span>
            <span v-else>元/每月</span>
          </div>

          <el-select v-model="value3" v-if="radio==2" placeholder="选择租付款方式">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value2" v-else placeholder="选择租金缴纳方式">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <!--详细介绍-->
    <div class="fwjbxx">
      <p class="titleFw">详细介绍</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="text">装修情况</span>
          <div class="dxk">
            <el-radio v-model="radio1" label="0">毛坯</el-radio>
            <el-radio v-model="radio1" label="1">简单装修</el-radio>
            <el-radio v-model="radio1" label="2">精装修</el-radio>
            <el-radio v-model="radio1" label="3">豪华装修</el-radio>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">房屋配置</span>
          <div class="dxk">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city.id" :key="city.id">{{city.fa_name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">出租要求</span>
          <div class="dxk">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="禁止养宠物"></el-checkbox>
              <el-checkbox label="只租女生"></el-checkbox>
              <el-checkbox label="只租一家人"></el-checkbox>
              <el-checkbox label="不限"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">房源描述</span>
          <div class="dxk">
            <textarea
              name
              id
              v-model="fyms"
              cols="30"
              rows="10"
              placeholder="案例文本：
亮点：高档、环境优美的小区房，绿化好，24小时保安值班，电梯房。
房间：家具家电齐全，装修配置齐全，即可拎包入住。
周边：有物美、家乐福，肯德基、国美商厦，生活，购物方便。
交通：步行3分钟到一号线地铁口，10分钟到公主坟、马莲道公交。"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <!--房源上传-->
    <div class="fwjbxx">
      <p class="titleFw">房源上传</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">图片上传</span>
          <div class="sctp">
            <p
              class="sctp-ts"
            >请上传清晰、实拍的室内图片，请不要在图片上添加文字、数字、网址等内容，请勿上传名片、二维码、自拍照、风景照等与房源无关的图片，最多上传12张，每张最大10M</p>
            <div class="img-box">
              <template v-if="imgsLis.length!=0">
                <img
                  :src="'http://zt.shenyueyun.com'+item"
                  alt
                  v-for="(item,index) in imgsLis"
                  :key="index"
                  @click="ggtp(index)"
                />
              </template>

              <p class="tpsc" @click="tpsc" v-if="imgsLis.length<12">
                <i class="iconfont">&#xe61e;</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--联系信息-->
    <div class="fwjbxx" style="border-bottom: none;">
      <p class="titleFw">联系信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">详细地址</span>
          <input type="text" placeholder="填写详细地址" class="inp" v-model="xxdz" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系姓名</span>
          <input type="text" placeholder="填写联系姓名" class="inp" v-model="xm" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系方式</span>
          <input type="text" placeholder="填写联系方式" class="inp" v-model="lxfs" />
        </div>
      </div>
    </div>
    <!--提交按钮-->
    <div class="tjan">
      <p class="tjbtn" @click="tjfwxxCli">提交</p>
    </div>
    <!-- 图片剪切 -->
    <div class="smrzTpjq" v-if="tpjqOff">
      <i class="iconfont" @click="gbjqCli">&#xe62a;</i>
      <croppers :wbl="95" :hbl="71" @tpscCli="tpscClis" />
    </div>
  </div>
</template>

<script>
import "@style/release/releaseHousingResources.scss";
import croppers from "@components/croppers.vue";
export default {
  data() {
    return {
      token: null,
      // 切图控制变量
      tpjqOff: false,
      // 房屋类型
      radio: "0",
      //   选择卧室
      options: [
        {
          value: "主卧",
          label: "主卧",
        },
        {
          value: "次卧",
          label: "次卧",
        },
        {
          value: "隔间",
          label: "隔间",
        },
      ],
      value: "",
      // 选择朝向
      options1: [
        {
          value: "东",
          label: "东",
        },
        {
          value: "西",
          label: "西",
        },
        {
          value: "南",
          label: "南",
        },
        {
          value: "北",
          label: "北",
        },
      ],
      value1: "",
      // 选择租金方式
      options2: [
        {
          value: "押一付一",
          label: "押一付一",
        },
        {
          value: "押一付三",
          label: "押一付三",
        },
        {
          value: "半年租",
          label: "半年租",
        },
        {
          value: "整年租",
          label: "整年租",
        },
      ],
      value2: "",
      // 出售付款方式
      options3: [
        {
          value: "全款",
          label: "全款",
        },
        {
          value: "贷款",
          label: "贷款",
        },
      ],
      value3: "",
      // 所属街道
      options4: [
        {
          value: "全款",
          label: "全款",
        },
        {
          value: "贷款",
          label: "贷款",
        },
      ],
      value4: "",
      // 选择装修
      radio1: "0",
      // 房屋配置
      checkAll: false,
      checkedCities: [],
      cities: [],
      isIndeterminate: false,
      // 出租要求
      checkList: [],
      // 上传图片
      dialogImageUrl: "",
      dialogVisible: false,
      // 图片下标
      tpxb: "",
      // 提交的信息
      ids: null,
      title: "",
      xqmc: "",
      s: "",
      t: "",
      w: "",
      djc: "",
      gjc: "",
      pmdx: "",
      imgsLis: [],
      je: "",
      fyms: "",
      xxdz: "",
      xm: "",
      lxfs: "",
    };
  },
  mounted() {
    this.ids = this.$route.query.ids;
    console.log(this.ids);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    this.$store.dispatch("setNavFb", 0);
    // 获取个人信息
    this.$api.article
      .user({
        token: this.token,
      })
      .then((res) => {
        console.log("用户基本信息", res);
        let code = res.data.AREA_CODE;
        this.$api.article
          .getUserClassstreet({
            code: code,
          })
          .then((res) => {
            console.log("获取社区", res);
            let lis = res.data.data;
            let arr = [];
            for (let i = 0; i < lis.length; i++) {
              let obj = {
                value: lis[i].STREET_CODE,
                label: lis[i].STREET_NAME,
              };
              arr.push(obj);
            }
            this.options4 = arr;
          });
      });
    // 获取房屋配套参数
    this.$api.article
      .getFacilities({
        token: this.token,
      })
      .then((res) => {
        console.log("获取房屋配套参数", res);
        let lis = res.data.data;
        let arr = [];
        for (let i = 0; i < lis.length; i++) {
          let obj = {
            fa_name: lis[i].fa_name,
            id: lis[i].id,
          };
          arr.push(obj);
        }
        this.cities = arr;
      });
    // 数据回填
    if (this.ids) {
      this.$api.article
        .gerHousingSelect({
          token: this.token,
          id: this.ids,
        })
        .then((res) => {
          console.log("数据回填", res);
          let type = res.data.data.housing_type;
          let dat = res.data.data;
          if (type == 0) {
            this.radio = dat.housing_type + "";
            this.xqmc = dat.com_name;
            this.value4 = dat.STREET_CODE + "";
            this.s = dat.room;
            this.t = dat.hall;
            this.w = dat.toilet;
            this.djc = dat.floor;
            this.gjc = dat.floor_sum;
            this.value1 = dat.direction;
            this.pmdx = dat.area;
            this.je = dat.rent;
            this.value2 = dat.cash_pledge;
            this.radio1 = dat.decorate + "";
            let narr = dat.config.split(",");
            let arrs = [];
            for (let i = 0; i < narr.length; i++) {
              arrs.push(parseInt(narr[i]));
            }
            this.checkedCities = arrs;
            this.checkList = dat.require.split(",");
            this.fyms = dat.content;
            this.imgsLis = dat.images.split(",");
            this.xxdz = dat.address;
            this.xm = dat.home_name;
            this.lxfs = dat.home_phone;
            this.title = dat.title;
          }
          if (type == 1) {
            this.radio = dat.housing_type + "";
            this.xqmc = dat.com_name;
            this.value4 = dat.STREET_CODE + "";
            this.s = dat.room;
            this.t = dat.hall;
            this.w = dat.toilet;
            this.djc = dat.floor;
            this.gjc = dat.floor_sum;
            this.value1 = dat.direction;
            this.pmdx = dat.area;
            this.je = dat.rent;
            this.value = dat.bedroom;
            this.value2 = dat.cash_pledge;
            this.radio1 = dat.decorate + "";
            let narr = dat.config.split(",");
            let arrs = [];
            for (let i = 0; i < narr.length; i++) {
              arrs.push(parseInt(narr[i]));
            }
            this.checkedCities = arrs;
            this.checkList = dat.require.split(",");
            this.fyms = dat.content;
            this.imgsLis = dat.images.split(",");
            this.xxdz = dat.address;
            this.xm = dat.home_name;
            this.lxfs = dat.home_phone;
            this.title = dat.title;
          }
          if (type == 2) {
            this.radio = dat.housing_type + "";
            this.xqmc = dat.com_name;
            this.value4 = dat.STREET_CODE + "";
            this.s = dat.room;
            this.t = dat.hall;
            this.w = dat.toilet;
            this.djc = dat.floor;
            this.gjc = dat.floor_sum;
            this.value1 = dat.direction;
            this.pmdx = dat.area;
            this.je = dat.rent;
            this.value3 = dat.cash_pledge;
            this.radio1 = dat.decorate + "";
            let narr = dat.config.split(",");
            let arrs = [];
            for (let i = 0; i < narr.length; i++) {
              arrs.push(parseInt(narr[i]));
            }
            this.checkedCities = arrs;
            this.checkList = dat.require.split(",");
            this.fyms = dat.content;
            this.imgsLis = dat.images.split(",");
            this.xxdz = dat.address;
            this.xm = dat.home_name;
            this.lxfs = dat.home_phone;
            this.title = dat.title;
          }
        });
    }
  },
  methods: {
    // 选择房屋配套
    handleCheckAllChange(val) {
      console.log("val", val);
      // this.checkedCities = val ? this.cities : [];
      // this.isIndeterminate = false;
      if (val) {
        let arr = [];
        for (let i = 0; i < this.cities.length; i++) {
          arr.push(this.cities[i].id);
        }
        this.checkedCities = arr;
      } else {
        this.checkedCities = [];
      }
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    // 上传图片
    gbjqCli() {
      this.tpjqOff = false;
    },
    tpsc() {
      this.tpjqOff = true;
    },
    tpscClis(e) {
      console.log(e);
      if (this.tpxb === "") {
        let arr = this.imgsLis;
        arr.push(e);
        this.imgsLis = arr;
      } else {
        let arrs = this.imgsLis;
        arrs[this.tpxb] = e;
        this.imgsLis = arrs;
        this.tpxb = "";
      }
      this.tpjqOff = false;
    },
    ggtp(index) {
      this.tpjqOff = true;
      this.tpxb = index;
    },
    // 提交
    tjfwxxCli() {
      if (this.ids) {
        if (this.radio == 0) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value2 == "") {
            this.$message({
              message: "请选择交租方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              id: this.ids,
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              cash_pledge: this.value2,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
        if (this.radio == 1) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value == "") {
            this.$message({
              message: "请选择卧室",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value2 == "") {
            this.$message({
              message: "请选择交租方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              id: this.ids,
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              bedroom: this.value,
              cash_pledge: this.value2,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
        if (this.radio == 2) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value3 == "") {
            this.$message({
              message: "请选择付款方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              id: this.ids,
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              cash_pledge: this.value3,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
      } else {
        if (this.radio == 0) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value2 == "") {
            this.$message({
              message: "请选择交租方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              cash_pledge: this.value2,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
        if (this.radio == 1) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value == "") {
            this.$message({
              message: "请选择卧室",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value2 == "") {
            this.$message({
              message: "请选择交租方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              bedroom: this.value,
              cash_pledge: this.value2,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
        if (this.radio == 2) {
          if (this.title == "") {
            this.$message({
              message: "请填标语",
              type: "warning",
            });
            return;
          }
          if (this.xqmc == "") {
            this.$message({
              message: "请填写小区名称",
              type: "warning",
            });
            return;
          }
          if (this.value4 == "") {
            this.$message({
              message: "请选择所属区域",
              type: "warning",
            });
            return;
          }
          if (this.s == "") {
            this.$message({
              message: "请填写卧室数量",
              type: "warning",
            });
            return;
          }
          if (this.t == "") {
            this.$message({
              message: "请填写客厅餐厅数量",
              type: "warning",
            });
            return;
          }
          if (this.w == "") {
            this.$message({
              message: "请填写卫生间数量",
              type: "warning",
            });
            return;
          }
          if (this.djc == "") {
            this.$message({
              message: "请填写楼层",
              type: "warning",
            });
            return;
          }
          if (this.gjc == "") {
            this.$message({
              message: "请填写一共多少层",
              type: "warning",
            });
            return;
          }
          if (this.value1 == "") {
            this.$message({
              message: "请选择朝向",
              type: "warning",
            });
            return;
          }
          if (this.pmdx == "") {
            this.$message({
              message: "请填写房屋平米",
              type: "warning",
            });
            return;
          }
          if (this.je == "") {
            this.$message({
              message: "请填写租金",
              type: "warning",
            });
            return;
          }
          if (this.value3 == "") {
            this.$message({
              message: "请选择付款方式",
              type: "warning",
            });
            return;
          }
          if (this.checkedCities.length == 0) {
            this.$message({
              message: "请选择房屋配置",
              type: "warning",
            });
            return;
          }
          if (this.checkList.length == 0) {
            this.$message({
              message: "请选择出租要求",
              type: "warning",
            });
            return;
          }
          if (this.fyms == "") {
            this.$message({
              message: "请选填写房源描述",
              type: "warning",
            });
            return;
          }
          if (this.imgsLis.length == 0) {
            this.$message({
              message: "请上传房源图片",
              type: "warning",
            });
            return;
          }
          if (this.xxdz == "") {
            this.$message({
              message: "请填写详细地址",
              type: "warning",
            });
            return;
          }
          if (this.xm == "") {
            this.$message({
              message: "请填写姓名",
              type: "warning",
            });
            return;
          }
          if (this.lxfs == "") {
            this.$message({
              message: "请填写联系方式",
              type: "warning",
            });
            return;
          }
          this.$api.article
            .gerHousingAdd({
              token: this.token,
              housing_type: this.radio,
              com_name: this.xqmc,
              STREET_CODE: this.value4,
              room: this.s,
              hall: this.t,
              toilet: this.w,
              floor: this.djc,
              floor_sum: this.gjc,
              direction: this.value1,
              area: this.pmdx,
              rent: this.je,
              cash_pledge: this.value3,
              decorate: this.radio1,
              config: this.checkedCities.join(","),
              require: this.checkList.join(","),
              content: this.fyms,
              images: this.imgsLis.join(","),
              address: this.xxdz,
              home_name: this.xm,
              home_phone: this.lxfs,
              title: this.title,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "房源发布成功",
                  type: "success",
                });
              }
              this.$router.push({ path: "/myService", query: { id: 1 } });
            });
        }
      }
    },
  },
  components: {
    croppers,
  },
};
</script>

<style lang="scss" scoped>
</style>