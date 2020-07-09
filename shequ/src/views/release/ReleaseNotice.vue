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
          <input type="text" placeholder="请输入标题" class="inp" />
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
        {{ msg }}
        <TinymceEditor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></TinymceEditor>
      </div>
    </div>
    <!--提交按钮-->
    <div class="tjan">
      <p class="tjbtn">提交</p>
    </div>
  </div>
</template>

<script>
import TinymceEditor from "@components/TinymceEditor.vue";
import "@style/release/releaseNotice.scss";
export default {
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      disabled: false,
      //   选择服务区域
      options: [
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

      value: ""
    };
  },
  mounted() {
    this.$store.dispatch("setNavFb", 2);
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    }
  },
  components: {
    TinymceEditor
  }
};
</script>

<style lang="scss" scoped>
</style>