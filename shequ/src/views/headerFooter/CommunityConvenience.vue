<template>
  <div class="communityConvenience">
    <!--banner-->
    <div class="banner">
      <div class="sqBox">
        <div class="banner-box">
          <div class="box-txt">
            <p class="box-top webfont">社区便民</p>
            <p class="box-bot">满足居民群众需求、提高人民生活质量</p>
          </div>
        </div>
      </div>
    </div>
    <!--内容模块-->
    <div class="sqbmnrmo">
      <div class="sqBox">
        <!--生活缴费-->
        <div class="sqshjf">
          <div class="imgList">
            <ul>
              <li v-for="(item,index) in imgList" :key="index" @click="imgCli(index)">
                <img :src="item.imgUrl" alt />
                <p :class="imgIndex==index?'sty'+index:''">{{item.name}}</p>
              </li>
            </ul>
          </div>
          <!--服务分类-->
          <div class="flNav">
            <div class="fl1">
              <div class="fl1-l">
                <span>服务类别：</span>
              </div>
              <div class="fl1-r">
                <template v-for="(item,index) in fl1List">
                  <span
                    :key="index"
                    :class="fl1Index==index?'sty':''"
                    @click="fl1Cli(index,item.name)"
                  >{{item.name}}</span>
                </template>
              </div>
            </div>
            <div class="fl2">
              <div class="fl2-l">
                <span>服务区域：</span>
              </div>
              <div class="fl2-r">
                <template v-for="(item,index) in fl1List">
                  <span
                    :key="index"
                    :class="fl2Index==index?'sty':''"
                    @click="fl2Cli(index)"
                  >{{item.name}}</span>
                </template>
              </div>
            </div>
          </div>
          <!--社区便民-->
          <div class="sqbmFw">
            <p class="sqbmFw-title">社区便民</p>
            <div class="sqbmFw-lists">
              <ul>
                <li>
                  <div class="lists-box">
                    <div class="box-top" @click="jrspxq">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="lists-box">
                    <div class="box-top">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="lists-box">
                    <div class="box-top">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="lists-box">
                    <div class="box-top">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="lists-box">
                    <div class="box-top">
                      <img src="img/sqbmzw.png" alt />
                    </div>
                    <p class="box-txt">单间 | 实图，无中介随时看房，月...</p>
                    <div class="box-con">
                      <p class="dz">
                        <i class="iconfont">&#xe634;</i>
                        <span>阿尔泰-山水宜居</span>
                      </p>
                      <p class="hx">
                        <i class="iconfont">&#xe6c2;</i>
                        <span>主卧(4室)-28㎡</span>
                      </p>
                    </div>
                    <div class="box-jg">
                      <span class="jg-number">840</span>
                      <span class="jg-yy">元/月</span>
                    </div>
                    <div class="box-lxdh">
                      <i class="iconfont">&#xe645;</i>
                      <span>联系商家</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--分页-->
          <div class="fy">
            <div class="fy-box">
              <el-pagination background layout="prev, pager, next" :total="1000" prev-text="上一页" next-text="下一页"></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@style/headerFooter/communityConvenience.scss";
export default {
  data() {
    return {
      // 带图片导航
      imgIndex: 0,
      imgList: [
        { name: "水费", imgUrl: "img/sqbmsf.png" },
        { name: "电费", imgUrl: "img/sqbmdf.png" },
        { name: "燃气费", imgUrl: "img/sqbmrqf.png" },
        { name: "物业费", imgUrl: "img/sqbmwyf.png" }
      ],
      // 分类导航
      fl1Name:'全部',
      fl1Index: 0,
      fl1List: [
        { name: "全部", id: 0 },
        { name: "保洁劳务", id: 0 },
        { name: "开锁/换锁/修锁", id: 0 },
        { name: "管道疏通", id: 0 },
        { name: "房屋租赁", id: 0 }
      ],
      fl2Index: 0,
      fl2List: [
        { name: "全部", id: 0 },
        { name: "保洁劳务", id: 0 },
        { name: "开锁/换锁/修锁", id: 0 },
        { name: "管道疏通", id: 0 },
        { name: "房屋租赁", id: 0 }
      ]
    };
  },
  mounted() {
    // 导航改变状态
    this.$store.dispatch("setNav", 1);
  },
  methods: {
    imgCli(index) {
      this.imgIndex = index;
    },
    fl1Cli(index,name) {
      this.fl1Index = index;
      this.fl1Name=name
    },
    fl2Cli(index) {
      this.fl2Index = index;
    },
    // 进入商品详情
    jrspxq(){
      if(this.fl1Name=="房屋租赁"){
        this.$router.push({path:'/productDetails1',query:{id:1}})
      }else{
        this.$router.push({path:'/productDetails',query:{id:1}})
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>