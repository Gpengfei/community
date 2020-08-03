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
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">店铺名称</p>
              <p class="jbxx-box-r">
                <span class="xx">金万通保洁</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">店铺地址</p>
              <p class="jbxx-box-r">
                <span class="xx">赛罕区乌兰察布东街与东影南路交汇处南150米</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">服务类型</p>
              <p class="jbxx-box-r">
                <span class="qgk">地毯清洗</span>
                <span class="qgk">开荒保洁</span>
                <span class="qgk">物业保洁</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">地图标点</p>
              <div class="jbxx-box-rs">
                <Map />
              </div>
            </div>
          </li>
        </ul>
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
  </div>
</template>

<script>
import "@style/mine/dataAndName.scss";
import Map from "@components/Map.vue";
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
    };
  },
  methods: {
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
          newpassword: this.xmm,
          oldpassword: this.ymm,
        })
        .then((res) => {
          console.log(res);
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
  },
  computed: {
    ssnav() {
      return this.$store.state.minNav;
    },
  },
  components: {
    Map,
  },
};
</script>

<style lang="scss" scoped>
</style>