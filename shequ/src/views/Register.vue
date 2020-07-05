<template>
  <div class="Register">
    <div class="login-box">
      <div class="logio">
        <img src="@assets/img/logo.png" alt />
      </div>
      <div class="form-box">
        <p class="box-title">注册</p>
        <div class="input-box">
          <div class="xzyhlx">
            <el-select v-model="value" placeholder="请选择用户类型" @change="typeChange">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="block">
            <el-cascader
              placeholder="请选择地区"
              popper-class="popper1"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
            ></el-cascader>
          </div>
          <div class="xzyhlx" v-show="code!=null">
            <el-select v-model="value1" placeholder="请选择社区" @change="shequChange">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <p class="input-lis">
            <input type="text" v-model="userName" placeholder="请填写用户名" />
          </p>
          <p class="input-lis">
            <input type="password" v-model="ma1" placeholder="请填写密码" />
          </p>
          <p class="input-lis">
            <input type="password" v-model="ma2" placeholder="请再次填写密码" />
          </p>
          <p class="input-btn" @click="ljzc">立即注册</p>
          <p class="wjmm-zc">
            <router-link to="/login">
              <span>已有帐号</span>
              <i class="iconfont">&#xe610;</i>
            </router-link>
          </p>
        </div>
      </div>
      <div class="bq">www.xxxxxx.com Website management system | Copyright© 2019 XXX</div>
    </div>
  </div>
</template>

<script>
import "@style/register.scss";
import { regionData } from "element-china-area-data";
export default {
  data() {
    return {
      // 选择用户类型
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
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
      // 省市区
      options: regionData,
      selectedOptions: [],
      //   选择社区
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
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
      value1: "",
      // 提交数据
      type: null,
      code: null,
      streetCode: null,
      userName: "",
      ma1: "",
      ma2: ""
    };
  },
  mounted() {
    this.$api.article.getUserClassification().then(res => {
      console.log(res);
      let list = res.data.data;
      let arr = [];
      for (let i = 0; i < list.length; i++) {
        let arrl = {
          value: list[i].id,
          label: list[i].type
        };
        arr.push(arrl);
      }
      this.options1 = arr;
    });
  },
  methods: {
    // 选择用户类型
    typeChange(e) {
      console.log(e);
      this.type = e;
    },
    // 选择地区
    handleChange(value) {
      console.log(value);
      this.code = value[2];
      this.$api.article.getUserClassstreet({ code: this.code }).then(res => {
        console.log(res);
        let list = res.data.data;
        let arr = [];
        for (let i = 0; i < list.length; i++) {
          let arrl = {
            value: list[i].STREET_CODE,
            label: list[i].STREET_NAME
          };
          arr.push(arrl);
        }
        this.options2 = arr;
      });
    },
    // 选择社区
    shequChange(e) {
      console.log(e);
      this.streetCode = e;
    },
    // 注册
    ljzc() {
      if (this.type == null) {
        this.$message({
          message: "请选择用户类型",
          type: "warning"
        });
        return;
      }
      if (this.code == null) {
        this.$message({
          message: "请选择地区",
          type: "warning"
        });
        return;
      }
      if (this.streetCode == null) {
        this.$message({
          message: "请选择社区",
          type: "warning"
        });
        return;
      }
      if (this.userName == "") {
        this.$message({
          message: "请填写用户名",
          type: "warning"
        });
        return;
      }
      // let user = /^[a-zA-Z]\w{3,15}$/;
      // if (!user.test(this.userName)) {
      //   this.$message({
      //     message: "用户名不合法（4到16位字母，数字，下划线，减号）",
      //     type: "warning"
      //   });
      //   return;
      // }
      if (this.ma1 == "") {
        this.$message({
          message: "请设置用户密码",
          type: "warning"
        });
        return;
      }
      let pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      if (!pwd.test(this.ma1)) {
        this.$message({
          message:
            "密码不够安全（至少8-16个字符，至少1个大写字母，1个小写字母和1个数字）",
          type: "warning"
        });
        return;
      }
      if (this.ma2 == "") {
        this.$message({
          message: "请再次填写密码",
          type: "warning"
        });
        return;
      }
      if (this.ma1 != this.ma2) {
        this.$message({
          message: "两次密码输入不一致",
          type: "warning"
        });
        return;
      }
      this.$api.article
        .register({
          userclassId: this.type,
          AREA_CODE: this.code,
          STREET_CODE: this.streetCode,
          username: this.userName,
          password: this.ma1,
          repeatpassword: this.ma2
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            return;
          }
          if(res.data.code==-1){
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            return;
          }
          if(res.data.code==1){
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push({path:'/login'})
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>