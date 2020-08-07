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
        <el-radio v-model="radio" label="3">出售</el-radio>
      </div>
    </div>
    <!--房屋基本信息-->

    <div class="fwjbxx">
      <p class="titleFw">基本信息</p>
      <div class="fwjbxx-box">
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">小区名称</span>
          <input type="text" placeholder="填写小区名称" class="inp" v-model="xqmc" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">房屋户型</span>
          <div class="lis-inp">
            <input type="text" v-model="s" />
            <span>室</span>
          </div>
          <div class="lis-inp">
            <input type="text" v-model="t" />
            <span>厅</span>
          </div>
          <div class="lis-inp">
            <input type="text" v-model="w" />
            <span>卫</span>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">楼层信息</span>
          <div class="lis-inp">
            <span>第</span>
            <input type="text" v-model="djc" />
            <span>层</span>
          </div>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" v-model="gjc" />
            <span>层</span>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text" v-if="radio==1">整租</span>
          <span class="text" v-if="radio==2">出租卧室</span>
          <span class="text" v-if="radio==3">出售</span>
          <el-select v-model="value" v-if="radio==2" placeholder="请选择卧室">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value1" placeholder="请选择朝向">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="lis-inp">
            <span>共</span>
            <input type="text" v-model="pmdx" />
            <span style="line-height: 32px;">
              m
              <sup>2</sup>
            </span>
          </div>
        </div>
        <!-- <div class="fwjbxx-lis" v-else>
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
        </div>-->
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
            <input type="text" v-model="je" />
            <span v-if="radio==3">元/平米</span>
            <span v-else>元/每月</span>
          </div>

          <el-select v-model="value3" v-if="radio==3" placeholder="选择租付款方式">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value2" v-else placeholder="选择租金缴纳方式">
            <el-option
              v-for="item in options2"
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
            <el-radio v-model="radio1" label="0">毛坯</el-radio>
            <el-radio v-model="radio1" label="1">简单装修</el-radio>
            <el-radio v-model="radio1" label="2">精装修</el-radio>
            <el-radio v-model="radio1" label="3">豪华装修</el-radio>
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
              <el-checkbox label="禁止养宠物"></el-checkbox>
              <el-checkbox label="只租女生"></el-checkbox>
              <el-checkbox label="只租一家人"></el-checkbox>
              <el-checkbox label="不限"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="fwjbxx-lis">
          <span class="text">房源描述</span>
          <div class="dxk">
            <textarea
              name
              id
              v-model="fyms"
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
            >请上传清晰、实拍的室内图片，请不要在图片上添加文字、数字、网址等内容，请勿上传名片、二维码、自拍照、风景照等与房源无关的图片，最多上传12张，每张最大10M</p>148
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
          <input type="text" placeholder="填写联系姓名" class="inp" v-model="xm" />
        </div>
        <div class="fwjbxx-lis">
          <span class="bt">*</span>
          <span class="text">联系方式</span>
          <input type="text" placeholder="填写联系方式" class="inp" v-model="lxfs" />
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
          value: "主卧",
          label: "主卧",
        },
        {
          value: "次卧",
          label: "次卧",
        },
        {
          value: "隔间",
          label: "隔间",
        },
      ],
      value: "",
      // 选择朝向
      options1: [
        {
          value: "东",
          label: "东",
        },
        {
          value: "西",
          label: "西",
        },
        {
          value: "南",
          label: "南",
        },
        {
          value: "北",
          label: "北",
        },
      ],
      value1: "",
      // 选择租金方式
      options2: [
        {
          value: "押一付一",
          label: "押一付一",
        },
        {
          value: "押一付三",
          label: "押一付三",
        },
        {
          value: "半年租",
          label: "半年租",
        },
        {
          value: "整年租",
          label: "整年租",
        },
      ],
      value2: "",
      // 出售付款方式
      options3: [
        {
          value: "全款",
          label: "全款",
        },
        {
          value: "贷款",
          label: "贷款",
        },
      ],
      value3: "",
      // 选择装修
      radio1: "0",
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
        "桌椅",
      ],
      isIndeterminate: false,
      // 出租要求
      checkList: [],
      // 上传图片
      dialogImageUrl: "",
      dialogVisible: false,
      // 提交的信息
      xqmc: "",
      s: "",
      t: "",
      w: "",
      djc: "",
      gjc: "",
      pmdx: "",
      je: "",
      fyms: "",
      xm: "",
      lxfs: "",
    };
  },
  mounted() {
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>