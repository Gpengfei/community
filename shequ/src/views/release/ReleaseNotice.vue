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
      options: [],
      value: "",
      token: null,
      titles: "",
      ids: null,
    };
  },
  mounted() {
    this.ids = this.$route.query.ids;
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
    // 回掉内容
    if (this.ids) {
      this.$api.article
        .getMyNoticeInto({
          token: this.token,
          id: this.ids,
        })
        .then((res) => {
          console.log("回掉内容", res);
          let d = res.data.data;
          this.titles = d.title;
          this.msg = d.content;
          this.value = d.STREET_CODE + "";
        });
    }
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
      if (this.ids) {
        this.$api.article
          .getValidateAdd({
            id: this.ids,
            token: this.token,
            title: this.titles,
            content: this.msg,
            STREET_CODE: this.value,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "修改成功",
                type: "success",
              });
              this.titles = "";
              this.msg = "";
              this.value = "";
              this.$router.push("/mine");
            }
          });
      } else {
        this.$api.article
          .getValidateAdd({
            token: this.token,
            title: this.titles,
            content: this.msg,
            STREET_CODE: this.value,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                message: "通知发不成功！",
                type: "success",
              });
              this.titles = "";
              this.msg = "";
              this.value = "";
              this.$router.push("/mine");
            }
          });
      }
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