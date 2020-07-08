<template>
  <div class="releaseHousingResources">
    <div class="releaseHome-title">
      <p>房屋租赁</p>
    </div>
    <!--租赁方式-->

    <div class="fwxzlb">
      <p class="titleFw">选择类别</p>
      <div class="fwxzlx-box">
        <span class="bt">*</span>
        <span class="text">房产</span>
        <el-radio v-model="radio" label="1">整租房</el-radio>
        <el-radio v-model="radio" label="2">合租房</el-radio>
      </div>
    </div>
    <!--房屋基本信息-->

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
    <!--租金信息-->
    <div class="fwjbxx">
      <p class="titleFw">租金信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">出租卧室</span>
          <div class="lis-inp">
            <input type="text" />
            <span>元/每月</span>
          </div>
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
    <!--详细介绍-->
    <div class="fwjbxx">
      <p class="titleFw">详细介绍</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="text">装修情况</span>
          <div class="dxk">
            <el-radio v-model="radio" label="1">毛坯</el-radio>
            <el-radio v-model="radio" label="2">简单装修</el-radio>
            <el-radio v-model="radio" label="3">精装修</el-radio>
            <el-radio v-model="radio" label="4">豪华装修</el-radio>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">房屋配置</span>
          <div class="dxk">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">出租要求</span>
          <div class="dxk">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">房源描述</span>
          <div class="dxk">
            <textarea
              name
              id
              cols="30"
              rows="10"
              placeholder="案例文本：
亮点：高档、环境优美的小区房，绿化好，24小时保安值班，电梯房。
房间：家具家电齐全，装修配置齐全，即可拎包入住。
周边：有物美、家乐福，肯德基、国美商厦，生活，购物方便。
交通：步行3分钟到一号线地铁口，10分钟到公主坟、马莲道公交。"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <!--房源上传-->
    <div class="fwjbxx">
      <p class="titleFw">房源上传</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">图片上传</span>
          <div class="sctp">
            <p
              class="sctp-ts"
            >请上传清晰、实拍的室内图片，请不要在图片上添加文字、数字、网址等内容，请勿上传名片、二维码、自拍照、风景照等与房源无关的图片，最多上传12张，每张最大10M</p>
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
    <!--联系信息-->
    <div class="fwjbxx" style="border-bottom: none;">
      <p class="titleFw">联系信息</p>
      <div class="fwjbxx-box">
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
      value: "",
      // 房屋配置
      checkAll: false,
      checkedCities: [],
      cities: [
        "冰箱",
        "电视",
        "洗衣机",
        "热水器",
        "空调",
        "宽带",
        "沙发",
        "床（独）",
        "暖气",
        "衣柜",
        "独立卫生间",
        "独立阳台",
        "电梯",
        "可做饭",
        "微波炉",
        "桌椅"
      ],
      isIndeterminate: false,
      // 出租要求
      checkList: [],
      // 上传图片
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  mounted(){
    this.$store.dispatch("setNavFb", 0);
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    // 上传图片
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>

<style lang="scss" scoped>
</style>