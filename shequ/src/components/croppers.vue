<template>
  <div class="cropper-component">
    <div class="info-item">
      <div class="btn-box">
        <label class="btn" for="uploads">选择图片</label>
        <input
          type="file"
          id="uploads"
          :value="imgFile"
          style="position:absolute; clip:rect(0 0 0 0);width: 1px;"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event, 1)"
        />

        <input type="button" class="operation-btn" value="+" title="放大" @click="changeScale(1)" />
        <input type="button" class="operation-btn" value="-" title="缩小" @click="changeScale(-1)" />
        <input type="button" class="operation-btn" value="↺" title="左旋转" @click="rotateLeft" />
        <input type="button" class="operation-btn" value="↻" title="右旋转" @click="rotateRight" />
        <input type="button" class="operation-btn" value="↓" title="下载" @click="down('blob')" />
        <div class="btn" @click="finish('blob')">上传头像</div>
      </div>
      <div class="operation-box">
        <div class="cropper">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
            @imgLoad="imgLoad"
          ></vueCropper>
        </div>
      </div>
      <div class="preview-box">
        <div>预览：</div>
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cropper",
  props: {
    wbl: Number,
    hbl: Number,
  },
  data() {
    return {
      token: null,
      //剪切图片上传
      crap: false,
      previews: {},
      option: {
        img: "", // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 剪切后的图片质量（0.1-1）
        full: true, // 输出原图比例截图 props名full
        outputType: "png", // 裁剪生成额图片的格式
        //fixedBox: true, // 固定截图框大小 不允许改变
        canMove: true, // 能否拖动图片
        original: false, // 上传图片是否显示原始宽高
        canMoveBox: true, // 能否拖动截图框
        autoCrop: true, // 是否默认生成截图框
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [this.wbl, this.hbl], // 截图框的宽高比例
        // autoCropWidth: 150,
        // autoCropHeight: 150,
      },
      fileName: "", // 本机文件地址
      downImg: "#",
      imgFile: "",
      uploadImgRelaPath: "", // 上传后的图片的地址（不带服务器域名）
    };
  },

  methods: {
    // 放大/缩小
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    // 坐旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    // 右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    // 上传图片（点击上传按钮）
    finish(type) {
      console.log(this.token);
      console.log("finish", type);
      let _this = this;
      let formData = new FormData();
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          let img = window.URL.createObjectURL(data);
          formData.append("file", data, _this.fileName);
          formData.append("token", this.token);
          this.$https({
            url: "http://zt.shenyueyun.com/api/common/upload",
            method: "post",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message({
                type: "success",
                message: "图片上传成功",
              });
              this.$emit("tpscCli", res.data.data.url);
            } else {
              this.$message({
                type: "warning",
                message: res.data.msg,
              });
            }
          });
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          // this.model = true;
          // this.modelSrc = data;
        });
      }
    },
    // 实时预览函数
    realTime(data) {
      console.log("realTime");
      this.previews = data;
    },
    // 下载图片
    down(type) {
      console.log("down");
      var aLink = document.createElement("a");
      aLink.download = "author-img";
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data);
          aLink.href = window.URL.createObjectURL(data);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
    },
    // 选择本地图片
    uploadImg(e, num) {
      console.log("uploadImg");
      var _this = this;
      // 上传图片
      console.log(e.target.files[0]);
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          _this.option.img = data;
        } else if (num === 2) {
          _this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log("imgLoad");
      console.log(msg);
    },
  },
  mounted() {
    // 获取token
    let token = this.$store.state.token;
    this.token = token;
  },
};
</script>

<style lang="scss" scoped>
.cropper-component {
  width: 500px;
  margin: 0 auto;
  position: relative;
  .btn-box {
    margin: 20px 0;
    .btn {
      padding: 4px 12px;
      text-align: center;
      border-radius: 4px;
      background-color: $color;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
    .operation-btn {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #eaeaea;
      cursor: pointer;
      display: inline-block;
      font-size: 20px;
      color: #333;
      padding: 0;
      margin: 0 10px;
    }
  }
  .info-item {
    padding-top: 5%;
    .operation-box {
      display: inline-block;
      .cropper {
        width: 260px;
        height: 260px;
      }
    }
    .preview-box {
      top: 60px;
      right: 10px;
      .preview {
        width: 150px;
        height: 150px;
        // border-radius: 50%;
        border: 1px solid #ccc;
        background-color: #ccc;
        margin: 5px;
        overflow: hidden;
      }
    }
  }
}
</style>