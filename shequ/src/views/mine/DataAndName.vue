<template>
  <div class="dataAndName">
    <div class="dataAndName-nav">
      <p :class="{'sty':ssnav==2}" @click="zhCli">账号与资料</p>
      <p :class="{'sty':ssnav==3}" @click="smrzCli">实名认证</p>
    </div>
    <div class="zhxx-zl" v-if="ssnav==2">
      <div class="xgtx" v-if="userInfo">
        <div class="xgtx-box">
          <p class="xgtx-ts">修改头像</p>
          <input
            class="style_file_content"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            type="file"
            id="upload_file_id"
            @change="fileChange"
          />
          <img v-if="userInfo.avatar" :src="userInfo.avatar" alt />
          <img v-else src="@assets/img/xgtx.png" alt />
        </div>
      </div>
      <div class="jbxx" v-if="userInfo">
        <p class="jbxx-title">基本信息</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">用户名</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.username">{{userInfo.username}}</span>
                <span class="xg" @click="userCli(userInfo.username)">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">手机号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.mobile">{{userInfo.mobile}}</span>
                <span class="xg" v-if="userInfo.mobile" @click="xgsjh(userInfo.mobile)">修改</span>
                <span class="xg" v-else @click="bdsjh">绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">性别</p>
              <p class="jbxx-box-r">
                <el-radio v-model="radio" label="0" @change="xgxb">男</el-radio>
                <el-radio v-model="radio" label="1" @change="xgxb">女</el-radio>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="jbxx" v-if="userInfo">
        <p class="jbxx-title">密码设置</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">登录密码</p>
              <p class="jbxx-box-r">
                <span class="xg" @click="xgmmCli">修改</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="jbxx" v-if="userInfo">
        <p class="jbxx-title">第三方账号绑定</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">邮箱账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.email!=0">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">微信账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.weixin_cord!=0">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">QQ账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.qq_cord!=0">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">新浪微博</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="userInfo.xinlang_code!=0">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="zhxx-zl" v-if="ssnav==3">
      <div class="jbxx" v-if="userInfo">
        <p class="jbxx-title">人员信息</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">用户名</p>
              <p class="jbxx-box-r">
                <span class="xx">{{userInfo.username}}</span>
                <span class="xg" @click="userCli(userInfo.username)">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">手机号</p>
              <p class="jbxx-box-r">
                <span class="xx">{{userInfo.mobile}}</span>
                <span class="xg" v-if="userInfo.mobile" @click="xgsjh(userInfo.mobile)">修改</span>
                <span class="xg" v-else @click="bdsjh">绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">身份证号</p>
              <p class="jbxx-box-r">
                <span class="xx">150415********0050</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="jbxx">
        <p class="jbxx-title">店铺信息</p>
        <ul v-if="dpxxOr">
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">法人姓名</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.person_names}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">法人联系方式</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.person_phones}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">法人身份证号</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.person_codes}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">统一社会编码</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.social_coding}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">营业执照</p>
              <div class="jbxx-box-r">
                <div class="demo-image__preview">
                  <el-image style="width: 100px;" :src="url" :preview-src-list="srcList"></el-image>
                </div>
                <!-- <span class="xx">金万通保洁</span> -->
                <!-- <span class="xg">修改</span> -->
              </div>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">店铺logo</p>
              <div class="jbxx-box-r">
                <div class="demo-image__preview">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="url1"
                    :preview-src-list="srcList1"
                  ></el-image>
                </div>
                <!-- <span class="xx">金万通保洁</span> -->
                <!-- <span class="xg">修改</span> -->
              </div>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">店铺名称</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.shop_name}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">店铺地址</p>
              <p class="jbxx-box-r">
                <span class="xx">{{dpxxDat.address}}</span>
                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">服务类型</p>
              <p class="jbxx-box-r">
                <span
                  class="qgk"
                  v-for="(item,index) in dpxxDat.service_idss"
                  :key="index"
                >{{item.label}}</span>

                <!-- <span class="xg">修改</span> -->
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">地图标点</p>
              <div class="jbxx-box-rs">
                <Map :longitude="dpxxDat.longitude" :latitude="dpxxDat.latitude" />
              </div>
            </div>
          </li>
        </ul>
        <div class="jbxx-btn">
          <span v-if="dpxxOr" @click="wsspxxCli">修改店铺信息</span>
          <span v-else @click="wsspxxCli">立即完善商铺信息</span>
        </div>
      </div>
    </div>
    <!--自定义弹出框-->
    <div class="zdytck" v-if="isTck">
      <div class="zdytck-box">
        <p class="box-title">修改密码</p>
        <div class="inp-box">
          <input type="password" placeholder="请输入初始密码" v-model="ymm" />
          <input type="password" placeholder="请输入新密码" v-model="xmm" />
          <input type="password" placeholder="请确认新密码" v-model="yxmm" />
        </div>
        <div class="zdytck-btn">
          <button
            type="button"
            @click="qxxgmmCli"
            class="el-button el-button--default el-button--small"
          >
            <span>取消</span>
          </button>
          <button
            @click="tjxgmmCli"
            type="button"
            class="el-button el-button--default el-button--small el-button--primary"
          >
            <span>确定</span>
          </button>
        </div>
      </div>
    </div>
    <!-- 店铺信息提交弹出框 -->
    <div class="dpxxmodel" v-if="dpxxtjOff">
      <div class="dpxxmodel-box">
        <p class="dpxxmodel-title">店铺信息完善</p>
        <div class="inp-box">
          <p class="inp-lis">
            <input type="text" placeholder="请输入法人姓名" v-model="frxm" />
          </p>
          <p class="inp-lis">
            <input type="text" placeholder="请输入法人联系方式" v-model="frlxfs" />
          </p>
          <p class="inp-lis">
            <input type="text" placeholder="请输入法人身份证号" v-model="frsfzh" />
          </p>
          <p class="inp-lis">
            <input type="text" placeholder="请输入统一社会编码" v-model="tyshbm" />
          </p>
          <p class="up-lis">
            <span class="up-lis-text">上传营业执照</span>
            <el-upload
              class="avatar-uploader"
              action
              :show-file-list="false"
              :auto-upload="false"
              :on-change="onChange"
            >
              <img v-if="imageUrl" :src="'http://zt.shenyueyun.com'+imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </p>
          <p class="up-lis">
            <span class="up-lis-text">上传店铺logo</span>
            <img
              class="sctp"
              v-if="imageUrl1"
              :src="'http://zt.shenyueyun.com'+imageUrl1"
              alt
              @click="sclogoCli"
            />
            <img class="sctp" v-else src="img/sctp.png" alt @click="sclogoCli" />
          </p>
          <p class="inp-lis">
            <input type="text" placeholder="请输入店铺名称" v-model="dpmc" />
          </p>
          <p class="inp-lis">
            <input type="text" placeholder="请输入店铺详细地址" v-model="dpxxdz" />
          </p>
          <p class="inp-lis">
            <el-select v-model="value1" multiple placeholder="请选择店铺服务类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </p>
        </div>
        <div class="dpxxbc-btn">
          <span class="dpxxbc-btn-l" @click="tjdpxxCli">提交店铺信息</span>
          <span class="dpxxbc-btn-r" @click="qxtjdpxxCli">取消提交</span>
        </div>
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
import "@style/mine/dataAndName.scss";
import Map from "@components/Map.vue";
import croppers from "@components/croppers.vue";
export default {
  data() {
    return {
      styOff: 2,
      radio: "0",
      token: null,
      // 用户信息
      userInfo: null,
      // 上传头像需要
      adatar: "",
      // 自定义弹出框
      isTck: false,
      // 密码修改
      ymm: "",
      xmm: "",
      yxmm: "",
      // 营业执照
      url: "img/yyzz.png",
      srcList: ["img/yyzz.png"],
      // logo
      url1: "img/splogo.png",
      srcList1: ["img/splogo.png"],
      // 店铺是否完善
      dpxxOr: false,
      // 店铺信息
      dpxxDat: {},
      // 营业执照
      imageUrl: "",
      // 上传logo
      imageUrl1: "",
      // 选择店铺服务
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      // 空值变量
      // 图片剪切
      tpjqOff: false,
      // 店铺信息提交弹出框
      dpxxtjOff: false,
      // 店铺提交的信息
      frxm: "",
      frlxfs: "",
      frsfzh: "",
      tyshbm: "",
      dpmc: "",
      dpxxdz: "",
      is_shopcom: "",
    };
  },
  methods: {
    // 提交店铺信息
    tjdpxxCli() {
      if (!this.dpxxOr) {
        let regName = /^[\u4e00-\u9fa5]{2,8}$/;
        if (this.frxm == "") {
          this.$message({
            message: "请填写法人姓名",
            type: "warning",
          });
          return;
        }
        if (!regName.test(this.frxm)) {
          this.$message({
            message: "请正确填写法人姓名",
            type: "warning",
          });
          return;
        }
        let regPhone = /^1[3456789]\d{9}$/;
        if (this.frlxfs == "") {
          this.$message({
            message: "请填写法人联系方式",
            type: "warning",
          });
          return;
        }
        if (!regPhone.test(this.frlxfs)) {
          this.$message({
            message: "请正确填写法人联系方式",
            type: "warning",
          });
          return;
        }
        let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (this.frsfzh == "") {
          this.$message({
            message: "请填写法人身份证号",
            type: "warning",
          });
          return;
        }
        if (!regIdNo.test(this.frsfzh)) {
          this.$message({
            message: "请正确填写法人身份证号",
            type: "warning",
          });
          return;
        }
        let regTyshbm = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/;
        if (this.tyshbm == "") {
          this.$message({
            message: "请填写统一社会编码",
            type: "warning",
          });
          return;
        }
        // if (!regTyshbm.test(this.tyshbm)) {
        //   this.$message({
        //     message: "请正确填写统一社会编码",
        //     type: "warning",
        //   });
        //   return;
        // }
        if (this.imageUrl == "") {
          this.$message({
            message: "请上传营业执照",
            type: "warning",
          });
          return;
        }
        if (this.imageUrl1 == "") {
          this.$message({
            message: "请上传店铺logo",
            type: "warning",
          });
          return;
        }
        if (this.dpmc == "") {
          this.$message({
            message: "请填写店铺名称",
            type: "warning",
          });
          return;
        }
        if (this.dpxxdz == "") {
          this.$message({
            message: "请填写店铺名详细地址",
            type: "warning",
          });
          return;
        }
        if (this.value1.length == 0) {
          this.$message({
            message: "请选择店铺服务类型",
            type: "warning",
          });
          return;
        }
        let val = this.value1;
        console.log(val);
        let valStr = val.join(",");
        this.$api.article
          .getAdd({
            token: this.token,
            is_shopcom: this.is_shopcom,
            person_name: this.frxm,
            person_phone: this.frlxfs,
            person_code: this.frsfzh,
            social_coding: this.tyshbm,
            businessimage: this.imageUrl,
            logo: this.imageUrl1,
            shop_name: this.dpmc,
            address: this.dpxxdz,
            service_ids: valStr,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "店铺信息提交成功",
                type: "success",
              });
              this.dpxxtjOff = false;
              // 获取店铺信息
              this.$api.article
                .getSelect({
                  token: this.token,
                })
                .then((res) => {
                  console.log("获取店铺信息", res);
                  let xx = res.data.data;
                  this.is_shopcom = res.data.data.is_shopcom;
                  if (res.data.data.is_shopcom == 1) {
                    this.dpxxOr = true;
                    this.frxm = res.data.data.person_name;
                    this.frlxfs = res.data.data.person_phone;
                    this.frsfzh = res.data.data.person_code;
                    this.tyshbm = res.data.data.social_coding;
                    this.imageUrl = res.data.data.businessimage;
                    this.imageUrl1 = res.data.data.logo;
                    this.dpmc = res.data.data.shop_name;
                    this.dpxxdz = res.data.data.address;
                    // this.value1 = res.data.data.service_ids.split(",");
                    xx.person_names = this.$enc.plusXing(xx.person_name, 1, 0);
                    xx.person_phones = this.$enc.plusXing(
                      xx.person_phone,
                      3,
                      4
                    );
                    xx.person_codes = this.$enc.plusXing(xx.person_code, 6, 4);
                    xx.service_ids = xx.service_ids.split(",");
                    console.log(this.value1);
                    let arrs = [];
                    for (let j = 0; j < xx.service_ids.length; j++) {
                      // console.log(xx.service_ids[j]);
                      xx.service_ids[j] = parseInt(xx.service_ids[j]);
                      for (let s = 0; s < this.options.length; s++) {
                        if (xx.service_ids[j] == this.options[s].value) {
                          arrs.push(this.options[s]);
                          break;
                        }
                      }
                    }
                    this.value1 = xx.service_ids;
                    xx.service_idss = arrs;
                    this.dpxxDat = xx;
                    this.url = "http://zt.shenyueyun.com" + xx.businessimage;
                    this.url1 = "http://zt.shenyueyun.com" + xx.logo;
                    (this.srcList = [
                      "http://zt.shenyueyun.com" + xx.businessimage,
                    ]),
                      (this.srcList1 = ["http://zt.shenyueyun.com" + xx.logo]),
                      console.log(xx);
                  } else {
                    this.dpxxOr = false;
                  }
                });
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning",
              });
            }
          });
      } else {
        if (this.frxm != "") {
          let regName = /^[\u4e00-\u9fa5]{2,8}$/;
          if (!regName.test(this.frxm)) {
            this.$message({
              message: "请正确填写法人姓名",
              type: "warning",
            });
            return;
          }
        }
        if (this.frlxfs != "") {
          let regPhone = /^1[3456789]\d{9}$/;
          if (!regPhone.test(this.frlxfs)) {
            this.$message({
              message: "请正确填写法人联系方式",
              type: "warning",
            });
            return;
          }
        }
        if (this.frsfzh != "") {
          let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if (!regIdNo.test(this.frsfzh)) {
            this.$message({
              message: "请正确填写法人身份证号",
              type: "warning",
            });
            return;
          }
        }
        if (this.tyshbm != "") {
          let regTyshbm = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/;
          // if (!regTyshbm.test(this.tyshbm)) {
          //   this.$message({
          //     message: "请正确填写统一社会编码",
          //     type: "warning",
          //   });
          //   return;
          // }
        }

        if (this.value1.length == 0) {
          this.$message({
            message: "请选择店铺服务类型",
            type: "warning",
          });
          return;
        }
        let val = this.value1;
        console.log(val);
        let valStr = val.join(",");
        this.$api.article
          .getAdd({
            token: this.token,
            is_shopcom: this.is_shopcom,
            person_name: this.frxm,
            person_phone: this.frlxfs,
            person_code: this.frsfzh,
            social_coding: this.tyshbm,
            businessimage: this.imageUrl,
            logo: this.imageUrl1,
            shop_name: this.dpmc,
            address: this.dpxxdz,
            service_ids: valStr,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "店铺信息提交成功",
                type: "success",
              });
              this.dpxxtjOff = false;
              // 获取店铺信息
              this.$api.article
                .getSelect({
                  token: this.token,
                })
                .then((res) => {
                  console.log("获取店铺信息", res);
                  let xx = res.data.data;
                  this.is_shopcom = res.data.data.is_shopcom;
                  if (res.data.data.is_shopcom == 1) {
                    this.dpxxOr = true;
                    this.frxm = res.data.data.person_name;
                    this.frlxfs = res.data.data.person_phone;
                    this.frsfzh = res.data.data.person_code;
                    this.tyshbm = res.data.data.social_coding;
                    this.imageUrl = res.data.data.businessimage;
                    this.imageUrl1 = res.data.data.logo;
                    this.dpmc = res.data.data.shop_name;
                    this.dpxxdz = res.data.data.address;
                    // this.value1 = res.data.data.service_ids.split(",");
                    xx.person_names = this.$enc.plusXing(xx.person_name, 1, 0);
                    xx.person_phones = this.$enc.plusXing(
                      xx.person_phone,
                      3,
                      4
                    );
                    xx.person_codes = this.$enc.plusXing(xx.person_code, 6, 4);
                    xx.service_ids = xx.service_ids.split(",");
                    console.log(this.value1);
                    let arrs = [];
                    for (let j = 0; j < xx.service_ids.length; j++) {
                      // console.log(xx.service_ids[j]);
                      xx.service_ids[j] = parseInt(xx.service_ids[j]);
                      for (let s = 0; s < this.options.length; s++) {
                        if (xx.service_ids[j] == this.options[s].value) {
                          arrs.push(this.options[s]);
                          break;
                        }
                      }
                    }
                    this.value1 = xx.service_ids;
                    xx.service_idss = arrs;
                    this.dpxxDat = xx;
                    this.url = "http://zt.shenyueyun.com" + xx.businessimage;
                    this.url1 = "http://zt.shenyueyun.com" + xx.logo;
                    (this.srcList = [
                      "http://zt.shenyueyun.com" + xx.businessimage,
                    ]),
                      (this.srcList1 = ["http://zt.shenyueyun.com" + xx.logo]),
                      console.log(xx);
                  } else {
                    this.dpxxOr = false;
                  }
                });
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning",
              });
            }
          });
      }
    },
    qxtjdpxxCli() {
      this.dpxxtjOff = false;
    },
    // 点击完善商铺信息
    wsspxxCli() {
      // this.dpxxOr = true;
      this.dpxxtjOff = true;
    },
    // 修改密码
    xgmmCli() {
      this.isTck = true;
    },
    qxxgmmCli() {
      this.isTck = false;
      this.$message({
        type: "info",
        message: "取消输入",
      });
    },
    tjxgmmCli() {
      if (this.ymm == "") {
        this.$message({
          type: "warning",
          message: "原始密码不能为空",
        });
        return;
      }
      if (this.xmm == "") {
        this.$message({
          type: "warning",
          message: "请输入新密码",
        });
        return;
      }
      let pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      if (!pwd.test(this.xmm)) {
        this.$message({
          message:
            "密码不够安全（至少8-16个字符，至少1个大写字母，1个小写字母和1个数字）",
          type: "warning",
        });
        return;
      }
      if (this.xmm != this.yxmm) {
        this.$message({
          message: "两次密码输入不一致",
          type: "warning",
        });
        return;
      }
      this.$api.article
        .getPwdEdit({
          token: this.token,
          newpassword: this.xmm,
          oldpassword: this.ymm,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 1) {
            this.$message({
              type: "success",
              message: "密码修改成功，请重新登陆",
            });
            this.$store.dispatch("setUser", false);
            localStorage.removeItem("shequ");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            this.$router.push({ path: "/login" });
          } else {
            this.$message({
              type: "warning",
              message: res.data.msg,
            });
          }
        });
    },
    // 修改密码
    zhCli() {
      this.$store.dispatch("setMin", 2);
    },
    smrzCli() {
      this.$store.dispatch("setMin", 3);
    },
    // 修改用户名
    userCli(e) {
      const that = this;
      this.$prompt("请修改用户名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: "邮箱格式不正确",
        inputValue: e,
      })
        .then(({ value }) => {
          this.$api.article
            .xgyhm({
              token: this.token,
              username: value,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code != 1) {
                this.$message({
                  type: "warning",
                  message: res.data.msg,
                });
              } else {
                this.userInfo.username = value;
                this.$message({
                  type: "success",
                  message: "修改用户名为: " + value,
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    // 绑定手机号
    bdsjh() {
      this.$prompt("请输入手机号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1[3456789]\d{9}$/,
        inputErrorMessage: "手机号格式不正确",
      })
        .then(({ value }) => {
          this.$api.article
            .getMobileEdit({
              token: this.token,
              mobile: value,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code != 1) {
                this.$message({
                  type: "warning",
                  message: res.data.msg,
                });
              } else {
                this.userInfo.mobile = value;
                this.$message({
                  type: "success",
                  message: "手机号绑定成功",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    // 修改手机号
    xgsjh(e) {
      console.log(e);
      this.$prompt("请输入手机号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1[3456789]\d{9}$/,
        inputErrorMessage: "手机号格式不正确",
        inputValue: e,
      })
        .then(({ value }) => {
          this.$api.article
            .getMobileEdit({
              token: this.token,
              mobile: value,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code != 1) {
                this.$message({
                  type: "warning",
                  message: res.data.msg,
                });
              } else {
                this.userInfo.mobile = value;
                this.$message({
                  type: "success",
                  message: "手机号修改成功",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    // 修改性别
    xgxb(e) {
      console.log(e);
      this.$api.article
        .getGenderEdit({
          token: this.token,
          gender: e,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code != 1) {
            this.$message({
              type: "warning",
              message: res.data.msg,
            });
          } else {
            this.$message({
              type: "success",
              message: "修改成功",
            });
          }
        });
    },
    // 上传头像
    fileChange(e) {
      let that = this;
      console.log(e.target.files[0]);
      let file = e.target.files[0];
      let fd = new FormData();
      fd.append("file", file);
      fd.append("token", this.token);
      console.log(fd.get("file"));
      // 上传图片非封装api
      this.$https({
        url: "http://zt.shenyueyun.com/api/common/upload",
        method: "post",
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          let url = "http://zt.shenyueyun.com/" + res.data.data.url;
          this.userInfo.avatar = url;
          this.$api.article
            .getAvatarEdit({
              token: this.token,
              avatar: url,
            })
            .then((res) => {
              console.log(res);
              if (res.data.code == 1) {
                this.$router.go(0);
                this.$message({
                  type: "success",
                  message: "头像修改成功",
                });
              }
            });
        } else {
          this.$message({
            type: "warning",
            message: res.data.msg,
          });
        }
      });
    },
    // 上传营业执照
    onChange(files) {
      console.log(files);
      let that = this;
      let file = files.raw;
      let fd = new FormData();
      fd.append("file", file);
      fd.append("token", this.token);
      this.$https({
        url: "http://zt.shenyueyun.com/api/common/upload",
        method: "post",
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.$message({
            type: "success",
            message: "营业执照上传成功",
          });
          this.imageUrl = res.data.data.url;
        } else {
          this.$message({
            type: "warning",
            message: res.data.msg,
          });
        }
      });
    },
    // 店铺上传logo
    sclogoCli() {
      this.tpjqOff = true;
    },
    gbjqCli() {
      this.tpjqOff = false;
    },
    tpscClis(e) {
      console.log(e);
      this.imageUrl1 = e;
      this.tpjqOff = false;
    },
  },
  mounted() {
    this.styOff = this.$route.query.id;
    // 导航改变状态
    this.$store.dispatch("setMin", this.styOff);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    // 获取用户基本信息
    this.$api.article
      .getUserInfo({
        token: this.token,
      })
      .then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.userInfo = res.data.data;
          this.radio = res.data.data.gender + "";
        }
      });

    // 获取服务类型接口
    this.$api.article
      .gerServiceList({
        token: this.token,
      })
      .then((res) => {
        console.log("获取服务类型接口", res);
        let lis = res.data.data;
        let arr = [];
        for (let i = 0; i < lis.length; i++) {
          let obj = {
            value: lis[i].id,
            label: lis[i].name,
          };
          arr.push(obj);
        }
        this.options = arr;
        // 获取店铺信息
        this.$api.article
          .getSelect({
            token: this.token,
          })
          .then((res) => {
            console.log("获取店铺信息", res);
            let xx = res.data.data;
            this.is_shopcom = res.data.data.is_shopcom;
            if (res.data.data.is_shopcom == 1) {
              this.dpxxOr = true;
              this.frxm = res.data.data.person_name;
              this.frlxfs = res.data.data.person_phone;
              this.frsfzh = res.data.data.person_code;
              this.tyshbm = res.data.data.social_coding;
              this.imageUrl = res.data.data.businessimage;
              this.imageUrl1 = res.data.data.logo;
              this.dpmc = res.data.data.shop_name;
              this.dpxxdz = res.data.data.address;
              // this.value1 = res.data.data.service_ids.split(",");
              xx.person_names = this.$enc.plusXing(xx.person_name, 1, 0);
              xx.person_phones = this.$enc.plusXing(xx.person_phone, 3, 4);
              xx.person_codes = this.$enc.plusXing(xx.person_code, 6, 4);
              xx.service_ids = xx.service_ids.split(",");
              console.log(this.value1);
              let arrs = [];
              for (let j = 0; j < xx.service_ids.length; j++) {
                // console.log(xx.service_ids[j]);
                xx.service_ids[j] = parseInt(xx.service_ids[j]);
                for (let s = 0; s < this.options.length; s++) {
                  if (xx.service_ids[j] == this.options[s].value) {
                    arrs.push(this.options[s]);
                    break;
                  }
                }
              }
              this.value1 = xx.service_ids;
              xx.service_idss = arrs;
              this.dpxxDat = xx;
              this.url = "http://zt.shenyueyun.com" + xx.businessimage;
              this.url1 = "http://zt.shenyueyun.com" + xx.logo;
              (this.srcList = ["http://zt.shenyueyun.com" + xx.businessimage]),
                (this.srcList1 = ["http://zt.shenyueyun.com" + xx.logo]),
                console.log(xx);
            } else {
              this.dpxxOr = false;
            }
          });
      });
  },
  computed: {
    ssnav() {
      return this.$store.state.minNav;
    },
  },
  components: {
    Map,
    croppers,
  },
};
</script>

<style lang="scss" scoped>
</style>