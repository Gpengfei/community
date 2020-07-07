<template>
  <div class="releaseHousingResources">
    <div class="releaseHome-title">
      <p>房屋租赁</p>
    </div>
    <div class="fwxzlb">
      <p class="titleFw">选择类别</p>
      <div class="fwxzlx-box">
        <span class="bt">*</span>
        <span class="text">房产</span>
        <el-radio v-model="radio" label="1">整租房</el-radio>
        <el-radio v-model="radio" label="2">合租房</el-radio>
      </div>
    </div>
    <div class="fwjbxx">
      <p class="titleFw">基本信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">小区名称</span>
          <input type="text" placeholder="填写小区名称" class="inp" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">房屋户型</span>
          <div class="lis-inp">
            <input type="text" />
            <span>室</span>
          </div>
          <div class="lis-inp">
            <input type="text" />
            <span>厅</span>
          </div>
          <div class="lis-inp">
            <input type="text" />
            <span>卫</span>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">楼层信息</span>
          <div class="lis-inp">
            <span>第</span>
            <input type="text" />
            <span>层</span>
          </div>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" />
            <span>层</span>
          </div>
        </div>
        <div class="fwjbxx-lis" v-if="radio==2">
          <span class="bt">*</span>
          <span class="text">出租卧室</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" />
            <span style="line-height: 32px;">
              m
              <sup>2</sup>
            </span>
          </div>
        </div>
        <div class="fwjbxx-lis" v-else>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/release/releaseHousingResources.scss";
export default {
  data() {
    return {
      // 房屋类型
      radio: "1",
      //   选择卧室
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
  }
};
</script>

<style lang="scss" scoped>
</style>