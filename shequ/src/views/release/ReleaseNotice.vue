<template>
  <div class="releaseNotice">
    <div class="releaseHome-title">
      <p>发布通知</p>
    </div>
    <!--通知信息-->

    <div class="fwjbxx">
      <p class="titleFw">通知信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">标题</span>
          <input type="text" placeholder="请输入标题" class="inp" v-model="titles" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">选择社区</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <!--富文本编辑器-->
    <div class="fwjbxx">
      <div class="fwbbjq">
        <!--{{ msg }}-->
        <TinymceEditor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></TinymceEditor>
      </div>
    </div>
    <!--提交按钮-->
    <div class="tjan">
      <p class="tjbtn" @click="tjClis">提交</p>
    </div>
  </div>
</template>

<script>
import TinymceEditor from "@components/TinymceEditor.vue";
import "@style/release/releaseNotice.scss";
export default {
  data() {
    return {
      msg: "",
      disabled: false,
      //   选择服务区域
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

      value: "",
      token: null,
      titles: "",
    };
  },
  mounted() {
    this.$store.dispatch("setNavFb", 3);
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
    this.$api.article
      .user({
        token: this.token,
      })
      .then((res) => {
        console.log("个人信息", res);
        let qcode = res.data.AREA_CODE;
        this.$api.article
          .getUserClassstreet({
            code: qcode,
          })
          .then((res) => {
            console.log(res);
            let lisDt = res.data.data;
            let arr = [];
            for (let i = 0; i < lisDt.length; i++) {
              let obj = {
                value: lisDt[i].STREET_CODE,
                label: lisDt[i].STREET_NAME,
              };
              arr.push(obj);
            }
            this.options = arr;
          });
      });
  },
  methods: {
    // 提交
    tjClis() {
      if (this.titles == "") {
        this.$message({
          type: "warning",
          message: "请输入标题",
        });
        return;
      }
      if (this.value == "") {
        this.$message({
          type: "warning",
          message: "请选择社区",
        });
        return;
      }
      if (this.msg == "") {
        this.$message({
          type: "warning",
          message: "请编辑通知内容",
        });
        return;
      }
      this.$api.article
        .getValidateAdd({
          token: this.token,
          title: this.titles,
          content: this.msg,
          STREET_CODE: this.value,
        })
        .then((res) => {
          console.log(res);
        });
    },
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
  },
  components: {
    TinymceEditor,
  },
};
</script>

<style lang="scss" scoped>
</style>