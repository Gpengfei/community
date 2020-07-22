<template>
  <div class="serviceEvaluation1">
    <div class="sqBox">
      <div class="serviceEvaluationDetails-box">
        <ul class="ul">
          <li class="li">
            <div class="lists-box">
              <div class="lis-l">
                <div class="l-box">
                  <div class="l-img">
                    <img src="img/fwjl.png" alt />
                  </div>
                  <p class="l-js">开荒保洁、日常保洁、物业保洁、擦玻璃、清洗地毯</p>
                </div>
              </div>
              <div class="lis-r">
                <p class="r-time">
                  <span class="text">订单号：</span>
                  <span class="num">119515308597</span>
                  <span class="time">2020-06-23 17:36:09</span>
                </p>
                <div class="r-xx">
                  <p class="text">商品评分</p>
                  <p class="xx-box">
                    <i class="iconfont sty">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                    <i class="iconfont">&#xe642;</i>
                  </p>
                </div>
                <div class="r-inp">
                  <p class="text">评价晒单</p>
                  <textarea name placeholder="分享新的体验，给千万想买的人一个参考~"></textarea>
                </div>
                <div class="tjtp">
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
            <div class="tj-box">
              <span class="btn">提交评价</span>
              <el-checkbox v-model="checked">匿名提交</el-checkbox>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/mine/serviceEvaluation1.scss";
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style lang="scss" scoped>
</style>