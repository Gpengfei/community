<template>
  <div class="dataAndName">
    <div class="dataAndName-nav">
      <p :class="{'sty':ssnav==2}" @click="zhCli">账号与资料</p>
      <p :class="{'sty':ssnav==3}" @click="smrzCli">实名认证</p>
    </div>
    <div class="zhxx-zl" v-if="ssnav==2">
      <div class="xgtx">
        <div class="xgtx-box">
          <input class="style_file_content" accept=".rar" type="file" id="upload_file_id" />
          <img src="@assets/img/xgtx.png" alt />
        </div>
      </div>
      <div class="jbxx">
        <p class="jbxx-title">基本信息</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">用户名</p>
              <p class="jbxx-box-r">
                <span class="xx">李三</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">手机号</p>
              <p class="jbxx-box-r">
                <span class="xx">137****5960</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">性别</p>
              <p class="jbxx-box-r">
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="jbxx">
        <p class="jbxx-title">密码设置</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">登录密码</p>
              <p class="jbxx-box-r">
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="jbxx">
        <p class="jbxx-title">第三方账号绑定</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">邮箱账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="bdOff">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">微信账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="bdOff">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">QQ账号</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="bdOff">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">新浪微博</p>
              <p class="jbxx-box-r">
                <span class="xx" v-if="bdOff">解绑</span>
                <span class="xg" v-else>绑定</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="zhxx-zl" v-if="ssnav==3">
      <div class="jbxx">
        <p class="jbxx-title">人员信息</p>
        <ul>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">用户名</p>
              <p class="jbxx-box-r">
                <span class="xx">李三</span>
                <span class="xg">修改</span>
              </p>
            </div>
          </li>
          <li>
            <div class="jbxx-lis-box">
              <p class="jbxx-box-l">手机号</p>
              <p class="jbxx-box-r">
                <span class="xx">137****5960</span>
                <span class="xg">修改</span>
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
  </div>
</template>

<script>
import "@style/mine/dataAndName.scss";
import Map from "@components/Map.vue";
export default {
  data() {
    return {
      styOff: 2,
      radio: "1",
      bdOff: false
    };
  },
  methods: {
      zhCli(){
          this.$store.dispatch("setMin", 2);
      },
      smrzCli(){
          this.$store.dispatch("setMin", 3);
      },
  },
  mounted() {
    this.styOff = this.$route.query.id;
    // 导航改变状态
    this.$store.dispatch("setMin", this.styOff);
  },
  computed: {
      ssnav(){
          return this.$store.state.minNav
      }
  },
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
</style>