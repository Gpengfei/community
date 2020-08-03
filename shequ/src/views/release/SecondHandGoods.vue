<template>
  <div class="secondHandGoods">
    <div class="releaseHome-title">
      <p>二手物品</p>
    </div>
    <!--服务类别-->

    <div class="fwxzlb">
      <p class="titleFw">服务类别</p>
      <div class="fwxzlx-box">
        <span class="bt">*</span>
        <span class="text">房产</span>
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
          <input type="text" placeholder="请输入标题" class="inp" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">服务区域</span>
          <el-select v-model="value1" multiple placeholder="请选择">
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
    <!--服务特色描述-->
    <div class="fwjbxx">
      <p class="titleFw">服务特色描述</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">详情描述</span>
          <div class="dxk">
            <textarea
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
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
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
          <span class="text">服务区域</span>
          <el-cascader
            placeholder="请选择地区"
            popper-class="popper1"
            :options="options1"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">详细地址</span>
          <input type="text" placeholder="请输入标题" class="inp" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系姓名</span>
          <input type="text" placeholder="填写联系姓名" class="inp" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系方式</span>
          <input type="text" placeholder="填写联系方式" class="inp" />
        </div>
      </div>
    </div>
    <!--提交按钮-->
    <div class="tjan">
      <p class="tjbtn">提交</p>
    </div>
  </div>
</template>

<script>
import "@style/release/secondHandGoods.scss";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("setNavFb", 1);
  },
};
</script>

<style lang="scss" scoped>
</style>