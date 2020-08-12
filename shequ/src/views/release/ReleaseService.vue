<template>
  <div class="releaseService">
    <div class="releaseHome-title">
      <p>发布服务</p>
    </div>
    <!--服务类别-->

    <div class="fwxzlb">
      <p class="titleFw">服务类别</p>
      <div class="fwxzlx-box">
        <span class="bt">*</span>
        <span class="text">服务类型</span>
        <el-radio v-model="radio" label="1">保洁劳务</el-radio>
        <el-radio v-model="radio" label="2">开锁/换锁/修锁</el-radio>
        <el-radio v-model="radio" label="3">管道疏通</el-radio>
      </div>
    </div>
    <!--服务基本信息-->

    <div class="fwjbxx">
      <p class="titleFw">基本信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">标题</span>
          <input type="text" placeholder="请输入标题" class="inp" v-model="fwbt" />
        </div>
        <!-- <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">服务区域</span>
          <el-cascader
            placeholder="请选择服务区域"
            popper-class="popper1"
            :options="options1"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </div>-->
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">所属社区</span>
          <el-select v-model="value3" placeholder="请选择所属社区">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">服务区域</span>
          <el-select v-model="value1" multiple placeholder="请选择服务区域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">报价方式</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="fwjbxx-lis" v-if="value2==1">
          <span class="bt">*</span>
          <span class="text">价格</span>
          <input type="text" placeholder="请输入价格" class="inp" v-model="jg" />
        </div>
      </div>
    </div>
    <!--服务特色描述-->
    <div class="fwjbxx">
      <p class="titleFw">服务特色描述</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">详情描述</span>
          <div class="dxk">
            <textarea
              v-model="fwtsms"
              name
              id
              cols="30"
              rows="10"
              placeholder="案例文本：
服务特色：地毯清洁、开荒保洁、物业保洁
服务描述：专业承接新居、旧居、楼宇等全面日常保洁、开荒保洁、地毯清洗等工作。"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <!--服务图片-->
    <div class="fwjbxx">
      <p class="titleFw">服务图片</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">图片上传</span>
          <div class="sctp">
            <p class="sctp-ts">上传的图片不能包含有文字、数字、网址、名片等，最多上传8张，每张最大10M</p>
            <div class="imgLisBox">
              <template v-if="imgsArr.length!=0">
                <img
                  v-for="(item,index) in imgsArr"
                  :key="index"
                  :src="'http://zt.shenyueyun.com'+item"
                  alt
                  @click="ghtp(index)"
                />
              </template>
              <p v-if="imgsArr.length<8" class="sctpbz" @click="sctpClis">
                <i class="iconfont">&#xe61e;</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--联系商家-->
    <div class="fwjbxx" style="border-bottom: none;">
      <p class="titleFw">联系商家</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">详细地址</span>
          <input type="text" placeholder="请输入详细地址" class="inp" v-model="xxdz" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系名称</span>
          <input type="text" placeholder="填写联系名称" class="inp" v-model="lxxm" />
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
      <p class="tjbtn" @click="fbfwCli">提交</p>
    </div>
    <!-- 图片剪切 -->
    <div class="smrzTpjq" v-if="tpjqOff">
      <i class="iconfont" @click="gbjqCli">&#xe62a;</i>
      <croppers :wbl="95" :hbl="71" @tpscCli="tpscClis" />
    </div>
  </div>
</template>

<script>
import "@style/release/releaseService.scss";
import { regionData } from "element-china-area-data";
import croppers from "@components/croppers.vue";
export default {
  data() {
    return {
      token: null,
      // 多图下标
      dtxb: "",
      // 切图控制变量
      tpjqOff: false,
      //   选择服务区域
      options: [],
      options2: [
        {
          value: "0",
          label: "暂无报价",
        },
        {
          value: "1",
          label: "价格",
        },
        {
          value: "2",
          label: "面议",
        },
      ],
      // 省市区
      options1: regionData,
      // 提交的数据
      // 类型
      ids: null,
      radio: "1",
      fwbt: "",
      value3: "",
      value1: [],
      value2: "",
      jg: "",
      fwtsms: "",
      imgsArr: [],
      xxdz: "",
      lxxm: "",
      lxfs: "",
    };
  },
  mounted() {
    this.ids = this.$route.query.ids;
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    this.$store.dispatch("setNavFb", 2);
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
            this.options = arr;
          });
      });
    // 获取数据回填
    if (this.ids) {
      this.$api.article
        .gerServiceSelect({
          token: this.token,
          id: this.ids,
        })
        .then((res) => {
          console.log("获取数据回填", res);
          let dat = res.data.data;
          this.radio = dat.service_type + "";
          this.fwbt = dat.title;
          this.value1 = dat.contact_area.split(",");
          this.value3 = dat.STREET_CODE + "";
          this.value2 = dat.price_type;
          this.jg = dat.price;
          this.fwtsms = dat.content;
          this.imgsArr = dat.images.split(",");
          this.xxdz = dat.address;
          this.lxxm = dat.contact_name;
          this.lxfs = dat.contact_phone;
        });
    }
  },
  methods: {
    // 图片上传
    sctpClis() {
      this.tpjqOff = true;
    },
    gbjqCli() {
      this.tpjqOff = false;
    },
    tpscClis(e) {
      console.log(this.dtxb);
      if (this.dtxb === "") {
        let imgArr = this.imgsArr;
        imgArr.push(e);
        this.imgsArr = imgArr;
        this.tpjqOff = false;
      } else {
        let imgghArr = this.imgsArr;
        imgghArr[this.dtxb] = e;
        this.imgsArr = imgghArr;
        this.tpjqOff = false;
        this.dtxb = "";
      }
    },
    // 图片更换
    ghtp(index) {
      this.dtxb = index;
      this.tpjqOff = true;
    },
    // 提交发不信息
    fbfwCli() {
      if (this.radio == "") {
        this.$message({
          message: "请选择服务类型",
          type: "warning",
        });
        return;
      }
      if (this.fwbt == "") {
        this.$message({
          message: "请填写服务标题",
          type: "warning",
        });
        return;
      }
      if (this.value3 == "") {
        this.$message({
          message: "请选择所属社区",
          type: "warning",
        });
        return;
      }
      if (this.value1.length == 0) {
        this.$message({
          message: "请选择服务区域",
          type: "warning",
        });
        return;
      }
      if (this.value2 == "") {
        this.$message({
          message: "请选择报价方式",
          type: "warning",
        });
        return;
      }
      if (this.value2 == 1) {
        if (this.jg == "") {
          this.$message({
            message: "请填写服务价格",
            type: "warning",
          });
          return;
        }
        let repJg = /^[1-9][0-9]*([.][0-9]+)?$/;
        if (!repJg.test(this.jg)) {
          this.$message({
            message: "请填正确填写价格，不需要带单位",
            type: "warning",
          });
          return;
        }
      }
      if (this.fwtsms == "") {
        this.$message({
          message: "请填写服务描述",
          type: "warning",
        });
        return;
      }
      if (this.imgsArr.length == 0) {
        this.$message({
          message: "请填最少上传一张图片",
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
      if (this.lxxm == "") {
        this.$message({
          message: "请填写联系名称",
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
      let regPhone = /^1[3456789]\d{9}$/;
      if (!regPhone.test(this.lxfs)) {
        this.$message({
          message: "请正确填写联系方式",
          type: "warning",
        });
        return;
      }
      // 提交之前数据处理
      let fwsqStr = this.value1.join(",");
      let imgsStr = this.imgsArr.join(",");
      if (this.ids) {
        this.$api.article
          .gerSetviceAdd({
            id: this.ids,
            token: this.token,
            service_type: this.radio,
            title: this.fwbt,
            contact_area: fwsqStr,
            STREET_CODE: this.value3,
            price_type: this.value2,
            price: this.jg,
            content: this.fwtsms,
            images: imgsStr,
            address: this.xxdz,
            contact_name: this.lxxm,
            contact_phone: this.lxfs,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "修改成功！",
                type: "success",
              });
              this.$router.push({ path: "/myService", query: { id: 1 } });
            }
          });
      } else {
        this.$api.article
          .gerSetviceAdd({
            token: this.token,
            service_type: this.radio,
            title: this.fwbt,
            contact_area: fwsqStr,
            STREET_CODE: this.value3,
            price_type: this.value2,
            price: this.jg,
            content: this.fwtsms,
            images: imgsStr,
            address: this.xxdz,
            contact_name: this.lxxm,
            contact_phone: this.lxfs,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "发布服务成功！",
                type: "success",
              });
              this.$router.push({ path: "/myService", query: { id: 1 } });
            }
          });
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